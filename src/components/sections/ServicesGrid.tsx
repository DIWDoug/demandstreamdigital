import { ArrowRight, MapPin, Map, MousePointerClick, PenTool, Mail, BarChart3, Calculator } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { searchPixabayImages } from "@/lib/pixabay";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  pixabayKeyword: string;
}

const services: Service[] = [
  {
    icon: MapPin,
    title: "Local SEO",
    description: "Show up when local customers search. We handle technical fixes, content, and on-page work that builds organic visibility over time.",
    href: "/white-label-local-seo",
    pixabayKeyword: "search engine optimization website ranking"
  },
  {
    icon: Map,
    title: "GBP SEO",
    description: "Dominate the local pack. Optimized profiles, consistent citations, and review systems that build trust with searchers.",
    href: "/white-label-gbp-seo",
    pixabayKeyword: "google maps location"
  },
  {
    icon: MousePointerClick,
    title: "Paid Advertising",
    description: "Turn ad spend into leads. Google and Meta campaigns built to generate calls, forms, and measurable ROI.",
    href: "/white-label-paid-media",
    pixabayKeyword: "online advertising campaign clicks"
  },
  {
    icon: PenTool,
    title: "Content Development",
    description: "Strategic content that ranks locally and converts. Service area pages, power posts, and lead magnets that drive visibility.",
    href: "/white-label-content-marketing",
    pixabayKeyword: "content writing strategy marketing"
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Stay top of mind and close more deals. Automated sequences that nurture leads into loyal, repeat customers.",
    href: "/white-label-email-marketing",
    pixabayKeyword: "email marketing newsletter"
  },
  {
    icon: BarChart3,
    title: "Reporting",
    description: "Keep clients confident with clear results. Branded dashboards and summaries that make your agency look sharp.",
    href: "/white-label-reporting",
    pixabayKeyword: "analytics dashboard reporting"
  }
];

// Lazy-loaded service card with Pixabay image
const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px', threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const fetchImage = async () => {
      try {
        const response = await searchPixabayImages({
          query: service.pixabayKeyword,
          imageType: 'photo',
          orientation: 'horizontal',
          perPage: 3,
          minWidth: 400,
          safeSearch: true,
          order: 'popular'
        });

        if (response.hits.length > 0) {
          setImageUrl(response.hits[0].webformatURL);
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, [isInView, service.pixabayKeyword]);

  return (
    <a 
      ref={cardRef}
      href={service.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative rounded-xl bg-card border border-border hover:border-accent-blue/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-blue/10 overflow-hidden"
    >
      {/* Pixabay image background */}
      {imageUrl && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
          <img 
            src={imageUrl} 
            alt={`${service.title} - White label ${service.description.toLowerCase()}`}
            title={`${service.title} | Dialed-In Web`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="relative p-6">
        {/* Icon badge */}
        <span className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center group-hover:bg-accent-blue group-hover:text-white transition-colors">
          <service.icon className="w-4 h-4" strokeWidth={2} />
        </span>
        
        <h3 className="text-foreground font-semibold mb-2 pr-10 group-hover:text-accent-blue transition-colors">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {service.description}
        </p>
        
        <span className="inline-flex items-center text-xs font-medium text-accent-blue mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
          Learn more
          <ArrowRight className="ml-1 h-3 w-3" />
        </span>
      </div>
    </a>
  );
};

const ServicesGrid = () => {
  return (
    <section className="py-20 lg:py-28 bg-background relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Two-column layout */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Column - Inbound Marketing Overview (2 cols) */}
            <div className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start">
              <span className="inline-block px-3 py-1 rounded-full bg-cta/10 text-cta text-xs font-semibold uppercase tracking-wider mb-6">
                The System
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                White Label Inbound Marketing,<br />
                <span className="text-accent-blue">Fully Executed</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Inbound isn't a single tactic. It's multiple channels working as one system to attract, convert, and retain customers.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Each service reinforces the others. Together, they create predictable growth your clients can count on.
              </p>
              
              <a 
                href="/white-label-inbound-marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta group inline-flex items-center gap-2"
              >
                See the Full Breakdown
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Right Column - Services Grid (3 cols) */}
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
              
              {/* Partner Tools CTA Card */}
              <a 
                href="/partner-tools"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 rounded-xl bg-gradient-to-br from-cta/10 to-cta/5 border border-cta/30 hover:border-cta/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cta/10 sm:col-span-2"
              >
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-xl bg-cta/20 text-cta flex items-center justify-center group-hover:bg-cta group-hover:text-white transition-colors">
                    <Calculator className="w-6 h-6" strokeWidth={2} />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-foreground font-semibold mb-1 group-hover:text-cta transition-colors">
                      Explore Our Partner Tools
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      ROI calculators, investment tools, and resources for agency partners.
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-cta opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
