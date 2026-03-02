import { Star, Quote } from "lucide-react";
import StreamTexture from "@/components/StreamTexture";

interface FeaturedReview {
  eyebrow: string;
  quote: string;
  author: string;
  source: string;
  metricBadge: string;
  rating?: number;
}

interface PlaceholderCard {
  hint: string;
}

interface ServiceTestimonialsSectionProps {
  featured: FeaturedReview;
  placeholders?: PlaceholderCard[];
  ratingLine?: string;
}

const ServiceTestimonialsSection = ({
  featured,
  placeholders = [],
  ratingLine = "4.9 out of 5 · 22 Reviews | Google Reviews | DemandStream Digital",
}: ServiceTestimonialsSectionProps) => {
  const rating = featured.rating ?? 5;

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #F2F4F7 0%, #FFFFFF 100%)" }}>
      <StreamTexture variant="light" opacity={0.06} />
      <div className="container mx-auto px-6 max-w-4xl relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4">
            {featured.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Real Results. Real Operators.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            These are not agency reviews. These come from plumbing and HVAC companies that wanted more booked calls. And got them.
          </p>
          <div className="flex items-center justify-center gap-2 mt-5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <span className="text-slate-500 text-sm font-medium">{ratingLine}</span>
          </div>
        </div>

        {/* Featured Review Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md mb-6 p-8 md:p-10">
          {/* Stars */}
          <div className="flex items-center gap-1 mb-4">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
            ))}
          </div>

          {/* Large gold open-quote icon */}
          <Quote className="h-12 w-12 mb-5" style={{ color: "#F59E0B", opacity: 0.85 }} />

          {/* Review body */}
          <p className="text-slate-700 text-base leading-relaxed whitespace-pre-line mb-8">
            "{featured.quote}"
          </p>

          {/* Footer */}
          <div className="flex items-end justify-between gap-4 border-t border-slate-100 pt-6 flex-wrap">
            <div>
              <p className="text-slate-900 font-bold text-lg leading-tight">{featured.author}</p>
              <p className="text-slate-400 text-sm mt-0.5">{featured.source}</p>
            </div>
            <span
              className="text-sm font-semibold px-4 py-2 rounded-full shrink-0"
              style={{ backgroundColor: "#D1FAE5", color: "#065F46" }}
            >
              {featured.metricBadge}
            </span>
          </div>
        </div>

        {/* Placeholder Cards */}
        {placeholders.length > 0 && (
          <div className={`grid gap-6 ${placeholders.length === 1 ? "grid-cols-1" : "md:grid-cols-2"}`}>
            {placeholders.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center min-h-[200px] text-center p-8"
              >
                <p className="text-slate-300 text-sm italic">{p.hint}</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default ServiceTestimonialsSection;
