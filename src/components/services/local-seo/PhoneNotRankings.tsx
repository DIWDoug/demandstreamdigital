import { Phone, BarChart3, Gauge, AlertTriangle } from "lucide-react";

const points = [
  {
    icon: Phone,
    title: "Call Tracking Is Mandatory",
    body: "Every campaign we build includes call tracking so we know which searches, pages, and channels are producing booked calls, not just calls."
  },
  {
    icon: BarChart3,
    title: "Booking Rate Is a Primary Metric",
    body: "Rankings tell us visibility. Booking rate tells us whether that visibility is producing revenue. We report on both."
  },
  {
    icon: Gauge,
    title: "Capacity Alignment Matters",
    body: "If your dispatch board is at capacity during peak season, we throttle. If shoulder season creates gaps, we push. Marketing that ignores operational reality creates chaos, not growth."
  },
  {
    icon: AlertTriangle,
    title: "Missed Calls Are Measurable Losses",
    body: "A missed call during a no-cool spike is not a minor inconvenience. It is a booked job that went to your competitor. We identify missed call patterns and address them before scaling volume."
  }
];

const PhoneNotRankings = () => {
  return (
    <section className="py-20 lg:py-28 bg-surface-dark relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-4">
              The Starting Point
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
              Local SEO Starts With the Phone, Not Rankings
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              A ranking is not revenue. A booked call is. Before we run a single campaign, we look at call tracking data, your answer rate, and how your dispatch board handles volume.
            </p>
          </div>

          {/* Insight callout */}
          <div className="bg-surface-elevated border border-border/50 rounded-xl p-6 mb-10 text-center">
            <p className="text-text-secondary text-base leading-relaxed mb-3">
              A shop with a <span className="text-foreground font-semibold">45% booking rate</span> produces different results than one running at <span className="text-foreground font-semibold">75%</span>.
            </p>
            <p className="text-foreground font-medium text-base">
              That gap is addressable, but has to be identified first.
            </p>
          </div>

          {/* Points grid - all 4 visible */}
          <div className="grid sm:grid-cols-2 gap-6">
            {points.map((point, index) => (
              <div
                key={index}
                className="bg-surface-elevated border border-border/50 rounded-xl p-6 hover:border-accent-blue/30 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center shrink-0">
                    <point.icon className="h-5 w-5 text-accent-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{point.title}</h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneNotRankings;
