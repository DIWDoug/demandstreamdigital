import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import AgencyPartnerVideos from "@/components/calculators/AgencyPartnerVideos";
import PricingComparisonTable from "@/components/calculators/PricingComparisonTable";
import { useState, useMemo } from "react";
import { Calculator, DollarSign, TrendingUp, Users, FileText, Eye, Percent, Info, Target, BarChart3, Clock, Share2, Repeat } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const ContentMarketingCalculator = () => {
  // Content Production Inputs
  const [articlesPerMonth, setArticlesPerMonth] = useState(8);
  const [costPerArticle, setCostPerArticle] = useState(350);
  const [avgTrafficPerArticle, setAvgTrafficPerArticle] = useState(500);
  const [trafficGrowthMonths, setTrafficGrowthMonths] = useState(6);
  
  // Conversion Inputs
  const [conversionRate, setConversionRate] = useState(2.5);
  const [leadToCustomerRate, setLeadToCustomerRate] = useState(15);
  const [averageCustomerValue, setAverageCustomerValue] = useState(2500);
  const [customerLifetimeMultiplier, setCustomerLifetimeMultiplier] = useState(2);

  // Additional Costs
  const [distributionCost, setDistributionCost] = useState(200);
  const [toolsCost, setToolsCost] = useState(150);

  const results = useMemo(() => {
    // Monthly costs
    const contentProductionCost = articlesPerMonth * costPerArticle;
    const totalMonthlyCost = contentProductionCost + distributionCost + toolsCost;
    
    // Traffic calculations (cumulative effect over time)
    const monthlyTrafficFromNewContent = articlesPerMonth * avgTrafficPerArticle;
    const cumulativeTrafficAfterPeriod = monthlyTrafficFromNewContent * trafficGrowthMonths;
    
    // Lead and customer calculations
    const monthlyLeads = Math.round(monthlyTrafficFromNewContent * (conversionRate / 100));
    const monthlyCustomers = Math.round(monthlyLeads * (leadToCustomerRate / 100));
    const immediateRevenue = monthlyCustomers * averageCustomerValue;
    const lifetimeRevenue = immediateRevenue * customerLifetimeMultiplier;
    
    // ROI calculations
    const roi = totalMonthlyCost > 0 ? lifetimeRevenue / totalMonthlyCost : 0;
    const roiPercent = totalMonthlyCost > 0 ? Math.round(((lifetimeRevenue - totalMonthlyCost) / totalMonthlyCost) * 100) : 0;
    const costPerLead = monthlyLeads > 0 ? totalMonthlyCost / monthlyLeads : 0;
    const costPerCustomer = monthlyCustomers > 0 ? totalMonthlyCost / monthlyCustomers : 0;
    
    // Long-term projections (12 months of compounding content)
    const yearlyContentInvestment = totalMonthlyCost * 12;
    const yearlyTraffic = cumulativeTrafficAfterPeriod * 2; // Conservative compounding
    const yearlyLeads = Math.round(yearlyTraffic * (conversionRate / 100));
    const yearlyCustomers = Math.round(yearlyLeads * (leadToCustomerRate / 100));
    const yearlyLifetimeRevenue = yearlyCustomers * averageCustomerValue * customerLifetimeMultiplier;
    const yearlyRoi = yearlyContentInvestment > 0 ? yearlyLifetimeRevenue / yearlyContentInvestment : 0;

    return {
      contentProductionCost,
      totalMonthlyCost,
      monthlyTrafficFromNewContent,
      cumulativeTrafficAfterPeriod,
      monthlyLeads,
      monthlyCustomers,
      immediateRevenue,
      lifetimeRevenue,
      roi,
      roiPercent,
      costPerLead,
      costPerCustomer,
      yearlyContentInvestment,
      yearlyTraffic,
      yearlyLeads,
      yearlyCustomers,
      yearlyLifetimeRevenue,
      yearlyRoi
    };
  }, [articlesPerMonth, costPerArticle, avgTrafficPerArticle, trafficGrowthMonths, conversionRate, leadToCustomerRate, averageCustomerValue, customerLifetimeMultiplier, distributionCost, toolsCost]);

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
  }) => (
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
          type="number"
          value={value}
          step={step}
          onChange={(e) => onChange(Number(e.target.value) || 0)}
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
    description,
    isLast = false
  }: {
    number: number;
    label: string;
    value: string;
    description: string;
    isLast?: boolean;
  }) => (
    <div className="relative">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue font-bold text-sm">
          {number}
        </div>
        <div className={cn("flex-1 pl-6 -ml-5", !isLast && "pb-8 border-l-2 border-border/30")}>
          <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-1">{label}</p>
          <p className="text-2xl font-bold text-foreground mb-1">{value}</p>
          <p className="text-sm text-text-muted">{description}</p>
        </div>
      </div>
    </div>
  );

  const SectionDivider = () => (
    <div className="container mx-auto px-6 lg:px-8 py-4">
      <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Content Marketing ROI Calculator | White-Label Agency Partner Tools | Dialed-In Web</title>
        <meta name="description" content="Calculate the ROI of content marketing investments. Estimate traffic, leads, customers, and lifetime revenue from blog content and articles." />
        <link rel="canonical" href="https://www.dialedinweb.com/content-marketing-calculator" />
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
                <FileText className="h-4 w-4" />
                Agency Partner Tools
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Content Marketing ROI Calculator
              </h1>
              <p className="text-text-secondary text-lg font-body mb-8">
                Demonstrate the compounding value of content marketing. Calculate traffic, leads, and customer lifetime value from consistent content production.
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
                  to="/seo-calculator" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border/50 text-text-secondary hover:text-foreground hover:border-accent-blue/50 transition-colors font-medium"
                >
                  <BarChart3 className="h-4 w-4" />
                  SEO Calculator
                </Link>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Calculator Section */}
        <section className="py-16 lg:py-24 bg-surface-dark">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Inputs Column */}
                <div className="space-y-6">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-2">Content Program Inputs</h2>
                    <p className="text-text-muted">Adjust these values based on your client's content strategy and goals.</p>
                  </div>

                  {/* Disclaimer */}
                  <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-4">
                    <p className="text-xs text-yellow-600 dark:text-yellow-500">
                      <strong>Note:</strong> Default values are based on industry averages from HubSpot and Content Marketing Institute research. For accurate projections, replace these with your client's actual performance data.
                    </p>
                  </div>

                  <div className="bg-surface-elevated rounded-2xl p-6 md:p-8 border border-border/30 space-y-5">
                    <p className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-2">Content Production</p>
                    <InputField 
                      label="Articles per Month" 
                      value={articlesPerMonth} 
                      onChange={setArticlesPerMonth}
                      suffix="articles"
                      tooltip="The number of blog posts or articles published each month. Most successful programs publish 4-12 pieces monthly."
                    />
                    <InputField 
                      label="Cost per Article" 
                      value={costPerArticle} 
                      onChange={setCostPerArticle}
                      prefix="$"
                      tooltip="Average cost to produce one piece of content including research, writing, editing, and graphics. Ranges from $150-$1,000+ depending on depth."
                    />
                    <InputField 
                      label="Avg Monthly Traffic per Article" 
                      value={avgTrafficPerArticle} 
                      onChange={setAvgTrafficPerArticle}
                      suffix="visits"
                      tooltip="Expected monthly organic traffic each article generates after it matures. Well-optimized content can drive 200-2,000+ visits monthly."
                    />
                    <InputField 
                      label="Time to Mature" 
                      value={trafficGrowthMonths} 
                      onChange={setTrafficGrowthMonths}
                      suffix="months"
                      tooltip="How long it takes for content to reach full traffic potential. SEO content typically matures in 3-9 months."
                    />
                  </div>

                  <div className="bg-surface-elevated rounded-2xl p-6 md:p-8 border border-border/30 space-y-5">
                    <p className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-2">Conversion Metrics</p>
                    <InputField 
                      label="Visitor to Lead Rate" 
                      value={conversionRate} 
                      onChange={setConversionRate}
                      suffix="%"
                      step={0.1}
                      tooltip="Percentage of content visitors who become leads. Average is 2-3% for blog traffic with good CTAs."
                    />
                    <InputField 
                      label="Lead to Customer Rate" 
                      value={leadToCustomerRate} 
                      onChange={setLeadToCustomerRate}
                      suffix="%"
                      tooltip="Percentage of leads that convert to paying customers. Varies widely by industry, typically 10-25%."
                    />
                    <InputField 
                      label="Average Customer Value" 
                      value={averageCustomerValue} 
                      onChange={setAverageCustomerValue}
                      prefix="$"
                      tooltip="Average initial purchase or contract value per customer."
                    />
                    <InputField 
                      label="Lifetime Value Multiplier" 
                      value={customerLifetimeMultiplier} 
                      onChange={setCustomerLifetimeMultiplier}
                      suffix="x"
                      step={0.1}
                      tooltip="How many times customers purchase over their lifetime. A 2x multiplier means each customer eventually spends double their initial purchase."
                    />
                  </div>

                  <div className="bg-surface-elevated rounded-2xl p-6 md:p-8 border border-border/30 space-y-5">
                    <p className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-2">Additional Costs</p>
                    <InputField 
                      label="Distribution & Promotion" 
                      value={distributionCost} 
                      onChange={setDistributionCost}
                      prefix="$"
                      suffix="/mo"
                      tooltip="Monthly budget for content distribution including social media promotion, email newsletters, and paid amplification."
                    />
                    <InputField 
                      label="Tools & Software" 
                      value={toolsCost} 
                      onChange={setToolsCost}
                      prefix="$"
                      suffix="/mo"
                      tooltip="Monthly cost for content tools like SEO software, grammar checkers, project management, and analytics platforms."
                    />
                  </div>
                </div>

                {/* Results Column */}
                <div className="space-y-6">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-2">Projected Results</h2>
                    <p className="text-text-muted">Expected monthly and annual outcomes based on your content program.</p>
                  </div>

                  {/* ROI Highlight Card */}
                  <div className="bg-gradient-to-br from-cta/10 to-accent-blue/10 rounded-2xl p-8 border border-cta/30">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="h-5 w-5 text-cta" />
                      <span className="text-sm font-semibold uppercase tracking-wider text-cta">Monthly Return on Investment</span>
                    </div>
                    <div className="flex items-baseline gap-4 mb-2">
                      <p className="text-5xl md:text-6xl font-bold text-foreground">{results.roi.toFixed(1)}:1</p>
                      <p className={cn(
                        "text-2xl font-semibold",
                        results.roiPercent > 0 ? "text-green-400" : "text-red-400"
                      )}>
                        {results.roiPercent > 0 ? "+" : ""}{results.roiPercent}%
                      </p>
                    </div>
                    <p className="text-text-muted">
                      For every $1 invested in content marketing, your client generates ${results.roi.toFixed(2)} in lifetime customer value.
                    </p>
                    <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-text-muted">Cost per Lead</p>
                        <p className="text-foreground font-medium">${results.costPerLead.toFixed(0)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-text-muted">Cost per Customer</p>
                        <p className="text-foreground font-medium">${results.costPerCustomer.toFixed(0)}</p>
                      </div>
                    </div>
                  </div>

                  {/* Funnel Visualization */}
                  <div className="bg-surface-elevated rounded-2xl p-6 md:p-8 border border-border/30">
                    <p className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-6">Content Marketing Funnel</p>
                    
                    <FunnelStep 
                      number={1}
                      label="Monthly Traffic"
                      value={results.monthlyTrafficFromNewContent.toLocaleString()}
                      description={`${articlesPerMonth} articles × ${avgTrafficPerArticle.toLocaleString()} visits each`}
                    />
                    <FunnelStep 
                      number={2}
                      label="Leads Generated"
                      value={results.monthlyLeads.toLocaleString()}
                      description={`${conversionRate}% visitor to lead conversion`}
                    />
                    <FunnelStep 
                      number={3}
                      label="New Customers"
                      value={results.monthlyCustomers.toLocaleString()}
                      description={`${leadToCustomerRate}% lead to customer rate`}
                    />
                    <FunnelStep 
                      number={4}
                      label="Lifetime Revenue"
                      value={`$${results.lifetimeRevenue.toLocaleString()}`}
                      description={`${customerLifetimeMultiplier}x customer lifetime value`}
                      isLast
                    />
                  </div>

                  {/* Summary Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <ResultCard 
                      label="Monthly Investment" 
                      value={`$${results.totalMonthlyCost.toLocaleString()}`} 
                      sublabel="Total content program cost" 
                      icon={DollarSign} 
                    />
                    <ResultCard 
                      label="Immediate Revenue" 
                      value={`$${results.immediateRevenue.toLocaleString()}`} 
                      sublabel="First purchase value" 
                      icon={Target} 
                    />
                  </div>

                  {/* 12-Month Projection */}
                  <div className="bg-surface-elevated rounded-2xl p-6 md:p-8 border border-accent-blue/30">
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="h-5 w-5 text-accent-blue" />
                      <span className="text-sm font-semibold uppercase tracking-wider text-accent-blue">12-Month Projection</span>
                    </div>
                    <p className="text-sm text-text-muted mb-4">
                      Content compounds over time. Here's what a year of consistent content marketing could deliver:
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-text-muted uppercase tracking-wider">Annual Investment</p>
                        <p className="text-xl font-bold text-foreground">${results.yearlyContentInvestment.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-text-muted uppercase tracking-wider">Annual Traffic</p>
                        <p className="text-xl font-bold text-foreground">{results.yearlyTraffic.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-text-muted uppercase tracking-wider">Annual Customers</p>
                        <p className="text-xl font-bold text-foreground">{results.yearlyCustomers.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-text-muted uppercase tracking-wider">Lifetime Revenue</p>
                        <p className="text-xl font-bold text-cta">${results.yearlyLifetimeRevenue.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-sm text-text-muted">
                        <span className="text-foreground font-medium">{results.yearlyRoi.toFixed(1)}:1</span> annual ROI
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Educational Content Section */}
        <section className="py-16 lg:py-24 bg-surface-elevated">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Why Content Marketing Compounds
                </h2>
                <p className="text-text-muted max-w-2xl mx-auto">
                  Unlike paid advertising, content marketing creates lasting assets that continue generating returns long after publication.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-surface-dark rounded-xl p-6 border border-border/30">
                  <div className="w-12 h-12 rounded-xl bg-cta/10 flex items-center justify-center mb-4">
                    <Repeat className="h-6 w-6 text-cta" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Compounding Traffic</h3>
                  <p className="text-sm text-text-muted">
                    Each piece of content you publish continues driving traffic for years. A library of 100 articles generating 500 visits each equals 50,000 monthly visitors on autopilot.
                  </p>
                </div>

                <div className="bg-surface-dark rounded-xl p-6 border border-border/30">
                  <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-4">
                    <Share2 className="h-6 w-6 text-accent-blue" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Authority Building</h3>
                  <p className="text-sm text-text-muted">
                    Consistent content establishes topical authority with both search engines and prospects. This makes every new piece more likely to rank and convert.
                  </p>
                </div>

                <div className="bg-surface-dark rounded-xl p-6 border border-border/30">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-emerald-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Lower CAC Over Time</h3>
                  <p className="text-sm text-text-muted">
                    As your content library grows, your customer acquisition cost drops. Fixed production costs spread across an ever-growing traffic base.
                  </p>
                </div>

                <div className="bg-surface-dark rounded-xl p-6 border border-border/30">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-purple-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Sales Enablement</h3>
                  <p className="text-sm text-text-muted">
                    Content serves double duty as sales collateral. Blog posts answer objections, case studies build trust, and guides nurture leads through the funnel.
                  </p>
                </div>
              </div>

              {/* Content Strategy Tips */}
              <div className="mt-12 bg-surface-dark rounded-xl p-6 md:p-8 border border-border/30">
                <h3 className="font-semibold text-foreground mb-4">Maximizing Content ROI</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cta/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-cta">1</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Target High-Intent Keywords</p>
                      <p className="text-xs text-text-muted">Focus on keywords with commercial intent that attract buyers, not just browsers.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cta/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-cta">2</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Update Existing Content</p>
                      <p className="text-xs text-text-muted">Refresh older posts with new data and insights to maintain rankings and relevance.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cta/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-cta">3</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Build Internal Links</p>
                      <p className="text-xs text-text-muted">Connect related content to help readers navigate and boost SEO authority distribution.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cta/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-cta">4</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Repurpose Across Channels</p>
                      <p className="text-xs text-text-muted">Turn blog posts into social content, email sequences, and video scripts.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Pricing Comparison */}
        <PricingComparisonTable />

        <SectionDivider />

        {/* Agency Videos */}
        <AgencyPartnerVideos />

        <SectionDivider />

        {/* Contact Form */}
        <ContactForm />
      </main>
      
      <Footer />
    </>
  );
};

export default ContentMarketingCalculator;