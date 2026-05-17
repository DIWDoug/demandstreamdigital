import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import StreamTexture from "@/components/StreamTexture";

const ACCENT = "#C0392B";
const GOLD = "#F2B705";

const testimonials = [
  {
    quote:
      "Turns out we were missing 31% of our calls after 5pm. Nobody had ever told us. Game changer.",
    name: "GM, Regional HVAC Group",
    metric: "31% missed calls",
  },
  {
    quote:
      "Our Google Business Pro was scored 42 out of 100. Six weeks later we are #1 in the map pack for our zip. Worth $97 alone.",
    name: "Owner, Family Plumbing Co.",
    metric: "#1 in map pack",
  },
];

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

        {/* Featured Google Review */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 md:p-8 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-5 w-5 fill-current" style={{ color: GOLD }} />
                ))}
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0D1B2A] bg-[#F2B70520] px-2.5 py-1 rounded-full">
                Verified Google Review
              </span>
            </div>
            <p className="text-[#1F2937] text-base md:text-lg leading-relaxed mb-5">
              &ldquo;Working with Doug has been one of the best marketing choices we have made.
              For the first time, we are not guessing. We have a plan, the data, and a partner
              who keeps us honest. After past agencies that felt like a black box, it is great
              to work with a team that shows us what is working and why. We saw a
              <strong> 40% year over year revenue jump </strong>
              this past December. SEO is not the only reason, but it helped a lot. This is not
              a vendor. It is a real partner.&rdquo;
            </p>
            <div className="flex items-center justify-between border-t border-[#E5E7EB] pt-4">
              <div>
                <p className="text-[#0D1B2A] font-bold">Pure Plumbing &amp; Air</p>
                <p className="text-[#6B7280] text-sm">Owner. Posted on Google.</p>
              </div>
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-white font-bold text-xs"
                style={{ background: "#2E7D86" }}
              >
                +40% YoY revenue
              </span>
            </div>
          </div>
        </div>

        {/* Two more Google reviews */}
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-current" style={{ color: GOLD }} />
                  ))}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0D1B2A] bg-[#F2B70520] px-2 py-0.5 rounded-full">
                  Google Review
                </span>
              </div>
              <p className="text-[#1F2937] font-medium mb-4 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <p className="text-sm text-[#6B7280]">{t.name}</p>
                <span
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-white font-bold text-xs"
                  style={{ background: "#2E7D86" }}
                >
                  {t.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
