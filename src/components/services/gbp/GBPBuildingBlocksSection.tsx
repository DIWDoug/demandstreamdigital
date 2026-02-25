import { MapPin, Star, Globe, MessageSquare, Map, Target } from "lucide-react";
import { Link } from "react-router-dom";

interface BuildingBlock {
  title: string;
  slug: string;
  description: string;
  icon: React.ElementType;
  href?: string;
}

const blocks: BuildingBlock[] = [
  {
    title: "GBP Profile Optimization",
    slug: "gbp-profile-optimization",
    description: "Profile optimization across categories, attributes, services, products, and descriptions to maximize relevance signals.",
    icon: MapPin,
    href: "/white-label-gbp-seo"
  },
  {
    title: "Review Generation & Response",
    slug: "review-generation-response",
    description: "Systematic review acquisition and response management to build trust and improve rankings.",
    icon: Star,
    href: "/white-label-gbp-seo"
  },
  {
    title: "Citation Building & Cleanup",
    slug: "citation-building-cleanup",
    description: "NAP consistency across 50+ directories and data aggregators to validate business information and build authority.",
    icon: Globe,
    href: "/white-label-gbp-seo"
  },
  {
    title: "GBP Posting & Content",
    slug: "gbp-posting-content",
    description: "Regular posts, offers, and updates to signal activity to Google and engage potential customers.",
    icon: MessageSquare,
    href: "/white-label-gbp-seo"
  },
  {
    title: "Photo & Media Management",
    slug: "photo-media-management",
    description: "Photo strategy, geotagging, and visual content to increase engagement and trust.",
    icon: Map,
    href: "/white-label-gbp-seo"
  },
  {
    title: "Local Pack Strategy",
    slug: "local-pack-strategy",
    description: "GBP service and product gap analysis with topical map matching between profile and website pages.",
    icon: Target,
    href: "/white-label-local-seo"
  }
];

const GBPBuildingBlocksSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-4">
              The Levers We Pull
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              The Components of GBP SEO
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Each component is scoped based on market competition and client goals, not templated packages.
            </p>
          </div>

          {/* Blocks Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blocks.map((block) => {
              const Icon = block.icon;
              
              return (
                <Link
                  key={block.slug}
                  to={block.href || "#"}
                  className="bg-surface-elevated border border-border/50 rounded-xl p-6 hover:border-accent-blue/30 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-accent-blue" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-foreground font-semibold text-lg mb-2 group-hover:text-accent-blue transition-colors">
                        {block.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {block.description}
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

export default GBPBuildingBlocksSection;
