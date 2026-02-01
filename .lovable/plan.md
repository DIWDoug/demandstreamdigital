
# Route-Based Code Splitting Implementation Plan

## Problem Statement
The current `App.tsx` eagerly imports **35+ page components** at the top level, causing the entire application bundle to be loaded on initial page load. This results in:
- **867ms** of script evaluation time
- **414ms** of script parsing and compilation
- Total **2.2 seconds** of main-thread work that could be saved

## Solution Overview
Implement React.lazy() with Suspense for all page components except the homepage (Index), which must remain eagerly loaded for optimal First Contentful Paint. This splits the bundle so only the code needed for the current route is loaded.

---

## Implementation Strategy

### What Stays Eagerly Loaded
| Component | Reason |
|-----------|--------|
| `Index` | Homepage - critical path, needs instant load |
| `NotFound` | Catch-all fallback, must be available immediately |
| Global components | `ErrorBoundary`, `ScrollToTop`, `BackToTop`, `CookieConsent`, etc. |

### What Gets Lazy Loaded
All other 33+ page components including:
- Service hub pages (7): LocalSEO, GoogleMaps, PaidMedia, etc.
- Calculator pages (8): ROICalculator, SEOCalculator, etc.
- Blog pages (4): BlogIndex, BlogPost, OurBlog, Author
- Utility pages (8): About, Contact, ThankYou, Privacy, Terms, etc.
- SpokePage (1): Used for all tactical spoke routes

---

## Technical Details

### File: `src/App.tsx`

**Step 1: Add React imports**
```typescript
import { lazy, Suspense } from "react";
```

**Step 2: Create a loading fallback component**
```typescript
// Minimal loading fallback matching the dark theme
const PageLoader = () => (
  <div className="min-h-screen bg-background" />
);
```

**Step 3: Convert static imports to lazy imports**

Replace all static imports (lines 15-51) with lazy imports:

```typescript
// Keep these eagerly loaded
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load all other pages
const Services = lazy(() => import("./pages/Services"));
const ROICalculator = lazy(() => import("./pages/ROICalculator"));
const InvestmentCalculator = lazy(() => import("./pages/InvestmentCalculator"));
const AdBudgetCalculator = lazy(() => import("./pages/AdBudgetCalculator"));
const SEOCalculator = lazy(() => import("./pages/SEOCalculator"));
const EmailCalculator = lazy(() => import("./pages/EmailCalculator"));
const ContentMarketingCalculator = lazy(() => import("./pages/ContentMarketingCalculator"));
const SocialMediaROICalculator = lazy(() => import("./pages/SocialMediaROICalculator"));
const AIReadyCheck = lazy(() => import("./pages/AIReadyCheck"));
const PartnerTools = lazy(() => import("./pages/PartnerTools"));
const About = lazy(() => import("./pages/About"));
const BlogIndex = lazy(() => import("./pages/BlogIndex"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const OurBlog = lazy(() => import("./pages/OurBlog"));
const Contact = lazy(() => import("./pages/Contact"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const RegionBlocked = lazy(() => import("./pages/RegionBlocked"));

// Author Pages
const Author = lazy(() => import("./pages/Author"));

// Service Hub Pages
const LocalSEO = lazy(() => import("./pages/services/LocalSEO"));
const GoogleMaps = lazy(() => import("./pages/services/GoogleMaps"));
const PaidMedia = lazy(() => import("./pages/services/PaidMedia"));
const EmailMarketing = lazy(() => import("./pages/services/EmailMarketing"));
const Authority = lazy(() => import("./pages/services/Authority"));
const Reporting = lazy(() => import("./pages/services/Reporting"));
const ContentMarketing = lazy(() => import("./pages/services/ContentMarketing"));
const SpokePage = lazy(() => import("./pages/services/SpokePage"));
```

**Step 4: Wrap Routes in Suspense**

Wrap the `<Routes>` component in a `<Suspense>` boundary:

```typescript
<Suspense fallback={<PageLoader />}>
  <Routes>
    {/* Homepage - eagerly loaded, no change */}
    <Route path="/" element={<Index />} />
    
    {/* All other routes remain the same syntax */}
    <Route path="/about" element={<About />} />
    {/* ... rest of routes ... */}
    
    {/* 404 - eagerly loaded, no change */}
    <Route path="*" element={<NotFound />} />
  </Routes>
</Suspense>
```

---

## Bundle Impact Analysis

### Before (Current State)
```text
Initial Bundle: ~500KB+ (all pages bundled together)
Main-thread work: 2.2s
```

### After (With Code Splitting)
```text
Initial Bundle: ~150-200KB (core + homepage only)
Route Chunks: 15-50KB each (loaded on demand)
Expected savings: 1.0-1.5s main-thread work
```

---

## Route-to-Component Mapping

All routes will continue to work identically. The only difference is when the component code is fetched:

| Route Pattern | Component | Load Behavior |
|--------------|-----------|---------------|
| `/` | Index | Immediate (eager) |
| `/about` | About | On navigation |
| `/blog` | BlogIndex | On navigation |
| `/blog/:slug` | BlogPost | On navigation |
| `/contact` | Contact | On navigation |
| `/partner-tools/*` | Calculator pages | On navigation |
| `/white-label-*` | Service/Spoke pages | On navigation |
| `*` | NotFound | Immediate (eager) |

---

## SSG/Prerendering Compatibility

The existing `prerender.js` script will continue to work because:
1. React.lazy() components are resolved during SSR/SSG builds
2. The prerender script uses `renderToString` which awaits lazy components
3. No changes needed to the prerendering pipeline

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Flash of loading state | Minimal `PageLoader` with matching background color |
| SEO impact | None - prerendered pages already have full HTML |
| User experience | Near-instant for cached routes; acceptable 50-150ms for cold loads |

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/App.tsx` | Convert 33 imports to lazy(), add Suspense wrapper, add PageLoader |

---

## Testing Checklist

After implementation, verify:
1. Homepage loads instantly without loading flash
2. Navigating to `/about` shows brief loading then content
3. Direct URL access to `/contact` works correctly
4. 404 page appears immediately for invalid routes
5. Browser DevTools Network tab shows separate chunks being loaded
6. Lighthouse re-audit shows improved main-thread work score
