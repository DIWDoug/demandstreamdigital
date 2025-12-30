import { TrendingUp, DollarSign, BarChart3, Target, CheckCircle, ArrowUpRight } from "lucide-react";

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
              Your clients see position numbers. They do not see the thousands in ad spend those rankings replace every month.
            </p>
          </div>

          {/* Dashboard Preview */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-lg mb-10">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Client Dashboard</p>
                <p className="text-slate-900 font-semibold">[clientdomain.com] SEO Value Report</p>
              </div>
              <span className="text-xs text-slate-400">Updated Monthly</span>
            </div>

            {/* Stat Cards Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {/* Current SEO Value */}
              <div className="bg-slate-50 rounded-xl p-5 border-l-4 border-cta">
                <div className="flex items-start justify-between mb-3">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Current SEO Value</p>
                  <DollarSign className="w-5 h-5 text-cta" />
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-slate-900">$9,535</p>
                <p className="text-xs text-slate-400 mt-1">Monthly ad spend equivalent</p>
              </div>

              {/* Potential Value */}
              <div className="bg-slate-50 rounded-xl p-5 border-l-4 border-accent-blue">
                <div className="flex items-start justify-between mb-3">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Potential Value</p>
                  <TrendingUp className="w-5 h-5 text-accent-blue" />
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-slate-900">$14,200</p>
                <p className="text-xs text-slate-400 mt-1">At target rankings</p>
              </div>

              {/* ROI Ratio */}
              <div className="bg-slate-50 rounded-xl p-5 border-l-4 border-cta">
                <div className="flex items-start justify-between mb-3">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">ROI Ratio</p>
                  <Target className="w-5 h-5 text-cta" />
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-slate-900">4.8x</p>
                <p className="text-xs text-slate-400 mt-1">Value vs. investment</p>
              </div>

              {/* Keywords Tracked */}
              <div className="bg-slate-50 rounded-xl p-5 border-l-4 border-accent-blue">
                <div className="flex items-start justify-between mb-3">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Keywords Tracked</p>
                  <BarChart3 className="w-5 h-5 text-accent-blue" />
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-slate-900">127</p>
                <p className="text-xs text-slate-400 mt-1">Across local markets</p>
              </div>
            </div>

            {/* Sample Keyword Values */}
            <div className="bg-slate-50 rounded-xl overflow-hidden">
              <div className="px-5 py-3 bg-slate-100 border-b border-slate-200">
                <p className="text-sm font-semibold text-slate-700">Top Performing Keywords</p>
              </div>
              <div className="divide-y divide-slate-100">
                {[
                  { keyword: "plumber near me", position: 4, clicks: 340, value: "$4,080" },
                  { keyword: "emergency plumber dallas", position: 2, clicks: 85, value: "$2,125" },
                  { keyword: "drain cleaning service", position: 1, clicks: 210, value: "$1,890" },
                  { keyword: "water heater repair", position: 3, clicks: 120, value: "$1,440" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between px-5 py-3">
                    <div className="flex items-center gap-4">
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                        item.position <= 3 ? "bg-cta/10 text-cta" : "bg-slate-200 text-slate-600"
                      }`}>
                        #{item.position}
                      </span>
                      <div>
                        <p className="text-slate-900 font-medium text-sm">{item.keyword}</p>
                        <p className="text-slate-400 text-xs">{item.clicks} clicks/mo</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-cta font-semibold">{item.value}</p>
                      <p className="text-slate-400 text-xs">monthly value</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: DollarSign,
                title: "Current SEO Value",
                description: "The dollar value of organic traffic based on what those clicks would cost in Google Ads."
              },
              {
                icon: TrendingUp,
                title: "Projected SEO Value",
                description: "The value trajectory as rankings improve. Clients see ROI, not just positions."
              },
              {
                icon: Target,
                title: "Value vs. Investment",
                description: "A clear comparison showing how much value SEO delivers compared to the monthly retainer."
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cta/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-cta" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold mb-1">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom line */}
          <p className="text-center text-slate-600 text-lg mt-12">
            <span className="text-slate-900 font-semibold">Clients who understand value stay longer.</span> We give you reports that make cancellations awkward.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SEOValueExplainer;