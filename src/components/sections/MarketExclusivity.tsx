import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import StreamTexture from "@/components/StreamTexture";

const MarketExclusivity = () => {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-background reveal-section relative overflow-hidden">
      <StreamTexture variant="dark" opacity={0.09} />
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-semibold uppercase tracking-wider mb-6">
            Exclusivity
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            We Only Work With One Company Per Market.
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-4">
            When you work with DemandStream, your competitors don't. We take one plumbing client and one HVAC client per service area. That's the model. It keeps our incentives consistent with yours and guarantees the strategy we build is designed to put you ahead, not split between you and the shop down the street.
          </p>
          <p className="text-muted-foreground text-base mb-8">
            If your market is available, it's worth finding out now.
          </p>
          <Link
            to="/contact"
            className="btn-cta group inline-flex items-center gap-2"
          >
            Check Your Market
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MarketExclusivity;
