import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero noise-overlay flex items-center justify-center overflow-hidden">
      {/* Enhanced abstract data texture overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl bg-gradient-to-br from-cta/30 to-transparent animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl bg-gradient-to-tl from-cta/20 to-transparent animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl bg-gradient-radial from-cta/10 to-transparent" />
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--text-secondary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--text-secondary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 py-32 lg:py-40 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in-up">
            <span className="w-1.5 h-8 bg-cta rounded-full shadow-lg shadow-cta/30" />
            <p className="text-sm md:text-base text-foreground uppercase tracking-widest font-medium">
              White-Label Local Digital Marketing Partner
            </p>
            <span className="w-1.5 h-8 bg-cta rounded-full shadow-lg shadow-cta/30" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold leading-tight mb-8 animate-fade-in-up text-foreground" style={{ animationDelay: "0.1s" }}>
            White-Label Local{" "}
            <span className="text-cta drop-shadow-[0_0_30px_hsl(var(--cta)/0.5)]">SEO & Paid Media Fulfillment</span>{" "}
            You Can Trust
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Dialed-In Web helps agencies scale local SEO, Google Maps visibility, paid media, and organic social without building internal fulfillment teams. All execution is delivered under your brand.
          </p>

          {/* Premium positioning line */}
          <p className="text-base md:text-lg text-text-muted italic mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Built for agencies focused on retention, not churn.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a 
              href="#contact" 
              className="btn-cta group"
            >
              Request Partner Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "0.5s" }}>
        <div className="w-6 h-10 rounded-full border border-border/50 flex items-start justify-center p-2 backdrop-blur-sm">
          <div className="w-1 h-2 bg-cta rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
