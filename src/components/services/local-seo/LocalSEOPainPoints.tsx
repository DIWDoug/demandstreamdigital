import { Package, Target, TrendingDown, Users } from "lucide-react";

const LocalSEOPainPoints = () => {
  const painPoints = [
    {
      icon: Package,
      title: "Same Package, Different Markets, Bad Results",
      body: "Your plumber in Boise and personal injury lawyer in Chicago need completely different strategies. Cookie-cutter packages ignore this reality and deliver mediocre results for everyone."
    },
    {
      icon: Target,
      title: "Underspending in Hard Markets, Overspending in Easy Ones",
      body: "Fixed-price packages mean you overdeliver where you did not need to and underdeliver where it mattered most. Your hardest clients get the worst results."
    },
    {
      icon: TrendingDown,
      title: "Clients Do Not Understand the Value",
      body: "Your clients see rankings, not the SEO value behind them. They do not know what those clicks would cost if they were paying for ads. Without that context, they question why they are paying you at all."
    },
    {
      icon: Users,
      title: "Impossible Expectations Kill Retention",
      body: "When pricing does not reflect competitive reality, clients expect results you cannot deliver. Then you lose them, and the revenue walks out the door."
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
              Why Most White-Label SEO Fails Your Clients
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              You have seen it before. The package looked great on paper, but six months later your clients are frustrated, threatening to leave, and you are scrambling to explain why rankings have not moved.
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
            <span className="font-semibold text-slate-900">There is a better way.</span> We scope every engagement to the actual competitive landscape. Your clients get what they need, and you keep the margin you earned.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocalSEOPainPoints;
