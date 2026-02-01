
# Optimize Font Display Strategy

## Problem Statement
The SEO audit flagged font-display optimization to ensure text is consistently visible and minimize Cumulative Layout Shift (CLS). Currently:

1. Google Fonts URL uses `display=swap` but this only applies when CSS loads
2. Preloaded WOFF2 files arrive before CSS declares `@font-face`
3. No font metric overrides exist to reduce layout shifts during swap
4. Patrick Hand font (handwriting) has no preload despite being used

## Current Font Loading Flow

```text
Timeline:
0ms   → HTML starts rendering with system fonts (Georgia, system-ui)
50ms  → WOFF2 preloads begin fetching
100ms → CSS link has media="print" (not applied yet)
200ms → Fonts arrive but can't be used (no @font-face yet)
300ms → CSS onload fires, media switches to "all"
350ms → Fonts swap → LAYOUT SHIFT
```

## Solution: Local @font-face with font-display: swap and Size Adjustments

### Strategy

Define local `@font-face` rules in CSS that:
1. Declare `font-display: swap` directly (no dependency on Google's CSS)
2. Use the preloaded WOFF2 URLs
3. Include `size-adjust`, `ascent-override`, and `descent-override` to match fallback metrics
4. Reduce CLS by making system fonts render at similar sizes to web fonts

---

## Implementation

### File: `src/index.css`

Add `@font-face` declarations at the very top (before `@tailwind` directives):

```css
/* =============================================================
   FONT DEFINITIONS with font-display: swap and metric overrides
   These use preloaded fonts from index.html for optimal loading
   ============================================================= */

/* Inter - Primary UI/Heading Font */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  /* Fallback adjustment: system-ui metrics */
  size-adjust: 100%;
  ascent-override: 90%;
  descent-override: 22%;
  line-gap-override: 0%;
}

/* Lora - Body Text Serif Font */
@font-face {
  font-family: 'Lora';
  font-style: normal;
  font-weight: 400 700;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/lora/v35/0QI6MX1D_JOuGQbT0gvTJPa787weuyJGmKxemMeZ.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  /* Fallback adjustment: Georgia metrics */
  size-adjust: 97%;
  ascent-override: 87%;
  descent-override: 22%;
  line-gap-override: 0%;
}

/* Patrick Hand - Handwriting/Signature Font */
@font-face {
  font-family: 'Patrick Hand';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/patrickhand/v23/LDI1apSQOAYtSuYWp8ZhfYe8UcLLq7oc.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@tailwind base;
@tailwind components;
@tailwind utilities;
/* ... rest of file continues ... */
```

### File: `index.html`

Add preload for Patrick Hand font (used for signatures/handwriting):

```html
<!-- Fonts - Preload Critical Fonts for LCP -->
<link rel="preload" href="https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7SUc.woff2" as="font" type="font/woff2" crossorigin fetchpriority="high">
<link rel="preload" href="https://fonts.gstatic.com/s/lora/v35/0QI6MX1D_JOuGQbT0gvTJPa787weuyJGmKxemMeZ.woff2" as="font" type="font/woff2" crossorigin fetchpriority="high">
<link rel="preload" href="https://fonts.gstatic.com/s/patrickhand/v23/LDI1apSQOAYtSuYWp8ZhfYe8UcLLq7oc.woff2" as="font" type="font/woff2" crossorigin>
```

The Google Fonts CSS link can remain as a fallback for extended character sets and italic variants.

---

## Technical Details

### Font Metric Overrides Explained

| Property | Purpose | Inter Value | Lora Value |
|----------|---------|-------------|------------|
| `size-adjust` | Scale font to match fallback size | 100% | 97% |
| `ascent-override` | Match text baseline position | 90% | 87% |
| `descent-override` | Match descender space | 22% | 22% |
| `line-gap-override` | Match line spacing | 0% | 0% |

These values minimize the visual "jump" when fonts swap from system fallbacks to web fonts.

### Why This Works Better

**Before (Current Flow):**
```text
1. System fonts render (no @font-face)
2. WOFF2 files arrive via preload
3. Google CSS loads (async)
4. Google CSS provides @font-face
5. Fonts swap with potential CLS
```

**After (New Flow):**
```text
1. CSS parses @font-face immediately
2. font-display: swap shows text in fallback
3. WOFF2 preloads complete
4. Fonts swap with minimal CLS (metric overrides)
```

---

## Files to Modify

| File | Change |
|------|--------|
| `src/index.css` | Add @font-face declarations with font-display: swap and metric overrides at top of file |
| `index.html` | Add preload for Patrick Hand font |

---

## Expected Impact

- **FOIT Prevention**: Text always visible (swap ensures fallback renders)
- **Reduced CLS**: Metric overrides make swap less jarring
- **Faster Font Application**: Preloads + local @font-face = immediate use
- **SEO Audit Pass**: Explicitly declared font-display: swap satisfies requirement

---

## Risk Assessment

| Risk | Mitigation |
|------|------------|
| Metric values not perfect | Values are estimated from common tools; fine-tune if needed |
| Double font loading | Google CSS remains for extended glyphs; Latin range served locally |
| Patrick Hand preload adds bytes | Small file (~15KB), low priority, only affects initial load |

---

## Testing Checklist

After implementation:
1. Verify text is visible immediately on page load (no FOIT)
2. Check font swap animation is minimal (no jarring jump)
3. Confirm Lighthouse "Ensure text remains visible during webfont load" passes
4. Test on slow 3G to ensure fallback fonts display properly
