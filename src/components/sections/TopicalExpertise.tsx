import { MapPin, Map, MousePointerClick, Share2, FileText, Award, Check, ArrowRight } from "lucide-react";

const TopicalExpertise = () => {
  const services = [
    {
      id: "local-seo",
      icon: MapPin,
      title: "Local SEO",
      bullets: [
        "Dominate organic rankings across service areas.",
        "Technical SEO, content, and link building that compounds."
      ]
    },
    {
      id: "google-maps",
      icon: Map,
      title: "Maps Optimization",
      bullets: [
        "Own the local 3-pack with GBP mastery.",
        "Reviews, citations, and ongoing visibility."
      ]
    },
    {
      id: "google-ads",
      icon: MousePointerClick,
      title: "Google Ads",
      bullets: [
        "Capture high-intent local searches.",
        "Landing pages and attribution that proves ROI."
      ]
    },
    {
      id: "meta-ads",
      icon: Share2,
      title: "Meta Ads",
      bullets: [
        "Build awareness on Facebook & Instagram.",
        "Creative, targeting, and retargeting that converts."
      ]
    },
    {
      id: "content-marketing",
      icon: FileText,
      title: "Content Marketing",
      bullets: [
        "Build topical authority that ranks.",
        "Content systems that compound over time."
      ]
    },
    {
      id: "authority-building",
      icon: Award,
      title: "Authority Building",
      bullets: [
        "Digital PR and strategic link acquisition.",
        "Trust signals that establish credibility."
      ]
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left side - Headline + CTA */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-blue/30 bg-accent-blue/10 text-accent-blue text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 bg-accent-blue rounded-full" />
              White Label Fulfillment
            </span>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
              Local marketing is hard.
              <br />
              <span className="text-text-secondary">We make it easier.</span>
            </h2>
            
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Disconnected services and unreliable vendors slow you down. We deliver everything—under your brand—so you can focus on growing your agency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-accent-blue text-white font-semibold rounded-lg hover:bg-accent-blue/90 transition-colors"
              >
                Start a Conversation
              </a>
              <a 
                href="#book" 
                className="inline-flex items-center justify-center px-6 py-3 border border-accent-blue text-accent-blue font-semibold rounded-lg hover:bg-accent-blue/10 transition-colors"
              >
                Get the Book Free
              </a>
            </div>
          </div>
          
          {/* Right side - Hub cards grid */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  id={service.id}
                  className="group p-6 rounded-xl border border-border/40 bg-surface-card/30 hover:border-accent-blue/40 hover:bg-surface-card/60 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <service.icon className="h-5 w-5 text-accent-blue" />
                    <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                  </div>
                  
                  {/* Bullet points */}
                  <ul className="space-y-2.5 mb-4">
                    {service.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-accent-blue flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-text-secondary leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Learn more link */}
                  <a 
                    href={`#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent-blue transition-colors group/link"
                  >
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicalExpertise;
