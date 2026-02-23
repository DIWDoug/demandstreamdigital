import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "15 Years", label: "In local service marketing" },
  { value: "100+", label: "Businesses served across career" },
  { value: "25x+", label: "ROI documented in case studies" },
];

const ResultsBar = () => {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 section-light reveal-section">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
            15 Years. One Focus. Real Results.
          </h2>
          <p className="text-slate-600 text-base mb-12 max-w-2xl mx-auto">
            For the past 15 years, Doug Bryson and the teams behind Dialed In Local and Dialed In Web have been building marketing systems for local and national businesses across paid advertising, SEO, email marketing, optimized web design, and content development. All of that experience now lives inside DemandStream Digital.
          </p>

          <div className="grid grid-cols-3 gap-8 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>

          <p className="text-slate-600 text-sm font-medium mb-6">
            Now applied exclusively to plumbing and HVAC companies.
          </p>

          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-cta hover:text-cta/80 transition-colors"
          >
            See our Dialed In Web case studies
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResultsBar;
