import { TrendingDown, Star, BarChart3, RefreshCw, Database, Link2 } from "lucide-react";

const integrationRows = [
  {
    icon: Link2,
    label: "URL changes sync across both teams",
    body: "When SEO updates page URLs and paid ads are not notified, campaigns point to 301 redirects or 404s. Quality Score drops. CPCs rise. Spend goes to waste. With one team managing both, this structural gap is eliminated before it costs money."
  },
  {
    icon: TrendingDown,
    label: "SEO lowers blended cost per booked call",
    body: "Every organic call that books reduces the average cost across your paid budget. When SEO is building authority in the same markets paid ads are targeting, the flywheel compounds."
  },
  {
    icon: Star,
    label: "Reviews improve paid Quality Score",
    body: "Google rewards advertisers with strong reputation signals. Active review velocity improves Quality Score, which lowers CPCs across every campaign — a direct return from your reputation management work."
  },
  {
    icon: BarChart3,
    label: "Organic + paid dominance builds trust",
    body: "Showing in both the Map Pack and paid results on the same search increases call preference. Most homeowners call the company they see twice before they scroll to the ones they see once."
  },
  {
    icon: RefreshCw,
    label: "Retargeting captures organic visitors",
    body: "A homeowner who found you through SEO but did not call can be recaptured through paid retargeting. The same audience that trusted your organic content is the highest-converting retargeting segment."
  },
  {
    icon: Database,
    label: "Data crossfeeds between channels",
    body: "Call volume, booking rate, and keyword data flow between SEO and paid to refine both. Exact match terms that convert in paid ads tell us which organic pages to build. SEO traffic patterns tell us which paid bids are worth raising."
  }
];

const PaidAdsSEOIntegration = () => {
  return (
    <section className="py-24 lg:py-32 bg-surface-elevated">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <div className="mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">The Connection</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-3xl">
              Why SEO and Paid Ads{" "}
              <span className="text-cta">Must Run as One Team</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            <div>
              <div className="space-y-5 text-text-secondary leading-relaxed mb-10">
                <p>
                  Running paid ads without SEO means paying full price for every call, indefinitely. Running SEO without paid ads means slower fills during shoulder seasons and no emergency surge defense.
                </p>
                <p>
                  When both run together under one team, structural gaps disappear. URL changes get communicated before they affect campaigns. Quality Score improvements from reputation work show up in CPC data. The data from paid campaigns informs which SEO pages to build.
                </p>
                <p>
                  The reverse is also true: when SEO and paid teams are siloed, the cracks are expensive. We audited one account where URL changes from the SEO side left over $61,000 in ad spend hitting redirects and 404 pages — running quietly, undetected, for months.
                </p>
              </div>

              {/* Stat callout */}
              <div className="bg-[#0D1B2A] rounded-xl p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent-blue mb-4">The Cost of Siloed Teams</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-cta text-2xl font-bold leading-none shrink-0">$61K</span>
                    <p className="text-white/60 text-sm leading-relaxed">in ad spend hitting 301 redirects and broken pages — because SEO updated URLs and paid ads never heard about it</p>
                  </div>
                  <div className="border-t border-white/10 pt-4 flex items-start gap-4">
                    <span className="text-cta text-2xl font-bold leading-none shrink-0">74%</span>
                    <p className="text-white/60 text-sm leading-relaxed">of eligible auctions missed on campaigns with Quality Score issues caused by mismatched landing page URLs</p>
                  </div>
                </div>
              </div>
            </div>

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
