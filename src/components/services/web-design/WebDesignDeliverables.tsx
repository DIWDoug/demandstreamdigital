const deliverables = [
  {
    label: "Custom Design",
    body: "Every site is designed from scratch to your brand. No shared templates, no recycled layouts."
  },
  {
    label: "Mobile-First Build",
    body: "Emergency searches happen on phones. We build for mobile conversion first, then desktop — not the other way around."
  },
  {
    label: "Location & Service Area Pages",
    body: "Each city and service combination gets its own optimized page — the architecture local search requires to rank."
  },
  {
    label: "Core Web Vitals Optimized",
    body: "Speed, interactivity, and visual stability scores that meet Google's thresholds — built in, not patched on."
  },
  {
    label: "Call Tracking Integration",
    body: "Dynamic number insertion connects each traffic source to call outcome. You know which page and channel produced each booked call."
  },
  {
    label: "Lead Capture Architecture",
    body: "Forms, chat widgets, and CTAs positioned around the moments homeowners make booking decisions — not decorative elements."
  },
  {
    label: "CRM & Dispatch Integration",
    body: "ServiceTitan, Jobber, and similar platforms connected to your website so leads move directly to the dispatch board."
  },
  {
    label: "SEO Foundation Built In",
    body: "Schema markup, structured data, canonical tags, sitemap, and on-page optimization delivered at launch — not added later."
  },
];

const WebDesignDeliverables = () => {
  return (
    <section id="what-we-build" className="py-20 lg:py-28 bg-card border-y border-border scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">What We Build</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Every Build Includes the Infrastructure That Makes Other Channels Work
          </h2>
          <p className="text-text-secondary mb-12 max-w-2xl">
            A DemandStream web build isn't a design project. It's a revenue infrastructure project. The design is how it looks. The architecture is what makes it perform.
          </p>

          <div className="grid sm:grid-cols-2 gap-px bg-border/40 rounded-2xl overflow-hidden border border-border/40">
            {deliverables.map((item, i) => (
              <div key={i} className="bg-card p-6 lg:p-7 flex gap-4 items-start">
                <div className="shrink-0 w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center mt-0.5">
                  <span className="text-accent-blue text-xs font-bold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground mb-1">{item.label}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDesignDeliverables;
