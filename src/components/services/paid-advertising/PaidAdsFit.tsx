import { useState } from "react";
import { Link } from "react-router-dom";

const goodFit = [
  { point: "You have a specific window you need to fill — now", detail: "Paid advertising solves near-term operational problems. A slow board this week, a shoulder season gap next month, a competitor moving into your market. The timeline is weeks, not quarters." },
  { point: "You have available capacity in the next 30 to 60 days", detail: "Paid ads fill the board fast. If the board is already full, the leads go unanswered. Capacity has to be there to receive what comes in." },
  { point: "You have call tracking in place or are willing to install it", detail: "Without call tracking, we cannot measure cost per booked call. That is our core metric and the one that matters most." },
  { point: "You want to report on cost per booked call, not impressions", detail: "We do not build reports around vanity metrics. Cost per booked call and booking rate are the numbers that matter." },
  { point: "You understand paid advertising requires ongoing management, not a one-time setup", detail: "Bid strategies, seasonal adjustments, and keyword management require active attention. Set-and-forget campaigns degrade." },
  { point: "You have a verified Google Business Profile with active reviews", detail: "GBP signals feed Quality Scores and LSA performance. A weak profile limits paid ad efficiency." }
];

const notFit = [
  { point: "You have no dispatch control or consistent booking process", detail: "Paid ads generate calls. If answered calls are not converting to booked jobs, the spend has no path to ROI." },
  { point: "You are not willing to participate in review acquisition", detail: "LSA performance and Google Quality Scores both respond to review velocity. Opting out limits reach." },
  { point: "You are looking for the cheapest cost-per-lead available", detail: "Quality paid media management is an investment. Price-first decisions typically produce price-first results." },
  { point: "You expect results without a tracking foundation", detail: "Attribution integrity is a prerequisite. Running spend without it produces data that cannot be used for decisions." },
  { point: "You want to pause and restart spend month to month based on cash flow", detail: "Campaign learning cycles require consistent data. Irregular spend disrupts algorithm optimization and raises CPL." },
  { point: "You do not serve a physical service area with address-visible operations", detail: "Local paid advertising is built around service radius targeting. Without a physical service area, the model does not apply." }
];

const PaidAdsFit = () => {
  const [openGood, setOpenGood] = useState<number | null>(null);
  const [openBad, setOpenBad] = useState<number | null>(null);

  return (
    <section id="fit" className="py-20 lg:py-28 bg-background scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <p className="text-xs font-semibold tracking-widest uppercase text-cta mb-3 text-center">Selective Fit</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-center">
            Is Paid Advertising Right for Your Business?
          </h2>
          <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            Paid advertising works best when the operation behind it is ready to handle what comes in.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">

            {/* Good Fit */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="text-lg">&#10003;</span>
                <h3 className="font-bold text-foreground text-lg">This Could Work Well</h3>
              </div>
              <div className="space-y-2">
                {goodFit.map((item, i) => (
                  <div key={i} className="border border-border/60 rounded-lg overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left hover:bg-surface-elevated transition-colors"
                      onClick={() => setOpenGood(openGood === i ? null : i)}
                    >
                      <span className="flex items-center gap-3 text-sm font-medium text-foreground">
                        <span className="text-green-500 shrink-0">&#10003;</span>
                        {item.point}
                      </span>
                      <span className={`text-text-muted text-xs transition-transform shrink-0 ${openGood === i ? "rotate-180" : ""}`}>&#9660;</span>
                    </button>
                    {openGood === i && (
                      <div className="px-4 pb-4 pt-1 text-sm text-text-secondary border-t border-border/40">
                        {item.detail}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Not a Fit */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="text-lg text-destructive">&#10007;</span>
                <h3 className="font-bold text-foreground text-lg">Probably Not a Fit</h3>
              </div>
              <div className="space-y-2">
                {notFit.map((item, i) => (
                  <div key={i} className="border border-border/60 rounded-lg overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left hover:bg-surface-elevated transition-colors"
                      onClick={() => setOpenBad(openBad === i ? null : i)}
                    >
                      <span className="flex items-center gap-3 text-sm font-medium text-foreground">
                        <span className="text-destructive shrink-0">&#10007;</span>
                        {item.point}
                      </span>
                      <span className={`text-text-muted text-xs transition-transform shrink-0 ${openBad === i ? "rotate-180" : ""}`}>&#9660;</span>
                    </button>
                    {openBad === i && (
                      <div className="px-4 pb-4 pt-1 text-sm text-text-secondary border-t border-border/40">
                        {item.detail}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/contact" className="btn-cta inline-flex items-center gap-2">
              Get a Paid Ads Performance Audit
              <span className="ml-1">&#8594;</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PaidAdsFit;
