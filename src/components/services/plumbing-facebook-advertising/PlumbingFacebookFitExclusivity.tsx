import { ArrowRight, Check, X } from "lucide-react";
import { Link } from "react-router-dom";

const PlumbingFacebookFitExclusivity = () => {
  const goodFit = [
    "You offer water heater replacement and want to grow that volume",
    "You promote financing options on repipe or larger jobs",
    "You want to grow a plumbing membership plan and build recurring revenue",
    "You want predictable replacement demand in slower emergency months",
    "You have call tracking in place or are ready to implement it"
  ];
  const notFit = [
    "You rely only on emergency repairs with no replacement or membership focus",
    "No call tracking or CRM integration in place",
    "No long-term demand generation strategy beyond Google Ads",
    "You want same-day call volume only with no interest in nurturing decisions"
  ];

  return (
    <>
      {/* FIT */}
      <section id="fit" className="py-20 lg:py-28 bg-surface-dark scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest text-accent-blue uppercase mb-3 text-center">SELECTIVE FIT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center">
            Is Plumbing Facebook Advertising Right for Your Company?
          </h2>
          <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
            Facebook works best for plumbing companies building beyond emergency-only demand.
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
            One Plumbing Company. Per Market.
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-4 leading-relaxed">
            When you work with DemandStream, your competitors don't. We take one plumbing client per service area — full stop. That's the model. It keeps our incentives consistent with yours and means the Facebook strategy we build is designed to put you ahead of every other plumber in your market, not split between you and the company down the street.
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

export default PlumbingFacebookFitExclusivity;
