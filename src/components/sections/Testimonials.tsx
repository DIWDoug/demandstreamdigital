import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
const testimonials = [
  {
    quote: "What stood out was the consistency. Every month, we knew what to expect. Communication was clear, deliverables arrived on time, and we could actually explain the work to our clients without scrambling. That reliability changed how we operate.",
    author: "Trevor Anderson",
    role: "Founder & CEO, Anderson Collaborative"
  },
  {
    quote: "We needed a partner we could trust to deliver quality work across different client situations. The ability to have real conversations about scope and strategy made a measurable difference in client retention. Most clients stayed at least a year.",
    author: "Jeremy", 
    role: "Digital Marketing Agency Owner, Florida"
  },
  {
    quote: "The biggest win was knowing we could count on them. Our team could confidently discuss campaigns with clients because we understood what was happening and why. That clarity is hard to find.",
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
    <section ref={sectionRef} className="py-24 lg:py-32 section-light reveal-section">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-slate-900">
            What Agency Partners <span className="text-accent-blue">Say</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-slate-600">
            Real feedback from agencies who value trust, clarity, and consistent execution.
          </p>
        </div>

        {/* Video Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {videoTestimonials.map((video, index) => (
            <div 
              key={index} 
              className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
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
              className="bg-white border-slate-200 hover:border-accent-blue/30 transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-accent-blue/40 mb-4" />
                <p className="text-slate-600 text-base mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="text-slate-900 font-medium">{testimonial.author}</p>
                  <p className="text-slate-500 text-sm">{testimonial.role}</p>
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
