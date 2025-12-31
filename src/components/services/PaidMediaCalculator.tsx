import { useState, useMemo } from "react";
import { Calculator, DollarSign, TrendingUp, Zap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PaidMediaCalculator = () => {
  const [clientRetainer, setClientRetainer] = useState<number>(1500);

  const SETUP_FEE = 250;
  const OEM_RATE = 0.20;

  const calculations = useMemo(() => {
    const retainer = Math.max(clientRetainer, 0);
    
    // OEM Cost: 20% of client retainer
    const monthlyOEM = Math.round(retainer * OEM_RATE);
    
    // Your margin: 80% of client retainer
    const monthlyMargin = retainer - monthlyOEM;
    
    // First month includes setup
    const firstMonthOEM = SETUP_FEE + monthlyOEM;
    const firstMonthMargin = retainer - firstMonthOEM;
    
    // Annual projections
    const annualRevenue = retainer * 12;
    const annualOEM = SETUP_FEE + (monthlyOEM * 12);
    const annualMargin = annualRevenue - annualOEM;
    
    return {
      retainer,
      monthlyOEM,
      monthlyMargin,
      firstMonthOEM,
      firstMonthMargin,
      annualRevenue,
      annualOEM,
      annualMargin
    };
  }, [clientRetainer]);

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
            Calculate Your Paid Media Margin
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enter what you charge your client. Your OEM cost is 20% — you keep the rest.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Pricing Rules Summary */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-card/50 border border-border/50 rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground mb-1">One-Time Setup</p>
              <p className="text-2xl font-bold text-foreground">{formatCurrency(SETUP_FEE)}</p>
            </div>
            <div className="bg-card/50 border border-border/50 rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground mb-1">Monthly OEM Rate</p>
              <p className="text-2xl font-bold text-foreground">20%</p>
              <p className="text-xs text-muted-foreground">of client retainer</p>
            </div>
          </div>

          {/* Calculator Card */}
          <div className="bg-card border border-border rounded-xl p-8">
            {/* Input */}
            <div className="mb-8">
              <Label htmlFor="retainer" className="text-base font-medium text-foreground mb-3 block">
                Your Client's Monthly Retainer
              </Label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="retainer"
                  type="number"
                  min={0}
                  step={100}
                  value={clientRetainer}
                  onChange={(e) => setClientRetainer(Number(e.target.value))}
                  className="pl-10 text-xl h-14 bg-background border-border"
                  placeholder="Enter client retainer"
                />
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
                    <span className="text-sm text-muted-foreground">Monthly (20%)</span>
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
