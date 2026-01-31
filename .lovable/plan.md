
# Simplified Splash - Match App Background

## Current Issue
The current splash uses `#FAF9F7` (warm cream), but `index.html` has `<html class="dark">`, so the app actually starts with the dark theme background `hsl(220 20% 6%)` (approximately `#0d1017` - a very dark blue-gray). This creates a color jump when the splash fades out.

## Solution
Change the splash to:
1. **Remove the spinner animation** - just a solid background
2. **Match the dark theme background color** - `#0d1017` (the dark blue-gray from your dark theme)

This ensures a seamless transition with no visible change when React takes over.

---

## Implementation

### File: `index.html`

Replace the current splash implementation:

**Before:**
```html
<div id="app-splash" aria-hidden="true" role="presentation" 
     style="position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:#FAF9F7;transition:opacity 0.3s ease-out;">
  <div class="splash-spinner"></div>
</div>
<style>
  @keyframes splash-spin { ... }
  .splash-spinner { ... }
</style>
```

**After:**
```html
<div id="app-splash" aria-hidden="true" role="presentation" 
     style="position:fixed;inset:0;z-index:9999;background:#0d1017;transition:opacity 0.3s ease-out;">
</div>
```

**Changes:**
- Background changed from `#FAF9F7` (cream) to `#0d1017` (dark mode background)
- Removed `display:flex;align-items:center;justify-content:center` (no spinner to center)
- Removed the spinner `<div>` element entirely
- Removed the `<style>` block with keyframes and spinner CSS

---

## Technical Details

| Theme | Background Color |
|-------|-----------------|
| Light (`:root`) | `hsl(40 20% 97%)` = `#FAF9F7` |
| Dark (`.dark`) | `hsl(220 20% 6%)` ≈ `#0d1017` |

Since `index.html` starts with `<html class="dark">`, the splash must use the dark background to match. The splash will be invisible against the dark theme, creating a seamless experience.

---

## Files to Modify

| File | Changes |
|------|---------|
| `index.html` | Simplify splash to solid dark background, remove spinner |
