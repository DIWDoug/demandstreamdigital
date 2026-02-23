import { useState } from "react";
import { ChevronDown, Wrench, Flame, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";
import StreamTexture from "@/components/StreamTexture";

const industries = [
  {
    icon: Wrench,
    title: "Plumbing",
    summary: "Marketing built for plumbing companies, from drain cleaning to full repiping. We help you rank, get found, and book more jobs. Also available for multi-location operators.",
    services: [
      "Plumbing SEO",
      "Plumbing Web Design",
      "Plumbing Google Maps / GBP",
      "Plumbing PPC / Google Ads",
      "Plumbing Content Marketing",
      "Plumbing Email Marketing",
      "Plumbing Reputation Management",
      "Plumbing Reporting & Dashboards",
    ],
  },
  {
    icon: Flame,
    title: "HVAC",
    summary: "Marketing built around HVAC seasonality, service calls, and install revenue. Built to keep your schedule full year-round.",
    services: [
      "HVAC SEO",
      "HVAC Web Design",
      "HVAC Google Maps / GBP",
      "HVAC PPC / Google Ads",
      "HVAC Content Marketing",
      "HVAC Email Marketing",
      "HVAC Reputation Management",
      "HVAC Reporting & Dashboards",
    ],
  },
];

const TopicalExpertise = () => {
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set());

  const toggleExpand = (index: number) => {
    setExpandedIndices(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const isExpanded = (index: number) => expandedIndices.has(index);

  return (
    <section id="expertise" className="py-24 lg:py-32 section-light relative overflow-hidden">
      <StreamTexture variant="light" opacity={0.1} />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-[1]" />
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Full-Service Marketing for Plumbers and HVAC Contractors
          </h2>
          <p className="text-lg text-text-secondary">
            Every channel (SEO, paid ads, Maps, email) points to one outcome: more booked service calls.
          </p>
        </div>

        {/* Industry cards grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-sm cursor-pointer transition-all duration-300 overflow-hidden ${
                isExpanded(index)
                  ? "ring-1 ring-accent-blue/50"
                  : "hover:translate-y-[-2px]"
              }`}
              onClick={() => toggleExpand(index)}
            >
              {/* Card top with accent bar */}
              <div className="h-1 bg-gradient-to-r from-accent-blue to-accent-blue/40" />
              
              <div className="p-6 lg:p-7 border border-t-0 border-gray-200 rounded-b-xl">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-accent-blue/10 border border-accent-blue/20">
                      <industry.icon className="h-5 w-5 text-accent-blue" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{industry.title}</h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-text-muted transition-transform duration-300 ${
                      isExpanded(index) ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Summary */}
                <p className="text-text-secondary text-sm mb-4">
                  {industry.summary}
                </p>

                {/* Services dropdown */}
                <div
                  className={`transition-all duration-300 ${
                    isExpanded(index)
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0 pointer-events-none"
                  }`}
                  style={{ display: "grid" }}
                  aria-hidden={!isExpanded(index)}
                >
                  <div className="overflow-hidden">
                    <div className="pt-4 border-t border-gray-200 space-y-0">
                      {industry.services.map((service, sIdx) => (
                        <div
                          key={sIdx}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                            sIdx % 2 === 0 ? "bg-slate-50" : "bg-white"
                          }`}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0" />
                          <span className="text-sm font-medium text-gray-900">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 pt-4 border-t border-gray-200">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-cta hover:text-cta/80 text-sm font-semibold transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        See what's included
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Collapsed hint */}
                {!isExpanded(index) && (
                  <p className="text-accent-blue text-xs font-medium">
                    {industry.services.length} services. Click to explore
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Section CTAs */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
          <Link
            to="/contact"
            className="btn-cta inline-flex items-center gap-2"
          >
            Get a Free Audit
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 text-cta hover:text-cta/80 font-semibold transition-colors text-lg"
          >
            <Phone className="h-5 w-5" />
            {PHONE_NUMBER}
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopicalExpertise;
