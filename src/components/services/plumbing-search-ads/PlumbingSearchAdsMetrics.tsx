const PlumbingSearchAdsMetrics = () => {
  return (
    <section id="metrics" className="py-20 lg:py-28 bg-surface-dark scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">What Gets Measured</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance leading-tight">
            Cost Per Booked Call Is the Only Metric That Matters
          </h2>
          <p className="text-lg text-text-secondary mb-12 max-w-3xl">
            Most agencies report what ad platforms track. We report what shows up on your dispatch board.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-surface-elevated/40 border border-border/30 rounded-2xl p-8">
              <p className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-5">What Most Agencies Report</p>
              <ul className="space-y-4">
                {["Cost Per Click", "Cost Per Lead", "Click-Through Rate"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-text-muted/50 text-lg">—</span>
                    <span className="text-text-muted line-through text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-cta/5 border border-cta/20 rounded-2xl p-8">
              <p className="text-xs font-semibold tracking-widest uppercase text-cta mb-5">What We Report</p>
              <ul className="space-y-4">
                {[
                  { label: "Cost Per Booked Call", desc: "acquisition cost tied directly to revenue" },
                  { label: "Booking Rate", desc: "answered calls converting to scheduled jobs" },
                  { label: "Close Rate", desc: "booked calls converting to sold work" },
                  { label: "Revenue Per Job", desc: "call mix quality, not just call volume" },
                  { label: "Return on Ad Spend", desc: "budget producing more than it costs" },
                  { label: "Dispatch Load", desc: "capacity used versus capacity available" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-cta mt-0.5 shrink-0">&#10003;</span>
                    <span className="text-foreground text-sm">
                      <span className="font-semibold">{item.label}</span>
                      <span className="text-text-secondary"> — {item.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlumbingSearchAdsMetrics;
