import type { BuildingBlock } from "@/types/servicePage";

interface BuildingBlocksConfig {
  eyebrow: string;
  headline: string;
  subheadline: string;
  blocks: BuildingBlock[];
}

interface ServiceBuildingBlocksSectionProps {
  config: BuildingBlocksConfig;
}

const ServiceBuildingBlocksSection = ({ config }: ServiceBuildingBlocksSectionProps) => {
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
    return (
      <div
        key={block.slug}
        className="bg-surface-elevated border border-border/50 rounded-xl p-6"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-cta/10 flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-cta" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-foreground font-semibold text-lg mb-2">
              {block.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {block.description}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-4">
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
            <div className="space-y-12">
              {Object.entries(groupedBlocks).map(([clusterName, blocks]) => (
                <div key={clusterName}>
                  <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-cta"></span>
                    {clusterName}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blocks.map(renderBlock)}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Flat Blocks Grid */
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.blocks.map(renderBlock)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceBuildingBlocksSection;