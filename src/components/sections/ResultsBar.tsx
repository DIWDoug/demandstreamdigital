import { useState } from "react";
import { ArrowRight, Star, User, ChevronDown, Flame, Target, DollarSign, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import StreamTexture from "@/components/StreamTexture";

const stats = [
{
  value: "15+",
  label: "Years of Execution",
  icon: Flame,
  detail: "Since 2011, Doug Bryson and the teams behind Dialed In Local and Dialed In Web have been building marketing systems for local and national businesses across paid advertising, SEO, email marketing, web design, and content development."
},
{
  value: "100+",
  label: "SMB & National Campaigns",
  icon: Target,
  detail: "From single-location shops to multi-state service brands, we've managed campaigns across nearly every local service vertical. That experience now powers everything we build for plumbing and HVAC companies."
},
{
  value: "$10M+",
  label: "Ad Spend Managed",
  icon: DollarSign,
  detail: "Google Ads, Local Services Ads, Meta, AdRoll, and programmatic display. We've managed budgets from $2K/month to six figures, always tied to booked calls and measurable ROI."
},
{
  value: "4.9",
  label: "Average Client Rating",
  icon: Trophy,
  isStar: true,
  detail: "Across Google, Clutch, and direct client feedback. We earn it by being transparent, responsive, and focused on the numbers that matter to business owners."
}];


const ResultsBar = () => {
  const sectionRef = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 section-light relative reveal-section overflow-hidden">
      <StreamTexture variant="light" opacity={0.1} />
      <div className="section-divider absolute top-0" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-blue mb-3">15+ Years of Execution</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            Local Service Marketing. Now Focused on the Trades.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">All of that experience now lives inside DemandStream Digital. We've been the fulfillment engine behind successful agencies and direct clients alike — <strong>now applied exclusively to plumbing and HVAC.</strong>
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isOpen = openIndex === index;

            return (
              <button
                key={index}
                onClick={() => toggle(index)}
                className="text-left rounded-xl border border-gray-300/50 bg-gradient-to-br from-white to-[#F0F0ED] p-6 transition-all duration-300 hover:scale-[1.02] group"
                style={{
                  boxShadow: isOpen ?
                  'inset 0 3px 6px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06), 0 12px 32px rgba(0,0,0,0.14)' :
                  'inset 0 3px 6px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06), 0 8px 20px rgba(0,0,0,0.1)'
                }}>

                {/* Icon */}
                <div className="inline-flex items-center justify-center p-3 rounded-xl mb-4 bg-accent-blue/10 border border-accent-blue/20">
                  <Icon className="w-6 h-6 text-accent-blue" strokeWidth={1.5} />
                </div>

                {/* Value */}
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-3xl md:text-4xl font-bold text-cta">
                    {stat.value}
                  </span>
                  {stat.isStar && <Star className="h-5 w-5 text-cta fill-cta" />}
                </div>

                {/* Label + chevron */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-900">{stat.label}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""}`
                    } />

                </div>

                {/* Expandable detail */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                  isOpen ? "max-h-48 opacity-100 mt-2" : "max-h-0 opacity-0"}`
                  }>

                  <div className="border-t border-gray-200/60 pt-3">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {stat.detail}
                    </p>
                  </div>
                </div>
              </button>);

          })}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/case-studies"
            className="btn-cta group inline-flex items-center gap-2">

            See Our Historical Case Studies
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/about#team"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cta hover:text-cta/80 transition-colors border border-cta/30 rounded-lg px-5 py-3 hover:bg-cta/5">

            <User className="h-4 w-4" />
            Meet the Team
          </Link>
        </div>
      </div>
    </section>);

};

export default ResultsBar;