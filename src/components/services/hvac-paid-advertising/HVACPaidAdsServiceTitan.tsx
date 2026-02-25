const HVACPaidAdsServiceTitan = () => {
  const bullets = [
    "Call tracking connected to keyword and campaign source",
    "Booking rate measured by call type — repair vs install vs maintenance",
    "Closed job revenue attributed back to campaign and channel",
    "Cost per booked call tracked by service category",
    "Seasonal revenue patterns used to inform bid calendar and budget allocation",
  ];

  return (
    <section id="servicetitan" className="py-20 lg:py-28 bg-[#f9f9f9] scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Revenue Visibility</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance leading-tight">
                HVAC Paid Advertising Connected to Your Dispatch Board
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Most ad campaigns stop at clicks and leads. Neither number shows up on the dispatch board. We connect campaign data to call tracking, booking rate, and where available, closed job revenue from ServiceTitan and similar CRMs. The measurement that matters is cost per booked call by service type — not cost per click by keyword.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Integration Points</p>
              <ul className="space-y-4">
                {bullets.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent-blue mt-0.5 shrink-0">&#10003;</span>
                    <span className="font-semibold text-gray-900 text-sm">{item}</span>
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

export default HVACPaidAdsServiceTitan;
