/**
 * Page-specific keywords for SEO optimization
 * Each page has targeted keywords that align with its content focus
 */

export const pageKeywords: Record<string, string> = {
  // Main Pages
  '/': 'plumbing marketing, HVAC marketing, plumber SEO, HVAC SEO, plumbing Google Ads, HVAC lead generation, local marketing plumbing',
  '/about': 'plumbing marketing company, HVAC marketing team, Doug Bryson SEO, Demand Stream Digital, growth marketing Dallas',
  '/testimonials': 'plumbing SEO reviews, HVAC marketing testimonials, trade marketing feedback, client success stories, plumber marketing reviews',
  '/contact': 'contact plumbing marketing, HVAC marketing consultation, plumber SEO contact, growth marketing for trades',
  '/blog': 'plumbing marketing blog, HVAC marketing tips, plumber SEO insights, trade business marketing articles',
  
  // Partner Tools
  '/partner-tools': 'marketing tools for plumbers, SEO calculators, PPC budget tools, plumbing marketing resources',
  '/partner-tools/roi-calculator': 'inbound marketing ROI calculator, marketing revenue calculator, SEO ROI estimator, plumbing ROI tool',
  '/partner-tools/investment-calculator': 'marketing investment calculator, plumbing marketing pricing, SEO cost estimator, marketing budget planner',
  '/partner-tools/ad-budget-calculator': 'PPC budget calculator, ad spend estimator, advertising ROI tool, paid media planner',
  '/partner-tools/seo-calculator': 'SEO pricing calculator, local SEO cost estimator, SEO investment tool, monthly SEO budget',
  '/partner-tools/email-calculator': 'email marketing ROI calculator, email campaign estimator, newsletter ROI tool, email list value calculator',
  '/partner-tools/content-marketing-calculator': 'content marketing ROI calculator, content cost estimator, blog ROI tool, content investment planner',
  '/partner-tools/ai-ready-check': 'AI readiness checker, LLM optimization tool, AI SEO analyzer, answer engine optimization checker',
  
  // Services Hub
  '/services': 'plumbing marketing services, HVAC marketing services, plumber SEO, HVAC paid advertising, trade business marketing',
  
  // Plumbing Service Pages
  '/plumbing-seo': 'plumbing SEO, plumber local SEO, plumbing search optimization, plumber Google rankings, plumbing citation building',
  '/plumbing-google-maps': 'plumbing Google Maps, plumber GBP optimization, plumbing local pack ranking, plumber Google Business Profile',
  '/plumbing-paid-advertising': 'plumbing Google Ads, plumber PPC management, plumbing paid media, plumber advertising',
  '/plumbing-email-marketing': 'plumbing email marketing, plumber email campaigns, plumbing newsletter, plumber email automation',
  '/plumbing-content-marketing': 'plumbing content marketing, plumber blog writing, plumbing content strategy, plumber SEO content',
  '/plumbing-reporting': 'plumbing marketing reporting, plumber SEO dashboards, plumbing analytics, plumber marketing reports',
  
  // HVAC Service Pages
  '/hvac-seo': 'HVAC SEO, HVAC local SEO, HVAC search optimization, HVAC Google rankings',
  '/hvac-google-maps': 'HVAC Google Maps, HVAC GBP optimization, HVAC local pack ranking',
  '/hvac-paid-advertising': 'HVAC Google Ads, HVAC PPC management, HVAC paid media',
  '/hvac-email-marketing': 'HVAC email marketing, HVAC email campaigns, HVAC newsletter',
  '/hvac-content-marketing': 'HVAC content marketing, HVAC blog writing, HVAC content strategy',
  '/hvac-reporting': 'HVAC marketing reporting, HVAC SEO dashboards, HVAC analytics',
};

/**
 * Get keywords for a specific page path
 */
export function getPageKeywords(path: string): string | undefined {
  return pageKeywords[path];
}

/**
 * Get keywords for spoke pages dynamically
 */
export function getSpokeKeywords(spokeSlug: string): string | undefined {
  const path = `/plumbing-${spokeSlug}`;
  return pageKeywords[path];
}