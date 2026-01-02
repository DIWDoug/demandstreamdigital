import { useState, useEffect } from "react";
import SubtleOrbs from "@/components/SubtleOrbs";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { searchPixabayImages } from "@/lib/pixabay";

const WhoWeAre = () => {
  const ref = useScrollReveal();
  const [teamImageUrl, setTeamImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeamImage = async () => {
      try {
        const response = await searchPixabayImages({
          query: "business team meeting office professionals",
          imageType: "photo",
          orientation: "horizontal",
          perPage: 5,
          minWidth: 800,
          safeSearch: true,
          order: "popular"
        });

        if (response.hits.length > 0) {
          // Pick a random image from top results for variety
          const randomIndex = Math.floor(Math.random() * Math.min(3, response.hits.length));
          setTeamImageUrl(response.hits[randomIndex].webformatURL);
        }
      } catch (error) {
        console.error("Error fetching team image:", error);
      }
    };

    fetchTeamImage();
  }, []);

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
                Your Dedicated Fulfillment Partner
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
                {teamImageUrl ? (
                  <img 
                    src={teamImageUrl} 
                    alt="Our dedicated fulfillment team"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-surface-dark animate-pulse" />
                )}
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