# SEO Calculator Visual Alerts v1

## LC → MC Market Size Upgrade Indicator

When a low-competition industry is paired with a Major, Mega, or Large metro market, the calculator automatically upgrades the recommendation from LC (Low Competition) to MC (Medium Competition) series.

### Visual Implementation
- **Amber Badge**: Displays below the "Recommended Package" label with a `TrendingUp` icon
- **Badge Text**: "Upgraded LC → MC due to large market size"
- **Styling**: `bg-amber-500/10 border border-amber-500/30` with amber text

### Logic Location
- File: `src/pages/SEOCalculator.tsx`
- Function: `getRecommendedTier()`
- Flag: `wasUpgradedFromLC` boolean returned in the tier recommendation object

### Trigger Conditions
```typescript
const isLargeMetro = currentMetroTier === "major" || currentMetroTier === "mega" || currentMetroTier === "large";

if (competition === "low" && isLargeMetro) {
  recommendedSeries = "mc";
  series = "Low Competition + Large Market";
  wasUpgradedFromLC = true;
}
```

### Justification Block Integration
The "Why You're In This Series" section includes an additional bullet point when `wasUpgradedFromLC` is true:
- "Series upgraded from LC → MC — large metro markets require more consistent effort to maintain visibility"

## Rationale
Large metro markets (1M+ population) inherently have more competition even in traditionally "low competition" industries. The upgrade ensures partners aren't underpriced for the effort required to achieve visibility in these larger markets.
