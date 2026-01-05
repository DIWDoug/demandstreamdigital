/**
 * Sitemap Generator Script
 * Generates sitemap.xml from the routes defined in the application
 * Run with: node scripts/generate-sitemap.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://dialedinweb.com';
const TODAY = new Date().toISOString().split('T')[0];

// Route configurations with priority and change frequency
const routes = [
  // Main Pages
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/about', priority: 0.8, changefreq: 'monthly' },
  { path: '/testimonials', priority: 0.8, changefreq: 'monthly' },
  { path: '/contact', priority: 0.8, changefreq: 'monthly' },
  { path: '/blog', priority: 0.8, changefreq: 'daily' },
  
  // Partner Tools Hub
  { path: '/partner-tools', priority: 0.8, changefreq: 'monthly' },
  { path: '/partner-tools/roi-calculator', priority: 0.7, changefreq: 'monthly' },
  { path: '/partner-tools/investment-calculator', priority: 0.7, changefreq: 'monthly' },
  { path: '/partner-tools/ad-budget-calculator', priority: 0.7, changefreq: 'monthly' },
  { path: '/partner-tools/seo-calculator', priority: 0.7, changefreq: 'monthly' },
  { path: '/partner-tools/email-calculator', priority: 0.7, changefreq: 'monthly' },
  { path: '/partner-tools/content-marketing-calculator', priority: 0.7, changefreq: 'monthly' },
  { path: '/partner-tools/ai-ready-check', priority: 0.7, changefreq: 'monthly' },
  
  // Services Hub
  { path: '/white-label-inbound-marketing-services', priority: 0.9, changefreq: 'weekly' },
  
  // Local SEO Hub
  { path: '/white-label-inbound-marketing-services/local-seo', priority: 0.9, changefreq: 'weekly' },
  { path: '/white-label-inbound-marketing-services/local-seo/on-page-optimization', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/local-seo/technical-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/local-seo/local-keyword-strategy', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/local-seo/content-development', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/local-seo/link-building', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/local-seo/schema-markup', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/local-seo/nap-citations', priority: 0.7, changefreq: 'monthly' },
  
  // Google Maps Hub
  { path: '/white-label-inbound-marketing-services/google-maps', priority: 0.9, changefreq: 'weekly' },
  { path: '/white-label-inbound-marketing-services/google-maps/gbp-optimization', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/google-maps/review-management', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/google-maps/citation-building', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/google-maps/photo-optimization', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/google-maps/qa-management', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/google-maps/post-scheduling', priority: 0.7, changefreq: 'monthly' },
  
  // Paid Media Hub
  { path: '/white-label-inbound-marketing-services/paid-media', priority: 0.9, changefreq: 'weekly' },
  { path: '/white-label-inbound-marketing-services/paid-media/google-ads', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/paid-media/meta-ads', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/paid-media/local-service-ads', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/paid-media/retargeting-campaigns', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/paid-media/landing-page-design', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/paid-media/conversion-tracking', priority: 0.7, changefreq: 'monthly' },
  
  // Email Marketing Hub
  { path: '/white-label-inbound-marketing-services/email-marketing', priority: 0.9, changefreq: 'weekly' },
  { path: '/white-label-inbound-marketing-services/email-marketing/campaign-strategy', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/email-marketing/list-management', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/email-marketing/automation-flows', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/email-marketing/newsletter-design', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/email-marketing/ab-testing', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/email-marketing/performance-analytics', priority: 0.7, changefreq: 'monthly' },
  
  // Content Marketing Hub + Spokes
  { path: '/white-label-inbound-marketing-services/content-marketing', priority: 0.9, changefreq: 'weekly' },
  { path: '/white-label-inbound-marketing-services/content-marketing/geographical-content', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/content-marketing/topical-content', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/content-marketing/power-posts', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/content-marketing/ebooks-guides', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/content-marketing/lead-magnets', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/content-marketing/press-releases', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/content-marketing/case-studies', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/content-marketing/aio-content', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/content-marketing/faq-content', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/content-marketing/hub-spoke-buildouts', priority: 0.7, changefreq: 'monthly' },
  
  // Authority Building Hub
  { path: '/white-label-inbound-marketing-services/local-authority-building', priority: 0.9, changefreq: 'weekly' },
  { path: '/white-label-inbound-marketing-services/local-authority-building/local-links', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/local-authority-building/unstructured-citations', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/local-authority-building/brand-mentions', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/local-authority-building/anchor-text', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/local-authority-building/sponsorships', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/local-authority-building/reputation-signals', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/local-authority-building/guest-posts-niche-edits', priority: 0.7, changefreq: 'monthly' },
  
  // Reporting Hub
  { path: '/white-label-inbound-marketing-services/reporting', priority: 0.9, changefreq: 'weekly' },
  { path: '/white-label-inbound-marketing-services/reporting/white-label-dashboards', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/reporting/monthly-performance-reports', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/reporting/rank-tracking-visibility', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/reporting/call-tracking-lead-attribution', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/reporting/roi-revenue-analysis', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-inbound-marketing-services/reporting/client-presentation-decks', priority: 0.7, changefreq: 'monthly' },
  
  // Author Pages
  { path: '/authors/doug-bryson', priority: 0.6, changefreq: 'monthly' },
];

function generateSitemap() {
  const urlEntries = routes.map(route => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

  const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(outputPath, sitemap, 'utf8');
  console.log(`✅ Sitemap generated with ${routes.length} URLs at ${outputPath}`);
}

generateSitemap();
