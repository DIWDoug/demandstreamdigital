import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "They're an exceptionally dependable agency partner. They're trustworthy, they communicate clearly, and really consistently.",
    author: "Trevor Anderson",
    role: "Founder & CEO, Anderson Collaborative"
  },
  {
    quote: "The last thing you want to worry about is, is your partner doing a good job? Are they reliable? Doug and his team just absolutely crushed it.",
    author: "Jeremy", 
    role: "Digital Marketing Agency Owner, Florida"
  },
  {
    quote: "Our retention rate on SEO is extremely high. I can go to sleep every night knowing that we're doing everything we can to help a client.",
    author: "Florida Agency Owner",
    role: "Digital Marketing Agency Owner"
  }
];

const videoTestimonials = [
  { id: "dR2Yxbldi1Q", title: "Agency Partner Testimonial" },
  { id: "i66XV1on6pM", title: "Florida Agency Owner Testimonial" }
];

const ServicesTestimonials = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-3">
              Partner Feedback
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Agency Partners <span className="text-accent-blue">Say</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Real feedback from agencies who've made the switch to system-driven fulfillment.
            </p>
          </div>

          {/* Video Testimonials */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {videoTestimonials.map((video, index) => (
              <div 
                key={index} 
                className="relative aspect-video rounded-xl overflow-hidden border border-border bg-surface-dark shadow-lg"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Quote Cards */}
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-surface-dark border border-border/50 rounded-xl p-6"
              >
                <Quote className="h-8 w-8 text-accent-blue/30 mb-4" />
                <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border/30 pt-4">
                  <p className="text-foreground font-medium text-sm">{testimonial.author}</p>
                  <p className="text-text-muted text-xs">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTestimonials;
