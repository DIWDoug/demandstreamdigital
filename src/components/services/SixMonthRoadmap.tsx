import { Check, ArrowRight } from "lucide-react";

const phases = [
  {
    month: "Month 1",
    title: "Foundation",
    focus: "Discovery & Setup",
    items: [
      "Technical SEO audit & fixes",
      "GBP optimization & verification",
      "Tracking & analytics setup",
      "Baseline reporting configured",
    ],
  },
  {
    month: "Month 2",
    title: "Visibility",
    focus: "Local SEO & Maps",
    items: [
      "On-page local optimization",
      "Service area page buildout",
      "Citation building begins",
      "Review generation activated",
    ],
  },
  {
    month: "Month 3",
    title: "Acceleration",
    focus: "Paid Media Launch",
    items: [
      "Google Ads campaign launch",
      "Landing page optimization",
      "Call tracking integration",
      "Initial bid strategy testing",
    ],
  },
  {
    month: "Month 4",
    title: "Expansion",
    focus: "Multi-Channel Growth",
    items: [
      "Meta/social ads activated",
      "Retargeting campaigns live",
      "Local link acquisition",
      "Content calendar execution",
    ],
  },
  {
    month: "Month 5",
    title: "Authority",
    focus: "Trust & Credibility",
    items: [
      "Digital PR outreach",
      "Industry directory submissions",
      "Review velocity maintained",
      "Thought leadership content",
    ],
  },
  {
    month: "Month 6",
    title: "Optimization",
    focus: "Retention & Scale",
    items: [
      "Email automation sequences",
      "Performance optimization",
      "Quarterly strategy review",
      "Roadmap for next phase",
    ],
  },
];

const SixMonthRoadmap = () => {
  return (
    <section className="py-20 lg:py-28 bg-surface-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-3">
              Example Engagement
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              A 6-Month Roadmap
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Here's how a coordinated local marketing engagement might unfold. 
              Your roadmap is scoped to your goals—this is just one example.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connection line - desktop */}
            <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-0.5 bg-gradient-to-r from-accent-blue/20 via-cta/40 to-accent-blue/20" />

            {/* Phases grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 lg:gap-4">
              {phases.map((phase, index) => (
                <div key={index} className="relative group">
                  {/* Month indicator */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-full bg-cta/10 border-2 border-cta/30 flex items-center justify-center text-cta font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="lg:hidden">
                      <p className="text-xs text-text-muted uppercase tracking-wider">{phase.month}</p>
                      <p className="text-sm font-semibold text-foreground">{phase.title}</p>
                    </div>
                    {/* Arrow connector - mobile/tablet */}
                    {index < phases.length - 1 && (
                      <ArrowRight className="h-4 w-4 text-text-muted ml-auto lg:hidden" />
                    )}
                  </div>

                  {/* Card */}
                  <div className="bg-surface-elevated border border-border/50 rounded-xl p-5 h-full group-hover:border-accent-blue/30 transition-colors">
                    <div className="hidden lg:block mb-3">
                      <p className="text-xs text-text-muted uppercase tracking-wider">{phase.month}</p>
                      <p className="text-base font-semibold text-foreground">{phase.title}</p>
                    </div>
                    <p className="text-accent-blue text-xs font-medium mb-3">{phase.focus}</p>
                    <ul className="space-y-2">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-text-secondary text-xs">
                          <Check className="h-3 w-3 text-cta mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-center text-text-muted text-sm mt-10 max-w-xl mx-auto">
            Every engagement is scoped individually. Timelines, priorities, and channels 
            are determined during discovery—not predetermined by package tiers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SixMonthRoadmap;