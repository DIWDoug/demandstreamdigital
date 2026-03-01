import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import MarketExclusivity from "@/components/sections/MarketExclusivity";
import { useState, useMemo, useEffect } from "react";
import { Calculator, TrendingUp, DollarSign, Users, Target, Share2, ArrowRight, Info, Copy, Check } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { getCalculatorSchema } from "@/lib/schema";

const socialMediaROISchema = getCalculatorSchema({
  name: "Social Media ROI Calculator",
  description: "Calculate the return on investment of your social media campaigns. Measure leads, sales, and revenue generated from social media marketing.",
  url: "https://demandstreamdigital.com/partner-tools/social-media-roi-calculator",
  category: "BusinessApplication"
});

// Industry benchmark presets
const industryBenchmarks = {
  b2b: {
    label: "B2B / SaaS",
    totalVisits: 5000,
    conversionRate: 2.0,
    closeRate: 15,
    lifetimeValue: 5000,
    adSpend: 3000,
    contentCosts: 1500,
    laborCosts: 2500
  },
  ecommerce: {
    label: "E-commerce",
    totalVisits: 25000,
    conversionRate: 3.5,
    closeRate: 8,
    lifetimeValue: 250,
    adSpend: 5000,
    contentCosts: 1000,
    laborCosts: 1500
  },
  local: {
    label: "Local Business",
    totalVisits: 2000,
    conversionRate: 4.0,
    closeRate: 25,
    lifetimeValue: 1500,
    adSpend: 1000,
    contentCosts: 300,
    laborCosts: 800
  }
};

