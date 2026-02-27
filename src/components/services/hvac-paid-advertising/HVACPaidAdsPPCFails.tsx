import { Zap, GitFork, Smartphone, DollarSign, Map } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

const insightRows = [
  {
    icon: Zap,
    title: "Seasonal Demand Swings Require Seasonal Bid Control",
    body: "Running the same bids in July as in February ignores how HVAC revenue actually moves. Campaigns that cannot adjust to your season waste money at both peaks.",
    color: "text-cta",
    bg: "bg-cta/10",
  },
  {
    icon: GitFork,
    title: "Repair and Install Require Different Campaign Funnels",
    body: "A homeowner searching for emergency AC repair has different intent and a shorter decision cycle than one researching a replacement system. One campaign cannot serve both.",
    color: "text-accent-blue",
    bg: "bg-accent-blue/10",
  },
  {
    icon: Smartphone,
    title: "Emergency Calls Are Mobile-First and Time-Critical",
    body: "Most no-cool and no-heat searches happen on a phone. Campaigns without mobile-first bidding and call extensions lose those calls before the ad even loads.",
    color: "text-cta",
    bg: "bg-cta/10",
  },
  {
    icon: DollarSign,
    title: "Install Economics Require Install-Specific Architecture",
    body: "A system replacement carries higher ticket value, financing sensitivity, and a longer decision cycle. It needs separate landing pages, separate messaging, and separate tracking from repair campaigns.",
    color: "text-accent-blue",
    bg: "bg-accent-blue/10",
  },
  {
    icon: Map,
    title: "After-Hours Emergency Demand Is High-Margin Demand",
    body: "HVAC emergencies happen at night and on weekends. Campaigns without after-hours scheduling and GBP configuration leave the highest-margin calls uncaptured.",
    color: "text-cta",
    bg: "bg-cta/10",
  },
];

const HVACPaidAdsPPCFails = () => {
  return (
    <section id="why-its-different" className="py-20 lg:py-28 bg-white scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* LEFT: Copy */}
            <div className="lg:sticky lg:top-32">
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">The Problem With Generic PPC</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance leading-tight">
                HVAC Paid Advertising Is Not Generic Contractor PPC
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                HVAC advertising requires specialization. Seasonal volatility, emergency-first search behavior, repair vs install segmentation, and commercial growth opportunities all require structured campaign architecture. Generic contractor PPC applies the same keyword list and bid strategy to every trade in every season. Budget leaks on low-intent traffic. Emergency calls in July go to competitors who are bidding more precisely on the right terms.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                A no-cool call in August and a system replacement inquiry in September require different pages, different copy, different conversion paths, and different bid logic. When campaigns group them together, neither converts correctly — and the reporting hides it.
              </p>
              <div className="bg-gradient-to-r from-cta/5 to-transparent border-l-4 border-cta rounded-r-xl px-5 py-4 mb-6">
                <p className="text-gray-700 text-sm leading-relaxed font-medium">
                  HVAC paid advertising has to be engineered around heating and cooling cycles, repair vs install intent, and how HVAC customers actually search during emergencies. Not templated from a generic contractor package.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
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

            {/* RIGHT: Vertical insight rows */}
            <div>
              {insightRows.map((row, i) => {
                const Icon = row.icon;
                return (
                  <div key={i}>
                    <div className="flex items-start gap-4 py-6">
                      <div className={`w-9 h-9 rounded-lg ${row.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                        <Icon className={`h-4 w-4 ${row.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 text-[15px] mb-1.5">{row.title}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{row.body}</p>
                      </div>
                    </div>
                    {i < insightRows.length - 1 && <hr className="border-t border-gray-200" />}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HVACPaidAdsPPCFails;
