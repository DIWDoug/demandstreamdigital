import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "@/components/ui/phone-input";
import { useToast } from "@/hooks/use-toast";
import { useRecaptcha } from "@/hooks/useRecaptcha";
import {
  markGrowLeadVerified,
  pushGrowDataLayer,
  safeTrackCustom,
} from "@/lib/growFunnel";

const contractorOptions = ["Plumbing", "HVAC", "Both"];
const channelOptions = [
  "Google Ads",
  "Local SEO",
  "Google Business Pro SEO",
  "Local Service Ads",
  "Facebook Ads",
  "Not sure yet",
];
const revenueOptions = [
  { value: "under_500k", label: "Less than $500k" },
  { value: "500k_1m", label: "$500k to $1M" },
  { value: "1m_3m", label: "$1M to $3M" },
  { value: "3m_plus", label: "$3M+" },
];

type StepKey =
  | "contractor"
  | "company"
  | "channels"
  | "revenue"
  | "budget"
  | "qualified"
  | "contact"
  | "disqualified";

const orderedSteps: StepKey[] = ["contractor", "company", "channels", "revenue", "budget", "qualified", "contact"];

const questionCount = 5;

const baseOptionClass =
  "w-full rounded-lg border border-border bg-surface-elevated px-4 py-4 text-left text-foreground transition-colors hover:border-accent-blue hover:bg-accent-blue/10";
const selectedOptionClass = "border-accent-blue bg-accent-blue/15";

const stepLabels: Record<Exclude<StepKey, "disqualified">, string> = {
  contractor: "Contractor Type",
  company: "Company Name",
  channels: "Marketing Channels",
  revenue: "Annual Revenue",
  budget: "Budget Gate",
  qualified: "Qualified",
  contact: "Contact Info",
};

