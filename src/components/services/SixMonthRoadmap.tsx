import { Check, ArrowRight } from "lucide-react";

const phases = [
  {
    month: "Month 1",
    title: "Build & Launch",
    focus: "Foundation + First Campaigns",
    hours: "~42 hrs",
    items: [
      "Technical SEO audit & priority fixes",
      "GBP optimization & verification",
      "Tracking, analytics & call tracking setup",
      "Service area pages created",
      "Citation building initiated",
      "Google Ads campaign launched",
      "Landing page optimization",
      "Review generation activated",
      "Baseline reporting configured",
    ],
  },
  {
    month: "Month 2",
    title: "Expand & Refine",
    focus: "Multi-Channel + Optimization",
    hours: "~42 hrs",
    items: [
      "Meta/social ads launched",
      "Retargeting campaigns live",
      "Google Ads bid optimization",
      "Local link outreach begins",
      "Content calendar execution",
      "GBP posting schedule active",
      "Citation cleanup continues",
      "First month performance review",
    ],
  },
  {
    month: "Month 3",
    title: "Authority & Scale",
    focus: "Trust Signals + Growth",
    hours: "~42 hrs",
    items: [
      "Digital PR outreach",
      "Industry directory submissions",
      "Email automation setup",
      "Landing page A/B testing",
      "Keyword expansion",
      "Ad creative refresh",
      "Review velocity maintained",
      "Quarterly strategy review",
    ],
  },
  {
    month: "Months 4–6",
    title: "Ongoing Management",
    focus: "Optimize, Maintain, Grow",
    hours: "~42 hrs/mo",
    items: [
      "Continuous campaign optimization",
      "Content creation & publishing",
      "Link building & authority work",
      "Review management & response",
      "Monthly reporting & insights",
      "Seasonal adjustments",
      "New opportunity identification",
      "Strategy refinement",
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
              Example: $2,500/mo Engagement
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              6-Month Roadmap
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              At ~$60/hr, that's roughly 42 hours of execution per month. Here's how a full 
              digital inbound marketing engagement unfolds—heavy lifting upfront, then ongoing optimization.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Phases grid - 4 columns */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {phases.map((phase, index) => (
                <div key={index} className="relative group">
                  {/* Month indicator */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-cta/10 border-2 border-cta/30 flex items-center justify-center text-cta font-bold">
                      {index === 3 ? "4–6" : index + 1}
                    </div>
                    <div>
                      <p className="text-xs text-text-muted uppercase tracking-wider">{phase.month}</p>
                      <p className="text-sm font-semibold text-foreground">{phase.title}</p>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="bg-surface-elevated border border-border/50 rounded-xl p-5 h-full group-hover:border-accent-blue/30 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-accent-blue text-xs font-medium">{phase.focus}</p>
                      <span className="text-xs text-text-muted bg-surface-dark px-2 py-0.5 rounded">{phase.hours}</span>
                    </div>
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
            Every engagement is scoped individually. This example assumes full-service 
            digital inbound marketing—your scope may include fewer channels.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SixMonthRoadmap;