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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero background with darkened top zone */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Darkened top 20% for header contrast */}
      <div className="absolute top-0 left-0 right-0 h-[20%] bg-gradient-to-b from-[hsl(220,25%,4%)] to-transparent" />
      
      {/* Subtle abstract texture - reduced */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl bg-gradient-to-br from-accent-blue/20 to-transparent animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full blur-3xl bg-gradient-to-tl from-accent-blue/15 to-transparent animate-pulse" style={{ animationDuration: '8s', animationDelay: '3s' }} />
      </div>

      {/* Grid pattern - more subtle */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--text-secondary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--text-secondary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Increased vertical padding ~25% */}
      <div className="container mx-auto px-6 lg:px-8 py-40 lg:py-52 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left-aligned content block */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <div className="flex items-center mb-6 animate-fade-in-up">
              <p className="text-sm md:text-base text-foreground/80 uppercase tracking-widest font-medium">
                White-Label Local Digital Marketing Partner
              </p>
            </div>

            {/* Main Headline - Dominant */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-semibold mb-4 animate-fade-in-up text-foreground" style={{ animationDelay: "0.1s", lineHeight: "1.1" }}>
              White-Label{" "}
              <span className="text-accent-blue">Local SEO & Paid Media Fulfillment</span>{" "}
              You Can Trust
            </h1>

            {/* Blue divider under H1 */}
            <div className="w-24 h-0.5 bg-gradient-to-r from-accent-blue to-accent-blue/40 mb-6 animate-fade-in-up" style={{ animationDelay: "0.12s" }} />

            {/* Authority anchor - using blue, not green */}
            <p className="text-base md:text-lg text-accent-blue font-medium mb-8 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              Built for agencies managing 50–500+ local clients
            </p>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Dialed-In Web helps agencies scale local SEO, Google Maps visibility, and paid media without building internal fulfillment teams. All execution is delivered under your brand.
            </p>

            {/* Secondary CTA - text only, no green */}
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <a 
                href="#system"
                className="text-text-secondary hover:text-foreground transition-colors font-medium flex items-center gap-2 py-4 border-b border-transparent hover:border-accent-blue/30"
              >
                How the System Works
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right column - Lower contrast form container */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
            <div className="bg-surface-elevated/40 backdrop-blur-sm border border-border/30 rounded-2xl p-8 shadow-xl">
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
                    className="bg-background/30 border-border/30 focus:border-accent-blue/50 h-12"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Work Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background/30 border-border/30 focus:border-accent-blue/50 h-12"
                  />
                </div>
                <div>
                  <Input
                    type="url"
                    placeholder="Agency Website"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    required
                    className="bg-background/30 border-border/30 focus:border-accent-blue/50 h-12"
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
              
              <p className="text-text-muted/50 text-xs mt-4 text-center">
                No spam. We only work with qualified agencies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "0.5s" }}>
        <div className="w-6 h-10 rounded-full border border-border/30 flex items-start justify-center p-2 backdrop-blur-sm">
          <div className="w-1 h-2 bg-accent-blue/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;