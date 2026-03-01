import { Phone, BarChart3, Gauge, AlertTriangle } from "lucide-react";

const points = [
  {
    icon: Phone,
    title: "Call Tracking Is Required",
    body: "Every plumbing SEO campaign we build includes call tracking. We track which searches and pages produce booked calls, not just call volume. Ranking data without call data tells you nothing useful."
  },
  {
    icon: BarChart3,
    title: "Booking Rate Is Tracked, Not Assumed",
    body: "Rankings tell us visibility. Booking rate tells us whether that visibility is producing revenue. A company at 45% produces different results than one at 72%. That gap has to be identified before we push more volume."
  },
  {
    icon: AlertTriangle,
    title: "Missed Calls Are Measurable Losses",
    body: "A missed call during a freeze event or a no-hot-water spike is a job that went to your competitor. Emergency calls cannot go to voicemail. We identify the patterns before pushing more volume."
  },
  {
    icon: Gauge,
    title: "Capacity Alignment Is Built In",
    body: "If your board is full in July, we hold. If February is slow, we push. Marketing that ignores your operational reality creates chaos. Plumbing SEO has to align with how your operation runs."
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
              Where We Start
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
              Plumbing SEO Starts With the Phone, Not Rankings
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              A ranking is not revenue. A booked call is. Before we build a single campaign, we look at call tracking data, your answer rate, and how your dispatch board handles volume.
            </p>
          </div>

          {/* Insight callout */}
          <div className="bg-surface-elevated border border-border/50 rounded-xl p-6 mb-10 text-center">
            <p className="text-text-secondary text-base leading-relaxed mb-3">
              A plumbing company with a <span className="text-foreground font-semibold">45% booking rate</span> produces different results than one running at <span className="text-foreground font-semibold">72%</span>.
            </p>
            <p className="text-foreground font-medium text-base">
              That gap is addressable, but has to be identified first.
            </p>
          </div>

          {/* Points grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {points.map((point, index) => (
              <div
                key={index}
                className="bg-surface-elevated border border-border/50 rounded-xl p-7 hover:border-accent-blue/30 transition-colors"
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
            Local SEO has to account for the operational realities of running a plumbing company. A strategy built without that context generates calls the operation cannot run.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlumbingPhoneNotRankings;
