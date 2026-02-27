const stats = [
  { number: "90", unit: "days", descriptor: "Average time to cost-per-booked-call stability" },
  { number: "6+", unit: null, descriptor: "Service-specific campaign types built per client" },
  { number: "100%", unit: null, descriptor: "Campaigns connected to ServiceTitan or comparable CRM" },
];

const HVACSearchAdsCredibility = () => {
  return (
    <section style={{ background: "#0F172A", padding: "64px 0" }}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-24">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="flex items-start" style={{ lineHeight: 1 }}>
                <span style={{ fontSize: "56px", fontWeight: 700, color: "#DC2626", lineHeight: 1 }}>{stat.number}</span>
                {stat.unit && (
                  <span style={{ fontSize: "24px", fontWeight: 400, color: "#DC2626", marginTop: "4px", marginLeft: "4px" }}>{stat.unit}</span>
                )}
              </div>
              <p style={{ fontSize: "14px", color: "#94A3B8", marginTop: "8px", maxWidth: "160px", textAlign: "center", lineHeight: 1.5 }}>
                {stat.descriptor}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center" style={{ fontSize: "15px", color: "#CBD5E1", marginTop: "32px" }}>
          Built for operators who measure marketing on the dispatch board, not the dashboard.
        </p>
      </div>
    </section>
  );
};

export default HVACSearchAdsCredibility;
