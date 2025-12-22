import { Eye, Target, Award } from "lucide-react";

const ServicesGrid = () => {
  const buckets = [
    {
      icon: Eye,
      name: "Visibility",
      tagline: "Be found where it matters",
      services: [
        {
          title: "White-Label Local SEO",
          description: "Local organic visibility through technical cleanup, on-page optimization, and relevance signals."
        },
        {
          title: "White-Label Google Maps",
          description: "GBP optimization for Maps rankings, category strategy, and citation alignment."
        }
      ]
    },
    {
      icon: Target,
      name: "Demand",
      tagline: "Turn attention into action",
      services: [
        {
          title: "White-Label Google Ads",
          description: "Paid search built for local lead generation with service area and intent targeting."
        },
        {
          title: "White-Label Meta Ads",
          description: "Facebook and Instagram campaigns for local awareness and remarketing."
        }
      ]
    },
    {
      icon: Award,
      name: "Authority",
      tagline: "Build lasting credibility",
      services: [
        {
          title: "White-Label Organic Social",
          description: "Consistent local presence through content cadence aligned to location and industry."
        },
        {
          title: "White-Label Authority Building",
          description: "Citations, local mentions, PR placements, and community relevance signals."
        }
      ]
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-background relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground">
            Our Core Services
          </h2>
          <p className="text-lg text-text-secondary">
            Three pillars of local marketing execution, delivered under your brand.
          </p>
        </div>

        {/* Buckets with visual hierarchy */}
        <div className="space-y-16 lg:space-y-20">
          {buckets.map((bucket, bucketIndex) => (
            <div key={bucketIndex} className="relative">
              {/* Bucket Header - Visually dominant */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-lg bg-surface-elevated border border-border">
                  <bucket.icon className="h-6 w-6 text-cta" />
                </div>
                <div>
                  <h3 className="bucket-header">{bucket.name}</h3>
                  <p className="text-text-muted text-sm mt-1">{bucket.tagline}</p>
                </div>
              </div>

              {/* Services - Nested under bucket */}
              <div className="grid md:grid-cols-2 gap-6 pl-0 md:pl-16">
                {bucket.services.map((service, serviceIndex) => (
                  <div 
                    key={serviceIndex}
                    className="premium-card transition-all duration-300 hover:translate-y-[-2px]"
                  >
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      {service.title}
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Subtle separator between buckets */}
              {bucketIndex < buckets.length - 1 && (
                <div className="section-divider mt-16 lg:mt-20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
