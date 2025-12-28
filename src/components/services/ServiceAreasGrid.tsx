import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { hubs } from "@/data/services";

const serviceDescriptions: Record<string, string> = {
  "local-seo": "Organic visibility in local search. The foundation that makes every other channel more effective.",
  "google-maps": "Google Business Profile optimization and local pack visibility for high-intent local traffic.",
  "paid-media": "Search and social advertising that captures demand with intentional spend and clear measurement.",
  "authority": "Trust signals that support rankings, Maps visibility, and conversion confidence.",
  "reporting": "Measurement infrastructure and reporting that keeps everyone aligned on what matters.",
  "email-marketing": "Retention and re-engagement to stabilize performance and maximize client lifetime value."
};

const ServiceAreasGrid = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-3">
              Execution Areas
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Service Areas
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Each area can be engaged individually or as part of a coordinated system. 
              Scope determines activation and priority.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hubs.map((hub) => (
              <Link
                key={hub.slug}
                to={`/services/${hub.slug}`}
                className="group bg-surface-elevated border border-border/50 rounded-xl p-6 hover:border-accent-blue/30 hover:bg-surface-elevated/80 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center group-hover:bg-accent-blue/20 transition-colors">
                    <hub.icon className="h-5 w-5 text-accent-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-blue transition-colors">
                    {hub.title}
                  </h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {serviceDescriptions[hub.slug] || hub.summary}
                </p>
                <div className="flex items-center gap-2 text-cta text-sm font-medium group-hover:gap-3 transition-all">
                  View details
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasGrid;
