import { Link } from "react-router-dom";
import { Search, MapPin, Sparkles, Star, Mail, Globe, BarChart3, Share2, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Search,
    id: "local-seo",
    title: "Local SEO",
    description: "Organic visibility in local search results and Google Maps.",
    href: "/white-label-inbound-marketing-services/local-seo",
    isCenter: true,
    status: "active",
    metrics: { label: "Foundation", value: "Core" }
  },
  {
    icon: MapPin,
    id: "google-maps",
    title: "Google Maps",
    description: "Dominate the map pack with optimized profiles and reviews.",
    href: "/white-label-inbound-marketing-services/google-maps",
    status: "connected",
    metrics: { label: "Synergy", value: "+32%" }
  },
  {
    icon: Sparkles,
    id: "paid-media",
    title: "Paid Media",
    description: "Accelerate results with Google Ads and Meta campaigns.",
    href: "/white-label-inbound-marketing-services/paid-media",
    status: "connected",
    metrics: { label: "Synergy", value: "+28%" }
  },
  {
    icon: Star,
    id: "reputation",
    title: "Reputation",
    description: "Build trust with review generation and management.",
    href: "/white-label-inbound-marketing-services/google-maps",
    status: "connected",
    metrics: { label: "Synergy", value: "+20%" }
  },
  {
    icon: Mail,
    id: "email-marketing",
    title: "Email Marketing",
    description: "Turn one-time customers into repeat buyers.",
    href: "/white-label-inbound-marketing-services/email-marketing",
    status: "available",
    metrics: { label: "Synergy", value: "+15%" }
  },
  {
    icon: Globe,
    id: "authority",
    title: "Authority Building",
    description: "PR placements and backlinks that build trust.",
    href: "/white-label-inbound-marketing-services/authority",
    status: "connected",
    metrics: { label: "Synergy", value: "+24%" }
  },
  {
    icon: BarChart3,
    id: "reporting",
    title: "Reporting",
    description: "White-labeled dashboards your clients love.",
    href: "/white-label-inbound-marketing-services/reporting",
    status: "connected",
    metrics: { label: "Included", value: "Yes" }
  },
  {
    icon: Share2,
    id: "retargeting",
    title: "Retargeting",
    description: "Stay top of mind with display and social retargeting.",
    href: "/white-label-inbound-marketing-services/paid-media",
    status: "available",
    metrics: { label: "Synergy", value: "+18%" }
  }
];

const LocalSEOSystemContext = () => {
  const centerService = services.find(s => s.isCenter);
  const connectedServices = services.filter(s => !s.isCenter);

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
              When organic, paid, reputation, and email work together, each channel makes the others stronger.
            </p>
          </div>

          {/* Dashboard Container */}
          <div className="bg-surface-elevated border border-border rounded-2xl overflow-hidden">
            {/* Dashboard Header */}
            <div className="px-6 py-4 bg-surface-dark border-b border-border flex items-center justify-between">
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Channel Integration</p>
                <p className="text-foreground font-semibold">360° Marketing Ecosystem</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-xs text-text-muted">
                  <span className="w-2 h-2 rounded-full bg-cta"></span>
                  Active
                </span>
                <span className="flex items-center gap-1.5 text-xs text-text-muted">
                  <span className="w-2 h-2 rounded-full bg-accent-blue"></span>
                  Connected
                </span>
                <span className="flex items-center gap-1.5 text-xs text-text-muted">
                  <span className="w-2 h-2 rounded-full bg-border"></span>
                  Available
                </span>
              </div>
            </div>

            {/* Main Content */}
            <div className="p-6 lg:p-8">
              {/* Center Hub Card */}
              {centerService && (
                <div className="bg-cta/5 border-2 border-cta/30 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-cta flex items-center justify-center shadow-lg">
                      <Search className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-semibold text-foreground">{centerService.title}</h3>
                        <span className="px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-cta bg-cta/10 rounded">
                          You Are Here
                        </span>
                      </div>
                      <p className="text-text-secondary text-sm">{centerService.description} The foundation that makes every other channel more effective.</p>
                    </div>
                    <div className="hidden md:block text-right">
                      <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Status</p>
                      <p className="text-cta font-semibold">Core Service</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Connected Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {connectedServices.map((service) => {
                  const statusColor = service.status === "connected" ? "bg-accent-blue" : "bg-border";
                  const borderColor = service.status === "connected" ? "border-accent-blue/30" : "border-border";
                  
                  return (
                    <Link
                      key={service.id}
                      to={service.href}
                      className={`group bg-surface-dark rounded-xl p-5 border ${borderColor} hover:border-cta/50 transition-all hover:bg-surface-elevated`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          service.status === "connected" ? "bg-accent-blue/10" : "bg-surface-elevated"
                        }`}>
                          <service.icon className={`w-5 h-5 ${
                            service.status === "connected" ? "text-accent-blue" : "text-text-muted"
                          }`} />
                        </div>
                        <span className={`w-2 h-2 rounded-full ${statusColor}`}></span>
                      </div>
                      <h4 className="text-foreground font-semibold mb-1 group-hover:text-cta transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-text-muted text-xs leading-relaxed mb-3">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <span className="text-xs text-text-muted">{service.metrics.label}</span>
                        <span className={`text-sm font-semibold ${
                          service.status === "connected" ? "text-accent-blue" : "text-text-muted"
                        }`}>
                          {service.metrics.value}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Dashboard Footer */}
            <div className="px-6 py-4 bg-surface-dark border-t border-border">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-text-muted text-sm">
                  <span className="text-foreground font-medium">5 of 7 channels</span> connected to Local SEO
                </p>
                <Link 
                  to="/white-label-inbound-marketing-services" 
                  className="flex items-center gap-2 text-sm font-medium text-cta hover:text-cta/80 transition-colors"
                >
                  Explore All Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSEOSystemContext;