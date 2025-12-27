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
      title: "Email Marketing That Converts",
      description: "Stay top-of-mind with strategic email campaigns. We create automated sequences, newsletters, and targeted promotions that nurture leads and drive repeat business.",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&q=80",
    },
    {
      title: "Authority Building That Lasts",
      description: "Trust signals compound over time. We build credibility through citations, local mentions, PR placements, and community relevance that support long-term ranking stability.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    },
    {
      title: "Track & Measure",
      description: "Data-driven decisions require clear visibility. We provide transparent reporting, performance dashboards, and actionable insights so you always know what's working and what's next.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-background relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6 text-foreground">
            Services Designed for Longevity
          </h2>
          <p className="text-lg text-text-secondary">
            Full-service local marketing execution, delivered under your brand.
          </p>
        </div>

        {/* Core Service - Full Width */}
        <a
          href="#contact"
          className="group relative overflow-hidden rounded-xl h-[280px] mb-6 block cursor-pointer"
        >
          {/* Background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80)` }}
          />
          
          {/* Green overlay - brand olive green */}
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(76,42%,15%)] via-[hsl(76,42%,25%)/90%] to-[hsl(76,42%,30%)/70%]" />
          <div className="absolute inset-0 bg-[hsl(76,42%,28%)]/75 mix-blend-multiply" />
          
          {/* Content */}
          <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-center text-white max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-white/70 mb-3 font-medium">Core Service</span>
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
              Digital Inbound Marketing
            </h3>
            <p className="text-base text-white/80 leading-relaxed mb-6 max-w-xl">
              A comprehensive strategy that attracts, engages, and converts your ideal clients through content, SEO, and targeted campaigns, all working together to generate sustainable lead flow.
            </p>
            
            {/* Arrow button - transforms to LEARN MORE on hover */}
            <div className="flex items-center">
              <div className="flex items-center gap-3 bg-white rounded-lg px-5 py-3 transition-all duration-300 group-hover:gap-4">
                <span className="text-[hsl(76,42%,30%)] font-semibold text-sm uppercase tracking-wider">
                  Learn More
                </span>
                <ArrowRight className="h-5 w-5 text-[hsl(76,42%,30%)] transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </a>

        {/* Horizontal cards with expand on hover */}
        <div className="flex gap-4 h-[500px] lg:h-[550px]">
          {services.map((service, index) => (
            <a
              key={index}
              href="#contact"
              className="group relative overflow-hidden rounded-xl flex-1 hover:flex-[2] transition-all duration-500 ease-out cursor-pointer"
            >
              {/* Background image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              {/* Green overlay - brand olive green */}
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(76,42%,15%)] via-[hsl(76,42%,25%)/90%] to-[hsl(76,42%,30%)/70%]" />
              <div className="absolute inset-0 bg-[hsl(76,42%,28%)]/75 mix-blend-multiply" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <h3 className="text-lg lg:text-xl font-bold mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mb-6 line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                  {service.description}
                </p>
                
                {/* Arrow button - transforms to LEARN MORE on hover */}
                <div className="flex items-center">
                  {/* Compact arrow (default state) */}
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center group-hover:hidden transition-all duration-300">
                    <ArrowRight className="h-5 w-5 text-[hsl(76,42%,30%)]" />
                  </div>
                  
                  {/* Expanded LEARN MORE button (hover state) */}
                  <div className="hidden group-hover:flex items-center justify-between w-full bg-white rounded-lg px-5 py-3 transition-all duration-300">
                    <span className="text-[hsl(76,42%,30%)] font-semibold text-sm uppercase tracking-wider">
                      Learn More
                    </span>
                    <ArrowRight className="h-5 w-5 text-[hsl(76,42%,30%)]" />
                  </div>
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
