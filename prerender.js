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

// IMPORTANT: Use the actual router paths (NOT filenames)
const routesToPrerender = [
  '/',
  '/about',
  '/authors/doug-bryson',
  '/blog',
  '/white-label-inbound-marketing-services',
  '/white-label-inbound-marketing-services/local-seo',
  '/white-label-inbound-marketing-services/google-maps',
  '/white-label-inbound-marketing-services/paid-media',
  '/white-label-inbound-marketing-services/email-marketing',
  '/white-label-inbound-marketing-services/local-authority-building',
  '/white-label-inbound-marketing-services/reporting',
  '/white-label-inbound-marketing-services/content-marketing',
  '/partner-tools',
  '/partner-tools/roi-calculator',
  '/partner-tools/investment-calculator',
  '/partner-tools/ad-budget-calculator',
  '/partner-tools/seo-calculator',
  '/partner-tools/email-calculator',
  '/partner-tools/content-marketing-calculator',
  '/partner-tools/ai-ready-check',
  '/testimonials',
  '/contact',
  // noindex pages (optional but harmless)
  '/thank-you',
  '/region-blocked',
]

;(async () => {
  for (const route of routesToPrerender) {
    const { html: appHtml, helmetContext } = render(route);
    const helmet = helmetContext?.helmet;

    const head = helmet
      ? [
          helmet.title?.toString?.() ?? '',
          helmet.meta?.toString?.() ?? '',
          helmet.link?.toString?.() ?? '',
          helmet.script?.toString?.() ?? '',
          helmet.noscript?.toString?.() ?? '',
          helmet.style?.toString?.() ?? '',
        ].join('\n')
      : '';

    const html = template
      .replace('<!--app-head-->', head)
      .replace('<!--app-html-->', appHtml)

    const filePath = `dist${route === '/' ? '/index' : route}.html`
    const absFilePath = toAbsolute(filePath)

    fs.mkdirSync(path.dirname(absFilePath), { recursive: true })
    fs.writeFileSync(absFilePath, html)
    console.log('pre-rendered:', filePath)
  }
})()
