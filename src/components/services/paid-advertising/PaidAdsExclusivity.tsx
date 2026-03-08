import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import StreamTexture from "@/components/StreamTexture";

const PaidAdsExclusivity = () => {
  return (
    <section id="exclusivity" className="py-20 lg:py-28 bg-background relative overflow-hidden scroll-mt-32">
      <StreamTexture variant="dark" opacity={0.09} />
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle at 30% 50%, hsl(var(--cta)) 0%, transparent 60%),
                          radial-gradient(circle at 70% 50%, hsl(var(--accent-blue)) 0%, transparent 60%)`
      }} />
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-semibold uppercase tracking-wider mb-6">
            Exclusivity
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
            One Plumbing Company. One HVAC Company. Per Market.
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-4 max-w-2xl mx-auto">
            When you work with DemandStream, your competitors don't. We take one plumbing client and one HVAC client per service area. That's the model. It keeps our incentives aligned with yours and makes sure the strategy we build is designed to put you ahead, not split between you and the shop down the street.
          </p>
          <p className="text-muted-foreground text-base mb-10">
            Markets fill. If yours is still open, it's worth confirming now before a competitor does.
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

export default PaidAdsExclusivity;
