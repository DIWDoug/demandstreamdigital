

# Phase 2: Rewrite Service Page Content for Trade-Specific Branding

## Overview

This phase updates all service page data configs and page components to remove every "white-label" reference and align canonical URLs, breadcrumbs, ecosystem links, schema names, meta keywords, and `og:site_name` with the new trade-specific URL structure and Demand Stream Digital branding.

---

## Scope of Changes

### 7 Data Config Files (`src/data/service-pages/*.ts`)

Each of the 7 config files needs identical categories of updates:

**1. Canonical URLs** -- Update from `/white-label-*` to `/plumbing-*`
- `local-seo.ts`: `/white-label-local-seo` to `/plumbing-seo`
- `google-maps.ts`: `/white-label-gbp-seo` to `/plumbing-google-maps`
- `paid-media.ts`: `/white-label-paid-media` to `/plumbing-paid-advertising`
- `email-marketing.ts`: `/white-label-email-marketing` to `/plumbing-email-marketing`
- `content-marketing.ts`: `/white-label-content-marketing` to `/plumbing-content-marketing`
- `authority.ts`: `/white-label-authority-building` to `/plumbing-authority-building`
- `reporting.ts`: `/white-label-reporting` to `/plumbing-reporting`

**2. Ecosystem `href` links** -- Every config has an `ecosystem.services` array with 6-7 service links all pointing to `/white-label-*` URLs. Update all to `/plumbing-*` equivalents.

**3. Ecosystem `ctaHref`** -- Update from `/white-label-inbound-marketing-services` to `/#services`

---

### 7 Page Components (`src/pages/services/*.tsx`)

**1. Breadcrumbs** -- Update `{ label: "Inbound Marketing Services", href: "/white-label-inbound-marketing-services" }` to `{ label: "Services", href: "/#services" }` in all 7 files.

**2. Schema names** -- Remove "White Label" from schema service names (e.g., `"White Label Local SEO Services"` to `"Local SEO for Plumbing & HVAC"`)

**3. Meta keywords** -- Remove all white-label keywords (e.g., `"white label local SEO, local SEO fulfillment, agency SEO partner"`) and replace with trade-specific keywords (e.g., `"plumbing SEO, HVAC SEO, local SEO for plumbers"`)

**4. `og:site_name`** -- Update from `"Dialed-In Web"` to `"Demand Stream Digital"` wherever present in service pages

---

### ServicePageLayout.tsx

Update the default breadcrumb from `"Inbound Marketing Services"` / `/white-label-inbound-marketing-services` to `"Services"` / `/#services`

---

### SpokePage.tsx

Update all white-label keywords in the `spokeKeywordsMap` to trade-specific equivalents (this page still renders for any legacy traffic before redirects kick in).

---

## File-by-File Summary

| File | Changes |
|------|---------|
| `src/data/service-pages/local-seo.ts` | canonicalUrl, 7 ecosystem hrefs, ctaHref |
| `src/data/service-pages/google-maps.ts` | canonicalUrl, 7 ecosystem hrefs, ctaHref |
| `src/data/service-pages/paid-media.ts` | canonicalUrl, 6 ecosystem hrefs, ctaHref |
| `src/data/service-pages/email-marketing.ts` | canonicalUrl, 6 ecosystem hrefs, ctaHref |
| `src/data/service-pages/content-marketing.ts` | canonicalUrl, 7 ecosystem hrefs, ctaHref |
| `src/data/service-pages/authority.ts` | canonicalUrl, 7 ecosystem hrefs, ctaHref |
| `src/data/service-pages/reporting.ts` | canonicalUrl, 6 ecosystem hrefs, ctaHref |
| `src/pages/services/LocalSEO.tsx` | breadcrumbs, schema name, meta keywords, og:site_name |
| `src/pages/services/GoogleMaps.tsx` | breadcrumbs, schema name, meta keywords, og:site_name |
| `src/pages/services/PaidMedia.tsx` | breadcrumbs, schema name, meta keywords, og:site_name |
| `src/pages/services/EmailMarketing.tsx` | breadcrumbs, schema name, meta keywords, og:site_name |
| `src/pages/services/ContentMarketing.tsx` | breadcrumbs, schema name, meta keywords, og:site_name |
| `src/pages/services/Authority.tsx` | breadcrumbs, schema name, meta keywords, og:site_name |
| `src/pages/services/Reporting.tsx` | breadcrumbs, schema name, meta keywords, og:site_name |
| `src/components/services/ServicePageLayout.tsx` | default breadcrumb label and href |
| `src/pages/services/SpokePage.tsx` | keyword map cleanup |

**Total: 16 files touched**

---

## What This Does NOT Cover (saved for later phases)

- Listicle page rebrand (Phase 3)
- Partner tools rebrand (Phase 4)
- Other site-wide "Dialed-In Web" references outside service pages
- The `src/data/services.ts` hub data file (used by `getHubBySlug`) -- contains its own copy that may need updating separately
- HVAC-specific page variants (currently HVAC routes point to the same components as plumbing)

