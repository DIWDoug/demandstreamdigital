import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

// Polyfill localStorage for SSR (Supabase client uses it at module level)
globalThis.localStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {},
  key: () => null,
  length: 0,
};

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Ensure removed routes don't leave stale HTML behind (fixes blank /blog when old dist/blog.html exists)
try {
  fs.rmSync(toAbsolute('dist/blog.html'), { force: true })
  fs.rmSync(toAbsolute('dist/blog/index.html'), { force: true })
  fs.rmSync(toAbsolute('dist/blog'), { recursive: true, force: true })
} catch {
  // ignore
}


// Comprehensive route list with ALL pages that need prerendering
const routesToPrerender = [
  // Main pages
  '/',
  '/about',
  // Note: /blog is excluded from prerendering because it fetches dynamic content from Supabase
  // which causes hydration mismatches. It renders client-side only.
  '/testimonials',
  '/contact',
  '/privacy',
  '/terms',
  
  // Authors
  '/authors/doug-bryson',
  
  // Partner Tools
  '/partner-tools',
  '/partner-tools/roi-calculator',
  '/partner-tools/investment-calculator',
  '/partner-tools/ad-budget-calculator',
  '/partner-tools/seo-calculator',
  '/partner-tools/email-calculator',
  '/partner-tools/content-marketing-calculator',
  '/partner-tools/ai-ready-check',
  
  // Services Hub
  '/white-label-inbound-marketing-services',
  
  // ============ LOCAL SEO HUB + SPOKES ============
  '/white-label-inbound-marketing-services/local-seo',
  '/white-label-inbound-marketing-services/local-seo/on-page-optimization',
  '/white-label-inbound-marketing-services/local-seo/technical-seo',
  '/white-label-inbound-marketing-services/local-seo/local-keyword-strategy',
  '/white-label-inbound-marketing-services/local-seo/content-development',
  '/white-label-inbound-marketing-services/local-seo/link-building',
  '/white-label-inbound-marketing-services/local-seo/schema-markup',
  '/white-label-inbound-marketing-services/local-seo/nap-citations',
  
  // ============ GBP SEO (GOOGLE MAPS) HUB + SPOKES ============
  '/white-label-inbound-marketing-services/google-maps',
  '/white-label-inbound-marketing-services/google-maps/gbp-optimization',
  '/white-label-inbound-marketing-services/google-maps/review-management',
  '/white-label-inbound-marketing-services/google-maps/citation-building',
  '/white-label-inbound-marketing-services/google-maps/photo-optimization',
  '/white-label-inbound-marketing-services/google-maps/qa-management',
  '/white-label-inbound-marketing-services/google-maps/post-scheduling',
  
  // ============ PAID MEDIA HUB + SPOKES ============
  '/white-label-inbound-marketing-services/paid-media',
  '/white-label-inbound-marketing-services/paid-media/google-ads',
  '/white-label-inbound-marketing-services/paid-media/meta-ads',
  '/white-label-inbound-marketing-services/paid-media/local-service-ads',
  '/white-label-inbound-marketing-services/paid-media/retargeting-campaigns',
  '/white-label-inbound-marketing-services/paid-media/landing-page-design',
  '/white-label-inbound-marketing-services/paid-media/conversion-tracking',
  
  // ============ EMAIL MARKETING HUB + SPOKES ============
  '/white-label-inbound-marketing-services/email-marketing',
  '/white-label-inbound-marketing-services/email-marketing/campaign-strategy',
  '/white-label-inbound-marketing-services/email-marketing/list-management',
  '/white-label-inbound-marketing-services/email-marketing/automation-flows',
  '/white-label-inbound-marketing-services/email-marketing/newsletter-design',
  '/white-label-inbound-marketing-services/email-marketing/ab-testing',
  '/white-label-inbound-marketing-services/email-marketing/performance-analytics',
  
  // ============ LOCAL AUTHORITY BUILDING HUB + SPOKES ============
  '/white-label-inbound-marketing-services/local-authority-building',
  '/white-label-inbound-marketing-services/local-authority-building/local-links',
  '/white-label-inbound-marketing-services/local-authority-building/unstructured-citations',
  '/white-label-inbound-marketing-services/local-authority-building/brand-mentions',
  '/white-label-inbound-marketing-services/local-authority-building/anchor-text',
  '/white-label-inbound-marketing-services/local-authority-building/sponsorships',
  '/white-label-inbound-marketing-services/local-authority-building/reputation-signals',
  '/white-label-inbound-marketing-services/local-authority-building/guest-posts-niche-edits',
  
  // ============ REPORTING HUB + SPOKES ============
  '/white-label-inbound-marketing-services/reporting',
  '/white-label-inbound-marketing-services/reporting/white-label-dashboards',
  '/white-label-inbound-marketing-services/reporting/monthly-performance-reports',
  '/white-label-inbound-marketing-services/reporting/rank-tracking-visibility',
  '/white-label-inbound-marketing-services/reporting/call-tracking-lead-attribution',
  '/white-label-inbound-marketing-services/reporting/roi-revenue-analysis',
  '/white-label-inbound-marketing-services/reporting/client-presentation-decks',
  
  // ============ CONTENT MARKETING HUB + SPOKES ============
  '/white-label-inbound-marketing-services/content-marketing',
  '/white-label-inbound-marketing-services/content-marketing/geographical-content',
  '/white-label-inbound-marketing-services/content-marketing/topical-content',
  '/white-label-inbound-marketing-services/content-marketing/power-posts',
  '/white-label-inbound-marketing-services/content-marketing/ebooks-guides',
  '/white-label-inbound-marketing-services/content-marketing/lead-magnets',
  '/white-label-inbound-marketing-services/content-marketing/press-releases',
  '/white-label-inbound-marketing-services/content-marketing/case-studies',
  '/white-label-inbound-marketing-services/content-marketing/aio-content',
  '/white-label-inbound-marketing-services/content-marketing/faq-content',
  '/white-label-inbound-marketing-services/content-marketing/hub-spoke-buildouts',
  
  // Utility pages (noindex but prerendered for user experience)
  '/thank-you',
  '/region-blocked',
]

