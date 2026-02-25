const agencyReports = ["Clicks", "Impressions", "Click-Through Rate (CTR)"];

const ourMetrics = [
  { label: "Cost Per Booked Call", desc: "The only acquisition metric tied to revenue" },
  { label: "Booking Rate", desc: "Are answered calls converting to scheduled jobs" },
  { label: "Close Rate", desc: "Are booked calls converting to sold work" },
  { label: "Revenue Per Job", desc: "Is the right call mix coming in" },
  { label: "Return on Ad Spend", desc: "Is the budget producing more than it costs" },
  { label: "Dispatch Load", desc: "Is capacity being used or wasted" }
];

const PaidAdsMetrics = () => {
  return (
    <section id="metrics" className="py-20 lg:py-28 bg-[#f9f9f9] scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3 text-center">What Gets Measured</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
            The Metrics That Actually Matter
          </h2>
          <p className="text-lg text-gray-600 mb-14 text-center max-w-2xl mx-auto">
            Most PPC reports are full of numbers that do not show up on the dispatch board. These are the only numbers that do.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Left — what agencies report */}
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">What Most Agencies Report</p>
              <div className="space-y-4">
                {agencyReports.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-red-400 text-lg font-bold">&times;</span>
                    <span className="text-gray-400 line-through text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — what we report */}
            <div className="bg-white border-2 border-cta/30 rounded-xl p-8">
              <p className="text-sm font-semibold text-cta uppercase tracking-widest mb-6">What We Report</p>
              <div className="space-y-4">
                {ourMetrics.map((m, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-accent-blue mt-0.5 shrink-0">&#10003;</span>
                    <div>
                      <span className="font-semibold text-gray-900 text-base">{m.label}</span>
                      <span className="text-gray-600 text-base"> — {m.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PaidAdsMetrics;
