import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { BuildingBlock } from "@/types/servicePage";
import { getSpokeUrl } from "@/lib/urlMappings";

interface BuildingBlocksConfig {
  eyebrow: string;
  headline: string;
  subheadline: string;
  blocks: BuildingBlock[];
}

interface ServiceBuildingBlocksSectionProps {
  config: BuildingBlocksConfig;
  hubSlug?: string; // If provided, blocks become links to spoke pages
}

const ServiceBuildingBlocksSection = ({ config, hubSlug }: ServiceBuildingBlocksSectionProps) => {
  // Check if blocks have cluster groupings
  const hasClusters = config.blocks.some(block => block.cluster);
  
  // Group blocks by cluster if clusters exist
  const groupedBlocks = hasClusters 
    ? config.blocks.reduce((acc, block) => {
        const cluster = block.cluster || "Other";
        if (!acc[cluster]) acc[cluster] = [];
        acc[cluster].push(block);
        return acc;
      }, {} as Record<string, BuildingBlock[]>)
    : null;

  const renderBlock = (block: BuildingBlock) => {
    const Icon = block.icon;
    
    const blockContent = (
      <>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-accent-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-blue/20 transition-colors">
            <Icon className="w-6 h-6 text-accent-blue" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-foreground font-semibold text-base mb-2 group-hover:text-accent-blue transition-colors">
              {block.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {block.description}
            </p>
          </div>
        </div>
        {hubSlug && (
          <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between">
            <span className="text-xs text-text-muted font-medium">
              Included based on scope
            </span>
            <span className="text-xs text-cta font-medium flex items-center gap-1">
              Learn more
              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        )}
      </>
    );

    // If hubSlug is provided, render as link to spoke page
    if (hubSlug) {
      const linkPath = getSpokeUrl(block.slug);
      return (
        <Link
          key={block.slug}
          to={linkPath}
          className="group bg-surface-elevated border border-border/50 rounded-xl p-6 hover:border-accent-blue/30 hover:shadow-lg transition-all"
        >
          {blockContent}
        </Link>
      );
    }

    // Otherwise render as static block
    return (
      <div
        key={block.slug}
        className="bg-surface-elevated border border-border/50 rounded-xl p-6"
      >
        {blockContent}
      </div>
    );
  };

  return (
    <section className="py-20 lg:py-28 bg-background relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-4">
              {config.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              {config.headline}
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              {config.subheadline}
            </p>
          </div>

          {/* Clustered Blocks */}
          {groupedBlocks ? (
            <div className="space-y-10">
              {Object.entries(groupedBlocks).map(([clusterName, blocks]) => (
                <div key={clusterName}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted border border-border/60 rounded px-2.5 py-1">
                      {clusterName}
                    </span>
                    <div className="flex-1 h-px bg-border/40" />
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {blocks.map(renderBlock)}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Flat Blocks Grid */
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {config.blocks.map(renderBlock)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceBuildingBlocksSection;
