
# Fix Patrick Hand Font 404 Error

## Problem

The Patrick Hand font is returning a 404 error because the URL uses an outdated version:
- **Current (broken):** `v23/LDI1apSQOAYtSuYWp8ZhfYe8UcLLq7oc.woff2`
- **Latest (working):** `v25/LDI1apSQOAYtSuYWp8ZhfYe8XsLL.woff2`

Google Fonts updated Patrick Hand from v23 to v25, and the font file hash changed.

## Changes

### 1. Update `index.html` (Line 27)

Update the preload URL to the new version:

```html
<!-- Before -->
<link rel="preload" href="https://fonts.gstatic.com/s/patrickhand/v23/LDI1apSQOAYtSuYWp8ZhfYe8UcLLq7oc.woff2" as="font" type="font/woff2" crossorigin>

<!-- After -->
<link rel="preload" href="https://fonts.gstatic.com/s/patrickhand/v25/LDI1apSQOAYtSuYWp8ZhfYe8XsLL.woff2" as="font" type="font/woff2" crossorigin>
```

### 2. Update `src/index.css` (Lines 53-61)

Update the `@font-face` declaration to use the new URL:

```css
/* Before */
@font-face {
  font-family: 'Patrick Hand';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/patrickhand/v23/LDI1apSQOAYtSuYWp8ZhfYe8UcLLq7oc.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* After */
@font-face {
  font-family: 'Patrick Hand';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/patrickhand/v25/LDI1apSQOAYtSuYWp8ZhfYe8XsLL.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
```

## Result

- No more 404 errors for the Patrick Hand font
- Handwriting font will load correctly for signature elements
- Preload will work properly, improving performance

## Technical Note

Google Fonts periodically updates font versions, which can change the file URLs. The font file hash changed from `UcLLq7oc` to `XsLL` in v25. This is a routine update that requires updating any hardcoded URLs.
