import { ArrowRight } from "lucide-react";

const ServicesGrid = () => {
  const services = [
    {
      title: "Local SEO That Dominates",
      description: "Your clients deserve page-one visibility, not excuses. We execute technical optimization, strategic content, and authority-building that delivers measurable ranking gains you can present with confidence.",
    },
    {
      title: "Google Maps Visibility That Converts",
      description: "The local 3-pack drives calls. We optimize Google Business Profiles, orchestrate review strategies, and build citation authority—giving your clients the visibility that translates to revenue.",
    },
    {
      title: "Paid Ads That Maximize ROI",
      description: "Every dollar accountable. We architect Google and Meta campaigns engineered for lead generation—real calls, real forms, real growth your clients can track back to your partnership.",
    },
    {
      title: "Email Marketing That Converts",
      description: "Nurture leads into loyal customers. We build automated sequences and targeted campaigns that keep your clients top-of-mind and drive repeat business month after month.",
    },
    {
      title: "Authority Building That Lasts",
      description: "Trust compounds. We construct credibility through strategic citations, PR placements, and local relevance signals that create lasting competitive advantages for your clients.",
    },
    {
      title: "Reporting You Can Stand Behind",
      description: "Present results with confidence. We deliver white-labeled dashboards and executive summaries that make you look like the expert—because you are, with us behind you.",
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-background relative">
      {/* Smooth transition from WhyPartnerWithUs dark section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-surface-dark to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6 text-foreground">
            Premium Fulfillment for Selective Partners
          </h2>
          <p className="text-lg text-text-secondary">
            Enterprise-grade execution, delivered invisibly under your brand. The same caliber of work we'd put our own name on.
          </p>
          
          {/* Green divider */}
          <div className="w-24 h-1 bg-[hsl(76,42%,41%)] mx-auto mt-8 rounded-full" />
        </div>

        {/* Core Service - Full Width */}
        <a
          href="#contact"
          className="group relative overflow-hidden rounded-xl h-[280px] mb-6 block cursor-pointer bg-[hsl(76,42%,22%)]"
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(76,42%,28%)] via-[hsl(76,42%,22%)] to-[hsl(76,42%,18%)]" />
          
          {/* Subtle texture */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }}
          />
          
          {/* Content */}
          <div className="absolute inset-0 p-5 sm:p-8 lg:p-12 flex flex-col justify-center text-white max-w-3xl relative z-10">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-white/60 mb-3 font-medium">Partner-Exclusive Service</span>
            <h3 className="text-2xl lg:text-3xl font-semibold mb-4 leading-tight">
              Digital Inbound Marketing
            </h3>
            <p className="text-base text-white/75 leading-relaxed mb-6 max-w-xl">
              The complete growth engine your clients need. Strategic content, technical SEO, and targeted campaigns orchestrated to generate predictable, sustainable lead flow you can stake your reputation on.
            </p>
            
            {/* Arrow button */}
            <div className="flex items-center">
              <div className="flex items-center gap-3 bg-white rounded-lg px-5 py-3 transition-all duration-300 group-hover:gap-4">
                <span className="text-[hsl(76,42%,25%)] font-semibold text-sm uppercase tracking-wider">
                  Learn More
                </span>
                <ArrowRight className="h-5 w-5 text-[hsl(76,42%,25%)] transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </a>

        {/* Desktop: Horizontal cards with expand on hover */}
        <div className="hidden lg:flex gap-4 h-[480px]">
          {services.map((service, index) => (
            <a
              key={index}
              href="#contact"
              className="group relative overflow-hidden rounded-xl flex-1 hover:flex-[2] transition-all duration-500 ease-out cursor-pointer bg-[hsl(76,42%,22%)]"
            >
              {/* Subtle gradient - varies by index for visual interest */}
              <div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(${135 + index * 15}deg, hsl(76, 42%, ${26 - index}%) 0%, hsl(76, 42%, ${20 - index}%) 100%)`
                }}
              />
              
              {/* Subtle texture */}
              <div 
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                  backgroundSize: '24px 24px'
                }}
              />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white relative z-10">
                <h3 className="text-lg lg:text-xl font-semibold mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed mb-6 line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                  {service.description}
                </p>
                
                {/* Arrow button - transforms to LEARN MORE on hover */}
                <div className="flex items-center">
                  {/* Compact arrow (default state) */}
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center group-hover:hidden transition-all duration-300">
                    <ArrowRight className="h-5 w-5 text-[hsl(76,42%,25%)]" />
                  </div>
                  
                  {/* Expanded LEARN MORE button (hover state) */}
                  <div className="hidden group-hover:flex items-center justify-between w-full bg-white rounded-lg px-5 py-3 transition-all duration-300">
                    <span className="text-[hsl(76,42%,25%)] font-semibold text-sm uppercase tracking-wider">
                      Learn More
                    </span>
                    <ArrowRight className="h-5 w-5 text-[hsl(76,42%,25%)]" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile & Tablet: Stacked cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
          {services.map((service, index) => (
            <a
              key={index}
              href="#contact"
              className="group relative overflow-hidden rounded-xl h-[240px] cursor-pointer bg-[hsl(76,42%,22%)]"
            >
              {/* Subtle gradient */}
              <div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(${135 + index * 15}deg, hsl(76, 42%, ${26 - index}%) 0%, hsl(76, 42%, ${20 - index}%) 100%)`
                }}
              />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white relative z-10">
                <h3 className="text-lg font-semibold mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed mb-4 line-clamp-3">
                  {service.description}
                </p>
                
                <div className="flex items-center gap-2 text-white font-medium text-sm">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
