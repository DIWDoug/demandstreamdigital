const rows = [
  { label: "Call-Only Ad Campaigns", body: "Ad format designed to produce direct calls, not website visits, for emergency and same-day service searches." },
  { label: "Click-to-Call Extensions", body: "Phone number prominently displayed on all ad formats so one tap connects the homeowner to your office." },
  { label: "Mobile Bid Adjustments", body: "Higher bid weight on mobile devices during peak call windows and after-hours emergency periods." },
  { label: "Daypart Scheduling", body: "After-hours bid increases capture emergency calls during evening and weekend windows when competitors reduce spend." },
  { label: "Missed Call Recovery", body: "Call tracking identifies unanswered calls so missed-call text-back sequences can recapture jobs that went to voicemail." },
];

const PlumbingSearchAdsMobileAndCalls = () => {
  return (
    <section id="mobile-calls" className="py-20 lg:py-28 bg-white scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Call Capture</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-10 text-balance leading-tight">
            Mobile-First Call Capture
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Plumbing is one of the most mobile-driven service categories in local search. Emergency searches happen on phones, not desktops. A homeowner standing in a flooded kitchen is not sitting at a computer. They are calling from wherever they are standing.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every plumbing search campaign we build is weighted toward mobile call conversion. Call-only ad formats, click-to-call extensions, and time-of-day bid adjustments keep your number in front of the call at the moment the decision is made.
              </p>
            </div>

            <div>
              {rows.map((row, i) => (
                <div key={i}>
                  <div className="group py-5 transition-all duration-200 hover:pl-3 cursor-default">
                    <p className="font-semibold text-gray-900 text-[15px] mb-1.5 group-hover:text-accent-blue transition-colors duration-200">{row.label}</p>
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

export default PlumbingSearchAdsMobileAndCalls;
