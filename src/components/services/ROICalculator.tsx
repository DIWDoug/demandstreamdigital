import { useState, useMemo } from "react";
import { Calculator, Users, UserCheck, DollarSign, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const ROICalculator = () => {
  const [visitors, setVisitors] = useState(10000);
  const [leadConversionRate, setLeadConversionRate] = useState(2.5);
  const [leadToCustomerRate, setLeadToCustomerRate] = useState(10);
  const [revenuePerCustomer, setRevenuePerCustomer] = useState(1000);
  const [marketingCost, setMarketingCost] = useState(5000);

  const results = useMemo(() => {
    const totalLeads = Math.round(visitors * (leadConversionRate / 100));
    const newCustomers = Math.round(totalLeads * (leadToCustomerRate / 100));
    const inboundRevenue = newCustomers * revenuePerCustomer;
    const roi = marketingCost > 0 
      ? Math.round(((inboundRevenue - marketingCost) / marketingCost) * 100) 
      : 0;

    return { totalLeads, newCustomers, inboundRevenue, roi };
  }, [visitors, leadConversionRate, leadToCustomerRate, revenuePerCustomer, marketingCost]);

  const InputField = ({ 
    label, 
    value, 
    onChange, 
    suffix 
  }: { 
    label: string; 
    value: number; 
    onChange: (val: number) => void;
    suffix?: string;
  }) => (
    <div>
      <label className="block text-sm text-text-muted mb-2 font-body">{label}</label>
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
        : "bg-surface-elevated border-border/30"
    )}>
      <div className="flex items-center gap-2 mb-3">
        <Icon className={cn("h-4 w-4", highlight ? "text-cta" : "text-accent-blue")} />
        <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">{label}</span>
      </div>
      <p className={cn(
        "text-3xl md:text-4xl font-bold mb-1",
        highlight ? "text-cta" : "text-cta"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cta/10 text-cta text-sm font-medium mb-4">
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
              <InputField 
                label="Website Visitors (Monthly)" 
                value={visitors} 
                onChange={setVisitors} 
              />
              <InputField 
                label="Lead Conversion Rate (%)" 
                value={leadConversionRate} 
                onChange={setLeadConversionRate}
                suffix="%"
              />
              <InputField 
                label="Lead-to-Customer Rate (%)" 
                value={leadToCustomerRate} 
                onChange={setLeadToCustomerRate}
                suffix="%"
              />
              <InputField 
                label="Average Revenue Per Customer ($)" 
                value={revenuePerCustomer} 
                onChange={setRevenuePerCustomer}
              />
              <InputField 
                label="Marketing Cost ($)" 
                value={marketingCost} 
                onChange={setMarketingCost}
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
