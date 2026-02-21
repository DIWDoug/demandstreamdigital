import { useState, useMemo } from "react";
import { Calculator, Users, UserCheck, DollarSign, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { CalculatorInputField } from "@/components/calculators/CalculatorInputField";

const ROICalculator = () => {
  // String-based inputs for smooth typing
  const [visitorsInput, setVisitorsInput] = useState("10000");
  const [leadConversionRateInput, setLeadConversionRateInput] = useState("2.5");
  const [leadToCustomerRateInput, setLeadToCustomerRateInput] = useState("10");
  const [revenuePerCustomerInput, setRevenuePerCustomerInput] = useState("1000");
  const [marketingCostInput, setMarketingCostInput] = useState("5000");

  // Derived numeric values
  const parseNum = (v: string) => { const n = parseFloat(v); return Number.isFinite(n) ? n : 0; };
  const visitors = Math.max(0, parseNum(visitorsInput));
  const leadConversionRate = Math.max(0, parseNum(leadConversionRateInput));
  const leadToCustomerRate = Math.max(0, parseNum(leadToCustomerRateInput));
  const revenuePerCustomer = Math.max(0, parseNum(revenuePerCustomerInput));
  const marketingCost = Math.max(0, parseNum(marketingCostInput));

  const results = useMemo(() => {
    const totalLeads = Math.round(visitors * (leadConversionRate / 100));
    const newCustomers = Math.round(totalLeads * (leadToCustomerRate / 100));
    const inboundRevenue = newCustomers * revenuePerCustomer;
    const roi = marketingCost > 0 
      ? Math.round(((inboundRevenue - marketingCost) / marketingCost) * 100) 
      : 0;

    return { totalLeads, newCustomers, inboundRevenue, roi };
  }, [visitors, leadConversionRate, leadToCustomerRate, revenuePerCustomer, marketingCost]);

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
        ? "bg-accent-green/5 border-accent-green/30" 
        : "bg-surface-elevated border-border/30"
    )}>
      <div className="flex items-center gap-2 mb-3">
        <Icon className={cn("h-4 w-4", highlight ? "text-accent-green" : "text-accent-blue")} />
        <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">{label}</span>
      </div>
      <p className={cn(
        "text-3xl md:text-4xl font-bold mb-1",
        highlight ? "text-accent-green" : "text-accent-green"
      )}>
        {value}
      </p>
      <p className="text-sm text-text-muted font-body">{sublabel}</p>
    </div>
  );

  return (
    <section className="py-20 lg:py-28 bg-surface-dark relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green/10 text-accent-green text-sm font-medium mb-4">
              <Calculator className="h-4 w-4" />
              ROI Calculator
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Inbound Marketing Calculator
            </h2>
            <p className="text-text-secondary text-lg font-body max-w-2xl mx-auto">
              Measure the effectiveness of your inbound marketing strategy and optimize for growth.
            </p>
          </div>

          {/* Calculator Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="bg-surface-elevated rounded-2xl p-6 md:p-8 border border-border/30 space-y-5">
              <CalculatorInputField 
                label="Website Visitors (Monthly)" 
                value={visitorsInput}
                onChange={setVisitorsInput}
                inputMode="numeric"
                allowDecimal={false}
              />
              <CalculatorInputField 
                label="Lead Conversion Rate (%)" 
                value={leadConversionRateInput}
                onChange={setLeadConversionRateInput}
                suffix="%"
              />
              <CalculatorInputField 
                label="Lead-to-Customer Rate (%)" 
                value={leadToCustomerRateInput}
                onChange={setLeadToCustomerRateInput}
                suffix="%"
              />
              <CalculatorInputField 
                label="Average Revenue Per Customer ($)" 
                value={revenuePerCustomerInput}
                onChange={setRevenuePerCustomerInput}
                prefix="$"
                inputMode="numeric"
                allowDecimal={false}
              />
              <CalculatorInputField 
                label="Marketing Cost ($)" 
                value={marketingCostInput}
                onChange={setMarketingCostInput}
                prefix="$"
                inputMode="numeric"
                allowDecimal={false}
              />
            </div>

            {/* Results */}
            <div className="grid grid-cols-2 gap-4 content-start">
              <ResultCard 
                label="Total Leads Generated"
                value={results.totalLeads.toLocaleString()}
                sublabel="Monthly lead generation"
                icon={Users}
              />
              <ResultCard 
                label="Total New Customers"
                value={results.newCustomers.toLocaleString()}
                sublabel="Monthly customer acquisition"
                icon={UserCheck}
              />
              <ResultCard 
                label="Inbound Revenue"
                value={`$${results.inboundRevenue.toLocaleString()}`}
                sublabel="Monthly revenue generated"
                icon={DollarSign}
              />
              <ResultCard 
                label="Marketing ROI"
                value={`${results.roi}%`}
                sublabel="Return on marketing investment"
                icon={TrendingUp}
                highlight={results.roi > 100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
