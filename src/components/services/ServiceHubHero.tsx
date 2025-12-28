import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ServiceHubHeroProps {
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
}

const ServiceHubHero = ({ title, description, breadcrumbs }: ServiceHubHeroProps) => {
  return (
    <section className="relative min-h-[70vh] gradient-hero noise-overlay flex items-center justify-center overflow-hidden">
      {/* Enhanced abstract data texture overlay - matching homepage */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[100px] bg-gradient-to-br from-cta/50 to-accent-blue/30 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[80px] bg-gradient-to-tl from-accent-blue/40 to-cta/20 animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] bg-gradient-radial from-cta/25 via-accent-blue/15 to-transparent" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[60px] bg-gradient-to-bl from-accent-blue/35 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full blur-[70px] bg-gradient-to-tr from-cta/30 to-transparent animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary green particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cta animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${10 + Math.random() * 15}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3 + Math.random() * 0.2,
            }}
          />
        ))}
        {/* Blue accent particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`blue-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full bg-accent-blue animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${12 + Math.random() * 12}s`,
              animationDelay: `${Math.random() * 6}s`,
              opacity: 0.25 + Math.random() * 0.2,
            }}
          />
        ))}
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--cta)/0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--cta)/0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 py-20 lg:py-28 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumbs at top */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-sm mb-8 animate-fade-in">
              <Link to="/" className="text-text-muted hover:text-foreground transition-colors">
                Home
              </Link>
              {breadcrumbs.map((item, index) => (
                <span key={index} className="flex items-center gap-2">
                  <span className="text-text-muted">/</span>
                  {item.href ? (
                    <Link to={item.href} className="text-text-muted hover:text-foreground transition-colors">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-accent-blue">{item.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold mb-8 animate-fade-in text-foreground" style={{ lineHeight: "1.15" }}>
            White-Label{" "}
            <span className="text-accent-blue drop-shadow-[0_0_30px_hsl(var(--accent-blue)/0.5)]">{title}</span>{" "}
            Services
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in">
            {description}
          </p>
          
          {/* CTA */}
          <div className="animate-fade-in">
            <a href="#contact" className="btn-cta group">
              Schedule a Discovery Call
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHubHero;
