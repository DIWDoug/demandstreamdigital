import { Link } from "react-router-dom";
import { hubs } from "@/data/services";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const ServicesDirectory = () => {
  const [expandedHubs, setExpandedHubs] = useState<string[]>([]);

  const toggleHub = (slug: string) => {
    setExpandedHubs(prev => 
      prev.includes(slug) 
        ? prev.filter(s => s !== slug)
        : [...prev, slug]
    );
  };

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold text-foreground mb-8">
            Services Directory
          </h2>
          
          <div className="space-y-4">
            {hubs.map((hub) => {
              const isExpanded = expandedHubs.includes(hub.slug);
              
              return (
                <div key={hub.slug} className="border-b border-border/30 pb-4">
                  <div className="flex items-center justify-between">
                    <Link 
                      to={`/services/${hub.slug}`}
                      className="text-foreground hover:text-accent-blue transition-colors font-medium"
                    >
                      {hub.title}
                    </Link>
                    {hub.spokes.length > 0 && (
                      <button
                        onClick={() => toggleHub(hub.slug)}
                        className="p-1 text-text-muted hover:text-foreground transition-colors"
                        aria-label={isExpanded ? "Collapse" : "Expand"}
                      >
                        <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  
                  {isExpanded && hub.spokes.length > 0 && (
                    <ul className="mt-3 ml-4 space-y-1">
                      {hub.spokes.map((spoke) => (
                        <li key={spoke.slug}>
                          <Link
                            to={`/services/${hub.slug}/${spoke.slug}`}
                            className="text-sm text-text-secondary hover:text-accent-blue transition-colors"
                          >
                            {spoke.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDirectory;
