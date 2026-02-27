import { Zap, GitFork, Smartphone, DollarSign, Map } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

const insightRows = [
  {
    icon: Zap,
    title: "Emergency Intent Requires Immediate Capture",
    body: "A homeowner with a burst pipe is not comparing options. They are calling whoever ranks first. Campaigns have to be built around that urgency.",
    color: "text-cta",
    bg: "bg-cta/10",
  },
  {
    icon: GitFork,
    title: "Drain vs Sewer vs Repipe Are Different Campaigns",
    body: "Each service has different intent, different ticket value, and different conversion behavior. One catch-all campaign cannot serve all three.",
    color: "text-accent-blue",
    bg: "bg-accent-blue/10",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Behavior Demands Mobile-First Bidding",
    body: "Most emergency plumbing searches happen on a phone. Campaigns that do not prioritize mobile clicks and call extensions leave calls on the table.",
    color: "text-cta",
    bg: "bg-cta/10",
  },
  {
    icon: DollarSign,
    title: "Water Heater Replacement Has Different Economics",
    body: "A replacement inquiry carries higher ticket value and a longer decision cycle than an emergency repair. It needs separate messaging, separate landing pages, and separate tracking.",
    color: "text-accent-blue",
    bg: "bg-accent-blue/10",
  },
  {
    icon: Map,
    title: "Service Area Precision Determines Profitability",
    body: "Not every ZIP in a service area produces the same call quality. Geographic bid weighting ensures budget concentrates where margins are highest.",
    color: "text-cta",
    bg: "bg-cta/10",
  },
];

const PlumbingPaidAdsPPCFails = () => {
  return (
    <section id="why-its-different" className="py-20 lg:py-28 bg-white scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* LEFT: Copy */}
            <div className="lg:sticky lg:top-32">
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">The Problem With Generic PPC</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance leading-tight">
                Plumbing Paid Advertising Is Not Generic Contractor PPC
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Plumbing advertising requires urgency-driven architecture. Emergency intent, mobile-first call behavior, service-specific segmentation, and water heater replacement economics all demand separate campaign design. Generic contractor PPC applies the same keyword list, the same ad copy, and the same bidding strategy to every service. Budget leaks out on low-intent traffic. High-margin calls go to competitors who show up more precisely.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                A drain cleaning call and a full repipe inquiry require different pages, different copy, different conversion paths, and different bid logic. When campaigns group them together, neither converts correctly.
              </p>
              <div className="bg-gradient-to-r from-cta/5 to-transparent border-l-4 border-cta rounded-r-xl px-5 py-4 mb-6">
                <p className="text-gray-700 text-sm leading-relaxed font-medium">
                  Plumbing paid advertising has to be built around how plumbing customers actually search and call. Not applied from a general contractor template.
                </p>
              </div>
              <p className="text-gray-500 text-sm mb-8">
                When the campaign architecture matches the service type, budget concentrates on the calls that actually fill the dispatch board.
              </p>
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

export default PlumbingPaidAdsPPCFails;
