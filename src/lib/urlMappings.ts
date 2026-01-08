/**
 * URL Mapping Utilities for Flat URL Structure
 * Maps between hub/spoke slugs and their corresponding flat URLs
 */

// Hub slug to flat URL mapping
export const HUB_URL_MAP: Record<string, string> = {
  'local-seo': '/white-label-local-seo',
  'google-maps': '/white-label-google-maps-local-seo',
  'paid-media': '/white-label-paid-media',
  'email-marketing': '/white-label-email-marketing',
  'local-authority-building': '/white-label-local-authority-building',
  'reporting': '/white-label-reporting',
  'content-marketing': '/white-label-content-marketing'
};

// Flat URL prefix to hub slug mapping (reverse)
export const URL_TO_HUB_MAP: Record<string, string> = {
  'white-label-local-seo': 'local-seo',
  'white-label-google-maps-local-seo': 'google-maps',
  'white-label-paid-media': 'paid-media',
  'white-label-email-marketing': 'email-marketing',
  'white-label-local-authority-building': 'local-authority-building',
  'white-label-reporting': 'reporting',
  'white-label-content-marketing': 'content-marketing'
};

/**
 * Get the flat hub URL from a hub slug
 */
export function getHubUrl(hubSlug: string): string {
  return HUB_URL_MAP[hubSlug] || `/white-label-${hubSlug}`;
}

/**
 * Get the flat spoke URL from hub and spoke slugs
 */
export function getSpokeUrl(hubSlug: string, spokeSlug: string): string {
  const hubUrl = HUB_URL_MAP[hubSlug];
  if (hubUrl) {
    return `${hubUrl}-${spokeSlug}`;
  }
  return `/white-label-${hubSlug}-${spokeSlug}`;
}

/**
 * Parse a flat URL to extract hub and spoke slugs
 * Returns { hubSlug, spokeSlug } or null if not a valid service URL
 */
export function parseServiceUrl(pathname: string): { hubSlug: string; spokeSlug: string | null } | null {
  // Remove leading slash
  const path = pathname.startsWith('/') ? pathname.slice(1) : pathname;
  
  // Check each hub pattern
  for (const [urlPrefix, hubSlug] of Object.entries(URL_TO_HUB_MAP)) {
    if (path === urlPrefix) {
      // This is a hub page
      return { hubSlug, spokeSlug: null };
    }
    if (path.startsWith(`${urlPrefix}-`)) {
      // This is a spoke page
      const spokeSlug = path.slice(urlPrefix.length + 1);
      return { hubSlug, spokeSlug };
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
