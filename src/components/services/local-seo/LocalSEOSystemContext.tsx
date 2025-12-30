import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Sparkles, Star, Mail, Globe, BarChart3, Share2, CheckCircle, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  id: string;
  title: string;
  description: string;
  href: string;
  isCenter?: boolean;
}

const services: Service[] = [
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
    description: "Dominate the map pack with optimized profiles and reviews.",
    href: "/white-label-inbound-marketing-services/google-maps"
  },
  {
    icon: Sparkles,
    id: "paid-media",
    title: "Paid Media",
    description: "Accelerate results with Google Ads and Meta campaigns.",
    href: "/white-label-inbound-marketing-services/paid-media"
  },
  {
    icon: Star,
    id: "reputation",
    title: "Reputation",
    description: "Build trust with review generation and management.",
    href: "/white-label-inbound-marketing-services/google-maps"
  },
  {
    icon: Mail,
    id: "email-marketing",
    title: "Email Marketing",
    description: "Turn one-time customers into repeat buyers.",
    href: "/white-label-inbound-marketing-services/email-marketing"
  },
  {
    icon: Globe,
    id: "authority",
    title: "Authority Building",
    description: "PR placements and backlinks that build trust.",
    href: "/white-label-inbound-marketing-services/authority"
  },
  {
    icon: BarChart3,
    id: "reporting",
    title: "Reporting",
    description: "White-labeled dashboards your clients love.",
    href: "/white-label-inbound-marketing-services/reporting"
  },
  {
    icon: Share2,
    id: "retargeting",
    title: "Retargeting",
    description: "Stay top of mind with display and social retargeting.",
    href: "/white-label-inbound-marketing-services/paid-media"
  }
];

const LocalSEOSystemContext = () => {
  const orbitServices = services.filter(s => !s.isCenter);
  const centerService = services.find(s => s.isCenter)!;
  const [hoveredService, setHoveredService] = useState<Service | null>(null);

  const displayService = hoveredService || centerService;

  return (
    <section className="py-20 lg:py-28 section-light relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div>
              <p className="text-cta text-sm font-medium uppercase tracking-widest mb-4">
                The Bigger Picture
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 leading-tight">
                Local SEO Is One Piece of the{" "}
                <span className="text-cta">360° Ecosystem</span>
              </h2>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                <strong className="text-slate-900">Effective local marketing is interconnected.</strong> When organic, paid, reputation, and email work together, each channel makes the others stronger.
              </p>
              
              <p className="text-slate-600 leading-relaxed mb-8">
                We offer each service independently, but the magic happens when they work in concert. Explore our full suite of white-label services to see how they can compound results for your clients.
              </p>

              {/* Checklist - linked to services */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-8">
                {services.map((service) => (
                  <Link 
                    key={service.id} 
                    to={service.href}
                    className="flex items-center gap-2 group"
                  >
                    <CheckCircle className="w-5 h-5 text-cta flex-shrink-0" />
                    <span className="text-slate-700 font-medium group-hover:text-cta transition-colors">{service.title}</span>
                  </Link>
                ))}
              </div>

              <Link 
                to="/white-label-inbound-marketing-services" 
                className="inline-flex items-center gap-2 text-cta font-medium hover:text-cta/80 transition-colors"
              >
                Explore All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right: Circular Orbit Diagram - icons ON the circle */}
            <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[480px]">
              {/* Orbit circle - solid thin black line */}
              <div 
                className="absolute rounded-full border border-slate-800"
                style={{
                  width: '320px',
                  height: '320px',
                }}
              />
              
              {/* Center content - dynamic based on hover */}
              <div className="relative z-10 flex flex-col items-center justify-center w-[160px] text-center transition-all duration-300">
                <p className="text-slate-900 font-bold text-2xl mb-2">{displayService.title}</p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {displayService.description}
                </p>
              </div>

              {/* Orbit icons - positioned ON the circle line */}
              {orbitServices.map((service, index) => {
                // Start from top (-90deg) and go clockwise
                const angle = (index * 360) / orbitServices.length - 90;
                const radius = 160; // Matches half of 320px circle
                const Icon = service.icon;
                
                const isHovered = hoveredService?.id === service.id;
                
                // Calculate position
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <div
                    key={service.id}
                    className="absolute w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                    title={service.title}
                    onMouseEnter={() => setHoveredService(service)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    {/* Background circle - lights up on hover */}
                    <div className={`absolute inset-0 rounded-full transition-all duration-200 ${
                      isHovered 
                        ? "bg-cta shadow-lg shadow-cta/40" 
                        : "bg-slate-800"
                    }`} />
                    <Icon className="relative z-10 w-6 h-6 text-white" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSEOSystemContext;