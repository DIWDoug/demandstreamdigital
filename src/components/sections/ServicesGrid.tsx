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
    description: "We target high-value, high-volume searches like \"hydro jetting [city]\" and \"water heater installation [city]\" alongside high-intent near-me terms, prioritizing what drives the most booked jobs.",
    href: "/plumbing-seo",
  },
  {
    icon: Map,
    title: "Google Maps / GBP",
    description: "Over 70% of local searches stop at the Google Maps results. We improve your Google Business Profile, reviews, and local signals to get you into that top three.",
    href: "/plumbing-google-maps",
  },
  {
    icon: MousePointerClick,
    title: "Paid Advertising",
    description: "More than Google Ads. We run a connected paid strategy: Google Ads, retargeting with AdRoll, and social ads on Facebook and Instagram. Built to capture demand, follow up on missed calls, and keep your name in front of people who searched but didn't book.",
    href: "/plumbing-paid-advertising",
  },
  {
    icon: PenTool,
    title: "Content Development",
    description: "Service pages and city pages built to rank for high-intent searches in your market. Content that turns traffic into calls.",
    href: "/plumbing-content-marketing",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Keep past customers coming back with seasonal reminders, maintenance offers, and follow-up sequences that book the next job before they search for someone else.",
    href: "/plumbing-email-marketing",
  },
  {
    icon: BarChart3,
    title: "Reporting & Dashboards",
    description: "See rankings, leads, and campaign performance clearly, without digging through spreadsheets.",
    href: "/plumbing-reporting",
  }
];

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <Link 
      to={service.href}
      className="group relative rounded-xl bg-card border border-border hover:border-accent-blue/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-blue/10 overflow-hidden"
    >
      <div className="relative p-6">
        <span className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center group-hover:bg-accent-blue group-hover:text-white transition-colors">
          <service.icon className="w-4 h-4" strokeWidth={2} />
        </span>
        
        <h3 className="text-foreground font-semibold mb-2 pr-10 group-hover:text-accent-blue transition-colors">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {service.description}
        </p>
        
        <span className="inline-flex items-center text-xs font-medium text-accent-blue mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
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
              <span className="inline-block px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-semibold uppercase tracking-wider mb-6">
                The System
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Plumbing & HVAC Marketing Services That Drive Booked Calls
                
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our plumbing and HVAC marketing services combine local SEO, Google Maps, paid advertising, reputation growth, and website design built to convert. All structured to increase booked service calls and revenue stability.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Each service reinforces the others. That connection is what creates predictable call flow you can build a schedule around.
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
                  Plumbing and HVAC companies operate under real-world pressures: EPA Section 608 requirements, refrigerant transition timelines, peak-season demand spikes, and technician capacity constraints. Our strategies are built to reflect those realities, not ignore them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
