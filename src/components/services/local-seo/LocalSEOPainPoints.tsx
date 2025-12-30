import { Package, Target, TrendingDown, Users } from "lucide-react";

const LocalSEOPainPoints = () => {
  const painPoints = [
    {
      icon: Package,
      title: "One-Size-Fits-All Doesn't Exist",
      body: "A plumber in Boise competes differently than a personal injury lawyer in Chicago. Cookie-cutter packages ignore the competitive dynamics that actually determine what it takes to rank."
    },
    {
      icon: Target,
      title: "Markets Vary Dramatically",
      body: "City size, population density, and local competition intensity all affect what's required. What works in a small town won't move the needle in a major metro."
    },
    {
      icon: TrendingDown,
      title: "Generic Tactics Burn Budget",
      body: "Agencies selling fixed-price packages often deliver fixed-effort work. The result: over-serving easy markets and under-delivering in competitive ones."
    },
    {
      icon: Users,
      title: "Client Expectations Get Misaligned",
      body: "When pricing doesn't reflect market reality, clients either overpay for simple wins or get frustrated when competitive markets take longer than promised."
    }
  ];

  return (
    <section className="py-20 lg:py-28 section-light relative">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-4">
              The Problem
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-6 text-balance">
              Why Package-Based Local SEO Falls Short
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Most white-label providers sell the same package to every agency. That's convenient for them, but it creates problems for you and your clients.
            </p>
          </div>

          {/* Pain Point Cards */}
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {painPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 lg:p-8 border border-slate-200 shadow-sm hover:border-cta/30 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cta/10 flex items-center justify-center shrink-0">
                    <point.icon className="h-5 w-5 text-cta" />
                  </div>
                  <strong className="text-lg font-semibold text-slate-900">
                    {point.title}
                  </strong>
                </div>
                <p className="text-slate-600 text-sm leading-7">
                  {point.body}
                </p>
              </div>
            ))}
          </div>

          {/* Transition Line */}
          <p className="text-center text-slate-600 text-lg mt-14">
            We scope every engagement to the actual market. Your clients get what they need, and you protect your margins.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocalSEOPainPoints;
