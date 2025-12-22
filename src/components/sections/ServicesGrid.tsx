import { ArrowRight, MapPin, Map, MousePointerClick, FileText, Mail } from "lucide-react";

const ServicesGrid = () => {
  const coreService = {
    title: "Local SEO That Dominates",
    label: "Core Engine",
    description: "Outdated SEO tactics waste time and money. We build location-specific visibility through technical optimization, content alignment, and authority signals that actually move rankings.",
    image: "https://images.unsplash.com/photo-1616499370260-485b3e5ed653?w=600&q=80",
    icon: MapPin,
  };

  const amplifiers = [
    {
      title: "Google Maps Visibility",
      label: "Amplifies",
      description: "Your clients need to own the local 3-pack. We optimize Google Business Profiles, manage reviews, and build citation authority to drive calls directly from Maps.",
      image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=600&q=80",
      icon: Map,
    },
    {
      title: "Paid Ads That Convert",
      label: "Accelerates",
      description: "Ads that don't generate leads are useless. We engineer Google and Meta campaigns that make every dollar work harder—fast.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      icon: MousePointerClick,
    },
    {
      title: "Content That Ranks",
      label: "Supports",
      description: "Strategic, topical content that establishes thought leadership, answers what your audience is searching, and signals expertise to both Google and AI.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80",
      icon: FileText,
    },
    {
      title: "Email That Nurtures",
      label: "Extends",
      description: "Automated email sequences that nurture prospects, re-engage past customers, and turn one-time buyers into repeat clients.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
      icon: Mail,
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

        {/* Core Service - Dominant Card */}
        <div className="mb-8">
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-2xl block h-[400px] lg:h-[450px] cursor-pointer"
          >
            {/* Background image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${coreService.image})` }}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(224,60%,15%)] via-[hsl(224,60%,20%)/85%] to-[hsl(224,60%,25%)/60%]" />
            <div className="absolute inset-0 bg-[hsl(224,60%,20%)]/60 mix-blend-multiply" />
            
            {/* Content */}
            <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end text-white">
              {/* Core Engine Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-blue/20 border border-accent-blue/40 w-fit mb-4">
                <coreService.icon className="h-4 w-4 text-accent-blue" />
                <span className="text-xs text-accent-blue font-semibold uppercase tracking-wider">{coreService.label}</span>
              </div>
              
              <h3 className="text-2xl lg:text-4xl font-bold mb-4 leading-tight max-w-2xl">
                {coreService.title}
              </h3>
              <p className="text-base lg:text-lg text-white/80 leading-relaxed mb-8 max-w-2xl">
                {coreService.description}
              </p>
              
              {/* CTA Button */}
              <div className="flex items-center">
                <div className="flex items-center justify-between bg-white rounded-lg px-6 py-3.5 group-hover:bg-white/95 transition-all duration-300 w-fit">
                  <span className="text-[hsl(224,60%,25%)] font-semibold text-sm uppercase tracking-wider mr-3">
                    Build Your Foundation
                  </span>
                  <ArrowRight className="h-5 w-5 text-[hsl(224,60%,25%)] transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Amplifier Services - Smaller, equal grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {amplifiers.map((service, index) => (
            <a
              key={index}
              href="#contact"
              className="group relative overflow-hidden rounded-xl h-[320px] cursor-pointer"
            >
              {/* Background image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              {/* Green overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(76,42%,15%)] via-[hsl(76,42%,25%)/90%] to-[hsl(76,42%,30%)/70%]" />
              <div className="absolute inset-0 bg-[hsl(76,42%,28%)]/75 mix-blend-multiply" />
              
              {/* Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                {/* Amplifier label */}
                <div className="flex items-center gap-2 mb-3">
                  <service.icon className="h-4 w-4 text-white/70" />
                  <span className="text-xs text-white/60 font-medium uppercase tracking-wider">{service.label}</span>
                </div>
                
                <h3 className="text-lg font-bold mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed mb-4 line-clamp-3">
                  {service.description}
                </p>
                
                {/* Arrow */}
                <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                  <ArrowRight className="h-4 w-4 text-white group-hover:text-[hsl(76,42%,30%)] transition-colors" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Single section CTA */}
        <div className="mt-12 text-center">
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 text-cta hover:text-cta-glow font-medium transition-colors"
          >
            See the Inbound System in Action
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
