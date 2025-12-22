import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "They're an exceptionally dependable agency partner. They're trustworthy, they communicate clearly, and really consistently, which sometimes is rare in today's world.",
    author: "Trevor Anderson",
    role: "Founder & CEO, Anderson Collaborative"
  },
  {
    quote: "The last thing you want to worry about is, is a vendor doing a good job? Are they reliable? Are they good at what they do? Doug and his team just absolutely crushed it.",
    author: "Jeremy", 
    role: "Digital Marketing Agency Owner, Florida"
  },
  {
    quote: "Our retention rate on SEO is extremely high, probably about 90%. I can go to sleep every night knowing that we're doing everything we can to help a client.",
    author: "Florida Agency Owner",
    role: "Digital Marketing Agency Owner"
  }
];

const videoTestimonials = [
  {
    id: "dR2Yxbldi1Q",
    title: "Agency Partner Testimonial"
  },
  {
    id: "i66XV1on6pM", 
    title: "Florida Agency Owner Testimonial"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32 bg-surface-dark">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-4">
            What Agency Partners Say
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Real feedback from agencies who've made the switch to system-driven fulfillment.
          </p>
        </div>

        {/* Video Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {videoTestimonials.map((video, index) => (
            <div 
              key={index} 
              className="relative aspect-video rounded-xl overflow-hidden border border-border/30 bg-card shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300 hover:-translate-y-1"
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
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-card/80 to-card/50 border-border/30 hover:border-cta/30 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20"
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-cta/40 mb-4" />
                <p className="text-foreground/90 text-base mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border/20 pt-4">
                  <p className="text-foreground font-medium">{testimonial.author}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
