import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Map, MousePointerClick, Mail, Award, BarChart3 } from "lucide-react";

const services = [
  { 
    slug: "local-seo",
    icon: MapPin,
    title: "Local SEO",
    description: "Organic visibility in local search. The foundation that makes every other channel more effective."
  },
  { 
    slug: "google-maps",
    icon: Map,
    title: "Google Maps",
    description: "GBP optimization and local pack visibility for high-intent traffic."
  },
  { 
    slug: "paid-media",
    icon: MousePointerClick,
    title: "Paid Media",
    description: "Search and social advertising with intentional spend and clear measurement."
  },
  { 
    slug: "email-marketing",
    icon: Mail,
    title: "Email & Retention",
    description: "Re-engagement that stabilizes performance and maximizes lifetime value."
  },
  { 
    slug: "authority",
    icon: Award,
    title: "Authority Building",
    description: "Trust signals that support rankings and conversion confidence."
  },
  { 
    slug: "reporting",
    icon: BarChart3,
    title: "Reporting",
    description: "Measurement infrastructure that keeps everyone aligned on results."
  },
];

const CoreServicesEngine = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-3">
              The Complete System
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Digital Inbound Marketing{" "}
              <span className="text-gradient-primary">as a Growth Engine</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Each service is part of a coordinated system. Engaged individually or together, 
              executed with the same standards and planning cadence.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group relative bg-surface-elevated border border-border/50 rounded-xl p-6 hover:border-accent-blue/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center group-hover:bg-accent-blue/20 transition-colors flex-shrink-0">
                    <service.icon className="h-5 w-5 text-accent-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-cta text-sm font-medium mt-4 ml-16 group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreServicesEngine;
