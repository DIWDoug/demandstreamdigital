const blocks = [
  {
    label: "ZIP-Level Bid Adjustments",
    body: "Bid weight allocated by service density, average ticket, and competitive pressure by ZIP code.",
  },
  {
    label: "High-Margin Neighborhood Priority",
    body: "Higher-income areas with larger homes produce more repipe, water heater, and sewer line revenue per job.",
  },
  {
    label: "Competitive Defense Zones",
    body: "Markets where aggressive competitors spend heavily get defensive coverage to prevent call interception.",
  },
  {
    label: "Multi-Truck Territory Scaling",
    body: "As your fleet grows, campaign geography expands to match new dispatch capacity without wasted overlap.",
  },
];

const PlumbingSearchAdsGeoTerritory = () => {
  return (
    <section id="geo-territory" className="py-20 lg:py-28 bg-surface-dark scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Geo Control</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 text-balance leading-tight">
            Geo & Territory Bid Strategy
          </h2>

          <p className="text-base text-text-secondary leading-relaxed mb-4 max-w-3xl">
            Not every ZIP code in your service area produces the same quality of work. High-income neighborhoods generate higher average tickets on the same service types. Dense residential corridors produce more volume. Competitive zones require stronger bid defense.
          </p>
          <p className="text-base text-text-secondary leading-relaxed mb-10 max-w-3xl">
            We build bid structures that reflect your actual dispatch map. High-priority ZIPs receive heavier bid weight. Lower-margin areas are included but not over-invested. Competitor strongholds get defensive coverage without wasted spend.
          </p>

          <div className="space-y-4 max-w-3xl">
            {blocks.map((block, i) => (
              <div key={i} className="bg-surface-elevated border border-border/50 rounded-xl p-5">
                <p className="font-semibold text-foreground text-sm mb-2">{block.label}</p>
                <p className="text-text-secondary text-sm leading-relaxed">{block.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlumbingSearchAdsGeoTerritory;
