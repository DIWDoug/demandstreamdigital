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
  { path: '/white-label-local-seo', priority: 0.9, changefreq: 'weekly' },
  { path: '/white-label-onpage-optimization', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-technical-seo', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-local-keyword-strategy', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-content-development', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-link-building', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-schema-markup', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-nap-citations', priority: 0.7, changefreq: 'monthly' },
  
  // GBP SEO Hub
  { path: '/white-label-gbp-seo', priority: 0.9, changefreq: 'weekly' },
  { path: '/white-label-gbp-optimization', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-review-management', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-citation-building', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-photo-optimization', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-qa-management', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-post-scheduling', priority: 0.7, changefreq: 'monthly' },
  
  // Paid Media Hub
  { path: '/white-label-paid-media', priority: 0.9, changefreq: 'weekly' },
  { path: '/white-label-google-ads', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-meta-ads', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-local-service-ads', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-retargeting-campaigns', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-landing-page-design', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-conversion-tracking', priority: 0.7, changefreq: 'monthly' },
  
  // Email Marketing Hub
  { path: '/white-label-email-marketing', priority: 0.9, changefreq: 'weekly' },
  { path: '/white-label-campaign-strategy', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-list-management', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-automation-flows', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-newsletter-design', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-ab-testing', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-performance-analytics', priority: 0.7, changefreq: 'monthly' },
  
  // Content Marketing Hub + Spokes
  { path: '/white-label-content-marketing', priority: 0.9, changefreq: 'weekly' },
  { path: '/white-label-geographical-content', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-topical-authority', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-power-posts', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-ebooks-guides', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-lead-magnets', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-press-releases', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-case-studies', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-faq-content', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-hub-spoke-buildouts', priority: 0.7, changefreq: 'monthly' },
  
  // Authority Building Hub
  { path: '/white-label-local-authority-building', priority: 0.9, changefreq: 'weekly' },
  { path: '/white-label-structured-citations', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-unstructured-citations', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-brand-mentions', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-anchor-text', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-sponsorships', priority: 0.7, changefreq: 'monthly' },
  
  // Reporting Hub
  { path: '/white-label-reporting', priority: 0.9, changefreq: 'weekly' },
  { path: '/white-label-branded-dashboards', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-monthly-performance-reports', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-rank-tracking-visibility', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-call-tracking-lead-attribution', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-roi-revenue-analysis', priority: 0.7, changefreq: 'monthly' },
  { path: '/white-label-client-presentation-decks', priority: 0.7, changefreq: 'monthly' },
  
  // Author Pages
  { path: '/authors/doug-bryson', priority: 0.6, changefreq: 'monthly' },
];

function generateSitemap() {
  const urlEntries = routes.map(route => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
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
