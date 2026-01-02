import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Map, MousePointerClick, Mail, Share2, BarChart3, ArrowRight, type LucideIcon } from "lucide-react";

interface ServiceHub {
  title: string;
  slug: string;
  description: string;
  icon: LucideIcon;
}

const services: ServiceHub[] = [
  { 
    icon: MapPin, 
    title: "Local SEO", 
    description: "Organic visibility in local search results through technical fixes, content, and on-page optimization.",
    slug: "local-seo"
  },
  { 
    icon: Map, 
    title: "GBP SEO", 
    description: "Google Business Profile optimization for local pack dominance and map visibility.",
    slug: "google-maps"
  },
  { 
    icon: MousePointerClick, 
    title: "Paid Media", 
    description: "Google and Meta ad campaigns built to generate calls, forms, and measurable ROI.",
    slug: "paid-media"
  },
  { 
    icon: Mail, 
    title: "Email Marketing", 
    description: "Automated sequences that nurture leads into loyal, repeat customers.",
    slug: "email-marketing"
  },
  { 
    icon: Share2, 
    title: "Authority Building", 
    description: "Digital PR, quality backlinks, and citation management that compounds over time.",
    slug: "local-authority-building"
  },
  { 
    icon: BarChart3, 
    title: "Reporting", 
    description: "Branded dashboards and summaries that keep clients confident with clear results.",
    slug: "reporting"
  },
];

const WhiteLabelExplainer = () => {
  const [hoveredService, setHoveredService] = useState<ServiceHub | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const displayService = hoveredService || {
    title: "Inbound Marketing",
    description: "A coordinated system that attracts, converts, and retains customers.",
    slug: "",
    icon: null
  };

  const orbitRadius = isMobile ? 120 : 150;

  return (
    <section id="white-label-explainer" className="py-20 lg:py-28 bg-surface-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cta/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text Content */}
            <div>
              <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-4">
                The Methodology
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                What is inbound marketing?
              </h2>
              <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                Inbound marketing is a system for attracting customers through relevant content and experiences while strategically using paid media to accelerate visibility as you build long-term assets.
              </p>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Instead of chasing leads, you build visibility where buyers are already searching. SEO captures intent. Paid media accelerates reach. Email nurtures relationships. Authority building earns trust. Reporting ties it all together.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                When these channels work as a coordinated system instead of siloed tactics, the compounding effect drives consistent, measurable growth over time.
              </p>

              {/* Service Links Grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
                {services.map((service) => (
                  <Link 
                    key={service.slug}
                    to={`/white-label-inbound-marketing-services/${service.slug}`}
                    className="flex items-center gap-2 group transition-colors"
                    onMouseEnter={() => setHoveredService(service)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <service.icon className="w-4 h-4 flex-shrink-0 text-accent-blue" />
                    <span className="font-medium text-text-secondary group-hover:text-accent-blue transition-colors text-sm">
                      {service.title}
                    </span>
                  </Link>
                ))}
              </div>

              <Link 
                to="#contact"
                className="inline-flex items-center gap-2 text-cta font-medium hover:text-cta/80 transition-colors"
              >
                Start a Partner Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right: Circular Orbit Diagram */}
            <div className="relative flex items-center justify-center min-h-[320px] sm:min-h-[400px] lg:min-h-[480px]">
              {/* Outer glow */}
              <div className="absolute w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] rounded-full bg-accent-blue/5 blur-xl" />
              
              {/* Orbit circle */}
              <div 
                className="absolute rounded-full border border-border/50 w-[240px] h-[240px] sm:w-[300px] sm:h-[300px]"
              />
              
              {/* Center content - dynamic based on hover */}
              <div className="relative z-10 flex flex-col items-center justify-center w-[120px] sm:w-[140px] text-center transition-all duration-300">
                {hoveredService ? (
                  <>
                    <div className="w-12 h-12 rounded-full bg-accent-blue/20 flex items-center justify-center mb-3">
                      <hoveredService.icon className="w-6 h-6 text-accent-blue" />
                    </div>
                    <p className="text-foreground font-bold text-lg sm:text-xl mb-1">{displayService.title}</p>
                    <p className="text-text-muted text-xs leading-relaxed">
                      {displayService.description.slice(0, 60)}...
                    </p>
                  </>
                ) : (
                  <>
                    <div className="w-16 h-16 rounded-full bg-cta/20 flex items-center justify-center mb-3 border-2 border-cta/40">
                      <span className="text-cta font-bold text-xl">6</span>
                    </div>
                    <p className="text-foreground font-bold text-lg sm:text-xl mb-1">Services</p>
                    <p className="text-text-muted text-xs leading-relaxed">
                      Working as one system
                    </p>
                  </>
                )}
              </div>

              {/* Orbit icons */}
              {services.map((service, index) => {
                const angle = (index * 360) / services.length - 90;
                const Icon = service.icon;
                
                const isHovered = hoveredService?.slug === service.slug;
                
                const x = Math.cos((angle * Math.PI) / 180) * orbitRadius;
                const y = Math.sin((angle * Math.PI) / 180) * orbitRadius;
                
                return (
                  <Link
                    key={service.slug}
                    to={`/white-label-inbound-marketing-services/${service.slug}`}
                    className="absolute w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                      backgroundColor: isHovered ? 'hsl(var(--cta))' : 'hsl(var(--accent-blue))',
                    }}
                    onMouseEnter={() => setHoveredService(service)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <Icon 
                      className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${isHovered ? 'text-white' : 'text-white/90'}`}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhiteLabelExplainer;