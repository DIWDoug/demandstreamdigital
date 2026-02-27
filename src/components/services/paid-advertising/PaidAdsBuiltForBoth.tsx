import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Wind } from "lucide-react";

const PaidAdsBuiltForBoth = () => {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-white scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Paid Advertising Built for Both Trades
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every channel, Google Search, LSA, Facebook, and Programmatic, points to one outcome: more booked service calls. Engineered separately for each trade.
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
                Emergency-first campaign architecture built for plumbing companies. From drain cleaning and water heater replacement to slab leak and repipe campaigns. We capture urgent demand and defend high-margin services.
              </p>
              <p className="text-sm text-gray-500 italic mb-6">Also available for multi-location plumbing operators.</p>
              <Link
                to="/plumbing-paid-advertising"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:text-accent-blue/80 transition-colors group"
              >
                See Plumbing Paid Advertising
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* HVAC Card */}
            <div className="bg-[#f9f9f9] border border-gray-200 rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-6">
                <Wind className="w-6 h-6 text-accent-blue" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">HVAC Paid Advertising</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Seasonal demand control built for HVAC operators. Repair vs install segmentation, emergency surge defense, shoulder season install pushes, and commercial expansion. Built around how HVAC revenue actually moves through the year.
              </p>
              <p className="text-sm text-gray-500 italic mb-6">Also available for multi-location HVAC operators.</p>
              <Link
                to="/hvac-paid-advertising"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:text-accent-blue/80 transition-colors group"
              >
                See HVAC Paid Advertising
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default PaidAdsBuiltForBoth;
