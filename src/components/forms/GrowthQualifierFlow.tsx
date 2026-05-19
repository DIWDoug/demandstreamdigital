import { KeyboardEvent, useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Loader2, Quote, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "@/components/ui/phone-input";
import { isValidPhone } from "@/lib/validation/phone";
import { useToast } from "@/hooks/use-toast";
import { SmsConsentText, SmsConsentSummary } from "@/components/legal/SmsConsentText";
import { useRecaptcha } from "@/hooks/useRecaptcha";
import {
  markGrowLeadVerified,
  pushGrowDataLayer,
  safeTrackCustom,
} from "@/lib/growFunnel";

type StepKey =
  | "contractor"
  | "company"
  | "website"
  | "channels"
  | "revenue"
  | "budget"
  | "checking"
  | "qualified"
  | "contact"
  | "disqualified";


const contractorOptions = ["HVAC", "Plumbing", "Both HVAC and Plumbing"];

const channelOptions = [
  "Google Local Service Ads",
  "Google Ads",
  "Social Media Ads",
  "Yelp Ads",
  "SEO",
  "Customer Database Marketing (text and email)",
  "Lead Vendors (Angi, Thumbtack, etc.)",
  "Direct Mail",
  "Community Marketing (billboards, little league, etc.)",
  "Other",
];

const revenueOptions = [
  { value: "under_500k", label: "Less than $500k" },
  { value: "500k_1mm", label: "Between $500k and $1mm" },
  { value: "1mm_5mm", label: "Between $1mm and $5mm" },
  { value: "5mm_10mm", label: "Between $5mm and $10mm" },
  { value: "10mm_plus", label: "Greater than $10mm" },
];

const budgetOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const stepNumberMap: Partial<Record<StepKey, number>> = {
  contractor: 1,
  company: 2,
  website: 3,
  channels: 4,
  revenue: 5,
  budget: 6,
  contact: 7,
};

const totalSteps = 7;

const reviews: Record<StepKey, { quote: string; attribution: string } | null> = {
  contractor: {
    quote: "We have a plan, data to back it up, and a partner who keeps us accountable.",
    attribution: "Pure Plumbing & Air",
  },
  company: {
    quote: "We saw a 40% year-over-year revenue increase this past December.",
    attribution: "Pure Plumbing & Air",
  },
  website: {
    quote: "He has completely transformed our SEO performance with a roadmap that is not only strategic, but clearly tailored to our business.",
    attribution: "Pure Plumbing & Air",
  },
  channels: {
    quote: "After past experiences with agencies where SEO felt like a black box, it's refreshing to work with a team that provides real, clear data.",
    attribution: "Pure Plumbing & Air",
  },
  revenue: {
    quote: "After past experiences with agencies where SEO felt like a black box, it's refreshing to work with a team that provides real, clear data.",
    attribution: "Pure Plumbing & Air",
  },
  budget: {
    quote: "In a market as competitive as Dallas, having a strategic and trustworthy SEO partner like this makes all the difference.",
    attribution: "Pure Plumbing",
  },
  checking: null,
  qualified: {
    quote: "In a market as competitive as Dallas, having a strategic and trustworthy SEO partner like this makes all the difference.",
    attribution: "Pure Plumbing",
  },
  contact: {
    quote: "We have a plan, data to back it up, and a partner who keeps us accountable.",
    attribution: "Pure Plumbing & Air",
  },
  disqualified: null,
};


const letter = (i: number) => String.fromCharCode(65 + i);

const GrowthQualifierFlow = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { executeRecaptcha, initRecaptcha } = useRecaptcha();

  const [step, setStep] = useState<StepKey>("contractor");
  const [history, setHistory] = useState<StepKey[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [contractor, setContractor] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [website, setWebsite] = useState("");
  const [channels, setChannels] = useState<string[]>([]);
  const [revenueBand, setRevenueBand] = useState("");
  const [canInvest, setCanInvest] = useState<"yes" | "no" | "">("");
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    phoneCountryCode: "+1",
    honeypot: "",
  });

  useEffect(() => {
    pushGrowDataLayer("grow_funnel_start", { funnel: "grow_qualifier" });
    safeTrackCustom("GrowFunnelStart", { funnel: "grow_qualifier" });
  }, []);

  useEffect(() => {
    if (step === "disqualified") {
      pushGrowDataLayer("grow_funnel_disqualified", { funnel: "grow_qualifier", revenueBand, canInvest });
      safeTrackCustom("GrowFunnelAbandon", { funnel: "grow_qualifier", step: "budget" });
      return;
    }
    pushGrowDataLayer("grow_funnel_step", { funnel: "grow_qualifier", step });
    safeTrackCustom("GrowFunnelStep", { funnel: "grow_qualifier", step });
  }, [step, revenueBand, canInvest]);

  const moveTo = (next: StepKey) => {
    setHistory((prev) => [...prev, step]);
    setStep(next);
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

  const currentNumber = stepNumberMap[step];
  const progress = currentNumber ? (currentNumber / totalSteps) * 100 : step === "qualified" ? (6.5 / totalSteps) * 100 : 100;

  const handleRevenueContinue = () => {
    if (!revenueBand) return;
    if (revenueBand === "under_500k") {
      moveTo("budget");
      return;
    }
    moveTo("checking");
  };

  const handleBudgetContinue = () => {
    if (!canInvest) return;
    if (canInvest === "yes") {
      moveTo("checking");
      return;
    }
    moveTo("disqualified");
  };

  // Auto-advance the "Double-checking your market" interstitial
  const [checkingProgress, setCheckingProgress] = useState(0);
  useEffect(() => {
    if (step !== "checking") return;
    setCheckingProgress(0);
    const start = Date.now();
    const duration = 2800;
    const interval = setInterval(() => {
      const pct = Math.min(100, ((Date.now() - start) / duration) * 100);
      setCheckingProgress(pct);
      if (pct >= 100) {
        clearInterval(interval);
        setStep("qualified");
        setHistory((prev) => [...prev, "checking"]);
      }
    }, 60);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const checkingMessage =
    checkingProgress < 33
      ? "Scanning your service area..."
      : checkingProgress < 66
        ? "Checking competitor saturation..."
        : checkingProgress < 95
          ? "Confirming market availability..."
          : "Almost there...";

  const companyDisplay = companyName.trim() || "your shop";


  const submitLead = async () => {
    if (contact.honeypot) {
      navigate("/grow/thanks");
      return;
    }
    if (!contact.firstName.trim() || !contact.lastName.trim() || !contact.email.trim()) {
      toast({ title: "Missing required fields", description: "Name and email are required.", variant: "destructive" });
      return;
    }
    if (!isValidPhone(contact.phone, contact.phoneCountryCode)) {
      toast({ title: "Valid phone number required", description: "Please enter a valid phone number so we can text you about your market.", variant: "destructive" });
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
          website,
          company: companyName,
          contractorTypes: [contractor],
          marketingChannels: channels,
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
    } catch (err) {
      console.error("Growth qualifier submit error:", err);
      toast({ title: "Something went wrong", description: "Please try again or call us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const onEnter = (e: KeyboardEvent, fn: () => void) => {
    if (e.key === "Enter") {
      e.preventDefault();
      fn();
    }
  };

  const review = reviews[step];

  const QuestionHeader = ({ num, title, subtitle, required = true }: { num?: number; title: string; subtitle?: string; required?: boolean }) => (
    <div className="mb-8 flex items-start gap-4">
      {num ? (
        <span className="mt-2 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#E63946] text-base font-bold text-white">
          {num}
        </span>
      ) : (
        <Quote className="mt-2 h-8 w-8 shrink-0 text-[#E63946]" aria-hidden="true" />
      )}
      <div>
        <h2 className="text-2xl font-bold leading-tight text-white md:text-3xl">
          {title}
          {required ? <span className="ml-1 text-[#E63946]">*</span> : null}
        </h2>
        {subtitle ? <p className="mt-3 text-sm text-white/70 md:text-base">{subtitle}</p> : null}
      </div>
    </div>
  );

  const ChoiceButton = ({
    index,
    label,
    selected,
    onClick,
  }: {
    index: number;
    label: string;
    selected: boolean;
    onClick: () => void;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`group flex w-full items-center gap-3 rounded-full border px-4 py-3 text-left text-base transition-all md:text-lg ${
        selected
          ? "border-[#E63946] bg-[#E63946]/15 text-white"
          : "border-white/15 bg-white/[0.03] text-white/90 hover:border-[#E63946]/60 hover:bg-white/[0.06]"
      }`}
    >
      <span
        className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
          selected ? "bg-[#E63946] text-white" : "bg-white/10 text-white/80 group-hover:bg-[#E63946]/30"
        }`}
      >
        {letter(index)}
      </span>
      <span>{label}</span>
    </button>
  );

  const SubmitRow = ({ label = "OK", onClick, disabled = false, showEnter = true }: { label?: string; onClick: () => void; disabled?: boolean; showEnter?: boolean }) => (
    <div className="mt-8 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onClick}
          disabled={disabled}
          className="inline-flex items-center gap-2 rounded-full bg-[#E63946] px-7 py-3 text-base font-bold text-white shadow-lg transition-colors hover:bg-[#d32f3c] disabled:cursor-not-allowed disabled:opacity-40"
        >
          {label}
          <ArrowRight className="h-4 w-4" />
        </button>
        {showEnter ? (
          <span className="text-sm text-white/60">
            press <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-xs font-medium text-white/80">Enter</kbd>
          </span>
        ) : null}
      </div>
      {history.length > 0 ? (
        <button type="button" onClick={goBack} className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white">
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
      ) : null}
    </div>
  );

  return (
    <div className="relative min-h-screen bg-[#0D1B2A] text-white">
      {/* Top progress bar */}
      <div className="fixed left-0 right-0 top-0 z-50 h-1 bg-white/10">
        <div
          className="h-full bg-[#E63946] transition-all duration-300"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: "radial-gradient(60% 50% at 50% 0%, rgba(74, 144, 184, 0.18) 0%, rgba(13, 27, 42, 0) 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-3xl px-5 py-16 md:px-8 md:py-24">
        {/* STEP 1 contractor */}
        {step === "contractor" ? (
          <div>
            <QuestionHeader num={1} title="First things first: are you Plumbing, HVAC, or both?" subtitle="We only work with Plumbing and HVAC shops. Pick what fits." />
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Pick one</p>
            <div className="space-y-3">
              {contractorOptions.map((opt, i) => (
                <ChoiceButton
                  key={opt}
                  index={i}
                  label={opt}
                  selected={contractor === opt}
                  onClick={() => {
                    setContractor(opt);
                  }}
                />
              ))}
            </div>
            <SubmitRow onClick={() => contractor && moveTo("company")} disabled={!contractor} />
          </div>
        ) : null}

        {/* STEP 2 company */}
        {step === "company" ? (
          <div>
            <QuestionHeader num={2} title="What's the name of your shop?" subtitle="The one on the side of the truck." />
            <input
              autoFocus
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              onKeyDown={(e) => onEnter(e, () => companyName.trim() && moveTo("website"))}
              placeholder="Acme Plumbing"
              className="w-full border-0 border-b-2 border-[#E63946] bg-transparent px-0 py-3 text-2xl font-medium text-white placeholder:text-white/30 focus:border-[#E63946] focus:outline-none focus:ring-0 md:text-3xl"
            />
            <SubmitRow onClick={() => companyName.trim() && moveTo("website")} disabled={!companyName.trim()} />
          </div>
        ) : null}

        {/* STEP 3 website */}
        {step === "website" ? (
          <div>
            <QuestionHeader
              num={3}
              title={`Nice. Where can homeowners find ${companyDisplay} online?`}
              subtitle="Drop your main site so we can peek at your current presence."
            />
            <input
              autoFocus
              type="text"
              value={website}
              onFocus={initRecaptcha}
              onChange={(e) => setWebsite(e.target.value)}
              onKeyDown={(e) => onEnter(e, () => website.trim() && moveTo("channels"))}
              placeholder="acmeplumbing.com"
              className="w-full border-0 border-b-2 border-[#E63946] bg-transparent px-0 py-3 text-2xl font-medium text-white placeholder:text-white/30 focus:outline-none focus:ring-0 md:text-3xl"
            />
            <SubmitRow onClick={() => website.trim() && moveTo("channels")} disabled={!website.trim()} />
          </div>
        ) : null}

        {/* STEP 4 channels */}
        {step === "channels" ? (
          <div>
            <QuestionHeader
              num={4}
              title={`How is ${companyDisplay} getting calls today?`}
              subtitle="Pick everything you're running. No judgment if the list is short."
            />
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Choose as many as you like</p>
            <div className="space-y-3">
              {channelOptions.map((opt, i) => (
                <ChoiceButton
                  key={opt}
                  index={i}
                  label={opt}
                  selected={channels.includes(opt)}
                  onClick={() =>
                    setChannels((prev) => (prev.includes(opt) ? prev.filter((c) => c !== opt) : [...prev, opt]))
                  }
                />
              ))}
            </div>
            <SubmitRow onClick={() => channels.length > 0 && moveTo("revenue")} disabled={channels.length === 0} />
          </div>
        ) : null}

        {/* STEP 5 revenue */}
        {step === "revenue" ? (
          <div>
            <QuestionHeader num={5} title="What did the last 12 months look like?" subtitle="Ballpark is fine. We tailor the plan to your size and goals." />
            <div className="space-y-3">
              {revenueOptions.map((opt, i) => (
                <ChoiceButton
                  key={opt.value}
                  index={i}
                  label={opt.label}
                  selected={revenueBand === opt.value}
                  onClick={() => setRevenueBand(opt.value)}
                />
              ))}
            </div>
            <SubmitRow onClick={handleRevenueContinue} disabled={!revenueBand} />
          </div>
        ) : null}

        {/* STEP 6 budget gate */}
        {step === "budget" ? (
          <div>
            <QuestionHeader num={6} title="Can you put at least $1,000/month into growth right now?" subtitle="Straight talk: that's where our partnerships start." />
            <div className="space-y-3">
              {budgetOptions.map((opt, i) => (
                <ChoiceButton
                  key={opt.value}
                  index={i}
                  label={opt.label}
                  selected={canInvest === opt.value}
                  onClick={() => setCanInvest(opt.value as "yes" | "no")}
                />
              ))}
            </div>
            <SubmitRow onClick={handleBudgetContinue} disabled={!canInvest} />
          </div>
        ) : null}

        {/* CHECKING interstitial */}
        {step === "checking" ? (
          <div className="py-8 animate-fade-in">
            <div className="mb-8 flex items-baseline gap-4">
              <span className="text-5xl font-bold text-white md:text-6xl">{Math.round(checkingProgress)}%</span>
              <div className="flex-1 h-3 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-[#E63946] transition-all duration-150 ease-out"
                  style={{ width: `${checkingProgress}%` }}
                />
              </div>
            </div>
            <p className="text-xl font-medium text-white/90 md:text-2xl">{checkingMessage}</p>
            <p className="mt-3 text-sm text-white/60">Hang tight, this only takes a second.</p>
          </div>
        ) : null}

        {/* QUALIFIED interstitial */}
        {step === "qualified" ? (
          <div>
            <QuestionHeader
              title={`Good news. ${companyDisplay} looks like a fit. Let's lock in your spot.`}
              required={false}
            />
            <SubmitRow label="Continue" onClick={() => moveTo("contact")} />
          </div>
        ) : null}


        {/* STEP 7 contact */}
        {step === "contact" ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              void submitLead();
            }}
          >
            <QuestionHeader num={7} title={`Last step. How do we reach the person running ${companyDisplay}?`} subtitle="We'll never spam or share your info. This just helps us prep for your call." />

            <input
              type="text"
              name="company_url"
              value={contact.honeypot}
              onChange={(e) => setContact((p) => ({ ...p, honeypot: e.target.value }))}
              className="absolute -left-[9999px] opacity-0"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="space-y-6">
              <div>
                <label className="mb-1 block text-sm font-semibold text-white">
                  First name<span className="text-[#E63946]">*</span>
                </label>
                <input
                  required
                  autoFocus
                  type="text"
                  value={contact.firstName}
                  onChange={(e) => setContact((p) => ({ ...p, firstName: e.target.value }))}
                  placeholder="Jane"
                  className="w-full border-0 border-b-2 border-white/30 bg-transparent px-0 py-2 text-xl text-white placeholder:text-white/30 focus:border-[#E63946] focus:outline-none focus:ring-0 md:text-2xl"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-white">
                  Last name<span className="text-[#E63946]">*</span>
                </label>
                <input
                  required
                  type="text"
                  value={contact.lastName}
                  onChange={(e) => setContact((p) => ({ ...p, lastName: e.target.value }))}
                  placeholder="Smith"
                  className="w-full border-0 border-b-2 border-white/30 bg-transparent px-0 py-2 text-xl text-white placeholder:text-white/30 focus:border-[#E63946] focus:outline-none focus:ring-0 md:text-2xl"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-white">
                  Phone<span className="text-[#E63946]">*</span>
                </label>
                <PhoneInput
                  value={contact.phone}
                  onChange={(phone) => setContact((p) => ({ ...p, phone }))}
                  countryCode={contact.phoneCountryCode}
                  onCountryCodeChange={(code) => setContact((p) => ({ ...p, phoneCountryCode: code }))}
                  required
                />
                <SmsConsentSummary
                  className="mt-3 flex items-start gap-2 rounded-md border border-white/20 bg-white/[0.07] px-3 py-2.5"
                  textClassName="text-[13px] leading-relaxed text-white/90"
                  iconClassName="h-4 w-4 mt-0.5 shrink-0 text-white/80"
                  linkClassName="underline font-medium text-white hover:opacity-80"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-white">
                  Email<span className="text-[#E63946]">*</span>
                </label>
                <input
                  required
                  type="email"
                  value={contact.email}
                  onChange={(e) => setContact((p) => ({ ...p, email: e.target.value }))}
                  placeholder="name@example.com"
                  className="w-full border-0 border-b-2 border-white/30 bg-transparent px-0 py-2 text-xl text-white placeholder:text-white/30 focus:border-[#E63946] focus:outline-none focus:ring-0 md:text-2xl"
                />
              </div>
            </div>

            <SmsConsentText
              className="mt-6 text-[13px] leading-relaxed text-white/85"
              linkClassName="underline font-medium text-white hover:opacity-80"
            />

            <div className="mt-8 flex items-center justify-between gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-full bg-[#E63946] px-7 py-3 text-base font-bold text-white shadow-lg transition-colors hover:bg-[#d32f3c] disabled:cursor-not-allowed disabled:opacity-40"
              >
                {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                Submit
                <ArrowRight className="h-4 w-4" />
              </button>
              {history.length > 0 ? (
                <button type="button" onClick={goBack} className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white">
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>
              ) : null}
            </div>
          </form>
        ) : null}

        {/* DISQUALIFIED */}
        {step === "disqualified" ? (
          <div>
            <QuestionHeader title="We're sorry but, at this time, we do not have a service for you." required={false} />
            <p className="text-base text-white/70">Our partnerships start at $1,000/month in growth investment.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => navigate("/grow-qualifier")}
                className="inline-flex items-center gap-2 rounded-full bg-[#E63946] px-7 py-3 text-base font-bold text-white shadow-lg transition-colors hover:bg-[#d32f3c]"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => {
                  setHistory([]);
                  setStep("contractor");
                  setRevenueBand("");
                  setCanInvest("");
                }}
                className="text-sm font-medium text-white/70 hover:text-white"
              >
                Start over
              </button>
            </div>
          </div>
        ) : null}

        {/* Review card */}
        {review ? (
          <div className="mt-12 max-w-xl rounded-md border border-white/10 bg-white/[0.04] p-5">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-white/70">Google review</span>
            </div>
            <p className="text-sm text-white/90 md:text-base">&ldquo;{review.quote}&rdquo;</p>
            <p className="mt-3 text-xs text-white/60">{review.attribution} &middot; Google Review</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default GrowthQualifierFlow;
