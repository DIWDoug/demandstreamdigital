import { useState } from "react";
import { ChevronDown } from "lucide-react";

const leftFAQs = [
  {
    q: "How much should I budget for plumbing paid advertising?",
    a: "Budget depends on your market size, service mix, and call volume targets. We size budgets around your capacity and cost-per-booked-call goals, not arbitrary minimums. Most plumbing markets start between $2,000 and $5,000 per month in total ad spend across channels, scaling based on what your dispatch board can absorb.",
  },
  {
    q: "Which paid channels work best for plumbing companies?",
    a: "For emergency drain, sewer, and leak calls, Google Search Ads and Local Services Ads (LSA) are the highest-intent channels. For water heater replacement and repipe, Facebook retargeting and display keep you in front of homeowners in the longer decision window. The right mix depends on your service focus and market.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "We require a minimum 6-month engagement. Paid advertising campaigns compound over time as data builds. Agencies that run month-to-month have no incentive to build infrastructure that improves. They just need to hold the account for another 30 days.",
  },
  {
    q: "How do you manage budget across different service types?",
    a: "Emergency services (drain, sewer, leaks) get priority budget allocation because intent is immediate. Water heater and repipe campaigns run with longer optimization windows and different bidding strategies. Budgets are reviewed monthly and adjusted based on booking rates by service type, not split evenly across all campaigns.",
  },
];

const rightFAQs = [
  {
    q: "What metrics do you actually report on?",
    a: "Cost per booked call, booking rate, close rate, revenue per job, and dispatch load by campaign type. Not impressions. Not click-through rate. Every report ties directly back to what shows up on your dispatch board, separated by emergency, replacement, and drain/sewer campaigns.",
  },
  {
    q: "We have run paid ads before and they did not produce results. Why would this be different?",
    a: "Most failed plumbing campaigns share the same structural problems: no service segmentation, broad match keywords capturing low-intent traffic, flat budgets that do not prioritize emergency demand, and reporting that stops at the lead instead of the booked call. We build from scratch around how your market actually works.",
  },
  {
    q: "Can you manage campaigns we already have running?",
    a: "Yes. We conduct a full campaign audit before launch. Most inherited accounts have significant issues — keyword waste, missing negative lists, no call tracking tied to dispatch, and reporting that cannot connect spend to revenue. We document everything and show you exactly what changes before we touch the budget.",
  },
  {
    q: "What size plumbing company do you typically work with?",
    a: "Plumbing companies running 2 or more trucks with an active dispatch board, call tracking in place or willingness to install it, and a verified Google Business Profile. If call handling and booking rates are not already measured, more ad spend amplifies the operational problem rather than solving it.",
  },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="cursor-pointer"
      style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "6px", padding: "16px" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-start justify-between gap-3">
        <span style={{ color: "#0F172A", fontWeight: 500, fontSize: "15px", lineHeight: 1.5 }}>{q}</span>
        <ChevronDown
          size={18}
          style={{ color: "#6B7280", flexShrink: 0, marginTop: "2px", transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
        />
      </div>
      {open && (
        <p style={{ color: "#374151", fontSize: "14px", lineHeight: 1.7, marginTop: "12px" }}>{a}</p>
      )}
    </div>
  );
};

const PlumbingPaidAdsFAQ = () => {
  return (
    <section className="py-20 lg:py-28 scroll-mt-32" style={{ background: "#F8F9FA" }}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="font-semibold uppercase mb-3" style={{ color: "#DC2626", fontSize: "11px", letterSpacing: "0.15em" }}>
            COMMON QUESTIONS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance" style={{ color: "#0F172A" }}>
            Frequently Asked Questions About Plumbing Paid Advertising
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#6B7280" }}>Campaign &amp; Budget</p>
              <div className="space-y-3">
                {leftFAQs.map((item, i) => <FAQItem key={i} {...item} />)}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#6B7280" }}>Results &amp; Fit</p>
              <div className="space-y-3">
                {rightFAQs.map((item, i) => <FAQItem key={i} {...item} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlumbingPaidAdsFAQ;
