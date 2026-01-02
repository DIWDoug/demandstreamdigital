import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import AgencyPartnerVideos from "@/components/calculators/AgencyPartnerVideos";
import PricingComparisonTable from "@/components/calculators/PricingComparisonTable";
import { useState, useMemo } from "react";
import { Calculator, DollarSign, TrendingUp, Users, Mail, MousePointerClick, Eye, Percent, Info, Repeat, Target, Send, UserPlus } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const EmailCalculator = () => {
  // List & Send Inputs
  const [listSize, setListSize] = useState(5000);
  const [sendsPerMonth, setSendsPerMonth] = useState(4);
  const [openRate, setOpenRate] = useState(21.33);
  const [clickRate, setClickRate] = useState(2.62);
  const [conversionRate, setConversionRate] = useState(1.22);
  
  // Revenue Inputs
  const [averageOrderValue, setAverageOrderValue] = useState(150);
  const [customerLifetimeMultiplier, setCustomerLifetimeMultiplier] = useState(2.5);
  const [monthlyInvestment, setMonthlyInvestment] = useState(500);

  const results = useMemo(() => {
    const totalEmailsSent = listSize * sendsPerMonth;
    const totalOpens = Math.round(totalEmailsSent * (openRate / 100));
    const totalClicks = Math.round(totalEmailsSent * (clickRate / 100));
    const totalConversions = Math.round(totalClicks * (conversionRate / 100));
    const immediateRevenue = totalConversions * averageOrderValue;
    const lifetimeRevenue = immediateRevenue * customerLifetimeMultiplier;
    const roi = monthlyInvestment > 0 ? lifetimeRevenue / monthlyInvestment : 0;
    const roiPercent = monthlyInvestment > 0 ? Math.round(((lifetimeRevenue - monthlyInvestment) / monthlyInvestment) * 100) : 0;
    const revenuePerEmail = totalEmailsSent > 0 ? (lifetimeRevenue / totalEmailsSent) : 0;

    return {
      totalEmailsSent,
      totalOpens,
      totalClicks,
      totalConversions,
      immediateRevenue,
      lifetimeRevenue,
      roi,
      roiPercent,
      revenuePerEmail
    };
  }, [listSize, sendsPerMonth, openRate, clickRate, conversionRate, averageOrderValue, customerLifetimeMultiplier, monthlyInvestment]);

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
        <title>Email Marketing ROI Calculator | White-Label Agency Partner Tools | Dialed-In Web</title>
        <meta name="description" content="Calculate expected ROI from email marketing campaigns. Estimate opens, clicks, conversions, and lifetime revenue from email programs." />
        <link rel="canonical" href="https://www.dialedinweb.com/email-calculator" />
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
                <Mail className="h-4 w-4" />
                Agency Partner Tools
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Email Marketing ROI Calculator
              </h1>
              <p className="text-text-secondary text-lg font-body mb-8">
                Show clients the true value of email marketing. Calculate opens, clicks, conversions, and lifetime revenue from consistent email programs.
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
                  to="/ad-budget-calculator" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border/50 text-text-secondary hover:text-foreground hover:border-accent-blue/50 transition-colors font-medium"
                >
                  <DollarSign className="h-4 w-4" />
                  Ad Budget Calculator
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
                    <h2 className="text-2xl font-bold text-foreground mb-2">Email Program Inputs</h2>
                    <p className="text-text-muted">Adjust these values based on your client's list size and email frequency.</p>
                  </div>

                  {/* Disclaimer */}
                  <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-4">
                    <p className="text-xs text-yellow-600 dark:text-yellow-500">
                      <strong>Note:</strong> Default rates are industry averages from Mailchimp and Campaign Monitor research. For accurate projections, replace these with your client's actual email performance metrics.
                    </p>
                  </div>

                  <div className="bg-surface-elevated rounded-2xl p-6 md:p-8 border border-border/30 space-y-5">
                    <p className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-2">List & Sending</p>
                    <InputField 
                      label="Email List Size" 
                      value={listSize} 
                      onChange={setListSize}
                      suffix="subscribers"
                      tooltip="The number of active subscribers on the client's email list."
                    />
                    <InputField 
                      label="Sends per Month" 
                      value={sendsPerMonth} 
                      onChange={setSendsPerMonth}
                      tooltip="How many email campaigns are sent each month. Most businesses send 2-4 campaigns monthly."
                    />
                  </div>

                  <div className="bg-surface-elevated rounded-2xl p-6 md:p-8 border border-border/30 space-y-5">
                    <p className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-2">Engagement Rates</p>
                    <InputField 
                      label="Open Rate" 
                      value={openRate} 
                      onChange={setOpenRate}
                      suffix="%"
                      step={0.01}
                      tooltip="Average open rate across industries is 21.33%. Well-optimized lists can achieve 25-35%."
                    />
                    <InputField 
                      label="Click Rate" 
                      value={clickRate} 
                      onChange={setClickRate}
                      suffix="%"
                      step={0.01}
                      tooltip="Average click-through rate is 2.62%. Strong offers and segmentation can push this to 4-6%."
                    />
                    <InputField 
                      label="Conversion Rate" 
                      value={conversionRate} 
                      onChange={setConversionRate}
                      suffix="%"
                      step={0.01}
                      tooltip="Percentage of clickers who complete a purchase or desired action. Typically 1-3% for email."
                    />
                  </div>

                  <div className="bg-surface-elevated rounded-2xl p-6 md:p-8 border border-border/30 space-y-5">
                    <p className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-2">Revenue Factors</p>
                    <InputField 
                      label="Average Order Value" 
                      value={averageOrderValue} 
                      onChange={setAverageOrderValue}
                      prefix="$"
                      tooltip="The average value of each purchase or service from email-driven customers."
                    />
                    <InputField 
                      label="Customer Lifetime Multiplier" 
                      value={customerLifetimeMultiplier} 
                      onChange={setCustomerLifetimeMultiplier}
                      suffix="x"
                      step={0.1}
                      tooltip="Email customers often make repeat purchases. A 2.5x multiplier means each customer is worth 2.5 initial orders over their lifetime."
                    />
                    <InputField 
                      label="Monthly Email Investment" 
                      value={monthlyInvestment} 
                      onChange={setMonthlyInvestment}
                      prefix="$"
                      tooltip="Total monthly cost for email marketing including platform fees and management."
                    />
                  </div>
                </div>

                {/* Results Column */}
                <div className="space-y-6">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-2">Projected Results</h2>
                    <p className="text-text-muted">Expected monthly outcomes based on your email program inputs.</p>
                  </div>

                  {/* ROI Highlight Card */}
                  <div className="bg-gradient-to-br from-cta/10 to-accent-blue/10 rounded-2xl p-8 border border-cta/30">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="h-5 w-5 text-cta" />
                      <span className="text-sm font-semibold uppercase tracking-wider text-cta">Estimated Return on Investment</span>
                    </div>
                    <div className="flex items-baseline gap-4 mb-2">
                      <p className="text-5xl md:text-6xl font-bold text-foreground">{results.roi.toFixed(0)}:1</p>
                      <p className={cn(
                        "text-2xl font-semibold",
                        results.roiPercent > 0 ? "text-green-400" : "text-red-400"
                      )}>
                        {results.roiPercent > 0 ? "+" : ""}{results.roiPercent}%
                      </p>
                    </div>
                    <p className="text-text-muted">
                      For every $1 spent on email marketing, your client generates ${results.roi.toFixed(0)} in lifetime revenue.
                    </p>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-sm text-text-muted">
                        <span className="text-foreground font-medium">${results.revenuePerEmail.toFixed(2)}</span> revenue per email sent
                      </p>
                    </div>
                  </div>

                  {/* Funnel Visualization */}
                  <div className="bg-surface-elevated rounded-2xl p-6 md:p-8 border border-border/30">
                    <p className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-6">Email Funnel</p>
                    
                    <FunnelStep 
                      number={1}
                      label="Emails Sent"
                      value={results.totalEmailsSent.toLocaleString()}
                      description={`${listSize.toLocaleString()} subscribers × ${sendsPerMonth} sends`}
                    />
                    <FunnelStep 
                      number={2}
                      label="Opens"
                      value={results.totalOpens.toLocaleString()}
                      description={`${openRate}% of emails opened`}
                    />
                    <FunnelStep 
                      number={3}
                      label="Clicks"
                      value={results.totalClicks.toLocaleString()}
                      description={`${clickRate}% click-through rate`}
                    />
                    <FunnelStep 
                      number={4}
                      label="Conversions"
                      value={results.totalConversions.toLocaleString()}
                      description={`${conversionRate}% of clickers convert`}
                      isLast
                    />
                  </div>

                  {/* Summary Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <ResultCard 
                      label="Immediate Revenue" 
                      value={`$${results.immediateRevenue.toLocaleString()}`} 
                      sublabel="From this month's campaigns" 
                      icon={DollarSign} 
                    />
                    <ResultCard 
                      label="Lifetime Revenue" 
                      value={`$${results.lifetimeRevenue.toLocaleString()}`} 
                      sublabel={`${customerLifetimeMultiplier}x customer value`} 
                      icon={Repeat}
                      highlight={results.lifetimeRevenue > monthlyInvestment}
                    />
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-12 p-6 rounded-xl bg-surface-elevated border border-border/30">
                <p className="text-sm text-text-muted text-center">
                  <strong className="text-foreground">Note:</strong> These projections are based on industry averages. Email marketing typically returns $36-$42 for every $1 spent (Litmus, 2023). Actual results depend on list quality, content relevance, and send frequency.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Educational Content */}
        <section className="py-16 lg:py-24 bg-surface-dark">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <EmailEducationalContent />
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Pricing Comparison */}
        <section className="py-16 lg:py-24 bg-surface-elevated">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <PricingComparisonTable />
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Agency Partner Videos */}
        <AgencyPartnerVideos />

        {/* Contact Form Section */}
        <ContactForm />
      </main>
      
      <Footer />
    </>
  );
};

