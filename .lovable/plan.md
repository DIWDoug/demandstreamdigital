
# Fix "Function components cannot be given refs" Warnings

## Problem

React is showing warnings in the console about function components not supporting refs:

1. `ContactForm` (used in `Index.tsx`)
2. `TwoStepContactForm` (used in `ContactForm.tsx`)  
3. `Navigate` (from React Router v7 - internal warning)

## Root Cause

This is a known issue with React Router v7. The library's internal validation mechanisms attempt to check refs on components rendered within its Routes context. When a function component doesn't use `React.forwardRef`, this warning appears.

The `Navigate` warning is an internal React Router issue that cannot be fixed in your code - it's a bug/limitation in React Router v7 itself.

## Solution

Wrap `ContactForm` and `TwoStepContactForm` with `React.forwardRef` to suppress the warnings. Even though these components don't actually use the ref, wrapping them prevents React from logging the warning.

## Changes

### 1. `src/components/sections/ContactForm.tsx`

Wrap the component with `forwardRef`:

```tsx
import { forwardRef } from "react";
// ... other imports

const ContactForm = forwardRef<HTMLElement>((_, ref) => {
  // ... existing component code
  
  return (
    <section id="contact" ref={ref} className="relative">
      {/* ... rest of component */}
    </section>
  );
});

ContactForm.displayName = "ContactForm";

export default ContactForm;
```

### 2. `src/components/forms/TwoStepContactForm.tsx`

Wrap the component with `forwardRef`:

```tsx
import { useState, forwardRef } from "react";
// ... other imports

interface TwoStepContactFormProps {
  formType: string;
  submitButtonText?: string;
  step1ButtonText?: string;
  showServicesInterested?: boolean;
  className?: string;
  compact?: boolean;
}

const TwoStepContactForm = forwardRef<HTMLDivElement, TwoStepContactFormProps>(
  (
    {
      formType,
      submitButtonText = "Let's Talk Partnership",
      step1ButtonText = "Continue",
      showServicesInterested = true,
      className = "",
      compact = false,
    },
    ref
  ) => {
    // ... existing component code
    
    return (
      <div ref={ref} className={className}>
        {/* ... rest of component */}
      </div>
    );
  }
);

TwoStepContactForm.displayName = "TwoStepContactForm";

export default TwoStepContactForm;
```

## Technical Notes

- The `Navigate` warning from React Router v7 cannot be fixed in your code - it's an internal library issue
- Adding `displayName` is a best practice when using `forwardRef` for better debugging
- The ref is attached to the outermost element of each component
- This change has no impact on functionality - it only silences the console warnings

## Result

After these changes:
- ContactForm ref warning: Fixed
- TwoStepContactForm ref warning: Fixed
- Navigate ref warning: Cannot be fixed (React Router internal)

The Navigate warning is a known React Router v7 issue that the library maintainers would need to address.
