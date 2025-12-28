import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { hubs } from "@/data/services";

interface RelatedHubsProps {
  currentSlug: string;
}

const RelatedHubs = ({ currentSlug }: RelatedHubsProps) => {
  const otherHubs = hubs.filter(hub => hub.slug !== currentSlug);
  
  return (
    <section className="py-16 lg:py-20 section-light border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">
          Explore Other Services
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {otherHubs.map((hub, index) => (
            <Link
              key={index}
              to={`/services/${hub.slug}`}
              className="group p-4 rounded-xl bg-white border border-gray-200 hover:border-[hsl(76,42%,41%)]/30 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-[hsl(76,42%,41%)]/10 border border-[hsl(76,42%,41%)]/20">
                  <hub.icon className="h-4 w-4 text-[hsl(76,42%,35%)]" />
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[hsl(76,42%,41%)] group-hover:translate-x-1 transition-all ml-auto" />
              </div>
              <h4 className="text-sm font-medium text-gray-900 group-hover:text-[hsl(76,42%,35%)] transition-colors">
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
