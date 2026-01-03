import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import PhoneInput from "@/components/ui/phone-input";

const Hero = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    phoneCountryCode: "+1",
    revenue: "",
    consent: false,
    notRobot: false,
  });

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (website.trim()) {
      setStep(2);
    }
  };

  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("submit-to-ghl", {
        body: {
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          phoneCountryCode: formData.phoneCountryCode,
          revenue: formData.revenue,
          website: website,
          formType: "hero_homepage",
        }
      });

      if (error) throw error;

      // Redirect to thank you page
      navigate("/thank-you");
    } catch (error: any) {
      console.error("Form submission error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen gradient-hero noise-overlay flex items-center justify-center overflow-hidden">
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
          {/* Contextual eyebrow - subtle */}
          <p className="text-sm text-text-muted uppercase tracking-widest mb-8 animate-fade-in-up">
            AI-Enhanced · White-Label Digital Marketing Partner
          </p>

          {/* Single dominant headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-semibold mb-8 animate-fade-in-up text-foreground" style={{ animationDelay: "0.1s", lineHeight: "1.1" }}>
            White-Label <span className="text-accent-blue drop-shadow-[0_0_30px_hsl(var(--accent-blue)/0.5)]">Digital Marketing Fulfillment</span> for Agencies
          </h1>

          {/* Supporting sentence - benefit first, customization as proof */}
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            SEO, local search, paid media, and authority building. Scoped to each client's market, not forced into a template.
          </p>

          {/* Payoff sentence */}
          <p className="text-base text-text-muted mb-14 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Clients stay longer. Margins stay healthy. Fulfillment becomes predictable.
          </p>

          {/* Two-Step Form */}
          <div className="animate-fade-in-up max-w-xl mx-auto" style={{ animationDelay: "0.3s" }}>
            {step === 1 ? (
              <form onSubmit={handleStep1Submit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="yourwebsite.com"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  required
                  className="flex-1 px-5 py-4 rounded-lg bg-background/80 backdrop-blur-sm border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:border-cta focus:ring-1 focus:ring-cta transition-all text-base"
                />
                <button
                  type="submit"
                  className="btn-cta group whitespace-nowrap"
                >
                  Start the Conversation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            ) : (
              <div className="bg-background/90 backdrop-blur-md border border-border rounded-xl p-6 sm:p-8 shadow-2xl">
                {/* Step indicator */}
                <div className="flex items-center gap-3 mb-6 text-left">
                  <div className="flex items-center gap-2 text-cta">
                    <CheckCircle className="h-5 w-5" />
                    <span className="text-sm font-medium">{website}</span>
                  </div>
                  <button 
                    onClick={() => setStep(1)} 
                    className="text-xs text-text-muted hover:text-foreground transition-colors underline"
                  >
                    Edit
                  </button>
                </div>

                <form onSubmit={handleStep2Submit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:border-cta focus:ring-1 focus:ring-cta transition-all text-base"
                    />
                    <input
                      type="email"
                      placeholder="Work Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:border-cta focus:ring-1 focus:ring-cta transition-all text-base"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <PhoneInput
                      value={formData.phone}
                      onChange={(phone) => setFormData({ ...formData, phone })}
                      countryCode={formData.phoneCountryCode}
                      onCountryCodeChange={(code) => setFormData({ ...formData, phoneCountryCode: code })}
                      placeholder="Phone (SMS-enabled)"
                    />
                    <select
                      value={formData.revenue}
                      onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:border-cta focus:ring-1 focus:ring-cta transition-all text-base appearance-none"
                    >
                      <option value="" className="text-text-muted">Monthly Revenue *</option>
                      <option value="under-25k">Under $25k</option>
                      <option value="25k-50k">$25k - $50k</option>
                      <option value="50k-100k">$50k - $100k</option>
                      <option value="100k-250k">$100k - $250k</option>
                      <option value="250k+">$250k+</option>
                    </select>
                  </div>

                  {/* Consent checkbox */}
                  <label className="flex items-start gap-3 text-left cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      required
                      className="mt-1 w-4 h-4 rounded border-border bg-background text-cta focus:ring-cta focus:ring-offset-0"
                    />
                    <span className="text-xs text-text-muted leading-relaxed">
                      I consent to automated marketing messages from DialedIn Web via email and/or SMS by entering my information. View our{" "}
                      <Link to="/privacy" className="text-accent-blue hover:underline">Privacy Policy</Link>.
                    </span>
                  </label>

                  {/* Robot checkbox */}
                  <label className="flex items-center gap-3 text-left cursor-pointer p-3 rounded-lg border border-border bg-background/50">
                    <input
                      type="checkbox"
                      checked={formData.notRobot}
                      onChange={(e) => setFormData({ ...formData, notRobot: e.target.checked })}
                      required
                      className="w-5 h-5 rounded border-border bg-background text-cta focus:ring-cta focus:ring-offset-0"
                    />
                    <span className="text-sm text-foreground">I'm not a robot</span>
                  </label>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-cta group justify-center disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit and Pick a Time
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-text-muted text-center pt-2">
                    This starts a conversation, not a sales call.
                  </p>
                </form>
              </div>
            )}
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
