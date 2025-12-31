import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ServiceHubHeroProps {
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
}

const ServiceHubHero = ({ title, description, breadcrumbs }: ServiceHubHeroProps) => {
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
          {/* Left Column - Text */}
          <div>
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-semibold mb-5 animate-fade-in text-foreground" style={{ lineHeight: "1.15" }}>
              White-Label{" "}
              <span className="text-accent-blue drop-shadow-[0_0_30px_hsl(var(--accent-blue)/0.5)]">{title}</span>{" "}
              Services
            </h1>
            
            {/* Short description */}
            <p className="text-base md:text-lg text-text-secondary max-w-xl leading-relaxed animate-fade-in">
              {description}
            </p>
          </div>

          {/* Right Column - Contact Form */}
          <div className="animate-fade-in">
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 lg:p-8 shadow-xl">
              {/* Exclusivity Badge */}
              <div className="flex items-center gap-2 mb-4 p-3 bg-primary/10 border border-primary/20 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <p className="text-xs font-medium text-primary">
                  One agency per city. One agency per niche.
                </p>
              </div>
              
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
                    type="url"
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
                  Let's Talk
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
