import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import StreamTexture from "@/components/StreamTexture";
import review1 from "@/assets/pure-plumbing-review-1.png";
import review2 from "@/assets/pure-plumbing-review-2.png";

const ACCENT = "#C0392B";
const GOLD = "#F2B705";

const Testimonials = () => {
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      className="reveal-section relative overflow-hidden bg-[#F7F8FA] py-16 md:py-20"
    >
      <StreamTexture variant="light" opacity={0.1} />
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div
            className="inline-block text-[11px] md:text-xs font-black tracking-[0.25em] uppercase mb-3"
            style={{ color: ACCENT }}
          >
            Real Reviews From Real Operators
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#0D1B2A] leading-tight">
            Real Shops. Real Words. Real Money Found.
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="h-5 w-5 fill-current" style={{ color: GOLD }} />
              ))}
            </div>
            <span className="text-[#475569] text-sm font-medium">
              4.9 out of 5 . 22 Google Reviews for Demand Stream Digital
            </span>
          </div>
        </div>

        {/* Actual Google Review screenshots */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <a
            href="https://www.google.com/search?q=Demand+Stream+Digital+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl overflow-hidden shadow-lg border border-[#E5E7EB] bg-[#1F1F1F] transition-transform hover:-translate-y-1"
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
            className="block rounded-2xl overflow-hidden shadow-lg border border-[#E5E7EB] bg-[#1F1F1F] transition-transform hover:-translate-y-1"
            aria-label="Read the Pure Plumbing & Air Google review"
          >
            <img
              src={review2}
              alt="Google review from Pure Plumbing & Air: 5 stars, citing a 40% year over year revenue increase."
              className="w-full h-auto block"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

