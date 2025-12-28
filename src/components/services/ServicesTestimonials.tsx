import { Quote } from "lucide-react";

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
  { id: "dR2Yxbldi1Q", title: "Agency Partner Testimonial" },
  { id: "i66XV1on6pM", title: "Florida Agency Owner Testimonial" }
];

const ServicesTestimonials = () => {
  return (
    <section className="py-20 lg:py-28 section-light">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-3">
              Partner Feedback
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Agency Partners <span className="text-cta">Say</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Real feedback from agencies who've made the switch to system-driven fulfillment.
            </p>
          </div>

          {/* Video Testimonials */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {videoTestimonials.map((video, index) => (
              <div 
                key={index} 
                className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 bg-white shadow-lg"
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
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
              >
                <Quote className="h-8 w-8 text-cta/30 mb-4" />
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="text-slate-900 font-medium text-sm">{testimonial.author}</p>
                  <p className="text-slate-500 text-xs">{testimonial.role}</p>
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
