import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Local SEO",
    description: "Technical optimization, content strategy, and local search dominance.",
    href: "/services/local-seo"
  },
  {
    title: "Google Business Profile",
    description: "Profile optimization, review management, and local pack visibility.",
    href: "/services/google-maps"
  },
  {
    title: "Paid Media",
    description: "Google Ads, Meta campaigns, and performance-driven acquisition.",
    href: "/services/paid-media"
  },
  {
    title: "Authority Building",
    description: "Digital PR, citation management, and brand presence expansion.",
    href: "/services/authority"
  },
  {
    title: "Email Marketing",
    description: "Nurture sequences, retention campaigns, and lifecycle automation.",
    href: "/services/email-marketing"
  },
  {
    title: "Reporting & Analytics",
    description: "White-label dashboards, client reporting, and performance insights.",
    href: "/services/reporting"
  }
];

const ServicesGrid = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative">
      {/* Smooth transition from WhyPartnerWithUs dark section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-surface-dark to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6 text-foreground">
            Premium Fulfillment for Selective Partners
          </h2>
          <p className="text-lg text-text-secondary">
            Enterprise-grade execution, delivered invisibly under your brand.
          </p>
          
          {/* Green divider */}
          <div className="w-24 h-1 bg-cta mx-auto mt-8 rounded-full" />
        </div>

        {/* Services Grid - Clean, static cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="group relative p-8 bg-card border border-border rounded-lg transition-all duration-300 hover:border-primary/40 hover:shadow-lg border-l-4 border-l-primary/20 hover:border-l-primary"
            >
              {/* Number indicator */}
              <span className="absolute top-6 right-6 text-5xl font-semibold text-muted/10 select-none">
                {String(index + 1).padStart(2, '0')}
              </span>
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-flex items-center text-primary font-medium hover:underline underline-offset-4"
          >
            View all services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
