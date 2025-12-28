import { Check, X } from "lucide-react";

const goodFit = [
  "Small, disciplined agencies managing 1–20 active clients",
  "Partners who value scope definition before execution",
  "Agencies building long-term client relationships, not chasing volume",
  "Teams ready for a fulfillment partner, not a task vendor"
];

const notFit = [
  "Agencies looking to outsource tasks or rent headcount",
  "Models that rely on constant pivots or reactive changes",
  "Scale-at-all-costs approaches without scope discipline",
  "Teams expecting mid-cycle changes or unlimited revisions"
];

const FitCriteria = () => {
  return (
    <section className="py-20 lg:py-28 bg-surface-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-3">
              Partnership Fit
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Who This Works For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Good Fit */}
            <div className="bg-surface-elevated border border-border/50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">This is a fit</h3>
              </div>
              <ul className="space-y-4">
                {goodFit.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Fit */}
            <div className="bg-surface-elevated border border-border/50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <X className="h-5 w-5 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">This is not a fit</h3>
              </div>
              <ul className="space-y-4">
                {notFit.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
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

export default FitCriteria;
