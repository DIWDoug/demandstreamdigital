import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Wind } from "lucide-react";

const HVACPaidAdsBuiltForBoth = () => {
  return (
    <section id="built-for-both" className="py-20 lg:py-28 bg-white scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Built for Both</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Paid Advertising Built for Both Trades
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Plumbing and HVAC operate on different demand cycles, different seasonality, and different campaign logic. Each gets its own architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">

            {/* Plumbing Card */}
            <div className="bg-[#f9f9f9] border border-gray-200 rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-6">
                <Wrench className="w-6 h-6 text-accent-blue" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Plumbing Paid Advertising</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Emergency-first campaign architecture for plumbing companies. Drain, sewer, water heater, repipe — each service gets its own campaign structure and tracking.
              </p>
              <p className="text-sm text-gray-500 italic mb-6">Also available for multi-location plumbing operators.</p>
              <Link
                to="/plumbing-paid-advertising/"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:text-accent-blue/80 transition-colors group"
              >
                See Plumbing Paid Advertising
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* HVAC Card — active / current page */}
            <div className="bg-cta/5 border-2 border-cta/30 rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-cta/10 flex items-center justify-center mb-6">
                <Wind className="w-6 h-6 text-cta" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">HVAC Paid Advertising</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Seasonal demand control for HVAC operators. Repair vs install segmentation, emergency surge defense, and shoulder season install pushes built around your heating and cooling cycle.
              </p>
              <p className="text-sm text-gray-500 italic mb-6">Also available for multi-location HVAC operators.</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cta">
                You are here
              </span>
            </div>

          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 hover:border-cta hover:text-cta font-medium rounded-lg transition-all text-sm"
            >
              Get a Paid Ads Performance Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HVACPaidAdsBuiltForBoth;
