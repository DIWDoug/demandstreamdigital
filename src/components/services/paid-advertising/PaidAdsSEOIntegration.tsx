const integrationRows = [
  {
    label: "SEO lowers blended CPL",
    body: "Every organic call that books reduces the average cost across your paid budget."
  },
  {
    label: "Reviews improve Quality Score",
    body: "Google rewards advertisers with strong reputation signals. Better scores mean lower CPCs."
  },
  {
    label: "Organic plus paid dominance builds trust",
    body: "Showing in both Map Pack and paid results on the same search increases call preference."
  },
  {
    label: "Retargeting supports organic visitors",
    body: "A homeowner who found you through SEO but did not call can be recaptured through paid retargeting."
  },
  {
    label: "Data crossfeeds between channels",
    body: "Call volume, booking rate, and keyword data flow between SEO and paid to refine both."
  }
];

const PaidAdsSEOIntegration = () => {
  return (
    <section className="py-20 lg:py-28 bg-card border-y border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">The Connection</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12">
            Paid Ads and SEO Together Control the Market
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left — body paragraphs */}
            <div className="space-y-5 text-text-secondary leading-relaxed">
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

            {/* Right — row list */}
            <div>
              {integrationRows.map((row, i) => (
                <div key={i}>
                  <div className="py-5">
                    <p className="font-semibold text-foreground text-[15px] mb-1.5">{row.label}</p>
                    <p className="text-text-secondary text-sm leading-relaxed">{row.body}</p>
                  </div>
                  {i < integrationRows.length - 1 && <hr className="border-t border-border/50" />}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PaidAdsSEOIntegration;
