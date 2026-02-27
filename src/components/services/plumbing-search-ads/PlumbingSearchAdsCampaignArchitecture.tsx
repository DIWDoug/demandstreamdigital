import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

const tabs = [
  {
    id: "emergency",
    label: "Emergency Plumbing",
    urgencyNote: "Highest urgency: Emergency calls have the shortest decision cycle and the highest booking rate of any plumbing search type.",
    title: "Emergency Plumbing Campaigns",
    body: "Emergency plumbing searches are mobile-first and call-driven. A homeowner with a burst pipe or an active leak is not filling out a form. They are calling whoever appears at the top of the results in the next thirty seconds. Emergency campaigns are built for speed: call-only ads, click-to-call extensions, and after-hours bid adjustments that keep the phone ringing when the board has capacity.",
    leftItems: ["'Emergency plumber near me'", "'24-hour plumber'", "'Burst pipe repair'", "'Water leak plumber today'"],
    rightItems: ["Call-only ad format for direct mobile conversion", "After-hours and weekend bid adjustments", "Tight geo-radius around highest-density service areas", "Negative keywords filtering low-margin or non-serviceable calls"],
  },
  {
    id: "drain",
    label: "Drain & Sewer",
    urgencyNote: null,
    title: "Drain & Sewer Campaigns",
    body: "Drain and sewer searches convert quickly but attract price shoppers if the campaign is not structured correctly. Negative keyword discipline keeps low-margin drain calls from consuming budget that should go toward hydro-jetting, camera inspection, and sewer line repair. Same-day conversion is common. The campaign prioritizes high-intent service terms and filters for work that fits your margin targets.",
    leftItems: ["'Drain cleaning near me'", "'Sewer line repair'", "'Hydro jetting service'", "'Camera inspection plumber'"],
    rightItems: ["Service-specific landing pages for each drain and sewer type", "Negative keyword list excluding 'DIY' and 'rental' queries", "Device weighting toward mobile call conversion", "Booking rate tracking by service type to identify highest-converting terms"],
  },
  {
    id: "water-heater",
    label: "Water Heater",
    urgencyNote: null,
    title: "Water Heater Campaigns",
    body: "Water heater searches split between emergency replacement and research-phase comparison. A homeowner with no hot water is calling today. A homeowner researching tankless installation is three to seven days from a decision. The campaign separates these intent types, serves the emergency with call-first ads, and serves the research phase with landing pages that address financing, brand options, and installation timeline.",
    leftItems: ["'Water heater repair near me'", "'Water heater replacement cost'", "'Tankless water heater installation'", "'Gas vs electric water heater'"],
    rightItems: ["Emergency repair ad group with call-first structure", "Replacement and install ad group with financing messaging", "Landing pages separated by urgency level", "Financing offer integration for higher-ticket replacement jobs"],
  },
  {
    id: "repipe",
    label: "Repipe & High-Ticket",
    urgencyNote: null,
    title: "Repipe & High-Ticket Replacement Campaigns",
    body: "Whole-home repipe and high-ticket replacement work requires a longer decision cycle and a different conversion path. These are not call-now searches. They are estimate requests, comparison searches, and financing queries. The campaign is built around landing page depth, financing messaging, and remarketing sequences that keep your company visible across the full decision window.",
    leftItems: ["'Whole-home repipe cost'", "'Slab leak repipe'", "'PEX pipe replacement'", "'Repipe company near me'"],
    rightItems: ["Estimate-request landing pages with before/after proof", "Financing offer prominently featured", "Remarketing sequences for visitors who did not convert on first visit", "Separate budget from emergency campaigns to protect high-ticket spend"],
  },
];

const PlumbingSearchAdsCampaignArchitecture = () => {
  const [activeTab, setActiveTab] = useState("emergency");
  const active = tabs.find(t => t.id === activeTab)!;

  return (
    <section id="campaign-architecture" className="py-20 lg:py-28 bg-white scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">The Structure</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance leading-tight">
            Service-Based Campaign Architecture
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-3xl">
            Plumbing search campaigns must be separated by service type. Each service cluster has its own keyword intent, its own conversion behavior, and its own margin profile. One campaign structure cannot serve all four correctly. We build each service cluster separately and manage budgets independently.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-cta text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            {active.urgencyNote && (
              <div className="bg-cta/10 border border-cta/20 rounded-xl px-5 py-3 mb-6">
                <p className="text-sm font-medium text-gray-800">{active.urgencyNote}</p>
              </div>
            )}
            <h3 className="text-xl font-bold text-gray-900 mb-4">{active.title}</h3>
            <p className="text-gray-600 leading-relaxed mb-8">{active.body}</p>

            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">What This Campaign Targets</p>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-2.5">
                {active.leftItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <span className="text-cta mt-0.5 shrink-0">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2.5">
                {active.rightItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <span className="text-cta mt-0.5 shrink-0">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-cta hover:bg-cta/90 text-white font-medium rounded-lg transition-colors text-sm"
            >
              Claim Your Territory Today
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-cta hover:border-cta hover:text-white font-medium transition-all text-sm"
            >
              <Phone className="h-4 w-4" />
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlumbingSearchAdsCampaignArchitecture;
