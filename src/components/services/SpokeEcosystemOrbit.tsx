import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, FileText, Settings, Target, PenTool, Link2, Code, type LucideIcon } from "lucide-react";

interface SpokeService {
  title: string;
  slug: string;
  description: string;
  icon: LucideIcon;
}

interface SpokeEcosystemOrbitProps {
  hubTitle: string;
  hubSlug: string;
  currentSpoke: {
    title: string;
    slug: string;
    description: string;
  };
  siblingSpokes: Array<{
    title: string;
    slug: string;
    description: string;
  }>;
}

// Map spoke slugs to icons
const spokeIcons: Record<string, LucideIcon> = {
  "on-page-optimization": FileText,
  "technical-seo": Settings,
  "local-keyword-strategy": Target,
  "content-development": PenTool,
  "link-building": Link2,
  "schema-markup": Code,
};

const SpokeEcosystemOrbit = ({ 
  hubTitle, 
  hubSlug, 
  currentSpoke, 
  siblingSpokes 
}: SpokeEcosystemOrbitProps) => {
  const [hoveredSpoke, setHoveredSpoke] = useState<SpokeService | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Create spoke services with icons
  const spokeServices: SpokeService[] = siblingSpokes.map(spoke => ({
    ...spoke,
    icon: spokeIcons[spoke.slug] || FileText
  }));

  const displaySpoke = hoveredSpoke || {
    title: currentSpoke.title,
    slug: currentSpoke.slug,
    description: currentSpoke.description,
    icon: spokeIcons[currentSpoke.slug] || FileText
  };

  const orbitRadius = isMobile ? 130 : 160;
  const allSpokes = [currentSpoke, ...siblingSpokes];

  return (
    <section className="py-20 lg:py-28 section-light relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div>
              <p className="text-cta text-sm font-medium uppercase tracking-widest mb-4">
                Part of {hubTitle}
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 leading-tight">
                {currentSpoke.title} Works With{" "}
                <span className="text-cta">Every Component</span>
              </h2>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                <strong className="text-slate-900">{currentSpoke.title} is one piece of the {hubTitle} puzzle.</strong> Each component reinforces the others, creating compound results that isolated tactics can't achieve.
              </p>
              
              <p className="text-slate-600 leading-relaxed mb-8">
                All components are included as part of the {hubTitle} service. We prioritize and phase execution based on competitive analysis and client goals.
              </p>

              {/* Checklist - all spokes */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-8">
                {allSpokes.map((spoke) => (
                  <div 
                    key={spoke.slug} 
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className={`w-5 h-5 flex-shrink-0 ${spoke.slug === currentSpoke.slug ? 'text-cta' : 'text-slate-400'}`} />
                    <span className={`font-medium ${spoke.slug === currentSpoke.slug ? 'text-cta' : 'text-slate-700'}`}>
                      {spoke.title}
                    </span>
                  </div>
                ))}
              </div>

              <Link 
                to={`/white-label-inbound-marketing-services/${hubSlug}`}
                className="inline-flex items-center gap-2 text-cta font-medium hover:text-cta/80 transition-colors"
              >
                View Full {hubTitle} Service
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right: Circular Orbit Diagram */}
            <div className="relative flex items-center justify-center min-h-[320px] sm:min-h-[400px] lg:min-h-[480px]">
              {/* Orbit circle */}
              <div 
                className="absolute rounded-full border border-slate-300 w-[260px] h-[260px] sm:w-[320px] sm:h-[320px]"
              />
              
              {/* Center content - dynamic based on hover */}
              <div className="relative z-10 flex flex-col items-center justify-center w-[140px] sm:w-[160px] text-center transition-all duration-300">
                <p className="text-slate-900 font-bold text-xl sm:text-2xl mb-2">{displaySpoke.title}</p>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {displaySpoke.description.slice(0, 80)}...
                </p>
              </div>

              {/* Orbit icons */}
              {spokeServices.map((spoke, index) => {
                const angle = (index * 360) / spokeServices.length - 90;
                const Icon = spoke.icon;
                
                const isHovered = hoveredSpoke?.slug === spoke.slug;
                
                const x = Math.cos((angle * Math.PI) / 180) * orbitRadius;
                const y = Math.sin((angle * Math.PI) / 180) * orbitRadius;
                
                return (
                  <div
                    key={spoke.slug}
                    className="absolute w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                      backgroundColor: isHovered ? 'hsl(var(--cta))' : 'hsl(222 47% 11%)',
                    }}
                    onMouseEnter={() => setHoveredSpoke(spoke)}
                    onMouseLeave={() => setHoveredSpoke(null)}
                  >
                    <Icon 
                      className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${isHovered ? 'text-white' : 'text-white/80'}`}
                    />
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

export default SpokeEcosystemOrbit;
