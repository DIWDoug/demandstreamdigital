import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import type { BreadcrumbItem } from "@/types/servicePage";

interface HeroConfig {
  headline: string;
  highlightedText: string;
  subheadline: string | { intro: string; bullets: string[]; closing: string };
  qualifierLine: string;
  ctaText: string;
  ctaSubtext: string;
}

interface ServiceHeroGenericProps {
  config: HeroConfig;
  breadcrumbs?: BreadcrumbItem[];
}

const ServiceHeroGeneric = ({ config, breadcrumbs }: ServiceHeroGenericProps) => {
  const navigate = useNavigate();

  const subIntro =
    typeof config.subheadline === "string" ? config.subheadline : config.subheadline.intro;

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
                  <Link
                    to={item.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
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
          {/* Left column — Headline, copy & CTA */}
          <div className="max-w-xl">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold mb-4 animate-fade-in-up text-white"
              style={{ lineHeight: "1.1" }}
            >
              {config.headline}{" "}
              <span className="text-cta">{config.highlightedText}</span>
            </h1>

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

            <p
              className="text-lg text-white/80 leading-relaxed mb-4 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              {subIntro}
            </p>

            <p
              className="text-sm text-white/60 font-medium mb-10 animate-fade-in-up"
              style={{ animationDelay: "0.15s" }}
            >
              {config.qualifierLine}
            </p>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <button
                type="button"
                onClick={() => navigate("/grow-qualifier")}
                className="btn-cta group whitespace-nowrap px-6 py-4 inline-flex items-center"
              >
                {config.ctaText}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-xs text-white/50 mt-3">{config.ctaSubtext}</p>
            </div>
          </div>

          {/* Right column — Video */}
          <div
            className="hidden animate-fade-in-up lg:block lg:scale-[1.08] lg:origin-right"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="aspect-video overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-2xl">
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

export default ServiceHeroGeneric;
