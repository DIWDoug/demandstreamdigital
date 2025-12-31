import { useState, useMemo } from "react";
import { Calculator, DollarSign, TrendingUp, Zap, Layers } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PaidMediaCalculator = () => {
  const [adSpend, setAdSpend] = useState<number>(3000);
  const [platforms, setPlatforms] = useState<number>(1);
  const [customRetainer, setCustomRetainer] = useState<number | null>(null);

  const SETUP_FEE = 250;
  const OEM_RATE = 0.20;
  const SUGGESTED_FEE_RATE = 0.20;
  const MIN_RETAINER = 500;
  const MIN_OEM = 300;

  const calculations = useMemo(() => {
    // Suggested agency fee: 20% of ad spend or $500 min (per platform)
    const suggestedPerPlatform = Math.max(adSpend * SUGGESTED_FEE_RATE, MIN_RETAINER);
    const suggestedRetainer = suggestedPerPlatform * platforms;
    
    // Use custom retainer if set, otherwise use suggested
    const clientRetainer = customRetainer !== null ? customRetainer : suggestedRetainer;
    
    // OEM Cost: 20% of retainer or $300 minimum
    const monthlyOEM = Math.max(Math.round(clientRetainer * OEM_RATE), MIN_OEM);
    
    // Your margin
    const monthlyMargin = clientRetainer - monthlyOEM;
    
    // First month includes setup
    const firstMonthOEM = SETUP_FEE + monthlyOEM;
    const firstMonthMargin = clientRetainer - firstMonthOEM;
    
    // Annual projections
    const annualRevenue = clientRetainer * 12;
    const annualOEM = SETUP_FEE + (monthlyOEM * 12);
    const annualMargin = annualRevenue - annualOEM;
    
    return {
      suggestedPerPlatform,
      suggestedRetainer,
      clientRetainer,
      monthlyOEM,
      monthlyMargin,
      firstMonthOEM,
      firstMonthMargin,
      annualRevenue,
      annualOEM,
      annualMargin
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
            Typical agency fee: 20% of ad spend or $500, whichever is greater. Your OEM cost: 20% of the retainer per platform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Pricing Rules Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-card/50 border border-border/50 rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground mb-1">Setup Fee</p>
              <p className="text-2xl font-bold text-foreground">{formatCurrency(SETUP_FEE)}</p>
              <p className="text-xs text-muted-foreground">one-time</p>
            </div>
            <div className="bg-card/50 border border-border/50 rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground mb-1">Suggested Client Fee</p>
              <p className="text-2xl font-bold text-foreground">20%</p>
              <p className="text-xs text-muted-foreground">of ad spend or $500 min</p>
            </div>
            <div className="bg-card/50 border border-border/50 rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground mb-1">Your OEM Cost</p>
              <p className="text-2xl font-bold text-foreground">20%</p>
              <p className="text-xs text-muted-foreground">of retainer, $300 min</p>
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
              </div>

              <div>
                <Label htmlFor="platforms" className="text-base font-medium text-foreground mb-3 block">
                  Platforms
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
                    <option value={1}>1 Platform</option>
                    <option value={2}>2 Platforms</option>
                    <option value={3}>3 Platforms</option>
                    <option value={4}>4 Platforms</option>
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="retainer" className="text-base font-medium text-foreground mb-3 block flex items-center justify-between">
                  <span>Client Retainer</span>
                  {customRetainer !== null && (
                    <button
                      onClick={resetToSuggested}
                      className="text-xs text-primary hover:underline"
                    >
                      Reset to suggested
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
                    Suggested: {formatCurrency(calculations.suggestedPerPlatform)}/platform
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
                    {formatCurrency(SETUP_FEE)}
                  </p>
                </div>
                
                <div className="bg-background border border-border rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Monthly (20% or $300 min)</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">
                    {formatCurrency(calculations.monthlyOEM)}
                  </p>
                </div>
              </div>

              {/* Your Margin */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  Your Margin (80%)
                </h3>
                
                <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">First Month</span>
                    <span className="text-xs text-muted-foreground">after setup</span>
                  </div>
                  <p className="text-2xl font-bold text-green-400">
                    {formatCurrency(calculations.firstMonthMargin)}
                  </p>
                </div>
                
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-muted-foreground">Monthly (ongoing)</span>
                  </div>
                  <p className="text-2xl font-bold text-green-400">
                    {formatCurrency(calculations.monthlyMargin)}
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
