import { useState, forwardRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRight, Loader2, CheckCircle, ChevronLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useRecaptcha } from "@/hooks/useRecaptcha";
import PhoneInput from "@/components/ui/phone-input";
import { Checkbox } from "@/components/ui/checkbox";
import { serviceInterestOptions } from "@/data/servicesInterested";

interface TwoStepContactFormProps {
  formType: string;
  submitButtonText?: string;
  step1ButtonText?: string;
  showServicesInterested?: boolean;
  className?: string;
  compact?: boolean;
}

const TwoStepContactForm = forwardRef<HTMLDivElement, TwoStepContactFormProps>(
  (
    {
      formType,
      submitButtonText = "Let's Talk Partnership",
      step1ButtonText = "Continue",
      showServicesInterested = true,
      className = "",
      compact = false,
    },
    ref
  ) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { executeRecaptcha, isReady: isRecaptchaReady, initRecaptcha } = useRecaptcha();
  const [step, setStep] = useState(1);
  const [isSubmittingStep1, setIsSubmittingStep1] = useState(false);
  const [isSubmittingStep2, setIsSubmittingStep2] = useState(false);
  const [leadId, setLeadId] = useState<string | null>(null);

  const [step1Data, setStep1Data] = useState({
    name: "",
    email: "",
    website: "",
    city: "",
    honeypot: "",
  });

  const [step2Data, setStep2Data] = useState({
    phone: "",
    phoneCountryCode: "+1",
    revenue: "",
    servicesInterested: [] as string[],
  });

  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Bot detection
    if (step1Data.honeypot) {
      setStep(2);
      return;
    }

    setIsSubmittingStep1(true);

    try {
      const { supabase } = await import("@/integrations/supabase/client");
      // Submit partial lead (step 1)
      const { data, error } = await supabase.functions.invoke("submit-to-ghl", {
        body: {
          name: step1Data.name,
          email: step1Data.email,
          website: step1Data.website,
          city: step1Data.city,
          formType: `${formType}_step1`,
        },
      });

      if (error) throw error;

      const returnedId = (data as any)?.data?.id ?? (data as any)?.id ?? null;
      if (returnedId) setLeadId(String(returnedId));

      // Move to step 2
      setStep(2);
    } catch (error: any) {
      console.error("Step 1 submission error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmittingStep1(false);
    }
  };

  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmittingStep2(true);

    try {
      // Get reCAPTCHA token
      const recaptchaToken = await executeRecaptcha("contact_form_submit");

      const { supabase } = await import("@/integrations/supabase/client");
      
      const { error } = await supabase.functions.invoke("submit-to-ghl", {
        body: {
          leadId,
          name: step1Data.name,
          email: step1Data.email,
          website: step1Data.website,
          city: step1Data.city,
          phone: step2Data.phone,
          phoneCountryCode: step2Data.phoneCountryCode,
          revenue: step2Data.revenue,
          servicesInterested: step2Data.servicesInterested,
          formType,
          recaptchaToken,
        },
      });

      if (error) throw error;

      navigate("/thank-you?type=contact");
    } catch (error: any) {
      console.error("Step 2 submission error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmittingStep2(false);
    }
  };

  const toggleService = (value: string) => {
    setStep2Data((prev) => ({
      ...prev,
      servicesInterested: prev.servicesInterested.includes(value)
        ? prev.servicesInterested.filter((s) => s !== value)
        : [...prev.servicesInterested, value],
    }));
  };

  const inputClass = compact
    ? "w-full px-3 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:border-accent-blue transition-colors text-sm"
    : "w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:border-accent-blue transition-colors";

  const labelClass = compact ? "block text-xs text-foreground mb-1.5" : "block text-sm text-foreground mb-2";

  return (
    <div ref={ref} className={className}>
      {step === 1 ? (
        <form onSubmit={handleStep1Submit} className="space-y-4">
          {/* Honeypot */}
          <input
            type="text"
            name="company_url"
            value={step1Data.honeypot}
            onChange={(e) => setStep1Data({ ...step1Data, honeypot: e.target.value })}
            className="absolute -left-[9999px] opacity-0 pointer-events-none"
            tabIndex={-1}
            autoComplete="off"
          />

          <div>
            <label className={labelClass}>
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={step1Data.name}
              onChange={(e) => setStep1Data({ ...step1Data, name: e.target.value })}
              onFocus={initRecaptcha}
              placeholder="Your name"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              value={step1Data.email}
              onChange={(e) => setStep1Data({ ...step1Data, email: e.target.value })}
              placeholder="you@yourcompany.com"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>
              Your Website <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={step1Data.website}
              onChange={(e) => setStep1Data({ ...step1Data, website: e.target.value })}
              placeholder="yourcompany.com"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>
              City Your Business Is In <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={step1Data.city}
              onChange={(e) => setStep1Data({ ...step1Data, city: e.target.value })}
              placeholder="e.g. Dallas, TX"
              maxLength={100}
              className={inputClass}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmittingStep1}
            className="btn-cta w-full group disabled:opacity-50"
          >
            {isSubmittingStep1 ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                {step1ButtonText}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>
      ) : (
        <div>
          {/* Step indicator */}
          <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border">
            <div className="flex items-center gap-2 text-accent-green">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm font-medium truncate max-w-[180px]">{step1Data.email}</span>
            </div>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-xs text-text-muted hover:text-foreground transition-colors flex items-center gap-1"
            >
              <ChevronLeft className="h-3 w-3" />
              Edit
            </button>
          </div>

          <form onSubmit={handleStep2Submit} className="space-y-4">
            <div>
              <label className={labelClass}>
                SMS Enabled Phone # <span className="text-red-500">*</span>
              </label>
              <PhoneInput
                value={step2Data.phone}
                onChange={(phone) => setStep2Data({ ...step2Data, phone })}
                countryCode={step2Data.phoneCountryCode}
                onCountryCodeChange={(code) => setStep2Data({ ...step2Data, phoneCountryCode: code })}
                required
              />
            </div>

            <div>
              <label className={labelClass}>
                Agency Monthly Revenue <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={step2Data.revenue}
                onChange={(e) => setStep2Data({ ...step2Data, revenue: e.target.value })}
                className={`${inputClass} appearance-none`}
              >
                <option value="">Select revenue range</option>
                <option value="under-25k">Under $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k-250k">$100,000 - $250,000</option>
                <option value="250k-500k">$250,000 - $500,000</option>
                <option value="500k+">$500,000+</option>
              </select>
            </div>

            {showServicesInterested && (
              <div>
                <label className={labelClass}>Services You're Interested In</label>
                <div className="grid grid-cols-2 gap-2">
                  {serviceInterestOptions.map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center gap-2 p-2 rounded-md border cursor-pointer transition-colors ${
                        step2Data.servicesInterested.includes(option.value)
                          ? "border-accent-blue bg-accent-blue/10"
                          : "border-border bg-background/50 hover:border-border/80"
                      }`}
                    >
                      <Checkbox
                        checked={step2Data.servicesInterested.includes(option.value)}
                        onCheckedChange={() => toggleService(option.value)}
                        className="data-[state=checked]:bg-accent-blue data-[state=checked]:border-accent-blue"
                      />
                      <span className="text-xs text-foreground">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Consent & reCAPTCHA notice */}
            <p className="text-xs text-text-muted text-center leading-relaxed">
              By submitting, you consent to marketing messages via email/SMS. View our{" "}
              <Link to="/privacy" className="text-accent-blue hover:underline">Privacy Policy</Link> and{" "}
              <Link to="/terms" className="text-accent-blue hover:underline">Terms of Service</Link>. Protected by reCAPTCHA.
            </p>

            <button
              type="submit"
              disabled={isSubmittingStep2}
              className="btn-cta w-full group disabled:opacity-50"
            >
              {isSubmittingStep2 ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  {submitButtonText}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );
  }
);

TwoStepContactForm.displayName = "TwoStepContactForm";

export default TwoStepContactForm;
