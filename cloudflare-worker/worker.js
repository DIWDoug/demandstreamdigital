/**
 * Cloudflare Worker for URL Routing
 * 
 * This worker intercepts all incoming requests and consults the Supabase
 * url-router edge function to determine:
 * 1. 301 Permanent Redirects for legacy URLs
 * 2. 404 True Not Found responses
 * 3. Passthrough for valid routes
 * 
 * Deploy to Cloudflare Workers and configure as the origin for your domain.
 */

const EDGE_FUNCTION_URL = 'https://bomcaceohbkavyjsdpls.supabase.co/functions/v1/url-router';
const ORIGIN_URL = 'https://heart-crafted-shine.lovable.app'; // Your Lovable published URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvbWNhY2VvaGJrYXZ5anNkcGxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcyODgxMTAsImV4cCI6MjA4Mjg2NDExMH0.PTnl1VQWfFMQl-iHX7fsYyz-2SCyfzRY71WUIkCu7ko';

// Static asset patterns - serve directly without routing
const STATIC_ASSET_PATTERN = /\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|map|webp|mp4|webm|pdf|xml|txt|json)$/i;

// Cache TTLs
const REDIRECT_CACHE_TTL = 86400; // 24 hours for redirects
const NOT_FOUND_CACHE_TTL = 3600; // 1 hour for 404s

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;
    
    // Skip routing for static assets
    if (STATIC_ASSET_PATTERN.test(pathname)) {
      return fetchFromOrigin(request, url);
    }
    
    // Check cache first
    const cacheKey = new Request(url.toString(), request);
    const cache = caches.default;
    let cachedResponse = await cache.match(cacheKey);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    try {
      // Query the url-router edge function
      const routerResponse = await fetch(EDGE_FUNCTION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'apikey': SUPABASE_ANON_KEY,
        },
        body: JSON.stringify({ pathname }),
      });
      
      if (!routerResponse.ok) {
        console.error(`url-router error: ${routerResponse.status}`);
        return fetchFromOrigin(request, url);
      }
      
      const routing = await routerResponse.json();
      
      // Handle different actions
      switch (routing.action) {
        case 'redirect': {
          // Build absolute redirect URL
          const redirectUrl = new URL(routing.location, url.origin);
          const response = Response.redirect(redirectUrl.toString(), routing.status || 301);
          
          // Cache the redirect
          const cacheableResponse = new Response(response.body, response);
          cacheableResponse.headers.set('Cache-Control', `public, max-age=${REDIRECT_CACHE_TTL}`);
          ctx.waitUntil(cache.put(cacheKey, cacheableResponse.clone()));
          
          return response;
        }
        
        case '404': {
          // Fetch the 404 page from origin
          const notFoundUrl = new URL('/404.html', ORIGIN_URL);
          const originResponse = await fetch(notFoundUrl.toString());
          
          // Create proper 404 response
          const response = new Response(originResponse.body, {
            status: 404,
            statusText: 'Not Found',
            headers: {
              'Content-Type': 'text/html; charset=utf-8',
              'Cache-Control': `public, max-age=${NOT_FOUND_CACHE_TTL}`,
              'X-Robots-Tag': 'noindex',
            },
          });
          
          ctx.waitUntil(cache.put(cacheKey, response.clone()));
          return response;
        }
        
        case 'passthrough':
        default:
          return fetchFromOrigin(request, url);
      }
      
    } catch (error) {
      console.error('Worker error:', error);
      // Fallback to origin on any error
      return fetchFromOrigin(request, url);
    }
  },
};

async function fetchFromOrigin(request, url) {
  // Rewrite request to origin
  const originUrl = new URL(url.pathname + url.search, ORIGIN_URL);
  
  const originRequest = new Request(originUrl.toString(), {
    method: request.method,
    headers: request.headers,
    body: request.body,
    redirect: 'manual',
  });
  
  return fetch(originRequest);
}
