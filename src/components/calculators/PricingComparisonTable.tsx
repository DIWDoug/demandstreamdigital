import { CheckCircle, XCircle, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

const PricingComparisonTable = () => {
  const comparisonData = [
    {
      service: "Local SEO (per location)",
      inHouse: "$4,000 - $8,000",
      typicalAgency: "$1,500 - $3,000",
      whiteLabel: "$500 - $1,200",
      notes: "Includes technical SEO, content, citations, link building"
    },
    {
      service: "Google Business Profile Management",
      inHouse: "$1,500 - $3,000",
      typicalAgency: "$500 - $1,000",
      whiteLabel: "$200 - $500",
      notes: "Posts, Q&A, review response, photo optimization"
    },
    {
      service: "Paid Media Management",
      inHouse: "$3,000 - $6,000",
      typicalAgency: "$1,000 - $2,500",
      whiteLabel: "$299 - $999",
      notes: "Plus % of ad spend for larger budgets"
    },
    {
      service: "Authority Building / Link Building",
      inHouse: "$5,000 - $10,000",
      typicalAgency: "$2,000 - $4,000",
      whiteLabel: "$800 - $2,000",
      notes: "Digital PR, guest posting, citation building"
    },
    {
      service: "Email Marketing",
      inHouse: "$2,500 - $5,000",
      typicalAgency: "$1,000 - $2,000",
      whiteLabel: "$400 - $1,000",
      notes: "Strategy, copywriting, automation, reporting"
    },
    {
      service: "Monthly Reporting",
      inHouse: "$1,000 - $2,000",
      typicalAgency: "$300 - $600",
      whiteLabel: "$100 - $300",
      notes: "White-labeled dashboards and presentations"
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
      {/* Pricing Comparison Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cta/10 text-cta text-sm font-medium mb-4">
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
              Mark up our white-label pricing by 75-150% and still undercut what clients would pay at a typical agency. You keep the margin. We handle the work.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-dark rounded-lg p-4 border border-border/30">
                <p className="text-xs text-text-muted mb-1">Example: Local SEO</p>
                <p className="text-lg font-bold text-foreground">Your Cost: $800</p>
                <p className="text-sm text-cta">Sell at: $2,000</p>
                <p className="text-xs text-green-500 mt-1">150% margin</p>
              </div>
              <div className="bg-surface-dark rounded-lg p-4 border border-border/30">
                <p className="text-xs text-text-muted mb-1">Example: GBP + Local</p>
                <p className="text-lg font-bold text-foreground">Your Cost: $1,100</p>
                <p className="text-sm text-cta">Sell at: $2,500</p>
                <p className="text-xs text-green-500 mt-1">127% margin</p>
              </div>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-4xl md:text-5xl font-bold text-cta mb-2">75-150%</p>
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
