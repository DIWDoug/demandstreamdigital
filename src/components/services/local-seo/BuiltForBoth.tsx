import { Droplets, Thermometer, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const plumbingPoints = [
  "Emergency and high-intent keyword prioritization: 'emergency plumber near me,' 'hydro jetting [city],' 'water heater replacement [city]'",
  "Service area page structure aligned to actual dispatch coverage, not just major city names",
  "Review velocity as a primary trust signal for emergency callers comparing options",
  "GBP category and service configuration optimized for drain, water heater, slab leak, and repiping revenue",
  "Multi-truck radius scaling: as your coverage expands, the local SEO structure scales with it"
];

const hvacPoints = [
  "Heating vs. cooling keyword splits by season and market climate zone",
  "Install vs. repair keyword structure: each service type gets its own page, its own intent targeting",
  "Maintenance agreement visibility: positioning for customers searching for tune-ups and annual service plans",
  "Seasonal demand alignment: no-cool spikes, freeze prep, and shoulder season strategies",
  "Equipment transition and changeout keyword capture for high-margin revenue"
];

const BuiltForBoth = () => {
  return (
    <section className="py-20 lg:py-28 section-light relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-4">
              Trade-Specific Execution
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-balance">
              Built for Both. Engineered for Each.
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Plumbing and HVAC are different trades with different demand patterns, different seasonality, and different keyword structures. Every strategy we build treats them separately — even when we serve both for the same operator.
            </p>
          </div>

          {/* Two Column Cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Plumbing */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent-blue/10 flex items-center justify-center">
                  <Droplets className="h-7 w-7 text-accent-blue" />
                </div>
                <Link to="/plumbing-seo" className="text-xl lg:text-2xl font-semibold text-slate-900 hover:text-accent-blue transition-colors">Plumbing Local SEO</Link>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Plumbing demand is largely emergency-driven. A main line backup, a burst pipe, a water heater that stopped working — these are not planned purchases. The homeowner searches, they look at the Map Pack, and they call. Plumbing local SEO has to win that moment.
              </p>
              <ul className="space-y-3 mb-6">
                {plumbingPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2 shrink-0" />
                    <span className="text-slate-600 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/plumbing-seo" 
                className="btn-cta group inline-flex items-center gap-2 text-sm"
              >
                Plumbing SEO Details
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* HVAC */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <Thermometer className="h-7 w-7 text-amber-500" />
                </div>
                <Link to="/hvac-seo" className="text-xl lg:text-2xl font-semibold text-slate-900 hover:text-amber-500 transition-colors">HVAC Local SEO</Link>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                HVAC demand is seasonal. Peak season in a cooling-heavy market creates a fundamentally different call flow than shoulder season. HVAC local SEO has to account for both — ranking for emergency no-cool calls in summer and positioning for planned changeouts and maintenance agreements year-round.
              </p>
              <ul className="space-y-3 mb-6">
                {hvacPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span className="text-slate-600 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/hvac-seo" 
                className="btn-cta group inline-flex items-center gap-2 text-sm"
              >
                HVAC SEO Details
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltForBoth;
