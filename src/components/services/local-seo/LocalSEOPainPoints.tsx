import { Package, Target, TrendingDown, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const LocalSEOPainPoints = () => {
  const painPoints = [
    {
      icon: Users,
      title: "Impossible Expectations Kill Retention",
      body: "When pricing ignores competitive reality, expectations break first. Results fall short, trust erodes, and retention suffers."
    },
    {
      icon: Package,
      title: "One Package for Every Market. Predictable Disappointment.",
      body: "A plumber in Boise and a personal injury lawyer in Chicago do not need the same strategy. Cookie-cutter packages ignore competitive reality and deliver diluted results everywhere."
    },
    {
      icon: Target,
      title: "Underspending in Hard Markets, Overspending in Easy Ones",
      body: "Fixed pricing forces you to overdeliver where it is unnecessary and underdeliver where competition is fierce. The clients who need the most support feel it first."
    },
    {
      icon: TrendingDown,
      title: "Clients Do Not Understand the Value",
      body: "Clients see rankings. They do not see the revenue those rankings replace. Without that context, every invoice invites doubt."
    }
  ];

  return (
    <section className="py-20 lg:py-28 section-light relative">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-4">
              The Pattern We See
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-6 text-balance">
              Why Most White-Label SEO Fails Your Clients
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              You have seen this before. The package looked good on paper, but six months later clients are frustrated, questioning the spend, and you are left explaining why results never matched expectations.
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

          <div className="text-center mt-14 space-y-6">
            <p className="text-slate-600 text-lg">
              We scope every engagement to the actual competitive landscape. <span className="font-semibold text-slate-900">Clients get what they need, expectations stay grounded, and you keep the margin you earned.</span>
            </p>
            <a 
              href="/contact" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cta hover:bg-cta/90 text-white font-medium rounded-lg transition-colors"
            >
              Schedule a Discovery Call
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSEOPainPoints;
