import { ArrowRight, CheckCircle } from "lucide-react";

const WhiteLabelExplainer = () => {
  return (
    <section className="py-20 lg:py-28 section-light relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div>
              <p className="text-cta text-sm font-medium uppercase tracking-widest mb-4">
                The Partnership Model
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                What is white label inbound marketing?
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                White label inbound marketing is a fulfillment partnership where we execute campaigns under your agency's brand—invisibly. You sell the services, own the client relationships, and set your margins. We handle the day-to-day work.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Instead of hiring specialists or managing freelancers, you get a dedicated team executing SEO, paid media, email, and authority building as a coordinated system—all delivered as if it came from your agency.
              </p>
              
              {/* Key Points */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cta mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Your brand on every deliverable and report</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cta mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">You keep full control of client communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cta mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">We execute—you scale without adding headcount</span>
                </li>
              </ul>

              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-cta text-white px-6 py-3 rounded-lg font-medium hover:bg-cta/90 transition-colors"
              >
                See How It Works
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right: Visual Diagram */}
            <div className="relative">
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-lg">
                {/* Visual representation of the partnership */}
                <div className="space-y-6">
                  {/* Your Agency */}
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Your Agency</p>
                    <p className="text-slate-900 font-semibold mb-3">Client-Facing</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600 border border-slate-200">Sales</span>
                      <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600 border border-slate-200">Strategy</span>
                      <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600 border border-slate-200">Reporting</span>
                      <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600 border border-slate-200">Pricing</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-slate-200 to-cta/50 relative">
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-6 border-l-transparent border-r-transparent border-t-cta/50" />
                    </div>
                  </div>

                  {/* Us */}
                  <div className="bg-gradient-to-br from-cta/5 to-cta/10 rounded-xl p-6 border border-cta/20">
                    <p className="text-xs font-semibold uppercase tracking-wider text-cta mb-2">We Handle</p>
                    <p className="text-slate-900 font-semibold mb-3">Behind-the-Scenes Execution</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600 border border-cta/20">SEO</span>
                      <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600 border border-cta/20">Paid Media</span>
                      <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600 border border-cta/20">Email</span>
                      <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600 border border-cta/20">Authority</span>
                      <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600 border border-cta/20">Content</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-cta/50 to-slate-200 relative">
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-6 border-l-transparent border-r-transparent border-t-slate-200" />
                    </div>
                  </div>

                  {/* Result */}
                  <div className="bg-slate-900 rounded-xl p-6 text-center">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Your Client Sees</p>
                    <p className="text-white font-semibold">Your Agency. Your Brand. Your Results.</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-cta/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhiteLabelExplainer;
