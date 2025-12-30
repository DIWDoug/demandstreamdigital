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

const checklistItems = [
  "Local SEO",
  "Google Maps",
  "Paid Media",
  "Reputation Management",
  "Email Marketing",
  "Authority Building",
  "Reporting",
  "Retargeting"
];

const LocalSEOSystemContext = () => {
  const centerService = services.find(s => s.isCenter);
  const orbitServices = services.filter(s => !s.isCenter);

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
                That's why we don't offer siloed services. Every engagement is designed to compound—so your clients see results that grow over time, not one-off wins that fade.
              </p>

              {/* Checklist */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-8">
                {checklistItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cta flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
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

            {/* Right: Circular Orbit Diagram */}
            <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[480px]">
              {/* Outer orbit circle */}
              <div className="absolute w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full border-2 border-dashed border-slate-300" />
              
              {/* Inner circle background */}
              <div className="absolute w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-full bg-white border border-slate-200 shadow-sm" />
              
              {/* Center content */}
              <div className="relative z-10 flex flex-col items-center justify-center w-[160px] h-[160px] md:w-[200px] md:h-[200px] text-center">
                <div className="w-12 h-12 rounded-full bg-cta flex items-center justify-center mb-3 shadow-lg">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <p className="text-slate-900 font-semibold text-lg mb-1">Local SEO</p>
                <p className="text-slate-500 text-xs px-4 leading-relaxed">
                  The foundation that powers every other channel.
                </p>
              </div>

              {/* Orbit icons */}
              {orbitServices.map((service, index) => {
                const angle = (index * 360) / orbitServices.length - 90;
                const radius = 160;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                const Icon = service.icon;
                
                // Highlight the top icon (first one)
                const isHighlighted = index === 0;
                
                return (
                  <div
                    key={service.id}
                    className={`absolute w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-md transition-all cursor-pointer hover:scale-110 ${
                      isHighlighted 
                        ? "bg-cta border-2 border-cta" 
                        : "bg-white border-2 border-slate-200 hover:border-cta/50"
                    }`}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    title={service.title}
                  >
                    <Icon className={`w-5 h-5 md:w-6 md:h-6 ${
                      isHighlighted ? "text-white" : "text-slate-600"
                    }`} />
                  </div>
                );
              })}

              {/* Dashed connector lines from center to orbit */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '400px', height: '400px' }}>
                <g transform="translate(200, 200)">
                  {orbitServices.map((_, index) => {
                    const angle = (index * 360) / orbitServices.length - 90;
                    const innerRadius = 50;
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
                        stroke="#cbd5e1"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                    );
                  })}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSEOSystemContext;