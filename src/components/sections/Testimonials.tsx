import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
const testimonials = [
  {
    quote: "They're an exceptionally dependable agency partner. They're trustworthy, they communicate clearly, and really consistently, which sometimes is rare in today's world.",
    author: "Trevor Anderson",
    role: "Founder & CEO, Anderson Collaborative"
  },
  {
    quote: "The last thing you want to worry about is, is your partner doing a good job? Are they reliable? Are they good at what they do? Doug and his team just absolutely crushed it.",
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
  const sectionRef = useScrollReveal();
  
  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background reveal-section">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-foreground">
            What Agency Partners <span className="text-cta">Say</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-text-secondary">
            Real feedback from agencies who've made the switch to system-driven fulfillment.
          </p>
        </div>

        {/* Video Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {videoTestimonials.map((video, index) => (
            <div 
              key={index} 
              className="relative aspect-video rounded-xl overflow-hidden border border-border bg-surface-elevated shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
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
              className="bg-surface-elevated border-border hover:border-accent-blue/30 transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-accent-blue/40 mb-4" />
                <p className="text-text-secondary text-base mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="text-foreground font-medium">{testimonial.author}</p>
                  <p className="text-text-muted text-sm">{testimonial.role}</p>
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
