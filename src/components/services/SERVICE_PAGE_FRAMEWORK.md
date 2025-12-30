# Service Page Framework

A streamlined, config-driven framework for building service hub pages.

## Quick Start

1. **Create a config file** in `src/data/service-pages/[slug].ts`
2. **Export a `ServicePageConfig`** object with all section content
3. **Use `ServicePageLayout`** to render the page

## Architecture

```
src/
├── types/
│   └── servicePage.ts          # Type definitions
├── components/services/
│   ├── ServicePageLayout.tsx   # Main layout component
│   └── generic/                # Reusable section components
│       ├── ServiceHeroGeneric.tsx
│       ├── ServiceProblemSection.tsx
│       ├── ServiceOutcomesSection.tsx
│       ├── ServiceRoadmapSection.tsx
│       ├── ServiceBuildingBlocksSection.tsx
│       ├── ServiceFitQualifierSection.tsx
│       ├── ServiceGroupedFAQ.tsx
│       └── ServiceEcosystemSection.tsx
└── data/service-pages/         # Config files per service
```

## Narrative Arc

1. **Hero** - Hook with value proposition
2. **Trust Reel** - Credibility
3. **Problem** - Why most approaches fail
4. **Value** (optional) - Dollar framing
5. **Outcomes** - What changes
6. **Roadmap** - The framework
7. **Building Blocks** - What's included
8. **Qualification** - Is this right for you
9. **Testimonials** - Social proof
10. **FAQ** - Handle objections
11. **Ecosystem** - Cross-sell
12. **Contact** - Final CTA

## Custom Sections

Pass custom components via `customSections` prop:

```tsx
<ServicePageLayout 
  config={config}
  valueSection={<CustomValueDashboard />}
  customSections={{
    afterOutcomes: <RankingFactors />
  }}
/>
```
