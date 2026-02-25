const concepts = [
  {
    label: "Days, Not Months",
    body: "Paid campaigns activate fast. Results are measurable within the first billing cycle."
  },
  {
    label: "Scale Up or Down",
    body: "Budget adjusts to your capacity. Peak season. Shoulder season. Emergency surge."
  },
  {
    label: "Emergency Capture",
    body: "High-intent searches happen now. Paid ads put you in front of them before the call goes elsewhere."
  },
  {
    label: "Install Pipeline",
    body: "Timed pushes during shoulder months fill the board when organic traffic slows."
  }
];

const PaidAdsDemandControl = () => {
  return (
    <section id="demand-control" className="py-20 lg:py-28 bg-background scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Section label + headline */}
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-cta mb-3">The Difference</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Paid Advertising Is Demand Control
            </h2>
          </div>

          {/* Two-column body */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-12">

            {/* Left — body copy */}
            <div className="space-y-5 text-text-secondary leading-relaxed">
              <p>
                SEO builds authority over months. Paid advertising activates in days.
              </p>
              <p>
                When a freeze event hits and your competitors are spending, you need to be in front of the call before it goes to voicemail. When February is slow and installs are stacking up, a targeted push can fill three weeks of open board time.
              </p>
              <p>
                That is what paid advertising does for plumbing and HVAC companies. It gives you a lever. Pull it when you need it. Ease off when capacity is full. Scale into the markets where you want to grow.
              </p>
              <p>
                The measurement that matters is not impressions or clicks. It is cost per booked call, booking rate, and whether the dispatch board can handle what comes in.
              </p>
            </div>

            {/* Right — 2x2 concept grid */}
            <div className="grid grid-cols-2 gap-4">
              {concepts.map((c, i) => (
                <div key={i} className="bg-surface-elevated border border-border rounded-xl p-5">
                  <p className="text-lg font-bold text-foreground mb-2">{c.label}</p>
                  <p className="text-sm text-text-secondary leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Bottom callout */}
          <div className="border-t border-border/40 pt-8">
            <p className="text-center text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Paid advertising does not replace SEO. It accelerates what SEO builds and fills the gaps SEO cannot close fast enough.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PaidAdsDemandControl;
