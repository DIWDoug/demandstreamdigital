import { ArrowRight, MapPin, Map, MousePointerClick, Share2, Mail, BarChart3, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

const services: Service[] = [
  {
    icon: MapPin,
    title: "Local SEO",
    description: "Technical audits, on-page optimization, and strategic content development for organic rankings.",
    href: "/services/local-seo",
  },
  {
    icon: Map,
    title: "Google Business Profile",
    description: "Google Business Profile optimization, review systems, and citation building for local pack dominance.",
    href: "/services/google-maps",
  },
  {
    icon: MousePointerClick,
    title: "Paid Advertising",
    description: "Google Ads and Meta campaigns engineered for lead generation and measurable ROI.",
    href: "/services/paid-media",
  },
  {
    icon: Share2,
    title: "Authority Building",
    description: "Digital PR, link building, and citation management that compounds trust signals over time.",
    href: "/services/authority",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Automated nurture sequences and lifecycle campaigns that convert leads into loyal customers.",
    href: "/services/email-marketing",
  },
  {
    icon: BarChart3,
    title: "Reporting",
    description: "Branded dashboards and executive summaries that strengthen client relationships.",
    href: "/services/reporting",
  }
];

const ServicesGrid = () => {
  return (
    <section className="py-20 lg:py-28 bg-background relative">
      {/* Top gradient transition */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-surface-dark to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Two-column layout */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Column - Inbound Marketing Overview (2 cols) */}
            <div className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start">
              <span className="inline-block px-3 py-1 rounded-full bg-cta/10 text-cta text-xs font-semibold uppercase tracking-wider mb-6">
                The System
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
                White Label Inbound Marketing,<br />
                <span className="text-accent-blue">Fully Executed</span>
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Inbound isn't a single tactic. It's multiple channels working as one system to attract, convert, and retain customers.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Each service reinforces the others. Together, they create predictable growth your clients can count on.
              </p>
              
              <Link 
                to="/services"
                className="btn-cta group inline-flex items-center gap-2"
              >
                See the Full Breakdown
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right Column - Services Grid (3 cols) */}
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <Link 
                  key={index}
                  to={service.href}
                  className="group relative p-6 rounded-xl bg-surface-card border border-border/50 hover:border-accent-blue/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-blue/5"
                >
                  {/* Icon badge */}
                  <span className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center group-hover:bg-accent-blue group-hover:text-white transition-colors">
                    <service.icon className="w-4 h-4" strokeWidth={2} />
                  </span>
                  
                  <h3 className="text-foreground font-semibold mb-2 pr-10 group-hover:text-accent-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <span className="inline-flex items-center text-xs font-medium text-accent-blue mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
                </Link>
              ))}
              
              {/* Calculator CTA Card */}
              <Link 
                to="/agency-calculator"
                className="group relative p-6 rounded-xl bg-gradient-to-br from-cta/10 to-cta/5 border border-cta/30 hover:border-cta/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cta/10 sm:col-span-2"
              >
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-xl bg-cta/20 text-cta flex items-center justify-center group-hover:bg-cta group-hover:text-white transition-colors">
                    <Calculator className="w-6 h-6" strokeWidth={2} />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-foreground font-semibold mb-1 group-hover:text-cta transition-colors">
                      Agency Partner Calculator
                    </h3>
                    <p className="text-text-secondary text-sm">
                      Estimate ROI and investment for your next client conversation.
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-cta opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;