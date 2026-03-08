import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HVACPaidAdsExclusivity = () => {
  return (
    <section id="exclusivity" className="py-20 lg:py-28 bg-background relative overflow-hidden scroll-mt-32">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle at 30% 50%, hsl(var(--cta)) 0%, transparent 60%),
                          radial-gradient(circle at 70% 50%, hsl(var(--accent-blue)) 0%, transparent 60%)`
      }} />
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(226,232,240,0.8) 20%, rgba(226,232,240,0.8) 80%, transparent)" }} />
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-semibold uppercase tracking-wider mb-4">Exclusivity</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
            One HVAC Company Per Market.
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-4 max-w-2xl mx-auto">
            When you work with DemandStream, your competitors don't. We take one HVAC client per service area. That's the model. It keeps our incentives consistent with yours and makes sure the strategy we build is designed to put you ahead, not split between you and the shop down the street.
          </p>
          <p className="text-muted-foreground text-base mb-10">
            If your market is available, it's worth finding out now.
          </p>
          <Link
            to="/contact"
            className="btn-cta group inline-flex items-center gap-2"
          >
            Claim Your Territory Today
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HVACPaidAdsExclusivity;
