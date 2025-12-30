import { TrendingUp, DollarSign, BarChart3, ArrowRight } from "lucide-react";

const SEOValueExplainer = () => {
  return (
    <section className="py-20 lg:py-28 section-light relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cta/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-4">
              The Value Conversation
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
              Show Clients What Their Rankings Are Worth
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Your clients see position numbers. They do not see the thousands in ad spend those rankings replace every month. We change that.
            </p>
          </div>

          {/* Value Comparison Visual */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Left: The Problem */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">What Clients See</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <span className="text-slate-500">"plumber near me"</span>
                  <span className="text-slate-900 font-medium">Position #4</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <span className="text-slate-500">"emergency plumber dallas"</span>
                  <span className="text-slate-900 font-medium">Position #7</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <span className="text-slate-500">"drain cleaning service"</span>
                  <span className="text-slate-900 font-medium">Position #2</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-slate-500">"water heater repair"</span>
                  <span className="text-slate-900 font-medium">Position #5</span>
                </div>
              </div>
              <p className="text-slate-500 text-sm mt-6 italic">
                "Why am I paying you $2,000 a month for position #4?"
              </p>
            </div>

            {/* Right: The Solution */}
            <div className="bg-white border border-cta/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cta/10 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-cta" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">What We Show Them</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <div>
                    <span className="text-slate-500">"plumber near me"</span>
                    <span className="text-xs text-slate-400 ml-2">340 clicks/mo</span>
                  </div>
                  <span className="text-cta font-semibold">$4,080/mo value</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <div>
                    <span className="text-slate-500">"emergency plumber dallas"</span>
                    <span className="text-xs text-slate-400 ml-2">85 clicks/mo</span>
                  </div>
                  <span className="text-cta font-semibold">$2,125/mo value</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-200">
                  <div>
                    <span className="text-slate-500">"drain cleaning service"</span>
                    <span className="text-xs text-slate-400 ml-2">210 clicks/mo</span>
                  </div>
                  <span className="text-cta font-semibold">$1,890/mo value</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <span className="text-slate-500">"water heater repair"</span>
                    <span className="text-xs text-slate-400 ml-2">120 clicks/mo</span>
                  </div>
                  <span className="text-cta font-semibold">$1,440/mo value</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-cta/30">
                <div className="flex items-center justify-between">
                  <span className="text-slate-900 font-medium">Total Monthly SEO Value</span>
                  <span className="text-2xl font-bold text-cta">$9,535</span>
                </div>
                <p className="text-slate-500 text-sm mt-2">
                  That is what they would pay Google Ads for the same traffic.
                </p>
              </div>
            </div>
          </div>

          {/* How We Do It */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 lg:p-10">
            <h3 className="text-xl font-semibold text-slate-900 mb-8 text-center">
              Every Report Includes SEO Value Tracking
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-cta/10 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-cta" />
                </div>
                <h4 className="text-slate-900 font-semibold mb-2">Current SEO Value</h4>
                <p className="text-slate-500 text-sm">
                  The dollar value of organic traffic based on what those clicks would cost in Google Ads right now.
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-accent-blue" />
                </div>
                <h4 className="text-slate-900 font-semibold mb-2">Expected SEO Value</h4>
                <p className="text-slate-500 text-sm">
                  The projected value as rankings improve. Clients see the ROI trajectory, not just positions.
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-cta/10 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-cta" />
                </div>
                <h4 className="text-slate-900 font-semibold mb-2">Value vs. Investment</h4>
                <p className="text-slate-500 text-sm">
                  A clear comparison showing how much value SEO delivers compared to the monthly retainer.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA line */}
          <p className="text-center text-slate-600 text-lg mt-10">
            <span className="text-slate-900 font-semibold">Clients who understand value stay longer.</span> We give you reports that make cancellations awkward.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SEOValueExplainer;