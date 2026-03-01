import { ArrowRight, Zap, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const columns = [
  {
    icon: Zap,
    title: "Emergency Revenue",
    body: "The highest-value plumbing calls, burst pipes, main line backups, water heater failures, are emergency-driven. We build your SEO to capture those searches first.",
    color: "text-cta",
    bg: "bg-cta/10"
  },
  {
    icon: TrendingUp,
    title: "Multi-Truck Growth",
    body: "As your coverage expands, the SEO structure grows with it. Every new service area gets a new ranking asset. No duplicate content, no doorway pages, clean geographic expansion.",
    color: "text-accent-blue",
    bg: "bg-accent-blue/10"
  },
  {
    icon: Shield,
    title: "Market Exclusivity",
    body: "We take one plumbing client per service area. When you work with DemandStream, your competitors don't. The strategy we build is designed to put you ahead, not split between you and the shop down the street.",
    color: "text-green-400",
    bg: "bg-green-400/10"
  }
];

const BuiltForPlumbers = () => {
  return (
    <section className="py-20 lg:py-28 bg-surface-dark relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-4">
              Who We Work With
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Built for Plumbing Operators Who Want Market Ownership
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed mb-4">
              Most plumbing companies run good operations. The techs show up, the work gets done right, and the customers are happy. The problem is that none of that matters for the next call if the phone doesn't ring.
            </p>
            <p className="text-base text-text-secondary max-w-3xl mx-auto leading-relaxed">
              We work exclusively with plumbing and HVAC companies. Not general contractors. Not home services. Everything we build is structured around how plumbing customers actually search and call.
            </p>
          </div>

          {/* Three columns */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {columns.map((col, i) => (
              <div key={i} className="bg-surface-elevated rounded-xl border border-border p-6 text-center">
                <div className={`w-12 h-12 rounded-xl ${col.bg} flex items-center justify-center mx-auto mb-4`}>
                  <col.icon className={`h-6 w-6 ${col.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{col.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{col.body}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              to="/contact"
              className="btn-cta group inline-flex items-center gap-2"
            >
              Check Market Availability
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltForPlumbers;
