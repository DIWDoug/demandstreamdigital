import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { hubs } from "@/data/services";

interface RelatedHubsProps {
  currentSlug: string;
}

const RelatedHubs = ({ currentSlug }: RelatedHubsProps) => {
  const otherHubs = hubs.filter(hub => hub.slug !== currentSlug);
  
  return (
    <section className="py-16 lg:py-20 bg-surface-dark border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
          Explore Other Services
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {otherHubs.map((hub, index) => (
            <Link
              key={index}
              to={`/services/${hub.slug}`}
              className="group p-4 rounded-xl bg-surface-elevated border border-border hover:border-accent-blue/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-accent-blue/10 border border-accent-blue/20">
                  <hub.icon className="h-4 w-4 text-accent-blue" />
                </div>
                <ArrowRight className="h-4 w-4 text-text-muted group-hover:text-cta group-hover:translate-x-1 transition-all ml-auto" />
              </div>
              <h4 className="text-sm font-medium text-foreground group-hover:text-cta transition-colors">
                {hub.title}
              </h4>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedHubs;
