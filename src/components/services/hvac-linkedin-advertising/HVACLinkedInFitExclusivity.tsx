import { ArrowRight, Check, X } from "lucide-react";
import { Link } from "react-router-dom";

const HVACLinkedInFitExclusivity = () => {
  const goodFit = [
    "You pursue commercial HVAC contracts",
    "You offer preventative maintenance agreements",
    "You want multi-location and portfolio client partnerships",
    "You have capacity for B2B growth alongside residential operations",
    "You want a revenue channel that compounds over time"
  ];
  const notFit = [
    "Residential-only focus with no commercial service capability",
    "No CRM or call tracking in place",
    "No capacity to fulfill commercial contracts",
    "Looking for same-day call volume only"
  ];

  return (
    <>
      {/* FIT */}
      <section id="fit" className="py-20 lg:py-28 bg-surface-dark scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest text-accent-blue uppercase mb-3 text-center">SELECTIVE FIT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            Is HVAC LinkedIn Advertising Right for Your Company?
          </h2>
          <p className="text-text-secondary text-center max-w-2xl mx-auto mb-10">
            HVAC LinkedIn advertising is not the right channel for every operator. It is built for companies with commercial capacity and a genuine interest in contract-based recurring revenue.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            <div className="bg-white/5 border border-green-500/20 rounded-xl p-6">
              <h3 className="font-semibold text-green-400 mb-4">This Could Work Well</h3>
              <ul className="space-y-3">
                {goodFit.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                    <Check className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-red-500/20 rounded-xl p-6">
              <h3 className="font-semibold text-red-400 mb-4">Probably Not a Fit</h3>
              <ul className="space-y-3">
                {notFit.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                    <X className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center">
            <Link to="/contact" className="btn-cta inline-flex items-center gap-2">
              Claim Your Territory Today
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* EXCLUSIVITY */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, hsl(var(--cta)) 0%, transparent 60%),
                            radial-gradient(circle at 70% 50%, hsl(var(--accent-blue)) 0%, transparent 60%)`
        }} />
        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
          <p className="text-xs font-bold tracking-widest text-accent-blue uppercase mb-3">EXCLUSIVITY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            One HVAC Company. Per Market.
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-4 leading-relaxed">
            When you work with DemandStream, your competitors don't. We take one HVAC client per service area. That keeps our incentives consistent with yours and means the LinkedIn strategy we build is focused entirely on putting you ahead, not shared with the shop down the street.
          </p>
          <p className="text-text-secondary mb-8">If your market is available, it's worth finding out now. If it isn't, we'll tell you that too.</p>
          <Link to="/contact" className="btn-cta inline-flex items-center gap-2">
            Claim Your Territory Today
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default HVACLinkedInFitExclusivity;
