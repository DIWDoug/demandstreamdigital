# SEO Calculator Logic v9 Final

## Overview
The SEO Calculator (src/pages/SEOCalculator.tsx) is focused exclusively on **Local SEO** (national/global options removed).

## Pricing Model
Three-series pricing based on market competition:
- **LC (Low Competition):** $604 - $1,264
- **MC (Medium Competition):** $962 - $1,622
- **HC (High Competition):** $1,319 - $1,979

## Add-ons
- **Client Success Manager (CSM):** Fixed $150/mo fee (checkbox toggle)

## MSRP Margin
- Slider range: 40% to 150% in 5% increments

## Recommendation Logic
Driven by weighted 'needScore' (0-100) with hard 'floors':
- **Aggressive strategy:** Requires minimum Tier 300
- **11-25 pages:** Requires minimum Tier 200
- **26-50 pages:** Requires minimum Tier 300
- **50+ pages:** Forces Tier 400

## Features
- Manual tier override option
- "Why You're In This Series" justification block explaining LC/MC/HC assignment
- Competition level auto-selection based on industry and metro size

## Implementation Files
- Calculator: `src/pages/SEOCalculator.tsx`
- Pricing Table: `src/components/calculators/PricingComparisonTable.tsx`
- Educational Content: `src/components/calculators/SEOEducationalContent.tsx`
