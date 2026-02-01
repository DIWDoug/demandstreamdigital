

# Add Silent Error Handling to ElfsightReviews Component

## Overview

The Elfsight reviews widget throws a JavaScript exception when the `APP_VIEWS_LIMIT_REACHED` error occurs. Since this component is rendered globally in `App.tsx`, the exception can propagate and disrupt other pages like `/contact`. This plan adds robust error handling so the widget fails silently without affecting the rest of the application.

## Technical Details

### Changes to `src/components/ElfsightReviews.tsx`

**1. Add Script Load Error Handling**
- Add `onerror` handler to the dynamically created script element
- If the script fails to load, simply don't render the widget

**2. Add Global Error Listener for Elfsight Errors**
- Listen for `error` events on window that originate from the Elfsight platform
- Catch errors containing "APP_VIEWS_LIMIT_REACHED" or "elfsight"
- Set component state to hide the widget when these errors occur

**3. Return Nothing on Error**
- When an error is detected, render `null` instead of the widget container
- This prevents empty elements from affecting page layout

### Changes to `src/App.tsx`

**4. Wrap ElfsightReviews in Silent Error Boundary**
- Create a lightweight `SilentErrorBoundary` component specifically for third-party widgets
- Unlike the main `ErrorBoundary`, this one renders `null` on error instead of showing an error UI
- Wrap only the `ElfsightReviews` component with this boundary

## File Changes Summary

| File | Change |
|------|--------|
| `src/components/ElfsightReviews.tsx` | Add error state, script error handler, global error listener |
| `src/App.tsx` | Add `SilentErrorBoundary` wrapper around `ElfsightReviews` |

## Benefits

- **No UI disruption**: Widget silently disappears when view limit is reached
- **Other pages unaffected**: The `/contact` page and other routes will work normally
- **Minimal code changes**: Only modifying 2 files with targeted error handling
- **Zero visual impact**: When the widget works, it displays as normal; when it fails, it simply doesn't show

