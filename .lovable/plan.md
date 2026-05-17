## Approach

Create one shared `<HeroBullets>` component (checkmark icon + text, light/dark variants) and insert it into each hero between the subheadline and the CTA row. Trade-specific 3-bullet sets written per page, all outcome-focused (booked calls, exclusivity, ServiceTitan, etc.).

## New component

`src/components/HeroBullets.tsx` — accepts `items: string[]`, `variant: "light" | "dark"`. Renders a `<ul>` with `CheckCircle2` icons, Inter font, accent-blue checks on dark / brand-red checks on light.

## Per-page bullet copy

**Homepage Hero** (`Hero.tsx`)
- Booked calls tracked into ServiceTitan, not vanity impressions
- One market, one plumbing or HVAC operator. No competing accounts
- Built and run by Plumbing and HVAC operators, not generalists

**Services hub** (`ServicesHero.tsx`)
- Every channel tied to a booked call, not a click
- Plumbing and HVAC only. No franchise, no general contractor
- One market exclusivity across SEO, Paid, GBP, AI

**Service hub trade pages** (`ServiceHubHero.tsx`, `LSAHubHero.tsx`)
- Trade-specific playbooks, not recycled templates
- ServiceTitan or Housecall Pro revenue attribution
- Market exclusivity inside your service area

**Plumbing/HVAC SEO** (`LocalSEOTwoColumnHero.tsx` already has bullets) — leave as is.

**Plumbing/HVAC Paid Ads** (`PlumbingPaidAdsHero.tsx`, `HVACPaidAdsHero.tsx`, `PaidAdsHero.tsx`)
- Cost-per-booked-call stable inside 90 days
- 6+ service-specific campaign types built per client
- 100% of spend connected to ServiceTitan revenue

**Plumbing/HVAC Search Ads** (`PlumbingSearchAdsHero.tsx`, `HVACSearchAdsHero.tsx`)
- High-intent emergency and replacement queries first
- Call tracking on every ad with whisper for source
- Negative keyword cleanup weekly, not quarterly

**Plumbing/HVAC LSA** (`PlumbingLSAHero.tsx`, `HVACLSAHero.tsx`)
- Google Guaranteed badge management and disputes handled
- Bid tuning by service type and time of day
- Reviews and response strategy for LSA ranking

**Facebook ads** (Plumbing + HVAC)
- Maintenance plan and replacement offers, not generic awareness
- Lookalikes from your real ServiceTitan customer list
- Creative refresh every 14 days to fight fatigue

**Instagram ads** (Plumbing + HVAC)
- Before/after install reels that book calls
- Local geo-targeting inside your service map
- Lead form to ServiceTitan in under 30 seconds

**LinkedIn ads** (Plumbing + HVAC)
- Commercial property managers and facility decision makers
- Service contract and recurring maintenance offers
- Direct integration with your sales pipeline

**Programmatic** (`PlumbingProgrammaticHero.tsx`)
- Display retargeting on every quote viewer
- CTV impressions inside your service area only
- Frequency caps tuned to avoid burnout

**Web Design** (`WebDesignHero.tsx`)
- Built to convert phone calls, not win design awards
- Service Titan booking widget integrated day one
- Core Web Vitals green on launch

**Listicle hero** (`ListicleHero.tsx`)
- Vetted by Plumbing and HVAC operators
- Updated quarterly with verified results
- No pay-to-play rankings

**About** — Doug-led operator credibility bullets
- Dallas-based, Plumbing and HVAC only
- Hands-on fulfillment, not white-label resold
- 7+ year agency partner track record

**Contact**
- Reply within 1 business day
- Free 30 minute market check
- No long-term contract, no setup fee

**FreeAudit, AdScan, Grow, GrowQualifier** — already have purpose-built hero bullets, skip.

**Tools (JobCostEstimator, FinancingCalculator, PlumbingCostQuiz)**
- $120/hour OEM baseline rate
- Built from real Plumbing and HVAC job data
- Free, no email required to see results

**BlogIndex, OurBlog, Author, CaseStudies, Testimonials, BrandGuide** — content-index pages, skip (no operator hero).

## File list

Edit 22 hero components + Hero.tsx + about/contact/tools page heroes. Approx 28 files. Create 1 new component.

## Technical notes

- Insert bullets immediately after the existing subheadline `<p>` and before the CTA button row.
- Use `variant="dark"` on dark navy heroes (most), `variant="light"` on white/light heroes.
- Skip heroes that already have bullets (LocalSEOTwoColumnHero, FreeAudit, AdScan, Grow, GrowQualifier).
- No data-config changes needed for ServiceHeroGeneric (already supports bullets via subheadline object).
