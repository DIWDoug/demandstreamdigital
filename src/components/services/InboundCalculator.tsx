import { useState, useMemo } from "react";
import { MapPin, Building, Globe, FileText, Search, MousePointerClick, Mail, Award, ArrowRight, ArrowLeft, Calculator, Phone, ChevronDown, Check, Users, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { metros, searchMetros, formatPopulation, tierMultipliers, type Metro } from "@/data/metros";
import { industries, getIndustriesByCategory, getCpcMultiplier, getSeoComplexityMultiplier, competitionMultipliers, type Industry } from "@/data/industries";

type Step = 1 | 2 | 3 | 4;

interface FormData {
  // Step 1: Market Profile
  metro: Metro | null;
  industry: Industry | null;
  locations: string;
  
  // Step 2: Digital Presence
  websiteAge: string;
  websiteAuthority: string;
  gbpStatus: string;
  citationHealth: string;
  
  // Step 3: Current Marketing
  socialMedia: string;
  existingAds: string;
  contentStatus: string;
  emailList: string;
  
  // Step 4: Services
  services: string[];
}

const initialFormData: FormData = {
  metro: null,
  industry: null,
  locations: "",
  websiteAge: "",
  websiteAuthority: "",
  gbpStatus: "",
  citationHealth: "",
  socialMedia: "",
  existingAds: "",
  contentStatus: "",
  emailList: "",
  services: []
};

// Pricing configuration
const OEM_HOURLY_RATE = 50; // Partner/wholesale rate
const MSRP_MARKUP = 1.75;   // Suggested 75% markup for client pricing
const MIN_MONTHLY = 500;    // Minimum monthly for small markets

// Base hours per month for services
const baseServiceHours: Record<string, { hours: number; label: string }> = {
  localSeo: { hours: 10, label: "Local SEO" },
  gbp: { hours: 5, label: "Google Business Profile" },
  googleAds: { hours: 8, label: "Google Ads" },
  metaAds: { hours: 7, label: "Meta Ads" },
  email: { hours: 6, label: "Email Marketing" },
  authority: { hours: 8, label: "Authority Building" }
};

const InboundCalculator = () => {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [showResults, setShowResults] = useState(false);
  const [metroSearch, setMetroSearch] = useState("");
  const [showMetroDropdown, setShowMetroDropdown] = useState(false);
  const [showIndustryDropdown, setShowIndustryDropdown] = useState(false);

  const filteredMetros = useMemo(() => searchMetros(metroSearch), [metroSearch]);
  const industriesByCategory = useMemo(() => getIndustriesByCategory(), []);

  const updateField = <K extends keyof FormData>(field: K, value: FormData[K]) => {
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
        return formData.metro && formData.industry && formData.locations;
      case 2:
        return formData.websiteAge && formData.websiteAuthority && formData.gbpStatus && formData.citationHealth;
      case 3:
        return formData.socialMedia && formData.existingAds && formData.contentStatus && formData.emailList;
      case 4:
        return formData.services.length > 0;
      default:
        return true;
    }
  };

  const calculateEstimate = () => {
    if (!formData.metro || !formData.industry) return null;

    // Location multipliers
    const tierMult = tierMultipliers[formData.metro.tier];
    const locMult = { "1": 1, "2-5": 1.8, "6-20": 3, "20+": 5 }[formData.locations] || 1;
    
    // Industry multipliers
    const cpcMult = getCpcMultiplier(formData.industry.avgCpc);
    const seoMult = getSeoComplexityMultiplier(formData.industry.seoComplexity);
    const compMult = competitionMultipliers[formData.industry.competition];
    
    // Asset multipliers
    const webAgeMult = { "new": 1.3, "1-3": 1.1, "3+": 1 }[formData.websiteAge] || 1;
    const webAuthMult = { "low": 1.25, "medium": 1.1, "high": 1 }[formData.websiteAuthority] || 1;
    const gbpMult = { "unclaimed": 1.2, "basic": 1.1, "optimized": 1 }[formData.gbpStatus] || 1;
    const citMult = { "unknown": 1.15, "messy": 1.2, "clean": 1 }[formData.citationHealth] || 1;
    
    // Marketing status multipliers
    const socialMult = { "none": 1.15, "dormant": 1.05, "active": 1 }[formData.socialMedia] || 1;
    const adsMult = { "none": 1.1, "paused": 1.05, "running": 1 }[formData.existingAds] || 1;
    const contentMult = { "none": 1.3, "minimal": 1.15, "substantial": 1 }[formData.contentStatus] || 1;
    const emailMult = { "none": 1.15, "small": 1.05, "established": 1 }[formData.emailList] || 1;

    // Calculate combined multipliers by service type
    const seoMultiplier = (tierMult + seoMult + compMult + webAgeMult + webAuthMult + citMult + contentMult) / 7;
    const gbpMultiplier = (tierMult + compMult + gbpMult + citMult) / 4;
    const adsMultiplier = (tierMult + cpcMult + compMult + adsMult) / 4;
    const socialMultiplier = (tierMult + socialMult + contentMult) / 3;
    const emailMultiplier = (emailMult + contentMult) / 2;
    const authorityMultiplier = (tierMult + compMult + webAuthMult + contentMult) / 4;

    const serviceMultipliers: Record<string, number> = {
      localSeo: seoMultiplier,
      gbp: gbpMultiplier,
      googleAds: adsMultiplier,
      metaAds: socialMultiplier,
      email: emailMultiplier,
      authority: authorityMultiplier
    };

    let totalHoursLow = 0;
    let totalHoursHigh = 0;
    const breakdown: { service: string; hoursLow: number; hoursHigh: number; oemLow: number; oemHigh: number; msrpLow: number; msrpHigh: number }[] = [];

    formData.services.forEach(service => {
      const serviceData = baseServiceHours[service];
      const mult = serviceMultipliers[service] || 1;
      if (serviceData) {
        const hoursLow = Math.round(serviceData.hours * locMult * mult * 0.85 * 10) / 10;
        const hoursHigh = Math.round(serviceData.hours * locMult * mult * 1.25 * 10) / 10;
        const oemLow = Math.round(hoursLow * OEM_HOURLY_RATE / 25) * 25;
        const oemHigh = Math.round(hoursHigh * OEM_HOURLY_RATE / 25) * 25;
        const msrpLow = Math.round(oemLow * MSRP_MARKUP / 25) * 25;
        const msrpHigh = Math.round(oemHigh * MSRP_MARKUP / 25) * 25;
        totalHoursLow += hoursLow;
        totalHoursHigh += hoursHigh;
        breakdown.push({ service: serviceData.label, hoursLow, hoursHigh, oemLow, oemHigh, msrpLow, msrpHigh });
      }
    });

    // Calculate totals with minimum floor for small markets
    let oemTotalLow = Math.round(totalHoursLow * OEM_HOURLY_RATE / 25) * 25;
    let oemTotalHigh = Math.round(totalHoursHigh * OEM_HOURLY_RATE / 25) * 25;
    
    // Apply minimum for small markets
    if (formData.metro?.tier === 'small') {
      oemTotalLow = Math.max(oemTotalLow, MIN_MONTHLY);
    }
    
    const msrpTotalLow = Math.round(oemTotalLow * MSRP_MARKUP / 25) * 25;
    const msrpTotalHigh = Math.round(oemTotalHigh * MSRP_MARKUP / 25) * 25;

    return { 
      oemLow: oemTotalLow, 
      oemHigh: oemTotalHigh,
      msrpLow: msrpTotalLow,
      msrpHigh: msrpTotalHigh,
      totalHoursLow,
      totalHoursHigh,
      breakdown,
      hourlyRate: OEM_HOURLY_RATE,
      markup: MSRP_MARKUP,
      marketInfo: {
        metro: formData.metro,
        industry: formData.industry,
        avgCpc: formData.industry.avgCpc
      }
    };
  };

  const handleNext = () => {
    if (step < 4) {
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
    setMetroSearch("");
    setStep(1);
    setShowResults(false);
  };

  const OptionButton = ({ 
    selected, 
    onClick, 
    children,
    className
  }: { 
    selected: boolean; 
    onClick: () => void; 
    children: React.ReactNode;
    className?: string;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "px-4 py-3 rounded-lg border text-sm font-medium transition-all text-left",
        selected
          ? "bg-cta/10 border-cta text-cta"
          : "bg-surface-elevated border-border/50 text-text-secondary hover:border-accent-blue/50 hover:text-foreground",
        className
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
              Answer a few questions about your client's market and digital presence. Final pricing is scoped per engagement.
            </p>
          </div>

          {/* Progress Bar */}
          {!showResults && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-text-muted">Step {step} of 4</span>
                <span className="text-sm text-text-muted">{Math.round((step / 4) * 100)}%</span>
              </div>
              <div className="h-2 bg-surface-elevated rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-accent-blue to-cta transition-all duration-300"
                  style={{ width: `${(step / 4) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Calculator Card */}
          <div className="bg-surface-elevated border border-border/50 rounded-2xl p-6 md:p-8">
            
            {/* Step 1: Market Profile */}
            {step === 1 && !showResults && (
              <div className="space-y-6">
                {/* Metro Search */}
                <div>
                  <label className="block text-foreground font-medium mb-3">
                    What metro area is this client in?
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.metro ? `${formData.metro.name}, ${formData.metro.state}` : metroSearch}
                      onChange={(e) => {
                        setMetroSearch(e.target.value);
                        updateField("metro", null);
                        setShowMetroDropdown(true);
                      }}
                      onFocus={() => setShowMetroDropdown(true)}
                      placeholder="Search for a city..."
                      className="w-full px-4 py-3 rounded-lg bg-surface-dark border border-border/50 text-foreground placeholder:text-text-muted focus:outline-none focus:border-accent-blue"
                    />
                    {formData.metro && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                        <span className="text-xs text-text-muted bg-accent-blue/10 px-2 py-1 rounded">
                          {formData.metro.tier} · {formatPopulation(formData.metro.population)}
                        </span>
                        <Check className="h-4 w-4 text-cta" />
                      </div>
                    )}
                    {showMetroDropdown && filteredMetros.length > 0 && !formData.metro && (
                      <div className="absolute z-10 w-full mt-1 bg-surface-dark border border-border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                        {filteredMetros.map((metro) => (
                          <button
                            key={`${metro.name}-${metro.state}`}
                            type="button"
                            onClick={() => {
                              updateField("metro", metro);
                              setMetroSearch("");
                              setShowMetroDropdown(false);
                            }}
                            className="w-full px-4 py-3 text-left hover:bg-surface-elevated transition-colors flex items-center justify-between"
                          >
                            <span className="text-foreground">{metro.name}, {metro.state}</span>
                            <span className="text-xs text-text-muted">
                              {formatPopulation(metro.population)}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Industry Dropdown */}
                <div>
                  <label className="block text-foreground font-medium mb-3">
                    What industry is this client in?
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setShowIndustryDropdown(!showIndustryDropdown)}
                      className="w-full px-4 py-3 rounded-lg bg-surface-dark border border-border/50 text-left flex items-center justify-between"
                    >
                      <span className={formData.industry ? "text-foreground" : "text-text-muted"}>
                        {formData.industry ? formData.industry.name : "Select an industry..."}
                      </span>
                      <div className="flex items-center gap-2">
                        {formData.industry && (
                          <span className="text-xs text-text-muted bg-accent-blue/10 px-2 py-1 rounded">
                            ~${formData.industry.avgCpc} CPC
                          </span>
                        )}
                        <ChevronDown className={cn(
                          "h-4 w-4 text-text-muted transition-transform",
                          showIndustryDropdown && "rotate-180"
                        )} />
                      </div>
                    </button>
                    {showIndustryDropdown && (
                      <div className="absolute z-10 w-full mt-1 bg-surface-dark border border-border rounded-lg shadow-lg max-h-72 overflow-y-auto">
                        {Object.entries(industriesByCategory).map(([category, items]) => (
                          <div key={category}>
                            <div className="px-4 py-2 text-xs font-medium text-text-muted uppercase tracking-wider bg-surface-elevated">
                              {category}
                            </div>
                            {items.map((industry) => (
                              <button
                                key={industry.id}
                                type="button"
                                onClick={() => {
                                  updateField("industry", industry);
                                  setShowIndustryDropdown(false);
                                }}
                                className="w-full px-4 py-2.5 text-left hover:bg-surface-elevated transition-colors flex items-center justify-between"
                              >
                                <span className="text-foreground text-sm">{industry.name}</span>
                                <span className="text-xs text-text-muted">
                                  ${industry.avgCpc} CPC
                                </span>
                              </button>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Locations */}
                <div>
                  <label className="block text-foreground font-medium mb-3">
                    How many locations?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { value: "1", label: "1" },
                      { value: "2-5", label: "2-5" },
                      { value: "6-20", label: "6-20" },
                      { value: "20+", label: "20+" }
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
              </div>
            )}

            {/* Step 2: Digital Presence */}
            {step === 2 && !showResults && (
              <div className="space-y-6">
                <div>
                  <label className="block text-foreground font-medium mb-3">
                    How old is their website?
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: "new", label: "< 1 year" },
                      { value: "1-3", label: "1-3 years" },
                      { value: "3+", label: "3+ years" }
                    ].map(opt => (
                      <OptionButton
                        key={opt.value}
                        selected={formData.websiteAge === opt.value}
                        onClick={() => updateField("websiteAge", opt.value)}
                      >
                        {opt.label}
                      </OptionButton>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-3">
                    Website domain authority?
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: "low", label: "Low / Unknown", desc: "DA < 20" },
                      { value: "medium", label: "Medium", desc: "DA 20-40" },
                      { value: "high", label: "Strong", desc: "DA 40+" }
                    ].map(opt => (
                      <OptionButton
                        key={opt.value}
                        selected={formData.websiteAuthority === opt.value}
                        onClick={() => updateField("websiteAuthority", opt.value)}
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
                    Google Business Profile status?
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: "unclaimed", label: "Unclaimed" },
                      { value: "basic", label: "Basic setup" },
                      { value: "optimized", label: "Optimized" }
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
                      { value: "messy", label: "Inconsistent" },
                      { value: "clean", label: "Clean" }
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

            {/* Step 3: Current Marketing */}
            {step === 3 && !showResults && (
              <div className="space-y-6">
                <div>
                  <label className="block text-foreground font-medium mb-3">
                    Social media presence?
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: "none", label: "None / New" },
                      { value: "dormant", label: "Dormant" },
                      { value: "active", label: "Active" }
                    ].map(opt => (
                      <OptionButton
                        key={opt.value}
                        selected={formData.socialMedia === opt.value}
                        onClick={() => updateField("socialMedia", opt.value)}
                      >
                        {opt.label}
                      </OptionButton>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-3">
                    Existing paid ad accounts?
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: "none", label: "None" },
                      { value: "paused", label: "Paused / Old" },
                      { value: "running", label: "Running" }
                    ].map(opt => (
                      <OptionButton
                        key={opt.value}
                        selected={formData.existingAds === opt.value}
                        onClick={() => updateField("existingAds", opt.value)}
                      >
                        {opt.label}
                      </OptionButton>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-3">
                    Existing content (blogs, pages)?
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: "none", label: "None" },
                      { value: "minimal", label: "Minimal" },
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
                    Email list size?
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: "none", label: "None" },
                      { value: "small", label: "< 1,000" },
                      { value: "established", label: "1,000+" }
                    ].map(opt => (
                      <OptionButton
                        key={opt.value}
                        selected={formData.emailList === opt.value}
                        onClick={() => updateField("emailList", opt.value)}
                      >
                        {opt.label}
                      </OptionButton>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Services */}
            {step === 4 && !showResults && (
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
                {/* Market Context */}
                <div className="flex flex-wrap items-center gap-3 pb-4 border-b border-border/30">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-accent-blue/10 rounded-full">
                    <MapPin className="h-3.5 w-3.5 text-accent-blue" />
                    <span className="text-sm text-foreground">{estimate.marketInfo.metro.name}, {estimate.marketInfo.metro.state}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-accent-blue/10 rounded-full">
                    <Building className="h-3.5 w-3.5 text-accent-blue" />
                    <span className="text-sm text-foreground">{estimate.marketInfo.industry.name}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-cta/10 rounded-full">
                    <span className="text-sm text-cta">~${estimate.marketInfo.avgCpc} avg CPC</span>
                  </div>
                </div>

                {/* OEM Pricing */}
                <div className="bg-surface-dark rounded-xl p-6 border border-cta/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-cta bg-cta/10 px-2 py-1 rounded">Partner Cost (OEM)</span>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-foreground">
                    ${estimate.oemLow.toLocaleString()} – ${estimate.oemHigh.toLocaleString()}
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1.5 text-text-muted text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{estimate.totalHoursLow.toFixed(0)} – {estimate.totalHoursHigh.toFixed(0)} hrs/mo</span>
                    </div>
                    <span className="text-text-muted text-sm">@ ${estimate.hourlyRate}/hr</span>
                  </div>
                </div>

                {/* MSRP Pricing */}
                <div className="bg-accent-blue/5 rounded-xl p-6 border border-accent-blue/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent-blue bg-accent-blue/10 px-2 py-1 rounded">Suggested Client Price (MSRP)</span>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-foreground">
                    ${estimate.msrpLow.toLocaleString()} – ${estimate.msrpHigh.toLocaleString()}
                  </p>
                  <p className="text-text-muted text-sm mt-2">
                    {Math.round((estimate.markup - 1) * 100)}% margin built in
                  </p>
                </div>

                <div>
                  <p className="text-foreground font-medium mb-4">Breakdown by Service</p>
                  <div className="space-y-3">
                    {estimate.breakdown.map((item, index) => (
                      <div 
                        key={index}
                        className="py-3 border-b border-border/20 last:border-0"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-text-secondary">{item.service}</span>
                          <span className="text-xs text-text-muted">{item.hoursLow.toFixed(1)} – {item.hoursHigh.toFixed(1)} hrs</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-cta/80">OEM: ${item.oemLow} – ${item.oemHigh}</span>
                          <span className="text-accent-blue/80">MSRP: ${item.msrpLow} – ${item.msrpHigh}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-surface-dark border border-border/30 rounded-xl p-4">
                  <p className="text-sm text-text-secondary">
                    <strong className="text-foreground">Note:</strong> OEM pricing at ${OEM_HOURLY_RATE}/hr. MSRP includes {Math.round((MSRP_MARKUP - 1) * 100)}% margin. 
                    Factors in market size, industry competition, CPC benchmarks, and digital asset status.
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
                  {step === 4 ? "Calculate Estimate" : "Next"}
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
