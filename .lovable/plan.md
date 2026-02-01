
# Enable Source Maps for Production Builds

## Problem Statement
Lighthouse flagged "Missing source maps for large first-party JavaScript" which:
1. Makes debugging production issues difficult
2. Prevents Lighthouse from providing deeper performance insights
3. Reduces visibility into which code is causing performance bottlenecks

## Current State
The `vite.config.ts` has no explicit `build.sourcemap` configuration, meaning source maps are not generated for production builds.

## Solution

### File: `vite.config.ts`

Add the `build` configuration with source map generation:

```typescript
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    // Generate source maps for production debugging and Lighthouse insights
    sourcemap: true,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  // ... rest of config
}));
```

## Technical Details

### Source Map Options in Vite

| Value | Description | Use Case |
|-------|-------------|----------|
| `true` | Generates separate `.map` files | Best for debugging + Lighthouse |
| `'inline'` | Embeds source map in bundle | Increases bundle size significantly |
| `'hidden'` | Generates `.map` but no reference in bundle | Production without exposing maps to users |

**Recommended: `true`** - Generates separate `.map` files that browsers can fetch when DevTools is open, without affecting normal users.

## Expected Impact

- Lighthouse can analyze bundle composition in detail
- Stack traces in production will point to original source code
- No impact on regular users (maps only loaded when DevTools opens)
- Enables better performance profiling in production

## Files to Modify

| File | Change |
|------|--------|
| `vite.config.ts` | Add `build.sourcemap: true` configuration |

## Running Lighthouse Audit

After this change, you can run a Lighthouse audit:
1. Open Chrome DevTools (F12)
2. Go to the "Lighthouse" tab
3. Select "Performance" category
4. Click "Analyze page load"

The audit will then be able to provide more detailed insights about your JavaScript bundles.
