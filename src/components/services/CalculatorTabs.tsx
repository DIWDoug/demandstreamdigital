import { useState } from "react";
import { Calculator, DollarSign, TrendingUp, Users, UserCheck, MapPin, Building, Globe, Search, MousePointerClick, Mail, Award, ArrowRight, ArrowLeft, Phone, ChevronDown, Check, Clock, BarChart3, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { metros, searchMetros, formatPopulation, tierMultipliers, type Metro } from "@/data/metros";
import { industries, getIndustriesByCategory, getCpcMultiplier, getSeoComplexityMultiplier, competitionMultipliers, industryBenchmarks, type Industry, type IndustryBenchmark } from "@/data/industries";
import { useMemo } from "react";

type CalculatorTab = "roi" | "investment";

// ============ ROI CALCULATOR ============
const ROICalculatorContent = () => {
  const [visitors, setVisitors] = useState(10000);
  const [leadConversionRate, setLeadConversionRate] = useState(2.5);
  const [leadToCustomerRate, setLeadToCustomerRate] = useState(10);
  const [revenuePerCustomer, setRevenuePerCustomer] = useState(1000);
  const [marketingCost, setMarketingCost] = useState(5000);
  const [selectedBenchmark, setSelectedBenchmark] = useState<IndustryBenchmark | null>(null);
  const [showBenchmarks, setShowBenchmarks] = useState(false);

  const applyBenchmark = (benchmark: IndustryBenchmark) => {
    setLeadConversionRate(benchmark.conversionRate);
    setLeadToCustomerRate(benchmark.closeRate);
    setRevenuePerCustomer(benchmark.avgCustomerValue);
    setSelectedBenchmark(benchmark);
    setShowBenchmarks(false);
  };

  // Calculate revenue for given conversion rate and traffic
  const calculateRevenue = (convRate: number, traffic: number) => {
    const leads = Math.round(traffic * (convRate / 100));
    const customers = Math.round(leads * (leadToCustomerRate / 100));
    return customers * revenuePerCustomer;
  };

  const results = useMemo(() => {
    const totalLeads = Math.round(visitors * (leadConversionRate / 100));
    const newCustomers = Math.round(totalLeads * (leadToCustomerRate / 100));
    const inboundRevenue = newCustomers * revenuePerCustomer;
    const roi = marketingCost > 0 
      ? Math.round(((inboundRevenue - marketingCost) / marketingCost) * 100) 
      : 0;

    return { totalLeads, newCustomers, inboundRevenue, roi };
  }, [visitors, leadConversionRate, leadToCustomerRate, revenuePerCustomer, marketingCost]);

  // Growth forecast calculations
  const growthForecast = useMemo(() => {
    const baseRevenue = results.inboundRevenue;
    
    // Conversion rate improvements
    const conversionIncreases = [0.5, 1, 1.5, 2];
    const conversionGrowth = conversionIncreases.map(increase => ({
      increase,
      revenue: calculateRevenue(leadConversionRate + increase, visitors) - baseRevenue
    }));

    // Traffic improvements
    const trafficIncreases = [10, 25, 50, 100];
    const trafficGrowth = trafficIncreases.map(increase => ({
      increase,
      revenue: calculateRevenue(leadConversionRate, visitors * (1 + increase / 100)) - baseRevenue
    }));

    // Combined improvements (1% conversion + 30% traffic)
    const combinedRevenue = calculateRevenue(leadConversionRate + 1, visitors * 1.3) - baseRevenue;

    return { conversionGrowth, trafficGrowth, combinedRevenue };
  }, [visitors, leadConversionRate, leadToCustomerRate, revenuePerCustomer, results.inboundRevenue]);

  const InputField = ({ 
    label, 
    value, 
    onChange, 
    suffix,
    tooltip
  }: { 
    label: string; 
    value: number; 
    onChange: (val: number) => void;
    suffix?: string;
    tooltip?: string;
  }) => (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label className="block text-sm text-text-muted font-body">{label}</label>
        {tooltip && (
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button type="button" className="text-text-muted hover:text-accent-blue transition-colors">
                  <Info className="h-3.5 w-3.5" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-xs bg-surface-elevated border-border/50 text-foreground z-50">
                <p className="text-sm font-body">{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <div className="relative">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value) || 0)}
          className="w-full px-4 py-3.5 rounded-lg bg-surface-dark border border-border/50 text-foreground text-lg font-medium focus:outline-none focus:border-accent-blue transition-colors"
        />
        {suffix && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted text-sm">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );

  const ResultCard = ({ 
    label, 
    value, 
    sublabel,
    icon: Icon,
    highlight = false
  }: { 
    label: string; 
    value: string; 
    sublabel: string;
    icon: React.ElementType;
    highlight?: boolean;
  }) => (
    <div className={cn(
      "rounded-xl p-5 border transition-all",
      highlight 
        ? "bg-cta/5 border-cta/30" 
        : "bg-surface-dark border-border/30"
    )}>
      <div className="flex items-center gap-2 mb-3">
        <Icon className={cn("h-4 w-4", highlight ? "text-cta" : "text-accent-blue")} />
        <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">{label}</span>
      </div>
      <p className="text-3xl md:text-4xl font-bold mb-1 text-cta">
        {value}
      </p>
      <p className="text-sm text-text-muted font-body">{sublabel}</p>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Industry Benchmarks Panel */}
      <div className="bg-surface-elevated rounded-2xl p-6 border border-border/30">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent-blue/10">
              <BarChart3 className="h-5 w-5 text-accent-blue" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Industry Benchmarks</h3>
              <p className="text-sm text-text-muted">Select your client's industry to auto-fill typical rates</p>
            </div>
          </div>
          <button
            onClick={() => setShowBenchmarks(!showBenchmarks)}
            className="px-4 py-2 rounded-lg bg-accent-blue/10 text-accent-blue text-sm font-medium hover:bg-accent-blue/20 transition-colors flex items-center gap-2"
          >
            {selectedBenchmark ? selectedBenchmark.name : "Select Industry"}
            <ChevronDown className={cn("h-4 w-4 transition-transform", showBenchmarks && "rotate-180")} />
          </button>
        </div>

        {showBenchmarks && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4 p-4 rounded-xl bg-surface-dark border border-border/30">
            {industryBenchmarks.map((benchmark) => (
              <button
                key={benchmark.id}
                onClick={() => applyBenchmark(benchmark)}
                className={cn(
                  "p-3 rounded-lg text-left transition-all border",
                  selectedBenchmark?.id === benchmark.id
                    ? "bg-accent-blue/10 border-accent-blue/50 text-foreground"
                    : "bg-surface-elevated border-border/30 text-text-muted hover:border-accent-blue/30 hover:text-foreground"
                )}
              >
                <p className="text-sm font-medium truncate">{benchmark.name}</p>
                <p className="text-xs text-text-muted mt-1">{benchmark.conversionRate}% conv · {benchmark.closeRate}% close</p>
              </button>
            ))}
          </div>
        )}

        {selectedBenchmark && !showBenchmarks && (
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="p-3 rounded-lg bg-surface-dark border border-border/30">
              <p className="text-xs text-text-muted mb-1">Avg. Conversion Rate</p>
              <p className="text-lg font-semibold text-foreground">{selectedBenchmark.conversionRate}%</p>
            </div>
            <div className="p-3 rounded-lg bg-surface-dark border border-border/30">
              <p className="text-xs text-text-muted mb-1">Avg. Close Rate</p>
              <p className="text-lg font-semibold text-foreground">{selectedBenchmark.closeRate}%</p>
            </div>
            <div className="p-3 rounded-lg bg-surface-dark border border-border/30">
              <p className="text-xs text-text-muted mb-1">Avg. Customer Value</p>
              <p className="text-lg font-semibold text-foreground">${selectedBenchmark.avgCustomerValue.toLocaleString()}</p>
            </div>
          </div>
        )}
      </div>

      {/* Main Calculator Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-surface-elevated rounded-2xl p-6 md:p-8 border border-border/30 space-y-5">
          <InputField 
            label="Client's Website Visitors (Monthly)" 
            value={visitors} 
            onChange={setVisitors}
            tooltip="Your client's average monthly unique visitors. Ask them to check Google Analytics, or estimate based on their market size and current marketing efforts."
          />
          <InputField 
            label="Lead Conversion Rate (%)" 
            value={leadConversionRate} 
            onChange={setLeadConversionRate} 
            suffix="%"
            tooltip="Percentage of website visitors who become leads. Industry average is 2-5%. Use this to show clients the impact of conversion optimization work."
          />
          <InputField 
            label="Lead-to-Customer Rate (%)" 
            value={leadToCustomerRate} 
            onChange={setLeadToCustomerRate} 
            suffix="%"
            tooltip="Your client's close rate—percentage of leads that become paying customers. This depends on their sales process. Typical B2B is 15-30%, local services 25-40%."
          />
          <InputField 
            label="Avg. Customer Value ($)" 
            value={revenuePerCustomer} 
            onChange={setRevenuePerCustomer}
            tooltip="Average revenue per customer for your client. For recurring services, use lifetime value (LTV). This is key to demonstrating marketing ROI."
          />
          <InputField 
            label="Monthly Retainer ($)" 
            value={marketingCost} 
            onChange={setMarketingCost}
            tooltip="The monthly retainer you charge this client, plus any ad spend. Use this to demonstrate the ROI of your services."
          />
        </div>

        <div className="grid grid-cols-2 gap-4 content-start">
          <ResultCard label="Leads for Client" value={results.totalLeads.toLocaleString()} sublabel="Monthly lead generation" icon={Users} />
          <ResultCard label="New Customers" value={results.newCustomers.toLocaleString()} sublabel="Monthly customer acquisition" icon={UserCheck} />
          <ResultCard label="Client Revenue" value={`$${results.inboundRevenue.toLocaleString()}`} sublabel="Monthly revenue generated" icon={DollarSign} />
          <ResultCard label="Client's Marketing ROI" value={`${results.roi}%`} sublabel="Return on their investment with you" icon={TrendingUp} highlight={results.roi > 100} />
        </div>
      </div>

      {/* Growth Forecast Section */}
      <div className="bg-surface-elevated rounded-2xl p-6 md:p-8 border border-border/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-cta/10">
            <TrendingUp className="h-5 w-5 text-cta" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Growth Forecast</h3>
            <p className="text-sm text-text-muted">Show clients how incremental improvements impact their revenue</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Conversion Rate Improvements */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider">Conversion Rate +</h4>
            <div className="space-y-2">
              {growthForecast.conversionGrowth.map(({ increase, revenue }) => (
                <div key={increase} className="flex items-center justify-between p-3 rounded-lg bg-surface-dark border border-border/30">
                  <span className="text-sm text-foreground">+{increase}%</span>
                  <span className={cn(
                    "text-sm font-semibold",
                    revenue > 0 ? "text-cta" : "text-text-muted"
                  )}>
                    {revenue > 0 ? "+" : ""}${revenue.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Traffic Improvements */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider">Website Traffic +</h4>
            <div className="space-y-2">
              {growthForecast.trafficGrowth.map(({ increase, revenue }) => (
                <div key={increase} className="flex items-center justify-between p-3 rounded-lg bg-surface-dark border border-border/30">
                  <span className="text-sm text-foreground">+{increase}%</span>
                  <span className={cn(
                    "text-sm font-semibold",
                    revenue > 0 ? "text-cta" : "text-text-muted"
                  )}>
                    {revenue > 0 ? "+" : ""}${revenue.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Combined Impact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider">Combined Impact</h4>
            <div className="p-4 rounded-xl bg-cta/5 border border-cta/30 h-[calc(100%-2rem)] flex flex-col justify-center">
              <p className="text-xs text-text-muted mb-1">+1% Conversion & +30% Traffic</p>
              <p className="text-2xl font-bold text-cta">
                +${growthForecast.combinedRevenue.toLocaleString()}
              </p>
              <p className="text-xs text-text-muted mt-2">Additional client revenue/month</p>
            </div>
          </div>
        </div>

        <p className="text-xs text-text-muted mt-6 text-center">
          Use these projections to demonstrate the value of your services. Show clients how improved conversion rates and increased traffic translate to real revenue.
        </p>
      </div>
    </div>
  );
};

// ============ INVESTMENT CALCULATOR ============
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

const OEM_HOURLY_RATE = 60;
const MSRP_HOURLY_LOW = 120;
const MSRP_HOURLY_HIGH = 150;
const MIN_MONTHLY = 500;

const baseServiceHours: Record<string, { hours: number; label: string }> = {
  localSeo: { hours: 10, label: "Local SEO" },
  gbp: { hours: 5, label: "Google Business Profile" },
  googleAds: { hours: 8, label: "Google Ads" },
  metaAds: { hours: 7, label: "Meta Ads" },
  email: { hours: 6, label: "Email Marketing" },
  authority: { hours: 8, label: "Authority Building" }
};

const InvestmentCalculatorContent = () => {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [showResults, setShowResults] = useState(false);
  const [metroSearch, setMetroSearch] = useState("");
  const [showMetroDropdown, setShowMetroDropdown] = useState(false);
  const [showIndustryDropdown, setShowIndustryDropdown] = useState(false);
  const [customMsrpRate, setCustomMsrpRate] = useState(135);

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
        const msrpLow = Math.round(hoursLow * customMsrpRate / 25) * 25;
        const msrpHigh = Math.round(hoursHigh * customMsrpRate / 25) * 25;
        totalHoursLow += hoursLow;
        totalHoursHigh += hoursHigh;
        breakdown.push({ service: serviceData.label, hoursLow, hoursHigh, oemLow, oemHigh, msrpLow, msrpHigh });
      }
    });

    let oemTotalLow = Math.round(totalHoursLow * OEM_HOURLY_RATE / 25) * 25;
    let oemTotalHigh = Math.round(totalHoursHigh * OEM_HOURLY_RATE / 25) * 25;
    if (formData.metro?.tier === 'small') {
      oemTotalLow = Math.max(oemTotalLow, MIN_MONTHLY);
    }
    const msrpTotalLow = Math.round(totalHoursLow * customMsrpRate / 25) * 25;
    const msrpTotalHigh = Math.round(totalHoursHigh * customMsrpRate / 25) * 25;
    const marginPercent = Math.round(((customMsrpRate - OEM_HOURLY_RATE) / OEM_HOURLY_RATE) * 100);

    return { 
      oemLow: oemTotalLow, oemHigh: oemTotalHigh,
      msrpLow: msrpTotalLow, msrpHigh: msrpTotalHigh,
      totalHoursLow, totalHoursHigh, breakdown,
      oemHourlyRate: OEM_HOURLY_RATE, msrpHourlyRate: customMsrpRate, marginPercent,
      marketInfo: { metro: formData.metro, industry: formData.industry, avgCpc: formData.industry.avgCpc }
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

  const ServiceCheckbox = ({ service, icon: Icon, label }: { service: string; icon: React.ElementType; label: string }) => (
    <button
      type="button"
      onClick={() => toggleService(service)}
      className={cn(
        "flex items-center gap-3 px-4 py-4 rounded-xl border text-left transition-all",
        formData.services.includes(service) ? "bg-cta/10 border-cta" : "bg-surface-elevated border-border/50 hover:border-accent-blue/50"
      )}
    >
      <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", formData.services.includes(service) ? "bg-cta/20" : "bg-accent-blue/10")}>
        <Icon className={cn("h-5 w-5", formData.services.includes(service) ? "text-cta" : "text-accent-blue")} />
      </div>
      <span className={cn("font-medium", formData.services.includes(service) ? "text-cta" : "text-foreground")}>{label}</span>
    </button>
  );

  const estimate = showResults ? calculateEstimate() : null;

  return (
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
                    Your hourly rate
                  </label>
                  <span className="text-lg font-bold text-foreground">${customMsrpRate}/hr</span>
                </div>
                <input
                  type="range"
                  min="80"
                  max="200"
                  step="5"
                  value={customMsrpRate}
                  onChange={(e) => setCustomMsrpRate(Number(e.target.value))}
                  className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-accent-blue"
                />
                <div className="flex justify-between text-xs text-text-muted mt-1">
                  <span>$80/hr</span>
                  <span>$200/hr</span>
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

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a href="#contact" className="btn-cta group flex items-center gap-2 w-full sm:w-auto justify-center">
                Get a Precise Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="tel:2143072995" className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-text-secondary hover:text-foreground hover:border-border-subtle transition-colors font-medium text-sm">
                <Phone className="h-4 w-4" />
                (214) 307-2995
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
  );
};

// ============ MAIN TABBED COMPONENT ============
const CalculatorTabs = () => {
  const [activeTab, setActiveTab] = useState<CalculatorTab>("roi");

  return (
    <section className="py-20 lg:py-28 bg-surface-dark relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cta/10 text-cta text-sm font-medium mb-4">
              <Calculator className="h-4 w-4" />
              Agency Partner Tools
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Demonstrate Value to Your Clients
            </h2>
            <p className="text-text-secondary text-lg font-body max-w-2xl mx-auto">
              Use these calculators during sales conversations to show clients the ROI of inbound marketing—and scope your monthly investment with us.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-surface-elevated rounded-xl p-1.5 border border-border/30">
              <button
                onClick={() => setActiveTab("roi")}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all",
                  activeTab === "roi"
                    ? "bg-cta text-white shadow-lg"
                    : "text-text-secondary hover:text-foreground"
                )}
              >
                <TrendingUp className="h-4 w-4" />
                ROI Calculator
              </button>
              <button
                onClick={() => setActiveTab("investment")}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all",
                  activeTab === "investment"
                    ? "bg-cta text-white shadow-lg"
                    : "text-text-secondary hover:text-foreground"
                )}
              >
                <DollarSign className="h-4 w-4" />
                Investment Calculator
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === "roi" && <ROICalculatorContent />}
          {activeTab === "investment" && <InvestmentCalculatorContent />}
        </div>
      </div>
    </section>
  );
};

export default CalculatorTabs;
