const rows = [
  { label: "Keyword-Level Call Tracking", body: "Every inbound call attributed to the exact keyword and campaign that produced it." },
  { label: "Booking Rate Measurement", body: "Answered calls tracked through to scheduled jobs so booking rate is visible by service type and campaign." },
  { label: "Closed Job Revenue Attribution", body: "Revenue from completed jobs tied back to the campaign source, not just the lead source." },
  { label: "Cost Per Booked Call by Campaign", body: "True acquisition cost calculated at the campaign, ad group, and keyword level." },
  { label: "Dispatch Board Visibility", body: "Campaign spend aligned with available capacity so ad investment reflects what the operation can actually fulfill." },
];

const PlumbingSearchAdsServiceTitan = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">CRM Connection</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-10 text-balance leading-tight">
            Plumbing Search Ads Connected to ServiceTitan
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Most plumbing search campaigns produce an <a href="https://ads.google.com/home/" target="_blank" rel="noopener noreferrer" className="text-accent-blue underline">Google Ads</a> report and a CRM report that never talk to each other. The agency sees clicks and leads. The operator sees booked jobs and revenue. Neither side has the full picture.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We connect search campaign data directly to ServiceTitan so every booked call, closed job, and revenue dollar traces back to the keyword and campaign that produced it. That connection is what makes cost per booked call a real number, not an estimate. Other CRMs supported. ServiceTitan is the primary integration for plumbing search advertising campaigns.
              </p>
            </div>

            <div>
              {rows.map((row, i) => (
                <div key={i}>
                  <div className="py-5">
                    <p className="font-semibold text-gray-900 text-[15px] mb-1.5">{row.label}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{row.body}</p>
                  </div>
                  {i < rows.length - 1 && <hr className="border-t border-gray-200" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlumbingSearchAdsServiceTitan;
