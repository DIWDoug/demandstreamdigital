import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import StreamTexture from "@/components/StreamTexture";
import WaveDivider from "@/components/WaveDivider";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

export interface ScheduleGrowthAuditCTAProps {
  /** Small uppercase label above the headline. */
  eyebrow?: string;
  /** Main heading. */
  headline?: string;
  /** Primary descriptive paragraph. */
  description?: string;
  /** Exclusivity sub-line shown below the description. */
  exclusivityLine?: string;
  /** Button label. Defaults to the headline. */
  ctaLabel?: string;
  /** Route the CTA points to. */
  ctaHref?: string;
  /** Reassurance copy shown under the button. */
  reassurance?: string;
  /** Show the "Prefer to call?" phone link below reassurance. */
  showPhoneFallback?: boolean;
  /** Vertical padding scale. */
  density?: "compact" | "default" | "spacious";
  /** Render a top WaveDivider transitioning from light bg into dark. */
  withTopWaveDivider?: boolean;
  /** Render the subtle StreamTexture overlay. */
  withTexture?: boolean;
  /** Extra classes for the outer wrapper. */
  className?: string;
}

const DENSITY: Record<NonNullable<ScheduleGrowthAuditCTAProps["density"]>, string> = {
  compact: "py-10 lg:py-14",
  default: "py-16 lg:py-20",
  spacious: "py-20 lg:py-28",
};

/**
 * Single source of truth for the "Schedule Your Growth Audit" CTA card used
 * across MarketExclusivity, HVACMarketExclusivity, and the homepage
 * TerritoryCallout. Routes to /grow-qualifier. No phone/SMS form on this card,
 * which keeps it compliant with the LeadConnector chat widget allowlist rule.
 */
const ScheduleGrowthAuditCTA = ({
  eyebrow = "Ready to Own Your Market?",
  headline = "Schedule a Consultation Now",
  description = "A short, no pressure conversation to understand your shop, your service area, and whether DemandStream is the right fulfillment partner for your next phase of growth.",
  exclusivityLine = "One Plumbing company and one HVAC company per market. Real conversations, not sales calls.",
  ctaLabel = "Schedule a Consultation Now",
  ctaHref = "/grow-qualifier",
  reassurance = "Takes about 60 seconds to qualify. We'll follow up within one business day.",
  showPhoneFallback = false,
  density = "default",
  withTopWaveDivider = false,
  withTexture = true,
  className = "",
}: ScheduleGrowthAuditCTAProps) => {
  const buttonLabel = ctaLabel ?? headline;

  return (
    <div className={`relative ${className}`}>
      {withTopWaveDivider && (
        <WaveDivider
          position="top"
          fromColor="#f9f9f9"
          toColor="hsl(213, 64%, 8%)"
          variant="curve"
          flip
          animated
        />
      )}
      <section
        className={`${DENSITY[density]} bg-background relative overflow-hidden`}
      >
        {withTexture && <StreamTexture variant="dark" opacity={0.09} />}
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4">
              {eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {headline}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
              {description}
            </p>
            <p className="text-muted-foreground/80 text-sm md:text-base mb-10 max-w-2xl mx-auto">
              {exclusivityLine}
            </p>
            <Link
              to={ctaHref}
              className="btn-cta group inline-flex items-center gap-2"
            >
              {buttonLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="mt-4 text-xs text-muted-foreground/70">{reassurance}</p>
            {showPhoneFallback && (
              <div className="mt-6 flex justify-center">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-blue/80 font-semibold transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Prefer to call? {PHONE_NUMBER}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScheduleGrowthAuditCTA;
