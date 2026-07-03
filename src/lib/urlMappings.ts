/**
 * URL Mapping Utilities for Flat URL Structure
 * Maps between hub/spoke slugs and their corresponding flat URLs
 */

// Hub slug to flat URL mapping
export const HUB_URL_MAP: Record<string, string> = {
  'local-seo': '/hvac-and-plumbing-seo',
  'google-maps': '/plumbing-and-hvac-google-maps',
  'paid-media': '/hvac-and-plumbing-paid-ads',
  'email-marketing': '/plumbing-email-marketing',
  'local-authority-building': '/hvac-and-plumbing-seo',
  'reporting': '/plumbing-and-hvac-reporting',
  'content-marketing': '/plumbing-and-hvac-content-marketing'
};

// Flat URL prefix to hub slug mapping (reverse)
export const URL_TO_HUB_MAP: Record<string, string> = {
  'hvac-and-plumbing-seo': 'local-seo',
  'plumbing-and-hvac-google-maps': 'google-maps',
  'hvac-and-plumbing-paid-ads': 'paid-media',
  'plumbing-email-marketing': 'email-marketing',
  'plumbing-and-hvac-reporting': 'reporting',
  'plumbing-and-hvac-content-marketing': 'content-marketing'
};

// Spoke slug to flat URL mapping (fully flat structure)
export const SPOKE_URL_MAP: Record<string, { url: string; hubSlug: string }> = {
  // Local SEO spokes
  'on-page-optimization': { url: '/hvac-and-plumbing-seo', hubSlug: 'local-seo' },
  'technical-seo': { url: '/hvac-and-plumbing-seo', hubSlug: 'local-seo' },
  'local-keyword-strategy': { url: '/hvac-and-plumbing-seo', hubSlug: 'local-seo' },
  'content-development': { url: '/hvac-and-plumbing-seo', hubSlug: 'local-seo' },
  'link-building': { url: '/hvac-and-plumbing-seo', hubSlug: 'local-seo' },
  'schema-markup': { url: '/hvac-and-plumbing-seo', hubSlug: 'local-seo' },
  'nap-citations': { url: '/hvac-and-plumbing-seo', hubSlug: 'local-seo' },

  // Paid Media spokes
  'google-ads': { url: '/hvac-and-plumbing-paid-ads', hubSlug: 'paid-media' },
  'meta-ads': { url: '/hvac-and-plumbing-paid-ads', hubSlug: 'paid-media' },
  'local-service-ads': { url: '/plumbing-hvac-local-service-ads', hubSlug: 'paid-media' },
  'retargeting-campaigns': { url: '/hvac-and-plumbing-paid-ads', hubSlug: 'paid-media' },
  'landing-page-design': { url: '/hvac-and-plumbing-paid-ads', hubSlug: 'paid-media' },
  'conversion-tracking': { url: '/hvac-and-plumbing-paid-ads', hubSlug: 'paid-media' },
};

// Reverse mapping: flat URL path to spoke slug and hub
export const URL_TO_SPOKE_MAP: Record<string, { spokeSlug: string; hubSlug: string }> = {};
for (const [spokeSlug, { url, hubSlug }] of Object.entries(SPOKE_URL_MAP)) {
  const path = url.startsWith('/') ? url.slice(1) : url;
  URL_TO_SPOKE_MAP[path] = { spokeSlug, hubSlug };
}

export function getHubUrl(hubSlug: string): string {
  return HUB_URL_MAP[hubSlug] || `/hvac-and-plumbing-seo`;
}

export function getSpokeUrl(spokeSlugOrHubSlug: string, spokeSlug?: string): string {
  const actualSpokeSlug = spokeSlug || spokeSlugOrHubSlug;
  const spokeMapping = SPOKE_URL_MAP[actualSpokeSlug];
  if (spokeMapping) return spokeMapping.url;
  return `/hvac-and-plumbing-seo`;
}

export function parseServiceUrl(pathname: string): { hubSlug: string; spokeSlug: string | null } | null {
  const path = pathname.startsWith('/') ? pathname.slice(1) : pathname;
  const spokeMapping = URL_TO_SPOKE_MAP[path];
  if (spokeMapping) return { hubSlug: spokeMapping.hubSlug, spokeSlug: spokeMapping.spokeSlug };
  for (const [urlPrefix, hubSlug] of Object.entries(URL_TO_HUB_MAP)) {
    if (path === urlPrefix) return { hubSlug, spokeSlug: null };
  }
  return null;
}

export function getCanonicalHubUrl(hubSlug: string): string {
  return `https://demandstreamdigital.com${getHubUrl(hubSlug)}`;
}

export function getCanonicalSpokeUrl(hubSlug: string, spokeSlug: string): string {
  return `https://demandstreamdigital.com${getSpokeUrl(hubSlug, spokeSlug)}`;
}
