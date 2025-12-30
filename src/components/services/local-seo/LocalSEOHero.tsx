import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface LocalSEOHeroProps {
  breadcrumbs?: BreadcrumbItem[];
}

const LocalSEOHero = ({ breadcrumbs }: LocalSEOHeroProps) => {
  const [website, setWebsite] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", website);
    // TODO: Handle form submission - navigate to full form or trigger modal
  };

  return (
    <section className="relative min-h-[70vh] gradient-hero noise-overlay flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[100px] bg-gradient-to-br from-cta/50 to-accent-blue/30 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[80px] bg-gradient-to-tl from-accent-blue/40 to-cta/20 animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] bg-gradient-radial from-cta/25 via-accent-blue/15 to-transparent" />
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--cta)/0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--cta)/0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumbs as eyebrow */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-sm mb-8 animate-fade-in">
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-semibold mb-8 animate-fade-in-up text-foreground" style={{ lineHeight: "1.1", animationDelay: "0.1s" }}>
            White Label SEO for{" "}
            <span className="text-accent-blue drop-shadow-[0_0_30px_hsl(var(--accent-blue)/0.5)]">Digital Agencies</span>
          </h1>
          
          {/* Supporting sentence - benefit-first */}
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            More calls. More leads. More customers walking through the door. White-label local SEO that delivers results you can point to when clients ask what they are paying for.
          </p>

          {/* Payoff sentence - specificity */}
          <p className="text-base text-text-muted mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Avg. 47% increase in organic visibility year over year. Your brand. Our execution.
          </p>

          {/* Simple email/website form */}
          <div className="animate-fade-in-up max-w-xl mx-auto" style={{ animationDelay: "0.3s" }}>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="yourwebsite.com"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                required
                className="flex-1 px-5 py-4 rounded-lg bg-background/80 backdrop-blur-sm border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:border-cta focus:ring-1 focus:ring-cta transition-all text-base"
              />
              <button
                type="submit"
                className="btn-cta group whitespace-nowrap"
              >
                Start the Conversation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
            <p className="text-xs text-text-muted text-center mt-4">
              This starts a conversation, not a sales call.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSEOHero;
