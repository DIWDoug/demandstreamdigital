import { Link } from "react-router-dom";
import type { BreadcrumbItem } from "@/types/servicePage";
import TwoStepContactForm from "@/components/forms/TwoStepContactForm";
import heroBgAgency from "@/assets/hero-bg-agency.jpg";

interface HeroSubheadline {
  intro: string;
  bullets: string[];
  closing: string;
}

interface HeroConfig {
  headline: string;
  highlightedText: string;
  subheadline: string | HeroSubheadline;
  qualifierLine: string;
  ctaText: string;
  ctaSubtext: string;
}

interface LocalSEOTwoColumnHeroProps {
  config: HeroConfig;
  breadcrumbs?: BreadcrumbItem[];
}

const LocalSEOTwoColumnHero = ({ config, breadcrumbs }: LocalSEOTwoColumnHeroProps) => {
  return (
    <section className="relative min-h-[70vh] gradient-hero noise-overlay flex items-center overflow-hidden">
      {/* Background photo */}
      <img
        src={heroBgTrade}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
        loading="eager"
        width={1920}
        height={1080}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/85" />

      {/* Background effects */}
      <div className="absolute inset-0 opacity-20 hidden sm:block">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[100px] bg-gradient-to-br from-cta/50 to-accent-blue/30 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[80px] bg-gradient-to-tl from-accent-blue/40 to-cta/20 animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--cta)/0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--cta)/0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Copy */}
          <div>
            {breadcrumbs && breadcrumbs.length > 0 && (
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8 animate-fade-in">
                <Link to="/" className="text-text-muted hover:text-foreground transition-colors">Home</Link>
                {breadcrumbs.map((item, index) => (
                  <span key={index} className="flex items-center gap-2">
                    <span className="text-text-muted">/</span>
                    {item.href ? (
                      <Link to={item.href} className="text-text-muted hover:text-foreground transition-colors">{item.label}</Link>
                    ) : (
                      <span className="text-accent-blue">{item.label}</span>
                    )}
                  </span>
                ))}
              </nav>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-sans font-semibold mb-4 animate-fade-in-up text-foreground" style={{ lineHeight: "1.1", animationDelay: "0.1s" }}>
              {config.headline}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-sans font-semibold text-cta mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              {config.highlightedText}
            </p>

            {typeof config.subheadline === 'string' ? (
              <p className="text-lg text-text-secondary max-w-xl mb-4 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
                {config.subheadline}
              </p>
            ) : (
              <div className="max-w-xl mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <p className="text-base text-text-secondary leading-relaxed mb-4">
                  {config.subheadline.intro}
                </p>
                <ul className="space-y-2 mb-4">
                  {config.subheadline.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                      <span className="text-cta mt-0.5">—</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-text-muted leading-relaxed">
                  {config.subheadline.closing}
                </p>
              </div>
            )}

            <p className="text-sm text-text-muted animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {config.qualifierLine}
            </p>
          </div>

          {/* Right column - Form card */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
            <div className="bg-surface-elevated/90 backdrop-blur-md border border-border rounded-2xl p-6 lg:p-8 shadow-xl">
              <h2 className="text-xl font-semibold text-foreground mb-2">See If Your Market Is Available</h2>
              <p className="text-sm text-text-muted mb-6">Tell us about your business. We'll take it from there.</p>
              <TwoStepContactForm
                formType="local_seo_hero"
                submitButtonText="Claim My Territory"
                step1ButtonText="Claim My Territory"
              />
              <p className="text-xs text-text-muted text-center mt-4">
                {config.ctaSubtext}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSEOTwoColumnHero;
