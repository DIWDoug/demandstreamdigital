import { ArrowRight, Loader2, CheckCircle, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import PhoneInput from "@/components/ui/phone-input";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface HeroDescription {
  intro: string;
  bullets: string[];
  closing: string;
}

interface ServiceHubHeroProps {
  title: string;
  description: string | HeroDescription;
  breadcrumbs?: BreadcrumbItem[];
  integrationNote?: string;
  heroHeadline?: string;
  heroSubtitle?: string;
}

const ServiceHubHero = ({ title, description, breadcrumbs, integrationNote, heroHeadline, heroSubtitle }: ServiceHubHeroProps) => {
  const { toast } = useToast();
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

  // Step 1: Capture website and send partial lead immediately
  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!website.trim()) return;

    // Send partial lead with just website
    try {
      await supabase.functions.invoke("submit-to-ghl", {
        body: {
          name: "",
          email: "",
          phone: "",
          revenue: "",
          website: website.trim(),
          formType: "service_hub_hero_step1",
        }
      });
      console.log("Step 1 partial lead captured:", website);
    } catch (error) {
      console.error("Error capturing step 1:", error);
    }

    setStep(2);
  };

  // Step 2: Submit full form
  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("submit-to-ghl", {
        body: {
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          phoneCountryCode: formData.phoneCountryCode,
          revenue: formData.revenue,
          website: website,
          formType: "service_hub_hero",
        }
      });

      if (error) throw error;

      toast({
        title: "Thank you!",
        description: "We'll be in touch within 24 hours.",
      });

      // Reset form
      setStep(1);
      setWebsite("");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        phoneCountryCode: "+1",
        revenue: "",
        consent: false,
        notRobot: false,
      });
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

  const valueProps = [
    {
      title: "We Learn About Your Agency",
      description: "We'll understand your fulfillment needs, client base, and margin requirements to craft a tailored approach."
    },
    {
      title: "Get a Personalized Scope",
      description: "Receive transparent pricing and clear deliverables that protect your margins and set expectations upfront."
    },
    {
      title: "Start Delivering Results",
      description: "Seamless onboarding under your brand, with execution that helps you exceed client expectations."
    }
  ];

  return (
    <section className="relative min-h-[50vh] gradient-hero noise-overlay flex items-center overflow-hidden">
      {/* Background effects */}
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

      <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text & Form */}
          <div className="relative">
            <div className="absolute -inset-4 bg-background/30 backdrop-blur-sm rounded-2xl -z-10 hidden lg:block" />
            
            {/* Breadcrumbs */}
            {breadcrumbs && breadcrumbs.length > 0 && (
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-6 animate-fade-in">
                <Link to="/" className="text-text-muted hover:text-foreground transition-colors">
                  Home
                </Link>
                {breadcrumbs.map((item, index) => (
                  <span key={index} className="flex items-center gap-2">
                    <span className="text-text-muted">/</span>
                    {item.href ? (
                      <Link to={item.href} className="text-text-muted hover:text-foreground transition-colors">
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-accent-blue">{item.label}</span>
                    )}
                  </span>
                ))}
              </nav>
            )}

            {/* Title */}
            {heroHeadline ? (
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-semibold mb-3 animate-fade-in text-foreground" style={{ lineHeight: "1.15" }}>
                {heroHeadline}
              </h1>
            ) : (
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-semibold mb-8 animate-fade-in text-foreground" style={{ lineHeight: "1.15" }}>
                White-Label{" "}
                <span className="text-accent-blue drop-shadow-[0_0_30px_hsl(var(--accent-blue)/0.5)]">{title}</span>{" "}
                Services
              </h1>
            )}
            
            {/* Optional Subtitle */}
            {heroSubtitle && (
              <p className="text-xl md:text-2xl text-accent-blue font-medium mb-8 animate-fade-in drop-shadow-[0_0_30px_hsl(var(--accent-blue)/0.5)]">
                {heroSubtitle}
              </p>
            )}
            
            {/* Description */}
            {typeof description === 'string' ? (
              <p className="text-lg md:text-xl text-text-secondary max-w-xl leading-relaxed animate-fade-in mb-8">
                {description}
              </p>
            ) : (
              <div className="max-w-xl animate-fade-in mb-8">
                <p className="text-base text-text-muted leading-snug mb-5">
                  {description.intro}
                </p>
                <ul className="space-y-2 mb-5">
                  {description.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-center gap-3 text-lg font-medium text-foreground">
                      <span className="text-accent-blue">—</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-text-muted/80 leading-snug">
                  {description.closing}
                </p>
              </div>
            )}

            {/* Two-Step Form */}
            <div className="animate-fade-in max-w-xl">
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
                <div className="bg-background/90 backdrop-blur-md border border-border rounded-xl p-6 shadow-2xl">
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
                    <p className="text-xs text-text-muted text-center pt-1">
                      This starts a conversation, not a sales call.
                    </p>
                  </form>
                </div>
              )}
            </div>
            
            {/* Integration Note */}
            {integrationNote && (
              <p className="text-sm text-text-muted/60 italic max-w-xl animate-fade-in mt-6">
                {integrationNote}
              </p>
            )}
          </div>

          {/* Right Column - Value Propositions */}
          <div className="animate-fade-in">
            <div className="bg-accent-blue/10 backdrop-blur-sm border border-accent-blue/20 rounded-2xl p-8 lg:p-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                What Happens <span className="text-accent-blue">Next</span>
              </h2>
              <p className="text-text-secondary mb-8">
                Ready to explore a partnership? Here's what to expect when you reach out.
              </p>
              
              <div className="space-y-6">
                {valueProps.map((prop, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-blue/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-accent-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{prop.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{prop.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Response time guarantee */}
              <div className="mt-8 pt-6 border-t border-accent-blue/20">
                <p className="text-sm text-text-muted text-center italic">
                  We typically respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHubHero;
