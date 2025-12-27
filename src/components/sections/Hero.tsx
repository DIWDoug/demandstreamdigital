import { ArrowRight } from "lucide-react";
import bloombergLogo from "@/assets/logos/bloomberg.png";
import digitalJournalLogo from "@/assets/logos/digital-journal.png";
import googleNewsLogo from "@/assets/logos/google-news.png";
import marketwatchLogo from "@/assets/logos/marketwatch.png";
import businessInsiderLogo from "@/assets/logos/business-insider.png";
import yahooNewsLogo from "@/assets/logos/yahoo-news.png";
import apNewsLogo from "@/assets/logos/ap-news.png";

const Hero = () => {
  const logos = [
    { name: "Yahoo News", src: yahooNewsLogo },
    { name: "Business Insider", src: businessInsiderLogo },
    { name: "MarketWatch", src: marketwatchLogo },
    { name: "Google News", src: googleNewsLogo },
    { name: "Digital Journal", src: digitalJournalLogo },
    { name: "Bloomberg", src: bloombergLogo },
    { name: "AP News", src: apNewsLogo },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Dark Hero Section */}
      <div className="relative gradient-hero noise-overlay flex items-center justify-center pt-32 lg:pt-40 pb-32">
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

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
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
      </div>

      {/* Curved transition */}
      <div className="relative h-16 md:h-24 bg-section-light">
        <svg
          className="absolute bottom-full left-0 w-full"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          fill="hsl(40 30% 96%)"
        >
          <path d="M0,80 L0,40 Q360,0 720,40 T1440,40 L1440,80 Z" />
        </svg>
      </div>

      {/* Featured In Section - Light Background */}
      <div className="bg-section-light pb-16 pt-4">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-8">
            Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.name}
                className="h-8 md:h-10 w-auto object-contain opacity-50 hover:opacity-80 transition-all duration-300 grayscale"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
