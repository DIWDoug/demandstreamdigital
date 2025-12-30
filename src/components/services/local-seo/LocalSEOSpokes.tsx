import { FileText, Settings, PenTool, Link2, Search, MapPin, BarChart3, Star, Bot } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
interface Spoke {
  title: string;
  slug: string;
  description: string;
  icon: LucideIcon;
}

const spokes: Spoke[] = [
  {
    title: "On-Page SEO",
    slug: "on-page-local-optimization",
    description: "Location-specific optimization that removes ambiguity for search engines and reinforces relevance in each target market.",
    icon: FileText,
  },
  {
    title: "Technical SEO",
    slug: "technical-seo-multi-location",
    description: "Technical improvements that ensure search engines can crawl, understand, and trust the site across all service areas.",
    icon: Settings,
  },
  {
    title: "Local Keyword Strategy",
    slug: "keyword-research-mapping",
    description: "Comprehensive local keyword discovery, search intent analysis, and strategic mapping to pages for maximum organic visibility.",
    icon: Search,
  },
  {
    title: "Content Development",
    slug: "local-content-strategy",
    description: "Service area pages, location-specific blog content, and FAQ sections that capture long-tail local search queries and build topical authority.",
    icon: PenTool,
  },
  {
    title: "Link Building",
    slug: "local-link-acquisition",
    description: "Geographic and industry-relevant links that establish legitimacy and authority where it actually matters.",
    icon: Link2,
  },
  {
    title: "GBP SEO",
    slug: "gbp-seo",
    description: "Full Google Business Profile optimization with hub-spoke content strategy to maximize local pack visibility and user trust.",
    icon: MapPin,
  },
  {
    title: "Analytics & Reporting",
    slug: "analytics-reporting",
    description: "Tracking setup, goal configuration, and monthly performance reporting that connects SEO activity to business outcomes.",
    icon: BarChart3,
  },
  {
    title: "Reputation Management",
    slug: "reputation-management",
    description: "Review generation strategy, response management, and reputation monitoring to build trust and improve local rankings.",
    icon: Star,
  },
  {
    title: "AEO for Local",
    slug: "aeo-local",
    description: "Answer engine optimization that positions your business for AI-powered search results, voice queries, and featured snippets.",
    icon: Bot,
  },
];

const LocalSEOSpokes = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-4">
              The Levers We Pull
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              The Levers We Pull Based on Market Reality
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Each component is scoped based on market competition and client goals—not templated packages.
            </p>
          </div>

          {/* Spokes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spokes.slice(0, 6).map((spoke) => {
              const Icon = spoke.icon;
              
              return (
                <Link
                  key={spoke.slug}
                  to={`/white-label-inbound-marketing-services/local-seo/${spoke.slug}`}
                  className="bg-surface-elevated border border-border/50 rounded-xl p-6 hover:border-cta/30 hover:bg-surface-elevated/80 transition-all duration-200 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-cta/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cta/20 transition-colors">
                      <Icon className="w-6 h-6 text-cta" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-foreground font-semibold text-lg mb-2 group-hover:text-cta transition-colors">
                        {spoke.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {spoke.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          
          {/* Centered last row */}
          <div className="flex justify-center gap-6 mt-6">
            {spokes.slice(6).map((spoke) => {
              const Icon = spoke.icon;
              
              return (
                <Link
                  key={spoke.slug}
                  to={`/white-label-inbound-marketing-services/local-seo/${spoke.slug}`}
                  className="bg-surface-elevated border border-border/50 rounded-xl p-6 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] hover:border-cta/30 hover:bg-surface-elevated/80 transition-all duration-200 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-cta/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cta/20 transition-colors">
                      <Icon className="w-6 h-6 text-cta" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-foreground font-semibold text-lg mb-2 group-hover:text-cta transition-colors">
                        {spoke.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {spoke.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSEOSpokes;