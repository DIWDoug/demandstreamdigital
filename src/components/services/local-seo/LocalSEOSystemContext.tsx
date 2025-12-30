import { Link } from "react-router-dom";
import { Search, MapPin, Sparkles, Star, Mail, Globe, BarChart3, Share2 } from "lucide-react";

const services = [
  {
    icon: Search,
    id: "local-seo",
    title: "Local SEO",
    description: "Organic visibility in local search results and Google Maps. The foundation that makes every other channel more effective.",
    href: "/inbound-marketing-services/local-seo",
    isCenter: true
  },
  {
    icon: MapPin,
    id: "google-maps",
    title: "Google Maps",
    description: "Dominate the map pack with optimized profiles, reviews, and local engagement.",
    href: "/inbound-marketing-services/google-maps"
  },
  {
    icon: Sparkles,
    id: "paid-media",
    title: "Paid Media",
    description: "Accelerate results with Google Ads and Meta while SEO compounds.",
    href: "/inbound-marketing-services/paid-media"
  },
  {
    icon: Star,
    id: "reputation",
    title: "Reputation",
    description: "Build trust with review generation and management that converts.",
    href: "/inbound-marketing-services/google-maps"
  },
  {
    icon: Mail,
    id: "email-marketing",
    title: "Email Marketing",
    description: "Turn one-time customers into repeat buyers with automated sequences.",
    href: "/inbound-marketing-services/email-marketing"
  },
  {
    icon: Globe,
    id: "authority",
    title: "Authority Building",
    description: "PR placements and backlinks that build trust with Google and customers.",
    href: "/inbound-marketing-services/authority"
  },
  {
    icon: BarChart3,
    id: "reporting",
    title: "Reporting",
    description: "White-labeled dashboards your clients love. Show the value, keep the retention.",
    href: "/inbound-marketing-services/reporting"
  },
  {
    icon: Share2,
    id: "retargeting",
    title: "Retargeting",
    description: "Stay top of mind with display and social retargeting campaigns.",
    href: "/inbound-marketing-services/paid-media"
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

          {/* Two Column Layout: Diagram + Service List */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Circular Diagram */}
            <div className="relative flex items-center justify-center">
              {/* Outer circle - dashed */}
              <div className="absolute w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full border-2 border-dashed border-border" />
              
              {/* Inner circle - solid light */}
              <div className="absolute w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-full bg-surface-elevated border border-border" />
              
              {/* Center - Local SEO */}
              <div className="relative z-10 flex flex-col items-center justify-center w-[200px] h-[200px] md:w-[240px] md:h-[240px]">
                <div className="w-14 h-14 rounded-full bg-cta flex items-center justify-center mb-3 shadow-lg">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <p className="text-foreground font-semibold text-lg mb-1">Local SEO</p>
                <p className="text-text-muted text-xs text-center px-4 leading-relaxed">
                  Organic visibility in local search results and Google Maps. The foundation that makes every other channel more effective.
                </p>
              </div>

              {/* Orbit icons */}
              {orbitServices.map((service, index) => {
                const angle = (index * 360) / orbitServices.length - 90; // Start from top
                const radius = 160; // Distance from center (adjust for md)
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <div
                    key={service.id}
                    className="absolute w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface-elevated border border-border flex items-center justify-center shadow-sm hover:border-cta/50 hover:shadow-md transition-all cursor-pointer"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    title={service.title}
                  >
                    <service.icon className="w-4 h-4 md:w-5 md:h-5 text-text-muted" />
                  </div>
                );
              })}

              {/* Dashed lines from center to orbit */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="-200 -200 400 400">
                {orbitServices.map((_, index) => {
                  const angle = (index * 360) / orbitServices.length - 90;
                  const innerRadius = 60;
                  const outerRadius = 130;
                  const x1 = Math.cos((angle * Math.PI) / 180) * innerRadius;
                  const y1 = Math.sin((angle * Math.PI) / 180) * innerRadius;
                  const x2 = Math.cos((angle * Math.PI) / 180) * outerRadius;
                  const y2 = Math.sin((angle * Math.PI) / 180) * outerRadius;
                  
                  return (
                    <line
                      key={index}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="hsl(var(--border))"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                  );
                })}
              </svg>

              {/* Top accent icon (larger, highlighted) */}
              <div 
                className="absolute w-12 h-12 md:w-14 md:h-14 rounded-full bg-cta flex items-center justify-center shadow-lg"
                style={{ top: '-10px', left: '50%', transform: 'translateX(-50%)' }}
              >
                <Search className="w-5 h-5 md:w-6 md:h-6 text-white" />
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
