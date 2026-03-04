import { Link } from "react-router-dom";
import TwoStepContactForm from "@/components/forms/TwoStepContactForm";

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
  heroHeadline?: string;
  heroSubtitle?: string;
}

const ServiceHubHero = ({ title, description, breadcrumbs, integrationNote, heroHeadline, heroSubtitle }: ServiceHubHeroProps) => {
  return (
    <section className="relative min-h-[50vh] gradient-hero noise-overlay flex items-center overflow-hidden">
      {/* Background effects */}
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
        <div className="grid lg:grid-cols-7 gap-12 lg:gap-16 items-center">

          {/* Left Column — 4/7 */}
          <div className="lg:col-span-4 relative">

            {/* Breadcrumbs */}
            {breadcrumbs && breadcrumbs.length > 0 && (
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-6 animate-fade-in">
                <Link to="/" className="text-text-muted hover:text-foreground transition-colors">Home</Link>
                {breadcrumbs.map((item, index) => (
                  <span key={index} className="flex items-center gap-2">
                    <span className="text-text-muted">/</span>
                    {item.href ? (
                      <Link to={item.href} className="text-text-muted hover:text-foreground transition-colors">{item.label}</Link>
                    ) : (
                      <span className="text-text-muted">{item.label}</span>
                    )}
                  </span>
                ))}
              </nav>
            )}

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 leading-[1.1] animate-fade-in">
              {heroHeadline || title}
            </h1>

            {/* Red subheadline */}
            {heroSubtitle && (
              <p className="text-2xl md:text-3xl font-bold text-cta mb-6 animate-fade-in">
                {heroSubtitle}
              </p>
            )}

            {/* Description */}
            <div className="max-w-xl animate-fade-in mt-6">
              {typeof description === 'string' ? (
                <p className="text-base text-text-secondary leading-relaxed">
                  {description}
                </p>
              ) : (
                <>
                  <p className="text-base text-text-muted leading-snug mb-5">
                    {description.intro}
                  </p>
                  <ul className="space-y-2.5 mb-5">
                    {description.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start gap-3 text-base text-text-secondary">
                        <span className="text-cta font-bold mt-0.5 shrink-0">—</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  {description.closing && (
                    <p className="text-sm text-text-muted/80 leading-snug">
                      {description.closing}
                    </p>
                  )}
                </>
              )}
            </div>

            {integrationNote && (
              <p className="text-sm text-text-muted/60 italic max-w-xl animate-fade-in mt-6">
                {integrationNote}
              </p>
            )}
          </div>

          {/* Right Column — Form card 3/7 */}
          <div className="lg:col-span-3 animate-fade-in">
            <div className="bg-surface-elevated/90 backdrop-blur-md border border-border rounded-2xl p-6 lg:p-8 shadow-xl">
              <h2 className="text-xl font-semibold text-foreground mb-2">See If Your Market Is Available</h2>
              <p className="text-sm text-text-muted mb-6">Tell us about your business. We'll take it from there.</p>

              <TwoStepContactForm
                formType="service_hub_hero"
                submitButtonText="Claim My Territory →"
                step1ButtonText="Continue →"
              />

              <p className="text-xs text-text-muted text-center mt-4">
                Built for plumbing and HVAC companies in competitive local markets.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceHubHero;
