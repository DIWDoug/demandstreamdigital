import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero noise-overlay flex items-center justify-center overflow-hidden">
      {/* Enhanced abstract data texture overlay */}
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
        {[...Array(15)].map((_, i) => (
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
        {[...Array(10)].map((_, i) => (
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
        {/* Larger glow particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`glow-${i}`}
            className="absolute w-3 h-3 rounded-full bg-cta blur-sm animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${16 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 8}s`,
              opacity: 0.2,
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

      <div className="container mx-auto px-6 lg:px-8 pt-48 pb-32 lg:pt-56 lg:pb-40 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Micro-Eyebrow - context, not content */}
          <p className="text-xs text-text-muted uppercase tracking-[0.25em] mb-6 animate-fade-in-up">
            AI-Enhanced · White-Label Partner
          </p>

          {/* H1 - SEO anchor (visually demoted: smaller, muted, spacing below) */}
          <h1 className="text-sm md:text-base text-text-muted/70 font-medium mb-8 animate-fade-in-up tracking-widest uppercase">
            White-Label Digital Marketing Fulfillment for Agencies
          </h1>

          {/* H2 - Primary visual headline (the star) */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-semibold mb-10 animate-fade-in-up text-foreground leading-[1.1]" style={{ animationDelay: "0.1s" }}>
            Fulfillment You Can Actually Rely On
          </h2>

          {/* Subhead - supporting copy */}
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.15s" }}>
            We partner with agencies to deliver custom white-label SEO, local search, paid media, and authority building—scoped intentionally, executed consistently, and never forced into rigid packages.
          </p>

          {/* Payoff Line - PROMOTED: 3 lines, larger, more contrast */}
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg md:text-xl text-foreground/90 font-medium leading-loose">
              Your clients stay longer.<br />
              Your margins stop leaking.<br />
              Fulfillment finally feels under control.
            </p>
          </div>

          {/* CTA - more breathing room */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a 
              href="#contact" 
              className="btn-cta group"
            >
              Start a Partner Conversation
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
