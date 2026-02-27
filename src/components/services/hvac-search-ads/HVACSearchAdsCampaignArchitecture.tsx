import { useState } from "react";

const tabs = [
  {
    id: "emergency",
    label: "Emergency Repair",
    urgencyNote: "Highest urgency: Emergency HVAC calls have the shortest decision cycle and the highest booking rate of any HVAC search type. They cannot go to voicemail.",
    title: "Emergency Repair Campaigns",
    body: "No-cool and no-heat searches are mobile-first and call-driven. A homeowner whose AC stopped working at 9pm in July is not filling out a form. They are calling whoever appears at the top of the results in the next thirty seconds. Emergency campaigns are built for speed: call-only ads, click-to-call extensions, and after-hours bid adjustments that keep the phone ringing when the board has capacity to answer it.",
    leftItems: ["'AC not cooling near me'", "Emergency HVAC repair'", "'Furnace not working'", "'No heat emergency'"],
    rightItems: ["Call-only ad format for direct mobile conversion", "After-hours and weekend bid increases during peak demand", "Tight geo-radius around highest-density service corridors", "Negative keywords filtering non-emergency and research-phase queries"],
  },
  {
    id: "ac-replacement",
    label: "AC Replacement",
    urgencyNote: null,
    title: "AC Replacement Campaigns",
    body: "AC replacement searches split between urgency and research. A homeowner whose system failed completely is calling today. A homeowner whose system is aging is comparing options over several days. The campaign separates these intent types: emergency replacement gets call-first ads, research-phase replacement gets landing pages with financing, brand comparisons, and installation timeline information.",
    leftItems: ["'AC replacement cost'", "'New air conditioner installation'", "'Central AC replacement near me'", "'AC unit replacement'"],
    rightItems: ["Emergency replacement ad group with call-first structure", "Research-phase ad group with financing and comparison messaging", "Landing pages separated by urgency level", "Remarketing for research-phase visitors who did not convert"],
  },
  {
    id: "furnace",
    label: "Furnace & Heating",
    urgencyNote: null,
    title: "Furnace & Heating Campaigns",
    body: "Furnace repair and replacement searches peak hard during cold weather events. The campaign must be pre-built and ready to scale before the first freeze hits. Not assembled reactively when the phones start ringing. Seasonal bid adjustments increase automatically as temperatures drop. Budget is pre-staged for heating demand windows so the campaign does not lose ground to competitors during the highest-value calls of the year.",
    leftItems: ["'Furnace repair near me'", "'Furnace not working'", "'Furnace replacement cost'", "'Heating system repair'"],
    rightItems: ["Seasonal bid calendar pre-staged for cold weather triggers", "Furnace repair and furnace replacement in separate ad groups", "After-hours emergency coverage during heating season", "Budget defense against competitor surge during freeze events"],
  },
  {
    id: "heat-pump",
    label: "Heat Pump & Specialty",
    urgencyNote: null,
    title: "Heat Pump & Specialty Campaigns",
    body: "Heat pump searches are growing as homeowners respond to equipment transitions and efficiency incentives. Mini-split and ductless installation searches carry high average tickets and longer decision cycles. These campaigns target homeowners in the consideration phase: researching options, comparing costs, and evaluating rebates. Landing pages include equipment comparisons, rebate information, and financing options that match how these decisions actually get made.",
    leftItems: ["'Heat pump installation near me'", "'Heat pump replacement cost'", "'Mini-split installation'", "'Ductless AC installation'"],
    rightItems: ["Longer decision cycle — estimate request, not call-only format", "Rebate and efficiency incentive messaging where applicable", "Equipment comparison landing pages with brand options", "Remarketing sequences for multi-visit decision cycles"],
  },
];

const HVACSearchAdsCampaignArchitecture = () => {
  const [activeTab, setActiveTab] = useState("emergency");
  const active = tabs.find(t => t.id === activeTab)!;

  return (
    <section id="campaign-architecture" className="py-20 lg:py-28 bg-white scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">The Structure</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance leading-tight">
            Repair vs Install Campaign Architecture
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-3xl">
            HVAC search advertising must separate intent types. Emergency repair searches behave differently than system replacement searches. Each has its own keyword set, its own conversion path, its own margin profile, and its own seasonal timing. We build separate campaigns for each intent type and manage budgets independently based on season and capacity.
          </p>

          {/* Tab nav */}
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

          {/* Tab content */}
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
        </div>
      </div>
    </section>
  );
};

export default HVACSearchAdsCampaignArchitecture;
