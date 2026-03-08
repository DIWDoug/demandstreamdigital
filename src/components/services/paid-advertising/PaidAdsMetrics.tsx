const agencyReports = [
  "Clicks",
  "Impressions",
  "Click-Through Rate (CTR)",
  "Reported CPA (inflated by duplicate conversions)",
  "Google-attributed revenue (before CRM reconciliation)",
];

const ourMetrics = [
  { label: "True Cost Per Booked Call", desc: "Reconciled against CRM — not what Google reports" },
  { label: "Booking Rate", desc: "Are answered calls converting to scheduled jobs" },
  { label: "Close Rate", desc: "Are booked calls converting to sold work" },
  { label: "Service-Specific ROAS", desc: "Separate targets for repair, install, and maintenance" },
  { label: "Revenue Per Job by Campaign", desc: "Is the right call mix coming in" },
  { label: "Dispatch Load", desc: "Is capacity being used or wasted" },
];

const roasRows = [
  { label: "Covers direct job costs only", calc: "1 / gross margin", target: "~1.1–1.2×", status: "floor" },
  { label: "Covers overhead too", calc: "1 / (margin − overhead)", target: "2.0–2.1×", status: "breakeven" },
  { label: "15% net profit target", calc: "1 / (margin − overhead − profit %)", target: "2.2–2.3×", status: "ok" },
  { label: "Healthy and scale-worthy", calc: "Industry best practice", target: "3.0×+", status: "goal" },
];

const statusStyles: Record<string, string> = {
  floor: "text-red-400",
  breakeven: "text-yellow-400",
  ok: "text-yellow-300",
  goal: "text-green-400",
};

const PaidAdsMetrics = () => {
  return (
    <section id="metrics" className="py-20 lg:py-28 bg-[#f9f9f9] scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3 text-center">What Gets Measured</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
            The Metrics That Actually Matter
          </h2>
          <p className="text-lg text-gray-600 mb-14 text-center max-w-2xl mx-auto">
            Most PPC reports are full of numbers that do not show up on the dispatch board — and some of those numbers are inflated by how tracking was set up. These are the only numbers we use.
          </p>

          {/* Reported vs Real */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">What Most Agencies Report</p>
              <div className="space-y-4">
                {agencyReports.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-red-400 text-lg font-bold shrink-0">&times;</span>
                    <span className="text-gray-400 line-through text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

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

          {/* True ROAS breakdown */}
          <div className="bg-[#0D1B2A] rounded-xl p-8 mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-blue mb-2">Understanding ROAS</p>
            <h3 className="text-xl font-bold text-white mb-2">Reported ROAS Is Not True ROAS</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-2xl">
              Google reports the revenue it can attribute. That's not the same as what your CRM shows. True ROAS requires reconciling campaign spend against actual closed jobs in ServiceTitan or your dispatch system — and setting separate targets by service type, because a repair call and an install call have completely different margin math.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 pr-6 text-white/40 font-normal uppercase tracking-widest text-xs">Threshold</th>
                    <th className="text-left py-3 pr-6 text-white/40 font-normal uppercase tracking-widest text-xs">ROAS Target</th>
                    <th className="text-left py-3 text-white/40 font-normal uppercase tracking-widest text-xs">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {roasRows.map((row, i) => (
                    <tr key={i}>
                      <td className="py-3 pr-6 text-white/70">{row.label}</td>
                      <td className={`py-3 pr-6 font-bold ${statusStyles[row.status]}`}>{row.target}</td>
                      <td className="py-3 text-white/40 text-xs">{row.calc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-white/40 text-xs mt-6 leading-relaxed">
              A single blended ROAS target across all campaigns leaves money on the table. Repair campaigns running at 1.5× may be profitable if they drive install upsells. Install campaigns running at 2.0× may be underperforming if avg ticket is $7,400+. The target must match the service type.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-center text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every metric we report connects to what shows up on your dispatch board. If it does not tie to a booked call, a booking rate, or a cost per booked call — reconciled against your CRM — it does not belong in the report.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PaidAdsMetrics;
