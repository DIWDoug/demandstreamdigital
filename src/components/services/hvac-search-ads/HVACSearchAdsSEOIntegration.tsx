const integrationRows = [
  {
    label: "SEO Lowers Blended Cost Per Booked Call",
    body: "Every organic call that books reduces the average acquisition cost across your total ad investment.",
  },
  {
    label: "Reviews Improve Quality Score",
    body: "Strong Google Business Profile review signals reduce cost per click for the same ad position.",
  },
  {
    label: "Paid Plus Organic Dominance Builds Trust",
    body: "Showing in both Map Pack and paid results on the same search increases call preference over a single-position competitor.",
  },
  {
    label: "Retargeting Supports Organic Visitors",
    body: "Homeowners who found you through HVAC SEO but did not call can be recaptured through paid retargeting at lower cost than cold search.",
  },
  {
    label: "Seasonal Data Crossfeeds",
    body: "Peak season paid performance data informs which HVAC service pages to prioritize in SEO content development.",
  },
];

const HVACSearchAdsSEOIntegration = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">The Connection</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-10 text-balance leading-tight">
            HVAC Search Ads and SEO Together Control the Market
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Search ads capture the no-cool call today. SEO builds the Map Pack position that reduces what the next call costs. Running both together lowers your blended cost per booked call over time because organic calls carry zero incremental ad spend.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                When your GBP reviews are strong, your paid Quality Scores improve. Strong reviews reduce cost per click while simultaneously improving organic call preference. Every review that posts does double duty across both paid and organic performance.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Organic traffic from HVAC SEO also feeds your remarketing audiences. A homeowner who found you through a local search for heat pump installation but did not call can be recaptured through a paid sequence at a fraction of the cost of a cold search click during peak season.
              </p>
            </div>

            <div>
              {integrationRows.map((row, i) => (
                <div key={i}>
                  <div className="py-5">
                    <p className="font-semibold text-gray-900 text-[15px] mb-1.5">{row.label}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{row.body}</p>
                  </div>
                  {i < integrationRows.length - 1 && <hr className="border-t border-gray-200" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HVACSearchAdsSEOIntegration;
