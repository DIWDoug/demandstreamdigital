import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Dialed-In Web transformed how we handle local SEO for our clients. Their white-label fulfillment is seamless and the results speak for themselves.",
    author: "Agency Partner",
    role: "Digital Marketing Agency Owner"
  },
  {
    quote: "Finally, a partner who understands the agency model. They deliver consistent results without the drama.",
    author: "Agency Partner", 
    role: "SEO Agency Founder"
  },
  {
    quote: "The retention rates we've seen since partnering with Dialed-In are unmatched. Our clients stay because the work actually moves the needle.",
    author: "Agency Partner",
    role: "Marketing Agency Director"
  }
];

const videoTestimonials = [
  {
    id: "dR2Yxbldi1Q",
    title: "Agency Partner Testimonial"
  },
  {
    id: "dR2Yxbldi1Q", 
    title: "Agency Partner Testimonial"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Agency Partners Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real feedback from agencies who've made the switch to system-driven fulfillment.
          </p>
        </div>

        {/* Video Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {videoTestimonials.map((video, index) => (
            <div key={index} className="relative aspect-video rounded-lg overflow-hidden border border-border/30 bg-card">
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
              className="bg-card/50 border-border/30 hover:border-border/50 transition-colors duration-300"
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/40 mb-4" />
                <p className="text-foreground/90 text-base leading-relaxed mb-6">
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
