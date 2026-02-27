const blocks = [
  {
    label: "Cooling Season Scaling",
    body: "Budget increases during summer heat events to capture no-cool calls before competitors intercept them.",
  },
  {
    label: "Heating Season Defense",
    body: "Pre-staged heating budgets activate as temperatures drop, keeping the phone ringing during no-heat emergencies.",
  },
  {
    label: "Shoulder Season Install Push",
    body: "Between peak seasons, campaigns shift to replacement and install promotions that fill the board with higher-margin work.",
  },
  {
    label: "Capacity-Based Throttle",
    body: "When the board is full during peak demand, spend is reduced to protect the operation from calls it cannot fulfill.",
  },
];

const HVACSearchAdsSeasonalStrategy = () => {
  return (
    <section id="seasonal-strategy" className="py-20 lg:py-28 bg-surface-dark scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Seasonal Control</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 text-balance leading-tight">
            Heating and Cooling Seasonal Bid Strategy
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-base text-text-secondary leading-relaxed mb-6">
                HVAC is the most seasonally volatile trade in local search. Demand spikes around heat waves, freeze events, and shoulder-season maintenance windows. A campaign running on a flat monthly budget is leaving revenue on the table during peak events and wasting spend during slow periods.
              </p>
              <p className="text-base text-text-secondary leading-relaxed">
                We build a seasonal bid calendar before campaigns launch. Cooling budgets increase before and during summer peaks. Heating budgets scale into winter demand. Shoulder seasons shift emphasis toward maintenance agreements, tune-up campaigns, and install promotions that fill board time before the next peak arrives.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {blocks.map((block, i) => (
                <div key={i} className="bg-surface-elevated border border-border/50 rounded-xl p-5">
                  <p className="font-semibold text-foreground text-sm mb-2">{block.label}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">{block.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HVACSearchAdsSeasonalStrategy;
