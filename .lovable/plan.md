
# Disable Elfsight Widget

## Overview

Completely disable the Elfsight reviews widget to eliminate the `APP_VIEWS_LIMIT_REACHED` console errors. The current error handling catches errors after the script loads, but the script itself logs the error before React can intercept it.

## Change

### File: `src/components/ElfsightReviews.tsx`

Replace the entire component to return `null` immediately, preventing the `platform.js` script from loading at all:

```tsx
const ElfsightReviews = () => {
  // TEMPORARILY DISABLED: Elfsight widget hitting APP_VIEWS_LIMIT_REACHED
  // Re-enable when subscription is upgraded or view limits reset
  return null;
};

export default ElfsightReviews;
```

## Result

- No Elfsight script will be loaded
- No `APP_VIEWS_LIMIT_REACHED` console errors
- The `/contact` page will load without Elfsight-related issues
- Easy to re-enable later by restoring the original code
