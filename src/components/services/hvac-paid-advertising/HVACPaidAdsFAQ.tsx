import { useState } from "react";
import { ChevronDown } from "lucide-react";

const leftFAQs = [
  {
    q: "How much should I budget for HVAC paid advertising?",
    a: "Budget depends on your market size, service mix, and seasonal demand windows. We size budgets around your capacity and cost-per-booked-call targets, not arbitrary minimums. Most HVAC markets start between $2,500 and $6,000 per month in total ad spend across channels, scaling based on what your dispatch board can absorb.",
  },
  {
    q: "Which paid channels work best for HVAC companies?",
    a: "For emergency repair and no-cool/no-heat calls, Google Search Ads and Local Services Ads (LSA) are the highest-intent channels. For replacement and install demand, Facebook retargeting and display work well to stay in front of homeowners in the decision window. The right mix depends on your market and service focus.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "We require a minimum 6-month engagement. Paid advertising campaigns compound over time as data builds. Agencies that run month-to-month have no incentive to build infrastructure that improves. They just need to hold the account for another 30 days.",
  },
  {
    q: "How do you handle budget shifts between heating and cooling seasons?",
    a: "We build a seasonal bid calendar before any spend begins. Cooling season budgets increase before and during peak summer demand. Heating season budgets ramp heading into winter. Shoulder months shift emphasis toward maintenance agreements and install promotions. You are not running a flat budget year-round.",
  },
];

const rightFAQs = [
  {
    q: "What metrics do you actually report on?",
    a: "Cost per booked call, booking rate, close rate, revenue per job, and dispatch load by campaign type. Not impressions. Not click-through rate. Every report ties directly back to what shows up on your dispatch board — separated by repair, replacement, and commercial campaigns.",
  },
  {
    q: "We have run paid ads before and they did not produce results. Why would this be different?",
    a: "Most failed HVAC campaigns share the same structural problems — no service segmentation, flat budgets that ignore seasonality, broad match keywords capturing low-intent traffic, and reporting that stops at the lead instead of the booked call. We build from scratch around how your market and season actually work.",
  },
  {
    q: "Can you manage campaigns we already have running?",
    a: "Yes. We conduct a full campaign audit before launch. Most inherited accounts have significant issues — keyword waste, missing negative lists, no call tracking tied to dispatch, and reporting that cannot connect spend to revenue. We document everything and show you exactly what changes before we touch the budget.",
  },
  {
    q: "What size HVAC company do you typically work with?",
    a: "HVAC companies running 2 or more trucks with an active dispatch board, call tracking in place or willingness to install it, and a verified Google Business Profile. If call handling and booking rates are not already measured, more ad spend amplifies the operational problem rather than solving it.",
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

const HVACPaidAdsFAQ = () => {
  return (
    <section className="py-20 lg:py-28 scroll-mt-32" style={{ background: "#F8F9FA" }}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="font-semibold uppercase mb-3" style={{ color: "#DC2626", fontSize: "11px", letterSpacing: "0.15em" }}>
            COMMON QUESTIONS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance" style={{ color: "#0F172A" }}>
            Frequently Asked Questions About HVAC Paid Advertising
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

export default HVACPaidAdsFAQ;
