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
  
  // HVAC-specific service pages
  '/hvac-google-maps',
  '/hvac-email-marketing',
  '/hvac-content-marketing',
  '/hvac-reporting',
]);

// ============= 301 PERMANENT REDIRECTS =============
const PERMANENT_REDIRECTS: Record<string, string> = {
  // ===== LEGACY SERVICE PAGES -> NEW HUBS =====
  '/search-engine-optimization': '/white-label-local-seo',
  '/seo': '/white-label-local-seo',
  '/local-search-marketing': '/white-label-local-seo',
  '/nashville-seo': '/white-label-local-seo',
  '/nashville-local-seo': '/white-label-local-seo',
  '/nashville-local-search-marketing': '/white-label-local-seo',
  '/local-seo-company': '/white-label-local-seo',
  
  // ===== PPC/PAID MEDIA REDIRECTS =====
  '/white-label-local-ppc': '/white-label-paid-media',
  '/ppc': '/white-label-paid-media',
  '/nashville-ppc': '/white-label-paid-media',
  '/nashville-paid-search-ppc-marketing': '/white-label-paid-media',
  
  // ===== SOCIAL MEDIA -> CONTENT MARKETING =====
  '/social-media-marketing': '/white-label-content-marketing',
  '/nashville-social-media-marketing': '/white-label-content-marketing',
  '/facebook-marketing': '/white-label-content-marketing',
  '/facebook-advertising': '/white-label-content-marketing',
  
  // ===== EMAIL MARKETING =====
  '/email-marketing': '/white-label-email-marketing',
  '/nashville-email-marketing': '/white-label-email-marketing',
  
  // ===== CONTENT MARKETING =====
  '/white-label-topical-content': '/white-label-topical-authority',
  '/content-marketing': '/white-label-content-marketing',
  '/content-marketing-nashville': '/white-label-content-marketing',
  
  // ===== ABOUT/CONTACT/SERVICES =====
  '/about-us': '/about',
  '/contact-us': '/contact',
  '/services': '/white-label-inbound-marketing-services',
  
  // ===== LEGACY CALCULATOR URLs =====
  '/roi-calculator': '/partner-tools/roi-calculator',
  '/investment-calculator': '/partner-tools/investment-calculator',
  '/ad-budget-calculator': '/partner-tools/ad-budget-calculator',
  '/seo-calculator': '/partner-tools/seo-calculator',
  '/email-calculator': '/partner-tools/email-calculator',
  '/content-marketing-calculator': '/partner-tools/content-marketing-calculator',
  '/ai-ready-check': '/partner-tools/ai-ready-check',
  '/agency-calculator': '/partner-tools/roi-calculator',
  
  // ===== NESTED SERVICE PATHS -> FLAT PATHS =====
  '/white-label-inbound-marketing-services/local-seo': '/white-label-local-seo',
  '/white-label-inbound-marketing-services/google-maps': '/white-label-gbp-seo',
  '/white-label-inbound-marketing-services/paid-media': '/white-label-paid-media',
  '/white-label-inbound-marketing-services/email-marketing': '/white-label-email-marketing',
  '/white-label-inbound-marketing-services/authority-building': '/white-label-local-authority-building',
  '/white-label-inbound-marketing-services/reporting': '/white-label-reporting',
  '/white-label-inbound-marketing-services/content-marketing': '/white-label-content-marketing',
  
  // ===== NASHVILLE-SPECIFIC PAGES =====
  '/nashville-tn-online-review-management': '/white-label-review-management',
  '/nashville-tn-online-reputation-management': '/white-label-review-management',
  '/nashville-mobile-website-design': '/white-label-landing-page-design',
  '/nashville-mobile-marketing': '/white-label-paid-media',
  '/nashville-mobile-advertising': '/white-label-paid-media',
  '/nashville-online-reputation-management': '/white-label-review-management',
  '/nashville-web-design': '/white-label-landing-page-design',
  '/nashville-qr-code-marketing': '/white-label-paid-media',
  '/nashville-digital-marketing': '/',
  
  // ===== DALLAS-SPECIFIC PAGES =====
  '/dallas-seo': '/white-label-local-seo',
  '/dallas-ppc': '/white-label-paid-media',
  '/dallas-digital-marketing': '/',
  
  // ===== REPUTATION MANAGEMENT =====
  '/online-reputation-management': '/white-label-review-management',
  '/online-reputation-management-small-businesses': '/white-label-review-management',
  '/online-presence-management-for-startups': '/white-label-review-management',
  '/online-presence-audit-startups': '/white-label-review-management',
  
  // ===== CONVERSION RATE OPTIMIZATION =====
  '/conversion-rate-optimization': '/white-label-conversion-tracking',
  '/conversion-rate-optimization-what-you-need-to-know': '/blog',
  
  // ===== WORDPRESS REMNANTS =====
  '/wp-content': '/',
  '/wp-admin': '/',
  '/wp-login.php': '/',
  '/xmlrpc.php': '/',
  
  // ===== /our-blog → /blog (canonical consolidation) =====
  '/our-blog': '/blog',

  // ===== WHITE-LABEL → TRADE-SPECIFIC (Cluster A — 33 pages) =====
  '/white-label-inbound-marketing-services': '/',
  '/services': '/',

  // GBP / Google Maps spokes → plumbing-google-maps
  '/white-label-gbp-seo': '/plumbing-google-maps',
  '/white-label-gbp-optimization': '/plumbing-google-maps',
  '/white-label-review-management': '/plumbing-google-maps',
  '/white-label-citation-building': '/plumbing-google-maps',
  '/white-label-photo-optimization': '/plumbing-google-maps',
  '/white-label-qa-management': '/plumbing-google-maps',
  '/white-label-post-scheduling': '/plumbing-google-maps',

  // Email Marketing spokes → plumbing-email-marketing
  '/white-label-email-marketing': '/plumbing-email-marketing',
  '/white-label-newsletter-design': '/plumbing-email-marketing',
  '/white-label-list-management': '/plumbing-email-marketing',
  '/white-label-automation-flows': '/plumbing-email-marketing',
  '/white-label-campaign-strategy': '/plumbing-email-marketing',
  '/white-label-ab-testing': '/plumbing-email-marketing',
  '/white-label-performance-analytics': '/plumbing-email-marketing',

  // Content Marketing spokes → plumbing-content-marketing
  '/white-label-content-marketing': '/plumbing-content-marketing',
  '/white-label-case-studies': '/plumbing-content-marketing',
  '/white-label-lead-magnets': '/plumbing-content-marketing',
  '/white-label-press-releases': '/plumbing-content-marketing',
  '/white-label-ebooks-guides': '/plumbing-content-marketing',
  '/white-label-power-posts': '/plumbing-content-marketing',
  '/white-label-topical-authority': '/plumbing-content-marketing',
  '/white-label-geographical-content': '/plumbing-content-marketing',
  '/white-label-faq-content': '/plumbing-content-marketing',
  '/white-label-hub-spoke-buildouts': '/plumbing-content-marketing',

  // Reporting spokes → plumbing-reporting
  '/white-label-reporting': '/plumbing-reporting',
  '/white-label-rank-tracking-visibility': '/plumbing-reporting',
  '/white-label-monthly-performance-reports': '/plumbing-reporting',
  '/white-label-branded-dashboards': '/plumbing-reporting',
  '/white-label-client-presentation-decks': '/plumbing-reporting',
  '/white-label-roi-revenue-analysis': '/plumbing-reporting',
  '/white-label-call-tracking-lead-attribution': '/plumbing-reporting',

  // Authority Building spokes → plumbing-authority-building
  '/white-label-local-authority-building': '/plumbing-authority-building',
  '/white-label-sponsorships': '/plumbing-authority-building',
  '/white-label-brand-mentions': '/plumbing-authority-building',
  '/white-label-anchor-text': '/plumbing-authority-building',
  '/white-label-structured-citations': '/plumbing-authority-building',
  '/white-label-unstructured-citations': '/plumbing-authority-building',

  // Local SEO spokes → plumbing-seo (catch-all)
  '/white-label-local-seo': '/plumbing-seo',
  '/white-label-onpage-optimization': '/plumbing-seo',
  '/white-label-technical-seo': '/plumbing-seo',
  '/white-label-local-keyword-strategy': '/plumbing-seo',
  '/white-label-content-development': '/plumbing-content-marketing',
  '/white-label-link-building': '/plumbing-authority-building',
  '/white-label-schema-markup': '/plumbing-seo',
  '/white-label-nap-citations': '/plumbing-google-maps',

  // Paid Media spokes → hvac-and-plumbing-paid-ads
  '/white-label-paid-media': '/hvac-and-plumbing-paid-ads',
  '/white-label-google-ads': '/hvac-and-plumbing-paid-ads',
  '/white-label-meta-ads': '/hvac-and-plumbing-paid-ads',
  '/white-label-local-service-ads': '/hvac-and-plumbing-paid-ads',
  '/white-label-retargeting-campaigns': '/hvac-and-plumbing-paid-ads',
  '/white-label-landing-page-design': '/plumbing-and-hvac-web-design',
  '/white-label-conversion-tracking': '/plumbing-reporting',

  // ===== SOFT 404 FIXES =====
  '/plumbing-hvac-digital-marketing': '/',
  '/web-design': '/plumbing-and-hvac-web-design',
  '/hvac-programmatic-advertising': '/plumbing-programmatic-advertising',
  '/linkedin-advertising': '/plumbing-linkedin-advertising',
  '/instagram-advertising': '/plumbing-instagram-advertising',
  '/facebook-advertising': '/plumbing-facebook-advertising',
  '/microsoft-advertising': '/hvac-and-plumbing-paid-ads',
  '/local-services-ads': '/hvac-and-plumbing-paid-ads',
  '/google-search-ads': '/plumbing-search-ads',
  '/ai-search-optimization': '/ai-automation',
  '/aio-geo': '/ai-automation',

  // ===== MISC LEGACY =====
  '/blog-old': '/blog',
  '/portfolios': '/case-studies',
  '/careers-2': '/about',
  '/author/admin': '/about',
  '/author/dialedinweb': '/about',
  '/dialedin_wp/mobile-marketing': '/',
  
  // ===== TRAILING SLASH LEGACY PAGES =====
  '/contact/': '/contact',
  '/blog/': '/blog',
  
  
  // ===== LEGACY BLOG ARTICLE SLUGS (redirect to blog) =====
  '/moving-and-storage-seo': '/blog',
  '/local-seo-for-franchises-moving-firms': '/blog',
  '/local-link-building-outreach-101-need-know': '/blog',
  '/local-data-aggregators-matter-ranking-local-business': '/blog',
  '/local-content-marketing-kpis-which-metrics-should-your-business-track': '/blog',
  '/ppc-ad-campaigns-why-they-should-differentiate-between-mobile-and-desktop-users': '/blog',
  '/nine-ways-to-integrate-social-media-into-your-sales-strategy': '/blog',
  '/content-marketing-gone-green-3-ways-recycle-old-content': '/blog',
  '/content-marketing-101-what-you-need-to-know': '/blog',
  '/google-amp-just-one-strategy-in-a-larger-mobile-marketing-puzzle': '/blog',
  '/google-ama-search-top-7-takeaways': '/blog',
  '/guide-facebook-messenger-bots-business': '/blog',
  '/how-to-create-a-twitter-content-strategy-that-doesnt-suck': '/blog',
  '/how-to-drive-sales-with-pinterest-marketing': '/blog',
  '/how-to-handle-negative-reviews-like-a-pro': '/blog',
  '/how-to-increase-organic-traffic-with-rich-snippets-faq-schema': '/blog',
  '/how-to-optimize-your-linkedin-profile-in-5-easy-steps': '/blog',
  '/how-to-respond-to-bad-reviews-online': '/blog',
  '/how-to-save-money-in-google-ads-ppc-part-1-3': '/blog',
  '/how-to-save-money-in-google-ads-ppc-part-2': '/blog',
  '/how-to-save-money-in-google-ads-ppc-part-3': '/blog',
  '/how-to-use-reddit-for-small-business-marketing': '/blog',
  '/importance-local-seo-small-business': '/blog',
  '/keywords-for-your-local-seo-campaign': '/blog',
  '/linkedin-lead-gen-strategies': '/blog',
  '/make-social-media-roi-reality': '/blog',
  '/structuring-website-seo': '/blog',
  '/taking-the-plunge-seo-for-the-pool-spa-industry': '/blog',
  '/the-importance-of-local-seo': '/blog',
  '/the-top-5-ways-to-track-the-roi-of-social-media-marketing': '/blog',
  '/web-design-trends-2020-dallas-nashville': '/blog',
  '/what-is-schema-markup-and-why-is-it-important-for-local-seo': '/blog',
  '/what-is-voice-search-optimization': '/blog',
  '/why-blogging-is-important-for-small-business-marketing': '/blog',
  '/why-facebook-live-is-a-game-changer': '/blog',
  '/why-linkedin-is-really-good-for-business': '/blog',
  '/why-local-seo-is-critical-for-lawyers': '/blog',
  '/why-reviews-matter-for-local-seo': '/blog',
  '/why-your-business-should-be-on-facebook': '/blog',
  '/why-your-business-should-invest-in-mobile-marketing': '/blog',
  '/why-your-local-business-should-embrace-digital-marketing': '/blog',
  '/five-ways-you-can-use-instagram-stories-for-marketing': '/blog',
  '/four-free-and-simple-tips-to-improve-your-local-seo': '/blog',
  '/get-most-facebook-advertising-seasonal-sales': '/blog',
  '/how-can-digital-marketing-help-my-business': '/blog',
  '/how-do-you-find-the-right-seo-company-for-your-business': '/blog',
  '/how-facebook-business-page-can-help-your-business': '/blog',
  
  // Additional legacy blog articles
  '/10-hacks-to-solidify-your-business-positive-reputation-online': '/blog',
  '/3-awesome-local-seo-and-content-marketing-strategies-no-one-is-doing': '/blog',
  '/7-reasons-why-online-reviews-are-essential-for-your-brand': '/blog',
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
  
  // All /author/* pages -> About
  { pattern: /^\/author\/.*$/, destination: '/about' },
  
  // Date-prefixed blog posts (e.g., /2016/10/post-slug/) -> Blog
  { pattern: /^\/\d{4}\/\d{2}\/[a-z0-9-]+\/?$/, destination: '/blog' },
  { pattern: /^\/\d{4}\/\d{2}\/\d{2}\/[a-z0-9-]+\/?$/, destination: '/blog' },
  
  // Old sitemap files -> Homepage
  { pattern: /^\/.*sitemap.*\.xml\/?$/, destination: '/' },
  { pattern: /^\/.*sitemap.*\.html\/?$/, destination: '/' },
  { pattern: /^\/.*sitemap.*\.xsl\/?$/, destination: '/' },
  
  // Legacy WordPress paths
  { pattern: /^\/dialedin_wp\/.*$/, destination: '/' },
  { pattern: /^\/wp-includes\/.*$/, destination: '/' },
  { pattern: /^\/wp-content\/.*$/, destination: '/' },
  
  
  // Liquid theme WordPress remnants
  { pattern: /^\/liquid-.*-sitemap\.xml\/?$/, destination: '/' },
  
  // KML/location files
  { pattern: /^\/locations\.kml\/?$/, destination: '/' },
  
  // Main sitemap XSL
  { pattern: /^\/main-sitemap\.xsl\/?$/, destination: '/' },
  
  // Any Nashville-specific page with nested external URLs (corrupted links)
  { pattern: /^\/nashville-.*\/www\..*$/, destination: '/' },
  
  // Any portfolio with nested external URLs (corrupted links)
  { pattern: /^\/portfolio\/.*\/www\..*$/, destination: '/case-studies' },
  
  // Nashville pages -> appropriate hubs
  { pattern: /^\/nashville-.*-seo.*$/, destination: '/white-label-local-seo' },
  { pattern: /^\/nashville-.*-ppc.*$/, destination: '/white-label-paid-media' },
  { pattern: /^\/nashville-.*-marketing.*$/, destination: '/' },
  
  // Dallas pages -> appropriate hubs
  { pattern: /^\/dallas-.*-seo.*$/, destination: '/white-label-local-seo' },
  { pattern: /^\/dallas-.*-ppc.*$/, destination: '/white-label-paid-media' },
  { pattern: /^\/dallas-.*-marketing.*$/, destination: '/' },
  
  // General city-specific pages -> homepage
  { pattern: /^\/[a-z]+-digital-marketing\/?$/, destination: '/' },
  { pattern: /^\/[a-z]+-seo\/?$/, destination: '/white-label-local-seo' },
  { pattern: /^\/[a-z]+-ppc\/?$/, destination: '/white-label-paid-media' },
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
  
  // Check exact redirects first (normalized)
  if (PERMANENT_REDIRECTS[normalized]) {
    return PERMANENT_REDIRECTS[normalized];
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
