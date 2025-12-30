import { Link } from "react-router-dom";
import { MapPin, Star, BarChart3, ArrowRight } from "lucide-react";

const relatedServices = [
  {
    icon: MapPin,
    title: "Google Maps Optimization",
    description: "Maximize visibility in the local 3-pack with dedicated GBP management, review strategy, and citation building.",
    href: "/white-label-inbound-marketing-services/google-maps"
  },
  {
    icon: Star,
    title: "Reputation Management",
    description: "Generate reviews, manage responses, and build the trust signals that influence both rankings and conversions.",
    href: "/white-label-inbound-marketing-services/google-maps"
  },
  {
    icon: BarChart3,
    title: "Reporting & Dashboards",
    description: "White-labeled dashboards that show clients what matters—rankings, traffic, calls, and ROI in plain language.",
    href: "/white-label-inbound-marketing-services/reporting"
  }
];

const LocalSEORelatedServices = () => {
  return (
    <section className="py-16 lg:py-20 bg-surface-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-3">
              Works Better Together
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Complementary Services
            </h2>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  to={service.href}
                  className="group bg-surface-elevated border border-border/50 rounded-xl p-6 hover:border-cta/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-cta/10 flex items-center justify-center mb-4 group-hover:bg-cta/20 transition-colors">
                    <Icon className="w-6 h-6 text-cta" />
                  </div>
                  <h3 className="text-foreground font-semibold text-lg mb-2 group-hover:text-cta transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-cta text-sm font-medium">
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSEORelatedServices;
