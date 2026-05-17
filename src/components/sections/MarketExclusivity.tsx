import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import StreamTexture from "@/components/StreamTexture";

const MarketExclusivity = () => {
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 bg-background reveal-section relative overflow-hidden"
    >
      <StreamTexture variant="dark" opacity={0.09} />
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4">
            Ready to Own Your Market?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Schedule Your Growth Audit
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
            A short, no pressure conversation to understand your shop, your service area, and whether DemandStream is the right fulfillment partner for your next phase of growth.
          </p>
          <p className="text-muted-foreground/80 text-sm md:text-base mb-10 max-w-2xl mx-auto">
            One Plumbing company and one HVAC company per market. Real conversations, not sales calls.
          </p>
          <Link
            to="/grow-qualifier"
            className="btn-cta group inline-flex items-center gap-2"
          >
            Schedule Your Growth Audit
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <p className="mt-4 text-xs text-muted-foreground/70">
            Takes about 60 seconds to qualify. We'll follow up within one business day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketExclusivity;
