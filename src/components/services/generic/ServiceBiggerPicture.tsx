import { Link } from "react-router-dom";

export interface BiggerPictureService {
  label: string;
  href: string;
}

export interface BiggerPictureOrbitNode {
  label: string;
  angle: number;
}

export interface ServiceBiggerPictureProps {
  eyebrow?: string;
  heading: string;
  headingHighlight?: string;
  body1: string;
  body2: string;
  centerLabel: string;
  centerSublabel?: string;
  services: BiggerPictureService[];
  orbitNodes: BiggerPictureOrbitNode[];
  ctaLabel?: string;
  ctaHref?: string;
}

const ServiceBiggerPicture = ({
  eyebrow = "The Bigger Picture",
  heading,
  headingHighlight,
  body1,
  body2,
  centerLabel,
  centerSublabel,
  services,
  orbitNodes,
  ctaLabel = "See How the Full System Works",
  ctaHref = "/hvac-and-plumbing-paid-ads",
}: ServiceBiggerPictureProps) => {
  return (
    <section className="py-20 lg:py-28 bg-background scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">{eyebrow}</p>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — copy */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {heading}{" "}
                {headingHighlight && (
                  <span className="text-cta">{headingHighlight}</span>
                )}
              </h2>

              <p className="font-semibold text-foreground mb-5 leading-relaxed">{body1}</p>

              <div className="space-y-4 text-text-secondary leading-relaxed mb-8">
                <p>{body2}</p>
              </div>

              {/* Service checklist two-col */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
                {services.map((svc, i) => (
                  <Link
                    key={i}
                    to={svc.href}
                    className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent-blue transition-colors group"
                  >
                    <span className="text-accent-blue">&#10003;</span>
                    <span className="group-hover:underline">{svc.label}</span>
                  </Link>
                ))}
              </div>

              <Link
                to={ctaHref}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:text-accent-blue/80 transition-colors"
              >
                {ctaLabel}
                <span>&#8594;</span>
              </Link>
            </div>

            {/* Right — hub and spoke diagram */}
            <div className="flex items-center justify-center">
              <div className="relative w-[472px] h-[472px] rounded-full overflow-hidden">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent-blue/20" />

                {/* Center node */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-cta text-white rounded-full w-32 h-32 flex flex-col items-center justify-center text-center p-3 shadow-lg z-10">
                    {centerLabel.split(" ").map((word, i) => (
                      <p key={i} className="text-sm font-bold leading-tight">{word}</p>
                    ))}
                    {centerSublabel && (
                      <p className="text-[10px] text-white/75 mt-1 leading-tight px-2">{centerSublabel}</p>
                    )}
                  </div>
                </div>

                {/* Orbit nodes */}
                {orbitNodes.map((node, i) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const r = 191;
                  const x = 236 + r * Math.sin(rad);
                  const y = 236 - r * Math.cos(rad);
                  return (
                    <div
                      key={i}
                      className="absolute w-24 h-24 bg-surface-elevated border border-border rounded-full flex items-center justify-center text-center shadow-sm"
                      style={{ left: x - 48, top: y - 48 }}
                    >
                      <p className="text-[11px] font-semibold text-foreground leading-tight px-2">{node.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBiggerPicture;
