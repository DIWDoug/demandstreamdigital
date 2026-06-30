import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HIDDEN_ROUTE_PREFIXES = [
  "/grow-qualifier",
  "/grow-thanks",
  "/grow-booked",
  "/ad-scan/onboarding",
  "/ad-scan/thanks",
  "/audit/schedule",
];

export default function MobileBottomCTA() {
  const { pathname } = useLocation();

  const normalized = pathname.length > 1 && pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;

  const isHidden = HIDDEN_ROUTE_PREFIXES.some(
    (prefix) => normalized === prefix || normalized.startsWith(`${prefix}/`)
  );

  if (isHidden) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-navy border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.25)]">
      <div className="container mx-auto px-4 py-3">
        <Link
          to="/grow-qualifier"
          className="btn-cta w-full group inline-flex items-center justify-center gap-2"
        >
          Schedule My Growth Audit
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
