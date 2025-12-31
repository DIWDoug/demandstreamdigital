import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { PainPoint } from "@/types/servicePage";

interface ProblemConfig {
  eyebrow: string;
  headline: string;
  intro: string;
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
    <section className="py-20 lg:py-28 section-light relative">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-4">
              {config.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-6 text-balance">
              {config.headline}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {config.intro}
            </p>
          </div>

          {/* Pain Point Cards - First card is featured */}
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {config.painPoints.map((point, index) => {
              const isFirst = index === 0;
              return (
                <div 
                  key={index}
                  className={`bg-white rounded-xl p-6 lg:p-8 border shadow-sm hover:border-cta/30 transition-colors ${
                    isFirst 
                      ? 'border-cta/20 ring-1 ring-cta/10 sm:col-span-2 lg:col-span-1' 
                      : 'border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      isFirst ? 'bg-cta/15' : 'bg-cta/10'
                    }`}>
                      <point.icon className={`h-5 w-5 text-cta ${isFirst ? 'h-6 w-6' : ''}`} />
                    </div>
                    <strong className={`font-semibold text-slate-900 ${isFirst ? 'text-xl' : 'text-lg'}`}>
                      {point.title}
                    </strong>
                  </div>
                  <p className="text-slate-500 text-sm leading-7">
                    {point.body}
                  </p>
                </div>
              );
            })}
          </div>

          {/* System Closing (optional) */}
          {config.systemClosing && config.systemClosing.length > 0 && (
            <p className="text-center text-slate-700 text-lg font-medium mt-10">
              {config.systemClosing}
            </p>
          )}

          {/* Transition Line + CTA */}
          <div className={`text-center ${config.systemClosing && config.systemClosing.length > 0 ? 'mt-6' : 'mt-14'} space-y-6`}>
            <p className="text-slate-600 text-lg">
              {config.closingLine} <span className="font-semibold text-slate-900">{config.closingHighlight}</span>
            </p>
            <Link 
              to="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-cta hover:bg-cta/90 text-white font-medium rounded-lg transition-colors"
            >
              {config.ctaText}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProblemSection;
