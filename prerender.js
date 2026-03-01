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

// Clean up stale files from routes that no longer exist
const stalePaths = [
  'dist/blog.html',
  'dist/blog/index.html',
  'dist/our-blog.html',
  // Old white-label routes — now 301 redirects, no prerender needed
  'dist/white-label-inbound-marketing-services.html',
  'dist/white-label-local-seo.html',
  'dist/white-label-gbp-seo.html',
  'dist/white-label-paid-media.html',
  'dist/white-label-email-marketing.html',
  'dist/white-label-local-authority-building.html',
  'dist/white-label-reporting.html',
  'dist/white-label-content-marketing.html',
];
for (const p of stalePaths) {
  try { fs.rmSync(toAbsolute(p), { force: true }) } catch {}
}
// Also clean stale white-label directories
try { fs.rmSync(toAbsolute('dist/blog'), { recursive: true, force: true }) } catch {}


// ============================================================
// ROUTES TO PRERENDER
// Only include pages that actually serve content.
// 301-redirect paths (white-label, legacy) are excluded —
// they are handled by the Cloudflare Worker / url-router.
// ============================================================
const routesToPrerender = [
  // ── Core pages ──
  '/',
  '/about',
  '/testimonials',
  '/contact',
  '/privacy',
  '/terms',
  '/thank-you',
  '/region-blocked',
  '/free-audit',
  '/our-blog',

  // ── Authors ──
  '/authors/doug-bryson',

  // ── Listicle pages ──
  '/best-plumbing-seo-companies',
  '/best-plumbing-ppc-companies',

  // ── Case Studies ──
  '/case-studies',
  '/case-studies/recreational-boating-seo',
  '/case-studies/barn-restoration-seo',
  '/case-studies/florida-photography-seo',
  '/case-studies/tourist-vehicle-rentals-seo',
  '/case-studies/custom-home-builder-seo',
  '/case-studies/auction-house-seo',
  '/case-studies/dallas-plumbing-seo',
  '/case-studies/las-vegas-plumbing-seo',

  // ── Partner Tools ──
  '/partner-tools',
  '/partner-tools/roi-calculator',
  '/partner-tools/investment-calculator',
  '/partner-tools/ad-budget-calculator',
  '/partner-tools/seo-calculator',
  '/partner-tools/email-calculator',
  '/partner-tools/content-marketing-calculator',
  '/partner-tools/social-media-roi-calculator',
  '/partner-tools/ai-ready-check',

  // ── Homeowner Tools ──
  '/tools/job-cost-estimator',
  '/tools/financing-calculator',
  '/tools/plumbing-cost-quiz',

  // ── Trade-specific SEO Hub ──
  '/hvac-and-plumbing-seo',

  // ── Plumbing Service Pages ──
  '/plumbing-seo',
  '/plumbing-google-maps',
  '/plumbing-paid-advertising',
  '/plumbing-email-marketing',
  '/plumbing-content-marketing',
  '/plumbing-authority-building',
  '/plumbing-reporting',
  '/plumbing-and-hvac-web-design',

  // ── Plumbing Paid Advertising Channel Spokes ──
  '/plumbing-search-ads',
  '/plumbing-facebook-advertising',
  '/plumbing-instagram-advertising',
  '/plumbing-linkedin-advertising',
  '/plumbing-programmatic-advertising',

  // ── HVAC Service Pages ──
  '/hvac-seo',
  '/hvac-google-maps',
  '/hvac-paid-advertising',
  '/hvac-email-marketing',
  '/hvac-content-marketing',
  '/hvac-authority-building',
  '/hvac-reporting',

  // ── HVAC Paid Advertising Channel Spokes ──
  '/hvac-search-ads',
  '/hvac-facebook-advertising',
  '/hvac-instagram-advertising',
  '/hvac-linkedin-advertising',

  // ── Shared / Combined Service Hubs ──
  '/hvac-and-plumbing-paid-ads',
  '/ai-automation',

  // ── Web Design ──
  '/plumbing-and-hvac-web-design',
]

// Deduplicate (guard against accidental duplicates above)
const uniqueRoutes = [...new Set(routesToPrerender)]

;(async () => {
  let successCount = 0;
  let errorCount = 0;
  
  for (const route of uniqueRoutes) {
    try {
      const { html: appHtml, helmet } = render(route);

      // Build head content from helmet
      let headContent = '';
      
      if (helmet) {
        const titleStr = helmet.title?.toString?.() || '';
        const metaStr = helmet.meta?.toString?.() || '';
        const linkStr = helmet.link?.toString?.() || '';
        const scriptStr = helmet.script?.toString?.() || '';
        const noscriptStr = helmet.noscript?.toString?.() || '';
        const styleStr = helmet.style?.toString?.() || '';
        
        headContent = [titleStr, metaStr, linkStr, scriptStr, noscriptStr, styleStr]
          .filter(Boolean)
          .join('\n    ');
        
        if (titleStr) {
          const titleMatch = titleStr.match(/<title[^>]*>([^<]+)<\/title>/);
          console.log(`  Title: ${titleMatch ? titleMatch[1].substring(0, 60) + '...' : 'MISSING'}`);
        } else {
          console.log(`  WARNING: No title generated for ${route}`);
        }
        
        if (!linkStr.includes('canonical')) {
          console.log(`  WARNING: No canonical generated for ${route}`);
        }
      } else {
        console.log(`  WARNING: No helmet context for ${route}`);
      }

      // Replace placeholders
      const html = template
        .replace('<!--app-head-->', headContent)
        .replace('<!--app-html-->', appHtml)
        .replace('<!--app-path-->', route);

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
