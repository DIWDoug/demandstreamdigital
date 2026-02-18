import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote: "Five stars, for sure. Travis was professional, fast, and honest right out of the gate. You can tell he's experienced and knows what he's talking about. I told him what I thought the problem was, so after diagnosing the problem for free, he gave me his honest answer. He wasn't pushy and gave me options. I decided to move forward with the leak, and he was able to fix it in just a few hrs. He cleaned up after himself and left the yard as he saw it. I highly recommend him if you need a good plumber.",
    author: "Chris T.",
    source: "Google Review",
    company: "Pure Plumbing & Air",
    rating: 5,
  },
  {
    quote: "I woke up to a flood in my kitchen and was able to schedule an appointment very quickly. My technician, Daniel L., showed up, and he was very professional, knowledgeable, kind, and personable. He listened to me and went over all the possible causes of the flood. He was very upfront about pricing and ensured they didn't have any hidden fees. He was able to find the problem and get it fixed in a quick but very thorough manner.",
    author: "Ralynn R.",
    source: "Google Review",
    company: "Pure Plumbing & Air",
    rating: 5,
  },
  {
    quote: "Jason showed up with Pure Plumbing and Air. I was very impressed. He was very respectful. He first asked if he could come in and then put his covers over his shoes. He went right to work diagnosing our problem with our AC. The free estimate worked out great for us. Jason gave all the information that we need to make an informed decision regarding our AC unit and then a few more suggestions to help us in the future.",
    author: "Dee Ann M.",
    source: "Google Review",
    company: "Pure Plumbing and Air",
    rating: 5,
  },
];

const Testimonials = () => {
  const sectionRef = useScrollReveal();
  
  return (
    <section ref={sectionRef} className="py-24 lg:py-32 section-light reveal-section">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
            What Our Clients <span className="text-accent-blue">Say</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-slate-600">
            Real reviews from real homeowners who trusted us with their plumbing and HVAC needs.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <span className="text-slate-600 text-sm font-medium">4.8 stars · 2,287 Google Reviews</span>
          </div>
        </div>

        {/* Quote Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white border-slate-200 hover:border-accent-blue/30 transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-accent-blue/40 mb-4" />
                <p className="text-slate-600 text-sm mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="text-slate-900 font-medium">{testimonial.author}</p>
                  <p className="text-slate-500 text-sm">{testimonial.company}</p>
                  <p className="text-accent-blue text-xs mt-1">{testimonial.source}</p>
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
