// Blog featured image mapping
// Maps image keys stored in database to imported image assets

import whiteLabelSeoBenefits from '@/assets/blog/white-label-seo-benefits.jpg';
import whiteLabelLocalPpc from '@/assets/blog/white-label-local-ppc.jpg';
import onPageLocalSeo from '@/assets/blog/on-page-local-seo.jpg';
import whiteLabelSocialMedia from '@/assets/blog/white-label-social-media.jpg';
import whiteLabelSeoChecklist from '@/assets/blog/white-label-seo-checklist.jpg';
import whatIsWhiteLabelMarketing from '@/assets/blog/what-is-white-label-marketing.jpg';

const blogImageMap: Record<string, string> = {
  'white-label-seo-benefits': whiteLabelSeoBenefits,
  'white-label-local-ppc': whiteLabelLocalPpc,
  'on-page-local-seo': onPageLocalSeo,
  'white-label-social-media': whiteLabelSocialMedia,
  'white-label-seo-checklist': whiteLabelSeoChecklist,
  'what-is-white-label-marketing': whatIsWhiteLabelMarketing,
};

/**
 * Resolves a blog featured image key to its actual URL
 * If the key is already a full URL or path, returns it as-is
 * Otherwise looks up the imported image from the map
 */
export function getBlogFeaturedImage(imageKey: string | null): string | null {
  if (!imageKey) return null;
  
  // If it's already a full URL or absolute path, return as-is
  if (imageKey.startsWith('http') || imageKey.startsWith('/')) {
    return imageKey;
  }
  
  // Look up in our image map
  return blogImageMap[imageKey] || null;
}
