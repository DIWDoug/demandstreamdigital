import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

interface ClaimTerritoryCTAProps {
  /** Optional override for the button label. Defaults to "Claim Your Territory Today". */
  label?: string;
  /** Optional target route. Defaults to /grow-qualifier. */
  to?: string;
  /** "dark" for dark backgrounds, "light" for light backgrounds. Defaults to "dark". */
  variant?: "light" | "dark";
  /** Alignment of the row. Defaults to "center". */
  align?: "start" | "center";
  className?: string;
}

/**
 * Standard mid-page CTA pairing the primary "Claim Your Territory Today"
 * button with an "or" phone fallback. Use anywhere a single Claim Your
 * Territory button would appear in the middle of a page.
 */
const ClaimTerritoryCTA = ({
  label = "Claim Your Territory Today",
  to = "/grow-qualifier",
  variant = "dark",
  align = "center",
  className = "",
}: ClaimTerritoryCTAProps) => {
  const isLight = variant === "light";
  const alignClass = align === "center" ? "justify-center" : "justify-start";

  return (
    <div
      className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-6 ${alignClass} ${className}`}
    >
      <Link to={to} className="btn-cta group flex items-center gap-2 whitespace-nowrap">
        {label}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>

      <span
        className={`text-sm font-medium ${
          isLight ? "text-gray-500" : "text-text-muted"
        }`}
      >
        or
      </span>

      <a
        href={PHONE_HREF}
        className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all font-medium text-sm whitespace-nowrap ${
          isLight
            ? "border-gray-300 text-gray-700 hover:bg-primary hover:border-primary hover:text-white"
            : "border-border text-text-secondary hover:text-white hover:border-primary hover:bg-primary"
        }`}
      >
        <Phone className="h-4 w-4" />
        {PHONE_NUMBER}
      </a>
    </div>
  );
};

export default ClaimTerritoryCTA;
