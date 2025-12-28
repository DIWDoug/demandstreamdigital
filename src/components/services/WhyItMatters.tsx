import type { LucideIcon } from "lucide-react";

interface WhyItMattersProps {
  headline: string;
  description: string;
  points: { icon: LucideIcon; title: string; description: string }[];
}

const WhyItMatters = ({ headline, description, points }: WhyItMattersProps) => {
  return (
    <section className="py-20 lg:py-28 section-light relative">
      <div className="section-divider absolute top-0" />
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{headline}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {points.map((point, index) => (
            <div 
              key={index} 
              className="text-center p-8 rounded-xl bg-gradient-to-br from-white to-[#F0F0ED] border border-gray-300/50"
              style={{ boxShadow: 'inset 0 3px 6px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06), 0 8px 20px rgba(0,0,0,0.1)' }}
            >
              <div className="inline-flex items-center justify-center p-4 rounded-xl bg-[hsl(76,42%,41%)]/10 border border-[hsl(76,42%,41%)]/20 mb-5">
                <point.icon className="h-6 w-6 text-[hsl(76,42%,35%)]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{point.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
