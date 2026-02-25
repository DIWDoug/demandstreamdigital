import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import type { EcosystemService } from "@/types/servicePage";

interface EcosystemConfig {
  eyebrow: string;
  headline: string;
  highlightedText: string;
  intro: string;
  body: string;
  services: EcosystemService[];
  ctaText: string;
  ctaHref: string;
}

interface ServiceEcosystemSectionProps {
  config: EcosystemConfig;
}

const ServiceEcosystemSection = ({ config }: ServiceEcosystemSectionProps) => {
  const orbitServices = config.services.filter(s => !s.isCenter);
  const centerService = config.services.find(s => s.isCenter) || config.services[0];
  const [hoveredService, setHoveredService] = useState<EcosystemService | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const displayService = hoveredService || centerService;
  const orbitRadius = isMobile ? 130 : 160;

  return (
    <section className="py-20 lg:py-28 section-light relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div>
              <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-4">
                {config.eyebrow}
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 leading-tight">
                {config.headline}{" "}
                <span className="text-cta">{config.highlightedText}</span>
              </h2>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                <strong className="text-slate-900">{config.intro}</strong>
              </p>
              
              <div className="mb-8 space-y-4">
                {config.body.split("\n\n").map((para, i) => (
                  <p key={i} className="text-text-secondary leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Checklist - linked to services */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-8">
                {config.services.map((service) => (
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
                to={config.ctaHref} 
                className="inline-flex items-center gap-2 text-cta font-medium hover:text-cta/80 transition-colors"
              >
                {config.ctaText}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right: Circular Orbit Diagram */}
            <div className="relative flex items-center justify-center min-h-[320px] sm:min-h-[400px] lg:min-h-[480px]">
              {/* Orbit circle - scales for mobile */}
              <div 
                className="absolute rounded-full border border-slate-300 w-[260px] h-[260px] sm:w-[320px] sm:h-[320px]"
              />
              
              {/* Center content - dynamic based on hover */}
              <div className="relative z-10 flex flex-col items-center justify-center w-[140px] sm:w-[160px] text-center transition-all duration-300">
                <p className="text-slate-900 font-bold text-xl sm:text-2xl mb-2">{displayService.title}</p>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {displayService.description}
                </p>
              </div>

              {/* Orbit icons */}
              {orbitServices.map((service, index) => {
                const angle = (index * 360) / orbitServices.length - 90;
                const Icon = service.icon;
                
                const isHovered = hoveredService?.id === service.id;
                
                const x = Math.cos((angle * Math.PI) / 180) * orbitRadius;
                const y = Math.sin((angle * Math.PI) / 180) * orbitRadius;
                
                return (
                  <Link
                    key={service.id}
                    to={service.href}
                    className="absolute w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                    title={service.title}
                    onMouseEnter={() => setHoveredService(service)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <div className={`absolute inset-0 rounded-full transition-all duration-200 ${
                      isHovered 
                        ? "bg-cta shadow-lg shadow-cta/40" 
                        : "bg-slate-800"
                    }`} />
                    <Icon className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 text-white" />
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

export default ServiceEcosystemSection;
