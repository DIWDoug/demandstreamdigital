import { Target, Calendar, BarChart2, Map, Gauge, GitFork } from "lucide-react";

const failureRows = [
  {
    icon: Target,
    title: "Emergency and Replacement Keywords Mixed Together",
    body: "A homeowner searching 'AC not cooling' converts differently than one searching 'new AC unit cost.' One campaign cannot serve both without losing margin and conversion rate on each.",
    color: "text-cta",
    bg: "bg-cta/10",
  },
  {
    icon: Calendar,
    title: "No Seasonal Bid Adjustments",
    body: "Running the same bids in July as in February ignores how HVAC demand moves through the year. Cooling season and heating season require completely different budget strategies.",
    color: "text-accent-blue",
    bg: "bg-accent-blue/10",
  },
  {
    icon: BarChart2,
    title: "Optimized for Leads, Not Booked Calls",
    body: "A call that comes in but never books is a cost. Most HVAC campaigns measure lead volume. We measure to the booked call and the dispatched job.",
    color: "text-cta",
    bg: "bg-cta/10",
  },
  {
    icon: Map,
    title: "No Geographic Priority Mapping",
    body: "Not every ZIP in a service area produces equal-margin work. High-value neighborhoods and high-density corridors require different bid weight than peripheral areas.",
    color: "text-accent-blue",
    bg: "bg-accent-blue/10",
  },
  {
    icon: Gauge,
    title: "No Capacity-Based Throttle",
    body: "Scaling spend during a July heat wave when the board is already full drives calls the operation cannot serve. Overbooked peak weeks damage reputation and dispatch morale.",
    color: "text-cta",
    bg: "bg-cta/10",
  },
  {
    icon: GitFork,
    title: "Automated Campaigns Without Segmentation",
    body: "Performance Max and broad match automation require clean conversion signals to work. Without booking rate data feeding the campaign, automation optimizes toward clicks, not booked calls.",
    color: "text-accent-blue",
    bg: "bg-accent-blue/10",
  },
];

const HVACSearchAdsPPCFails = () => {
  return (
    <section id="why-ppc-fails" className="py-20 lg:py-28 bg-surface-dark scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">The Problem</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
                Why Most HVAC Search Campaigns Fail
              </h2>
              <p className="text-base text-text-secondary leading-relaxed mb-4">
                Generic contractor PPC structures apply the same campaign architecture to HVAC companies that they apply to every other trade. The keyword lists are broad. The budgets do not shift with the season. The campaigns do not separate emergency repair from system replacement. The agency reports cost per lead. The operator looks at the dispatch board and sees the disconnect.
              </p>
              <p className="text-base text-text-secondary leading-relaxed mb-6">
                HVAC search is not generic. A homeowner searching 'AC not cooling' in July has different intent, different urgency, and different margin than one searching 'AC replacement cost' in October. Running both through the same campaign means neither performs correctly. The emergency call gets too little urgency. The install lead gets too little nurture. Both convert below their potential.
              </p>
            </div>

            <div>
              {failureRows.map((row, i) => {
                const Icon = row.icon;
                return (
                  <div key={i}>
                    <div className="flex items-start gap-4 py-6">
                      <div className={`w-9 h-9 rounded-lg ${row.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                        <Icon className={`h-4 w-4 ${row.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-foreground text-[15px] mb-1.5">{row.title}</p>
                        <p className="text-text-secondary text-sm leading-relaxed">{row.body}</p>
                      </div>
                    </div>
                    {i < failureRows.length - 1 && <hr className="border-t border-border/40" />}
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

export default HVACSearchAdsPPCFails;
