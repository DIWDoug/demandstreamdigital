import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// ============= VALID ROUTES (200 OK) =============
const VALID_ROUTES = new Set([
  '/',
  '/about',
  '/blog',
  '/our-blog',
  '/testimonials',
  '/contact',
  '/privacy',
  '/terms',
  '/thank-you',
  '/region-blocked',
  '/case-studies',
  
  // Partner Tools
  '/partner-tools',
  '/partner-tools/roi-calculator',
  '/partner-tools/investment-calculator',
  '/partner-tools/ad-budget-calculator',
  '/partner-tools/seo-calculator',
  '/partner-tools/email-calculator',
  '/partner-tools/content-marketing-calculator',
  '/partner-tools/social-media-roi-calculator',
  '/partner-tools/ai-ready-check',
  
  // Services Hub
  '/white-label-inbound-marketing-services',
  
  // Local SEO Hub + Spokes
  '/white-label-local-seo',
  '/white-label-onpage-optimization',
  '/white-label-technical-seo',
  '/white-label-local-keyword-strategy',
  '/white-label-content-development',
  '/white-label-link-building',
  '/white-label-schema-markup',
  '/white-label-nap-citations',
  
  // GBP SEO Hub + Spokes
  '/white-label-gbp-seo',
  '/white-label-gbp-optimization',
  '/white-label-review-management',
  '/white-label-citation-building',
  '/white-label-photo-optimization',
  '/white-label-qa-management',
  '/white-label-post-scheduling',
  
  // Paid Media Hub + Spokes
  '/white-label-paid-media',
  '/white-label-google-ads',
  '/white-label-meta-ads',
  '/white-label-local-service-ads',
  '/white-label-retargeting-campaigns',
  '/white-label-landing-page-design',
  '/white-label-conversion-tracking',
  
  // Email Marketing Hub + Spokes
  '/white-label-email-marketing',
  '/white-label-campaign-strategy',
  '/white-label-list-management',
  '/white-label-automation-flows',
  '/white-label-newsletter-design',
  '/white-label-ab-testing',
  '/white-label-performance-analytics',
  
  // Authority Building Hub + Spokes
  '/white-label-local-authority-building',
  '/white-label-structured-citations',
  '/white-label-unstructured-citations',
  '/white-label-brand-mentions',
  '/white-label-anchor-text',
  '/white-label-sponsorships',
  
  // Reporting Hub + Spokes
  '/white-label-reporting',
  '/white-label-branded-dashboards',
  '/white-label-monthly-performance-reports',
  '/white-label-rank-tracking-visibility',
  '/white-label-call-tracking-lead-attribution',
  '/white-label-roi-revenue-analysis',
  '/white-label-client-presentation-decks',
  
  // Content Marketing Hub + Spokes
  '/white-label-content-marketing',
  '/white-label-geographical-content',
  '/white-label-topical-authority',
  '/white-label-power-posts',
  '/white-label-ebooks-guides',
  '/white-label-lead-magnets',
  '/white-label-press-releases',
  '/white-label-case-studies',
  '/white-label-faq-content',
  '/white-label-hub-spoke-buildouts',
]);

