import { Phone, BarChart3, Gauge, AlertTriangle } from "lucide-react";

const points = [
  {
    icon: Phone,
    title: "Call Tracking Is Mandatory",
    body: "Every plumbing SEO campaign we build includes call tracking so we know which searches and pages are producing booked calls — not just calls. Ranking data without call data is incomplete."
  },
  {
    icon: BarChart3,
    title: "Booking Rate Is Tracked, Not Assumed",
    body: "Rankings tell us visibility. Booking rate tells us whether that visibility is converting to revenue. A plumbing company with a 45% booking rate produces different results than one running at 72%. That gap is addressable — but it has to be identified before we scale volume."
  },
  {
    icon: AlertTriangle,
    title: "Missed Calls Are Measurable Losses",
    body: "A missed call during a freeze event or a no-hot-water spike is a job that went to your competitor. We identify missed call patterns and address them before scaling volume. Emergency calls cannot go to voicemail."
  },
  {
    icon: Gauge,
    title: "Capacity Alignment Is Built In",
    body: "If your board is full in July, we throttle. If February is slow, we push. Marketing that ignores your operational reality creates chaos, not growth. Plumbing SEO has to align with how your operation actually runs."
  }
];

const PlumbingPhoneNotRankings = () => {
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
              Plumbing SEO Starts With the Phone, Not Rankings
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Rankings are visible. Booked calls are revenue. Most plumbing companies have been sold on the idea that better rankings automatically mean more business. Before we refine a single page or touch your Google Business Profile, we look at your call data.
            </p>
          </div>

          {/* Insight callout */}
          <div className="bg-surface-elevated border border-border/50 rounded-xl p-6 mb-10 text-center">
            <p className="text-text-secondary text-base leading-relaxed mb-3">
              Plumbing demand is largely emergency-driven. Main line backups, burst pipes, water heaters that fail overnight —{" "}
              <span className="text-foreground font-semibold">these callers are not price shopping.</span>
            </p>
            <p className="text-foreground font-medium text-base">
              They are calling whoever answers. If that caller reaches your voicemail, you just paid for a lead that went to your competitor.
            </p>
          </div>

          {/* Points grid */}
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

          <p className="text-center text-text-muted text-sm mt-8 leading-relaxed">
            Local SEO must align with how your plumbing operation actually runs. Rankings without booking rate are a vanity metric.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlumbingPhoneNotRankings;
