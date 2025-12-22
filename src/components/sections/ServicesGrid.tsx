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
          subtitle: "Local organic visibility built for real markets.",
          description: "Our white-label local SEO improves rankings for location-based searches through technical cleanup, on-page optimization, local content alignment, and relevance signals. Scopes are adjusted by city size, competition, industry, and existing authority so agencies can deliver consistent local growth without relying on generic SEO playbooks."
        },
        {
          title: "White-Label Google Maps",
          subtitle: "Visibility where local intent is highest.",
          description: "We optimize and manage Google Business Profiles to improve Maps rankings and local pack visibility. This includes category strategy, citation alignment, review support, and ongoing optimization informed by local competition. Scopes adjust for market density, proximity challenges, and industry pressure."
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
          subtitle: "Paid search designed for local lead generation.",
          description: "We manage locally focused Google Ads campaigns built for calls and form leads. Campaigns are structured around service areas, keyword intent, and competitive spend levels. Strategy and budgeting adapt to each local market and industry economics, giving agencies a defensible paid offering."
        },
        {
          title: "White-Label Meta Ads",
          subtitle: "Local awareness and demand generation.",
          description: "We run Facebook and Instagram ad campaigns that support local lead generation and remarketing. Strategies are customized by geography, service value, and industry buying behavior. Fulfillment is delivered under your brand so you can offer paid social without building internal media capacity."
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
          subtitle: "Consistent local presence without the overhead.",
          description: "We provide organic social execution designed to support local authority and credibility. Content cadence, tone, and platform focus are aligned to the client's location and industry norms. Deliverables are white-labeled so agencies maintain a consistent brand presence for clients."
        },
        {
          title: "White-Label Local Authority Building",
          subtitle: "Trust signals that matter locally.",
          description: "Local authority building strengthens credibility through citations, local mentions, PR-style placements, community relevance, and discussion signals. This work supports both organic and Maps performance, especially in competitive local markets where authority gaps limit growth and ranking stability."
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
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {service.title}
                    </h4>
                    <p className="text-cta/80 text-sm font-medium mb-3">
                      {service.subtitle}
                    </p>
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
