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
  const [selectedService, setSelectedService] = useState<ServiceHub | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const displayService = selectedService || {
    title: "Inbound Marketing",
    description: "A coordinated system that attracts, converts, and retains customers.",
    slug: "",
    icon: null
  };

  const orbitRadius = isMobile ? 140 : 180;

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
                {services.map((service) => {
                  const ServiceIcon = service.icon;
                  return (
                    <Link 
                      key={service.slug}
                      to={`/white-label-inbound-marketing-services/${service.slug}`}
                      className={`flex items-center gap-2 group transition-colors ${selectedService?.slug === service.slug ? 'text-accent-blue' : ''}`}
                      onMouseEnter={() => setSelectedService(service)}
                      onMouseLeave={() => setSelectedService(null)}
                    >
                      <ServiceIcon className="w-4 h-4 flex-shrink-0 text-accent-blue" />
                      <span className={`font-medium transition-colors text-sm ${selectedService?.slug === service.slug ? 'text-accent-blue' : 'text-text-secondary group-hover:text-accent-blue'}`}>
                        {service.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right: Circular Orbit Diagram */}
            <div className="relative flex items-center justify-center min-h-[420px] sm:min-h-[520px] lg:min-h-[560px]">
              {/* Outer glow */}
              <div className="absolute w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] rounded-full bg-accent-blue/5 blur-xl" />
              
              {/* Orbit circle - more visible */}
              <div 
                className="absolute rounded-full border-2 border-accent-blue/30 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px]"
              />
              
              {/* Center content - dynamic based on selection */}
              <div className="relative z-10 flex flex-col items-center justify-center w-[140px] sm:w-[160px] text-center transition-all duration-300">
                {selectedService ? (
                  <>
                    <div className="w-14 h-14 rounded-full bg-accent-blue/20 flex items-center justify-center mb-3">
                      <selectedService.icon className="w-7 h-7 text-accent-blue" />
                    </div>
                    <p className="text-foreground font-bold text-lg sm:text-xl mb-1">{displayService.title}</p>
                    <p className="text-text-muted text-xs leading-relaxed">
                      {displayService.description.slice(0, 70)}...
                    </p>
                  </>
                ) : (
                  <>
                    <div className="w-20 h-20 rounded-full bg-cta/20 flex items-center justify-center mb-3 border-2 border-cta/40">
                      <span className="text-cta font-bold text-2xl">6</span>
                    </div>
                    <p className="text-foreground font-bold text-lg sm:text-xl mb-1">Services</p>
                    <p className="text-text-muted text-xs leading-relaxed">
                      Working as one system
                    </p>
                  </>
                )}
              </div>

              {/* Rotating orbit container - includes both icons and labels */}
              <div 
                className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] animate-[spin_60s_linear_infinite]"
                style={{ animationPlayState: selectedService ? 'paused' : 'running' }}
              >
                {/* Orbit icons with attached labels */}
                {services.map((service, index) => {
                  const angle = (index * 360) / services.length - 90;
                  const Icon = service.icon;
                  
                  const isSelected = selectedService?.slug === service.slug;
                  
                  const x = Math.cos((angle * Math.PI) / 180) * orbitRadius;
                  const y = Math.sin((angle * Math.PI) / 180) * orbitRadius;
                  
                  return (
                    <button
                      key={service.slug}
                      onClick={() => setSelectedService(isSelected ? null : service)}
                      className="absolute left-1/2 top-1/2 -ml-6 -mt-6 sm:-ml-7 sm:-mt-7 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-110"
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                        backgroundColor: isSelected ? 'hsl(var(--cta))' : 'hsl(var(--accent-blue))',
                      }}
                    >
                      {/* Counter-rotate the icon so it stays upright */}
                      <div className="animate-[spin_60s_linear_infinite_reverse]" style={{ animationPlayState: selectedService ? 'paused' : 'running' }}>
                        <Icon 
                          className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${isSelected ? 'text-white' : 'text-white/90'}`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhiteLabelExplainer;