import { useState, useMemo } from "react";
import { Calculator, DollarSign, TrendingUp, Zap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PaidMediaCalculator = () => {
  const [budget, setBudget] = useState<number>(3000);

  const MIN_BUDGET = 2000;
  const MIN_SETUP_FEE = 500;
  const SETUP_FEE_RATE = 0.10;
  const MIN_MANAGEMENT_FEE = 400;
  const BASE_TIER_LIMIT = 3000;
  const BASE_TIER_RATE = 0.20;
  const EXCESS_TIER_RATE = 0.10;

  const calculations = useMemo(() => {
    const effectiveBudget = Math.max(budget, MIN_BUDGET);
    
    // Setup Fee: 10% of budget OR $500 minimum
    const setupFeeCalculated = effectiveBudget * SETUP_FEE_RATE;
    const setupFee = Math.max(setupFeeCalculated, MIN_SETUP_FEE);
    
    // Management Fee: 20% of first $3k + 10% of excess, OR $400 minimum
    const baseTierAmount = Math.min(effectiveBudget, BASE_TIER_LIMIT);
    const excessAmount = Math.max(effectiveBudget - BASE_TIER_LIMIT, 0);
    
    const baseFee = baseTierAmount * BASE_TIER_RATE;
    const excessFee = excessAmount * EXCESS_TIER_RATE;
    const managementFeeCalculated = baseFee + excessFee;
    const managementFee = Math.max(managementFeeCalculated, MIN_MANAGEMENT_FEE);
    
    // First Month Total
    const firstMonthTotal = setupFee + managementFee;
    
    return {
      effectiveBudget,
      setupFee,
      setupFeeCalculated,
      setupFeeIsMinimum: setupFeeCalculated < MIN_SETUP_FEE,
      baseTierAmount,
      excessAmount,
      baseFee,
      excessFee,
      managementFee,
      managementFeeCalculated,
      managementFeeIsMinimum: managementFeeCalculated < MIN_MANAGEMENT_FEE,
      firstMonthTotal
    };
  }, [budget]);

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
            <span className="text-sm font-medium text-primary">Pricing Calculator</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Calculate Your Paid Media Investment
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enter your client's monthly ad budget to see OEM pricing for setup and management fees.
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
              <p className="text-sm text-muted-foreground mb-1">Setup Fee</p>
              <p className="text-2xl font-bold text-foreground">10%</p>
              <p className="text-xs text-muted-foreground">or $500 min</p>
            </div>
            <div className="bg-card/50 border border-border/50 rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground mb-1">Management Fee</p>
              <p className="text-2xl font-bold text-foreground">20%/10%</p>
              <p className="text-xs text-muted-foreground">tiered, or $400 min</p>
            </div>
          </div>

          {/* Calculator Card */}
          <div className="bg-card border border-border rounded-xl p-8">
            {/* Input */}
            <div className="mb-8">
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
                  Minimum budget is $2,000. Calculations will use the minimum.
                </p>
              )}
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Setup Fee */}
              <div className="bg-background border border-border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">One-Time Setup Fee</h3>
                </div>
                <p className="text-3xl font-bold text-primary mb-2">
                  {formatCurrency(calculations.setupFee)}
                </p>
                <p className="text-sm text-muted-foreground">
                  {calculations.setupFeeIsMinimum 
                    ? `$500 minimum applies (10% = ${formatCurrency(calculations.setupFeeCalculated)})`
                    : `10% of ${formatCurrency(calculations.effectiveBudget)}`
                  }
                </p>
              </div>

              {/* Management Fee */}
              <div className="bg-background border border-border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Monthly Management Fee</h3>
                </div>
                <p className="text-3xl font-bold text-primary mb-2">
                  {formatCurrency(calculations.managementFee)}
                </p>
                {calculations.managementFeeIsMinimum ? (
                  <p className="text-sm text-muted-foreground">
                    $400 minimum applies
                  </p>
                ) : (
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Base: {formatCurrency(calculations.baseFee)} (20% of first $3k)</p>
                    {calculations.excessAmount > 0 && (
                      <p>Excess: {formatCurrency(calculations.excessFee)} (10% of {formatCurrency(calculations.excessAmount)})</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* First Month Total */}
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-sm font-medium text-primary mb-1">First Month Total</p>
                  <p className="text-4xl font-bold text-foreground">
                    {formatCurrency(calculations.firstMonthTotal)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">
                    Setup: {formatCurrency(calculations.setupFee)} + Management: {formatCurrency(calculations.managementFee)}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Recurring monthly: {formatCurrency(calculations.managementFee)}
                  </p>
                </div>
              </div>
            </div>

            {/* Fee Structure Breakdown */}
            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                Fee Structure Details
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p className="text-foreground font-medium">Setup Fee</p>
                  <ul className="text-muted-foreground space-y-1 pl-4">
                    <li>• 10% of monthly ad budget</li>
                    <li>• $500 minimum (whichever is greater)</li>
                    <li>• One-time payment</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="text-foreground font-medium">Management Fee</p>
                  <ul className="text-muted-foreground space-y-1 pl-4">
                    <li>• 20% on first $3,000 of budget</li>
                    <li>• 10% on budget above $3,000</li>
                    <li>• $400 minimum (whichever is greater)</li>
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
