import { CheckCircle, XCircle, DollarSign, Shield, Layers, Target } from "lucide-react";
import { cn } from "@/lib/utils";

const PricingComparisonTable = () => {
  // SEO Series Pricing - LC, MC, HC with all 4 tiers
  const seriesPricing = {
    lc: [
      { tier: "LC 100", cost: 604 },
      { tier: "LC 200", cost: 824 },
      { tier: "LC 300", cost: 1044 },
      { tier: "LC 400", cost: 1264 }
    ],
    mc: [
      { tier: "MC 100", cost: 962 },
      { tier: "MC 200", cost: 1182 },
      { tier: "MC 300", cost: 1402 },
      { tier: "MC 400", cost: 1622 }
    ],
    hc: [
      { tier: "HC 100", cost: 1319 },
      { tier: "HC 200", cost: 1539 },
      { tier: "HC 300", cost: 1759 },
      { tier: "HC 400", cost: 1979 }
    ]
  };

  const seriesInfo = [
    {
      key: "lc",
      name: "Low Competition (LC)",
      color: "emerald",
      icon: Shield,
      description: "Stable, lightly contested markets with minimal competitive pressure",
      industries: ["Landscaping", "Cleaning", "Pool Service", "Florists", "Tutoring"],
      characteristics: ["Low SERP saturation", "Few authoritative competitors", "Steady work maintains rankings"]
    },
    {
      key: "mc",
      name: "Medium Competition (MC)",
      color: "amber",
      icon: Layers,
      description: "Active markets requiring consistent effort to win and hold position",
      industries: ["HVAC", "Plumbing", "Roofing", "Auto Repair", "Restaurants"],
      characteristics: ["Competitors investing inconsistently", "Rankings move with effort", "Results compound over time"]
    },
    {
      key: "hc",
      name: "High Competition (HC)",
      color: "destructive",
      icon: Target,
      description: "Saturated, high-stakes markets requiring aggressive, sustained investment",
      industries: ["Legal", "Medical", "Dental", "Med Spa", "Real Estate"],
      characteristics: ["High CPCs and strong demand", "Continuous competitive pressure", "Rankings need active defense"]
    }
  ];

  const comparisonData = [
    {
      service: "Local SEO (per location)",
      inHouse: "$4,000 - $8,000",
      typicalAgency: "$1,500 - $3,000",
      whiteLabel: "$604 - $1,979",
      notes: "Includes technical SEO, content, citations, link building"
    },
    {
      service: "Google Business Profile Management",
      inHouse: "$1,500 - $3,000",
      typicalAgency: "$500 - $1,000",
      whiteLabel: "$300 - $600",
      notes: "Posts, Q&A, review response, photo optimization"
    },
    {
      service: "Paid Media Management",
      inHouse: "$3,000 - $6,000",
      typicalAgency: "$1,000 - $2,500",
      whiteLabel: "$400 - $1,200",
      notes: "Plus % of ad spend for larger budgets"
    },
    {
      service: "Email Marketing",
      inHouse: "$2,500 - $5,000",
      typicalAgency: "$1,000 - $2,000",
      whiteLabel: "$400 - $1,000",
      notes: "Strategy, copywriting, automation, reporting"
    },
    {
      service: "Content Marketing",
      inHouse: "$3,000 - $6,000",
      typicalAgency: "$1,200 - $2,500",
      whiteLabel: "$500 - $1,200",
      notes: "Blog content, location pages, service pages"
    },
    {
      service: "Inbound Marketing (Full Suite)",
      inHouse: "$8,000 - $15,000",
      typicalAgency: "$3,500 - $6,000",
      whiteLabel: "$1,500 - $2,600",
      notes: "SEO, GBP, content, email, reporting combined"
    }
  ];

  const comparisonFeatures = [
    { feature: "Hire & train specialists", inHouse: false, typicalAgency: false, whiteLabel: true },
    { feature: "Predictable monthly costs", inHouse: false, typicalAgency: true, whiteLabel: true },
    { feature: "Scale up/down instantly", inHouse: false, typicalAgency: true, whiteLabel: true },
    { feature: "White-label deliverables", inHouse: false, typicalAgency: false, whiteLabel: true },
    { feature: "Your brand, your client relationship", inHouse: true, typicalAgency: false, whiteLabel: true },
    { feature: "No overhead or benefits costs", inHouse: false, typicalAgency: true, whiteLabel: true },
    { feature: "Expert-level execution", inHouse: "varies", typicalAgency: "varies", whiteLabel: true },
    { feature: "Transparent communication", inHouse: true, typicalAgency: "varies", whiteLabel: true }
  ];

  return (
    <div className="space-y-12">
      {/* SEO Series Pricing Matrix */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green/10 text-accent-green text-sm font-medium mb-4">
          <DollarSign className="h-4 w-4" />
          Competition-Based Pricing
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          SEO Series <span className="text-accent-blue">Pricing Matrix</span>
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Pricing aligned to market competition and execution intensity. Choose the series that matches your client's competitive reality.
        </p>
      </div>

      {/* Series Cards with Pricing */}
      <div className="grid md:grid-cols-3 gap-6">
        {seriesInfo.map((series) => {
          const Icon = series.icon;
          const colorClasses = {
            emerald: {
              bg: "bg-emerald-500/10",
              border: "border-emerald-500/30",
              text: "text-emerald-500",
              badge: "bg-emerald-500/20"
            },
            amber: {
              bg: "bg-amber-500/10",
              border: "border-amber-500/30",
              text: "text-amber-500",
              badge: "bg-amber-500/20"
            },
            destructive: {
              bg: "bg-destructive/10",
              border: "border-destructive/30",
              text: "text-destructive",
              badge: "bg-destructive/20"
            }
          }[series.color];

          return (
            <div 
              key={series.key}
              className={cn(
                "rounded-2xl p-6 border",
                colorClasses?.bg,
                colorClasses?.border
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={cn("p-2 rounded-lg", colorClasses?.badge)}>
                  <Icon className={cn("h-5 w-5", colorClasses?.text)} />
                </div>
                <h3 className={cn("font-bold", colorClasses?.text)}>{series.name}</h3>
              </div>
              
              <p className="text-sm text-text-secondary mb-4">{series.description}</p>
              
              {/* Tier Pricing */}
              <div className="space-y-2 mb-4">
                {seriesPricing[series.key as keyof typeof seriesPricing].map((tier) => (
                  <div key={tier.tier} className="flex justify-between items-center py-1.5 px-3 rounded-lg bg-surface-dark/50">
                    <span className="text-sm font-medium text-foreground">{tier.tier}</span>
                    <span className={cn("text-sm font-bold", colorClasses?.text)}>
                      ${tier.cost.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              {/* Industries */}
              <div className="mb-3">
                <p className="text-xs text-text-muted uppercase tracking-wider mb-2">Typical Industries</p>
                <div className="flex flex-wrap gap-1">
                  {series.industries.map((ind) => (
                    <span key={ind} className="text-xs px-2 py-0.5 rounded-full bg-surface-dark text-text-secondary">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              {/* Characteristics */}
              <ul className="space-y-1">
                {series.characteristics.map((char, i) => (
                  <li key={i} className="text-xs text-text-muted flex items-start gap-2">
                    <span className={colorClasses?.text}>•</span>
                    {char}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* CSM Add-on Note */}
      <div className="bg-surface-elevated rounded-xl p-4 border border-border/30 text-center">
        <p className="text-sm text-text-secondary">
          <span className="font-semibold text-foreground">Client Success Manager:</span>{" "}
          Add $150/mo to any tier for dedicated account management and enhanced communication.
        </p>
      </div>

      {/* Pricing Comparison Header */}
      <div className="text-center pt-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green/10 text-accent-green text-sm font-medium mb-4">
          <DollarSign className="h-4 w-4" />
          Pricing Comparison
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          White-Label vs. <span className="text-accent-blue">Other Options</span>
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          See how white-label fulfillment compares to hiring in-house or working with a traditional agency. Protect your margins while delivering expert-level work.
        </p>
      </div>

      {/* Pricing Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-4 px-4 text-foreground font-semibold">Service</th>
              <th className="text-center py-4 px-4 text-text-muted font-medium">
                <div className="flex flex-col items-center">
                  <span className="text-sm">In-House Hire</span>
                  <span className="text-xs text-text-muted/70">(salary + overhead)</span>
                </div>
              </th>
              <th className="text-center py-4 px-4 text-text-muted font-medium">
                <div className="flex flex-col items-center">
                  <span className="text-sm">Typical Agency</span>
                  <span className="text-xs text-text-muted/70">(retail pricing)</span>
                </div>
              </th>
              <th className="text-center py-4 px-4 text-cta font-semibold">
                <div className="flex flex-col items-center">
                  <span>White-Label</span>
                  <span className="text-xs text-cta/70">(your cost)</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr 
                key={index} 
                className={cn(
                  "border-b border-border/50 hover:bg-surface-elevated/50 transition-colors",
                  index % 2 === 0 && "bg-surface-dark/30"
                )}
              >
                <td className="py-4 px-4">
                  <p className="text-foreground font-medium">{row.service}</p>
                  <p className="text-xs text-text-muted mt-1">{row.notes}</p>
                </td>
                <td className="text-center py-4 px-4 text-text-muted">{row.inHouse}</td>
                <td className="text-center py-4 px-4 text-text-muted">{row.typicalAgency}</td>
                <td className="text-center py-4 px-4">
                  <span className="text-cta font-semibold">{row.whiteLabel}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Feature Comparison */}
      <div className="bg-surface-elevated rounded-2xl p-6 md:p-8 border border-border/30">
        <h3 className="text-xl font-bold text-foreground mb-6 text-center">Beyond Cost: Key Differences</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-foreground font-medium">Feature</th>
                <th className="text-center py-3 px-4 text-text-muted text-sm">In-House</th>
                <th className="text-center py-3 px-4 text-text-muted text-sm">Typical Agency</th>
                <th className="text-center py-3 px-4 text-cta text-sm font-semibold">White-Label</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((row, index) => (
                <tr key={index} className="border-b border-border/30">
                  <td className="py-3 px-4 text-text-secondary text-sm">{row.feature}</td>
                  <td className="text-center py-3 px-4">
                    {row.inHouse === true ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    ) : row.inHouse === false ? (
                      <XCircle className="h-5 w-5 text-destructive/50 mx-auto" />
                    ) : (
                      <span className="text-xs text-text-muted">{row.inHouse}</span>
                    )}
                  </td>
                  <td className="text-center py-3 px-4">
                    {row.typicalAgency === true ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    ) : row.typicalAgency === false ? (
                      <XCircle className="h-5 w-5 text-destructive/50 mx-auto" />
                    ) : (
                      <span className="text-xs text-text-muted">{row.typicalAgency}</span>
                    )}
                  </td>
                  <td className="text-center py-3 px-4">
                    {row.whiteLabel === true ? (
                      <CheckCircle className="h-5 w-5 text-cta mx-auto" />
                    ) : row.whiteLabel === false ? (
                      <XCircle className="h-5 w-5 text-destructive/50 mx-auto" />
                    ) : (
                      <span className="text-xs text-text-muted">{row.whiteLabel}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Margin Calculator Callout */}
      <div className="bg-gradient-to-br from-cta/5 to-accent-blue/5 rounded-2xl p-8 border border-cta/20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-3">Your Margin Opportunity</h3>
            <p className="text-text-secondary mb-4">
              Mark up our white-label pricing by 40-150% and still undercut what clients would pay at a typical agency. You keep the margin. We handle the work.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-dark rounded-lg p-4 border border-border/30">
                <p className="text-xs text-text-muted mb-1">Example: LC 200</p>
                <p className="text-lg font-bold text-foreground">Your Cost: $824</p>
                <p className="text-sm text-cta">Sell at: $1,648</p>
                <p className="text-xs text-green-500 mt-1">100% margin</p>
              </div>
              <div className="bg-surface-dark rounded-lg p-4 border border-border/30">
                <p className="text-xs text-text-muted mb-1">Example: HC 300</p>
                <p className="text-lg font-bold text-foreground">Your Cost: $1,759</p>
                <p className="text-sm text-cta">Sell at: $3,518</p>
                <p className="text-xs text-green-500 mt-1">100% margin</p>
              </div>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-4xl md:text-5xl font-bold text-cta mb-2">40-150%</p>
            <p className="text-text-secondary">Typical agency partner margins</p>
            <p className="text-sm text-text-muted mt-4">
              Your clients get better pricing than retail agencies. You keep healthy margins. Everyone wins.
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-text-muted text-center">
        Pricing ranges are estimates based on typical market rates and may vary by market, competition, and scope. White-label pricing shown reflects OEM costs before your markup.
      </p>
    </div>
  );
};

export default PricingComparisonTable;