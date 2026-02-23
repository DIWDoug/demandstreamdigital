import { Users, Shuffle, TrendingDown, Clock } from "lucide-react";

const InboundPainPoints = () => {
  const painPoints = [
    {
      icon: Users,
      title: "Hiring Specialists Is Expensive",
      body: "A single SEO specialist costs $60-80K/year. Add paid media, email, and content—you're looking at $200K+ in payroll before you've delivered a single campaign."
    },
    {
      icon: Shuffle,
      title: "Freelancers Create Inconsistency",
      body: "Different contractors mean different processes, quality levels, and communication styles. Your clients feel the inconsistency even when you don't."
    },
    {
      icon: TrendingDown,
      title: "Siloed Tactics Don't Compound",
      body: "SEO alone won't save a bad funnel. Paid media can't fix weak positioning. When channels don't work together, you're paying for fragmented effort."
    },
    {
      icon: Clock,
      title: "Scope Creep Eats Margins",
      body: "What starts as 'local SEO' becomes GBP management, review generation, content, and reporting. Without clear boundaries, profitability disappears."
    }
  ];

  return (
    <section id="pain-points" className="py-20 lg:py-28 section-light relative">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-4">
              The Reality
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-6 text-balance">
              Why In-House Inbound Marketing Breaks Down
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              It's not a strategy problem. It's an execution and economics problem. Here's what we see agencies struggle with.
            </p>
          </div>

          {/* Pain Point Cards */}
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {painPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 lg:p-8 border border-slate-200 shadow-sm hover:border-accent-blue/30 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center shrink-0">
                    <point.icon className="h-5 w-5 text-accent-blue" />
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
            You don't need another vendor. You need an execution partner who operates as an extension of your team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InboundPainPoints;
