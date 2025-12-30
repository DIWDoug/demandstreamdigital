import { Quote, ArrowRight, Phone } from "lucide-react";

const testimonials = [
  {
    quote: "I've owned an ad agency in Dallas for a decade and partnered with Doug's team for seven years. They're second to none — incredibly articulate when it comes to campaign structure, from paid advertising to organic SEO to answer engine optimization. Extremely competitive pricing for the level of wisdom and responsiveness you receive. They will make your company money.",
    author: "Cole",
    role: "Agency Owner, Dallas — 10 Years in Business"
  },
  {
    quote: "Our challenge was executing real campaigns at tight price points without sacrificing delivery. We needed flexibility, not rigid packages. The ability to design campaigns around franchise budgets, while still maintaining standards and leveraging AI to stay efficient, allowed us to deliver consistently without blowing margins.",
    author: "Trevor Anderson",
    role: "Founder & CEO, Anderson Collaborative"
  },
  {
    quote: "We needed a partner we could depend on to build customized strategies for almost every client that came through the door. Our business is rooted in web design, and generic marketing packages were never going to work. Being able to tailor execution around each site and market made a measurable difference in client retention. Most clients stayed at least a year, with several continuing for multiple cycles.",
    author: "Jeremy", 
    role: "Digital Marketing Agency Owner, Florida"
  }
];

const videoTestimonials = [
  { id: "DlOyjDWaCZo", title: "Agency Partner Testimonial" },
  { id: "dR2Yxbldi1Q", title: "Agency Partner Testimonial" },
  { id: "i66XV1on6pM", title: "Florida Agency Owner Testimonial" }
];

const ServicesTestimonials = () => {
  return (
    <section className="py-20 lg:py-28 bg-surface-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-3">
              Partner Feedback
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Agency Partners <span className="text-accent-blue">Say</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Real feedback from agencies who've made the switch to system-driven fulfillment.
            </p>
          </div>

          {/* Video Testimonials */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {videoTestimonials.map((video, index) => (
              <div 
                key={index} 
                className="relative aspect-video rounded-xl overflow-hidden border border-border bg-surface-elevated shadow-lg"
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
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-surface-elevated border border-border/50 rounded-xl p-5 sm:p-6"
              >
                <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-accent-blue/30 mb-3 sm:mb-4" />
                <p className="text-text-secondary text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed line-clamp-6 sm:line-clamp-none">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border/30 pt-4">
                  <p className="text-foreground font-medium text-sm">{testimonial.author}</p>
                  <p className="text-text-muted text-xs">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Integrated CTA */}
          <div className="mt-14 pt-10 border-t border-border/20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a 
                href="#contact" 
                className="btn-cta group flex items-center gap-2"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              
              <span className="text-sm font-medium text-text-muted">or</span>
              
              <a 
                href="tel:2143072995"
                className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-text-secondary hover:text-foreground hover:border-border-subtle hover:bg-surface-elevated transition-colors font-medium text-sm"
              >
                <Phone className="h-4 w-4" />
                (214) 307-2995
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTestimonials;
