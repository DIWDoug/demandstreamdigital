import { Target, GitFork, Calendar, Map, Gauge, BarChart2, AlertTriangle, Repeat } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const failureRows = [
  {
    icon: BarChart2,
    headline: "Conversion Tracking That Counts the Same Call 3–4 Times",
    body: "When seven conversion actions are set to Primary — calls, form fills, schedule opens, clicks-to-call — smart bidding gets corrupted signals. A reported CPA of $135 can reflect a true cost of $287–$328 per unique lead. The AI optimizes toward the fabricated number. That's why the account burns budget without filling the dispatch board."
  },
  {
    icon: Target,
    headline: "Optimized for Leads, Not Booked Calls",
    body: "A lead that does not convert to a booked job is a cost. Most campaigns never measure past the form fill or inbound call. Without ServiceTitan or CRM reconciliation, the campaign has no feedback on what actually booked — so it keeps chasing the same non-converting signals."
  },
  {
    icon: GitFork,
    headline: "No Repair vs. Install Segmentation",
    body: "A homeowner searching for emergency AC repair has different intent, margin, and conversion path than one researching a system replacement. Grouping them into the same campaign means you're bidding the same for a $670 service call and a $7,400+ pre-sold install. One campaign cannot serve both — and the math on blended spend won't work."
  },
  {
    icon: AlertTriangle,
    headline: "Campaigns Pointing to 404 Pages",
    body: "An active leak detection campaign sending traffic to a broken landing page doesn't just waste spend — it tanks Quality Score, raises CPCs for every keyword in that ad group, and guarantees a 0.0x ROAS on every dollar spent. This happens when the SEO team updates URLs and the paid ads team doesn't hear about it."
  },
  {
    icon: Repeat,
    headline: "Reactive Budget Changes That Reset Smart Bidding",
    body: "Google's smart bidding needs stable signals to learn. Changing budgets week-to-week in response to short-term results resets the learning period every time. The algorithm never dials in. You spend thousands of dollars training the model and then change direction before it can deliver. Discipline in the first 60–90 days determines whether smart bidding works for you or against you."
  },
  {
    icon: Map,
    headline: "No Geographic Priority Mapping",
    body: "Not every ZIP code in a service area delivers the same ROI. High-value neighborhoods and high-density corridors need stronger bid weight. Low-ownership areas with high competition need reduction or exclusion. Running a flat geographic strategy ignores the revenue data your CRM is already tracking."
  },
  {
    icon: Calendar,
    headline: "No Seasonal Bid Adjustments",
    body: "Running the same bids in July as in February ignores how HVAC and plumbing demand actually moves through the year. A flat budget through the cooling season peak means you're showing up less when demand is highest and competitors are spending more."
  },
  {
    icon: Gauge,
    headline: "No Capacity-Based Throttle",
    body: "Scaling spend when the board is full drives calls the operation cannot run. Every overbooked week costs money and reputation. Paid advertising without a capacity feedback loop just creates a more expensive version of the same bottleneck."
  },
];

const PaidAdsPPCFails = () => {
  return (
    <section id="why-ppc-fails" className="py-20 lg:py-28 bg-white scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">The Problem</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Most Contractor PPC Campaigns Fail
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-12">
            {/* Left — intro */}
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                Most PPC agencies running contractor campaigns are chasing the wrong number. They track clicks and leads. They report impressions and CTR. None of that shows up on the dispatch board.
              </p>
              <p>
                A plumbing or HVAC PPC campaign that is not built around booked calls, booking rate, and capacity is a budget leak. The calls come in. The wrong ones get booked. The board fills with low-margin work. And the agency sends a report showing record click volume.
              </p>
              <p className="font-medium text-gray-700 border-l-4 border-accent-blue pl-4">
                We build paid campaigns around how plumbing and HVAC companies actually measure growth. Not how ad platforms measure activity.
              </p>
            </div>

            {/* Right — stat callout */}
            <div className="bg-[#0D1B2A] rounded-xl p-8 text-white flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-blue mb-6">What We Find in Inherited Accounts</p>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="text-cta text-2xl font-bold leading-none shrink-0">2–3×</span>
                  <p className="text-white/70 text-sm leading-relaxed">CPA inflation from duplicate conversion actions — the same call counted multiple times</p>
                </div>
                <div className="border-t border-white/10 pt-5 flex items-start gap-4">
                  <span className="text-cta text-2xl font-bold leading-none shrink-0">74%</span>
                  <p className="text-white/70 text-sm leading-relaxed">of eligible auctions missed due to Quality Score issues from broken landing pages and mismatched URLs</p>
                </div>
                <div className="border-t border-white/10 pt-5 flex items-start gap-4">
                  <span className="text-cta text-2xl font-bold leading-none shrink-0">$38K+</span>
                  <p className="text-white/70 text-sm leading-relaxed">in confirmed wasted spend on zero-conversion terms — typically from no negative keyword list in place</p>
                </div>
              </div>
            </div>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-2">
            {failureRows.map((row, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-gray-200 rounded-lg overflow-hidden px-4"
              >
                <AccordionTrigger className="text-base font-semibold text-gray-900 hover:no-underline py-4 gap-3">
                  <div className="flex items-center gap-3 text-left">
                    <div className="shrink-0 w-7 h-7 rounded-md bg-accent-blue/10 flex items-center justify-center">
                      <row.icon className="w-3.5 h-3.5 text-accent-blue" strokeWidth={1.5} />
                    </div>
                    {row.headline}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600 leading-relaxed pb-4 pl-10">
                  {row.body}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

        </div>
      </div>
    </section>
  );
};

export default PaidAdsPPCFails;
