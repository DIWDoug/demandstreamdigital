import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero noise-overlay flex items-center justify-center overflow-hidden">
      {/* Enhanced abstract data texture overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[100px] bg-gradient-to-br from-cta/50 to-accent-blue/30 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[80px] bg-gradient-to-tl from-accent-blue/40 to-cta/20 animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] bg-gradient-radial from-cta/25 via-accent-blue/15 to-transparent" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[60px] bg-gradient-to-bl from-accent-blue/35 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full blur-[70px] bg-gradient-to-tr from-cta/30 to-transparent animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
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

      <div className="container mx-auto px-6 lg:px-8 pt-48 pb-32 lg:pt-56 lg:pb-40 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center mb-8 animate-fade-in-up">
            <p className="text-sm md:text-base text-foreground uppercase tracking-widest font-medium">
              White-Label Local Digital Marketing Partner
            </p>
          </div>

          {/* Main Headline - improved line height */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-semibold mb-10 animate-fade-in-up text-foreground" style={{ animationDelay: "0.1s", lineHeight: "1.15" }}>
            White-Label Local{" "}
            <span className="text-accent-blue drop-shadow-[0_0_30px_hsl(var(--accent-blue)/0.5)]">SEO & Paid Media Fulfillment</span>{" "}
            You Can Trust
          </h1>

          {/* Subheadline - more breathing room */}
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Dialed-In Web helps agencies scale local SEO, Google Maps visibility, paid media, and organic social without building internal fulfillment teams. All execution is delivered under your brand.
          </p>

          {/* Premium positioning line */}
          <p className="text-base md:text-lg text-text-muted italic mb-14 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
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
