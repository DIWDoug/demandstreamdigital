import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "White Label SEO",
    description: "Comprehensive technical SEO audits, on-page optimization, and strategic content development designed to improve organic rankings for local businesses. We handle site architecture, schema markup, internal linking, and keyword targeting—delivering measurable visibility gains your agency can confidently present to clients.",
    href: "/services/local-seo",
    gradient: "from-primary/8 via-transparent to-primary/3",
    pattern: "radial-gradient(circle at 90% 10%, hsl(var(--primary) / 0.08) 0%, transparent 50%)"
  },
  {
    title: "White Label GBP SEO",
    description: "Google Business Profile optimization that drives local pack visibility and increases qualified calls. Our team manages profile completeness, category optimization, photo strategies, review generation systems, and citation building across authoritative directories to establish local dominance for your clients.",
    href: "/services/google-maps",
    gradient: "from-cta/6 via-transparent to-cta/3",
    pattern: "radial-gradient(circle at 10% 90%, hsl(var(--cta) / 0.06) 0%, transparent 50%)"
  },
  {
    title: "White Label Paid Advertising",
    description: "Performance-driven Google Ads and Meta advertising campaigns engineered for lead generation and measurable ROI. We architect campaign structures, manage bidding strategies, create compelling ad copy, and continuously optimize for conversions—giving your clients accountable growth they can track.",
    href: "/services/paid-media",
    gradient: "from-primary/5 via-transparent to-cta/5",
    pattern: "radial-gradient(circle at 80% 80%, hsl(var(--primary) / 0.06) 0%, transparent 40%)"
  },
  {
    title: "White Label Authority Building",
    description: "Strategic digital PR, citation management, and link building that compounds trust signals over time. We secure placements on authoritative sites, manage NAP consistency, and build the credibility infrastructure that creates lasting competitive advantages for local businesses.",
    href: "/services/authority",
    gradient: "from-cta/5 via-transparent to-primary/5",
    pattern: "radial-gradient(circle at 20% 20%, hsl(var(--cta) / 0.07) 0%, transparent 45%)"
  },
  {
    title: "White Label Email Marketing",
    description: "Automated nurture sequences, targeted retention campaigns, and lifecycle marketing that converts leads into loyal customers. We design email flows, segment audiences, craft compelling copy, and optimize send timing to keep your clients top-of-mind and drive repeat business month after month.",
    href: "/services/email-marketing",
    gradient: "from-primary/6 via-transparent to-transparent",
    pattern: "radial-gradient(circle at 95% 50%, hsl(var(--primary) / 0.08) 0%, transparent 50%)"
  },
  {
    title: "White Label Reporting & Analytics",
    description: "Branded dashboards and executive summaries that make your agency look like the expert you are. We consolidate data from multiple sources, highlight meaningful metrics, and deliver clear performance narratives that strengthen client relationships and demonstrate ongoing value.",
    href: "/services/reporting",
    gradient: "from-cta/4 via-transparent to-primary/4",
    pattern: "radial-gradient(circle at 5% 60%, hsl(var(--primary) / 0.05) 0%, transparent 40%), radial-gradient(circle at 90% 30%, hsl(var(--cta) / 0.05) 0%, transparent 40%)"
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
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="group relative p-8 bg-card border border-border rounded-lg transition-all duration-300 hover:border-primary/40 hover:shadow-lg border-l-4 border-l-primary/20 hover:border-l-primary overflow-hidden"
            >
              {/* Abstract gradient background */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} pointer-events-none`}
              />
              {/* Geometric pattern overlay */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-60"
                style={{ background: service.pattern }}
              />
              
              {/* Number indicator */}
              <span className="absolute top-6 right-6 text-4xl font-semibold text-muted/10 select-none">
                {String(index + 1).padStart(2, '0')}
              </span>
              
              <div className="relative z-10 pr-8">
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-primary mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
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
