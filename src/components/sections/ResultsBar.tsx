import { useState } from "react";
import { ArrowRight, Star, User, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollAnimation";

const stats = [
  {
    value: "15+",
    label: "Years of Execution",
    detail: "Since 2011, Doug Bryson and the teams behind Dialed In Local and Dialed In Web have been building marketing systems for local and national businesses across paid advertising, SEO, email marketing, web design, and content development.",
  },
  {
    value: "100+",
    label: "SMB & National Campaigns",
    detail: "From single-location shops to multi-state service brands, we've managed campaigns across nearly every local service vertical. That experience now powers everything we build for plumbing and HVAC companies.",
  },
  {
    value: "$10M+",
    label: "Ad Spend Managed",
    detail: "Google Ads, Local Services Ads, Meta, AdRoll, and programmatic display. We've managed budgets from $2K/month to six figures, always tied to booked calls and measurable ROI.",
  },
  {
    value: "4.9",
    label: "Average Client Rating",
    isStar: true,
    detail: "Across Google, Clutch, and direct client feedback. We earn it by being transparent, responsive, and focused on the numbers that matter to business owners.",
  },
];

const ResultsBar = () => {
  const sectionRef = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 section-light reveal-section">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left column: headline + intro */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-cta mb-3">15+ Years of Execution</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Local Service Marketing. Now Focused on the Trades.
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                All of that experience now lives inside DemandStream Digital. We've been the fulfillment engine behind successful agencies and direct clients alike.
              </p>
              <p className="text-slate-500 text-sm">
                Now applied exclusively to plumbing and HVAC companies.
              </p>
            </div>

            {/* Right column: accordion stats */}
            <div className="space-y-2">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl md:text-3xl font-bold text-cta flex items-center gap-0.5">
                        {stat.value}
                        {stat.isStar && <Star className="h-5 w-5 text-cta fill-cta" />}
                      </span>
                      <span className="text-sm font-medium text-slate-700">{stat.label}</span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-200 ${
                      openIndex === index
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <p className="px-5 pb-4 text-sm text-slate-600 leading-relaxed">
                      {stat.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              to="/case-studies"
              className="btn-cta group inline-flex items-center gap-2"
            >
              See Our Historical Case Studies
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cta hover:text-cta/80 transition-colors border border-cta/30 rounded-lg px-5 py-3 hover:bg-cta/5"
            >
              <User className="h-4 w-4" />
              Meet the Founder
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsBar;
