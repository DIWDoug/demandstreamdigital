import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Design System v1.1 — Button Component
 * Primary: Red #C0392B (--cta), 4px radius, bold, 16px, 0.04em tracking
 * Hover: #A93226 (--cta-hover)
 * Mobile: full-width
 * Arrow: consumers append " →" to label text per DS spec
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary CTA — always red, per design system
        default:
          "bg-cta text-cta-foreground hover:bg-cta-hover",
        // Ghost on dark backgrounds — white border + white text
        ghost:
          "border-2 border-white text-white bg-transparent hover:bg-white/10",
        // Ghost on light backgrounds — navy border + navy text
        outline:
          "border-2 border-navy text-navy bg-transparent hover:bg-navy/5",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        link: "text-cta underline-offset-4 hover:underline bg-transparent p-0 h-auto font-medium",
      },
      size: {
        default: "h-12 px-7 py-3 text-base tracking-[0.04em] rounded-[4px]",
        sm: "h-9 px-4 py-2 text-sm rounded-[4px]",
        lg: "h-14 px-8 py-4 text-base tracking-[0.04em] rounded-[4px]",
        icon: "h-10 w-10 rounded-[4px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
