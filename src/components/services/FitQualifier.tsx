import { Check, X, ArrowRight } from "lucide-react";

const FitQualifier = () => {
  const goodFit = [
    "You're an agency doing $30K+/month in revenue",
    "You have clients but need execution capacity",
    "You want systems, not just extra hands",
    "You value transparency over surprises",
    "You're focused on client retention, not just acquisition"
  ];

  const notFit = [
    "You're looking for the cheapest option",
    "You want to micromanage every deliverable",
    "You need someone to build your sales pipeline",
    "You expect results without client cooperation",
    "You're not ready to invest in proper fulfillment"
  ];

  return (
    <section className="py-20 lg:py-28 section-light relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-4">
              Fit Check
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
              Is This Partnership Right for You?
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              We're selective about partnerships because alignment matters more than volume. Here's how to know if we're a fit.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Good Fit */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-cta/10 flex items-center justify-center">
                  <Check className="h-5 w-5 text-cta" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Good Fit</h3>
              </div>
              <ul className="space-y-4">
                {goodFit.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-cta shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not a Fit */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                  <X className="h-5 w-5 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Not a Fit</h3>
              </div>
              <ul className="space-y-4">
                {notFit.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a 
              href="#contact" 
              className="btn-cta group inline-flex items-center gap-2"
            >
              See If We're a Match
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitQualifier;
