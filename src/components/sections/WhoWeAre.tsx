import SubtleOrbs from "@/components/SubtleOrbs";
import StreamTexture from "@/components/StreamTexture";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import teamMeetingImage from "@/assets/team/team-meeting.jpg";

const WhoWeAre = () => {
  const ref = useScrollReveal();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-32 section-light reveal-section overflow-hidden"
    >
      <StreamTexture variant="light" opacity={0.1} />
      <SubtleOrbs variant="scattered" />
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm text-cta uppercase tracking-widest font-medium mb-4">
                Who We Are
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
                A Marketing Team Built for the Trades
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                We're a team of digital marketing specialists who work exclusively with plumbing and HVAC companies. We understand your business, your customers, and the local search landscape you compete in.
              </p>
              <p className="text-text-secondary leading-relaxed">
                With 15+ years in the industry, we've built processes that deliver results — from single-truck operations to multi-location service companies. Every campaign is scoped to your market reality, not a one-size-fits-all package.
              </p>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-surface-dark to-background border border-border aspect-[4/3]">
                <img 
                  src={teamMeetingImage} 
                  alt="Dialed-In Local team collaborating on growth marketing strategy for plumbing and HVAC companies"
                  title="Growth Marketing Team | Dialed-In Local"
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
