# Performance & Maintainability Audit

## Scope & method
This audit focuses on front-end performance (page load, Speed Index, LCP/CLS/INP), bundle structure, maintainability, and unused code paths. Findings are based on the current repo configuration and code paths visible in `src`, `index.html`, and build tooling.

## Current strengths
- **Route-level code splitting** is already implemented using `React.lazy` for non-critical pages, reducing initial JS execution on the landing path. (`src/App.tsx`)
- **Pre-render + hydration** is in place, which reduces time-to-first-paint and improves perceived performance on critical routes. (`src/main.tsx`)
- **Deferred third-party scripts** (GTM) are loaded after the first paint and idle time, reducing blocking time. (`index.html`)
- **Critical font preloads** are present to reduce LCP font swap delays. (`index.html`)

## Findings (Performance + Maintainability)
### 1) Bundle chunking can be more cache-friendly
- Prior config produced a single large vendor chunk; cache invalidation from any dependency update can cause larger re-downloads. This affects Speed Index and repeat visits. (`vite.config.ts`)

### 2) Unused stylesheet in repository
- `src/App.css` has no imports and does not appear to be referenced anywhere in the codebase. It adds maintenance noise and can mislead future refactors.

### 3) Third-party scripts are already deferred, but should be verified regularly
- GTM is injected via `requestIdleCallback`. This is good; however, real-world Speed Index should be re-verified after any tag changes because third-party scripts are frequent regressions. (`index.html`)

### 4) Source maps are enabled in production builds
- This is helpful for debugging and Lighthouse insights, but increases build size and upload times. This may be acceptable for your workflow, but it should be explicitly tracked in performance budgets. (`vite.config.ts`)

### 5) TypeScript linting is lenient
- The project does not enforce `noUnusedLocals` or `noUnusedParameters`, which makes it harder to identify unused code and can lead to bundle bloat over time. (`tsconfig.json`, `tsconfig.app.json`)

## Changes implemented in this update
1) **Added vendor chunk splitting** to improve caching and isolate heavy libraries into stable chunks without changing runtime behavior.
2) **Removed unused `src/App.css`** to reduce maintenance noise.

## Actionable improvement plan (step-by-step)
Each step includes a verification task to ensure UI/UX is unchanged.

### Step 0 — Capture a baseline (before further changes)
**Goal:** Lock in current performance metrics and bundle sizes for comparison.
- **Build:** `npm run build`
- **Preview:** `npm run preview`
- **Lighthouse:** `npx lighthouse http://localhost:4173 --preset=desktop --only-categories=performance --output=json --output-path=./lighthouse-baseline.json`
- **Verification:** Confirm Lighthouse report exists and bundle sizes in `dist/assets` are recorded.

### Step 1 — Verify current chunk splitting (DONE)
**Goal:** Ensure vendor chunks are split and cacheable.
- **Build:** `npm run build`
- **Verification:** Check `dist/assets` for `react-vendor`, `router`, `radix-ui`, `charts`, and `vendor` chunks; ensure app loads correctly in `npm run preview`.

### Step 2 — Inventory unused exports and dependencies
**Goal:** Identify unused code paths without risking UI changes.
- **Audit dependencies:** `npx depcheck`
- **Audit TS exports:** `npx ts-prune`
- **Verification:** Review output; remove only *confirmed* unused modules after validating the app in preview.

### Step 3 — Enforce unused-code detection in CI (opt-in)
**Goal:** Prevent reintroduction of unused modules.
- **Proposed change:** enable `noUnusedLocals` and `noUnusedParameters` incrementally (start with warnings).
- **Verification:** Run `npm run lint` and verify no new failures before turning on stricter checks.

### Step 4 — Asset and image optimization
**Goal:** Improve LCP and Speed Index by reducing image payloads.
- **Audit:** Identify largest images in `src/assets` and `public`.
- **Optimize:** Convert large JPG/PNG images to AVIF/WEBP and add responsive `srcSet` where applicable.
- **Verification:** Compare `dist/assets` size and run Lighthouse again; check visuals in preview.

### Step 5 — Third-party script budgeting
**Goal:** Guard against regressions from marketing tags.
- **Action:** Maintain a list of tags with expected load order and size budget.
- **Verification:** Run Lighthouse and WebPageTest after tag changes, compare against baseline.

### Step 6 — Optional build optimizations
**Goal:** Trade debugging convenience for speed if needed.
- **Option A:** Disable `build.sourcemap` for production to reduce asset size.
- **Option B:** Add a `bundle:analyze` script using `rollup-plugin-visualizer` (run on-demand only).
- **Verification:** Re-run Lighthouse and compare Speed Index and total JS size.

## Risk management & UX safeguards
- All steps are **sequential** with verification. Any negative shift in Lighthouse or visual testing should halt the plan.
- Performance changes are isolated to build config or static assets first, minimizing runtime risk.

