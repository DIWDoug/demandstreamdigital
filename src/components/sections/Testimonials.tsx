import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import StreamTexture from "@/components/StreamTexture";

const featuredTestimonial = {
  quote: "Working with our SEO partner has been one of the best marketing decisions we've made. In just a few months, he has completely transformed our SEO performance with a roadmap that is not only strategic, but clearly tailored to our business. For the first time, we don't feel like we're guessing. We have a plan, data to back it up, and a partner who keeps us accountable.\n\nWhat truly sets him apart is transparency. After past experiences with agencies where SEO felt like a \"black box,\" it's refreshing to work with a team that provides real, clear data and explains what's working and why. His insights are thoughtful, his ideas are strong, and his use of AI is smart and intentional, not gimmicky.\n\nBeyond the strategy, the results speak for themselves. We saw a 40% year-over-year revenue increase this past December, and while SEO isn't the only factor, it has absolutely contributed to that growth.\n\nHe is passionate about what he does, and it shows in both his work and his team. This is not a vendor relationship. This is a true partnership.\n\nIf you're looking for an SEO company that is strategic, transparent, and genuinely invested in your success, I can't recommend him enough.",
  author: "Pure Plumbing & Air",
  source: "Google Review",
  highlight: "40% year-over-year revenue increase",
  rating: 5,
};

const testimonials: Array<{
  quote: string;
  author: string;
  source: string;
  company: string;
  rating: number;
}> = [];

const Testimonials = () => {
  const sectionRef = useScrollReveal();
  
  return (
    <section ref={sectionRef} className="py-24 lg:py-32 section-light reveal-section relative overflow-hidden">
      <StreamTexture variant="light" opacity={0.1} />
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
            Plumbing & HVAC Marketing Reviews
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-slate-600">
            Doug Bryson brings 15+ years and 100+ client engagements to DemandStream — now focused exclusively on plumbing and HVAC.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <span className="text-slate-600 text-sm font-medium">4.9 out of 5 · 22 Reviews (cumulative of Google, Dialed In Web & Demand Stream)</span>
          </div>
        </div>

        {/* Featured Partnership Review */}
        <Card className="bg-white border-primary/20 shadow-lg mb-8 max-w-4xl mx-auto">
          <CardContent className="p-8 md:p-10">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(featuredTestimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <Quote className="h-10 w-10 text-primary/40 mb-5" />
            <p className="text-slate-700 text-base leading-relaxed whitespace-pre-line mb-6">
              "{featuredTestimonial.quote}"
            </p>
            <div className="flex items-center justify-between border-t border-slate-200 pt-5">
              <div>
                <p className="text-slate-900 font-semibold text-lg">{featuredTestimonial.author}</p>
                <p className="text-primary text-sm">{featuredTestimonial.source}</p>
              </div>
              <div className="bg-accent-blue/10 text-accent-blue font-semibold text-sm px-4 py-2 rounded-full">
                {featuredTestimonial.highlight}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Homeowner Reviews */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white border-slate-200 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-primary/40 mb-4" />
                <p className="text-slate-600 text-sm mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="text-slate-900 font-medium">{testimonial.author}</p>
                  <p className="text-slate-500 text-sm">{testimonial.company}</p>
                  <p className="text-primary text-xs mt-1">{testimonial.source}</p>
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
