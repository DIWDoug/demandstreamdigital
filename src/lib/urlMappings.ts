/**
 * URL Mapping Utilities for Flat URL Structure
 * Maps between hub/spoke slugs and their corresponding flat URLs
 */

// Hub slug to flat URL mapping
export const HUB_URL_MAP: Record<string, string> = {
  'local-seo': '/white-label-local-seo',
  'google-maps': '/white-label-gbp-seo',
  'paid-media': '/white-label-paid-media',
  'email-marketing': '/white-label-email-marketing',
  'local-authority-building': '/white-label-local-authority-building',
  'reporting': '/white-label-reporting',
  'content-marketing': '/white-label-content-marketing'
};

// Flat URL prefix to hub slug mapping (reverse)
export const URL_TO_HUB_MAP: Record<string, string> = {
  'white-label-local-seo': 'local-seo',
  'white-label-gbp-seo': 'google-maps',
  'white-label-paid-media': 'paid-media',
  'white-label-email-marketing': 'email-marketing',
  'white-label-local-authority-building': 'local-authority-building',
  'white-label-reporting': 'reporting',
  'white-label-content-marketing': 'content-marketing'
};

// Spoke slug to flat URL mapping (fully flat structure)
export const SPOKE_URL_MAP: Record<string, { url: string; hubSlug: string }> = {
  // Local SEO spokes
  'on-page-optimization': { url: '/white-label-onpage-optimization', hubSlug: 'local-seo' },
  'technical-seo': { url: '/white-label-technical-seo', hubSlug: 'local-seo' },
  'local-keyword-strategy': { url: '/white-label-local-keyword-strategy', hubSlug: 'local-seo' },
  'content-development': { url: '/white-label-content-development', hubSlug: 'local-seo' },
  'link-building': { url: '/white-label-link-building', hubSlug: 'local-seo' },
  'schema-markup': { url: '/white-label-schema-markup', hubSlug: 'local-seo' },
  'nap-citations': { url: '/white-label-nap-citations', hubSlug: 'local-seo' },
  
  // GBP SEO spokes
  'gbp-optimization': { url: '/white-label-gbp-optimization', hubSlug: 'google-maps' },
  'review-management': { url: '/white-label-review-management', hubSlug: 'google-maps' },
  'citation-building': { url: '/white-label-citation-building', hubSlug: 'google-maps' },
  'post-scheduling': { url: '/white-label-post-scheduling', hubSlug: 'google-maps' },
  'photo-optimization': { url: '/white-label-photo-optimization', hubSlug: 'google-maps' },
  'qa-management': { url: '/white-label-qa-management', hubSlug: 'google-maps' },
  
  // Paid Media spokes
  'google-ads': { url: '/white-label-google-ads', hubSlug: 'paid-media' },
  'meta-ads': { url: '/white-label-meta-ads', hubSlug: 'paid-media' },
  'local-service-ads': { url: '/white-label-local-service-ads', hubSlug: 'paid-media' },
  'retargeting-campaigns': { url: '/white-label-retargeting-campaigns', hubSlug: 'paid-media' },
  'landing-page-design': { url: '/white-label-landing-page-design', hubSlug: 'paid-media' },
  'conversion-tracking': { url: '/white-label-conversion-tracking', hubSlug: 'paid-media' },
  
  // Email Marketing spokes
  'campaign-strategy': { url: '/white-label-campaign-strategy', hubSlug: 'email-marketing' },
  'list-management': { url: '/white-label-list-management', hubSlug: 'email-marketing' },
  'automation-flows': { url: '/white-label-automation-flows', hubSlug: 'email-marketing' },
  'newsletter-design': { url: '/white-label-newsletter-design', hubSlug: 'email-marketing' },
  'ab-testing': { url: '/white-label-ab-testing', hubSlug: 'email-marketing' },
  'performance-analytics': { url: '/white-label-performance-analytics', hubSlug: 'email-marketing' },
  
  // Content Marketing spokes
  'geographical-content': { url: '/white-label-geographical-content', hubSlug: 'content-marketing' },
  'topical-authority': { url: '/white-label-topical-authority', hubSlug: 'content-marketing' },
  'power-posts': { url: '/white-label-power-posts', hubSlug: 'content-marketing' },
  'ebooks-guides': { url: '/white-label-ebooks-guides', hubSlug: 'content-marketing' },
  'lead-magnets': { url: '/white-label-lead-magnets', hubSlug: 'content-marketing' },
  'press-releases': { url: '/white-label-press-releases', hubSlug: 'content-marketing' },
  'case-studies': { url: '/white-label-case-studies', hubSlug: 'content-marketing' },
  'faq-content': { url: '/white-label-faq-content', hubSlug: 'content-marketing' },
  'hub-spoke-buildouts': { url: '/white-label-hub-spoke-buildouts', hubSlug: 'content-marketing' },
  
  // Authority Building spokes
  'structured-citations': { url: '/white-label-structured-citations', hubSlug: 'local-authority-building' },
  'unstructured-citations': { url: '/white-label-unstructured-citations', hubSlug: 'local-authority-building' },
  'brand-mentions': { url: '/white-label-brand-mentions', hubSlug: 'local-authority-building' },
  'anchor-text': { url: '/white-label-anchor-text', hubSlug: 'local-authority-building' },
  'sponsorships': { url: '/white-label-sponsorships', hubSlug: 'local-authority-building' },
  
  // Reporting spokes
  'branded-dashboards': { url: '/white-label-branded-dashboards', hubSlug: 'reporting' },
  'monthly-performance-reports': { url: '/white-label-monthly-performance-reports', hubSlug: 'reporting' },
  'rank-tracking-visibility': { url: '/white-label-rank-tracking-visibility', hubSlug: 'reporting' },
  'call-tracking-lead-attribution': { url: '/white-label-call-tracking-lead-attribution', hubSlug: 'reporting' },
  'roi-revenue-analysis': { url: '/white-label-roi-revenue-analysis', hubSlug: 'reporting' },
  'client-presentation-decks': { url: '/white-label-client-presentation-decks', hubSlug: 'reporting' },
};

