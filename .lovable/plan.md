

# Pre-Hydration Fallback Implementation Plan

## Problem Summary

When users follow a 301 redirect to your site, they briefly see the homepage hero section flash before React mounts and renders the correct route. This happens because:

1. The pre-rendered HTML in `index.html` contains full homepage content
2. The browser paints this content immediately upon page load
3. React then mounts, matches the actual route, and renders the correct page
4. The gap between initial paint and React render causes the "flash"

---

## Solution Overview

Add a neutral splash overlay that:
- Paints immediately (before any other content)
- Covers the pre-rendered homepage content completely
- Gets removed once React has mounted and is ready

```text
┌─────────────────────────────────────────────────────────────┐
│  Browser loads page after 301 redirect                      │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  index.html paints:                                         │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  #app-splash (fixed overlay, z-index: 9999)           │  │
│  │  • Neutral cream background (#FAF9F7)                 │  │
│  │  • Centered olive spinner animation                   │  │
│  │  • Completely covers viewport                         │  │
│  └───────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  #root (hidden behind splash)                         │  │
│  │  • Pre-rendered homepage content                      │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  React mounts → main.tsx fades out #app-splash              │
│  • Uses requestAnimationFrame for smooth timing             │
│  • 300ms fade transition                                    │
│  • Element removed from DOM after fade                      │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  User sees correct route content (no flash!)                │
└─────────────────────────────────────────────────────────────┘
```

---

## Implementation Details

### 1. Add Splash Overlay to `index.html`

Add a new `#app-splash` div as the first child of `<body>`, before `#root`:

**Key properties:**
- `position: fixed` with `inset: 0` to cover entire viewport
- `z-index: 9999` to sit above all other content
- Background: `#FAF9F7` (the warm cream from your light theme)
- Pure CSS spinner using the olive brand color (`#7d953d`)
- `transition: opacity 0.3s ease-out` for smooth fade
- Inline styles (no external CSS needed, paints instantly)

**Accessibility:**
- `aria-hidden="true"` - decorative element
- `role="presentation"` - not interactive

### 2. Update `src/main.tsx` to Remove Splash

After React renders (both hydration and client render paths), remove the splash:

```typescript
// After render completes, fade out and remove splash
requestAnimationFrame(() => {
  const splash = document.getElementById('app-splash');
  if (splash) {
    splash.style.opacity = '0';
    setTimeout(() => splash.remove(), 300);
  }
});
```

**Why `requestAnimationFrame`?**
- Ensures at least one paint frame with React content before fading
- Prevents the splash from disappearing before the real UI is visible

### 3. Create Optional Route Loading Fallback Component

Create `src/components/RouteLoadingFallback.tsx` for future use with lazy-loaded routes or Suspense boundaries. This component will match the splash styling for visual consistency.

---

## Files to Modify

| File | Changes |
|------|---------|
| `index.html` | Add `#app-splash` overlay with inline styles and CSS spinner animation |
| `src/main.tsx` | Add splash removal logic after React mount |
| `src/components/RouteLoadingFallback.tsx` | New file - optional loading component |

---

## Technical Details

### Splash Overlay HTML Structure

```html
<div id="app-splash" aria-hidden="true" role="presentation" style="...">
  <div class="splash-spinner"></div>
</div>
<style>
  @keyframes splash-spin {
    to { transform: rotate(360deg); }
  }
  .splash-spinner {
    width: 40px;
    height: 40px;
    border: 3px solid #e5e5e5;
    border-top-color: #7d953d;
    border-radius: 50%;
    animation: splash-spin 0.8s linear infinite;
  }
</style>
```

### Splash Removal Logic

```typescript
if (shouldHydrate) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}

// Remove splash after React is ready
requestAnimationFrame(() => {
  const splash = document.getElementById('app-splash');
  if (splash) {
    splash.style.opacity = '0';
    setTimeout(() => splash.remove(), 300);
  }
});
```

---

## Why This Works

1. **Splash paints first**: Being before `#root` and using inline styles means the splash renders immediately
2. **Covers pre-rendered content**: `position: fixed` with `z-index: 9999` ensures it sits above the homepage content in `#root`
3. **Route-neutral**: Uses explicit hex colors (`#FAF9F7`, `#7d953d`) rather than CSS variables, so it's immune to the `dark` class on `<html>`
4. **Smooth transition**: Fades out after React mounts, preventing jarring visual jumps
5. **No SEO impact**: Search bots don't execute JS, so they see the pre-rendered content as intended
6. **Performance**: No external resources, pure inline HTML/CSS

---

## Acceptance Criteria

| Requirement | How It's Met |
|-------------|--------------|
| Homepage works correctly | Splash fades, homepage renders normally |
| Before React mounts, only neutral splash visible | Fixed overlay with z-index covers all content |
| During route matching, neutral loader shown | Splash masks everything until React resolves route |
| Splash removed once app ready | `requestAnimationFrame` + CSS transition |
| No SEO regressions | Pre-rendered HTML unchanged; splash removed by JS |

