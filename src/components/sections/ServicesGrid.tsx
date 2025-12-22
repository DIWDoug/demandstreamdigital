import { ArrowRight } from "lucide-react";

const ServicesGrid = () => {
  const services = [
    {
      title: "Local SEO That Dominates",
      description: "Outdated SEO tactics waste time and money. We build location-specific visibility through technical optimization, content alignment, and authority signals that actually move rankings.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    },
    {
      title: "Google Maps Visibility That Converts",
      description: "Your clients need to own the local 3-pack. We optimize Google Business Profiles, manage reviews, and build citation authority to drive calls directly from Maps.",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&q=80",
    },
    {
      title: "Paid Ads That Maximize ROI",
      description: "Ads that don't generate leads are useless. We engineer Google and Meta campaigns that make every dollar work harder, bringing in calls, forms, and real growth—fast.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80",
    },
    {
      title: "Social Media That Builds Trust",
      description: "Organic reach isn't dead—it's strategic. We create consistent, branded content that builds local authority and keeps your clients top-of-mind in their markets.",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80",
    },
    {
      title: "Authority Building That Lasts",
      description: "Trust signals compound over time. We build credibility through citations, local mentions, PR placements, and community relevance that support long-term ranking stability.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-background relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6 text-foreground">
            Services Designed to Win
          </h2>
          <p className="text-lg text-text-secondary">
            Full-service local marketing execution, delivered under your brand.
          </p>
        </div>

        {/* Horizontal scrolling cards on mobile, grid on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <a
              key={index}
              href="#contact"
              className="group relative overflow-hidden rounded-xl aspect-[3/4] lg:aspect-[2/3] cursor-pointer"
            >
              {/* Background image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              {/* Blue overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(200,70%,35%)] via-[hsl(200,70%,40%)/90%] to-[hsl(200,70%,45%)/80%] mix-blend-multiply" />
              <div className="absolute inset-0 bg-[hsl(200,70%,40%)]/60" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <h3 className="text-lg lg:text-xl font-bold mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mb-6 line-clamp-4">
                  {service.description}
                </p>
                
                {/* Arrow button */}
                <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                  <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
