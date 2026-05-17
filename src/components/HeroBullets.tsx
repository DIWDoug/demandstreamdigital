import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroBulletsProps {
  items: string[];
  variant?: "light" | "dark";
  className?: string;
}

const HeroBullets = ({ items, variant = "dark", className }: HeroBulletsProps) => {
  const textClass = variant === "dark" ? "text-white/85" : "text-foreground/80";
  const iconClass = variant === "dark" ? "text-accent-blue" : "text-primary";

  return (
    <ul className={cn("space-y-2.5 mb-8", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckCircle2 className={cn("h-5 w-5 shrink-0 mt-0.5", iconClass)} aria-hidden="true" />
          <span className={cn("font-inter text-base leading-relaxed", textClass)}>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default HeroBullets;