// Reverse mapping: flat URL path to spoke slug and hub
export const URL_TO_SPOKE_MAP: Record<string, { spokeSlug: string; hubSlug: string }> = {};
for (const [spokeSlug, { url, hubSlug }] of Object.entries(SPOKE_URL_MAP)) {
  const path = url.startsWith('/') ? url.slice(1) : url;
  URL_TO_SPOKE_MAP[path] = { spokeSlug, hubSlug };
}

/**
 * Get the flat hub URL from a hub slug
 */
export function getHubUrl(hubSlug: string): string {
  return HUB_URL_MAP[hubSlug] || `/white-label-${hubSlug}`;
}

/**
 * Get the flat spoke URL from spoke slug (fully flat, no hub in URL)
 * Can be called with just spokeSlug or with both hubSlug and spokeSlug for backwards compatibility
 */
export function getSpokeUrl(spokeSlugOrHubSlug: string, spokeSlug?: string): string {
  // If second argument provided, use it as the spoke slug (backwards compatible)
  const actualSpokeSlug = spokeSlug || spokeSlugOrHubSlug;
  
  const spokeMapping = SPOKE_URL_MAP[actualSpokeSlug];
  if (spokeMapping) {
    return spokeMapping.url;
  }
  // Fallback: just use spoke slug
  return `/white-label-${actualSpokeSlug}`;
}

/**
 * Parse a flat URL to extract hub and spoke slugs
 * Returns { hubSlug, spokeSlug } or null if not a valid service URL
 */
export function parseServiceUrl(pathname: string): { hubSlug: string; spokeSlug: string | null } | null {
  // Remove leading slash
  const path = pathname.startsWith('/') ? pathname.slice(1) : pathname;
  
  // First check if it's a spoke URL
  const spokeMapping = URL_TO_SPOKE_MAP[path];
  if (spokeMapping) {
    return { hubSlug: spokeMapping.hubSlug, spokeSlug: spokeMapping.spokeSlug };
  }
  
  // Check each hub pattern
  for (const [urlPrefix, hubSlug] of Object.entries(URL_TO_HUB_MAP)) {
    if (path === urlPrefix) {
      // This is a hub page
      return { hubSlug, spokeSlug: null };
    }
  }
  
  return null;
}

/**
 * Get canonical URL for a hub
 */
export function getCanonicalHubUrl(hubSlug: string): string {
  return `https://dialedinweb.com${getHubUrl(hubSlug)}`;
}

/**
 * Get canonical URL for a spoke
 */
export function getCanonicalSpokeUrl(hubSlug: string, spokeSlug: string): string {
  return `https://dialedinweb.com${getSpokeUrl(hubSlug, spokeSlug)}`;
}
