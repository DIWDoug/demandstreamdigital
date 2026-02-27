const rows = [
  {
    label: "Call-Only Ad Campaigns",
    body: "Ad format that produces direct calls, not website visits, for emergency and same-day HVAC service searches.",
  },
  {
    label: "Click-to-Call Extensions",
    body: "Phone number prominently displayed on all ad formats so one tap connects the homeowner to your CSR.",
  },
  {
    label: "Mobile Bid Adjustments",
    body: "Higher bid weight on mobile devices during peak call windows and after-hours emergency periods.",
  },
  {
    label: "After-Hours Surge Coverage",
    body: "Bid increases during evening and weekend windows when competitor spend drops and emergency calls spike.",
  },
  {
    label: "Missed Call Recovery",
    body: "Call tracking identifies unanswered calls so missed-call text-back sequences can recapture jobs that went to voicemail.",
  },
];

const HVACSearchAdsMobileAndCalls = () => {
  return (
    <section id="mobile-calls" className="py-20 lg:py-28 bg-white scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Call Capture</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-10 text-balance leading-tight">
            Mobile-First Emergency Call Capture
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                HVAC emergency searches happen on phones. A homeowner whose AC failed at 8pm in August is not at a computer. They are standing in a hot house searching on a phone and calling the first result that answers. Emergency campaigns are weighted entirely toward mobile call conversion.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                After-hours demand is where the highest-margin HVAC calls live. Competitors who reduce bids in the evening and on weekends leave those calls uncontested. We keep bid coverage active during the windows that matter most.
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

export default HVACSearchAdsMobileAndCalls;
