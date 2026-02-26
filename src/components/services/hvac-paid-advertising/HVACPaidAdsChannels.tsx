import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HVACPaidAdsChannels = () => {
  return (
    <section id="channels" className="py-20 lg:py-28 bg-[#f9f9f9] scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">What We Deploy</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Paid Channels for HVAC Companies
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            Each channel serves a different part of the demand curve. None are grouped. Each is scoped, managed, and reported separately.
          </p>

          {/* Search — featured full-width card */}
          <div className="bg-white border-2 border-cta/20 rounded-xl p-8 mb-6 shadow-sm">
            <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-cta mb-2 inline-block">High-Intent Demand Capture</span>
                <h3 className="text-xl font-bold text-gray-900">Search Advertising</h3>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-5 max-w-3xl">
              Search advertising captures homeowners actively searching for HVAC service right now. No-cool calls in July. No-heat calls in January. System replacement inquiries in September. These are the calls that fill the dispatch board — and search is where they start.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Service Targets</p>
                <ul className="space-y-2">
                  {["AC repair near me", "Furnace repair", "HVAC replacement", "Heat pump installation", "Emergency HVAC service"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-accent-blue mt-0.5 shrink-0">&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Platforms Deployed</p>
                <ul className="space-y-2">
                  {["Google Search Ads", "Microsoft / Bing Ads"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-accent-blue mt-0.5 shrink-0">&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Link
              to="/hvac-search-advertising/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:text-accent-blue/80 transition-colors group"
            >
              See How Search Advertising Works
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* 2x2 grid */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Facebook */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Facebook Advertising</h3>
              <ul className="space-y-2.5 flex-1 mb-6">
                {[
                  "Pre-season tune-up and maintenance agreement campaigns",
                  "System replacement and install promotions",
                  "Financing offer campaigns to increase close rate on replacements",
                  "Retargeting homeowners who visited but did not book",
                  "Shoulder season install push campaigns"
                ].map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="text-accent-blue mt-0.5 shrink-0">&#10003;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/hvac-facebook-advertising/"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:text-accent-blue/80 transition-colors group mt-auto"
              >
                Explore Facebook for HVAC
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Instagram */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Instagram Advertising</h3>
              <ul className="space-y-2.5 flex-1 mb-6">
                {[
                  "Before-and-after system installation showcases",
                  "Story-based retargeting sequences for replacement researchers",
                  "Seasonal promotional campaigns before peak demand windows",
                  "Brand reinforcement during high-competition summer and winter periods"
                ].map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="text-accent-blue mt-0.5 shrink-0">&#10003;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/hvac-instagram-advertising/"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:text-accent-blue/80 transition-colors group mt-auto"
              >
                Explore Instagram for HVAC
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* LinkedIn */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-4">LinkedIn Advertising <span className="text-xs font-normal text-gray-400 ml-1">Commercial HVAC</span></h3>
              <ul className="space-y-2.5 flex-1 mb-6">
                {[
                  "Property manager and facility director targeting",
                  "Commercial HVAC contract development",
                  "Multi-location and multi-building service opportunities",
                  "Building operations and facility management audiences"
                ].map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="text-accent-blue mt-0.5 shrink-0">&#10003;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/hvac-linkedin-advertising/"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:text-accent-blue/80 transition-colors group mt-auto"
              >
                Explore LinkedIn for Commercial HVAC
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Programmatic */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Programmatic Advertising</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Programmatic expands reach beyond search. It reinforces visibility across the web and on Connected TV before and during peak demand windows. It supports emergency search capture — it does not replace it.
              </p>
              <ul className="space-y-2.5 flex-1 mb-6">
                {[
                  "Retargeting across the web after search and site visits",
                  "Geographic audience targeting by climate zone and neighborhood",
                  "Connected TV (OTT) placements via AdRoll and Mountain",
                  "Brand reinforcement before summer heat season and winter freeze season"
                ].map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="text-accent-blue mt-0.5 shrink-0">&#10003;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/hvac-programmatic-advertising/"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:text-accent-blue/80 transition-colors group mt-auto"
              >
                Explore Programmatic for HVAC
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HVACPaidAdsChannels;