const GrowthQualifierFlow = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { executeRecaptcha, initRecaptcha } = useRecaptcha();

  const [step, setStep] = useState<StepKey>("contractor");
  const [history, setHistory] = useState<StepKey[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contractorTypes, setContractorTypes] = useState<string[]>([]);
  const [companyName, setCompanyName] = useState("");
  const [marketingChannels, setMarketingChannels] = useState<string[]>([]);
  const [revenueBand, setRevenueBand] = useState("");
  const [canInvest, setCanInvest] = useState<"yes" | "no" | "">("");
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    phoneCountryCode: "+1",
    website: "",
    honeypot: "",
  });

  useEffect(() => {
    pushGrowDataLayer("grow_funnel_start", { funnel: "grow_qualifier" });
    safeTrackCustom("GrowFunnelStart", { funnel: "grow_qualifier" });
  }, []);

  useEffect(() => {
    if (step === "disqualified") {
      pushGrowDataLayer("grow_funnel_disqualified", { funnel: "grow_qualifier", revenueBand, canInvest });
      safeTrackCustom("GrowFunnelAbandon", {
        funnel: "grow_qualifier",
        step: "budget",
        reason: "investment_gate_failed",
      });
      return;
    }

    const index = orderedSteps.indexOf(step as Exclude<StepKey, "disqualified">);
    pushGrowDataLayer("grow_funnel_step", {
      funnel: "grow_qualifier",
      step,
      stepIndex: index + 1,
      stepLabel: stepLabels[step as Exclude<StepKey, "disqualified">],
    });
    safeTrackCustom("GrowFunnelStep", {
      funnel: "grow_qualifier",
      step,
      stepIndex: index + 1,
      stepLabel: stepLabels[step as Exclude<StepKey, "disqualified">],
    });
  }, [step, revenueBand, canInvest]);

  const visibleQuestionNumber = useMemo(() => {
    switch (step) {
      case "contractor":
        return 1;
      case "company":
        return 2;
      case "channels":
        return 3;
      case "revenue":
        return 4;
      case "budget":
        return 5;
      default:
        return null;
    }
  }, [step]);

  const toggleValue = (current: string[], value: string, setter: (values: string[]) => void) => {
    setter(current.includes(value) ? current.filter((item) => item !== value) : [...current, value]);
  };

  const moveTo = (nextStep: StepKey) => {
    setHistory((prev) => [...prev, step]);
    setStep(nextStep);
  };

  const goBack = () => {
    setHistory((prev) => {
      if (prev.length === 0) return prev;
      const next = [...prev];
      const previous = next.pop();
      if (previous) setStep(previous);
      return next;
    });
  };

  const handleRevenueContinue = () => {
    if (!revenueBand) return;

    if (revenueBand === "under_500k") {
      moveTo("budget");
      return;
    }

    moveTo("qualified");
  };

  const handleBudgetContinue = () => {
    if (!canInvest) return;

    if (canInvest === "yes") {
      moveTo("qualified");
      return;
    }

    moveTo("disqualified");
  };

  const submitLead = async () => {
    if (contact.honeypot) {
      navigate("/grow/thanks");
      return;
    }

    setIsSubmitting(true);

    try {
      const recaptchaToken = await executeRecaptcha("grow_qualifier_submit");
      const { supabase } = await import("@/integrations/supabase/client");
      const { error } = await supabase.functions.invoke("submit-to-ghl", {
        body: {
          name: `${contact.firstName} ${contact.lastName}`.trim(),
          email: contact.email,
          phone: contact.phone,
          phoneCountryCode: contact.phoneCountryCode,
          website: contact.website,
          company: companyName,
          contractorTypes,
          marketingChannels,
          revenue: revenueBand,
          budgetAnswer: canInvest || null,
          formType: "grow_qualifier",
          recaptchaToken,
        },
      });

      if (error) throw error;

      markGrowLeadVerified("grow_qualifier");
      pushGrowDataLayer("lead_submitted", { form_type: "grow_qualifier" });
      safeTrackCustom("GrowFunnelComplete", { funnel: "grow_qualifier" });
      navigate("/grow/thanks");
    } catch (error) {
      console.error("Growth qualifier submit error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-lg border border-border bg-surface-elevated/95 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
      <div className="mb-8 flex items-center justify-between gap-4 border-b border-border pb-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-blue">Availability + Fit Check</p>
          <p className="mt-1 text-sm text-text-muted">Typeform-style qualifier rebuilt from your original flow.</p>
        </div>
        {visibleQuestionNumber ? (
          <div className="rounded-full border border-accent-blue/30 bg-accent-blue/10 px-3 py-1 text-sm font-semibold text-accent-blue">
            {visibleQuestionNumber}/{questionCount}
          </div>
        ) : null}
      </div>

      {history.length > 0 && step !== "disqualified" ? (
        <button
          type="button"
          onClick={goBack}
          className="mb-6 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
      ) : null}

      {step === "contractor" ? (
        <div className="space-y-5">
          <div>
            <h2 className="text-3xl font-bold text-foreground">What type of contractor are you?</h2>
            <p className="mt-2 text-text-secondary">Select all that apply.</p>
          </div>
          <div className="space-y-3">
            {contractorOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => toggleValue(contractorTypes, option, setContractorTypes)}
                className={`${baseOptionClass} ${contractorTypes.includes(option) ? selectedOptionClass : ""}`}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            type="button"
            disabled={contractorTypes.length === 0}
            onClick={() => moveTo("company")}
            className="btn-cta inline-flex items-center gap-2 disabled:opacity-50"
          >
            Continue
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      ) : null}

      {step === "company" ? (
        <div className="space-y-5">
          <div>
            <h2 className="text-3xl font-bold text-foreground">What is your company name?</h2>
            <p className="mt-2 text-text-secondary">We’ll use this to personalize the review.</p>
          </div>
          <input
            type="text"
            value={companyName}
            onChange={(event) => setCompanyName(event.target.value)}
            placeholder="Acme Plumbing & Air"
            maxLength={120}
            className="w-full rounded-lg border border-border bg-background px-4 py-4 text-foreground placeholder:text-text-muted focus:border-accent-blue focus:outline-none"
          />
          <button
            type="button"
            disabled={!companyName.trim()}
            onClick={() => moveTo("channels")}
            className="btn-cta inline-flex items-center gap-2 disabled:opacity-50"
          >
            Continue
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      ) : null}

      {step === "channels" ? (
        <div className="space-y-5">
          <div>
            <h2 className="text-3xl font-bold text-foreground">What types of ads do you run?</h2>
            <p className="mt-2 text-text-secondary">Choose every channel that is live or under consideration.</p>
          </div>
          <div className="space-y-3">
            {channelOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => toggleValue(marketingChannels, option, setMarketingChannels)}
                className={`${baseOptionClass} ${marketingChannels.includes(option) ? selectedOptionClass : ""}`}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            type="button"
            disabled={marketingChannels.length === 0}
            onClick={() => moveTo("revenue")}
            className="btn-cta inline-flex items-center gap-2 disabled:opacity-50"
          >
            Continue
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      ) : null}

      {step === "revenue" ? (
        <div className="space-y-5">
          <div>
            <h2 className="text-3xl font-bold text-foreground">What is your annual revenue?</h2>
            <p className="mt-2 text-text-secondary">This helps us qualify market fit and budget reality.</p>
          </div>
          <div className="space-y-3">
            {revenueOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setRevenueBand(option.value)}
                className={`${baseOptionClass} ${revenueBand === option.value ? selectedOptionClass : ""}`}
              >
                {option.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            disabled={!revenueBand}
            onClick={handleRevenueContinue}
            className="btn-cta inline-flex items-center gap-2 disabled:opacity-50"
          >
            Continue
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      ) : null}

      {step === "budget" ? (
        <div className="space-y-5">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Can you currently invest $1,000/month into growth?</h2>
            <p className="mt-2 text-text-secondary">If yes, you can still qualify for the next step.</p>
          </div>
          <div className="space-y-3">
            {[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setCanInvest(option.value as "yes" | "no")}
                className={`${baseOptionClass} ${canInvest === option.value ? selectedOptionClass : ""}`}
              >
                {option.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            disabled={!canInvest}
            onClick={handleBudgetContinue}
            className="btn-cta inline-flex items-center gap-2 disabled:opacity-50"
          >
            Submit
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      ) : null}

      {step === "qualified" ? (
        <div className="space-y-6">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent-green/15 text-accent-green">
            <CheckCircle className="h-7 w-7" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground">Looks like you qualify.</h2>
            <p className="mt-2 max-w-xl text-text-secondary">
              If your market is available, the next step is a strategy call. Share your contact details and we’ll line it up.
            </p>
          </div>
          <button type="button" onClick={() => moveTo("contact")} className="btn-cta inline-flex items-center gap-2">
            Continue
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      ) : null}

      {step === "contact" ? (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            void submitLead();
          }}
          className="space-y-4"
        >
          <div>
            <h2 className="text-3xl font-bold text-foreground">Where should we send the next step?</h2>
            <p className="mt-2 text-text-secondary">This routes you to the strategy-call booking page once submitted.</p>
          </div>

          <input
            type="text"
            name="company_url"
            value={contact.honeypot}
            onChange={(event) => setContact((prev) => ({ ...prev, honeypot: event.target.value }))}
            className="absolute -left-[9999px] opacity-0 pointer-events-none"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              required
              onFocus={initRecaptcha}
              placeholder="First name"
              value={contact.firstName}
              onChange={(event) => setContact((prev) => ({ ...prev, firstName: event.target.value }))}
              className="w-full rounded-lg border border-border bg-background px-4 py-4 text-foreground placeholder:text-text-muted focus:border-accent-blue focus:outline-none"
            />
            <input
              type="text"
              required
              placeholder="Last name"
              value={contact.lastName}
              onChange={(event) => setContact((prev) => ({ ...prev, lastName: event.target.value }))}
              className="w-full rounded-lg border border-border bg-background px-4 py-4 text-foreground placeholder:text-text-muted focus:border-accent-blue focus:outline-none"
            />
          </div>

          <input
            type="email"
            required
            placeholder="Email"
            value={contact.email}
            onChange={(event) => setContact((prev) => ({ ...prev, email: event.target.value }))}
            className="w-full rounded-lg border border-border bg-background px-4 py-4 text-foreground placeholder:text-text-muted focus:border-accent-blue focus:outline-none"
          />

          <PhoneInput
            value={contact.phone}
            onChange={(phone) => setContact((prev) => ({ ...prev, phone }))}
            countryCode={contact.phoneCountryCode}
            onCountryCodeChange={(phoneCountryCode) => setContact((prev) => ({ ...prev, phoneCountryCode }))}
          />

          <input
            type="text"
            placeholder="Website"
            value={contact.website}
            onChange={(event) => setContact((prev) => ({ ...prev, website: event.target.value }))}
            className="w-full rounded-lg border border-border bg-background px-4 py-4 text-foreground placeholder:text-text-muted focus:border-accent-blue focus:outline-none"
          />

          <p className="text-xs leading-relaxed text-text-muted">
            By submitting, you consent to outreach regarding your fit check. Review our <Link to="/privacy" className="text-accent-blue hover:underline">Privacy Policy</Link> and <Link to="/terms" className="text-accent-blue hover:underline">Terms</Link>.
          </p>

          <button type="submit" disabled={isSubmitting} className="btn-cta inline-flex items-center gap-2 disabled:opacity-50">
            {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
            Submit
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      ) : null}

      {step === "disqualified" ? (
        <div className="space-y-6 text-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground">We&apos;re sorry but, at this time, we do not have a service for you.</h2>
            <p className="mt-3 text-text-secondary">Our partnerships start at $1,000/month in growth investment.</p>
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button type="button" onClick={() => navigate("/contact")} className="btn-cta inline-flex items-center gap-2">
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => {
                setHistory([]);
                setStep("contractor");
              }}
              className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue hover:underline"
            >
              Start over
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default GrowthQualifierFlow;