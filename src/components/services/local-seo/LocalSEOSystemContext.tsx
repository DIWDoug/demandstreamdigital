import { Link } from "react-router-dom";
import { Search, MapPin, Sparkles, Star, Mail, Globe, BarChart3, Share2 } from "lucide-react";

const services = [
  {
    icon: Search,
    id: "local-seo",
    title: "Local SEO",
    description: "Organic visibility in local search results and Google Maps. The foundation that makes every other channel more effective.",
    href: "/white-label-inbound-marketing-services/local-seo",
    isCenter: true
  },
  {
    icon: MapPin,
    id: "google-maps",
    title: "Google Maps",
    description: "Dominate the map pack with optimized profiles, reviews, and local engagement.",
    href: "/white-label-inbound-marketing-services/google-maps"
  },
  {
    icon: Sparkles,
    id: "paid-media",
    title: "Paid Media",
    description: "Accelerate results with Google Ads and Meta while SEO compounds.",
    href: "/white-label-inbound-marketing-services/paid-media"
  },
  {
    icon: Star,
    id: "reputation",
    title: "Reputation",
    description: "Build trust with review generation and management that converts.",
    href: "/white-label-inbound-marketing-services/google-maps"
  },
  {
    icon: Mail,
    id: "email-marketing",
    title: "Email Marketing",
    description: "Turn one-time customers into repeat buyers with automated sequences.",
    href: "/white-label-inbound-marketing-services/email-marketing"
  },
  {
    icon: Globe,
    id: "authority",
    title: "Authority Building",
    description: "PR placements and backlinks that build trust with Google and customers.",
    href: "/white-label-inbound-marketing-services/authority"
  },
  {
    icon: BarChart3,
    id: "reporting",
    title: "Reporting",
    description: "White-labeled dashboards your clients love. Show the value, keep the retention.",
    href: "/white-label-inbound-marketing-services/reporting"
  },
  {
    icon: Share2,
    id: "retargeting",
    title: "Retargeting",
    description: "Stay top of mind with display and social retargeting campaigns.",
    href: "/white-label-inbound-marketing-services/paid-media"
  }
];

const LocalSEOSystemContext = () => {
  const centerService = services.find(s => s.isCenter);
  const orbitServices = services.filter(s => !s.isCenter);

  return (
    <section className="py-20 lg:py-28 bg-surface-dark relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mb-14">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-4">
              The Bigger Picture
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Local SEO Is One Piece of the{" "}
              <span className="text-cta">360° Ecosystem</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Effective local marketing is not siloed. It is interconnected. When organic, paid, reputation, and email work together, each channel makes the others stronger. That is what we build.
            </p>
          </div>

          {/* Two Column Layout: Simple Visual + Service List */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Simple Hub Visual */}
            <div className="bg-surface-elevated rounded-2xl border border-border p-8 lg:p-10">
              {/* Center - Local SEO */}
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-cta flex items-center justify-center mb-4 shadow-lg">
                  <Search className="w-7 h-7 text-white" />
                </div>
                <p className="text-foreground font-semibold text-xl mb-2">Local SEO</p>
                <p className="text-text-secondary text-sm max-w-xs">
                  The foundation that makes every other channel more effective.
                </p>
              </div>
              
              {/* Connected Services Grid */}
              <div className="grid grid-cols-4 gap-3">
                {orbitServices.map((service) => (
                  <div
                    key={service.id}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-surface-dark border border-border hover:border-cta/30 transition-colors"
                    title={service.title}
                  >
                    <div className="w-10 h-10 rounded-lg bg-surface-elevated flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-text-muted" />
                    </div>
                    <span className="text-xs text-text-muted text-center leading-tight">{service.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Service List */}
            <div className="space-y-3">
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={service.href}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                    service.isCenter 
                      ? "bg-cta/5 border-cta/30" 
                      : "bg-surface-elevated border-border hover:border-cta/30 hover:bg-surface-dark"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    service.isCenter ? "bg-cta/10" : "bg-surface-dark"
                  }`}>
                    <service.icon className={`w-5 h-5 ${service.isCenter ? "text-cta" : "text-text-muted"}`} />
                  </div>
                  <span className={`font-medium ${service.isCenter ? "text-foreground" : "text-text-secondary"}`}>
                    {service.title}
                  </span>
                  {service.isCenter && (
                    <span className="ml-auto text-xs font-semibold uppercase tracking-wider text-cta bg-cta/10 px-2 py-1 rounded">
                      You Are Here
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSEOSystemContext;
