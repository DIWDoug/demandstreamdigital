const PlumbingSearchAdsMetrics = () => {
  return (
    <section id="metrics" className="py-20 lg:py-28 scroll-mt-32" style={{ background: '#F8F9FA' }}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">What Gets Measured</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance leading-tight" style={{ color: '#0F172A' }}>
            Cost Per Booked Call Is the Only Metric That Matters
          </h2>
          <p className="text-lg mb-12 max-w-3xl" style={{ color: '#374151' }}>
            Most agencies report what ad platforms track. We report what shows up on your dispatch board.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8" style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '8px' }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#6B7280' }}>What Most Agencies Report</p>
              <ul className="space-y-4">
                {["Cost Per Click", "Cost Per Lead", "Click-Through Rate"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-lg" style={{ color: '#9CA3AF' }}>—</span>
                    <span className="line-through text-sm" style={{ color: '#6B7280' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8" style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '8px' }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#DC2626' }}>What We Report</p>
              <ul className="space-y-4">
                {[
                  { label: "Cost Per Booked Call", desc: "acquisition cost tied directly to revenue" },
                  { label: "Booking Rate", desc: "answered calls converting to scheduled jobs" },
                  { label: "Close Rate", desc: "booked calls converting to sold work" },
                  { label: "Revenue Per Job", desc: "call mix quality, not just call volume" },
                  { label: "Return on Ad Spend", desc: "budget producing more than it costs" },
                  { label: "Dispatch Load", desc: "capacity used versus capacity available" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0" style={{ color: '#DC2626' }}>&#10003;</span>
                    <span className="text-sm" style={{ color: '#0F172A' }}>
                      <span className="font-semibold">{item.label}</span>
                      <span style={{ color: '#374151' }}> — {item.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlumbingSearchAdsMetrics;
