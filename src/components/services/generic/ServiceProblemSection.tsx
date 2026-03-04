import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import type { PainPoint } from "@/types/servicePage";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

interface ProblemConfig {
  eyebrow: string;
  headline: string;
  intro: string;
  introCallout?: string;
  painPoints: PainPoint[];
  systemClosing?: string;
  closingLine: string;
  closingHighlight: string;
  ctaText: string;
}

interface ServiceProblemSectionProps {
  config: ProblemConfig;
}

const ServiceProblemSection = ({ config }: ServiceProblemSectionProps) => {
  return (
    <section className="py-24 lg:py-32 bg-background relative">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 max-w-6xl mx-auto">

          {/* LEFT COLUMN — sticky H2 + body + CTAs (40%) */}
          <div className="lg:col-span-2 lg:sticky lg:top-32 self-start">
            <p className="text-accent-blue text-xs font-semibold uppercase tracking-widest mb-4">
              {config.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight text-balance">
              {config.headline}
            </h2>

            {/* Red-bordered blockquote */}
            <div className="border-l-4 border-cta pl-5 mb-6 space-y-4">
              {config.intro.split("\n\n").map((para, i) => (
                <p key={i} className="text-text-secondary text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start gap-3 mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-cta hover:bg-cta/90 text-white font-medium rounded-lg transition-colors text-sm whitespace-nowrap"
              >
                {config.ctaText}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4 text-accent-blue" />
                {PHONE_NUMBER}
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN — icon rows with hr dividers (60%) */}
          <div className="lg:col-span-3">
            {config.painPoints.map((point, index) => (
              <div key={index}>
                <div className="flex items-start gap-5 py-6">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                    index % 2 === 0
                      ? 'bg-cta/15'
                      : 'bg-accent-blue/10'
                  }`}>
                    <point.icon className={`h-5 w-5 ${index % 2 === 0 ? 'text-cta' : 'text-accent-blue'}`} strokeWidth={1.5} />
                  </div>
                  <div>
                    <strong className="block text-base font-semibold text-foreground mb-1.5">
                      {point.title}
                    </strong>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {point.body}
                    </p>
                  </div>
                </div>
                {index < config.painPoints.length - 1 && (
                  <hr className="border-t border-white/10" />
                )}
              </div>
            ))}

            {/* Closing line */}
            {(config.closingLine || config.closingHighlight) && (
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-text-secondary text-sm leading-relaxed">
                  {config.closingLine}{" "}
                  <span className="font-semibold text-foreground">{config.closingHighlight}</span>
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceProblemSection;
