import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { MapPin, Map, MousePointerClick, Share2, Mail, BarChart3 } from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "White Label SEO",
    description: "Technical audits, on-page optimization, and strategic content development for organic rankings.",
    href: "/services/local-seo",
  },
  {
    icon: Map,
    title: "White Label GBP SEO",
    description: "Google Business Profile optimization, review systems, and citation building for local pack dominance.",
    href: "/services/google-maps",
  },
  {
    icon: MousePointerClick,
    title: "White Label Paid Advertising",
    description: "Google Ads and Meta campaigns engineered for lead generation and measurable ROI.",
    href: "/services/paid-media",
  },
  {
    icon: Share2,
    title: "White Label Authority Building",
    description: "Digital PR, link building, and citation management that compounds trust signals over time.",
    href: "/services/authority",
  },
  {
    icon: Mail,
    title: "White Label Email Marketing",
    description: "Automated nurture sequences and lifecycle campaigns that convert leads into loyal customers.",
    href: "/services/email-marketing",
  },
  {
    icon: BarChart3,
    title: "White Label Reporting",
    description: "Branded dashboards and executive summaries that strengthen client relationships.",
    href: "/services/reporting",
  }
];

const ServicesGrid = () => {
  return (
    <section className="py-20 lg:py-28 bg-surface-elevated relative overflow-hidden">
      {/* Subtle dot grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Subtle accent line */}
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-accent-blue/20 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Inbound Marketing Overview */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <div className="inline-block mb-4">
                <span className="text-accent-blue text-sm font-medium tracking-wider uppercase">
                  Core Service
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
                White Label{" "}
                <span className="text-text-secondary">Inbound Marketing</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6 max-w-xl">
                Inbound marketing isn't a single service—it's the orchestration of multiple channels working together to attract, convert, and retain customers for your clients.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-xl">
                Each component reinforces the others. SEO drives organic visibility. Paid media accelerates growth. Email nurtures leads. Authority building compounds trust. Together, they create a system that generates predictable, sustainable results.
              </p>
              
              <Link 
                to="/services"
                className="btn-cta group inline-flex items-center gap-2"
              >
                Explore the Full System
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right Column - Services List */}
            <div className="space-y-0">
              {services.map((service, index) => (
                <Link 
                  key={index}
                  to={service.href}
                  className={`group py-6 transition-all duration-300 hover:pl-4 flex gap-4 ${
                    index !== services.length - 1 ? 'border-b border-border/30' : ''
                  }`}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent-blue/10 text-accent-blue transition-all duration-300 group-hover:bg-accent-blue group-hover:text-white">
                      <service.icon className="w-4 h-4" strokeWidth={2} />
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-foreground text-lg font-semibold group-hover:text-accent-blue transition-colors duration-300">
                        {service.title}
                      </h3>
                      <ArrowRight className="h-4 w-4 text-text-muted opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;