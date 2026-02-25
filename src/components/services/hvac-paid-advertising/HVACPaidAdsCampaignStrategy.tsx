const HVACPaidAdsCampaignStrategy = () => {
  return (
    <section id="campaign-strategy" className="py-20 lg:py-28 bg-[#f9f9f9] scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Campaign Architecture</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 max-w-2xl">
            Repair and Install Campaigns<br /> Require Separate Strategies
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-10">

            {/* Repair */}
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="inline-flex items-center gap-2 bg-cta/10 text-cta text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5">
                Repair Campaigns
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Emergency HVAC calls are urgent, mobile-first, and call-driven. A homeowner with a no-cool at 9pm on a Friday is not comparing quotes. The decision cycle is short. The campaign has to be built around that urgency.
              </p>
              <ul className="space-y-3">
                {[
                  "Emergency keyword targeting (no-cool, no-heat, AC not working, furnace down)",
                  "Mobile-first bid weighting",
                  "Call extension prioritization",
                  "24/7 ad scheduling for after-hours emergency capture",
                  "Same-day service messaging"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="text-cta mt-0.5 shrink-0">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Install */}
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="inline-flex items-center gap-2 bg-accent-blue/10 text-accent-blue text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5">
                Install and Replacement Campaigns
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                System replacement has a longer decision cycle, higher ticket value, and financing sensitivity. A homeowner researching replacement costs is not calling immediately — they need education, proof, and a reason to choose you.
              </p>
              <ul className="space-y-3">
                {[
                  "Research-intent keyword targeting (AC replacement cost, HVAC system cost, new heat pump)",
                  "Financing offer messaging",
                  "Before-and-after install proof content",
                  "Higher budget allocation justified by replacement ticket value",
                  "Separate tracking from repair campaign data"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="text-accent-blue mt-0.5 shrink-0">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-center text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Mixing repair and install intent into one campaign produces unclear data and diluted conversion. Separation protects margin on both sides of the revenue curve.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HVACPaidAdsCampaignStrategy;
