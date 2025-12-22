import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero noise-overlay flex items-center justify-center overflow-hidden">
      {/* Abstract data texture overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl bg-gradient-to-br from-accent-blue/20 to-transparent" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl bg-gradient-to-tl from-muted/30 to-transparent" />
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
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
            <span className="w-1 h-6 bg-cta rounded-full" />
            <p className="text-sm md:text-base text-foreground uppercase tracking-widest font-medium">
              White-Label Local Digital Marketing Partner
            </p>
            <span className="w-1 h-6 bg-cta rounded-full" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold leading-tight mb-8 animate-fade-in-up text-foreground" style={{ animationDelay: "0.1s" }}>
            White-Label Local{" "}
            <span className="text-cta">SEO & Paid Media Fulfillment</span>{" "}
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
        <div className="w-6 h-10 rounded-full border border-border flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-text-muted rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
