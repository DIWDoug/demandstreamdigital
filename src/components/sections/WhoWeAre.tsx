import SubtleOrbs from "@/components/SubtleOrbs";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import teamMeetingImage from "@/assets/team/team-meeting.jpg";

const WhoWeAre = () => {
  const ref = useScrollReveal();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-32 section-light reveal-section"
    >
      <SubtleOrbs variant="scattered" />
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left column - Content */}
            <div>
              <p className="text-sm text-cta uppercase tracking-widest font-medium mb-4">
                Who We Are
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
                A Small Team That Gets It Done
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                We're a team of digital marketing specialists who work exclusively behind the scenes for agencies. No client-facing roles. No brand confusion. Just reliable execution that makes your agency look great.
              </p>
              <p className="text-text-secondary leading-relaxed">
                With 15+ years in the industry, we've built processes that scale—from single-location businesses to multi-state franchises. Every campaign is scoped to the client's market reality, not a one-size-fits-all package.
              </p>
            </div>

            {/* Right column - Team Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-surface-dark to-background border border-border aspect-[4/3]">
                <img 
                  src={teamMeetingImage} 
                  alt="Dialed-In Web fulfillment team collaborating on white label SEO and PPC strategy"
                  title="White Label Marketing Team | Dialed-In Web"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;