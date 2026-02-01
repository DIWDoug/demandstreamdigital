
# Comment Out Leadsy AI Tag

## Overview

The Leadsy AI tracking tag is causing multiple CORS errors that may be contributing to page rendering issues. The errors originate from:
- `https://wvbknd.leadsy.ai/v1/website-visitors/test` - blocked by CORS
- `https://origin.dialedinweb.com/~api/analytics` - blocked by CORS

These are third-party configuration issues that cannot be fixed from within the application code. Commenting out the tag will eliminate these errors.

## Changes

### File: `index.html`

**Line 17** - Comment out the DNS prefetch:
```html
<!-- <link rel="dns-prefetch" href="https://r2.leadsy.ai"> -->
```

**Lines 31-32** - Comment out the Leadsy AI script tag:
```html
<!-- Leadsy AI Tag - DISABLED: CORS errors from third-party endpoints -->
<!-- <script id="vtag-ai-js" async src="https://r2.leadsy.ai/tag.js" data-pid="1549LCLNvr72vdmhw" data-version="062024"></script> -->
```

## Result

After this change:
- No more CORS errors from Leadsy AI endpoints
- The `/contact` page should load without these JavaScript errors potentially interfering with rendering
- You can re-enable the tag later once the CORS issues are resolved on Leadsy's end

## Note

The memory integration note about Leadsy AI tracking will remain in place for future reference when you decide to re-enable it.
