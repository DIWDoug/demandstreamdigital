import { TrendingDown, Star, BarChart3, RefreshCw, Database } from "lucide-react";

const integrationRows = [
  {
    icon: TrendingDown,
    label: "SEO lowers blended CPL",
    body: "Every organic call that books reduces the average cost across your paid budget."
  },
  {
    icon: Star,
    label: "Reviews improve Quality Score",
    body: "Google rewards advertisers with strong reputation signals. Better scores mean lower CPCs."
  },
  {
    icon: BarChart3,
    label: "Organic + paid dominance builds trust",
    body: "Showing in both Map Pack and paid results on the same search increases call preference."
  },
  {
    icon: RefreshCw,
    label: "Retargeting supports organic visitors",
    body: "A homeowner who found you through SEO but did not call can be recaptured through paid retargeting."
  },
  {
    icon: Database,
    label: "Data crossfeeds between channels",
    body: "Call volume, booking rate, and keyword data flow between SEO and paid to refine both."
  }
];

const PaidAdsSEOIntegration = () => {
  return (
    <section className="py-24 lg:py-32 bg-surface-elevated">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">The Connection</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-3xl">
              Paid Ads and SEO Together{" "}
              <span className="text-cta">Control the Market</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left — copy + stat callout */}
            <div>
              <div className="space-y-5 text-text-secondary leading-relaxed mb-10">
                <p>
                  Running paid ads without SEO means paying full price for every call, indefinitely. Running SEO without paid ads means slower fills during shoulder seasons and no emergency surge defense.
                </p>
                <p>
                  When both run together, the blended cost per booked call drops. Organic traffic converts at a higher rate when your reviews and GBP are strong. Paid campaigns perform better when your landing pages are built for intent, not just traffic.
                </p>
                <p>
                  The data crossfeeds. Call tracking from paid campaigns informs which keywords to build organic content around. Review velocity from the reputation system improves paid ad Quality Scores. Every channel makes the others more efficient.
                </p>
              </div>

              {/* Stat callout bar */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background border border-border rounded-xl p-5">
                  <p className="text-3xl font-bold text-cta mb-1">38%</p>
                  <p className="text-xs text-text-secondary leading-snug">lower blended CPL when SEO and paid run together</p>
                </div>
                <div className="bg-background border border-border rounded-xl p-5">
                  <p className="text-3xl font-bold text-accent-blue mb-1">2×</p>
                  <p className="text-xs text-text-secondary leading-snug">higher conversion rate on pages built for ad intent</p>
                </div>
              </div>
            </div>

            {/* Right — icon-driven rows */}
            <div className="divide-y divide-border/50">
              {integrationRows.map((row, i) => {
                const Icon = row.icon;
                return (
                  <div key={i} className="flex items-start gap-4 py-5 first:pt-0 last:pb-0">
                    <div className="w-9 h-9 rounded-lg bg-accent-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-accent-blue" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-[15px] mb-1">{row.label}</p>
                      <p className="text-text-secondary text-sm leading-relaxed">{row.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PaidAdsSEOIntegration;
