import { useState, useMemo } from "react";
import { Calculator, DollarSign, TrendingUp, Zap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Platform logos
import googleAdsLogo from "@/assets/logos/google-ads.png";
import metaLogo from "@/assets/logos/meta.svg";
import microsoftLogo from "@/assets/logos/microsoft.svg";
import linkedinLogo from "@/assets/logos/linkedin.svg";

const PLATFORMS = [
  { id: "google", name: "Google Ads", logo: googleAdsLogo },
  { id: "meta", name: "Meta", logo: metaLogo },
  { id: "microsoft", name: "Microsoft", logo: microsoftLogo },
  { id: "linkedin", name: "LinkedIn", logo: linkedinLogo },
];

// Hybrid pricing: flat fee per account with spend caps
const OEM_TIERS = [
  { maxSpend: 2500, oem: 299, label: "Up to $2,500" },
  { maxSpend: 5000, oem: 399, label: "Up to $5,000" },
  { maxSpend: 10000, oem: 499, label: "Up to $10,000" },
  { maxSpend: 25000, oem: 749, label: "Up to $25,000" },
  { maxSpend: Infinity, oem: 999, label: "$25,000+" },
];

const PaidMediaCalculator = () => {
  const [adSpend, setAdSpend] = useState<number>(5000);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["google"]);
  const [customRetainer, setCustomRetainer] = useState<number | null>(null);

  const platforms = selectedPlatforms.length || 1;

  const SETUP_FEE = 299; // Per-account setup: GTM, GA, tracking, audiences, restructuring
  const SUGGESTED_FEE_RATE = 0.20;
  const MIN_RETAINER = 500;

  const calculations = useMemo(() => {
    // Find the current tier based on ad spend
    const currentTier = OEM_TIERS.find(tier => adSpend <= tier.maxSpend) || OEM_TIERS[OEM_TIERS.length - 1];
    
    // Suggested agency fee: 20% of ad spend or $500 min (per platform)
    const suggestedPerPlatform = Math.max(adSpend * SUGGESTED_FEE_RATE, MIN_RETAINER);
    const suggestedRetainer = suggestedPerPlatform * platforms;
    
    // Use custom retainer if set, otherwise use suggested
    const clientRetainer = customRetainer !== null ? customRetainer : suggestedRetainer;
    
    // OEM Cost: flat fee per account/platform
    const monthlyOEM = currentTier.oem * platforms;
    
    // Your margin
    const monthlyMargin = clientRetainer - monthlyOEM;
    
    // Setup fees
    const totalSetup = SETUP_FEE * platforms;
    const suggestedClientSetup = 599 * platforms; // Recommended client setup fee
    const setupMargin = suggestedClientSetup - totalSetup;
    const setupMarginPercent = suggestedClientSetup > 0 ? Math.round((setupMargin / suggestedClientSetup) * 100) : 0;
    
    // Annual projections (setup fee is per account, first month only)
    const annualRevenue = (clientRetainer * 12) + suggestedClientSetup;
    const annualOEM = totalSetup + (monthlyOEM * 12);
    const annualMargin = annualRevenue - annualOEM;
    const annualMarginPercent = annualRevenue > 0 ? Math.round((annualMargin / annualRevenue) * 100) : 0;
    
    // Margin percentage
    const marginPercent = clientRetainer > 0 ? Math.round((monthlyMargin / clientRetainer) * 100) : 0;
    
    // Check if near tier boundary (within $500 of next tier)
    const currentTierIndex = OEM_TIERS.indexOf(currentTier);
    const nextTier = currentTierIndex < OEM_TIERS.length - 1 ? OEM_TIERS[currentTierIndex + 1] : null;
    const spendHeadroom = currentTier.maxSpend === Infinity ? null : currentTier.maxSpend - adSpend;
    
    return {
      currentTier,
      nextTier,
      totalSetup,
      suggestedClientSetup,
      setupMargin,
      setupMarginPercent,
      spendHeadroom,
      suggestedPerPlatform,
      suggestedRetainer,
      clientRetainer,
      monthlyOEM,
      monthlyMargin,
      annualRevenue,
      annualOEM,
      annualMargin,
      annualMarginPercent,
      marginPercent
    };
  }, [adSpend, platforms, customRetainer]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const handleRetainerChange = (value: number) => {
    setCustomRetainer(value);
  };

  const resetToSuggested = () => {
    setCustomRetainer(null);
  };

  return (
    <section className="py-20 bg-surface-dark">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Calculator className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">OEM Pricing Calculator</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Calculate Your Paid Media Margin
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flat fee per account with spend caps. One-time setup covers GTM, tracking, audiences, and restructuring.
          </p>
          <div className="flex items-center justify-center gap-2 mt-3 flex-wrap">
            <p className="text-sm text-muted-foreground">
              For <span className="text-foreground">lead generation</span> and <span className="text-foreground">live ticket/experiential</span> campaigns.
            </p>
            <a 
              href="#start-conversation" 
              className="text-sm text-primary hover:underline font-medium"
            >
              E-commerce or franchises? Request a custom quote →
            </a>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tiered Pricing Table */}
          <div className="bg-card/50 border border-border/50 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Per Account Pricing
              </h3>
              <span className="text-xs text-muted-foreground">+ {formatCurrency(SETUP_FEE)} setup per account</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {OEM_TIERS.map((tier, index) => (
                <div 
                  key={index}
                  className={`rounded-lg p-3 text-center transition-all ${
                    calculations.currentTier === tier 
                      ? 'bg-primary/20 border-2 border-primary' 
                      : 'bg-background/50 border border-border/50'
                  }`}
                >
                  <p className={`text-lg font-bold mb-1 ${
                    calculations.currentTier === tier ? 'text-primary' : 'text-foreground'
                  }`}>
                    {formatCurrency(tier.oem)}
                  </p>
                  <p className="text-xs text-muted-foreground">{tier.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Calculator Card */}
          <div className="bg-card border border-border rounded-xl p-8">
            {/* Inputs */}
            <div className="space-y-6 mb-8">
              {/* Ad Spend & Retainer Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="adSpend" className="text-base font-medium text-foreground mb-3 block">
                    Monthly Ad Spend
                  </Label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="adSpend"
                      type="number"
                      min={0}
                      step={500}
                      value={adSpend}
                      onChange={(e) => {
                        setAdSpend(Number(e.target.value));
                        setCustomRetainer(null);
                      }}
                      className="pl-10 text-lg h-12 bg-background border-border"
                      placeholder="Ad spend"
                    />
                  </div>
                  {calculations.spendHeadroom !== null && calculations.spendHeadroom > 0 && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {formatCurrency(calculations.spendHeadroom)} headroom in this tier
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="retainer" className="text-base font-medium text-foreground mb-3 block flex items-center justify-between">
                    <span>Client Retainer</span>
                    {customRetainer !== null && (
                      <button
                        onClick={resetToSuggested}
                        className="text-xs text-primary hover:underline"
                      >
                        Reset
                      </button>
                    )}
                  </Label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="retainer"
                      type="number"
                      min={0}
                      step={100}
                      value={customRetainer !== null ? customRetainer : calculations.suggestedRetainer}
                      onChange={(e) => handleRetainerChange(Number(e.target.value))}
                      className="pl-10 text-lg h-12 bg-background border-border"
                      placeholder="Retainer"
                    />
                  </div>
                  {customRetainer === null && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Suggested: 20% of spend or $500 min
                    </p>
                  )}
                </div>
              </div>

              {/* Platforms Row */}
              <div>
                <Label className="text-base font-medium text-foreground mb-3 block">
                  Platforms
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {PLATFORMS.map((platform) => {
                    const isSelected = selectedPlatforms.includes(platform.id);
                    return (
                      <button
                        key={platform.id}
                        type="button"
                        onClick={() => {
                          if (isSelected) {
                            if (selectedPlatforms.length > 1) {
                              setSelectedPlatforms(selectedPlatforms.filter(p => p !== platform.id));
                            }
                          } else {
                            setSelectedPlatforms([...selectedPlatforms, platform.id]);
                          }
                          setCustomRetainer(null);
                        }}
                        className={`flex flex-col items-center gap-2 p-4 rounded-lg border transition-all ${
                          isSelected 
                            ? 'bg-primary/20 border-primary' 
                            : 'bg-background/50 border-border/50 hover:border-border'
                        }`}
                      >
                        <img 
                          src={platform.logo} 
                          alt={platform.name} 
                          className="h-8 w-auto object-contain"
                        />
                        <span className={`text-xs font-medium ${isSelected ? 'text-primary' : 'text-muted-foreground'}`}>
                          {platform.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {platforms} {platforms === 1 ? 'platform' : 'platforms'} × {formatCurrency(calculations.currentTier.oem)} = {formatCurrency(calculations.monthlyOEM)}/mo
                </p>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Your Cost */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-muted-foreground"></span>
                  Your Cost (OEM)
                </h3>
                
                <div className="bg-background border border-border rounded-lg p-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Setup (one-time)</span>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-foreground">
                    {formatCurrency(calculations.totalSetup)}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {formatCurrency(SETUP_FEE)} × {platforms} {platforms === 1 ? 'account' : 'accounts'}
                  </p>
                  <div className="mt-3 pt-3 border-t border-border/50">
                    <p className="text-xs text-muted-foreground">
                      Recommend charging client: <span className="text-primary font-medium">{formatCurrency(calculations.suggestedClientSetup)}</span>
                    </p>
                    <p className="text-xs text-green-400 mt-0.5">
                      +{formatCurrency(calculations.setupMargin)} margin ({calculations.setupMarginPercent}%)
                    </p>
                  </div>
                </div>
                
                <div className="bg-background border border-border rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Monthly</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">
                    {formatCurrency(calculations.monthlyOEM)}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {formatCurrency(calculations.currentTier.oem)} × {platforms} {platforms === 1 ? 'account' : 'accounts'}
                  </p>
                </div>
              </div>

              {/* Your Margin */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  Your Margin ({calculations.marginPercent}%)
                </h3>
                
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-muted-foreground">Monthly</span>
                    </div>
                    <span className="text-sm font-semibold text-green-400">{calculations.marginPercent}%</span>
                  </div>
                  <p className="text-3xl font-bold text-green-400">
                    {formatCurrency(calculations.monthlyMargin)}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {formatCurrency(calculations.clientRetainer)} retainer - {formatCurrency(calculations.monthlyOEM)} OEM
                  </p>
                </div>
              </div>
            </div>

            {/* Annual Summary */}
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <h4 className="text-sm font-semibold text-primary mb-4">12-Month Projection</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Client Pays</p>
                  <p className="text-xl font-bold text-foreground">{formatCurrency(calculations.annualRevenue)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Your OEM Cost</p>
                  <p className="text-xl font-bold text-foreground">{formatCurrency(calculations.annualOEM)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Your Margin</p>
                  <p className="text-xl font-bold text-green-400">{formatCurrency(calculations.annualMargin)}</p>
                  <p className="text-xs text-green-400 mt-0.5">{calculations.annualMarginPercent}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaidMediaCalculator;
