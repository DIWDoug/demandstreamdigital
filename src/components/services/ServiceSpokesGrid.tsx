import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { SpokeDetail } from "@/data/services";
import { useScrollReveal } from "@/hooks/useScrollAnimation";

interface ServiceSpokesGridProps {
  hubSlug: string;
  hubTitle: string;
  spokes: SpokeDetail[];
}

const ServiceSpokesGrid = ({ hubSlug, hubTitle, spokes }: ServiceSpokesGridProps) => {
  const sectionRef = useScrollReveal();
  
  return (
    <section ref={sectionRef} id="services" className="py-20 lg:py-28 section-light relative overflow-hidden reveal-section">
      {/* Subtle background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[hsl(224,60%,55%)]/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[hsl(76,42%,41%)]/10 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our <span className="text-[hsl(224,60%,55%)]">{hubTitle}</span> Services
          </h2>
          <p className="text-lg text-gray-600">
            Each service is delivered with agency-grade quality, detailed reporting, and complete white-label confidentiality.
          </p>
        </div>
        
        {/* Spokes grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spokes.map((spoke, index) => (
            <Link
              key={index}
              to={`/inbound-marketing-services/${hubSlug}/${spoke.slug}`}
              className="group p-6 rounded-xl bg-white border border-gray-200 hover:border-[hsl(224,60%,55%)]/30 hover:translate-y-[-2px] transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[hsl(76,42%,41%)] transition-colors pr-4">
                  {spoke.title}
                </h3>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[hsl(76,42%,41%)] group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {spoke.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSpokesGrid;
