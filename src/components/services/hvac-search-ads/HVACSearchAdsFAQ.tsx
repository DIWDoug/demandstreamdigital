import { useState } from "react";
import { ChevronDown } from "lucide-react";

const leftFAQs = [
  {
    q: "How much should I budget for HVAC search advertising?",
    a: "Budget depends on your market size, service mix, and how many trucks you are running. We size budgets around your capacity and cost-per-booked-call targets, not arbitrary spend minimums. Most markets we work in start between $2,000 and $5,000 per month in ad spend, scaling based on what your dispatch board can handle.",
  },
  {
    q: "How long before we see booked calls from search ads?",
    a: "Emergency campaigns typically produce calls within the first two weeks of launch. Replacement and install campaigns take longer to optimize — expect 60 to 90 days before cost-per-booked-call stabilizes on higher-ticket service types.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "We require a minimum 6-month engagement. Search advertising compounds over time as campaign data builds. Agencies that let you go month-to-month have no incentive to build campaigns that improve — they just need to hold you for another 30 days.",
  },
  {
    q: "How do you handle peak season budget adjustments?",
    a: "We build a seasonal bid calendar before campaigns launch. Budgets increase before and during peak demand windows. They throttle back during shoulder season and shift emphasis toward maintenance and install promotions. You are not running the same budget in February as you are in July.",
  },
];

const rightFAQs = [
  {
    q: "What metrics do you actually report on?",
    a: "Cost per booked call, booking rate, close rate, revenue per job, and dispatch load. Not impressions. Not click-through rate. Every report connects to what shows up on your dispatch board.",
  },
  {
    q: "We have tried Google Ads before and it did not work. Why would this be different?",
    a: "Most failed campaigns share the same problems — broad match keywords, no service segmentation, budgets that do not adjust for season, and reporting that stops at the lead instead of the booked call. We build the campaign structure from scratch around how your market actually works.",
  },
  {
    q: "Do you work with companies already running ads with another agency?",
    a: "Yes. We conduct a full campaign audit before launch. Most inherited campaigns have significant structural issues that explain poor performance. We document what we find and show you exactly what changes before we touch the budget.",
  },
  {
    q: "What size company do you typically work with?",
    a: "Companies running 2 or more trucks with an active dispatch board and at least basic call tracking in place. If the phone is not being answered consistently, more ad spend makes the problem worse, not better. We need the operational foundation to be there before we scale volume.",
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

const HVACSearchAdsFAQ = () => {
  return (
    <section className="py-20 lg:py-28 scroll-mt-32" style={{ background: "#F8F9FA" }}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="font-semibold uppercase mb-3" style={{ color: "#DC2626", fontSize: "11px", letterSpacing: "0.15em" }}>
            COMMON QUESTIONS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance" style={{ color: "#0F172A" }}>
            Frequently Asked Questions About HVAC Search Advertising
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

export default HVACSearchAdsFAQ;