;(async () => {
  let successCount = 0;
  let errorCount = 0;
  
  for (const route of routesToPrerender) {
    try {
      const { html: appHtml, helmet } = render(route);

      // Build head content from helmet
      let headContent = '';
      
      if (helmet) {
        // Extract all helmet components
        const titleStr = helmet.title?.toString?.() || '';
        const metaStr = helmet.meta?.toString?.() || '';
        const linkStr = helmet.link?.toString?.() || '';
        const scriptStr = helmet.script?.toString?.() || '';
        const noscriptStr = helmet.noscript?.toString?.() || '';
        const styleStr = helmet.style?.toString?.() || '';
        
        headContent = [titleStr, metaStr, linkStr, scriptStr, noscriptStr, styleStr]
          .filter(Boolean)
          .join('\n    ');
        
        // Log what helmet is producing for debugging
        if (titleStr) {
          const titleMatch = titleStr.match(/<title[^>]*>([^<]+)<\/title>/);
          console.log(`  Title: ${titleMatch ? titleMatch[1].substring(0, 60) + '...' : 'MISSING'}`);
        } else {
          console.log(`  WARNING: No title generated for ${route}`);
        }
        
        // Check for canonical
        if (!linkStr.includes('canonical')) {
          console.log(`  WARNING: No canonical generated for ${route}`);
        }
      } else {
        console.log(`  WARNING: No helmet context for ${route}`);
      }

      // Replace placeholders
      const html = template
        .replace('<!--app-head-->', headContent)
        .replace('<!--app-html-->', appHtml);

      // Create output path
      const filePath = `dist${route === '/' ? '/index' : route}.html`;
      const absFilePath = toAbsolute(filePath);

      // Ensure directory exists
      fs.mkdirSync(path.dirname(absFilePath), { recursive: true });
      
      // Write file
      fs.writeFileSync(absFilePath, html);
      console.log('✓ pre-rendered:', filePath);
      successCount++;
      
    } catch (error) {
      console.error(`✗ Error prerendering ${route}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\nPrerender complete: ${successCount} succeeded, ${errorCount} failed`);
})()
