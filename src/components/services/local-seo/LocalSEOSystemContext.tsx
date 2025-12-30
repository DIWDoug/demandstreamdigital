import { Link } from "react-router-dom";
import { Map, MousePointerClick, Mail, Award, BarChart3, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Map,
    title: "Google Maps",
    description: "84% of local searches happen here. Dominate the map pack with optimized profiles and reviews.",
    href: "/inbound-marketing-services/google-maps"
  },
  {
    icon: MousePointerClick,
    title: "Paid Media",
    description: "Accelerate results with Google Ads and Meta. Get leads while SEO compounds.",
    href: "/inbound-marketing-services/paid-media"
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Turn one-time customers into repeat buyers. Automated sequences that drive revenue on autopilot.",
    href: "/inbound-marketing-services/email-marketing"
  },
  {
    icon: Award,
    title: "Authority Building",
    description: "PR placements and backlinks that build trust with Google and customers alike.",
    href: "/inbound-marketing-services/authority"
  },
  {
    icon: BarChart3,
    title: "Reporting",
    description: "White-labeled dashboards your clients love. Show the value, keep the retention.",
    href: "/inbound-marketing-services/reporting"
  }
];

const LocalSEOSystemContext = () => {
  return (
    <section className="py-20 lg:py-28 bg-surface-dark relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-4">
              The Complete System
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Local SEO Works Best as Part of a System
            </h2>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto">
              SEO drives organic visibility, but the best results come when every channel works together. Here is how the other pieces multiply what local SEO delivers.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="group bg-surface-elevated border border-border/50 rounded-xl p-6 hover:border-cta/30 transition-all hover:scale-[1.02]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cta/10 flex items-center justify-center shrink-0 group-hover:bg-cta/20 transition-colors">
                    <service.icon className="h-6 w-6 text-cta" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-cta transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-cta text-sm font-medium group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link 
              to="/inbound-marketing-services"
              className="btn-cta group inline-flex items-center gap-2"
            >
              View Full Inbound Marketing Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSEOSystemContext;
