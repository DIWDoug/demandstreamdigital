import { useState, useMemo } from "react";
import { Calculator, DollarSign, TrendingUp, Zap, Layers } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
  const [platforms, setPlatforms] = useState<number>(1);
  const [customRetainer, setCustomRetainer] = useState<number | null>(null);

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
    
    // Annual projections (setup fee is per account, first month only)
    const annualRevenue = clientRetainer * 12;
    const totalSetup = SETUP_FEE * platforms;
    const annualOEM = totalSetup + (monthlyOEM * 12);
    const annualMargin = annualRevenue - annualOEM;
    
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
      spendHeadroom,
      suggestedPerPlatform,
      suggestedRetainer,
      clientRetainer,
      monthlyOEM,
      monthlyMargin,
      annualRevenue,
      annualOEM,
      annualMargin,
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
                <Label htmlFor="platforms" className="text-base font-medium text-foreground mb-3 block">
                  Accounts
                </Label>
                <div className="relative">
                  <Layers className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <select
                    id="platforms"
                    value={platforms}
                    onChange={(e) => {
                      setPlatforms(Number(e.target.value));
                      setCustomRetainer(null);
                    }}
                    className="w-full pl-10 pr-4 text-lg h-12 bg-background border border-border rounded-md text-foreground"
                  >
                    <option value={1}>1 Account</option>
                    <option value={2}>2 Accounts</option>
                    <option value={3}>3 Accounts</option>
                    <option value={4}>4 Accounts</option>
                  </select>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {formatCurrency(calculations.currentTier.oem)} × {platforms} = {formatCurrency(calculations.monthlyOEM)}
                </p>
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

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Your Cost */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-muted-foreground"></span>
                  Your Cost (OEM)
                </h3>
                
                <div className="bg-background border border-border rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Setup (one-time)</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">
                    {formatCurrency(calculations.totalSetup)}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {formatCurrency(SETUP_FEE)} × {platforms} {platforms === 1 ? 'account' : 'accounts'}
                  </p>
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
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-muted-foreground">Monthly</span>
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
