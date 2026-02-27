const PlumbingSearchAdsPMax = () => {
  const whenDeploy = [
    "High-ticket repipe and replacement campaigns with longer decision cycles",
    "Remarketing to website visitors who did not convert on the first visit",
    "Install promotion campaigns during shoulder season pushes",
    "Markets where tracking integrity is confirmed and booking rate is stable",
  ];

  return (
    <section id="performance-max" className="py-20 lg:py-28 bg-surface-dark scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Expanded Reach</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 text-balance leading-tight">
            Performance Max: When and How We Deploy It
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-base text-text-secondary leading-relaxed mb-6">
                Performance Max runs across Google Search, Display, YouTube, and Discover from a single campaign. When tracking integrity is confirmed and the core search campaigns are producing clean cost-per-booked-call data, PMax can expand reach into homeowners who have shown intent but have not yet searched directly.
              </p>
              <p className="text-base text-text-secondary leading-relaxed mb-6">
                We deploy PMax as a support layer, not a replacement for structured search campaigns. The reason is simple: PMax requires clean conversion data to perform correctly. Without a confirmed booking rate signal feeding into the campaign, PMax optimizes toward whatever conversion it can find, which is usually not a booked call.
              </p>
              <div className="bg-surface-elevated border border-border/50 rounded-xl px-5 py-4">
                <p className="text-text-secondary text-sm leading-relaxed">
                  Core search campaigns run first. PMax runs when the data foundation is ready to support it.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-surface-elevated border border-border/50 rounded-2xl p-6 mb-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent-blue mb-4">When We Deploy PMax</p>
                <ul className="space-y-3">
                  {whenDeploy.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <span className="text-accent-blue mt-0.5 shrink-0">&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-cta/5 border border-cta/20 rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-cta mb-3">What PMax Does Not Replace</p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  PMax does not replace structured search campaigns for emergency and same-day plumbing searches. Emergency intent requires keyword-controlled search campaigns, not automated audience expansion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlumbingSearchAdsPMax;
