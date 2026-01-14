/**
 * OG Image Mapping for all pages
 * Maps slugs to public OG image URLs for social sharing
 */

const BASE_URL = 'https://dialedinweb.com/og-images';
const DEFAULT_OG = 'https://dialedinweb.com/dialedinweb-logo.png';

// Page-level OG images
export const pageOgImages: Record<string, string> = {
  'about': `${BASE_URL}/about.jpg`,
  'case-studies': `${BASE_URL}/case-studies.jpg`,
  'contact': `${BASE_URL}/contact.png`,
  'partner-tools': `${BASE_URL}/partner-tools.png`,
  'roi-calculator': `${BASE_URL}/roi-calculator.png`,
  'seo-calculator': `${BASE_URL}/seo-calculator.jpg`,
  'ad-budget-calculator': `${BASE_URL}/ad-budget-calculator.png`,
  'investment-calculator': `${BASE_URL}/investment-calculator.png`,
  'email-calculator': `${BASE_URL}/email-calculator.jpg`,
  'content-marketing-calculator': `${BASE_URL}/content-marketing-calculator.jpg`,
  'social-media-roi-calculator': `${BASE_URL}/social-media-roi-calculator.png`,
  'ai-ready-check': `${BASE_URL}/ai-ready-check.jpg`,
  'testimonials': `${BASE_URL}/testimonials.jpg`,
  'privacy': `${BASE_URL}/privacy.jpg`,
  'terms': `${BASE_URL}/terms.jpg`,
  'thank-you': `${BASE_URL}/thank-you.jpg`,
};

/**
 * Get OG image URL for a page
 */
export function getPageOgImage(pageSlug: string): string {
  return pageOgImages[pageSlug] || DEFAULT_OG;
}

// Hub slug to OG image mapping
export const hubOgImages: Record<string, string> = {
  'local-seo': `${BASE_URL}/local-seo.jpg`,
  'google-maps': `${BASE_URL}/gbp-seo.jpg`,
  'paid-media': `${BASE_URL}/paid-media.jpg`,
  'email-marketing': `${BASE_URL}/email-marketing.jpg`,
  'content-marketing': `${BASE_URL}/content-marketing.jpg`,
  'local-authority-building': `${BASE_URL}/authority-building.jpg`,
  'reporting': `${BASE_URL}/reporting.jpg`,
};

// Spoke slug to OG image mapping
export const spokeOgImages: Record<string, string> = {
  // Local SEO spokes
  'on-page-optimization': `${BASE_URL}/on-page-optimization.jpg`,
  'technical-seo': `${BASE_URL}/technical-seo.jpg`,
  'local-keyword-strategy': `${BASE_URL}/keyword-strategy.jpg`,
  'content-development': `${BASE_URL}/content-development.jpg`,
  'link-building': `${BASE_URL}/link-building.jpg`,
  'schema-markup': `${BASE_URL}/schema-markup.jpg`,
  'nap-citations': `${BASE_URL}/citation-building.jpg`,
  
  // GBP SEO spokes
  'gbp-optimization': `${BASE_URL}/gbp-seo.jpg`,
  'review-management': `${BASE_URL}/review-management.jpg`,
  'citation-building': `${BASE_URL}/citation-building.jpg`,
  'photo-optimization': `${BASE_URL}/gbp-seo.jpg`,
  'qa-management': `${BASE_URL}/gbp-seo.jpg`,
  'post-scheduling': `${BASE_URL}/gbp-seo.jpg`,
  
  // Paid Media spokes
  'google-ads': `${BASE_URL}/google-ads.jpg`,
  'meta-ads': `${BASE_URL}/meta-ads.jpg`,
  'local-service-ads': `${BASE_URL}/local-service-ads.jpg`,
  'retargeting-campaigns': `${BASE_URL}/paid-media.jpg`,
  'landing-page-design': `${BASE_URL}/paid-media.jpg`,
  'conversion-tracking': `${BASE_URL}/paid-media.jpg`,
  
  // Email Marketing spokes
  'campaign-strategy': `${BASE_URL}/email-marketing.jpg`,
  'list-management': `${BASE_URL}/email-marketing.jpg`,
  'automation-flows': `${BASE_URL}/email-marketing.jpg`,
  'newsletter-design': `${BASE_URL}/email-marketing.jpg`,
  'ab-testing': `${BASE_URL}/email-marketing.jpg`,
  'performance-analytics': `${BASE_URL}/email-marketing.jpg`,
  
  // Content Marketing spokes
  'geographical-content': `${BASE_URL}/content-marketing.jpg`,
  'topical-authority': `${BASE_URL}/content-marketing.jpg`,
  'power-posts': `${BASE_URL}/content-development.jpg`,
  'ebooks-guides': `${BASE_URL}/content-marketing.jpg`,
  'lead-magnets': `${BASE_URL}/content-marketing.jpg`,
  'press-releases': `${BASE_URL}/content-marketing.jpg`,
  'case-studies': `${BASE_URL}/content-marketing.jpg`,
  'faq-content': `${BASE_URL}/content-marketing.jpg`,
  'hub-spoke-buildouts': `${BASE_URL}/content-marketing.jpg`,
  
  // Authority Building spokes
  'structured-citations': `${BASE_URL}/citation-building.jpg`,
  'unstructured-citations': `${BASE_URL}/authority-building.jpg`,
  'brand-mentions': `${BASE_URL}/authority-building.jpg`,
  'anchor-text': `${BASE_URL}/link-building.jpg`,
  'sponsorships': `${BASE_URL}/authority-building.jpg`,
  
  // Reporting spokes
  'branded-dashboards': `${BASE_URL}/branded-dashboards.png`,
  'monthly-performance-reports': `${BASE_URL}/reporting.jpg`,
  'rank-tracking-visibility': `${BASE_URL}/reporting.jpg`,
  'call-tracking-lead-attribution': `${BASE_URL}/call-tracking.jpg`,
  'roi-revenue-analysis': `${BASE_URL}/reporting.jpg`,
  'client-presentation-decks': `${BASE_URL}/reporting.jpg`,
};

/**
 * Get OG image URL for a hub
 */
export function getHubOgImage(hubSlug: string): string {
  return hubOgImages[hubSlug] || DEFAULT_OG;
}

/**
 * Get OG image URL for a spoke
 */
export function getSpokeOgImage(spokeSlug: string): string {
  return spokeOgImages[spokeSlug] || DEFAULT_OG;
}

/**
 * Get OG image URL based on URL path
 */
export function getServiceOgImage(hubSlug?: string, spokeSlug?: string | null): string {
  if (spokeSlug) {
    return getSpokeOgImage(spokeSlug);
  }
  if (hubSlug) {
    return getHubOgImage(hubSlug);
  }
  return DEFAULT_OG;
}
