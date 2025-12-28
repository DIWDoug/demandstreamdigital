import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
const testimonials = [
  {
    quote: "Our challenge was executing real campaigns at tight price points without sacrificing delivery. We needed flexibility, not rigid packages. The ability to design campaigns around franchise budgets, while still maintaining standards and leveraging AI to stay efficient, allowed us to deliver consistently without blowing margins.",
    author: "Trevor Anderson",
    role: "Founder & CEO, Anderson Collaborative"
  },
  {
    quote: "We needed a partner we could depend on to build customized strategies for almost every client that came through the door. Our business is rooted in web design, and generic marketing packages were never going to work. Being able to tailor execution around each site and market made a measurable difference in client retention. Most clients stayed at least a year, with several continuing for multiple cycles.",
    author: "Jeremy", 
    role: "Digital Marketing Agency Owner, Florida"
  },
  {
    quote: "The biggest win was reliability. Strategy changes client to client, but execution has to stay consistent. Having a team we could trust to adapt strategies without constant oversight made it possible to scale without adding internal headcount.",
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-surface-elevated reveal-section">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-foreground">
            What Agency Partners <span className="text-accent-blue">Say</span>
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
