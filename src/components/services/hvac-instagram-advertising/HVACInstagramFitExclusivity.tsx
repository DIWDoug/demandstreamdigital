import { ArrowRight, Check, X } from "lucide-react";
import { Link } from "react-router-dom";

const HVACInstagramFitExclusivity = () => {
  const goodFit = [
    "You promote replacement services and want to grow install volume",
    "You offer financing and want to reach homeowners in the research phase",
    "You want brand reinforcement before peak cooling and heating seasons",
    "You have or are willing to produce real job photography",
    "You want to retarget website visitors who did not convert"
  ];
  const notFit = [
    "Emergency-only business model with no install or replacement focus",
    "No tracking foundation or CRM integration",
    "No willingness to invest in real visual content",
    "Looking for same-day call volume only"
  ];

  return (
    <>
      {/* FIT */}
      <section id="fit" className="py-20 lg:py-28 bg-surface-dark scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest text-accent-blue uppercase mb-3 text-center">SELECTIVE FIT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Is HVAC Instagram Advertising Right for Your Company?
          </h2>
          <p className="text-text-secondary text-center max-w-2xl mx-auto mb-10">
            Instagram works best for HVAC companies investing in brand authority alongside demand generation.
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
            When you work with DemandStream, your competitors don't. We take one HVAC client per service area. That keeps our incentives consistent with yours and means the Instagram strategy we build is working to put your brand in front of homeowners in your market. Not split with the company across town.
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

export default HVACInstagramFitExclusivity;
