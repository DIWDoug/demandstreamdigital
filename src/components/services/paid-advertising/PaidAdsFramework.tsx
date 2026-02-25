import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

const tabs = [
  {
    id: "tracking",
    label: "Tracking & Attribution",
    title: "Tracking & Attribution Integrity",
    timingNote: "Starting point: No paid spend runs until call tracking and booking rate measurement are confirmed.",
    body: "A paid campaign that cannot measure cost per booked call is building toward the wrong outcome. Before we build a single ad group, we confirm that every inbound call is tracked, every booking is attributed to a source, and every campaign has a clear cost-per-booked-call baseline. That number is what we measure against.",
    leftItems: [
      "Call tracking setup with keyword-level attribution",
      "Booking rate baseline measurement before spend begins",
      "CRM alignment so booked calls are tied back to campaigns",
      "Cost per booked call target established by service type"
    ],
    rightItems: [
      "Source-of-truth reporting dashboard configured",
      "Conversion tracking verified across all ad platforms",
      "Missed call and abandon rate benchmarked",
      "Baseline close rate captured by call type"
    ]
  },
  {
    id: "architecture",
    label: "Campaign Architecture",
    title: "Campaign Architecture",
    timingNote: null,
    body: "The structure of a campaign determines its ceiling. An HVAC campaign that groups emergency repair and system replacement into the same ad group will never perform correctly. The intent, the margin, and the conversion path are different. We build campaigns around how plumbing and HVAC demand actually works.",
    leftItems: [
      "Separate campaigns for repair intent and install intent",
      "City-level bid structure aligned to service radius",
      "Emergency keyword prioritization with dedicated budgets",
      "Negative keyword filtering to remove low-margin call types"
    ],
    rightItems: [
      "Ad copy written to urgency and booking, not features",
      "Landing pages matched to search intent by service type",
      "Device-level targeting weighted toward mobile",
      "Budget allocation by channel and service priority"
    ]
  },
  {
    id: "optimization",
    label: "Refinement & Scaling",
    title: "Optimization & Scaling",
    timingNote: null,
    body: "Once attribution is clean and campaigns are structured correctly, we refine. Bid adjustments are made based on booking rate data, not click-through rate. Ad copy is tested against booked call outcomes, not impressions. Scaling happens when the cost per booked call justifies it. Not before.",
    leftItems: [
      "Bid adjustments driven by cost per booked call by keyword",
      "Ad copy testing measured against conversion to booked call",
      "Geographic performance review by ZIP and corridor",
      "Search term report review and negative keyword expansion"
    ],
    rightItems: [
      "Device-level bid refinement based on booking behavior",
      "Landing page conversion rate testing",
      "Budget reallocation toward highest-performing call types",
      "Quality Score improvement across Google campaigns"
    ]
  },
  {
    id: "capacity",
    label: "Capacity & Seasonal Control",
    title: "Capacity & Seasonal Control",
    timingNote: null,
    body: "Paid advertising is the fastest lever to adjust when operational reality changes. When July board is full, we pull back. When February slows down, we push install campaigns. When a freeze event hits and competitors are surging, we defend. The campaign responds to how the business is actually running. Not on a fixed monthly budget that ignores what's happening on the dispatch board.",
    leftItems: [
      "Capacity throttle triggers tied to dispatch board status",
      "Shoulder season install push campaigns pre-built and ready",
      "Emergency surge response protocols for weather events",
      "Seasonal bid calendar mapped to your climate zone"
    ],
    rightItems: [
      "Peak season budget defense against competitor spend surges",
      "Maintenance agreement campaigns timed to pre-season windows",
      "Post-peak reactivation sequences for homeowners who did not book",
      "Monthly capacity review built into reporting cadence"
    ]
  }
];

const PaidAdsFramework = () => {
  const [activeTab, setActiveTab] = useState("tracking");
  const active = tabs.find(t => t.id === activeTab) ?? tabs[0];

  return (
    <section id="our-process" className="py-20 lg:py-28 bg-[#f9f9f9] scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">The Process</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Paid Advertising Process
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mb-10">
            Every paid campaign we build follows the same four-phase sequence. Tracking first. Architecture second. Refinement third. Capacity control fourth. We do not run spend before attribution is clean. We do not scale before booking rate is measured. The sequence matters.
          </p>

          {/* Tab list */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-0">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm font-medium rounded-t-lg transition-colors border-b-2 -mb-px ${
                  activeTab === tab.id
                    ? "text-cta border-cta bg-cta/5"
                    : "text-gray-500 border-transparent hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active tab content */}
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            {active.timingNote && (
              <div className="bg-cta/10 border border-cta/20 rounded-lg px-5 py-3 mb-6 text-sm text-cta font-medium">
                {active.timingNote}
              </div>
            )}
            <h3 className="text-xl font-bold text-gray-900 mb-4">{active.title}</h3>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">{active.body}</p>

            <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-5">What This Phase Includes</p>
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-2.5">
              {[...active.leftItems, ...active.rightItems].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className="text-cta mt-0.5 shrink-0">&#10003;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mid-section CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Link to="/contact" className="btn-cta group flex items-center gap-2">
              Get a Paid Ads Performance Audit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <span className="text-gray-400 text-sm">or</span>
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-all font-medium text-sm"
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

export default PaidAdsFramework;
