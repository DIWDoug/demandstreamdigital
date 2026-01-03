import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import AdBudgetEducationalContent from "@/components/calculators/AdBudgetEducationalContent";
import AgencyPartnerVideos from "@/components/calculators/AgencyPartnerVideos";
import PricingComparisonTable from "@/components/calculators/PricingComparisonTable";
import { useState, useMemo } from "react";
import { Calculator, DollarSign, TrendingUp, Users, MousePointerClick, Eye, ShoppingCart, Percent, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const AdBudgetCalculator = () => {
  // Inputs
  const [adBudget, setAdBudget] = useState(5000);
  const [impressionsPerDollar, setImpressionsPerDollar] = useState(89.29);
  const [ctr, setCtr] = useState(1.91);
  const [conversionRate, setConversionRate] = useState(2.35);
  const [transactionsPerCustomer, setTransactionsPerCustomer] = useState(1);
  const [averageSalePrice, setAverageSalePrice] = useState(500);
  const [profitMargin, setProfitMargin] = useState(30);

  const results = useMemo(() => {
    const estimatedImpressions = Math.round(adBudget * impressionsPerDollar);
    const clickThroughTraffic = Math.round(estimatedImpressions * (ctr / 100));
    const estimatedCustomers = Math.round(clickThroughTraffic * (conversionRate / 100));
    const preMarginRevenue = estimatedCustomers * transactionsPerCustomer * averageSalePrice;
    const grossRevenue = preMarginRevenue * (profitMargin / 100);
    const roi = adBudget > 0 ? grossRevenue / adBudget : 0;
    const roiPercent = adBudget > 0 ? Math.round(((grossRevenue - adBudget) / adBudget) * 100) : 0;

    return {
      estimatedImpressions,
      clickThroughTraffic,
      estimatedCustomers,
      preMarginRevenue,
      grossRevenue,
      roi,
      roiPercent
    };
  }, [adBudget, impressionsPerDollar, ctr, conversionRate, transactionsPerCustomer, averageSalePrice, profitMargin]);

  const InputField = ({ 
    label, 
    value, 
    onChange, 
    prefix,
    suffix,
    tooltip,
    step = 1
  }: { 
    label: string; 
    value: number; 
    onChange: (val: number) => void;
    prefix?: string;
    suffix?: string;
    tooltip?: string;
    step?: number;
  }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const rawValue = e.target.value.replace(/[^0-9.]/g, '');
      const numericValue = parseFloat(rawValue) || 0;
      onChange(numericValue);
    };

    return (
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
          {prefix && (
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted text-lg">
              {prefix}
            </span>
          )}
          <input
            type="text"
            inputMode="decimal"
            value={value}
            onChange={handleChange}
            className={cn(
              "w-full py-3.5 rounded-lg bg-surface-dark border border-border/50 text-foreground text-lg font-medium focus:outline-none focus:border-accent-blue transition-colors",
              prefix ? "pl-8 pr-4" : "px-4"
            )}
          />
          {suffix && (
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted text-sm">
              {suffix}
            </span>
          )}
        </div>
      </div>
    );
  };

  const ResultCard = ({ 
    label, 
    value, 
    sublabel,
    icon: Icon,
    highlight = false,
    large = false
  }: { 
    label: string; 
    value: string; 
    sublabel: string;
    icon: React.ElementType;
    highlight?: boolean;
    large?: boolean;
  }) => (
    <div className={cn(
      "rounded-xl p-5 border transition-all",
      highlight 
        ? "bg-cta/5 border-cta/30" 
        : "bg-surface-dark border-border/30",
      large && "col-span-2"
    )}>
      <div className="flex items-center gap-2 mb-3">
        <Icon className={cn("h-4 w-4", highlight ? "text-cta" : "text-accent-blue")} />
        <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">{label}</span>
      </div>
      <p className={cn(
        "font-bold mb-1",
        highlight ? "text-cta" : "text-foreground",
        large ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
      )}>
        {value}
      </p>
      <p className="text-sm text-text-muted font-body">{sublabel}</p>
    </div>
  );

  const FunnelStep = ({
    number,
    label,
    value,
    description
  }: {
    number: number;
    label: string;
    value: string;
    description: string;
  }) => (
    <div className="relative">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue font-bold text-sm">
          {number}
        </div>
        <div className="flex-1 pb-8 border-l-2 border-border/30 pl-6 -ml-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-1">{label}</p>
          <p className="text-2xl font-bold text-foreground mb-1">{value}</p>
          <p className="text-sm text-text-muted">{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Ad Budget Calculator | White-Label Agency Partner Tools | Dialed-In Web</title>
        <meta name="description" content="Calculate expected ROI from your advertising budget. Estimate impressions, clicks, conversions, and revenue from digital ad campaigns." />
        <link rel="canonical" href="https://www.dialedinweb.com/ad-budget-calculator" />
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
                Ad Budget ROI Calculator
              </h1>
              <p className="text-text-secondary text-lg font-body mb-8">
                Show clients exactly what their advertising investment can deliver. Calculate expected impressions, traffic, conversions, and revenue from digital ad campaigns.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/roi-calculator" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border/50 text-text-secondary hover:text-foreground hover:border-accent-blue/50 transition-colors font-medium"
                >
                  <TrendingUp className="h-4 w-4" />
                  ROI Calculator
                </Link>
                <Link 
                  to="/investment-calculator" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border/50 text-text-secondary hover:text-foreground hover:border-accent-blue/50 transition-colors font-medium"
                >
                  <DollarSign className="h-4 w-4" />
                  Investment Calculator
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-16 lg:py-24 bg-surface-dark">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Inputs Column */}
                <div className="space-y-6">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-2">Campaign Inputs</h2>
                    <p className="text-text-muted">Adjust these values based on your client's business and campaign goals.</p>
                  </div>

                  <div className="bg-surface-elevated rounded-2xl p-6 md:p-8 border border-border/30 space-y-5">
                    <InputField 
                      label="Monthly Advertising Budget" 
                      value={adBudget} 
                      onChange={setAdBudget}
                      prefix="$"
                      tooltip="For aggressive growth, businesses typically allocate 15-20% of their revenue (or desired revenue) back into advertising."
                    />
                    <InputField 
                      label="Impressions per $1" 
                      value={impressionsPerDollar} 
                      onChange={setImpressionsPerDollar}
                      step={0.01}
                      tooltip="The average Cost Per Thousand (CPM) on digital ads is roughly $11.20, which equals about 89.29 impressions per dollar spent."
                    />
                    <InputField 
                      label="Click-Through Rate (CTR)" 
                      value={ctr} 
                      onChange={setCtr}
                      suffix="%"
                      step={0.01}
                      tooltip="The average CTR on digital ads is roughly 1.91%. Well-optimized campaigns can beat this by 2-3x."
                    />
                    <InputField 
                      label="Conversion Rate" 
                      value={conversionRate} 
                      onChange={setConversionRate}
                      suffix="%"
                      step={0.01}
                      tooltip="The median conversion rate for digital advertising is 2.35%. This varies significantly by industry and offer."
                    />
                  </div>

                  <div className="bg-surface-elevated rounded-2xl p-6 md:p-8 border border-border/30 space-y-5">
                    <p className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">Revenue Factors</p>
                    <InputField 
                      label="Transactions per Customer" 
                      value={transactionsPerCustomer} 
                      onChange={setTransactionsPerCustomer}
                      tooltip="How many times does the average customer purchase? For services, this is typically 1. For retail, it may be higher."
                    />
                    <InputField 
                      label="Average Sale Price" 
                      value={averageSalePrice} 
                      onChange={setAverageSalePrice}
                      prefix="$"
                      tooltip="What does your client charge for their product or service?"
                    />
                    <InputField 
                      label="Profit Margin" 
                      value={profitMargin} 
                      onChange={setProfitMargin}
                      suffix="%"
                      tooltip="The percentage of revenue kept as profit after costs. Service businesses often have 30-50% margins."
                    />
                  </div>
                </div>

                {/* Results Column */}
                <div className="space-y-6">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-2">Projected Results</h2>
                    <p className="text-text-muted">Expected outcomes based on your campaign inputs.</p>
                  </div>

                  {/* ROI Highlight Card */}
                  <div className="bg-gradient-to-br from-cta/10 to-accent-blue/10 rounded-2xl p-8 border border-cta/30">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="h-5 w-5 text-cta" />
                      <span className="text-sm font-semibold uppercase tracking-wider text-cta">Estimated Return on Investment</span>
                    </div>
                    <div className="flex items-baseline gap-4 mb-2">
                      <p className="text-5xl md:text-6xl font-bold text-foreground">{results.roi.toFixed(2)}x</p>
                      <p className={cn(
                        "text-2xl font-semibold",
                        results.roiPercent > 0 ? "text-green-400" : "text-red-400"
                      )}>
                        {results.roiPercent > 0 ? "+" : ""}{results.roiPercent}%
                      </p>
                    </div>
                    <p className="text-text-muted">
                      For every $1 spent on ads, your client can expect ${results.roi.toFixed(2)} in gross profit.
                    </p>
                  </div>

                  {/* Funnel Visualization */}
                  <div className="bg-surface-elevated rounded-2xl p-6 md:p-8 border border-border/30">
                    <p className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-6">Marketing Funnel</p>
                    
                    <FunnelStep 
                      number={1}
                      label="Impressions"
                      value={results.estimatedImpressions.toLocaleString()}
                      description="Number of times ads are displayed"
                    />
                    <FunnelStep 
                      number={2}
                      label="Website Traffic"
                      value={results.clickThroughTraffic.toLocaleString()}
                      description="Visitors who click through to the site"
                    />
                    <FunnelStep 
                      number={3}
                      label="New Customers"
                      value={results.estimatedCustomers.toLocaleString()}
                      description="Visitors who convert to customers"
                    />
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cta/20 flex items-center justify-center text-cta font-bold text-sm">
                        4
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-1">Gross Revenue</p>
                        <p className="text-3xl font-bold text-cta mb-1">${results.grossRevenue.toLocaleString()}</p>
                        <p className="text-sm text-text-muted">Take-home profit after expenses</p>
                      </div>
                    </div>
                  </div>

                  {/* Summary Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <ResultCard 
                      label="Pre-Margin Revenue" 
                      value={`$${results.preMarginRevenue.toLocaleString()}`} 
                      sublabel="Total sales generated" 
                      icon={ShoppingCart} 
                    />
                    <ResultCard 
                      label="Net Profit" 
                      value={`$${Math.round(results.grossRevenue - adBudget).toLocaleString()}`} 
                      sublabel="After ad spend" 
                      icon={DollarSign}
                      highlight={results.grossRevenue > adBudget}
                    />
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-12 p-6 rounded-xl bg-surface-elevated border border-border/30">
                <p className="text-sm text-text-muted text-center">
                  <strong className="text-foreground">Note:</strong> These are estimates based on industry averages. Actual results vary based on targeting, creative quality, landing page optimization, and market conditions. Use this calculator to set realistic expectations and demonstrate potential value to clients.
                </p>
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
                href="tel:+12143072995"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border/50 rounded-xl text-foreground hover:border-accent-blue/50 transition-colors"
              >
                <span className="text-accent-blue">📞</span>
                (214) 307-2995
              </a>
            </div>
          </div>
        </section>

        {/* Soft Divider */}
        <div className="container mx-auto px-6 lg:px-8 py-4">
          <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        </div>

        {/* Educational Content */}
        <section className="py-16 lg:py-24 bg-surface-dark">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <AdBudgetEducationalContent />
            </div>
          </div>
        </section>

        {/* Soft Divider */}
        <div className="container mx-auto px-6 lg:px-8 py-4">
          <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        </div>

        {/* Pricing Comparison */}
        <section className="py-16 lg:py-24 bg-surface-elevated">
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

        {/* Contact Form Section */}
        <ContactForm />
      </main>
      
      <Footer />
    </>
  );
};

export default AdBudgetCalculator;
