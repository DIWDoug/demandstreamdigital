import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "They're an exceptionally dependable partner. They communicate clearly, and really consistently, which is sometimes rare in today's world.",
    author: "Trevor Anderson",
    title: "Founder & CEO, Anderson Collaborative"
  },
  {
    quote: "The last thing you want to worry about is whether your fulfillment partner is reliable. Are they good at what they do? With Dialed-In, we sleep every night knowing we're doing everything we can to help a client.",
    author: "Jeremy",
    title: "Digital Marketing Agency Owner, Florida"
  },
  {
    quote: "Our retention rate on SEO is extremely high because the work actually performs. That's what matters at the end of the day.",
    author: "Agency Partner",
    title: "Multi-Location SEO Client"
  }
];

const ServicesTestimonials = () => {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-3">
              What Agency Partners Say
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Real Feedback From Partners
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-surface-elevated border border-border/50 rounded-xl p-6 flex flex-col"
              >
                <Quote className="h-8 w-8 text-cta/30 mb-4" />
                <p className="text-text-secondary text-sm leading-relaxed flex-grow mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border/30 pt-4">
                  <p className="text-foreground font-medium text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-text-muted text-xs">
                    {testimonial.title}
                  </p>
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
