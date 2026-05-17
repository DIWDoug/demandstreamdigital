import { Star } from "lucide-react";
import StreamTexture from "@/components/StreamTexture";
import review1 from "@/assets/pure-plumbing-review-1.png";
import review2 from "@/assets/pure-plumbing-review-2.png";

interface ServiceTestimonialsSectionProps {
  ratingLine?: string;
  eyebrow?: string;
  heading?: string;
  subhead?: string;
}

const ServiceTestimonialsSection = ({
  ratingLine = "4.9 out of 5 · 22 Google Reviews for Demand Stream Digital",
  eyebrow = "Real Reviews From Real Operators",
  heading = "Real Shops. Real Words. Real Money Found.",
  subhead,
}: ServiceTestimonialsSectionProps) => {
  return (
    <section className="py-24 lg:py-32 section-light relative overflow-hidden" style={{ background: "linear-gradient(180deg, #F2F4F7 0%, #FFFFFF 100%)" }}>
      <StreamTexture variant="light" opacity={0.1} />
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-accent-blue mb-4">
            {eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
            {heading}
          </h2>
          {subhead && (
            <p className="text-lg max-w-2xl mx-auto text-slate-600">{subhead}</p>
          )}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <span className="text-slate-600 text-sm font-medium">{ratingLine}</span>
          </div>
        </div>

        {/* Two Google review screenshot cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <a
            href="https://www.google.com/search?q=Demand+Stream+Digital+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-[#1F1F1F] transition-transform hover:-translate-y-1"
            aria-label="Read the Pure Plumbing Google review"
          >
            <img
              src={review1}
              alt="Google review from Pure Plumbing: 5 stars, praising the Dallas SEO partnership with Demand Stream Digital."
              className="w-full h-auto block"
              loading="lazy"
            />
          </a>
          <a
            href="https://www.google.com/search?q=Demand+Stream+Digital+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-[#1F1F1F] transition-transform hover:-translate-y-1"
            aria-label="Read the Pure Plumbing and Air Google review"
          >
            <img
              src={review2}
              alt="Google review from Pure Plumbing and Air: 5 stars, citing a 40% year-over-year revenue increase."
              className="w-full h-auto block"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonialsSection;
