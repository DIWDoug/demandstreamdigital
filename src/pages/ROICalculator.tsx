import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import ROIEducationalContent from "@/components/calculators/ROIEducationalContent";
import AgencyPartnerVideos from "@/components/calculators/AgencyPartnerVideos";
import PricingComparisonTable from "@/components/calculators/PricingComparisonTable";
import { useState, useMemo } from "react";
import { Calculator, TrendingUp, Users, UserCheck, DollarSign, BarChart3, ChevronDown, Info, Phone, ArrowRight } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { industryBenchmarks, type IndustryBenchmark } from "@/data/industries";
import { Link } from "react-router-dom";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

const ROICalculator = () => {
  // Keep raw strings for a smooth typing experience (multi-digit + decimals)
  const [visitorsInput, setVisitorsInput] = useState("500");
  const [leadConversionRateInput, setLeadConversionRateInput] = useState("2.5");
  const [leadToCustomerRateInput, setLeadToCustomerRateInput] = useState("10");
  const [revenuePerCustomerInput, setRevenuePerCustomerInput] = useState("1000");
  const [marketingCostInput, setMarketingCostInput] = useState("2500");

  const [selectedBenchmark, setSelectedBenchmark] = useState<IndustryBenchmark | null>(null);
  const [showBenchmarks, setShowBenchmarks] = useState(false);

  const parseFloatSafe = (value: string) => {
    const n = Number.parseFloat(value);
    return Number.isFinite(n) ? n : 0;
  };

  const parseIntSafe = (value: string) => {
    const n = Number.parseInt(value, 10);
    return Number.isFinite(n) ? n : 0;
  };

  // Derived numeric values used for calculations
  const visitors = Math.max(0, parseIntSafe(visitorsInput));
  const leadConversionRate = Math.max(0, parseFloatSafe(leadConversionRateInput));
  const leadToCustomerRate = Math.max(0, parseFloatSafe(leadToCustomerRateInput));
  const revenuePerCustomer = Math.max(0, parseIntSafe(revenuePerCustomerInput));
  const marketingCost = Math.max(0, parseIntSafe(marketingCostInput));

  const applyBenchmark = (benchmark: IndustryBenchmark) => {
    setLeadConversionRateInput(String(benchmark.conversionRate));
    setLeadToCustomerRateInput(String(benchmark.closeRate));
    setRevenuePerCustomerInput(String(benchmark.avgCustomerValue));
    setSelectedBenchmark(benchmark);
    setShowBenchmarks(false);
  };

  const calculateRevenue = (convRate: number, traffic: number) => {
    const leads = Math.round(traffic * (convRate / 100));
    const customers = Math.round(leads * (leadToCustomerRate / 100));
    return customers * revenuePerCustomer;
  };

  const results = useMemo(() => {
    const totalLeads = Math.round(visitors * (leadConversionRate / 100));
    const newCustomers = Math.round(totalLeads * (leadToCustomerRate / 100));
    const inboundRevenue = newCustomers * revenuePerCustomer;
    const roi = marketingCost > 0 
      ? Math.round(((inboundRevenue - marketingCost) / marketingCost) * 100) 
      : 0;

    return { totalLeads, newCustomers, inboundRevenue, roi };
  }, [visitors, leadConversionRate, leadToCustomerRate, revenuePerCustomer, marketingCost]);

  const growthForecast = useMemo(() => {
    const baseRevenue = results.inboundRevenue;
    
    const conversionIncreases = [0.5, 1, 1.5, 2];
    const conversionGrowth = conversionIncreases.map(increase => ({
      increase,
      revenue: calculateRevenue(leadConversionRate + increase, visitors) - baseRevenue
    }));

    const trafficIncreases = [10, 25, 50, 100];
    const trafficGrowth = trafficIncreases.map(increase => ({
      increase,
      revenue: calculateRevenue(leadConversionRate, visitors * (1 + increase / 100)) - baseRevenue
    }));

    const combinedRevenue = calculateRevenue(leadConversionRate + 1, visitors * 1.3) - baseRevenue;

    return { conversionGrowth, trafficGrowth, combinedRevenue };
  }, [visitors, leadConversionRate, leadToCustomerRate, revenuePerCustomer, results.inboundRevenue]);

  const sanitizeNumericInput = (raw: string, allowDecimal: boolean) => {
    const cleaned = allowDecimal
      ? raw.replace(/[^0-9.]/g, "")
      : raw.replace(/[^0-9]/g, "");

    if (!allowDecimal) return cleaned;

    // Keep only the first decimal point
    const [head, ...rest] = cleaned.split(".");
    if (rest.length === 0) return cleaned;
    return `${head}.${rest.join("")}`;
  };

  const InputField = ({
    label,
    value,
    onChange,
    suffix,
    prefix,
    tooltip,
    inputMode = "decimal",
    allowDecimal = true,
  }: {
    label: string;
    value: string;
    onChange: (val: string) => void;
    suffix?: string;
    prefix?: string;
    tooltip?: string;
    inputMode?: "decimal" | "numeric";
    allowDecimal?: boolean;
  }) => (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label className="block text-sm text-text-muted font-body">{label}</label>
        {tooltip && (
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  className="text-text-muted hover:text-accent-blue transition-colors"
                >
                  <Info className="h-3.5 w-3.5" />
                </button>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                className="max-w-xs bg-surface-elevated border-border/50 text-foreground z-50"
              >
                <p className="text-sm font-body">{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <div className="relative">
        {prefix && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted text-sm">
            {prefix}
          </span>
        )}
        <input
          type="text"
          inputMode={inputMode}
          value={value}
          onChange={(e) => onChange(sanitizeNumericInput(e.target.value, allowDecimal))}
          className={cn(
            "w-full py-3.5 rounded-lg bg-surface-dark border border-border/50 text-foreground text-lg font-medium focus:outline-none focus:border-accent-blue transition-colors",
            prefix ? "pl-8 pr-4" : "px-4",
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
        : "bg-surface-dark border-border/30"
    )}>
      <div className="flex items-center gap-2 mb-3">
        <Icon className={cn("h-4 w-4", highlight ? "text-cta" : "text-accent-blue")} />
        <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">{label}</span>
      </div>
      <p className="text-3xl md:text-4xl font-bold mb-1 text-cta">
        {value}
      </p>
      <p className="text-sm text-text-muted font-body">{sublabel}</p>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>ROI Calculator | White-Label Agency Partner Tools | Dialed-In Web</title>
        <meta name="description" content="Calculate the return on investment for your clients' inbound marketing efforts. Show the value of SEO, content, and lead generation." />
        <link rel="canonical" href="https://www.dialedinweb.com/roi-calculator" />
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
                Inbound Marketing ROI Calculator
              </h1>
              <p className="text-text-secondary text-lg font-body mb-8">
                Demonstrate the value of your services to clients. Input their metrics and show them exactly how inbound marketing translates to revenue.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
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
            <div className="max-w-5xl mx-auto space-y-8">
              {/* Industry Benchmarks Panel */}
              <div className="bg-surface-elevated rounded-2xl p-6 border border-border/30">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent-blue/10">
                      <BarChart3 className="h-5 w-5 text-accent-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Industry Benchmarks</h3>
                      <p className="text-sm text-text-muted">Select an industry for starting estimates, then adjust to your client's actual data</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowBenchmarks(!showBenchmarks)}
                    className="px-4 py-2 rounded-lg bg-accent-blue/10 text-accent-blue text-sm font-medium hover:bg-accent-blue/20 transition-colors flex items-center gap-2"
                  >
                    {selectedBenchmark ? selectedBenchmark.name : "Select Industry"}
                    <ChevronDown className={cn("h-4 w-4 transition-transform", showBenchmarks && "rotate-180")} />
                  </button>
                </div>

                {/* Disclaimer */}
                <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-3 mb-4">
                  <p className="text-xs text-yellow-600 dark:text-yellow-500">
                    <strong>Note:</strong> These are industry averages based on general marketing research. For accurate projections, replace these with your client's actual conversion rates, close rates, and customer values from their CRM or analytics.
                  </p>
                </div>

                {showBenchmarks && (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4 p-4 rounded-xl bg-surface-dark border border-border/30">
                    {industryBenchmarks.map((benchmark) => (
                      <button
                        key={benchmark.id}
                        onClick={() => applyBenchmark(benchmark)}
                        className={cn(
                          "p-3 rounded-lg text-left transition-all border",
                          selectedBenchmark?.id === benchmark.id
                            ? "bg-accent-blue/10 border-accent-blue/50 text-foreground"
                            : "bg-surface-elevated border-border/30 text-text-muted hover:border-accent-blue/30 hover:text-foreground"
                        )}
                      >
                        <p className="text-sm font-medium truncate">{benchmark.name}</p>
                        <p className="text-xs text-text-muted mt-1">{benchmark.conversionRate}% conv · {benchmark.closeRate}% close</p>
                      </button>
                    ))}
                  </div>
                )}

                {selectedBenchmark && !showBenchmarks && (
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="p-3 rounded-lg bg-surface-dark border border-border/30">
                      <p className="text-xs text-text-muted mb-1">Avg. Conversion Rate</p>
                      <p className="text-lg font-semibold text-foreground">{selectedBenchmark.conversionRate}%</p>
                    </div>
                    <div className="p-3 rounded-lg bg-surface-dark border border-border/30">
                      <p className="text-xs text-text-muted mb-1">Avg. Close Rate</p>
                      <p className="text-lg font-semibold text-foreground">{selectedBenchmark.closeRate}%</p>
                    </div>
                    <div className="p-3 rounded-lg bg-surface-dark border border-border/30">
                      <p className="text-xs text-text-muted mb-1">Avg. Customer Value</p>
                      <p className="text-lg font-semibold text-foreground">${selectedBenchmark.avgCustomerValue.toLocaleString()}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Main Calculator Grid */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-surface-elevated rounded-2xl p-6 md:p-8 border border-border/30 space-y-5">
                  <InputField 
                    label="Client's Website Visitors (Monthly)" 
                    value={visitorsInput}
                    onChange={setVisitorsInput}
                    inputMode="numeric"
                    allowDecimal={false}
                    tooltip="We default to 500 as a baseline benchmark, but you can enter your client's actual monthly visitors (including below 500)."
                  />
                  <InputField 
                    label="Lead Conversion Rate" 
                    value={leadConversionRateInput}
                    onChange={setLeadConversionRateInput}
                    inputMode="decimal"
                    suffix="%"
                    tooltip="Percentage of website visitors who become leads. Local services average 2-5%."
                  />
                  <InputField 
                    label="Lead-to-Customer Rate" 
                    value={leadToCustomerRateInput}
                    onChange={setLeadToCustomerRateInput}
                    inputMode="decimal"
                    suffix="%"
                    tooltip="Close rate: percentage of leads that become paying customers. Local services typically 25-40%."
                  />
                  <InputField 
                    label="Avg. Customer Value" 
                    value={revenuePerCustomerInput}
                    onChange={setRevenuePerCustomerInput}
                    inputMode="numeric"
                    allowDecimal={false}
                    prefix="$"
                    tooltip="Average revenue per customer. For recurring services like HVAC maintenance, use annual value."
                  />
                  <InputField 
                    label="Monthly Retainer" 
                    value={marketingCostInput}
                    onChange={setMarketingCostInput}
                    inputMode="numeric"
                    allowDecimal={false}
                    prefix="$"
                    tooltip="Your monthly retainer plus any ad spend. This shows ROI of your services."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 content-start">
                  <ResultCard label="Leads for Client" value={results.totalLeads.toLocaleString()} sublabel="Monthly lead generation" icon={Users} />
                  <ResultCard label="New Customers" value={results.newCustomers.toLocaleString()} sublabel="Monthly customer acquisition" icon={UserCheck} />
                  <ResultCard label="Client Revenue" value={`$${results.inboundRevenue.toLocaleString()}`} sublabel="Monthly revenue generated" icon={DollarSign} />
                  <ResultCard label="Client's Marketing ROI" value={`${results.roi}%`} sublabel="Return on their investment with you" icon={TrendingUp} highlight={results.roi > 100} />
                </div>
              </div>

              {/* Conversion Rate Growth Forecast Section */}
              <div className="bg-surface-elevated rounded-2xl p-6 md:p-8 border border-border/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-cta/10">
                    <TrendingUp className="h-5 w-5 text-cta" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Conversion Rate Growth Forecast</h3>
                    <p className="text-sm text-text-muted">Based on current inputs: {visitors.toLocaleString()} visitors, {leadConversionRate}% conversion, {leadToCustomerRate}% close rate, ${revenuePerCustomer.toLocaleString()} avg. value</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider">Conversion Rate +</h4>
                    <div className="space-y-2">
                      {growthForecast.conversionGrowth.map(({ increase, revenue }) => (
                        <div key={increase} className="flex items-center justify-between p-3 rounded-lg bg-surface-dark border border-border/30">
                          <span className="text-sm text-foreground">{leadConversionRate}% → {(leadConversionRate + increase).toFixed(1)}%</span>
                          <span className={cn(
                            "text-sm font-semibold",
                            revenue > 0 ? "text-cta" : "text-text-muted"
                          )}>
                            {revenue > 0 ? "+" : ""}${revenue.toLocaleString()}/mo
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider">Website Traffic +</h4>
                    <div className="space-y-2">
                      {growthForecast.trafficGrowth.map(({ increase, revenue }) => (
                        <div key={increase} className="flex items-center justify-between p-3 rounded-lg bg-surface-dark border border-border/30">
                          <span className="text-sm text-foreground">{visitors.toLocaleString()} → {Math.round(visitors * (1 + increase / 100)).toLocaleString()}</span>
                          <span className={cn(
                            "text-sm font-semibold",
                            revenue > 0 ? "text-cta" : "text-text-muted"
                          )}>
                            {revenue > 0 ? "+" : ""}${revenue.toLocaleString()}/mo
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider">Combined Impact</h4>
                    <div className="p-4 rounded-xl bg-cta/5 border border-cta/30 h-[calc(100%-2rem)] flex flex-col justify-center">
                      <p className="text-xs text-text-muted mb-1">
                        {leadConversionRate}% → {(leadConversionRate + 1).toFixed(1)}% + {Math.round(visitors * 1.3).toLocaleString()} visitors
                      </p>
                      <p className="text-2xl font-bold text-cta">
                        +${growthForecast.combinedRevenue.toLocaleString()}/mo
                      </p>
                      <p className="text-xs text-text-muted mt-2">Additional client revenue with both improvements</p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-text-muted mt-6 text-center">
                  Projections based on current client inputs. Use these to show how incremental SEO improvements translate to measurable revenue growth.
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-cta hover:bg-cta-hover text-white font-semibold rounded-lg transition-colors"
              >
                Let's Talk Partnership
                <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="text-text-muted">or</span>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 text-foreground hover:text-cta transition-colors font-medium"
              >
                <Phone className="h-4 w-4" />
                {PHONE_NUMBER}
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
              <ROIEducationalContent />
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

export default ROICalculator;
