import { Target, GitFork, Calendar, Map, Gauge, BarChart2 } from "lucide-react";

const failureRows = [
  {
    icon: Target,
    headline: "Optimized for Leads, Not Booked Calls",
    body: "A lead that does not convert to a booked job is a cost. Most campaigns never measure past the form fill or inbound call."
  },
  {
    icon: GitFork,
    headline: "No Repair vs Install Segmentation",
    body: "A homeowner searching for emergency AC repair has different intent and margin than one researching a system replacement. One campaign does not serve both."
  },
  {
    icon: Calendar,
    headline: "No Seasonal Bid Adjustments",
    body: "Running the same bids in July as in February ignores how HVAC and plumbing demand actually moves through the year."
  },
  {
    icon: Map,
    headline: "No Geographic Priority Mapping",
    body: "Not every ZIP code in a service area is equal. High-value neighborhoods and high-density corridors need different bid weight."
  },
  {
    icon: Gauge,
    headline: "No Capacity-Based Throttle",
    body: "Scaling spend when the board is full drives calls the operation cannot run. Every overbooked week costs money and reputation."
  },
  {
    icon: BarChart2,
    headline: "No Integration With Booking Rate Data",
    body: "If the campaign does not know your booking rate, it cannot optimize toward booked calls. It optimizes toward clicks. That is a different outcome."
  }
];

const PaidAdsPPCFails = () => {
  return (
    <section id="why-ppc-fails" className="py-20 lg:py-28 bg-white scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Label + H2 */}
          <p className="text-xs font-semibold tracking-widest uppercase text-cta mb-3">The Problem</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
            Why Most Contractor PPC Campaigns Fail
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

            {/* Left — intro + closing */}
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                Most PPC agencies running contractor campaigns are chasing the wrong number. They track clicks and leads. They report impressions and CTR. None of that shows up on the dispatch board.
              </p>
              <p>
                A plumbing or HVAC PPC campaign that is not built around booked calls, booking rate, and capacity is a budget leak. The calls come in. The wrong ones get booked. The board fills with low-margin work. And the agency sends a report showing record click volume.
              </p>
              <p className="font-medium text-gray-700 border-l-4 border-cta pl-4">
                We build paid campaigns around how plumbing and HVAC companies actually measure growth. Not how ad platforms measure activity.
              </p>
            </div>

            {/* Right — failure rows */}
            <div className="space-y-5">
              {failureRows.map((row, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-cta/10 flex items-center justify-center mt-0.5">
                    <row.icon className="w-4 h-4 text-cta" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1 text-sm">{row.headline}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{row.body}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PaidAdsPPCFails;