// ============= 301 PERMANENT REDIRECTS =============
const PERMANENT_REDIRECTS: Record<string, string> = {
  // Legacy service pages -> New hubs
  '/search-engine-optimization': '/white-label-local-seo',
  '/seo': '/white-label-local-seo',
  '/seo/': '/white-label-local-seo',
  '/local-search-marketing': '/white-label-local-seo',
  '/local-search-marketing/': '/white-label-local-seo',
  '/nashville-seo': '/white-label-local-seo',
  '/nashville-seo/': '/white-label-local-seo',
  '/nashville-local-seo': '/white-label-local-seo',
  '/nashville-local-search-marketing': '/white-label-local-seo',
  
  // PPC/Paid Media redirects
  '/white-label-local-ppc': '/white-label-paid-media',
  '/white-label-local-ppc/': '/white-label-paid-media',
  '/ppc': '/white-label-paid-media',
  '/ppc/': '/white-label-paid-media',
  '/nashville-ppc': '/white-label-paid-media',
  '/nashville-ppc/': '/white-label-paid-media',
  
  // Social Media -> Content Marketing
  '/social-media-marketing': '/white-label-content-marketing',
  '/social-media-marketing/': '/white-label-content-marketing',
  '/nashville-social-media-marketing': '/white-label-content-marketing',
  '/facebook-marketing': '/white-label-content-marketing',
  '/facebook-marketing/': '/white-label-content-marketing',
  '/facebook-advertising': '/white-label-content-marketing',
  '/facebook-advertising/': '/white-label-content-marketing',
  
  // Email marketing
  '/email-marketing': '/white-label-email-marketing',
  '/email-marketing/': '/white-label-email-marketing',
  '/nashville-email-marketing': '/white-label-email-marketing',
  
  // Content marketing
  '/white-label-topical-content': '/white-label-topical-authority',
  '/white-label-topical-content/': '/white-label-topical-authority',
  '/content-marketing': '/white-label-content-marketing',
  '/content-marketing/': '/white-label-content-marketing',
  
  // About/Contact/Services
  '/about-us': '/about',
  '/about-us/': '/about',
  '/contact-us': '/contact',
  '/contact-us/': '/contact',
  '/services': '/white-label-inbound-marketing-services',
  '/services/': '/white-label-inbound-marketing-services',
  
  // Legacy calculator URLs
  '/roi-calculator': '/partner-tools/roi-calculator',
  '/investment-calculator': '/partner-tools/investment-calculator',
  '/ad-budget-calculator': '/partner-tools/ad-budget-calculator',
  '/seo-calculator': '/partner-tools/seo-calculator',
  '/email-calculator': '/partner-tools/email-calculator',
  '/content-marketing-calculator': '/partner-tools/content-marketing-calculator',
  '/ai-ready-check': '/partner-tools/ai-ready-check',
  '/agency-calculator': '/partner-tools/roi-calculator',
  
  // Nested service paths -> Flat paths
  '/white-label-inbound-marketing-services/local-seo': '/white-label-local-seo',
  '/white-label-inbound-marketing-services/google-maps': '/white-label-gbp-seo',
  '/white-label-inbound-marketing-services/paid-media': '/white-label-paid-media',
  '/white-label-inbound-marketing-services/email-marketing': '/white-label-email-marketing',
  '/white-label-inbound-marketing-services/authority-building': '/white-label-local-authority-building',
  '/white-label-inbound-marketing-services/reporting': '/white-label-reporting',
  '/white-label-inbound-marketing-services/content-marketing': '/white-label-content-marketing',
  
  // Old Nashville-specific pages
  '/nashville-tn-online-review-management': '/white-label-review-management',
  '/nashville-tn-online-reputation-management': '/white-label-review-management',
  '/nashville-mobile-website-design': '/white-label-landing-page-design',
  '/nashville-mobile-marketing': '/white-label-paid-media',
  '/nashville-mobile-advertising': '/white-label-paid-media',
  
  // WordPress remnants
  '/wp-content': '/',
  '/wp-admin': '/',
  '/wp-login.php': '/',
  '/xmlrpc.php': '/',
  
  // Misc legacy
  '/blog-old': '/blog',
  '/blog-old/': '/blog',
  '/portfolios': '/case-studies',
  '/portfolios/': '/case-studies',
};

// ============= PATTERN-BASED REDIRECTS =============
// These are patterns that should redirect to specific destinations
const PATTERN_REDIRECTS: Array<{ pattern: RegExp; destination: string }> = [
  // All /tag/* pages -> Homepage (these are dead WordPress tag pages)
  { pattern: /^\/tag\/.*$/, destination: '/' },
  
  // All /category/* pages -> Blog
  { pattern: /^\/category\/.*$/, destination: '/blog' },
  
  // All /portfolio/* pages -> Case Studies
  { pattern: /^\/portfolio\/.*$/, destination: '/case-studies' },
  
  // Old sitemap files -> Homepage
  { pattern: /^\/.*sitemap.*\.xml\/?$/, destination: '/' },
  { pattern: /^\/.*sitemap.*\.html\/?$/, destination: '/' },
  
  // Legacy WordPress paths
  { pattern: /^\/dialedin_wp\/.*$/, destination: '/' },
  { pattern: /^\/wp-includes\/.*$/, destination: '/' },
  
  // Legacy nested service paths
  { pattern: /^\/white-label-inbound-marketing-services\/local-seo\/.*$/, destination: '/white-label-local-seo' },
  { pattern: /^\/white-label-inbound-marketing-services\/google-maps\/.*$/, destination: '/white-label-gbp-seo' },
  { pattern: /^\/white-label-inbound-marketing-services\/paid-media\/.*$/, destination: '/white-label-paid-media' },
  { pattern: /^\/white-label-inbound-marketing-services\/email-marketing\/.*$/, destination: '/white-label-email-marketing' },
  { pattern: /^\/white-label-inbound-marketing-services\/authority-building\/.*$/, destination: '/white-label-local-authority-building' },
  { pattern: /^\/white-label-inbound-marketing-services\/reporting\/.*$/, destination: '/white-label-reporting' },
  { pattern: /^\/white-label-inbound-marketing-services\/content-marketing\/.*$/, destination: '/white-label-content-marketing' },
];

