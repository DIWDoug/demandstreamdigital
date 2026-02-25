import { ArrowRight, Phone, Zap, MapPin, Award, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

const painPoints = [
  {
    icon: Zap,
    title: "Emergency Intent and Install Intent Are Different Searches",
    body: "A homeowner searching 'AC not cooling' has different intent than one searching 'AC replacement cost.' Each requires a different page, different copy, and different conversion path.",
    color: "text-cta",
    bg: "bg-cta/10",
  },
  {
    icon: MapPin,
    title: "Proximity Shifts Rankings Dramatically",
    body: "An HVAC company ranking at the top from three miles away may not appear at all for a searcher across the service area. A strategy that ignores ZIP-level competition leaves high-margin calls on the table.",
    color: "text-accent-blue",
    bg: "bg-accent-blue/10",
  },
  {
    icon: Award,
    title: "Review Velocity Is a Trust Signal, Not a Bonus",
    body: "When a homeowner finds two HVAC companies in the Map Pack, the one with more recent reviews and a response to each one gets the call. Review recency and response discipline are direct ranking and conversion factors.",
    color: "text-accent-green",
    bg: "bg-accent-green/10",
  },
  {
    icon: Search,
    title: "Service Specificity Matters for Rankings",
    body: "A homeowner searching 'heat pump installation near me' has different intent than one searching 'HVAC company.' Each distinct service needs its own page. Generic catch-all HVAC pages rank well for nothing.",
    color: "text-cta",
    bg: "bg-cta/10",
  },
  {
    icon: Phone,
    title: "After-Hours No-Cool Calls Are High-Margin Calls",
    body: "HVAC emergencies don't follow business hours. After-hours calls are often the highest-margin jobs in the mix. Your GBP has to be configured to capture that demand 24 hours a day.",
    color: "text-accent-blue",
    bg: "bg-accent-blue/10",
  },
];

const HVACProblemSection = () => {
  return (
    <section className="py-20 lg:py-28 section-light relative">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* LEFT: Copy */}
            <div className="lg:sticky lg:top-32">
              <p className="text-cta text-sm font-medium uppercase tracking-widest mb-4">
                The Problem With Generic SEO
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-balance leading-tight">
                Why Generic Contractor SEO Fails HVAC Companies
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                HVAC is not a general home services business. It is a seasonal, regulated, capacity-constrained trade where the buying decision splits two ways: emergency repair or planned replacement.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Generic contractor packages apply the same keyword lists, the same content templates, and the same link tactics to every trade. They don't account for how no-cool calls behave differently than install inquiries, or what makes a homeowner choose one HVAC company over another when their system fails at 10pm.
              </p>
              <div className="bg-gradient-to-r from-cta/5 to-transparent border-l-4 border-cta rounded-r-xl px-5 py-4 mb-8">
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  When a homeowner's AC stops working in August, they don't browse. They search and call whoever shows up in the Map Pack. HVAC SEO has to be built around that urgency. Not applied from a template designed for every trade.
                </p>
              </div>
              <p className="text-slate-500 text-sm mb-8">
                Effective HVAC SEO requires scoping to the actual market. Not templated outputs applied from a generic contractor package. That is why our HVAC SEO work performs consistently across different markets and service areas.
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

            {/* RIGHT: Accordion */}
            <div>
              <Accordion type="single" collapsible className="space-y-2">
                {painPoints.map((point, i) => {
                  const Icon = point.icon;
                  return (
                    <AccordionItem
                      key={i}
                      value={`item-${i}`}
                      className="border border-slate-200 rounded-lg overflow-hidden px-4"
                    >
                      <AccordionTrigger className="text-[15px] font-semibold text-slate-900 hover:no-underline py-4 gap-3">
                        <div className="flex items-center gap-3 text-left">
                          <div className={`shrink-0 w-7 h-7 rounded-md ${point.bg} flex items-center justify-center`}>
                            <Icon className={`w-3.5 h-3.5 ${point.color}`} />
                          </div>
                          {point.title}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-slate-600 leading-relaxed pb-4 pl-10">
                        {point.body}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HVACProblemSection;
