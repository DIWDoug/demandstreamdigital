import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import type { PainPoint } from "@/types/servicePage";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-balance">
              {config.headline}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {config.intro}
            </p>
          </div>

          {/* Pain Point Cards - First card is featured and spans full width */}
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {config.painPoints.map((point, index) => {
              const isFirst = index === 0;
              return (
                <div 
                  key={index}
                  className={`rounded-xl p-6 lg:p-8 border transition-all ${
                    isFirst 
                      ? 'sm:col-span-2 bg-gradient-to-br from-white via-white to-cta/5 border-cta/30 shadow-[0_4px_20px_-4px_hsl(var(--cta)/0.15)] relative overflow-hidden' 
                      : 'bg-white border-slate-200 shadow-sm hover:border-cta/30'
                  }`}
                >
                  {/* Featured badge for first card */}
                  {isFirst && (
                    <div className="absolute top-4 right-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-cta bg-cta/10 px-2.5 py-1 rounded-full">
                        Key Insight
                      </span>
                    </div>
                  )}
                  
                  <div className={`flex items-center gap-4 ${isFirst ? 'mb-5' : 'mb-4'}`}>
                    <div className={`rounded-xl flex items-center justify-center shrink-0 ${
                      isFirst 
                        ? 'w-14 h-14 bg-accent-blue/15 shadow-sm' 
                        : 'w-12 h-12 bg-accent-blue/10'
                    }`}>
                      <point.icon className={`text-accent-blue ${isFirst ? 'h-7 w-7' : 'h-5 w-5'}`} />
                    </div>
                    <strong className={`font-semibold text-slate-900 ${isFirst ? 'text-xl lg:text-2xl' : 'text-lg'}`}>
                      {point.title}
                    </strong>
                  </div>
                  <p className={`text-slate-500 leading-7 ${isFirst ? 'text-base lg:text-lg max-w-3xl' : 'text-sm'}`}>
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

          {/* Transition Line + CTAs */}
          <div className={`text-center ${config.systemClosing && config.systemClosing.length > 0 ? 'mt-6' : 'mt-14'} space-y-8`}>
            <p className="text-slate-600 text-lg">
              {config.closingLine} <span className="font-semibold text-slate-900">{config.closingHighlight}</span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-cta hover:bg-cta/90 text-white font-medium rounded-lg transition-colors"
              >
                Schedule a Discovery Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-slate-400 text-sm font-medium">or</span>
              <a 
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-cta hover:border-cta hover:text-white font-medium transition-all"
              >
                <Phone className="h-4 w-4" />
                {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProblemSection;
