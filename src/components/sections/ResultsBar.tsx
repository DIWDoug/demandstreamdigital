import { ArrowRight, Star, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "15+", label: "Years of Execution" },
  { value: "100+", label: "SMB & National Campaigns" },
  { value: "$10M+", label: "Ad Spend Managed" },
  { value: "4.9", label: "Average Client Rating", isStar: true },
];

const ResultsBar = () => {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 section-light reveal-section">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-cta mb-3">15+ Years of Execution</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
            Local Service Marketing. Now Focused on the Trades.
          </h2>
          <p className="text-slate-600 text-base mb-12 max-w-2xl mx-auto">
            For over 15 years, the team behind DemandStream has been the fulfillment engine behind successful agencies and direct clients alike. Through Dialed In Web and Dialed In Local, we've built marketing systems for SMBs and national brands across paid advertising, SEO, email marketing, web design, and content development. All of that experience now powers DemandStream Digital.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-cta mb-1 flex items-center justify-center gap-1">
                  {stat.value}
                  {stat.isStar && <Star className="h-6 w-6 text-cta fill-cta" />}
                </p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>

          <p className="text-slate-600 text-sm font-medium mb-8">
            Now applied exclusively to plumbing and HVAC companies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
