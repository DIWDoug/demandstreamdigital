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
    console.log("Form submitted:", formData);
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-0 left-0 right-0 h-[20%] bg-gradient-to-b from-[hsl(220,25%,4%)] to-transparent" />

      <div className="container mx-auto px-6 lg:px-8 py-32 lg:py-40 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="max-w-xl">
            <p className="text-sm text-accent-blue uppercase tracking-widest font-medium mb-6">
              White-Label Partner for Local Agencies
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6" style={{ lineHeight: "1.1" }}>
              Local SEO & Paid Media Fulfillment
            </h1>

            <p className="text-lg text-text-secondary mb-8">
              Scale your agency without hiring. We execute local SEO, Google Maps, and paid media under your brand.
            </p>

            <p className="text-base text-text-muted">
              For agencies managing 50–500+ local clients.
            </p>
          </div>

          {/* Right form */}
          <div className="bg-surface-elevated/60 backdrop-blur-sm border border-border/40 rounded-xl p-8">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              See If We're a Fit
            </h3>
            <p className="text-text-secondary text-sm mb-6">
              This starts a conversation, not a sales call.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
                className="bg-background/40 border-border/40 h-12"
              />
              <Input
                type="email"
                placeholder="Work Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background/40 border-border/40 h-12"
              />
              <Input
                type="url"
                placeholder="Agency Website"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                required
                className="bg-background/40 border-border/40 h-12"
              />
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full btn-cta h-12"
              >
                {isSubmitting ? "Submitting..." : "Get Partnership Details"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            
            <p className="text-text-muted/60 text-xs mt-4 text-center">
              No spam. We only work with qualified agencies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;