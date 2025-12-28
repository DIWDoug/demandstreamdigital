import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceHubHeroProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceHubHero = ({ icon: Icon, title, description }: ServiceHubHeroProps) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cta/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon badge */}
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-accent-blue/10 border border-accent-blue/20 mb-8">
            <Icon className="h-8 w-8 text-accent-blue" />
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            White-Label{" "}
            <span className="text-gradient-primary">{title}</span>
            {" "}Services
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed">
            {description}
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="btn-cta group">
              Schedule a Discovery Call
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#services" 
              className="text-foreground hover:text-cta transition-colors font-medium"
            >
              View All Services →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHubHero;
