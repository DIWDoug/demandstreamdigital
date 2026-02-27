import { ArrowRight, Phone, Zap, MapPin, Award, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

const painPoints = [
  {
    icon: Zap,
    title: "Emergency Intent Dominates",
    body: "The majority of high-value plumbing searches are urgent: 'emergency plumber near me,' 'burst pipe repair,' 'water heater not working.' These are not research queries. They are active emergencies. Plumbing SEO has to be built around that urgency first, not retrofitted from a template built for dentists and dog groomers.",
    color: "text-cta",
    bg: "bg-cta/10",
  },
  {
    icon: MapPin,
    title: "Proximity Shifts Rankings Dramatically",
    body: "A plumbing company ranking #1 from three miles away may not appear at all for a searcher on the other side of the service area. Google weights proximity heavily for emergency local searches. A strategy that ignores ZIP-level competition leaves high-margin calls on the table every single day.",
    color: "text-accent-blue",
    bg: "bg-accent-blue/10",
  },
  {
    icon: Award,
    title: "Review Velocity Is a Trust Signal, Not a Bonus",
    body: "When a homeowner finds two plumbers in the Map Pack, the one with more recent reviews and a response to each one gets the call. Review recency and response discipline are direct ranking and conversion factors. Not a nice-to-have, not a bonus. They are part of the system.",
    color: "text-accent-green",
    bg: "bg-accent-green/10",
  },
  {
    icon: Search,
    title: "Service Specificity Matters for Rankings",
    body: "A homeowner searching 'tankless water heater installation near me' has different intent than 'plumber near me.' Each distinct service needs its own page. Generic catch-all plumbing pages rank well for nothing because they signal relevance for everything and authority for nothing.",
    color: "text-cta",
    bg: "bg-cta/10",
  },
  {
    icon: Phone,
    title: "After-Hours Calls Are High-Margin Calls",
    body: "Plumbing emergencies don't follow business hours. After-hours calls are often the highest-margin jobs in the mix. The customer is not price shopping, they need a plumber now. Your GBP and site have to be configured to capture that demand 24 hours a day, not just during office hours.",
    color: "text-accent-blue",
    bg: "bg-accent-blue/10",
  },
];

const PlumbingProblemSection = () => {
  return (
    <section className="py-20 lg:py-28 section-light relative">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* LEFT: Condensed copy */}
            <div className="lg:sticky lg:top-32">
              <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-4">
                The Problem With Generic SEO
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-balance leading-tight">
                Why Generic Contractor SEO Fails Plumbing Companies
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Plumbing is not a general home services business. It is an emergency-driven, reputation-sensitive trade where the buying decision happens in under two minutes.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Generic contractor packages apply the same keyword lists, the same content templates, and the same link building tactics to every trade. They don't account for how plumbing calls actually come in, or what makes a homeowner choose one plumber over another when they're standing in two inches of water.
              </p>
              <div className="bg-gradient-to-r from-cta/5 to-transparent border-l-4 border-cta rounded-r-xl px-5 py-4 mb-8">
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  When a homeowner's pipe bursts at midnight, they don't browse. They search and call whoever shows up in the Map Pack. Plumbing SEO has to be built around that urgency. Not applied from a template designed for dentists and dog groomers.
                </p>
              </div>
              <p className="text-slate-500 text-sm mb-8">
                Effective plumbing SEO requires scoping to the actual market. Not templated deliverables applied from a generic contractor package. That is why our plumbing SEO work performs consistently across different markets and service areas.
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-cta hover:border-cta hover:text-white font-medium transition-all text-sm"
                >
                  <Phone className="h-4 w-4" />
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>

            {/* RIGHT: Vertical insight rows */}
            <div>
              {painPoints.map((point, i) => {
                const Icon = point.icon;
                return (
                  <div key={i}>
                    <div className="flex items-start gap-4 py-6">
                      <div className={`w-9 h-9 rounded-lg ${point.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                        <Icon className={`h-4 w-4 ${point.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-900 text-[15px] mb-1.5">
                          {point.title}
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {point.body}
                        </p>
                      </div>
                    </div>
                    {i < painPoints.length - 1 && (
                      <hr className="border-t border-slate-200" />
                    )}
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

export default PlumbingProblemSection;
