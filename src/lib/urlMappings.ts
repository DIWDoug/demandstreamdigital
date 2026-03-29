/**
 * URL Mapping Utilities for Flat URL Structure
 * Maps between hub/spoke slugs and their corresponding flat URLs
 */

// Hub slug to flat URL mapping
export const HUB_URL_MAP: Record<string, string> = {
  'local-seo': '/hvac-and-plumbing-seo',
  'google-maps': '/plumbing-google-maps',
  'paid-media': '/hvac-and-plumbing-paid-ads',
  'email-marketing': '/plumbing-email-marketing',
  'local-authority-building': '/hvac-and-plumbing-seo',
  'reporting': '/plumbing-and-hvac-reporting',
  'content-marketing': '/plumbing-content-marketing'
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
  
  // Paid Media spokes
  'google-ads': { url: '/white-label-google-ads', hubSlug: 'paid-media' },
  'meta-ads': { url: '/white-label-meta-ads', hubSlug: 'paid-media' },
  'local-service-ads': { url: '/white-label-local-service-ads', hubSlug: 'paid-media' },
  'retargeting-campaigns': { url: '/white-label-retargeting-campaigns', hubSlug: 'paid-media' },
  'landing-page-design': { url: '/white-label-landing-page-design', hubSlug: 'paid-media' },
  'conversion-tracking': { url: '/white-label-conversion-tracking', hubSlug: 'paid-media' },
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
  return HUB_URL_MAP[hubSlug] || `/hvac-and-plumbing-seo`;
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
  // Fallback: route to the closest hub
  return `/hvac-and-plumbing-seo`;
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
  return `https://demandstreamdigital.com${getHubUrl(hubSlug)}`;
}

/**
 * Get canonical URL for a spoke
 */
export function getCanonicalSpokeUrl(hubSlug: string, spokeSlug: string): string {
  return `https://demandstreamdigital.com${getSpokeUrl(hubSlug, spokeSlug)}`;
}
