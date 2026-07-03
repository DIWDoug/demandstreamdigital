// Blog featured image mapping
// Maps image keys stored in database to imported image assets

import onPageLocalSeo from '@/assets/blog/on-page-local-seo.jpg';

// Inline blog images - PPC
import ppcDashboardTeam from '@/assets/blog/ppc-dashboard-team.jpg';
import ppcAgencyPartnership from '@/assets/blog/ppc-agency-partnership.jpg';
import ppcLocalTargeting from '@/assets/blog/ppc-local-targeting.jpg';

// Inline blog images - Infographics (Backlinko style)
import infographicContentWorkflow from '@/assets/blog/infographic-content-workflow.jpg';
import infographicBrandConsistency from '@/assets/blog/infographic-brand-consistency.jpg';
import infographicReportingMetrics from '@/assets/blog/infographic-reporting-metrics.jpg';
import infographicSeoBenefits from '@/assets/blog/infographic-seo-benefits.jpg';
import infographicOnpageChecklist from '@/assets/blog/infographic-onpage-checklist.jpg';
import infographicPpcFunnel from '@/assets/blog/infographic-ppc-funnel.jpg';
import infographicAgencyModel from '@/assets/blog/infographic-agency-model.jpg';
import infographicRankingFactors from '@/assets/blog/infographic-ranking-factors.jpg';
import infographicBudgetSplit from '@/assets/blog/infographic-budget-split.jpg';
import infographicSeoHourlyRates from '@/assets/blog/infographic-seo-hourly-rates.png';

// Plumbing & HVAC blog featured images
import plumbingHvacWebsiteLeadLeaks from '@/assets/blog/plumbing-hvac-website-lead-leaks-fixes.jpg';
import lsaVsGoogleAdsPlumbingHvac from '@/assets/blog/lsa-vs-google-ads-plumbing-hvac.jpg';
import costPerBookedCallPlumbingHvac from '@/assets/blog/cost-per-booked-call-plumbing-hvac-google-ads.jpg';
import winGoogleMapPackPlumbingHvac from '@/assets/blog/win-google-map-pack-plumbing-hvac.jpg';

const blogImageMap: Record<string, string> = {
  'on-page-local-seo': onPageLocalSeo,
  // Inline content images - PPC
  'ppc-dashboard-team': ppcDashboardTeam,
  'ppc-agency-partnership': ppcAgencyPartnership,
  'ppc-local-targeting': ppcLocalTargeting,
  // Inline content images - Infographics
  'infographic-content-workflow': infographicContentWorkflow,
  'infographic-brand-consistency': infographicBrandConsistency,
  'infographic-reporting-metrics': infographicReportingMetrics,
  'infographic-seo-benefits': infographicSeoBenefits,
  'infographic-onpage-checklist': infographicOnpageChecklist,
  'infographic-ppc-funnel': infographicPpcFunnel,
  'infographic-agency-model': infographicAgencyModel,
  'infographic-ranking-factors': infographicRankingFactors,
  'infographic-budget-split': infographicBudgetSplit,
  'infographic-seo-hourly-rates': infographicSeoHourlyRates,
  // Plumbing & HVAC blog featured images
  'plumbing-hvac-website-lead-leaks-fixes': plumbingHvacWebsiteLeadLeaks,
  'lsa-vs-google-ads-plumbing-hvac': lsaVsGoogleAdsPlumbingHvac,
  'cost-per-booked-call-plumbing-hvac-google-ads': costPerBookedCallPlumbingHvac,
  'win-google-map-pack-plumbing-hvac': winGoogleMapPackPlumbingHvac,
  'google-maps-ai-hvac-plumbing': '/__l5e/assets-v1/659b989d-56b9-4985-9241-7aec6abc00df/google-maps-ai-hvac-plumbing.jpg',
  'google-business-profile-fields-reviews': '/__l5e/assets-v1/4e4b0705-d8a8-4a3c-9e9c-004dbcf7a003/google-business-profile-fields-reviews.jpg',
};

/**
 * Resolves a blog featured image key to its actual URL
 * If the key is already a full URL or path, returns it as-is
 * Otherwise looks up the imported image from the map
 */
export function getBlogFeaturedImage(imageKey: string | null): string | null {
  if (!imageKey) return null;
  if (imageKey.startsWith('http') || imageKey.startsWith('/')) return imageKey;
  return blogImageMap[imageKey] || null;
}
