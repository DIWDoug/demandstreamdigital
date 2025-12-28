import { Link } from "react-router-dom";
import { MapPin, Map, MousePointerClick, Mail, Award, BarChart3 } from "lucide-react";

const services = [
  {
    title: "Local SEO",
    slug: "local-seo",
    icon: MapPin,
    items: ["On-Page Optimization", "Technical SEO Audits", "Local Keyword Strategy", "Content Development", "Link Building", "Schema Markup"]
  },
  {
    title: "Google Maps",
    slug: "google-maps",
    icon: Map,
    items: ["GBP Optimization", "Review Management", "Citation Building", "Photo Optimization", "Q&A Management", "Post Scheduling"]
  },
  {
    title: "Paid Media",
    slug: "paid-media",
    icon: MousePointerClick,
    items: ["Google Ads", "Meta Ads", "Local Service Ads", "Retargeting Campaigns", "Landing Page Design", "Conversion Tracking"]
  },
  {
    title: "Email Marketing",
    slug: "email-marketing",
    icon: Mail,
    items: ["Campaign Strategy", "List Management", "Automation Flows", "Newsletter Design", "A/B Testing", "Performance Analytics"]
  },
  {
    title: "Authority",
    slug: "authority",
    icon: Award,
    items: ["PR Placements", "Local Citations", "Industry Directories", "Brand Mentions", "Reputation Signals", "Trust Building"]
  },
  {
    title: "Reporting",
    slug: "reporting",
    icon: BarChart3,
    items: ["White-Label Dashboards", "Monthly Reports", "Rank Tracking", "Call Tracking", "ROI Analysis", "Client Presentations"]
  }
];

const ServicesDirectory = () => {
  return (
    <section className="py-16 lg:py-20 bg-background border-t border-border/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold text-foreground mb-10 text-center">
            Services Directory
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
            {services.map((service) => (
              <div key={service.slug} className="space-y-3">
                <Link 
                  to={`/services/${service.slug}`}
                  className="flex items-center gap-2 text-foreground hover:text-accent-blue transition-colors font-medium text-sm group"
                >
                  <service.icon className="h-4 w-4 text-accent-blue" />
                  <span className="group-hover:underline">{service.title}</span>
                </Link>
                <ul className="space-y-1.5 pl-6">
                  {service.items.map((item, index) => (
                    <li key={index} className="text-text-muted text-xs leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDirectory;
