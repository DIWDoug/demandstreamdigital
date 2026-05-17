import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { HERO_VIDEO_FRAME_STYLE } from "@/lib/heroVideo";

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
  bgImage?: string;
}

const ServiceHubHero = ({
  title,
  description,
  breadcrumbs,
  integrationNote,
  heroHeadline,
  heroSubtitle,
}: ServiceHubHeroProps) => {
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#0D1B2A" }}
    >
      {/* Fine grid texture overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.04] z-0"
        style={{
          backgroundImage: `linear-gradient(hsl(213 64% 16% / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(213 64% 16% / 0.3) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 pt-28 pb-20 md:pt-40 md:pb-28 relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm mb-8 animate-fade-in"
          >
            <Link to="/" className="text-white/60 hover:text-white transition-colors">
              Home
            </Link>
            {breadcrumbs.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                <span className="text-white/40">/</span>
                {item.href ? (
                  <Link to={item.href} className="text-white/60 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left column */}
          <div className="max-w-xl">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold mb-4 animate-fade-in-up text-white"
              style={{ lineHeight: "1.1" }}
            >
              {heroHeadline || title}
            </h1>

            {heroSubtitle && (
              <p
                className="text-xl md:text-2xl lg:text-3xl font-sans font-semibold text-cta mb-6 animate-fade-in-up"
                style={{ animationDelay: "0.05s" }}
              >
                {heroSubtitle}
              </p>
            )}

            {/* Mobile video */}
            <div
              className="lg:hidden mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.08s" }}
            >
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/uEZw3rKc3SE?rel=0"
                  title="DemandStream Digital"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Description */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              {typeof description === "string" ? (
                <p className="text-lg text-white/80 leading-relaxed mb-4">{description}</p>
              ) : (
                <>
                  <p className="text-lg text-white/80 leading-relaxed mb-4">
                    {description.intro}
                  </p>
                  <ul className="space-y-2.5 mb-4">
                    {description.bullets.map((bullet, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-base text-white/80"
                      >
                        <span className="text-cta font-bold mt-0.5 shrink-0">.</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  {description.closing && (
                    <p className="text-base text-white/70 leading-snug mb-4">
                      {description.closing}
                    </p>
                  )}
                </>
              )}
            </div>

            {integrationNote && (
              <p
                className="text-sm text-white/60 font-medium mb-10 animate-fade-in-up"
                style={{ animationDelay: "0.15s" }}
              >
                {integrationNote}
              </p>
            )}

            <div className="animate-fade-in-up mt-6" style={{ animationDelay: "0.2s" }}>
              <button
                type="button"
                onClick={() => navigate("/grow-qualifier")}
                className="btn-cta group whitespace-nowrap px-6 py-4 inline-flex items-center"
              >
                Schedule a Growth Audit
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-xs text-white/50 mt-3">
                One plumbing client and one HVAC client per market.
              </p>
            </div>
          </div>

          {/* Right column — Video */}
            <div
              className="hidden animate-fade-in-up lg:flex lg:justify-end"
              style={{ animationDelay: "0.2s" }}
            >
              <div
                className="aspect-video overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-2xl"
                style={HERO_VIDEO_FRAME_STYLE}
              >
              <iframe
                src="https://www.youtube.com/embed/uEZw3rKc3SE?rel=0"
                title="DemandStream Digital"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHubHero;
