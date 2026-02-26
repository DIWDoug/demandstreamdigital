const PlumbingPaidAdsCampaignStrategy = () => {
  return (
    <section id="campaign-strategy" className="py-20 lg:py-28 bg-[#f9f9f9] scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Campaign Architecture</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
            Emergency Repairs and Replacements Cannot Share a Campaign
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-10">

            {/* Emergency */}
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="inline-flex items-center gap-2 bg-cta/10 text-cta text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5">
                Emergency Campaigns
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Emergency plumbing calls are urgent, mobile-first, and call-driven. The decision cycle is short. The homeowner is not researching options — they need someone right now.
              </p>
              <ul className="space-y-3">
                {[
                  "Urgent keyword targeting (burst pipe, no hot water, drain backup)",
                  "Mobile-first bid weighting",
                  "Call extension prioritization",
                  "Same-day service messaging",
                  "24/7 ad scheduling for after-hours capture"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="text-cta mt-0.5 shrink-0">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Replacement */}
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="inline-flex items-center gap-2 bg-accent-blue/10 text-accent-blue text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5">
                Replacement Campaigns
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Water heater replacement, repipe, and sewer line replacement have longer decision cycles, higher ticket values, and financing sensitivity. They require different copy, different landing pages, and different tracking.
              </p>
              <ul className="space-y-3">
                {[
                  "Research-intent keyword targeting (water heater cost, repipe quote)",
                  "Financing offer messaging",
                  "Before-and-after proof content",
                  "Higher budget allocation for high-ticket conversions",
                  "Separate tracking from emergency campaign data"
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
              Campaign architecture that mixes emergency and replacement intent into one ad group cannot serve either correctly. Separation protects margin on both.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PlumbingPaidAdsCampaignStrategy;
