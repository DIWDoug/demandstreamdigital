import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Loader2, ChevronDown, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import PhoneInput from "@/components/ui/phone-input";

const serviceOptions = [
  "Local SEO",
  "Google Maps / GBP",
  "Paid Advertising (PPC)",
  "Content Marketing",
  "Email Marketing",
  "Reputation Management",
  "Reporting & Dashboards",
  "Website Design & Hosting",
  "Not Sure Yet",
];

const HeroForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    phoneCountryCode: "+1",
    website: "",
    services: [] as string[],
    consent: false,
    notRobot: false,
    honeypot: "",
  });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: formData.phone,
          phoneCountryCode: formData.phoneCountryCode,
          website: formData.website,
          services: formData.services,
          formType: "hero_homepage",
        },
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

  const servicesLabel =
    formData.services.length === 0
      ? "Services You're Interested In"
      : formData.services.length <= 2
        ? formData.services.join(", ")
        : `${formData.services.length} services selected`;

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:border-cta focus:ring-1 focus:ring-cta transition-all text-base";

  // Step 1: Simple website URL entry
  if (step === 1) {
    return (
      <div className="w-full">
        <div className="bg-background/90 backdrop-blur-md border border-border rounded-xl p-6 sm:p-8 shadow-2xl">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Get Your Free Marketing Proposal
          </h3>
          <p className="text-sm text-text-muted mb-5">
            Enter your website and we'll show you exactly where you're losing leads.
          </p>

          <form onSubmit={handleStep1} className="space-y-4">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="yourcompany.com"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                required
                maxLength={255}
                className={`${inputClass} flex-1`}
              />
              <button
                type="submit"
                className="btn-cta group whitespace-nowrap px-5"
              >
                Get a Proposal
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            <p className="text-xs text-text-muted text-center">
              No commitment required. Takes 30 seconds.
            </p>
          </form>
        </div>
      </div>
    );
  }

  // Step 2: Full contact form
  return (
    <div className="w-full">
      <div className="bg-background/90 backdrop-blur-md border border-border rounded-xl p-6 sm:p-8 shadow-2xl">
        <div className="flex items-center justify-between mb-2">
           <h3 className="text-lg font-semibold text-foreground">
             Almost There. Tell Us About You
           </h3>
          <button
            type="button"
            onClick={() => setStep(1)}
            className="text-xs text-text-muted hover:text-foreground transition-colors"
          >
            ← Back
          </button>
        </div>
        <p className="text-sm text-text-muted mb-5">
          We'll build a custom proposal for <span className="font-medium text-foreground">{formData.website}</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot */}
          <input
            type="text"
            name="website_url"
            value={formData.honeypot}
            onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            className="absolute -left-[9999px] opacity-0 pointer-events-none"
            tabIndex={-1}
            autoComplete="off"
          />

          {/* First & Last Name */}
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="First Name *"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              required
              maxLength={100}
              className={inputClass}
            />
            <input
              type="text"
              placeholder="Last Name *"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              required
              maxLength={100}
              className={inputClass}
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Best Email *"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            maxLength={255}
            className={inputClass}
          />

          {/* Phone */}
          <PhoneInput
            value={formData.phone}
            onChange={(phone) => setFormData({ ...formData, phone })}
            countryCode={formData.phoneCountryCode}
            onCountryCodeChange={(code) => setFormData({ ...formData, phoneCountryCode: code })}
            placeholder="Phone Number"
          />

          {/* Website (pre-filled, editable) */}
          <input
            type="text"
            placeholder="Website URL"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            maxLength={255}
            className={inputClass}
          />

          {/* Services Multi-Select Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-background border border-border text-left focus:outline-none focus:border-cta focus:ring-1 focus:ring-cta transition-all text-base"
            >
              <span className={formData.services.length === 0 ? "text-text-muted" : "text-foreground"}>
                {servicesLabel}
              </span>
              <ChevronDown className={`h-4 w-4 text-text-muted transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            {servicesOpen && (
              <div className="absolute z-50 mt-1 w-full rounded-lg border border-border bg-background shadow-lg py-1 max-h-56 overflow-y-auto">
                {serviceOptions.map((service) => {
                  const selected = formData.services.includes(service);
                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors ${
                        selected
                          ? "bg-cta/10 text-foreground font-medium"
                          : "text-text-secondary hover:bg-muted"
                      }`}
                    >
                      <span
                        className={`flex-shrink-0 w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                          selected
                            ? "bg-cta border-cta text-white"
                            : "border-border bg-background"
                        }`}
                      >
                        {selected && <Check className="h-3 w-3" />}
                      </span>
                      {service}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Consent */}
          <label className="flex items-start gap-3 text-left cursor-pointer">
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              required
              className="mt-1 w-4 h-4 rounded border-border bg-background text-cta focus:ring-cta focus:ring-offset-0"
            />
            <span className="text-xs text-text-muted leading-relaxed">
              I consent to automated marketing messages from Demand Stream Digital via email and/or SMS. View our{" "}
              <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link> and{" "}
              <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>.
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
                Get My Free Proposal
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
          <p className="text-xs text-text-muted text-center pt-1">
            No commitment. No sales pitch.
          </p>
        </form>
      </div>
    </div>
  );
};

export default HeroForm;
