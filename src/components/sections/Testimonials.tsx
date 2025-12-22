import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

// Hero testimonial - one only, with full context
const heroTestimonial = {
  quote: "They're an exceptionally dependable agency partner. They're trustworthy, they communicate clearly, and really consistently, which sometimes is rare in today's world.",
  author: "Trevor Anderson",
  role: "Founder & CEO, Anderson Collaborative",
  context: "Managing 100+ local clients"
};

const videoTestimonial = {
  id: "dR2Yxbldi1Q",
  title: "Agency Partner Testimonial"
};

const secondaryTestimonials = [
  {
    quote: "The last thing you want to worry about is, is a vendor doing a good job? Are they reliable? Doug and his team just absolutely crushed it.",
    author: "Jeremy", 
    role: "Agency Owner, Florida"
  },
  {
    quote: "Our retention rate on SEO is extremely high, probably about 90%. I can go to sleep every night knowing that we're doing everything we can.",
    author: "Florida Agency",
    role: "Digital Marketing Agency"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32 section-light">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4">
            What Agency Partners <span className="text-[hsl(76,42%,35%)]">Say</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Real feedback from agencies who've made the switch to system-driven fulfillment.
          </p>
        </div>

        {/* Hero Testimonial - Prominent */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Video */}
            <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-200 bg-white shadow-xl">
              <iframe
                src={`https://www.youtube.com/embed/${videoTestimonial.id}`}
                title={videoTestimonial.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Hero Quote */}
            <div className="relative">
              <Quote className="h-12 w-12 text-[hsl(76,42%,35%)]/20 mb-4" />
              <blockquote className="text-xl lg:text-2xl text-gray-800 font-medium leading-relaxed mb-6">
                "{heroTestimonial.quote}"
              </blockquote>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-900 font-semibold text-lg">{heroTestimonial.author}</p>
                <p className="text-gray-600">{heroTestimonial.role}</p>
                <p className="text-[hsl(76,42%,35%)] text-sm font-medium mt-1">{heroTestimonial.context}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary testimonials - smaller, less emphasis */}
        <div className="grid md:grid-cols-2 gap-6">
          {secondaryTestimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white/60 border-gray-200/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                <Quote className="h-6 w-6 text-gray-300 mb-3" />
                <p className="text-gray-600 text-sm mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-100 pt-3">
                  <p className="text-gray-800 font-medium text-sm">{testimonial.author}</p>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
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