// Educational Content Component
const EmailEducationalContent = () => {
  return (
    <div className="space-y-16">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Understanding Email Marketing ROI
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Email consistently delivers the highest ROI of any marketing channel. Here's why it works and how to maximize returns.
        </p>
      </div>

      {/* Why Email Works */}
      <div className="bg-surface-elevated rounded-2xl p-8 border border-border/30">
        <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Mail className="h-5 w-5 text-cta" />
          Why Email Delivers the Highest ROI
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cta/10 flex items-center justify-center">
                <Users className="h-4 w-4 text-cta" />
              </div>
              <div>
                <p className="font-medium text-foreground">You Own the Audience</p>
                <p className="text-sm text-text-muted">Unlike social media, you control access to your subscribers. No algorithm changes can take that away.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cta/10 flex items-center justify-center">
                <Target className="h-4 w-4 text-cta" />
              </div>
              <div>
                <p className="font-medium text-foreground">Permission-Based</p>
                <p className="text-sm text-text-muted">Subscribers chose to hear from you. This intent translates to higher engagement and conversion rates.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cta/10 flex items-center justify-center">
                <DollarSign className="h-4 w-4 text-cta" />
              </div>
              <div>
                <p className="font-medium text-foreground">Low Cost Per Contact</p>
                <p className="text-sm text-text-muted">Once a subscriber is on your list, reaching them costs fractions of a cent compared to paid advertising.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cta/10 flex items-center justify-center">
                <Repeat className="h-4 w-4 text-cta" />
              </div>
              <div>
                <p className="font-medium text-foreground">Drives Repeat Business</p>
                <p className="text-sm text-text-muted">Email keeps customers engaged between purchases, dramatically increasing lifetime value.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Benchmarks */}
      <div className="bg-surface-elevated rounded-2xl p-8 border border-border/30">
        <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
          <TrendingUp className="h-5 w-5 text-accent-blue" />
          Industry Email Benchmarks
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border/30">
                <th className="pb-4 text-sm font-semibold text-text-muted">Metric</th>
                <th className="pb-4 text-sm font-semibold text-text-muted text-center">Average</th>
                <th className="pb-4 text-sm font-semibold text-text-muted text-center">Good</th>
                <th className="pb-4 text-sm font-semibold text-text-muted text-center">Excellent</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/20">
              <tr>
                <td className="py-4 text-foreground">Open Rate</td>
                <td className="py-4 text-center text-text-muted">15-20%</td>
                <td className="py-4 text-center text-text-muted">21-30%</td>
                <td className="py-4 text-center text-green-400">30%+</td>
              </tr>
              <tr>
                <td className="py-4 text-foreground">Click Rate</td>
                <td className="py-4 text-center text-text-muted">1-2%</td>
                <td className="py-4 text-center text-text-muted">2.5-4%</td>
                <td className="py-4 text-center text-green-400">4%+</td>
              </tr>
              <tr>
                <td className="py-4 text-foreground">Conversion Rate</td>
                <td className="py-4 text-center text-text-muted">0.5-1%</td>
                <td className="py-4 text-center text-text-muted">1-2%</td>
                <td className="py-4 text-center text-green-400">2%+</td>
              </tr>
              <tr>
                <td className="py-4 text-foreground">Unsubscribe Rate</td>
                <td className="py-4 text-center text-text-muted">0.5%+</td>
                <td className="py-4 text-center text-text-muted">0.2-0.5%</td>
                <td className="py-4 text-center text-green-400">&lt;0.2%</td>
              </tr>
              <tr>
                <td className="py-4 text-foreground">ROI</td>
                <td className="py-4 text-center text-text-muted">20:1</td>
                <td className="py-4 text-center text-text-muted">36:1</td>
                <td className="py-4 text-center text-green-400">42:1+</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-muted mt-4">Sources: Mailchimp, Campaign Monitor, Litmus, DMA 2023</p>
      </div>

      {/* Key Success Factors */}
      <div className="bg-surface-elevated rounded-2xl p-8 border border-border/30">
        <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Target className="h-5 w-5 text-cta" />
          Key Email Success Factors
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-surface-dark rounded-xl p-5 border border-border/20">
            <p className="font-medium text-foreground mb-2">List Quality</p>
            <p className="text-sm text-text-muted">A smaller, engaged list outperforms a large, unresponsive one. Focus on quality opt-ins and regular list hygiene.</p>
          </div>
          <div className="bg-surface-dark rounded-xl p-5 border border-border/20">
            <p className="font-medium text-foreground mb-2">Segmentation</p>
            <p className="text-sm text-text-muted">Targeted emails to specific segments get 14% higher open rates and 100% higher click rates than broadcasts.</p>
          </div>
          <div className="bg-surface-dark rounded-xl p-5 border border-border/20">
            <p className="font-medium text-foreground mb-2">Automation</p>
            <p className="text-sm text-text-muted">Automated emails generate 320% more revenue than non-automated. Welcome series and abandoned cart flows are essential.</p>
          </div>
          <div className="bg-surface-dark rounded-xl p-5 border border-border/20">
            <p className="font-medium text-foreground mb-2">Deliverability</p>
            <p className="text-sm text-text-muted">Proper authentication (SPF, DKIM, DMARC) and list hygiene ensure emails reach the inbox, not spam.</p>
          </div>
          <div className="bg-surface-dark rounded-xl p-5 border border-border/20">
            <p className="font-medium text-foreground mb-2">Mobile Optimization</p>
            <p className="text-sm text-text-muted">Over 60% of emails are opened on mobile. Responsive design isn't optional—it's required.</p>
          </div>
          <div className="bg-surface-dark rounded-xl p-5 border border-border/20">
            <p className="font-medium text-foreground mb-2">Consistency</p>
            <p className="text-sm text-text-muted">Regular sending keeps your brand top-of-mind and trains inbox providers that you're a legitimate sender.</p>
          </div>
        </div>
      </div>

      {/* Common Mistakes */}
      <div className="bg-surface-elevated rounded-2xl p-8 border border-border/30">
        <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
          <Info className="h-5 w-5 text-yellow-500" />
          Common Email Marketing Mistakes
        </h3>
        <div className="space-y-4">
          {[
            {
              mistake: "Buying or renting email lists",
              fix: "Build your list organically through opt-in forms, lead magnets, and customer purchases."
            },
            {
              mistake: "Sending without a strategy",
              fix: "Develop a content calendar that mixes promotional, educational, and engagement content."
            },
            {
              mistake: "Ignoring mobile users",
              fix: "Test every email on mobile before sending. Use single-column layouts and large tap targets."
            },
            {
              mistake: "No segmentation",
              fix: "Segment by purchase history, engagement level, and interests for targeted messaging."
            },
            {
              mistake: "Inconsistent sending",
              fix: "Set a predictable schedule. Sporadic sending hurts deliverability and subscriber expectations."
            },
            {
              mistake: "Only selling, never giving",
              fix: "Follow the 80/20 rule: 80% value-add content, 20% promotional. Build trust before asking for the sale."
            }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-4 bg-surface-dark rounded-lg border border-border/20">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                <span className="text-red-400 text-xs">✕</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">{item.mistake}</p>
                <p className="text-sm text-text-muted mt-1"><span className="text-green-400">Fix:</span> {item.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-cta/10 to-accent-blue/10 rounded-2xl p-8 border border-cta/30 text-center">
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Ready to Offer Email Marketing to Your Clients?
        </h3>
        <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
          Our white-label email marketing services let you add a high-margin offering without building the team. We handle strategy, execution, and reporting while you maintain the client relationship.
        </p>
        <Link 
          to="/white-label-inbound-marketing-services/email-marketing"
          className="inline-flex items-center gap-2 px-8 py-4 bg-cta hover:bg-cta/90 text-cta-foreground rounded-lg font-semibold transition-colors"
        >
          <Mail className="h-5 w-5" />
          Explore White-Label Email Services
        </Link>
      </div>
    </div>
  );
};

export default EmailCalculator;
