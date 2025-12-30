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
              {/* Outer orbit circle - solid thin black line */}
              <div className="absolute w-[300px] h-[300px] md:w-[360px] md:h-[360px] rounded-full border border-slate-800" />
              
              {/* Center content - no background circle, just text */}
              <div className="relative z-10 flex flex-col items-center justify-center w-[160px] h-[160px] md:w-[180px] md:h-[180px] text-center">
                <p className="text-slate-900 font-bold text-xl md:text-2xl mb-2">SEO</p>
                <p className="text-slate-500 text-xs md:text-sm px-2 leading-relaxed">
                  Search engine optimization helps potential customers find you through organic searches on places like Google and Bing.
                </p>
              </div>

              {/* Orbit icons */}
              {orbitServices.map((service, index) => {
                const angle = (index * 360) / orbitServices.length - 90;
                const radius = 150;
                const mdRadius = 180;
                const Icon = service.icon;
                
                // Highlight the top icon (first one)
                const isHighlighted = index === 0;
                
                return (
                  <div
                    key={service.id}
                    className="absolute w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all cursor-pointer hover:scale-110"
                    style={{
                      transform: `translate(calc(${Math.cos((angle * Math.PI) / 180) * radius}px), calc(${Math.sin((angle * Math.PI) / 180) * radius}px))`,
                    }}
                    title={service.title}
                  >
                    {/* Background circle */}
                    <div className={`absolute inset-0 rounded-full ${
                      isHighlighted 
                        ? "bg-cta" 
                        : "bg-slate-100 border border-slate-300"
                    }`} />
                    <Icon className={`relative z-10 w-5 h-5 md:w-6 md:h-6 ${
                      isHighlighted ? "text-white" : "text-slate-600"
                    }`} />
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