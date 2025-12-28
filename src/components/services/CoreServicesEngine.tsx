import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Map, MousePointerClick, Mail, Award, BarChart3 } from "lucide-react";

const services = [
  { 
    slug: "local-seo",
    icon: MapPin,
    title: "Local SEO",
  },
  { 
    slug: "google-maps",
    icon: Map,
    title: "Google Maps",
  },
  { 
    slug: "paid-media",
    icon: MousePointerClick,
    title: "Paid Media",
  },
  { 
    slug: "email-marketing",
    icon: Mail,
    title: "Email & Retention",
  },
  { 
    slug: "authority",
    icon: Award,
    title: "Authority Building",
  },
  { 
    slug: "reporting",
    icon: BarChart3,
    title: "Reporting",
  },
];

const CoreServicesEngine = () => {
  return (
    <section className="py-16 lg:py-20 bg-background border-b border-border/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-3">
              The Complete System
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Digital Inbound Marketing{" "}
              <span className="text-gradient-primary">as a Growth Engine</span>
            </h2>
          </div>

          {/* Horizontal service links */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group flex items-center gap-2 px-4 py-2.5 bg-surface-elevated border border-border/50 rounded-full hover:border-accent-blue/40 hover:bg-surface-elevated/80 transition-all duration-300"
              >
                <service.icon className="h-4 w-4 text-accent-blue" />
                <span className="text-sm font-medium text-foreground group-hover:text-accent-blue transition-colors">
                  {service.title}
                </span>
                <ArrowRight className="h-3 w-3 text-text-muted group-hover:text-accent-blue group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreServicesEngine;
