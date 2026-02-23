import { useScrollReveal } from "@/hooks/useScrollAnimation";
import StreamTexture from "@/components/StreamTexture";

const cards = [
  {
    title: "Review Velocity",
    body: "Consistent new reviews signal an active, trusted business to Google and to customers.",
  },
  {
    title: "Maps Ranking Impact",
    body: "Review volume and recency are direct ranking factors in local search.",
  },
  {
    title: "Repeat Business",
    body: "Customers who leave a review are more likely to call again and refer others.",
  },
];

const ReputationVelocity = () => {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 section-light reveal-section relative overflow-hidden">
      <StreamTexture variant="light" opacity={0.1} />
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-balance">
              Every Completed Job Is a Marketing Asset. Most Companies Leave It on the Table.
            </h2>
            <div className="space-y-4 text-slate-600 text-base leading-relaxed max-w-3xl mx-auto text-left">
              <p>
                When a homeowner needs a plumber or HVAC tech, they don't just search — they compare. They read reviews. They look at your star rating before they call. They check your Google Business Profile before they decide.
              </p>
              <p>
                A job well done doesn't automatically become a 5-star review. It has to be captured.
              </p>
              <p>
                DemandStream builds reputation into the marketing system. Not as an afterthought. Not as a monthly email blast. As a structured process that turns completed jobs into visible proof — the kind that improves your Maps ranking, increases call preference, and compounds over time.
              </p>
              <p className="font-medium text-slate-900">
                More reviews mean more calls. More calls mean more revenue. That's not branding. That's math.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReputationVelocity;
