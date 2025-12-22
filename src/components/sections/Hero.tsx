import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    website: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Form submission logic will be added later
    console.log("Form submitted:", formData);
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <section className="relative min-h-screen gradient-hero noise-overlay flex items-center overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left-aligned content block */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <div className="flex items-center mb-6 animate-fade-in-up">
              <p className="text-sm md:text-base text-foreground uppercase tracking-widest font-medium">
                White-Label Local Digital Marketing Partner
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-sans font-semibold mb-6 animate-fade-in-up text-foreground" style={{ animationDelay: "0.1s", lineHeight: "1.1" }}>
              White-Label Local{" "}
              <span className="text-accent-blue drop-shadow-[0_0_30px_hsl(var(--accent-blue)/0.5)]">SEO & Paid Media Fulfillment</span>{" "}
              You Can Trust
            </h1>

            {/* Authority anchor - immediately under headline */}
            <p className="text-base md:text-lg text-cta font-medium mb-8 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              Built for agencies managing 50–500+ local clients
            </p>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Dialed-In Web helps agencies scale local SEO, Google Maps visibility, and paid media without building internal fulfillment teams. All execution is delivered under your brand.
            </p>

            {/* CTAs - Primary + Secondary */}
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <a 
                href="#system"
                className="text-text-secondary hover:text-foreground transition-colors font-medium flex items-center gap-2 py-4"
              >
                How the System Works
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right column - Compact form */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
            <div className="bg-card/60 backdrop-blur-md border border-border/50 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                See If We're a Fit
              </h3>
              <p className="text-text-secondary text-sm mb-6">
                Quick qualification — we'll review your agency and respond within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                    className="bg-background/50 border-border/50 focus:border-cta h-12"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Work Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background/50 border-border/50 focus:border-cta h-12"
                  />
                </div>
                <div>
                  <Input
                    type="url"
                    placeholder="Agency Website"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    required
                    className="bg-background/50 border-border/50 focus:border-cta h-12"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-cta h-12 text-base"
                >
                  {isSubmitting ? "Submitting..." : "Get Partnership Details"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
              
              <p className="text-text-secondary/60 text-xs mt-4 text-center">
                No spam. We only work with qualified agencies.
              </p>
            </div>
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
