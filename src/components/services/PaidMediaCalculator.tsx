import { useState, useMemo } from "react";
import { Calculator, DollarSign, TrendingUp, Zap, Percent } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const PaidMediaCalculator = () => {
  const [budget, setBudget] = useState<number>(3000);
  const [msrpMarkup, setMsrpMarkup] = useState<number>(50);

  const MIN_BUDGET = 2000;
  const MIN_SETUP_FEE = 250;
  const SETUP_FEE_RATE = 0.05;
  const MIN_MANAGEMENT_FEE = 200;
  const BASE_TIER_LIMIT = 3000;
  const BASE_TIER_RATE = 0.10;
  const EXCESS_TIER_RATE = 0.05;

  const calculations = useMemo(() => {
    const effectiveBudget = Math.max(budget, MIN_BUDGET);
    const markupMultiplier = 1 + (msrpMarkup / 100);
    
    // Setup Fee: 10% of budget OR $500 minimum
    const setupFeeCalculated = effectiveBudget * SETUP_FEE_RATE;
    const setupFeeOEM = Math.max(setupFeeCalculated, MIN_SETUP_FEE);
    const setupFeeMSRP = Math.round(setupFeeOEM * markupMultiplier);
    
    // Management Fee: 20% of first $3k + 10% of excess, OR $400 minimum
    const baseTierAmount = Math.min(effectiveBudget, BASE_TIER_LIMIT);
    const excessAmount = Math.max(effectiveBudget - BASE_TIER_LIMIT, 0);
    
    const baseFee = baseTierAmount * BASE_TIER_RATE;
    const excessFee = excessAmount * EXCESS_TIER_RATE;
    const managementFeeCalculated = baseFee + excessFee;
    const managementFeeOEM = Math.max(managementFeeCalculated, MIN_MANAGEMENT_FEE);
    const managementFeeMSRP = Math.round(managementFeeOEM * markupMultiplier);
    
    // Totals
    const firstMonthOEM = setupFeeOEM + managementFeeOEM;
    const firstMonthMSRP = setupFeeMSRP + managementFeeMSRP;
    const monthlyMargin = managementFeeMSRP - managementFeeOEM;
    const setupMargin = setupFeeMSRP - setupFeeOEM;
    
    return {
      effectiveBudget,
      setupFeeOEM,
      setupFeeMSRP,
      setupFeeCalculated,
      setupFeeIsMinimum: setupFeeCalculated < MIN_SETUP_FEE,
      baseTierAmount,
      excessAmount,
      baseFee,
      excessFee,
      managementFeeOEM,
      managementFeeMSRP,
      managementFeeCalculated,
      managementFeeIsMinimum: managementFeeCalculated < MIN_MANAGEMENT_FEE,
      firstMonthOEM,
      firstMonthMSRP,
      monthlyMargin,
      setupMargin
    };
  }, [budget, msrpMarkup]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
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
            Calculate Your Paid Media Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See your OEM cost and set your client markup to calculate margins instantly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Pricing Rules Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-card/50 border border-border/50 rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground mb-1">Min. Budget</p>
              <p className="text-2xl font-bold text-foreground">$2,000</p>
            </div>
            <div className="bg-card/50 border border-border/50 rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground mb-1">Setup Fee (OEM)</p>
              <p className="text-2xl font-bold text-foreground">5%</p>
              <p className="text-xs text-muted-foreground">or $250 min</p>
            </div>
            <div className="bg-card/50 border border-border/50 rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground mb-1">Management (OEM)</p>
              <p className="text-2xl font-bold text-foreground">10%/5%</p>
              <p className="text-xs text-muted-foreground">tiered, or $200 min</p>
            </div>
          </div>

          {/* Calculator Card */}
          <div className="bg-card border border-border rounded-xl p-8">
            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <Label htmlFor="budget" className="text-base font-medium text-foreground mb-3 block">
                  Monthly Ad Budget
                </Label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="budget"
                    type="number"
                    min={MIN_BUDGET}
                    step={500}
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="pl-10 text-xl h-14 bg-background border-border"
                    placeholder="Enter monthly budget"
                  />
                </div>
                {budget < MIN_BUDGET && (
                  <p className="text-sm text-amber-400 mt-2">
                    Minimum budget is $2,000. Calculations use the minimum.
                  </p>
                )}
              </div>
              
              <div>
                <Label className="text-base font-medium text-foreground mb-3 block">
                  Your Client Markup: {msrpMarkup}%
                </Label>
                <div className="flex items-center gap-4 h-14">
                  <Slider
                    value={[msrpMarkup]}
                    onValueChange={(value) => setMsrpMarkup(value[0])}
                    min={20}
                    max={100}
                    step={5}
                    className="flex-1"
                  />
                  <div className="flex items-center gap-1 px-3 py-2 bg-background border border-border rounded-md min-w-[70px] justify-center">
                    <span className="text-lg font-semibold text-foreground">{msrpMarkup}</span>
                    <Percent className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>

            {/* Results Grid - OEM vs MSRP */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* OEM Column */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-muted-foreground"></span>
                  Your Cost (OEM)
                </h3>
                
                <div className="bg-background border border-border rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Setup Fee</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">
                    {formatCurrency(calculations.setupFeeOEM)}
                  </p>
                </div>
                
                <div className="bg-background border border-border rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Monthly Management</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">
                    {formatCurrency(calculations.managementFeeOEM)}
                  </p>
                </div>
                
                <div className="bg-muted/30 border border-border rounded-lg p-5">
                  <span className="text-sm text-muted-foreground">First Month Total</span>
                  <p className="text-2xl font-bold text-foreground">
                    {formatCurrency(calculations.firstMonthOEM)}
                  </p>
                </div>
              </div>

              {/* MSRP Column */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Client Price (MSRP)
                </h3>
                
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Setup Fee</span>
                    </div>
                    <span className="text-xs text-green-400 font-medium">
                      +{formatCurrency(calculations.setupMargin)} margin
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-primary">
                    {formatCurrency(calculations.setupFeeMSRP)}
                  </p>
                </div>
                
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Monthly Management</span>
                    </div>
                    <span className="text-xs text-green-400 font-medium">
                      +{formatCurrency(calculations.monthlyMargin)}/mo
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-primary">
                    {formatCurrency(calculations.managementFeeMSRP)}
                  </p>
                </div>
                
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-5">
                  <span className="text-sm text-primary">First Month Total</span>
                  <p className="text-2xl font-bold text-foreground">
                    {formatCurrency(calculations.firstMonthMSRP)}
                  </p>
                </div>
              </div>
            </div>

            {/* Margin Summary */}
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-sm font-medium text-green-400 mb-1">Your Monthly Margin</p>
                  <p className="text-3xl font-bold text-foreground">
                    {formatCurrency(calculations.monthlyMargin)}
                    <span className="text-lg text-muted-foreground font-normal">/month</span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">
                    First month margin: {formatCurrency(calculations.setupMargin + calculations.monthlyMargin)}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Annual margin: {formatCurrency(calculations.setupMargin + (calculations.monthlyMargin * 12))}
                  </p>
                </div>
              </div>
            </div>

            {/* Fee Structure Breakdown */}
            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                OEM Fee Structure
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p className="text-foreground font-medium">Setup Fee</p>
                  <ul className="text-muted-foreground space-y-1 pl-4">
                    <li>• 5% of monthly ad budget</li>
                    <li>• $250 minimum (whichever is greater)</li>
                    <li>• One-time payment</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="text-foreground font-medium">Management Fee</p>
                  <ul className="text-muted-foreground space-y-1 pl-4">
                    <li>• 10% on first $3,000 of budget</li>
                    <li>• 5% on budget above $3,000</li>
                    <li>• $200 minimum (whichever is greater)</li>
                  </ul>
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
