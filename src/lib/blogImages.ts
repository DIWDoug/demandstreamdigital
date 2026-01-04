// Blog featured image mapping
// Maps image keys stored in database to imported image assets

import whiteLabelSeoBenefits from '@/assets/blog/white-label-seo-benefits.jpg';
import whiteLabelLocalPpc from '@/assets/blog/white-label-local-ppc.jpg';
import onPageLocalSeo from '@/assets/blog/on-page-local-seo.jpg';
import whiteLabelSocialMedia from '@/assets/blog/white-label-social-media.jpg';
import whiteLabelSeoChecklist from '@/assets/blog/white-label-seo-checklist.jpg';
import whatIsWhiteLabelMarketing from '@/assets/blog/what-is-white-label-marketing.jpg';

// Inline blog images - PPC
import ppcDashboardTeam from '@/assets/blog/ppc-dashboard-team.jpg';
import ppcAgencyPartnership from '@/assets/blog/ppc-agency-partnership.jpg';
import ppcLocalTargeting from '@/assets/blog/ppc-local-targeting.jpg';

// Inline blog images - Infographics (Backlinko style)
import infographicContentWorkflow from '@/assets/blog/infographic-content-workflow.jpg';
import infographicBrandConsistency from '@/assets/blog/infographic-brand-consistency.jpg';
import infographicWhiteLabelStructure from '@/assets/blog/infographic-white-label-structure.jpg';
import infographicReportingMetrics from '@/assets/blog/infographic-reporting-metrics.jpg';
import infographicSeoBenefits from '@/assets/blog/infographic-seo-benefits.jpg';
import infographicOnpageChecklist from '@/assets/blog/infographic-onpage-checklist.jpg';
import infographicPpcFunnel from '@/assets/blog/infographic-ppc-funnel.jpg';
import infographicAgencyModel from '@/assets/blog/infographic-agency-model.jpg';
import infographicRankingFactors from '@/assets/blog/infographic-ranking-factors.jpg';
import infographicBudgetSplit from '@/assets/blog/infographic-budget-split.jpg';
import infographicWhiteLabelFlow from '@/assets/blog/infographic-white-label-flow.png';
import infographicSeoHourlyRates from '@/assets/blog/infographic-seo-hourly-rates.png';

const blogImageMap: Record<string, string> = {
  'white-label-seo-benefits': whiteLabelSeoBenefits,
  'white-label-local-ppc': whiteLabelLocalPpc,
  'on-page-local-seo': onPageLocalSeo,
  'white-label-social-media': whiteLabelSocialMedia,
  'white-label-seo-checklist': whiteLabelSeoChecklist,
  'what-is-white-label-marketing': whatIsWhiteLabelMarketing,
  // Inline content images - PPC
  'ppc-dashboard-team': ppcDashboardTeam,
  'ppc-agency-partnership': ppcAgencyPartnership,
  'ppc-local-targeting': ppcLocalTargeting,
  // Inline content images - Infographics
  'infographic-content-workflow': infographicContentWorkflow,
  'infographic-brand-consistency': infographicBrandConsistency,
  'infographic-white-label-structure': infographicWhiteLabelStructure,
  'infographic-reporting-metrics': infographicReportingMetrics,
  'infographic-seo-benefits': infographicSeoBenefits,
  'infographic-onpage-checklist': infographicOnpageChecklist,
  'infographic-ppc-funnel': infographicPpcFunnel,
  'infographic-agency-model': infographicAgencyModel,
  'infographic-ranking-factors': infographicRankingFactors,
  'infographic-budget-split': infographicBudgetSplit,
  'infographic-white-label-flow': infographicWhiteLabelFlow,
  'infographic-seo-hourly-rates': infographicSeoHourlyRates,
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
