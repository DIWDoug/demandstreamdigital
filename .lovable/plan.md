
# Fix Card Color Issues Across the Site

## Problem
Cards throughout the site have a washed-out blue-grey appearance on light backgrounds. The root cause is that card components use semi-transparent or CSS-variable-based backgrounds that don't contrast properly against light sections. Additionally, some sections use off-brand accent colors.

## Changes

### 1. Fix ProblemSolution Cards (Trust / Clarity / Execution)
- **File:** `src/components/sections/ProblemSolution.tsx`
- Change `bg-background/50` to `bg-white` so the cards are crisp white on the light section background
- Update `border-border/30` to a more visible `border-gray-200` for clean definition

### 2. Fix WhyPartnerWithUs Cards + Remove Off-Brand Green
- **File:** `src/components/sections/WhyPartnerWithUs.tsx`
- The olive green accent `hsl(76,42%,41%)` is off-brand -- replace with the brand red `#BF272E` for CTAs and the steel blue accent for icon backgrounds
- Cards already use `from-white to-[#F0F0ED]` which is fine, but icon accents need brand alignment

### 3. Fix ContactForm Accordion Cards
- **File:** `src/components/sections/ContactForm.tsx`
- Change `bg-background/50` on accordion items to `bg-white` for clarity on light backgrounds

### 4. Fix `premium-card` CSS Class
- **File:** `src/index.css`
- The `.premium-card` class uses `--surface-card` and `--surface-elevated` which are dark-tinted. Add light-mode overrides so these resolve to clean whites/near-whites when used inside `.section-light` or on light backgrounds

### 5. Fix TrustReel and FeaturedCaseStudies
- **File:** `src/components/sections/TrustReel.tsx` and `src/components/sections/FeaturedCaseStudies.tsx`
- These use `bg-card` which resolves correctly in light mode (white), so they should be fine -- will verify and adjust only if needed

---

## Technical Details

The core issue: CSS variables like `--background`, `--surface-card`, and `--surface-elevated` have dark-mode values (deep navy blues) that look fine in `.dark` wrappers, but when used with partial opacity (`/50`) in light sections, they create a blue-grey muddy appearance. The fix is to use explicit light colors (`bg-white`, `border-gray-200`) in sections that are always light, rather than relying on theme variables with opacity modifiers.

For the `.premium-card` class, the gradient uses `hsl(var(--surface-card))` which in light mode is `0 0% 100%` (white) and in dark mode is `213 50% 15%` (navy). The light-mode rendering should already be white, but the issue may be compounded by the inset box-shadow using `hsl(0 0% 0% / 0.2)` which darkens the card. We'll lighten the shadow for light sections.

The WhyPartnerWithUs green (`hsl(76,42%,41%)`) will be replaced with the brand red (`#BF272E` / CTA variable) for buttons and steel blue (`--accent-blue`) for icon accents to stay on-brand.
