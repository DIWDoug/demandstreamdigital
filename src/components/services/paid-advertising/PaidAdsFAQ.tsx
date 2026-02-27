import { useState } from "react";
import { ChevronDown } from "lucide-react";

const leftFAQs = [
  {
    q: "How much should I budget for paid advertising as a plumbing or HVAC company?",
    a: "Budget depends on your market size, service mix, and how many trucks you are running. Most plumbing markets start between $2,000 and $5,000 per month. HVAC markets typically start between $2,500 and $6,000 due to seasonal demand swings. We size budgets around your capacity and cost-per-booked-call targets, not arbitrary minimums.",
  },
  {
    q: "Which paid channels work best for plumbing and HVAC companies?",
    a: "For emergency repair calls — burst pipes, no-cool, no-heat — Google Search Ads and Local Services Ads are the highest-intent channels. For replacement and install demand with longer decision cycles, Facebook retargeting and display keep you in front of homeowners while they research. The right channel mix depends on your service focus and market competitiveness.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "We require a minimum 6-month engagement to start. Paid advertising compounds over time as campaign data builds and auction positioning improves. After the initial 6 months, the engagement converts to a rolling agreement with a 30-day notice period. Agencies that offer month-to-month have no incentive to build campaigns that improve — they just need to hold the account for another 30 days.",
  },
  {
    q: "How do you handle budget adjustments for HVAC seasonality?",
    a: "We build a seasonal bid calendar before any spend begins. Cooling season budgets increase before and during peak summer demand. Heating season budgets ramp heading into winter. Shoulder months shift toward maintenance agreements and install promotions. Plumbing budgets follow emergency demand patterns — burst pipe season and water heater failure windows get heavier allocation.",
  },
];

const rightFAQs = [
  {
    q: "What metrics do you actually report on?",
    a: "Cost per booked call, booking rate, close rate, revenue per job, and dispatch load by campaign type. Not impressions. Not click-through rate. Every report connects directly to what shows up on your dispatch board — separated by repair, replacement, and commercial campaigns where applicable.",
  },
  {
    q: "We have run paid ads before and they did not work. Why would this be different?",
    a: "Most failed contractor campaigns share the same problems — broad match keywords, no service segmentation, flat budgets that ignore seasonality, and reporting that stops at the lead instead of the booked call. We build campaign architecture from scratch around how your market and service mix actually work. We document what we find in an audit before touching any spend.",
  },
  {
    q: "Can you manage campaigns we already have running with another agency?",
    a: "Yes. We conduct a full campaign audit before launch. Most inherited accounts have significant structural issues — keyword waste, missing negative lists, no call tracking tied to dispatch, and reporting that cannot connect spend to revenue. We show you exactly what changes before we touch the budget.",
  },
  {
    q: "What size plumbing or HVAC company do you typically work with?",
    a: "Companies running 2 or more trucks with an active dispatch board, call tracking in place or willingness to install it before spend begins, and a verified Google Business Profile with active reviews. If call handling and booking rates are not being measured, more ad spend amplifies the operational gap rather than solving it.",
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
        <p style={{ color: "#374151", fontSize: "15px", lineHeight: 1.7, marginTop: "12px" }}>{a}</p>
      )}
    </div>
  );
};

const PaidAdsFAQ = () => {
  return (
    <section id="faq" className="py-20 lg:py-28 scroll-mt-32" style={{ background: "#F8F9FA" }}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="font-semibold uppercase mb-3" style={{ color: "#DC2626", fontSize: "11px", letterSpacing: "0.15em" }}>
            COMMON QUESTIONS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance" style={{ color: "#0F172A" }}>
            Frequently Asked Questions About Paid Advertising for Plumbing & HVAC
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#6B7280" }}>Budget &amp; Channels</p>
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

export default PaidAdsFAQ;
