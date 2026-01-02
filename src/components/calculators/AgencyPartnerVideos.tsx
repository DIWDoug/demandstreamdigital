import { Play, Quote } from "lucide-react";

const agencyPartnerVideos = [
  {
    name: "Cole",
    title: "Digital Marketing Agency Owner, Dallas",
    tenure: "7 Years Partner",
    videoId: "DlOyjDWaCZo",
    quote: "They're second to none: extremely competitive pricing for the level of wisdom and responsiveness you receive."
  },
  {
    name: "Trevor Anderson",
    title: "Founder & CEO, Anderson Collaborative",
    tenure: "5 Years Partner",
    videoId: "dR2Yxbldi1Q",
    quote: "They're trustworthy, they communicate clearly and really consistently."
  },
  {
    name: "Jeremy",
    title: "Digital Marketing Agency Owner, Florida",
    tenure: "5 Years Partner",
    videoId: "i66XV1on6pM",
    quote: "The ability to have real conversations about scope and strategy made a measurable difference."
  }
];

const AgencyPartnerVideos = () => {
  return (
    <section className="py-16 lg:py-24 bg-surface-elevated">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-cta/10 text-cta text-xs font-semibold uppercase tracking-wider mb-4">
              Agency Partners
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hear From Our <span className="text-accent-blue">Long-Term Partners</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Real agency owners share their experience partnering with us for white-label fulfillment.
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {agencyPartnerVideos.map((partner, index) => (
              <div 
                key={index} 
                className="bg-surface-dark rounded-2xl border border-border overflow-hidden hover:border-accent-blue/30 transition-all duration-300"
              >
                {/* Video Embed */}
                <div className="aspect-video relative">
                  <iframe
                    src={`https://www.youtube.com/embed/${partner.videoId}`}
                    title={`${partner.name} testimonial`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <Quote className="h-5 w-5 text-accent-blue/40 flex-shrink-0 mt-1" />
                    <p className="text-sm text-text-secondary italic">
                      "{partner.quote}"
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-foreground font-semibold">{partner.name}</p>
                    <p className="text-sm text-text-muted">{partner.title}</p>
                    <p className="text-xs text-cta mt-1">{partner.tenure}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyPartnerVideos;
