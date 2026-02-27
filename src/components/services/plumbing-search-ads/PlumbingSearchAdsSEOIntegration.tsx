const integrationRows = [
  { label: "SEO Lowers Blended Cost Per Booked Call", body: "Every organic call that books reduces the average acquisition cost across your total ad investment." },
  { label: "Reviews Improve Quality Score", body: "Strong Google Business Profile signals reduce cost per click for the same ad position." },
  { label: "Paid Plus Organic Dominance Builds Trust", body: "Appearing in both the Map Pack and paid results on the same search increases call preference over a competitor showing in only one." },
  { label: "Retargeting Supports Organic Visitors", body: "Homeowners who found you through SEO but did not call can be recaptured through paid retargeting at lower cost than cold search." },
  { label: "Data Crossfeeds Between Channels", body: "High-converting paid keywords inform SEO content priorities. Organic ranking data informs paid bid decisions." },
];

const PlumbingSearchAdsSEOIntegration = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">The Connection</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-10 text-balance leading-tight">
            Search Ads and SEO Together Own the Market
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Search ads capture the call today. SEO builds the position that reduces what the next call costs. Running both together lowers your blended cost per booked call over time because organic calls that book carry zero incremental ad spend.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                When your GBP reviews are strong, your paid Quality Scores improve. Lower Quality Scores mean higher cost per click for the same position. Strong reviews do double duty: they improve organic conversion and reduce paid acquisition cost simultaneously.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Organic traffic from SEO also feeds your remarketing audiences. A homeowner who found you through a local search but did not call can be recaptured through a paid retargeting sequence at a fraction of the cost of a cold search click.
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

export default PlumbingSearchAdsSEOIntegration;
