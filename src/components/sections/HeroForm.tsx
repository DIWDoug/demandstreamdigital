import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import PhoneInput from "@/components/ui/phone-input";

const HeroForm = () => {
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
    honeypot: "",
  });

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (website.trim()) {
      setStep(2);
    }
  };

  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.honeypot) {
      navigate("/thank-you?type=contact");
      return;
    }
    
    setIsSubmitting(true);

    try {
      const { supabase } = await import("@/integrations/supabase/client");
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
      navigate("/thank-you?type=contact");
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
    <div className="w-full">
      {step === 1 ? (
        <div className="bg-background/90 backdrop-blur-md border border-border rounded-xl p-6 sm:p-8 shadow-2xl">
          <h3 className="text-lg font-semibold text-foreground mb-2">Get Your Free Marketing Audit</h3>
          <p className="text-sm text-text-muted mb-5">See exactly where you're losing leads — and how to fix it.</p>
          <form onSubmit={handleStep1Submit} className="space-y-4">
            <input
              type="text"
              placeholder="Enter your website (e.g. yourcompany.com)"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              required
              className="w-full px-5 py-4 rounded-lg bg-background/80 border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:border-cta focus:ring-1 focus:ring-cta transition-all text-base"
            />
            <button
              type="submit"
              className="w-full btn-cta group justify-center"
            >
              Get a Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="text-xs text-text-muted text-center">No commitment. No sales pitch.</p>
          </form>
        </div>
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
            {/* Honeypot field */}
            <input
              type="text"
              name="website_url"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              className="absolute -left-[9999px] opacity-0 pointer-events-none"
              tabIndex={-1}
              autoComplete="off"
            />
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
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:border-cta focus:ring-1 focus:ring-cta transition-all text-base"
              />
            </div>
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
                I consent to automated marketing messages from ServiceForge Digital via email and/or SMS. View our{" "}
                <Link to="/privacy" className="text-accent-blue hover:underline">Privacy Policy</Link> and{" "}
                <Link to="/terms" className="text-accent-blue hover:underline">Terms of Service</Link>.
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
                  Let's Grow Your Business
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
            <p className="text-xs text-text-muted text-center pt-2">
              This starts a conversation, not a sales pitch.
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default HeroForm;
