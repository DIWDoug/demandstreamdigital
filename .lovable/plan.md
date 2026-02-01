
# Eliminate Render-Blocking CSS

## Problem Statement
Lighthouse reports that the main CSS file (`/assets/index-*.css`, 23.3 KiB) is blocking page render for approximately 160ms, delaying both First Contentful Paint (FCP) and Largest Contentful Paint (LCP).

## Current Situation

The CSS is loaded synchronously via Vite's standard injection:
```html
<link rel="stylesheet" href="/assets/index-PEpWxu7o.css">
```

This blocks rendering because:
1. Browser must download the full 23.3 KiB CSS file
2. Browser must parse entire stylesheet before rendering any content
3. Nothing appears on screen until CSS is fully loaded and parsed

## Solution: Inline Critical CSS + Async Load Full Stylesheet

The optimization strategy involves three changes:

### 1. Install beasties (Vite Plugin)

Add `vite-plugin-beasties` to automatically extract and inline critical (above-the-fold) CSS during build, while deferring the rest.

### 2. Configure Vite with Beasties Plugin

Update `vite.config.ts` to include the beasties plugin:

```typescript
import { beasties } from 'vite-plugin-beasties'

export default defineConfig(({ mode }) => ({
  // existing config...
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    beasties({
      options: {
        preload: 'swap',       // Use font-display: swap for preloaded fonts
        pruneSource: false,    // Keep original CSS file intact
        inlineThreshold: 0,    // Always inline critical CSS
      }
    })
  ].filter(Boolean),
  // ...
}));
```

### 3. How Beasties Works

During build, beasties:
1. Analyzes the HTML output
2. Identifies CSS rules needed for above-the-fold content
3. Inlines those critical rules in a `<style>` tag in the `<head>`
4. Converts the main CSS `<link>` to async loading with preload

**Result:**
```html
<!-- Critical CSS inlined -->
<style>/* essential rules for initial render */</style>

<!-- Full CSS loaded asynchronously -->
<link rel="preload" href="/assets/index-*.css" as="style" onload="this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="/assets/index-*.css"></noscript>
```

---

## Technical Details

### Why Beasties Over Critters?

Beasties is the maintained successor to Critters (same author). It:
- Has active maintenance
- Works seamlessly with Vite via `vite-plugin-beasties`
- Supports modern CSS features
- Handles the SSG prerender flow

### What Gets Inlined?

Critical CSS includes:
- CSS custom properties (`:root`, `.dark` variables)
- Base typography (`body`, `h1`, `h2`, etc.)
- Layout primitives (`flex`, `grid`, basic spacing)
- Hero section styles (above-the-fold content)
- Navigation styles

Non-critical CSS (deferred):
- Component-specific styles for below-fold content
- Animation keyframes
- Interactive states for components not visible on load

### Integration with Prerender

The beasties plugin processes HTML files after Vite build. Since the prerender script runs after the client build (`build:client && build:server && build:prerender`), the critical CSS inlining will apply to the template that prerender uses.

---

## Files to Modify

| File | Change |
|------|--------|
| `package.json` | Add `vite-plugin-beasties` as devDependency |
| `vite.config.ts` | Import and configure beasties plugin |

---

## Expected Impact

| Metric | Current | Expected |
|--------|---------|----------|
| Render-blocking duration | 160ms | ~0ms (inline critical renders immediately) |
| FCP | Blocked by CSS | Unblocked |
| LCP | Delayed | Improved |

The full CSS still loads, but asynchronously after the initial paint, so users see styled content immediately.

---

## Risk Assessment

| Risk | Mitigation |
|------|------------|
| Flash of unstyled content (FOUC) | Critical CSS includes all visible-on-load styles |
| Increased HTML size | Critical CSS typically adds 5-10KB; offset by faster FCP |
| Build time increase | Minimal; beasties is efficient |

---

## Alternative Considered: Manual Critical CSS

Manual extraction would require:
1. Creating a separate `critical.css` file
2. Inlining it in `index.html`
3. Maintaining it separately from main CSS

This is error-prone and maintenance-heavy. The automated approach via beasties is more sustainable.

---

## Testing Checklist

After implementation:
1. Run Lighthouse audit - "Eliminate render-blocking resources" should pass
2. Verify no FOUC on page load
3. Confirm all styles load correctly after initial paint
4. Test on slow 3G throttling to see improvement
