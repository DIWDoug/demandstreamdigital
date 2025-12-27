import { Sparkles } from "lucide-react";

const ServiceCategories = () => {
  const categories = [
    {
      title: "LOCAL SEO",
      items: [
        "On-Page Optimization",
        "Technical SEO Audits",
        "Local Keyword Strategy",
        "Content Development",
        "Link Building",
        "Schema Markup"
      ]
    },
    {
      title: "GOOGLE MAPS",
      items: [
        "GBP Optimization",
        "Review Management",
        "Citation Building",
        "Photo Optimization",
        "Q&A Management",
        "Post Scheduling"
      ]
    },
    {
      title: "PAID MEDIA",
      items: [
        "Google Ads",
        "Meta Ads",
        "Local Service Ads",
        "Retargeting Campaigns",
        "Landing Page Design",
        "Conversion Tracking"
      ]
    },
    {
      title: "SOCIAL MEDIA",
      items: [
        "Content Creation",
        "Brand Voice Development",
        "Community Management",
        "Platform Strategy",
        "Visual Design",
        "Engagement Reporting"
      ]
    },
    {
      title: "AUTHORITY",
      items: [
        "PR Placements",
        "Local Citations",
        "Industry Directories",
        "Brand Mentions",
        "Reputation Signals",
        "Trust Building"
      ]
    },
    {
      title: "REPORTING",
      items: [
        "White-Label Dashboards",
        "Monthly Reports",
        "Rank Tracking",
        "Call Tracking",
        "ROI Analysis",
        "Client Presentations"
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-surface-dark border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section label */}
          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="h-4 w-4 text-cta" />
            <span className="text-xs uppercase tracking-widest text-text-muted font-medium">
              Full-Service Capabilities
            </span>
          </div>

          {/* Multi-column grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
            {categories.map((category, index) => (
              <div key={index}>
                <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4">
                  {category.title}
                </h4>
                <ul className="space-y-2.5">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <span className="text-sm text-text-secondary hover:text-foreground transition-colors cursor-default">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
