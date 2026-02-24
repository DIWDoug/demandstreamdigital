import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import MarketExclusivity from "@/components/sections/MarketExclusivity";
import InvestmentEducationalContent from "@/components/calculators/InvestmentEducationalContent";
import AgencyPartnerVideos from "@/components/calculators/AgencyPartnerVideos";
import PricingComparisonTable from "@/components/calculators/PricingComparisonTable";
import { useState, useMemo } from "react";
import { Calculator, DollarSign, TrendingUp, MapPin, Building, Globe, Search, MousePointerClick, Mail, ArrowRight, ArrowLeft, Phone, ChevronDown, Check, Clock, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { metros, searchMetros, formatPopulation, tierMultipliers, type Metro } from "@/data/metros";
import { industries, getIndustriesByCategory, getCpcMultiplier, getSeoComplexityMultiplier, competitionMultipliers, type Industry } from "@/data/industries";
import { Link } from "react-router-dom";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";
import { getCalculatorSchema } from "@/lib/schema";

const investmentCalculatorSchema = getCalculatorSchema({
  name: "Marketing Investment Planning Calculator for Agencies",
  description: "Estimate client marketing investments by service and channel. Free scoping tool for digital agencies.",
  url: "https://dialedinweb.com/partner-tools/investment-calculator",
  category: "BusinessApplication"
});

type Step = 1 | 2 | 3 | 4;

interface FormData {
  metro: Metro | null;
  industry: Industry | null;
  locations: string;
  websiteAge: string;
  websiteAuthority: string;
  gbpStatus: string;
  citationHealth: string;
  socialMedia: string;
  existingAds: string;
  contentStatus: string;
  emailList: string;
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

const OEM_HOURLY_RATE = 65;

// Dynamic min/max based on competition and metro tier
const getMinMaxBounds = (competition: string, metroTier: string): { min: number; max: number } => {
  // High competition industries need realistic minimums
  if (competition === "high") {
    if (metroTier === "mega") return { min: 2000, max: 6500 };
    if (metroTier === "major") return { min: 1600, max: 5500 };
    if (metroTier === "large") return { min: 1400, max: 4500 };
    if (metroTier === "medium") return { min: 1200, max: 4000 };
    return { min: 1000, max: 3500 }; // small or no tier
  }
  
  // Medium competition
  if (competition === "medium") {
    if (metroTier === "mega") return { min: 1200, max: 5000 };
    if (metroTier === "major") return { min: 1000, max: 4000 };
    if (metroTier === "large") return { min: 850, max: 3500 };
    return { min: 700, max: 3000 };
  }
  
  // Low competition
  if (metroTier === "mega") return { min: 750, max: 3500 };
  if (metroTier === "major") return { min: 650, max: 3000 };
  return { min: 500, max: 2600 };
};

const baseServiceHours: Record<string, { hours: number; label: string; description?: string }> = {
  localSeo: { hours: 18, label: "Local SEO", description: "On-page optimization, keyword strategy, technical SEO" },
  gbpSeo: { hours: 8, label: "GBP SEO", description: "Google Business Profile optimization & management" },
  paidMedia: { hours: 10, label: "Paid Media", description: "Google Ads + Meta Ads management" },
  email: { hours: 6, label: "Email Marketing", description: "Campaign strategy, automation, list management" },
  content: { hours: 12, label: "Content Marketing", description: "Blog content, location pages, service pages" }
};

const InvestmentCalculator = () => {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [showResults, setShowResults] = useState(false);
  const [metroSearch, setMetroSearch] = useState("");
  const [showMetroDropdown, setShowMetroDropdown] = useState(false);
  const [showIndustryDropdown, setShowIndustryDropdown] = useState(false);
  const [marginPercent, setMarginPercent] = useState(85); // Default to 85% margin (middle of 40-150%)

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
      case 1: return formData.metro && formData.industry && formData.locations;
      case 2: return formData.websiteAge && formData.websiteAuthority && formData.gbpStatus && formData.citationHealth;
      case 3: return formData.socialMedia && formData.existingAds && formData.contentStatus && formData.emailList;
      case 4: return formData.services.length > 0;
      default: return true;
    }
  };

  const calculateEstimate = () => {
    if (!formData.metro || !formData.industry) return null;

    const tierMult = tierMultipliers[formData.metro.tier];
    const locMult = { "1": 1, "2-5": 1.8, "6-20": 3, "20+": 5 }[formData.locations] || 1;
    const cpcMult = getCpcMultiplier(formData.industry.avgCpc);
    const seoMult = getSeoComplexityMultiplier(formData.industry.seoComplexity);
    const compMult = competitionMultipliers[formData.industry.competition];
    const webAgeMult = { "new": 1.3, "1-3": 1.1, "3+": 1 }[formData.websiteAge] || 1;
    const webAuthMult = { "low": 1.25, "medium": 1.1, "high": 1 }[formData.websiteAuthority] || 1;
    const gbpMult = { "unclaimed": 1.2, "basic": 1.1, "optimized": 1 }[formData.gbpStatus] || 1;
    const citMult = { "unknown": 1.15, "messy": 1.2, "clean": 1 }[formData.citationHealth] || 1;
    const socialMult = { "none": 1.15, "dormant": 1.05, "active": 1 }[formData.socialMedia] || 1;
    const adsMult = { "none": 1.1, "paused": 1.05, "running": 1 }[formData.existingAds] || 1;
    const contentMult = { "none": 1.3, "minimal": 1.15, "substantial": 1 }[formData.contentStatus] || 1;
    const emailMult = { "none": 1.15, "small": 1.05, "established": 1 }[formData.emailList] || 1;

    const seoMultiplier = (tierMult + seoMult + compMult + webAgeMult + webAuthMult + citMult + contentMult) / 7;
    const gbpMultiplier = (tierMult + compMult + gbpMult + citMult) / 4;
    const authorityMultiplier = (tierMult + compMult + webAuthMult + contentMult) / 4;
    // Combined Local SEO multiplier (includes GBP + Authority factors)
    const localSeoMultiplier = (seoMultiplier + gbpMultiplier + authorityMultiplier) / 3;
    const adsMultiplier = (tierMult + cpcMult + compMult + adsMult) / 4;
    const socialMultiplier = (tierMult + socialMult + contentMult) / 3;
    const emailMultiplier = (emailMult + contentMult) / 2;

    const serviceMultipliers: Record<string, number> = {
      localSeo: localSeoMultiplier,
      googleAds: adsMultiplier,
      metaAds: socialMultiplier,
      email: emailMultiplier
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
        const oemLow = Math.round(hoursLow * OEM_HOURLY_RATE);
        const oemHigh = Math.round(hoursHigh * OEM_HOURLY_RATE);
        const msrpLow = Math.round(oemLow * (1 + marginPercent / 100));
        const msrpHigh = Math.round(oemHigh * (1 + marginPercent / 100));
        totalHoursLow += hoursLow;
        totalHoursHigh += hoursHigh;
        breakdown.push({ service: serviceData.label, hoursLow, hoursHigh, oemLow, oemHigh, msrpLow, msrpHigh });
      }
    });

    // Get dynamic min/max bounds based on competition and metro tier
    const bounds = getMinMaxBounds(formData.industry.competition, formData.metro.tier);

    let oemTotalLow = Math.round(totalHoursLow * OEM_HOURLY_RATE);
    let oemTotalHigh = Math.round(totalHoursHigh * OEM_HOURLY_RATE);
    // Enforce dynamic min/max bounds based on competition and metro
    oemTotalLow = Math.max(bounds.min, Math.min(bounds.max, oemTotalLow));
    oemTotalHigh = Math.max(bounds.min, Math.min(bounds.max, oemTotalHigh));
    
    const msrpTotalLow = Math.round(oemTotalLow * (1 + marginPercent / 100));
    const msrpTotalHigh = Math.round(oemTotalHigh * (1 + marginPercent / 100));
    const msrpHourlyRate = Math.round(OEM_HOURLY_RATE * (1 + marginPercent / 100));

    // Factor breakdown for visualization
    const factors = [
      { label: "Metro Size", current: formData.metro.tier.charAt(0).toUpperCase() + formData.metro.tier.slice(1), baseline: 1, impact: tierMult, unit: "" as const },
      { label: "Competition", current: formData.industry.competition.charAt(0).toUpperCase() + formData.industry.competition.slice(1), baseline: 1, impact: compMult, unit: "" as const },
      { label: "Locations", current: formData.locations, baseline: 1, impact: locMult / 1.8, unit: "" as const },
      { label: "Website Age", current: formData.websiteAge === "new" ? "< 1 yr" : formData.websiteAge === "1-3" ? "1-3 yrs" : "3+ yrs", baseline: 1, impact: webAgeMult, unit: "" as const },
      { label: "Website Authority", current: formData.websiteAuthority.charAt(0).toUpperCase() + formData.websiteAuthority.slice(1), baseline: 1, impact: webAuthMult, unit: "" as const },
      { label: "GBP Status", current: formData.gbpStatus.charAt(0).toUpperCase() + formData.gbpStatus.slice(1), baseline: 1, impact: gbpMult, unit: "" as const },
      { label: "Citation Health", current: formData.citationHealth.charAt(0).toUpperCase() + formData.citationHealth.slice(1), baseline: 1, impact: citMult, unit: "" as const },
      { label: "Content Status", current: formData.contentStatus.charAt(0).toUpperCase() + formData.contentStatus.slice(1), baseline: 1, impact: contentMult, unit: "" as const }
    ];

    return { 
      oemLow: oemTotalLow, oemHigh: oemTotalHigh,
      msrpLow: msrpTotalLow, msrpHigh: msrpTotalHigh,
      totalHoursLow, totalHoursHigh, breakdown,
      oemHourlyRate: OEM_HOURLY_RATE, msrpHourlyRate, marginPercent,
      marketInfo: { metro: formData.metro, industry: formData.industry, avgCpc: formData.industry.avgCpc },
      factors
    };
  };

  const handleNext = () => {
    if (step < 4) setStep((step + 1) as Step);
    else setShowResults(true);
  };

  const handleBack = () => {
    if (showResults) setShowResults(false);
    else if (step > 1) setStep((step - 1) as Step);
  };

  const resetCalculator = () => {
    setFormData(initialFormData);
    setMetroSearch("");
    setStep(1);
    setShowResults(false);
  };

  const OptionButton = ({ selected, onClick, children, className }: { selected: boolean; onClick: () => void; children: React.ReactNode; className?: string }) => (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "px-4 py-3 rounded-lg border text-sm font-medium transition-all text-left",
        selected ? "bg-cta/10 border-cta text-cta" : "bg-surface-elevated border-border/50 text-text-secondary hover:border-accent-blue/50 hover:text-foreground",
        className
      )}
    >
      {children}
    </button>
  );

  const ServiceCheckbox = ({ service, icon: Icon, label, description }: { service: string; icon: React.ElementType; label: string; description?: string }) => (
    <button
      type="button"
      onClick={() => toggleService(service)}
      className={cn(
        "flex items-center gap-3 px-4 py-4 rounded-xl border text-left transition-all",
        formData.services.includes(service) ? "bg-cta/10 border-cta" : "bg-surface-elevated border-border/50 hover:border-accent-blue/50"
      )}
    >
      <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0", formData.services.includes(service) ? "bg-accent-blue/20" : "bg-accent-blue/10")}>
        <Icon className={cn("h-5 w-5", formData.services.includes(service) ? "text-accent-blue" : "text-accent-blue/60")} />
      </div>
      <div className="flex flex-col">
        <span className={cn("font-medium", formData.services.includes(service) ? "text-cta" : "text-foreground")}>{label}</span>
        {description && <span className="text-xs text-text-muted">{description}</span>}
      </div>
    </button>
  );

  const estimate = showResults ? calculateEstimate() : null;

  return (
    <>
      <Helmet>
        <title>Marketing Investment Planning Calculator | Set Client Budgets by Channel & Service | Dialed-in Web</title>
        <meta name="description" content="Estimate client investments by service. Dialed-in Web's calculator helps agencies present clear, scalable marketing plans." />
        <link rel="canonical" href="https://dialedinweb.com/partner-tools/investment-calculator" />
        <meta name="keywords" content="marketing budget calculator, agency investment planner, client budget estimator, digital marketing scoping tool" />
        
        {/* Hreflang Tags */}
        <link rel="alternate" hrefLang="en-US" href="https://dialedinweb.com/partner-tools/investment-calculator" />
        <link rel="alternate" hrefLang="en-CA" href="https://dialedinweb.com/partner-tools/investment-calculator" />
        <link rel="alternate" hrefLang="x-default" href="https://dialedinweb.com/partner-tools/investment-calculator" />
        
        <script type="application/ld+json">{JSON.stringify(investmentCalculatorSchema)}</script>
        
        {/* Open Graph */}
        <meta property="og:title" content="Marketing Investment Planning Calculator | Set Client Budgets by Channel & Service | Dialed-in Web" />
        <meta property="og:description" content="Estimate client investments by service. Dialed-in Web's calculator helps agencies present clear, scalable marketing plans." />
        <meta property="og:url" content="https://dialedinweb.com/partner-tools/investment-calculator" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dialed-In Web" />
        <meta property="og:image" content="https://dialedinweb.com/og-images/investment-calculator.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Marketing Investment Planning Calculator | Set Client Budgets by Channel & Service | Dialed-in Web" />
        <meta name="twitter:description" content="Estimate client investments by service. Dialed-in Web's calculator helps agencies present clear, scalable marketing plans." />
        <meta name="twitter:image" content="https://dialedinweb.com/og-images/investment-calculator.png" />
      </Helmet>
      
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-surface-dark via-surface-elevated to-surface-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cta/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-blue/20 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cta/10 text-cta text-sm font-medium mb-6">
                <Calculator className="h-4 w-4" />
                Agency Partner Tools
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Service Investment Calculator
              </h1>
              <p className="text-text-secondary text-lg font-body mb-8">
                Scope your monthly investment with us based on your client's market, industry, and service needs. Get transparent OEM pricing and calculate your margins.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/roi-calculator" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border/50 text-text-secondary hover:text-foreground hover:border-accent-blue/50 transition-colors font-medium"
                >
                  <TrendingUp className="h-4 w-4" />
                  ROI Calculator
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-16 lg:py-24 bg-surface-dark">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              {!showResults && (
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-text-muted">Step {step} of 4</span>
                    <span className="text-sm text-text-muted">{Math.round((step / 4) * 100)}%</span>
                  </div>
                  <div className="h-2 bg-surface-elevated rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-accent-blue to-cta transition-all duration-300" style={{ width: `${(step / 4) * 100}%` }} />
                  </div>
                </div>
              )}

              <div className="bg-surface-elevated border border-border/50 rounded-2xl p-6 md:p-8">
                {step === 1 && !showResults && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-foreground font-medium mb-3">What metro area is this client in?</label>
                      
                      {/* Popular Metros Quick Select */}
                      {!formData.metro && (
                        <div className="mb-4">
                          <span className="text-xs text-text-muted uppercase tracking-wider mb-2 block">Popular Markets</span>
                          <div className="flex flex-wrap gap-2">
                            {metros.slice(0, 10).map((metro) => (
                              <button
                                key={`quick-${metro.name}-${metro.state}`}
                                type="button"
                                onClick={() => { updateField("metro", metro); setMetroSearch(""); setShowMetroDropdown(false); }}
                                className="px-3 py-1.5 text-xs rounded-full bg-surface-dark border border-border/50 text-text-secondary hover:border-accent-blue/50 hover:text-foreground transition-colors"
                              >
                                {metro.name}, {metro.state}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="relative">
                        <input
                          type="text"
                          value={formData.metro ? `${formData.metro.name}, ${formData.metro.state}` : metroSearch}
                          onChange={(e) => { setMetroSearch(e.target.value); updateField("metro", null); setShowMetroDropdown(true); }}
                          onFocus={() => setShowMetroDropdown(true)}
                          placeholder="Search for a city..."
                          className="w-full px-4 py-3 rounded-lg bg-surface-dark border border-border/50 text-foreground placeholder:text-text-muted focus:outline-none focus:border-accent-blue"
                        />
                        {formData.metro && (
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                            <span className="text-xs text-text-muted bg-accent-blue/10 px-2 py-1 rounded">{formData.metro.tier} · {formatPopulation(formData.metro.population)}</span>
                            <Check className="h-4 w-4 text-cta" />
                            <button
                              type="button"
                              onClick={() => { updateField("metro", null); setMetroSearch(""); }}
                              className="p-1 rounded-full hover:bg-surface-dark transition-colors"
                              aria-label="Clear metro selection"
                            >
                              <X className="h-4 w-4 text-text-muted hover:text-foreground" />
                            </button>
                          </div>
                        )}
                        {showMetroDropdown && filteredMetros.length > 0 && !formData.metro && (
                          <div className="absolute z-50 w-full mt-1 bg-surface-dark border border-border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                            {filteredMetros.map((metro) => (
                              <button
                                key={`${metro.name}-${metro.state}`}
                                type="button"
                                onClick={() => { updateField("metro", metro); setMetroSearch(""); setShowMetroDropdown(false); }}
                                className="w-full px-4 py-3 text-left hover:bg-surface-elevated transition-colors flex items-center justify-between"
                              >
                                <span className="text-foreground">{metro.name}, {metro.state}</span>
                                <span className="text-xs text-text-muted">{formatPopulation(metro.population)}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-foreground font-medium mb-3">What industry is this client in?</label>
                      <div className="relative">
                        <button type="button" onClick={() => setShowIndustryDropdown(!showIndustryDropdown)} className="w-full px-4 py-3 rounded-lg bg-surface-dark border border-border/50 text-left flex items-center justify-between">
                          <span className={formData.industry ? "text-foreground" : "text-text-muted"}>{formData.industry ? formData.industry.name : "Select an industry..."}</span>
                          <div className="flex items-center gap-2">
                            {formData.industry && <span className="text-xs text-text-muted bg-accent-blue/10 px-2 py-1 rounded">~${formData.industry.avgCpc} CPC</span>}
                            {formData.industry && (
                              <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); updateField("industry", null); }}
                                className="p-1 rounded-full hover:bg-surface-elevated transition-colors"
                                aria-label="Clear industry selection"
                              >
                                <X className="h-4 w-4 text-text-muted hover:text-foreground" />
                              </button>
                            )}
                            <ChevronDown className={cn("h-4 w-4 text-text-muted transition-transform", showIndustryDropdown && "rotate-180")} />
                          </div>
                        </button>
                        {showIndustryDropdown && (
                          <div className="absolute z-50 w-full mt-1 bg-surface-dark border border-border rounded-lg shadow-lg max-h-72 overflow-y-auto">
                            {Object.entries(industriesByCategory).map(([category, items]) => (
                              <div key={category}>
                                <div className="px-4 py-2 text-xs font-medium text-text-muted uppercase tracking-wider bg-surface-elevated">{category}</div>
                                {items.map((industry) => (
                                  <button
                                    key={industry.id}
                                    type="button"
                                    onClick={() => { updateField("industry", industry); setShowIndustryDropdown(false); }}
                                    className="w-full px-4 py-2.5 text-left hover:bg-surface-elevated transition-colors flex items-center justify-between"
                                  >
                                    <span className="text-foreground text-sm">{industry.name}</span>
                                    <span className="text-xs text-text-muted">${industry.avgCpc} CPC</span>
                                  </button>
                                ))}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-foreground font-medium mb-3">How many locations?</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {[{ value: "1", label: "1" }, { value: "2-5", label: "2-5" }, { value: "6-20", label: "6-20" }, { value: "20+", label: "20+" }].map(opt => (
                          <OptionButton key={opt.value} selected={formData.locations === opt.value} onClick={() => updateField("locations", opt.value)}>{opt.label}</OptionButton>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && !showResults && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-foreground font-medium mb-3">How old is their website?</label>
                      <div className="grid grid-cols-3 gap-3">
                        {[{ value: "new", label: "< 1 year" }, { value: "1-3", label: "1-3 years" }, { value: "3+", label: "3+ years" }].map(opt => (
                          <OptionButton key={opt.value} selected={formData.websiteAge === opt.value} onClick={() => updateField("websiteAge", opt.value)}>{opt.label}</OptionButton>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-foreground font-medium mb-3">Website authority/backlinks?</label>
                      <div className="grid grid-cols-3 gap-3">
                        {[{ value: "low", label: "Low/Unknown" }, { value: "medium", label: "Some links" }, { value: "high", label: "Strong profile" }].map(opt => (
                          <OptionButton key={opt.value} selected={formData.websiteAuthority === opt.value} onClick={() => updateField("websiteAuthority", opt.value)}>{opt.label}</OptionButton>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-foreground font-medium mb-3">Google Business Profile status?</label>
                      <div className="grid grid-cols-3 gap-3">
                        {[{ value: "unclaimed", label: "Unclaimed" }, { value: "basic", label: "Basic info" }, { value: "optimized", label: "Optimized" }].map(opt => (
                          <OptionButton key={opt.value} selected={formData.gbpStatus === opt.value} onClick={() => updateField("gbpStatus", opt.value)}>{opt.label}</OptionButton>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-foreground font-medium mb-3">Citation/NAP health?</label>
                      <div className="grid grid-cols-3 gap-3">
                        {[{ value: "unknown", label: "Unknown" }, { value: "messy", label: "Inconsistent" }, { value: "clean", label: "Clean" }].map(opt => (
                          <OptionButton key={opt.value} selected={formData.citationHealth === opt.value} onClick={() => updateField("citationHealth", opt.value)}>{opt.label}</OptionButton>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && !showResults && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-foreground font-medium mb-3">Social media presence?</label>
                      <div className="grid grid-cols-3 gap-3">
                        {[{ value: "none", label: "None" }, { value: "dormant", label: "Dormant" }, { value: "active", label: "Active" }].map(opt => (
                          <OptionButton key={opt.value} selected={formData.socialMedia === opt.value} onClick={() => updateField("socialMedia", opt.value)}>{opt.label}</OptionButton>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-foreground font-medium mb-3">Running paid ads currently?</label>
                      <div className="grid grid-cols-3 gap-3">
                        {[{ value: "none", label: "No" }, { value: "paused", label: "Paused" }, { value: "running", label: "Active" }].map(opt => (
                          <OptionButton key={opt.value} selected={formData.existingAds === opt.value} onClick={() => updateField("existingAds", opt.value)}>{opt.label}</OptionButton>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-foreground font-medium mb-3">Existing content (blogs, pages)?</label>
                      <div className="grid grid-cols-3 gap-3">
                        {[{ value: "none", label: "None" }, { value: "minimal", label: "Minimal" }, { value: "substantial", label: "Substantial" }].map(opt => (
                          <OptionButton key={opt.value} selected={formData.contentStatus === opt.value} onClick={() => updateField("contentStatus", opt.value)}>{opt.label}</OptionButton>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-foreground font-medium mb-3">Email list size?</label>
                      <div className="grid grid-cols-3 gap-3">
                        {[{ value: "none", label: "None" }, { value: "small", label: "< 1,000" }, { value: "established", label: "1,000+" }].map(opt => (
                          <OptionButton key={opt.value} selected={formData.emailList === opt.value} onClick={() => updateField("emailList", opt.value)}>{opt.label}</OptionButton>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 4 && !showResults && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-foreground font-medium mb-3">Which services does this client need?</label>
                      <p className="text-text-muted text-sm mb-4">Select all that apply</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <ServiceCheckbox service="localSeo" icon={Search} label="Local SEO" description="On-page, keywords, technical" />
                        <ServiceCheckbox service="gbpSeo" icon={MapPin} label="GBP SEO" description="Google Business Profile optimization" />
                        <ServiceCheckbox service="paidMedia" icon={MousePointerClick} label="Paid Media" description="Google Ads + Meta Ads" />
                        <ServiceCheckbox service="email" icon={Mail} label="Email Marketing" description="Campaigns & automation" />
                        <ServiceCheckbox service="content" icon={Globe} label="Content Marketing" description="Blog & location pages" />
                      </div>
                    </div>
                  </div>
                )}

                {showResults && estimate && (
                  <div className="space-y-6">
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

                    <div className="bg-surface-dark rounded-xl p-6 border border-cta/30">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-cta bg-cta/10 px-2 py-1 rounded">Partner Cost (OEM)</span>
                      </div>
                      <p className="text-3xl md:text-4xl font-bold text-foreground">${estimate.oemLow.toLocaleString()} – ${estimate.oemHigh.toLocaleString()}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-1.5 text-text-muted text-sm">
                          <Clock className="h-4 w-4" />
                          <span>{estimate.totalHoursLow.toFixed(0)} – {estimate.totalHoursHigh.toFixed(0)} hrs/mo</span>
                        </div>
                        <span className="text-text-muted text-sm">@ ${estimate.oemHourlyRate}/hr</span>
                      </div>
                    </div>

                    <div className="bg-accent-blue/5 rounded-xl p-6 border border-accent-blue/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-accent-blue bg-accent-blue/10 px-2 py-1 rounded">Your Client Price (MSRP)</span>
                        <span className="text-sm text-cta font-medium">{estimate.marginPercent}% margin</span>
                      </div>
                      <p className="text-3xl md:text-4xl font-bold text-foreground">${estimate.msrpLow.toLocaleString()} – ${estimate.msrpHigh.toLocaleString()}</p>
                      <div className="flex items-center gap-2 mt-2 mb-4">
                        <span className="text-sm text-green-400 font-medium">+${(estimate.msrpLow - estimate.oemLow).toLocaleString()} – ${(estimate.msrpHigh - estimate.oemHigh).toLocaleString()} profit/mo</span>
                      </div>
                      <div className="bg-surface-dark rounded-lg p-4 border border-border/30">
                        <div className="flex items-center justify-between mb-3">
                          <label className="text-sm text-text-secondary flex items-center gap-2">
                            <DollarSign className="h-4 w-4" />
                            Your margin
                          </label>
                          <span className="text-lg font-bold text-foreground">{marginPercent}%</span>
                        </div>
                        <input
                          type="range"
                          min="40"
                          max="150"
                          step="5"
                          value={marginPercent}
                          onChange={(e) => setMarginPercent(Number(e.target.value))}
                          className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-accent-blue"
                        />
                        <div className="flex justify-between text-xs text-text-muted mt-1">
                          <span>40%</span>
                          <span>150%</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-foreground font-medium mb-4">Breakdown by Service</p>
                      <div className="space-y-3">
                        {estimate.breakdown.map((item, index) => (
                          <div key={index} className="py-3 border-b border-border/20 last:border-0">
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

                    {/* Factor Breakdown */}
                    <div className="bg-surface-dark rounded-xl p-5 border border-border/30">
                      <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">Pricing Factors</p>
                      <div className="space-y-3">
                        {estimate.factors.map((factor, i) => {
                          // For this calculator, higher multipliers = higher cost (inverse visual)
                          const impactPercent = Math.min(100, Math.max(10, factor.impact * 35));
                          const getColor = () => {
                            // Green = less work needed, Red = more work needed
                            if (factor.impact <= 1) return "bg-emerald-500";
                            if (factor.impact <= 1.15) return "bg-yellow-500";
                            return "bg-red-500";
                          };
                          
                          return (
                            <div key={i} className="space-y-1.5">
                              <div className="flex justify-between items-center text-xs">
                                <span className="text-text-muted">{factor.label}</span>
                                <div className="flex items-center gap-2">
                                  <span className="text-text-secondary">{factor.current}</span>
                                  <span className={cn(
                                    "font-medium",
                                    factor.impact <= 1 ? "text-emerald-400" : 
                                    factor.impact <= 1.15 ? "text-yellow-400" : "text-red-400"
                                  )}>
                                    {factor.impact > 1 ? "+" : ""}{Math.round((factor.impact - 1) * 100)}%
                                  </span>
                                </div>
                              </div>
                              <div className="h-1.5 bg-surface-elevated rounded-full overflow-hidden">
                                <div 
                                  className={cn("h-full rounded-full transition-all", getColor())}
                                  style={{ width: `${impactPercent}%` }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <p className="text-[10px] text-text-muted/60 mt-3">
                        Green = less work · Yellow = moderate · Red = more work needed
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                      <a href="#contact" className="btn-cta group flex items-center gap-2 w-full sm:w-auto justify-center">
                        Get a Precise Quote
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                      <a href={PHONE_HREF} className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-text-secondary hover:text-foreground hover:border-border-subtle transition-colors font-medium text-sm">
                        <Phone className="h-4 w-4" />
                        {PHONE_NUMBER}
                      </a>
                    </div>

                    <button onClick={resetCalculator} className="w-full text-center text-sm text-text-muted hover:text-foreground transition-colors">Start over with different inputs</button>
                  </div>
                )}

                {!showResults && (
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/30">
                    <button
                      type="button"
                      onClick={handleBack}
                      disabled={step === 1}
                      className={cn("flex items-center gap-2 text-sm font-medium transition-colors", step === 1 ? "text-text-muted cursor-not-allowed" : "text-text-secondary hover:text-foreground")}
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!canProceed()}
                      className={cn("flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium text-sm transition-all", canProceed() ? "bg-cta text-white hover:bg-cta/90" : "bg-surface-dark text-text-muted cursor-not-allowed")}
                    >
                      {step === 4 ? "Calculate" : "Next"}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Partnership CTA */}
        <section className="py-12 lg:py-16 bg-surface-dark">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-cta text-cta-foreground font-semibold rounded-xl hover:bg-cta/90 transition-colors shadow-lg shadow-cta/20"
              >
                Let's Talk Partnership
                <span>→</span>
              </Link>
              <span className="text-text-muted">or</span>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 px-6 py-3 border border-border/50 rounded-xl text-foreground hover:border-accent-blue/50 transition-colors"
              >
                <Phone className="h-4 w-4 text-accent-blue" />
                {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </section>

        {/* Soft Divider */}
        <div className="container mx-auto px-6 lg:px-8 py-4">
          <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        </div>

        {/* Educational Content */}
        <section className="py-16 lg:py-24 bg-surface-elevated">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <InvestmentEducationalContent />
            </div>
          </div>
        </section>

        {/* Soft Divider */}
        <div className="container mx-auto px-6 lg:px-8 py-4">
          <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        </div>

        {/* Pricing Comparison */}
        <section className="py-16 lg:py-24 bg-surface-dark">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <PricingComparisonTable />
            </div>
          </div>
        </section>

        {/* Soft Divider */}
        <div className="container mx-auto px-6 lg:px-8 py-4">
          <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        </div>

        {/* Agency Partner Videos */}
        <AgencyPartnerVideos />

        <MarketExclusivity />

        {/* Contact Form Section */}
        <ContactForm />
      </main>
      
      <Footer />
    </>
  );
};

export default InvestmentCalculator;
