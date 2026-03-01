import { ArrowRight, Phone, MapPin, Search, Target, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

const painPoints = [
  {
    icon: MapPin,
    title: "Proximity Changes Everything",
    body: "A plumbing company ranking #1 from three miles away may not appear at all from across the service area. Local rankings shift based on where the searcher is standing. A strategy built around one ZIP code is not a strategy — it's a starting point.",
    color: "text-cta",
    bg: "bg-cta/10",
  },
  {
    icon: Search,
    title: "Emergency Intent Is Different",
    body: "A homeowner searching 'no-heat repair' at 6am on a cold morning is not comparison shopping. That call goes to whoever shows up in the Map Pack right now. HVAC and plumbing local SEO have to prioritize emergency and high-intent searches first — not just high-volume keywords.",
    color: "text-accent-blue",
    bg: "bg-accent-blue/10",
  },
  {
    icon: Target,
    title: "Competition Varies by Market",
    body: "A plumber in Boise competes in a completely different landscape than one in Dallas or Chicago. Market density, review counts, and GBP signal requirements differ in every market. Applying the same tactics everywhere produces inconsistent results.",
    color: "text-accent-green",
    bg: "bg-accent-green/10",
  },
  {
    icon: TrendingUp,
    title: "Review Velocity Drives Rankings",
    body: "Review volume, recency, and response discipline are direct ranking factors in local search. Most generic SEO packages treat reviews as an afterthought. In plumbing and HVAC, review velocity is one of the highest-leverage activities in the entire strategy.",
    color: "text-cta",
    bg: "bg-cta/10",
  },
  {
    icon: Shield,
    title: "Authority Requirements Differ",
    body: "Some markets require aggressive local link building. Others need citation cleanup and GBP signal refinement. A package that delivers the same deliverables everywhere misses the actual bottleneck in each market.",
    color: "text-accent-blue",
    bg: "bg-accent-blue/10",
  },
];

const LocalSEOProblemSection = () => {
  return (
    <section className="py-20 lg:py-28 section-light relative">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* LEFT: Condensed copy */}
            <div className="lg:sticky lg:top-32">
              <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-4">
                The Pattern We See
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-balance leading-tight">
                Why Cookie-Cutter Local SEO Fails Plumbing & HVAC Companies
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Plumbing and HVAC are not generic home service businesses. They are regulated, seasonal, capacity-constrained trades where a missed call in peak season is real revenue walking out the door.
              </p>
              <div className="bg-gradient-to-r from-cta/5 to-transparent border-l-4 border-cta rounded-r-xl px-5 py-4 mb-8">
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  When a homeowner's AC goes out in July, they don't browse. They search and call whoever shows up first. Plumbing and HVAC local SEO has to be built around that urgency — not applied from a template that works the same way for a dentist or a dog groomer.
                </p>
              </div>
              <p className="text-slate-500 text-sm mb-8">
                Effective plumbing & HVAC local SEO requires scoping to the actual market — not templated deliverables.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-cta hover:bg-cta/90 text-white font-medium rounded-lg transition-colors text-sm"
                >
                  Schedule a Discovery Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-cta hover:border-cta hover:text-white font-medium transition-all text-sm"
                >
                  <Phone className="h-4 w-4" />
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>

            {/* RIGHT: Insight rows */}
            <div>
              {painPoints.map((point, i) => {
                const Icon = point.icon;
                return (
                  <div key={i}>
                    <div className="flex items-start gap-4 py-6">
                      <div className={`w-9 h-9 rounded-lg ${point.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                        <Icon className={`h-4 w-4 ${point.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-900 text-[15px] mb-1.5">
                          {point.title}
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {point.body}
                        </p>
                      </div>
                    </div>
                    {i < painPoints.length - 1 && (
                      <hr className="border-t border-slate-200" />
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSEOProblemSection;
