import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "White Label SEO",
    description: "Technical optimization, content strategy, and local search dominance.",
    href: "/services/local-seo"
  },
  {
    title: "White Label GBP SEO",
    description: "Profile optimization, review management, and local pack visibility.",
    href: "/services/google-maps"
  },
  {
    title: "White Label Paid Advertising",
    description: "Google Ads, Meta campaigns, and performance-driven acquisition.",
    href: "/services/paid-media"
  },
  {
    title: "White Label Authority Building",
    description: "Digital PR, citation management, and brand presence expansion.",
    href: "/services/authority"
  },
  {
    title: "White Label Email Marketing",
    description: "Nurture sequences, retention campaigns, and lifecycle automation.",
    href: "/services/email-marketing"
  },
  {
    title: "White Label Reporting & Analytics",
    description: "Dashboards, client reporting, and performance insights.",
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

        {/* Featured Service - Digital Inbound Marketing */}
        <Link
          to="/services"
          className="group relative block max-w-6xl mx-auto mb-12 p-8 md:p-12 bg-surface-dark rounded-xl border border-border overflow-hidden"
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cta/5 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-primary mb-3 block font-medium">
                Core Service
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                White Label Digital Inbound Marketing
              </h3>
              <p className="text-text-secondary leading-relaxed">
                The complete growth engine your clients need. Strategic content, technical SEO, and targeted campaigns orchestrated to generate predictable, sustainable lead flow.
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-cta text-cta-foreground font-semibold rounded-lg transition-all duration-300 group-hover:gap-3">
                Learn More
                <ArrowRight className="h-5 w-5" />
              </span>
            </div>
          </div>
        </Link>

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
