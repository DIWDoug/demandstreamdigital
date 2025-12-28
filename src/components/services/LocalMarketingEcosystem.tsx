import { useState } from "react";
import { 
  Search, 
  MapPin, 
  Mail, 
  MousePointerClick, 
  BarChart3, 
  Star,
  Globe,
  Megaphone
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

interface ServiceNode {
  id: string;
  title: string;
  icon: typeof Search;
  description: string;
  link?: string;
  isActive?: boolean;
}

const services: ServiceNode[] = [
  {
    id: "local-seo",
    title: "Local SEO",
    icon: Search,
    description: "Organic visibility in local search results and Google Maps. The foundation that makes every other channel more effective.",
    link: "/services/local-seo",
    isActive: true
  },
  {
    id: "google-maps",
    title: "Google Maps",
    icon: MapPin,
    description: "Google Business Profile optimization, review management, and local pack dominance for maximum visibility.",
    link: "/services/local-seo/google-maps"
  },
  {
    id: "paid-media",
    title: "Paid Media",
    icon: MousePointerClick,
    description: "Google Ads, Local Services Ads, and geo-targeted campaigns that drive immediate leads while SEO builds momentum.",
    link: "/services/paid-media"
  },
  {
    id: "reputation",
    title: "Reputation",
    icon: Star,
    description: "Review generation, monitoring, and response systems that build trust and influence both rankings and conversions.",
    link: "/services/local-seo/reputation-management"
  },
  {
    id: "email",
    title: "Email Marketing",
    icon: Mail,
    description: "Nurture sequences and re-engagement campaigns that turn one-time customers into repeat business and referrals.",
    link: "/services/email-marketing"
  },
  {
    id: "authority",
    title: "Authority Building",
    icon: Globe,
    description: "Digital PR, local link building, and citation management that establishes your clients as trusted local experts.",
    link: "/services/authority"
  },
  {
    id: "reporting",
    title: "Reporting",
    icon: BarChart3,
    description: "Unified dashboards tracking all channels. Clear attribution showing how each piece contributes to the whole.",
    link: "/services/reporting"
  },
  {
    id: "retargeting",
    title: "Retargeting",
    icon: Megaphone,
    description: "Stay visible to prospects who visited but didn't convert. Multi-channel follow-up that closes the loop.",
    link: "/services/paid-media"
  }
];

const LocalMarketingEcosystem = () => {
  const [activeService, setActiveService] = useState<string>("local-seo");
  const sectionRef = useScrollReveal();
  
  const activeData = services.find(s => s.id === activeService) || services[0];
  const ActiveIcon = activeData.icon;

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-surface-dark relative overflow-hidden reveal-section">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cta/5 blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4">
            The Bigger Picture
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Local SEO Is One Piece of the <span className="text-cta">360° Ecosystem</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            The most effective local marketing strategies aren't siloed—they're interconnected. 
            When organic visibility, paid media, reputation, and email work together, results compound. 
            We help agencies deliver the complete picture.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Interactive Circle Diagram */}
          <div className="relative">
            <div className="aspect-square max-w-[500px] mx-auto relative">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-border/30" />
              
              {/* Service nodes positioned around the circle */}
              {services.map((service, index) => {
                const angle = (index * 360) / services.length - 90;
                const radius = 42;
                const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
                const Icon = service.icon;
                const isActive = service.id === activeService;
                const isLocalSeo = service.id === "local-seo";
                
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`absolute w-14 h-14 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? "bg-cta scale-110 shadow-lg shadow-cta/30" 
                        : isLocalSeo
                          ? "bg-surface-elevated border-2 border-cta/50 hover:border-cta"
                          : "bg-surface-elevated border border-border hover:border-accent-blue/50"
                    }`}
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                    }}
                    aria-label={service.title}
                  >
                    <Icon 
                      className={`w-6 h-6 transition-colors ${
                        isActive ? "text-white" : "text-text-secondary"
                      }`} 
                    />
                  </button>
                );
              })}

              {/* Center content */}
              <div className="absolute inset-[15%] rounded-full bg-surface-elevated border border-border flex flex-col items-center justify-center p-6 text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-300"
                  style={{ backgroundColor: "hsl(76, 42%, 41%, 0.15)" }}
                >
                  <ActiveIcon className="w-8 h-8 text-cta" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {activeData.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {activeData.description}
                </p>
              </div>

              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                {services.map((service, index) => {
                  const angle = (index * 360) / services.length - 90;
                  const outerRadius = 42;
                  const innerRadius = 20;
                  const x1 = 50 + outerRadius * Math.cos((angle * Math.PI) / 180);
                  const y1 = 50 + outerRadius * Math.sin((angle * Math.PI) / 180);
                  const x2 = 50 + innerRadius * Math.cos((angle * Math.PI) / 180);
                  const y2 = 50 + innerRadius * Math.sin((angle * Math.PI) / 180);
                  const isActive = service.id === activeService;
                  
                  return (
                    <line
                      key={service.id}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={isActive ? "hsl(76, 42%, 41%)" : "hsl(220, 15%, 25%)"}
                      strokeWidth={isActive ? "0.5" : "0.3"}
                      strokeDasharray={isActive ? "none" : "2 2"}
                      className="transition-all duration-300"
                    />
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Services list */}
          <div className="space-y-3">
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = service.id === activeService;
              const isLocalSeo = service.id === "local-seo";
              
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 group ${
                    isActive 
                      ? "bg-surface-elevated border-cta/30" 
                      : "bg-transparent border-border hover:border-border-subtle hover:bg-surface-elevated/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        isActive ? "bg-cta/20" : "bg-surface-card"
                      }`}
                    >
                      <Icon 
                        className={`w-5 h-5 transition-colors duration-300 ${
                          isActive ? "text-cta" : "text-text-secondary group-hover:text-foreground"
                        }`} 
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className={`font-medium transition-colors ${
                          isActive ? "text-foreground" : "text-text-secondary group-hover:text-foreground"
                        }`}>
                          {service.title}
                        </h4>
                        {isLocalSeo && (
                          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-cta/20 text-cta font-semibold">
                            You are here
                          </span>
                        )}
                      </div>
                    </div>
                    {service.link && (
                      <Link 
                        to={service.link}
                        className="text-xs text-accent-blue opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Learn more →
                      </Link>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalMarketingEcosystem;
