import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface HeroDescription {
  intro: string;
  bullets: string[];
  closing: string;
}

interface ServiceHubHeroProps {
  title: string;
  description: string | HeroDescription;
  breadcrumbs?: BreadcrumbItem[];
  integrationNote?: string;
}

const ServiceHubHero = ({ title, description, breadcrumbs, integrationNote }: ServiceHubHeroProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    website: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Handle form submission
  };

  return (
    <section className="relative min-h-[50vh] gradient-hero noise-overlay flex items-center overflow-hidden">
      {/* Background effects - simplified */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[100px] bg-gradient-to-br from-cta/50 to-accent-blue/30 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[80px] bg-gradient-to-tl from-accent-blue/40 to-cta/20 animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--cta)/0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--cta)/0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text with subtle backdrop for contrast */}
          <div className="relative">
            <div className="absolute -inset-4 bg-background/30 backdrop-blur-sm rounded-2xl -z-10 hidden lg:block" />
            {/* Breadcrumbs */}
            {breadcrumbs && breadcrumbs.length > 0 && (
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-6 animate-fade-in">
                <Link to="/" className="text-text-muted hover:text-foreground transition-colors">
                  Home
                </Link>
                {breadcrumbs.map((item, index) => (
                  <span key={index} className="flex items-center gap-2">
                    <span className="text-text-muted">/</span>
                    {item.href ? (
                      <Link to={item.href} className="text-text-muted hover:text-foreground transition-colors">
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-accent-blue">{item.label}</span>
                    )}
                  </span>
                ))}
              </nav>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-semibold mb-8 animate-fade-in text-foreground" style={{ lineHeight: "1.15" }}>
              White-Label{" "}
              <span className="text-accent-blue drop-shadow-[0_0_30px_hsl(var(--accent-blue)/0.5)]">{title}</span>{" "}
              Services
            </h1>
            
            {/* Short description - promise paragraph */}
            {typeof description === 'string' ? (
              <p className="text-lg md:text-xl text-text-secondary max-w-xl leading-relaxed animate-fade-in mb-6">
                {description}
              </p>
            ) : (
              <div className="max-w-xl animate-fade-in mb-6">
                <p className="text-base text-text-muted leading-snug mb-5">
                  {description.intro}
                </p>
                <ul className="space-y-2 mb-5">
                  {description.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-center gap-3 text-lg font-medium text-foreground">
                      <span className="text-accent-blue">—</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-text-muted/80 leading-snug">
                  {description.closing}
                </p>
              </div>
            )}
            
            {/* Integration Note - subtle inline context */}
            {integrationNote && (
              <p className="text-sm text-text-muted/60 italic max-w-xl animate-fade-in">
                {integrationNote}
              </p>
            )}
          </div>

          {/* Right Column - Contact Form */}
          <div className="animate-fade-in">
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 lg:p-8 shadow-xl">
              <h2 className="text-xl font-semibold text-foreground mb-2">Start a Conversation</h2>
              <p className="text-sm text-text-muted mb-6">Tell us about your agency. We'll take it from there.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="bg-background/50 border-border/50 focus:border-accent-blue"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Website URL"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="bg-background/50 border-border/50 focus:border-accent-blue"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/50 border-border/50 focus:border-accent-blue"
                    required
                  />
                </div>
                <Button type="submit" className="w-full btn-cta group">
                  Start the Conversation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
              
              <p className="text-xs text-text-muted text-center mt-4">
                We typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHubHero;
