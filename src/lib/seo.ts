// Centralized SEO utilities for consistent canonical URLs and meta tags
import { SITE_URL } from "./constants";

/**
 * Generates the canonical URL for a given path.
 * Always uses non-www domain (https://demandstreamdigital.com)
 * 
 * @param path - The path relative to root (e.g., "/about" or "/blog/my-post")
 * @returns Full canonical URL without trailing slash (except for root)
 */
export const getCanonicalUrl = (path: string): string => {
  // Normalize path - ensure it starts with / but doesn't end with / (except root)
  let normalizedPath = path.startsWith("/") ? path : `/${path}`;
  
  // Remove trailing slash unless it's the root
  if (normalizedPath !== "/" && normalizedPath.endsWith("/")) {
    normalizedPath = normalizedPath.slice(0, -1);
  }
  
  // Root path special case
  if (normalizedPath === "/") {
    return `${SITE_URL}/`;
  }
  
  return `${SITE_URL}${normalizedPath}`;
};

/**
 * Generates hreflang link tags for international SEO
 * 
 * @param canonicalUrl - The full canonical URL
 * @returns Array of hreflang link objects
 */
export const getHreflangLinks = (canonicalUrl: string) => [
  { hrefLang: "en-US", href: canonicalUrl },
  { hrefLang: "en-CA", href: canonicalUrl },
  { hrefLang: "x-default", href: canonicalUrl },
];

/**
 * Generates Open Graph meta tags for social sharing
 * 
 * @param options - Meta tag options
 * @returns Object with OG meta tag properties
 */
export const getOpenGraphMeta = (options: {
  title: string;
  description: string;
  url: string;
  type?: string;
  image?: string;
}) => ({
  "og:title": options.title,
  "og:description": options.description,
  "og:url": options.url,
  "og:type": options.type || "website",
  "og:site_name": "Demand Stream Digital",
  "og:image": options.image || `${SITE_URL}/demand-stream-digital-logo.png`,
});

/**
 * Generates Twitter Card meta tags
 * 
 * @param options - Meta tag options
 * @returns Object with Twitter meta tag properties
 */
export const getTwitterMeta = (options: {
  title: string;
  description: string;
  image?: string;
}) => ({
  "twitter:card": "summary_large_image",
  "twitter:title": options.title,
  "twitter:description": options.description,
  "twitter:image": options.image || `${SITE_URL}/demand-stream-digital-logo.png`,
});