// ============= DYNAMIC ROUTE PATTERNS =============
// Routes that have dynamic segments
const DYNAMIC_ROUTE_PATTERNS: RegExp[] = [
  /^\/blog\/[a-z0-9-]+$/, // Blog posts
  /^\/authors\/[a-z0-9-]+$/, // Authors
  /^\/case-studies\/[a-z0-9-]+$/, // Case studies
];

// ============= STATIC ASSET PATTERNS =============
// These should be passed through without processing
const STATIC_ASSET_PATTERN = /\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|map|webp|mp4|webm|pdf)$/i;

function normalizePathname(pathname: string): string {
  // Remove trailing slash except for root
  if (pathname !== '/' && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

function isValidRoute(pathname: string): boolean {
  const normalized = normalizePathname(pathname);
  
  // Check static routes
  if (VALID_ROUTES.has(normalized)) {
    return true;
  }
  
  // Check dynamic routes
  for (const pattern of DYNAMIC_ROUTE_PATTERNS) {
    if (pattern.test(normalized)) {
      return true;
    }
  }
  
  return false;
}

function getRedirect(pathname: string): string | null {
  const normalized = normalizePathname(pathname);
  const withTrailingSlash = pathname.endsWith('/') ? pathname : pathname + '/';
  
  // Check exact redirects first (both with and without trailing slash)
  if (PERMANENT_REDIRECTS[pathname]) {
    return PERMANENT_REDIRECTS[pathname];
  }
  if (PERMANENT_REDIRECTS[normalized]) {
    return PERMANENT_REDIRECTS[normalized];
  }
  if (PERMANENT_REDIRECTS[withTrailingSlash]) {
    return PERMANENT_REDIRECTS[withTrailingSlash];
  }
  
  // Check pattern-based redirects
  for (const { pattern, destination } of PATTERN_REDIRECTS) {
    if (pattern.test(pathname) || pattern.test(normalized)) {
      return destination;
    }
  }
  
  return null;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    let pathname = '';
    
    // Get pathname from request body (POST) or query params (GET)
    if (req.method === 'POST') {
      const body = await req.json();
      pathname = body.pathname || '';
    } else {
      pathname = url.searchParams.get('pathname') || '';
    }
    
    if (!pathname) {
      return new Response(JSON.stringify({ 
        error: 'Missing pathname parameter',
        usage: 'Send POST with {"pathname": "/your-path"} or GET with ?pathname=/your-path'
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    
    console.log(`[url-router] Processing request for: ${pathname}`);
    
    // Skip static assets - let them be served normally
    if (STATIC_ASSET_PATTERN.test(pathname)) {
      console.log(`[url-router] Static asset, skipping: ${pathname}`);
      return new Response(JSON.stringify({ action: 'passthrough' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    
    // Check for redirect
    const redirectTo = getRedirect(pathname);
    if (redirectTo) {
      console.log(`[url-router] 301 Redirect: ${pathname} -> ${redirectTo}`);
      return new Response(JSON.stringify({
        action: 'redirect',
        status: 301,
        location: redirectTo,
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    
    // Check if valid route
    if (isValidRoute(pathname)) {
      console.log(`[url-router] Valid route: ${pathname}`);
      return new Response(JSON.stringify({ action: 'passthrough' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    
    // Unknown route - return 404 info
    console.log(`[url-router] 404 Not Found: ${pathname}`);
    return new Response(JSON.stringify({
      action: '404',
      status: 404,
      message: 'Page not found',
      path: pathname,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
    
  } catch (error) {
    console.error('[url-router] Error:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
