import { useState } from "react";
import { MapPin, Building, Globe, FileText, Search, MousePointerClick, Mail, Award, ArrowRight, ArrowLeft, Calculator, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

type Step = 1 | 2 | 3 | 4;

interface FormData {
  // Step 1: Client Profile
  locations: string;
  competition: string;
  market: string;
  
  // Step 2: Current Assets
  websiteAge: string;
  contentStatus: string;
  gbpStatus: string;
  citationHealth: string;
  
  // Step 3: Services
  services: string[];
}

const initialFormData: FormData = {
  locations: "",
  competition: "",
  market: "",
  websiteAge: "",
  contentStatus: "",
  gbpStatus: "",
  citationHealth: "",
  services: []
};

// Base pricing and multipliers
const baseServicePricing: Record<string, { base: number; label: string }> = {
  localSeo: { base: 800, label: "Local SEO" },
  gbp: { base: 400, label: "Google Business Profile" },
  googleAds: { base: 600, label: "Google Ads" },
  metaAds: { base: 600, label: "Meta Ads" },
  email: { base: 500, label: "Email Marketing" },
  authority: { base: 700, label: "Authority Building" }
};

const multipliers = {
  locations: { "1": 1, "2-5": 1.8, "6-20": 3, "20+": 5 },
  competition: { low: 0.8, moderate: 1, high: 1.3, "hyper-competitive": 1.6 },
  market: { "small-town": 0.8, metro: 1, "multi-city": 1.4 },
  websiteAge: { new: 1.3, "1-3": 1.1, "3+": 1 },
  contentStatus: { none: 1.3, some: 1.1, substantial: 1 },
  gbpStatus: { unclaimed: 1.2, basic: 1.1, optimized: 1 },
  citationHealth: { unknown: 1.15, messy: 1.2, clean: 1 }
};

const InboundCalculator = () => {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [showResults, setShowResults] = useState(false);

  const updateField = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.locations && formData.competition && formData.market;
      case 2:
        return formData.websiteAge && formData.contentStatus && formData.gbpStatus && formData.citationHealth;
      case 3:
        return formData.services.length > 0;
      default:
        return true;
    }
  };

  const calculateEstimate = () => {
    const locMult = multipliers.locations[formData.locations as keyof typeof multipliers.locations] || 1;
    const compMult = multipliers.competition[formData.competition as keyof typeof multipliers.competition] || 1;
    const marketMult = multipliers.market[formData.market as keyof typeof multipliers.market] || 1;
    const webMult = multipliers.websiteAge[formData.websiteAge as keyof typeof multipliers.websiteAge] || 1;
    const contentMult = multipliers.contentStatus[formData.contentStatus as keyof typeof multipliers.contentStatus] || 1;
    const gbpMult = multipliers.gbpStatus[formData.gbpStatus as keyof typeof multipliers.gbpStatus] || 1;
    const citMult = multipliers.citationHealth[formData.citationHealth as keyof typeof multipliers.citationHealth] || 1;

    const complexityMultiplier = (compMult + marketMult + webMult + contentMult + gbpMult + citMult) / 6;
    
    let totalLow = 0;
    let totalHigh = 0;
    const breakdown: { service: string; low: number; high: number }[] = [];

    formData.services.forEach(service => {
      const pricing = baseServicePricing[service];
      if (pricing) {
        const low = Math.round(pricing.base * locMult * complexityMultiplier * 0.85 / 50) * 50;
        const high = Math.round(pricing.base * locMult * complexityMultiplier * 1.25 / 50) * 50;
        totalLow += low;
        totalHigh += high;
        breakdown.push({ service: pricing.label, low, high });
      }
    });

    return { totalLow, totalHigh, breakdown };
  };

  const handleNext = () => {
    if (step < 3) {
      setStep((step + 1) as Step);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (showResults) {
      setShowResults(false);
    } else if (step > 1) {
      setStep((step - 1) as Step);
    }
  };

  const resetCalculator = () => {
    setFormData(initialFormData);
    setStep(1);
    setShowResults(false);
  };

  const OptionButton = ({ 
    selected, 
    onClick, 
    children 
  }: { 
    selected: boolean; 
    onClick: () => void; 
    children: React.ReactNode;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "px-4 py-3 rounded-lg border text-sm font-medium transition-all text-left",
        selected
          ? "bg-cta/10 border-cta text-cta"
          : "bg-surface-elevated border-border/50 text-text-secondary hover:border-accent-blue/50 hover:text-foreground"
      )}
    >
      {children}
    </button>
  );

  const ServiceCheckbox = ({ 
    service, 
    icon: Icon, 
    label 
  }: { 
    service: string; 
    icon: React.ElementType; 
    label: string;
  }) => (
    <button
      type="button"
      onClick={() => toggleService(service)}
      className={cn(
        "flex items-center gap-3 px-4 py-4 rounded-xl border text-left transition-all",
        formData.services.includes(service)
          ? "bg-cta/10 border-cta"
          : "bg-surface-elevated border-border/50 hover:border-accent-blue/50"
      )}
    >
      <div className={cn(
        "w-10 h-10 rounded-lg flex items-center justify-center",
        formData.services.includes(service) ? "bg-cta/20" : "bg-accent-blue/10"
      )}>
        <Icon className={cn(
          "h-5 w-5",
          formData.services.includes(service) ? "text-cta" : "text-accent-blue"
        )} />
      </div>
      <span className={cn(
        "font-medium",
        formData.services.includes(service) ? "text-cta" : "text-foreground"
      )}>
        {label}
      </span>
    </button>
  );

  const estimate = showResults ? calculateEstimate() : null;

  return (
    <section className="py-20 lg:py-28 bg-surface-dark relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cta/10 text-cta text-sm font-medium mb-4">
              <Calculator className="h-4 w-4" />
              Investment Calculator
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Estimate Your Monthly Investment
            </h2>
            <p className="text-text-secondary text-lg">
              Answer a few questions about your client to get a ballpark range. Final pricing is scoped per engagement.
            </p>
          </div>

          {/* Progress Bar */}
          {!showResults && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-text-muted">Step {step} of 3</span>
                <span className="text-sm text-text-muted">{Math.round((step / 3) * 100)}%</span>
              </div>
              <div className="h-2 bg-surface-elevated rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-accent-blue to-cta transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Calculator Card */}
          <div className="bg-surface-elevated border border-border/50 rounded-2xl p-6 md:p-8">
            
            {/* Step 1: Client Profile */}
            {step === 1 && !showResults && (
              <div className="space-y-6">
                <div>
                  <label className="block text-foreground font-medium mb-3">
                    How many locations does this client have?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { value: "1", label: "1 location" },
                      { value: "2-5", label: "2-5 locations" },
                      { value: "6-20", label: "6-20 locations" },
                      { value: "20+", label: "20+ locations" }
                    ].map(opt => (
                      <OptionButton
                        key={opt.value}
                        selected={formData.locations === opt.value}
                        onClick={() => updateField("locations", opt.value)}
                      >
                        {opt.label}
                      </OptionButton>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-3">
                    How competitive is their market?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: "low", label: "Low competition", desc: "Few local competitors" },
                      { value: "moderate", label: "Moderate", desc: "Average competition" },
                      { value: "high", label: "High competition", desc: "Many strong competitors" },
                      { value: "hyper-competitive", label: "Hyper-competitive", desc: "Saturated market" }
                    ].map(opt => (
                      <OptionButton
                        key={opt.value}
                        selected={formData.competition === opt.value}
                        onClick={() => updateField("competition", opt.value)}
                      >
                        <div>
                          <div>{opt.label}</div>
                          <div className="text-xs text-text-muted mt-0.5">{opt.desc}</div>
                        </div>
                      </OptionButton>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-3">
                    What type of market are they in?
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: "small-town", label: "Small town" },
                      { value: "metro", label: "Metro area" },
                      { value: "multi-city", label: "Multi-city" }
                    ].map(opt => (
                      <OptionButton
                        key={opt.value}
                        selected={formData.market === opt.value}
                        onClick={() => updateField("market", opt.value)}
                      >
                        {opt.label}
                      </OptionButton>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Current Assets */}
            {step === 2 && !showResults && (
              <div className="space-y-6">
                <div>
                  <label className="block text-foreground font-medium mb-3">
                    How old is their website?
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: "new", label: "New / None", desc: "< 1 year" },
                      { value: "1-3", label: "Established", desc: "1-3 years" },
                      { value: "3+", label: "Mature", desc: "3+ years" }
                    ].map(opt => (
                      <OptionButton
                        key={opt.value}
                        selected={formData.websiteAge === opt.value}
                        onClick={() => updateField("websiteAge", opt.value)}
                      >
                        <div>
                          <div>{opt.label}</div>
                          <div className="text-xs text-text-muted mt-0.5">{opt.desc}</div>
                        </div>
                      </OptionButton>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-3">
                    What's their existing content situation?
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: "none", label: "Little/None" },
                      { value: "some", label: "Some content" },
                      { value: "substantial", label: "Substantial" }
                    ].map(opt => (
                      <OptionButton
                        key={opt.value}
                        selected={formData.contentStatus === opt.value}
                        onClick={() => updateField("contentStatus", opt.value)}
                      >
                        {opt.label}
                      </OptionButton>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-3">
                    Google Business Profile status?
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: "unclaimed", label: "Unclaimed/New" },
                      { value: "basic", label: "Basic setup" },
                      { value: "optimized", label: "Well optimized" }
                    ].map(opt => (
                      <OptionButton
                        key={opt.value}
                        selected={formData.gbpStatus === opt.value}
                        onClick={() => updateField("gbpStatus", opt.value)}
                      >
                        {opt.label}
                      </OptionButton>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-3">
                    Citation/directory health?
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: "unknown", label: "Unknown" },
                      { value: "messy", label: "Messy/Inconsistent" },
                      { value: "clean", label: "Clean/Consistent" }
                    ].map(opt => (
                      <OptionButton
                        key={opt.value}
                        selected={formData.citationHealth === opt.value}
                        onClick={() => updateField("citationHealth", opt.value)}
                      >
                        {opt.label}
                      </OptionButton>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Services */}
            {step === 3 && !showResults && (
              <div className="space-y-6">
                <div>
                  <label className="block text-foreground font-medium mb-3">
                    Which services does this client need?
                  </label>
                  <p className="text-text-muted text-sm mb-4">Select all that apply</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <ServiceCheckbox service="localSeo" icon={Search} label="Local SEO" />
                    <ServiceCheckbox service="gbp" icon={MapPin} label="Google Business Profile" />
                    <ServiceCheckbox service="googleAds" icon={MousePointerClick} label="Google Ads" />
                    <ServiceCheckbox service="metaAds" icon={Globe} label="Meta Ads" />
                    <ServiceCheckbox service="email" icon={Mail} label="Email Marketing" />
                    <ServiceCheckbox service="authority" icon={Award} label="Authority Building" />
                  </div>
                </div>
              </div>
            )}

            {/* Results */}
            {showResults && estimate && (
              <div className="space-y-6">
                <div className="text-center pb-6 border-b border-border/30">
                  <p className="text-text-muted text-sm uppercase tracking-wider mb-2">Estimated Monthly Investment</p>
                  <p className="text-4xl md:text-5xl font-bold text-foreground">
                    ${estimate.totalLow.toLocaleString()} – ${estimate.totalHigh.toLocaleString()}
                  </p>
                  <p className="text-text-muted text-sm mt-2">per month</p>
                </div>

                <div>
                  <p className="text-foreground font-medium mb-4">Breakdown by Service</p>
                  <div className="space-y-3">
                    {estimate.breakdown.map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-between py-3 border-b border-border/20 last:border-0"
                      >
                        <span className="text-text-secondary">{item.service}</span>
                        <span className="text-foreground font-medium">
                          ${item.low.toLocaleString()} – ${item.high.toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-4">
                  <p className="text-sm text-text-secondary">
                    <strong className="text-foreground">Note:</strong> This is a ballpark estimate based on typical engagements. 
                    Final pricing depends on detailed scope, specific goals, and timeline. Let's talk to get a precise quote.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <a 
                    href="#contact" 
                    className="btn-cta group flex items-center gap-2 w-full sm:w-auto justify-center"
                  >
                    Get a Precise Quote
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a 
                    href="tel:2143072995"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-text-secondary hover:text-foreground hover:border-border-subtle transition-colors font-medium text-sm"
                  >
                    <Phone className="h-4 w-4" />
                    (214) 307-2995
                  </a>
                </div>

                <button
                  onClick={resetCalculator}
                  className="w-full text-center text-sm text-text-muted hover:text-foreground transition-colors"
                >
                  Start over with different inputs
                </button>
              </div>
            )}

            {/* Navigation */}
            {!showResults && (
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/30">
                <button
                  onClick={handleBack}
                  disabled={step === 1}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    step === 1
                      ? "text-text-muted cursor-not-allowed"
                      : "text-text-secondary hover:text-foreground"
                  )}
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>

                <button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className={cn(
                    "flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all",
                    canProceed()
                      ? "bg-cta text-white hover:bg-cta/90"
                      : "bg-surface-dark text-text-muted cursor-not-allowed"
                  )}
                >
                  {step === 3 ? "Calculate Estimate" : "Next"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InboundCalculator;
