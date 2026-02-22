import { ArrowRight, MapPin, Map, MousePointerClick, PenTool, Mail, BarChart3, Calculator } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import StreamTexture from "@/components/StreamTexture";

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
    description: "Show up when homeowners search for plumbing or HVAC services in your area. We handle the technical work that builds organic visibility over time.",
    href: "/white-label-local-seo",
  },
  {
    icon: Map,
    title: "Google Maps / GBP",
    description: "Dominate the local map pack. Optimized profiles, consistent citations, and review systems that build trust with homeowners searching for service pros.",
    href: "/white-label-gbp-seo",
  },
  {
    icon: MousePointerClick,
    title: "Paid Advertising",
    description: "Turn ad spend into booked jobs. Google and Meta campaigns built to generate calls from homeowners who need plumbing or HVAC service now.",
    href: "/white-label-paid-media",
  },
  {
    icon: PenTool,
    title: "Content Development",
    description: "Strategic content that ranks locally and converts. Service area pages, seasonal guides, and blog posts that drive visibility and trust.",
    href: "/white-label-content-marketing",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Stay top of mind with past customers. Automated sequences for maintenance reminders, seasonal tune-ups, and referral requests.",
    href: "/white-label-email-marketing",
  },
  {
    icon: BarChart3,
    title: "Reporting & Dashboards",
    description: "See exactly what's working. Clear dashboards showing calls, leads, rankings, and ROI — so you always know where your marketing dollars go.",
    href: "/white-label-reporting",
  }
];

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <Link 
      to={service.href}
      className="group relative rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 overflow-hidden"
    >
      <div className="relative p-6">
        <span className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
          <service.icon className="w-4 h-4" strokeWidth={2} />
        </span>
        
        <h3 className="text-foreground font-semibold mb-2 pr-10 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {service.description}
        </p>
        
        <span className="inline-flex items-center text-xs font-medium text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
          Learn more
          <ArrowRight className="ml-1 h-3 w-3" />
        </span>
      </div>
    </Link>
  );
};

const ServicesGrid = () => {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <StreamTexture variant="dark" opacity={0.09} />
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start">
              <span className="inline-block px-3 py-1 rounded-full bg-accent-green/10 text-accent-green text-xs font-semibold uppercase tracking-wider mb-6">
                The System
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Complete Digital Marketing Services for<br />
                <span className="text-primary">Plumbing & HVAC Companies</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our plumbing and HVAC marketing services combine local SEO, Google Maps optimization, paid advertising, reputation growth, and conversion-focused strategy — structured to increase booked service calls and revenue stability.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Each service reinforces the others. Together, they create predictable growth you can count on.
              </p>
              
              <Link 
                to="/white-label-inbound-marketing-services"
                className="btn-cta group inline-flex items-center gap-2"
              >
                See the Full Breakdown
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}

              {/* Operator authority block */}
              <div className="sm:col-span-2 p-5 rounded-xl bg-card/50 border border-border/50">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Plumbing and HVAC companies operate under real-world pressures — EPA Section 608 requirements, refrigerant transition timelines, peak-season demand spikes, and technician capacity constraints. Our strategies are built to reflect those realities, not ignore them.
                </p>
              </div>
              
              <Link 
                to="/partner-tools"
                className="group relative p-6 rounded-xl bg-gradient-to-br from-accent-green/10 to-accent-green/5 border border-accent-green/30 hover:border-accent-green/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-green/10 sm:col-span-2"
              >
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-xl bg-accent-green/20 text-accent-green flex items-center justify-center group-hover:bg-accent-green group-hover:text-white transition-colors">
                    <Calculator className="w-6 h-6" strokeWidth={2} />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-foreground font-semibold mb-1 group-hover:text-accent-green transition-colors">
                      Explore Our Free Tools
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      ROI calculators, investment tools, and resources to help you plan your marketing budget.
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-accent-green opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
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
