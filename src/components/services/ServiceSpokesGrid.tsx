import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Spoke } from "@/data/services";

interface ServiceSpokesGridProps {
  hubSlug: string;
  hubTitle: string;
  spokes: Spoke[];
}

const ServiceSpokesGrid = ({ hubSlug, hubTitle, spokes }: ServiceSpokesGridProps) => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-surface-dark">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our {hubTitle} Services
          </h2>
          <p className="text-lg text-text-secondary">
            Each service is delivered with agency-grade quality, detailed reporting, and complete white-label confidentiality.
          </p>
        </div>
        
        {/* Spokes grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spokes.map((spoke, index) => (
            <Link
              key={index}
              to={`/services/${hubSlug}/${spoke.slug}`}
              className="premium-card group hover:translate-y-[-2px] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-cta transition-colors pr-4">
                  {spoke.title}
                </h3>
                <ArrowRight className="h-5 w-5 text-text-muted group-hover:text-cta group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
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
