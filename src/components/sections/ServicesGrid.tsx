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
          description: "Our white-label local SEO improves rankings for location-based searches through technical cleanup, on-page optimization, local content alignment, and relevance signals. Scopes are adjusted by city size, competition, industry, and existing authority so agencies can deliver consistent local growth without relying on generic SEO playbooks.",
          cta: "Learn more about Local SEO →"
        },
        {
          title: "White-Label Google Maps",
          subtitle: "Visibility where local intent is highest.",
          description: "We optimize and manage Google Business Profiles to improve Maps rankings and local pack visibility. This includes category strategy, citation alignment, review support, and ongoing optimization informed by local competition. Scopes adjust for market density, proximity challenges, and industry pressure.",
          cta: "Learn more about Google Maps →"
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
          description: "We manage locally focused Google Ads campaigns built for calls and form leads. Campaigns are structured around service areas, keyword intent, and competitive spend levels. Strategy and budgeting adapt to each local market and industry economics, giving agencies a defensible paid offering.",
          cta: "Learn more about Google Ads →"
        },
        {
          title: "White-Label Meta Ads",
          subtitle: "Local awareness and demand generation.",
          description: "We run Facebook and Instagram ad campaigns that support local lead generation and remarketing. Strategies are customized by geography, service value, and industry buying behavior. Fulfillment is delivered under your brand so you can offer paid social without building internal media capacity.",
          cta: "Learn more about Meta Ads →"
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
          description: "We provide organic social execution designed to support local authority and credibility. Content cadence, tone, and platform focus are aligned to the client's location and industry norms. Deliverables are white-labeled so agencies maintain a consistent brand presence for clients.",
          cta: "Learn more about Organic Social →"
        },
        {
          title: "White-Label Local Authority Building",
          subtitle: "Trust signals that matter locally.",
          description: "Local authority building strengthens credibility through citations, local mentions, PR-style placements, community relevance, and discussion signals. This work supports both organic and Maps performance, especially in competitive local markets where authority gaps limit growth and ranking stability.",
          cta: "Learn more about Authority Building →"
        }
      ]
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-background relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6 text-foreground">
            Our Core Services
          </h2>
          <p className="text-lg text-text-secondary">
            Three pillars of local marketing execution, delivered under your brand.
          </p>
        </div>

        {/* Horizontal 3-column pillars */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {buckets.map((bucket, bucketIndex) => (
            <div 
              key={bucketIndex} 
              className="text-center group"
            >
              {/* Icon */}
              <div className="inline-flex p-4 rounded-2xl bg-surface-elevated border border-accent-blue/20 mb-6 group-hover:border-accent-blue/40 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent-blue/10">
                <bucket.icon className="h-8 w-8 text-accent-blue" />
              </div>
              
              {/* Name */}
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2 tracking-wide uppercase">
                {bucket.name}
              </h3>
              
              {/* Tagline */}
              <p className="text-text-muted text-sm mb-6">
                {bucket.tagline}
              </p>

              {/* Service list */}
              <div className="space-y-3">
                {bucket.services.map((service, serviceIndex) => (
                  <a 
                    key={serviceIndex}
                    href="#contact"
                    className="block text-text-secondary hover:text-accent-blue transition-colors text-sm"
                  >
                    {service.title.replace('White-Label ', '')}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider mb-16" />

        {/* Detailed service cards below */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {buckets.flatMap((bucket, bucketIndex) => 
            bucket.services.map((service, serviceIndex) => (
              <div 
                key={`${bucketIndex}-${serviceIndex}`}
                className="premium-card glow-card transition-all duration-300 hover:translate-y-[-2px]"
              >
                <div className="flex items-center gap-2 mb-3">
                  <bucket.icon className="h-4 w-4 text-accent-blue" />
                  <span className="text-xs text-accent-blue uppercase tracking-wider font-medium">
                    {bucket.name}
                  </span>
                </div>
                <h4 className="text-lg text-foreground mb-2">
                  {service.title}
                </h4>
                <p className="text-foreground/70 text-sm font-medium mb-3">
                  {service.subtitle}
                </p>
                <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>
                <a 
                  href="#contact" 
                  className="text-cta hover:text-cta-glow text-sm font-medium transition-colors"
                >
                  {service.cta}
                </a>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
