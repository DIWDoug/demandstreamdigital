import { Link } from "react-router-dom";
import { ArrowRight, FileText, Settings, PenTool, Link2, Search, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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
    description: "Location-specific title tags, meta descriptions, schema markup, and content that signals relevance to search engines for every target market.",
    icon: FileText,
  },
  {
    title: "Technical SEO",
    slug: "technical-seo-multi-location",
    description: "Site architecture, internal linking, crawlability, and Core Web Vitals optimization that help search engines understand your client's service areas.",
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
    description: "Citations, structured and unstructured foundational links, sponsorships, and local link opportunities that build geographic authority.",
    icon: Link2,
  },
  {
    title: "Google Business Profile Optimization",
    slug: "google-business-profile",
    description: "Complete GBP optimization including categories, attributes, photos, posts, and Q&A management to maximize local pack visibility.",
    icon: MapPin,
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
              What's Included
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              The Building Blocks of Local SEO
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Each component of our Local SEO service can be scoped independently or combined for comprehensive coverage.
            </p>
          </div>

          {/* Spokes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spokes.map((spoke) => {
              const Icon = spoke.icon;
              
              return (
                <Link
                  key={spoke.slug}
                  to={`/white-label-inbound-marketing-services/local-seo/${spoke.slug}`}
                  className="group bg-surface-elevated border border-border/50 rounded-xl p-6 hover:border-cta/50 transition-all hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-cta/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cta/20 transition-colors">
                      <Icon className="w-6 h-6 text-cta" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-foreground font-semibold text-lg mb-2 group-hover:text-cta transition-colors">
                        {spoke.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                        {spoke.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-cta text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
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