const SocialMediaROICalculator = () => {
  // Return inputs (campaign performance)
  const [totalVisits, setTotalVisits] = useState(10000);
  const [conversionRate, setConversionRate] = useState(2.5);
  const [closeRate, setCloseRate] = useState(20);
  const [lifetimeValue, setLifetimeValue] = useState(1000);

  // Investment inputs (costs)
  const [adSpend, setAdSpend] = useState(2000);
  const [contentCosts, setContentCosts] = useState(500);
  const [laborCosts, setLaborCosts] = useState(1500);

  // Default values
  const defaults = {
    totalVisits: 10000,
    conversionRate: 2.5,
    closeRate: 20,
    lifetimeValue: 1000,
    adSpend: 2000,
    contentCosts: 500,
    laborCosts: 1500
  };

  // Apply industry benchmark
  const applyBenchmark = (industry: keyof typeof industryBenchmarks) => {
    const benchmark = industryBenchmarks[industry];
    setTotalVisits(benchmark.totalVisits);
    setConversionRate(benchmark.conversionRate);
    setCloseRate(benchmark.closeRate);
    setLifetimeValue(benchmark.lifetimeValue);
    setAdSpend(benchmark.adSpend);
    setContentCosts(benchmark.contentCosts);
    setLaborCosts(benchmark.laborCosts);
  };

  // Reset to defaults
  const resetToDefaults = () => {
    setTotalVisits(defaults.totalVisits);
    setConversionRate(defaults.conversionRate);
    setCloseRate(defaults.closeRate);
    setLifetimeValue(defaults.lifetimeValue);
    setAdSpend(defaults.adSpend);
    setContentCosts(defaults.contentCosts);
    setLaborCosts(defaults.laborCosts);
  };

  const [copied, setCopied] = useState(false);

  // Calculate results
  const results = useMemo(() => {
    const leads = Math.round(totalVisits * (conversionRate / 100));
    const sales = Math.round(leads * (closeRate / 100));
    const totalRevenue = sales * lifetimeValue;
    const totalInvestment = adSpend + contentCosts + laborCosts;
    const roi = totalInvestment > 0 
      ? Math.round(((totalRevenue - totalInvestment) / totalInvestment) * 100) 
      : 0;
    const profit = totalRevenue - totalInvestment;

    // Factor calculations for breakdown
    const factors = [
      { 
        label: "Traffic Volume", 
        current: totalVisits,
        baseline: defaults.totalVisits,
        impact: totalVisits / defaults.totalVisits,
        unit: "" as const
      },
      { 
        label: "Conversion Rate", 
        current: conversionRate,
        baseline: defaults.conversionRate,
        impact: conversionRate / defaults.conversionRate,
        unit: "%" as const
      },
      { 
        label: "Close Rate", 
        current: closeRate,
        baseline: defaults.closeRate,
        impact: closeRate / defaults.closeRate,
        unit: "%" as const
      },
      { 
        label: "Lifetime Value", 
        current: lifetimeValue,
        baseline: defaults.lifetimeValue,
        impact: lifetimeValue / defaults.lifetimeValue,
        unit: "$" as const
      },
      { 
        label: "Ad Spend", 
        current: adSpend,
        baseline: defaults.adSpend,
        impact: defaults.adSpend / (adSpend || 1),
        unit: "$" as const
      },
      { 
        label: "Content Costs", 
        current: contentCosts,
        baseline: defaults.contentCosts,
        impact: defaults.contentCosts / (contentCosts || 1),
        unit: "$" as const
      },
      { 
        label: "Labor Costs", 
        current: laborCosts,
        baseline: defaults.laborCosts,
        impact: defaults.laborCosts / (laborCosts || 1),
        unit: "$" as const
      }
    ];

    return { leads, sales, totalRevenue, totalInvestment, roi, profit, factors };
  }, [totalVisits, conversionRate, closeRate, lifetimeValue, adSpend, contentCosts, laborCosts, defaults]);

  // Generate shareable link
  const generateShareableLink = () => {
    const params = new URLSearchParams({
      v: String(totalVisits),
      cr: String(conversionRate),
      clr: String(closeRate),
      ltv: String(lifetimeValue),
      as: String(adSpend),
      cc: String(contentCosts),
      lc: String(laborCosts)
    });
    return `${window.location.origin}/partner-tools/social-media-roi-calculator?${params.toString()}`;
  };

  const copyLink = () => {
    navigator.clipboard.writeText(generateShareableLink());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Load from URL params on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('v')) setTotalVisits(Number(params.get('v')) || 10000);
    if (params.get('cr')) setConversionRate(Number(params.get('cr')) || 2.5);
    if (params.get('clr')) setCloseRate(Number(params.get('clr')) || 20);
    if (params.get('ltv')) setLifetimeValue(Number(params.get('ltv')) || 1000);
    if (params.get('as')) setAdSpend(Number(params.get('as')) || 2000);
    if (params.get('cc')) setContentCosts(Number(params.get('cc')) || 500);
    if (params.get('lc')) setLaborCosts(Number(params.get('lc')) || 1500);
  }, []);

  const SliderInput = ({ 
    label, 
    value, 
    onChange, 
    min, 
    max, 
    step = 1,
    prefix = "",
    suffix = "",
    tooltip 
  }: { 
    label: string; 
    value: number; 
    onChange: (val: number) => void; 
    min: number; 
    max: number; 
    step?: number;
    prefix?: string;
    suffix?: string;
    tooltip?: string;
  }) => (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <label className="text-sm text-text-muted font-body">{label}</label>
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
        <span className="text-lg font-semibold text-foreground">
          {prefix}{value.toLocaleString()}{suffix}
        </span>
      </div>
      <Slider
        value={[value]}
        onValueChange={(vals) => onChange(vals[0])}
        min={min}
        max={max}
        step={step}
        className="w-full"
      />
      <div className="flex justify-between text-xs text-text-muted">
        <span>{prefix}{min.toLocaleString()}{suffix}</span>
        <span>{prefix}{max.toLocaleString()}{suffix}</span>
      </div>
    </div>
  );

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
        ? "bg-cta/10 border-cta/40" 
        : "bg-surface-dark border-border/30",
      large && "col-span-2"
    )}>
      <div className="flex items-center gap-2 mb-3">
        <Icon className={cn("h-4 w-4", highlight ? "text-accent-blue" : "text-accent-blue/60")} />
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

  return (
    <>
      <Helmet>
        <title>Social Media ROI Calculator for Plumbing & HVAC | Demand Stream Digital</title>
        <meta name="description" content="Calculate the ROI of social media campaigns for your plumbing or HVAC business. Free calculator from Demand Stream Digital." />
        <link rel="canonical" href="https://demandstreamdigital.com/partner-tools/social-media-roi-calculator" />
        <meta name="keywords" content="social media ROI calculator, plumbing social media ROI, HVAC social media marketing, campaign ROI calculator" />
        
        
        <script type="application/ld+json">{JSON.stringify(socialMediaROISchema)}</script>
        
        {/* Open Graph */}
        <meta property="og:title" content="Social Media ROI Calculator for Plumbing & HVAC | Demand Stream Digital" />
        <meta property="og:description" content="Calculate the ROI of social media campaigns for your plumbing or HVAC business. Free calculator from Demand Stream Digital." />
        <meta property="og:url" content="https://demandstreamdigital.com/partner-tools/social-media-roi-calculator" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Demand Stream Digital" />
        <meta property="og:image" content="https://demandstreamdigital.com/og-images/social-media-roi-calculator.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Social Media ROI Calculator for Plumbing & HVAC | Demand Stream Digital" />
        <meta name="twitter:description" content="Calculate the ROI of social media campaigns for your plumbing or HVAC business. Free calculator from Demand Stream Digital." />
        <meta name="twitter:image" content="https://demandstreamdigital.com/og-images/social-media-roi-calculator.png" />
      </Helmet>
      
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-surface-dark via-surface-elevated to-surface-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 text-pink-500 text-sm font-medium mb-6">
                <Share2 className="h-4 w-4" />
                Agency Partner Tools
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Social Media ROI Calculator
              </h1>
              <p className="text-text-secondary text-lg font-body mb-8">
                Demonstrate the business value of social media campaigns. Calculate leads, sales, and revenue generated from your social efforts.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/partner-tools/roi-calculator" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border/50 text-text-secondary hover:text-foreground hover:border-accent-blue/50 transition-colors font-medium"
                >
                  <TrendingUp className="h-4 w-4" />
                  Inbound Marketing ROI
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-16 lg:py-24 bg-surface-dark">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Industry Benchmarks */}
              <div className="mb-8 bg-surface-elevated rounded-2xl p-6 border border-border/30">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Industry Benchmarks</h3>
                    <p className="text-sm text-text-muted">Auto-fill with typical values for your industry</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(industryBenchmarks).map(([key, benchmark]) => (
                      <Tooltip key={key}>
                        <TooltipTrigger asChild>
                          <button
                            onClick={() => applyBenchmark(key as keyof typeof industryBenchmarks)}
                            className="px-4 py-2 rounded-lg bg-surface-dark border border-border/50 text-sm font-medium text-text-secondary hover:text-foreground hover:border-accent-blue/50 hover:bg-accent-blue/5 transition-all"
                          >
                            {benchmark.label}
                          </button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" className="max-w-xs">
                          <div className="text-xs space-y-1">
                            <p className="font-semibold mb-2">{benchmark.label} Benchmarks</p>
                            <p>Visits: {benchmark.totalVisits.toLocaleString()}/mo</p>
                            <p>Conversion: {benchmark.conversionRate}%</p>
                            <p>Close Rate: {benchmark.closeRate}%</p>
                            <p>LTV: ${benchmark.lifetimeValue.toLocaleString()}</p>
                            <p>Ad Spend: ${benchmark.adSpend.toLocaleString()}/mo</p>
                            <p>Content: ${benchmark.contentCosts.toLocaleString()}/mo</p>
                            <p>Labor: ${benchmark.laborCosts.toLocaleString()}/mo</p>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                    <button
                      onClick={resetToDefaults}
                      className="px-4 py-2 rounded-lg bg-surface-dark border border-border/50 text-sm font-medium text-text-muted hover:text-foreground hover:border-border transition-all"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Input Panel */}
                <div className="space-y-6">
                  {/* Return Section */}
                  <div className="bg-surface-elevated rounded-2xl p-6 md:p-8 border border-border/30">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-emerald-500/10">
                        <TrendingUp className="h-5 w-5 text-emerald-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">Return</h3>
                        <p className="text-sm text-text-muted">Campaign performance metrics</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <SliderInput
                        label="Total Visits from Campaign"
                        value={totalVisits}
                        onChange={setTotalVisits}
                        min={100}
                        max={100000}
                        step={100}
                        tooltip="Total website visits generated from your social media campaign"
                      />
                      <SliderInput
                        label="Landing Page Conversion Rate"
                        value={conversionRate}
                        onChange={setConversionRate}
                        min={0.1}
                        max={20}
                        step={0.1}
                        suffix="%"
                        tooltip="Percentage of visitors who convert into leads (fill out form, sign up, etc.)"
                      />
                      <SliderInput
                        label="Close Rate"
                        value={closeRate}
                        onChange={setCloseRate}
                        min={1}
                        max={100}
                        step={1}
                        suffix="%"
                        tooltip="Percentage of leads that become paying customers"
                      />
                      <SliderInput
                        label="Lifetime Customer Value"
                        value={lifetimeValue}
                        onChange={setLifetimeValue}
                        min={100}
                        max={50000}
                        step={100}
                        prefix="$"
                        tooltip="Average total revenue generated per customer over their lifetime"
                      />
                    </div>
                  </div>

                  {/* Investment Section */}
                  <div className="bg-surface-elevated rounded-2xl p-6 md:p-8 border border-border/30">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-amber-500/10">
                        <DollarSign className="h-5 w-5 text-amber-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">Investment</h3>
                        <p className="text-sm text-text-muted">Campaign costs and expenses</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <SliderInput
                        label="Total Ad Spend"
                        value={adSpend}
                        onChange={setAdSpend}
                        min={0}
                        max={50000}
                        step={100}
                        prefix="$"
                        tooltip="Total spent on social media advertising (Meta, LinkedIn, TikTok, etc.)"
                      />
                      <SliderInput
                        label="Content Creation Costs"
                        value={contentCosts}
                        onChange={setContentCosts}
                        min={0}
                        max={20000}
                        step={50}
                        prefix="$"
                        tooltip="Costs for graphics, videos, copywriting, and other content production"
                      />
                      <SliderInput
                        label="Labor Costs"
                        value={laborCosts}
                        onChange={setLaborCosts}
                        min={0}
                        max={30000}
                        step={50}
                        prefix="$"
                        tooltip="Staff or agency time spent managing the campaign"
                      />
                    </div>
                  </div>
                </div>

                {/* Results Panel */}
                <div className="space-y-6">
                  {/* Estimated Results */}
                  <div className="bg-surface-elevated rounded-2xl p-6 md:p-8 border border-border/30">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-accent-blue/10">
                        <Calculator className="h-5 w-5 text-accent-blue" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">Estimated Results</h3>
                        <p className="text-sm text-text-muted">Projected campaign outcomes</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <ResultCard 
                        label="Leads Generated" 
                        value={results.leads.toLocaleString()} 
                        sublabel="From campaign traffic" 
                        icon={Users} 
                      />
                      <ResultCard 
                        label="Sales" 
                        value={results.sales.toLocaleString()} 
                        sublabel="Converted customers" 
                        icon={Target} 
                      />
                      <ResultCard 
                        label="Total Revenue" 
                        value={`$${results.totalRevenue.toLocaleString()}`} 
                        sublabel="Generated from campaign" 
                        icon={DollarSign}
                        large
                      />
                    </div>
                  </div>

                  {/* ROI Calculation */}
                  <div className={cn(
                    "rounded-2xl p-6 md:p-8 border transition-all",
                    results.roi > 0 
                      ? "bg-gradient-to-br from-cta/10 to-emerald-500/10 border-cta/40" 
                      : "bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/40"
                  )}>
                    <div className="text-center">
                      <p className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-2">
                        Social Media ROI
                      </p>
                      <p className={cn(
                        "text-6xl md:text-7xl font-bold mb-4",
                        results.roi > 0 ? "text-cta" : "text-red-500"
                      )}>
                        {results.roi}%
                      </p>
                      <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border/30">
                        <div>
                          <p className="text-xs text-text-muted mb-1">Total Investment</p>
                          <p className="text-lg font-semibold text-foreground">${results.totalInvestment.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-xs text-text-muted mb-1">Net Profit</p>
                          <p className={cn(
                            "text-lg font-semibold",
                            results.profit >= 0 ? "text-emerald-500" : "text-red-500"
                          )}>
                            {results.profit >= 0 ? "+" : ""}{results.profit.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Factor Breakdown */}
                  <div className="bg-surface-dark rounded-xl p-5 border border-border/30">
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">Performance Factors</p>
                    <div className="space-y-3">
                      {results.factors.map((factor, i) => {
                        const impactPercent = Math.min(100, Math.max(10, factor.impact * 40));
                        const isInverse = factor.label.toLowerCase().includes("cost") || factor.label.toLowerCase().includes("spend");
                        const getColor = () => {
                          if (isInverse) {
                            return factor.impact > 1.2 ? "bg-emerald-500" : factor.impact > 0.9 ? "bg-yellow-500" : "bg-red-500";
                          }
                          return factor.impact > 1.3 ? "bg-emerald-500" : factor.impact > 0.9 ? "bg-yellow-500" : "bg-red-500";
                        };
                        const displayValue = factor.unit === "$" 
                          ? `$${factor.current.toLocaleString()}`
                          : factor.unit === "%"
                            ? `${factor.current}%`
                            : factor.current.toLocaleString();
                        
                        return (
                          <div key={i} className="space-y-1.5">
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-text-muted">{factor.label}</span>
                              <div className="flex items-center gap-2">
                                <span className="text-text-secondary">{displayValue}</span>
                                <span className={cn(
                                  "font-medium",
                                  factor.impact >= 1.3 ? "text-emerald-400" : 
                                  factor.impact >= 0.9 ? "text-yellow-400" : "text-red-400"
                                )}>
                                  {factor.impact >= 1 ? "+" : ""}{Math.round((factor.impact - 1) * 100)}%
                                </span>
                              </div>
                            </div>
                            <div className="h-1.5 bg-surface-elevated rounded-full overflow-hidden">
                              <div 
                                className={cn("h-full rounded-full transition-all", getColor())}
                                style={{ width: `${impactPercent}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <p className="text-[10px] text-text-muted/60 mt-3">
                      Compared to defaults: 10K visits, 2.5% conv, 20% close, $1K LTV
                    </p>
                  </div>

                  {/* Share Link */}
                  <div className="bg-surface-elevated rounded-xl p-4 border border-border/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Share2 className="h-4 w-4 text-text-muted" />
                        <span className="text-sm text-text-muted">Share this calculation</span>
                      </div>
                      <button
                        onClick={copyLink}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-blue/10 text-accent-blue text-sm font-medium hover:bg-accent-blue/20 transition-colors"
                      >
                        {copied ? (
                          <>
                            <Check className="h-4 w-4" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            Copy Link
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* ROI Formula Explanation */}
              <div className="mt-12 bg-surface-elevated rounded-2xl p-6 md:p-8 border border-border/30">
                <h3 className="text-lg font-semibold text-foreground mb-4">How We Calculate Social Media ROI</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="p-4 rounded-lg bg-surface-dark border border-border/30">
                    <p className="text-xs text-text-muted mb-2 uppercase tracking-wider">Step 1</p>
                    <p className="font-mono text-sm text-foreground">Leads = Visits × Conversion Rate</p>
                    <p className="text-xs text-text-muted mt-2">{totalVisits.toLocaleString()} × {conversionRate}% = {results.leads.toLocaleString()}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-surface-dark border border-border/30">
                    <p className="text-xs text-text-muted mb-2 uppercase tracking-wider">Step 2</p>
                    <p className="font-mono text-sm text-foreground">Sales = Leads × Close Rate</p>
                    <p className="text-xs text-text-muted mt-2">{results.leads.toLocaleString()} × {closeRate}% = {results.sales.toLocaleString()}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-surface-dark border border-border/30">
                    <p className="text-xs text-text-muted mb-2 uppercase tracking-wider">Step 3</p>
                    <p className="font-mono text-sm text-foreground">Revenue = Sales × LTV</p>
                    <p className="text-xs text-text-muted mt-2">{results.sales.toLocaleString()} × ${lifetimeValue.toLocaleString()} = ${results.totalRevenue.toLocaleString()}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-surface-dark border border-border/30">
                    <p className="text-xs text-text-muted mb-2 uppercase tracking-wider">Step 4</p>
                    <p className="font-mono text-sm text-foreground">ROI = (Revenue - Cost) / Cost</p>
                    <p className="text-xs text-text-muted mt-2">(${results.totalRevenue.toLocaleString()} - ${results.totalInvestment.toLocaleString()}) / ${results.totalInvestment.toLocaleString()} = {results.roi}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 lg:py-24 bg-surface-elevated">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  How to Use This Calculator
                </h2>
                <p className="text-text-muted max-w-xl mx-auto">
                  Tips for getting accurate ROI projections for your social media campaigns.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-surface-dark rounded-xl p-6 border border-border/30">
                  <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4">
                    <Target className="h-5 w-5 text-pink-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Track Campaign Visits</h3>
                  <p className="text-sm text-text-muted">
                    Use UTM parameters and Google Analytics to accurately track visits from each social media campaign.
                  </p>
                </div>

                <div className="bg-surface-dark rounded-xl p-6 border border-border/30">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                    <Users className="h-5 w-5 text-purple-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Know Your Close Rate</h3>
                  <p className="text-sm text-text-muted">
                    Pull your actual lead-to-customer conversion rate from your CRM. Industry averages are 15-25% for B2B.
                  </p>
                </div>

                <div className="bg-surface-dark rounded-xl p-6 border border-border/30">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                    <DollarSign className="h-5 w-5 text-emerald-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Calculate True LTV</h3>
                  <p className="text-sm text-text-muted">
                    Include repeat purchases and upsells in your customer lifetime value for accurate revenue projections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-surface-dark">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-2xl p-8 md:p-12 border border-pink-500/30">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Need Help Managing Social Media for Clients?
                </h2>
                <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                  We offer social media management and paid social campaigns built specifically for plumbing and HVAC companies. Let us handle execution while you focus on booked jobs.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    to="/#services"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-cta hover:bg-cta/90 text-cta-foreground rounded-lg font-semibold transition-colors"
                  >
                    Explore Our Services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link 
                    to="/partner-tools"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border/50 text-text-secondary hover:text-foreground hover:border-accent-blue/50 transition-colors font-medium"
                  >
                    View All Tools
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MarketExclusivity />
        <ContactForm />
      </main>
      
      <Footer />
    </>
  );
};

export default SocialMediaROICalculator;
