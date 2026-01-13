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
  '/white-label-local-seo',
  '/white-label-onpage-optimization',
  '/white-label-technical-seo',
  '/white-label-local-keyword-strategy',
  '/white-label-content-development',
  '/white-label-link-building',
  '/white-label-schema-markup',
  '/white-label-nap-citations',
  
  // ============ GBP SEO (GOOGLE MAPS) HUB + SPOKES ============
  '/white-label-gbp-seo',
  '/white-label-gbp-optimization',
  '/white-label-review-management',
  '/white-label-citation-building',
  '/white-label-photo-optimization',
  '/white-label-qa-management',
  '/white-label-post-scheduling',
  
  // ============ PAID MEDIA HUB + SPOKES ============
  '/white-label-paid-media',
  '/white-label-google-ads',
  '/white-label-meta-ads',
  '/white-label-local-service-ads',
  '/white-label-retargeting-campaigns',
  '/white-label-landing-page-design',
  '/white-label-conversion-tracking',
  
  // ============ EMAIL MARKETING HUB + SPOKES ============
  '/white-label-email-marketing',
  '/white-label-campaign-strategy',
  '/white-label-list-management',
  '/white-label-automation-flows',
  '/white-label-newsletter-design',
  '/white-label-ab-testing',
  '/white-label-performance-analytics',
  
  // ============ LOCAL AUTHORITY BUILDING HUB + SPOKES ============
  '/white-label-local-authority-building',
  '/white-label-structured-citations',
  '/white-label-unstructured-citations',
  '/white-label-brand-mentions',
  '/white-label-anchor-text',
  '/white-label-sponsorships',
  
  // ============ REPORTING HUB + SPOKES ============
  '/white-label-reporting',
  '/white-label-branded-dashboards',
  '/white-label-monthly-performance-reports',
  '/white-label-rank-tracking-visibility',
  '/white-label-call-tracking-lead-attribution',
  '/white-label-roi-revenue-analysis',
  '/white-label-client-presentation-decks',
  
  // ============ CONTENT MARKETING HUB + SPOKES ============
  '/white-label-content-marketing',
  '/white-label-geographical-content',
  '/white-label-topical-authority',
  '/white-label-power-posts',
  '/white-label-ebooks-guides',
  '/white-label-lead-magnets',
  '/white-label-press-releases',
  '/white-label-case-studies',
  '/white-label-faq-content',
  '/white-label-hub-spoke-buildouts',
  
  // ============ CASE STUDIES ============
  '/case-studies',
  '/case-studies/recreational-boating-seo',
  '/case-studies/barn-restoration-seo',
  '/case-studies/florida-photography-seo',
  '/case-studies/tourist-vehicle-rentals-seo',
  '/case-studies/custom-home-builder-seo',
  '/case-studies/auction-house-seo',
  '/case-studies/dallas-plumbing-seo',
  '/case-studies/las-vegas-plumbing-seo',
  
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
