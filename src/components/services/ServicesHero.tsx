import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBgTrade from "@/assets/hero-bg-agency.jpg";
import GrowthEngineDiagram from "./GrowthEngineDiagram";

const ServicesHero = () => {
  return (
    <section className="relative min-h-[50vh] gradient-hero noise-overlay flex items-center overflow-hidden">
      {/* Background photo */}
      <img
        src={heroBgTrade}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
        loading="eager"
        width={1920}
        height={1080}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/95" />
      {/* Background effects - matching internal service pages */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[100px] bg-gradient-to-br from-cta/50 to-accent-blue/30 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[80px] bg-gradient-to-tl from-accent-blue/40 to-cta/20 animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--cta)/0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--cta)/0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-24 pb-20 lg:pb-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Text content */}
          <div>
            <p className="text-accent-green font-medium uppercase tracking-widest text-sm mb-4">
              White Label Inbound Marketing
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-[1.15]">
              White Label Inbound Marketing{" "}
              <span className="text-gradient-primary">Executed as a System</span>
            </h1>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6 sm:mb-8">
              Most agencies don't struggle with strategy. They struggle with consistent execution as clients, channels, and expectations grow. You retain the client relationship and strategic control. We execute behind the scenes—delivering consistent, scalable results without added overhead.
            </p>
            <Link 
              to="/contact" 
              className="btn-cta group inline-flex items-center px-6 py-3"
            >
              Start a Partner Conversation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right: Growth Engine Diagram */}
          <div className="relative flex justify-center lg:justify-end">
            <GrowthEngineDiagram />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
