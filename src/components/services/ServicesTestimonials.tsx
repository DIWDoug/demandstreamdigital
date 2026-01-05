import { useState } from "react";
import { Quote, ArrowRight, Phone, Play } from "lucide-react";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";
import YouTubeModal from "@/components/ui/youtube-modal";

const testimonials = [
  {
    quote: "I've owned an ad agency in Dallas for a decade and partnered with Doug's team for seven years. They're second to none: incredibly articulate when it comes to campaign structure, from paid advertising to organic SEO to answer engine optimization. Extremely competitive pricing for the level of wisdom and responsiveness you receive. They will make your company money.",
    author: "Cole",
    role: "Digital Marketing Agency Owner, Dallas",
    tenure: "10 Years in Business, 7 Years Partner",
    services: ["Local SEO", "GBP SEO", "National SEO", "Authority Building", "Paid Media", "AEO"]
  },
  {
    quote: "Our challenge was executing real campaigns at tight price points without sacrificing delivery. We needed flexibility, not rigid packages. The ability to design campaigns around franchise budgets, while still maintaining standards and leveraging AI to stay efficient, allowed us to deliver consistently without blowing margins.",
    author: "Trevor Anderson",
    role: "Founder & CEO, Anderson Collaborative",
    tenure: "5 Years Partner",
    services: ["Local SEO", "GBP SEO", "National SEO", "Authority Building", "Paid Media", "AEO"]
  }
];

const videoTestimonials = [
  { id: "DlOyjDWaCZo", title: "Cole - Dallas Agency Owner" },
  { id: "dR2Yxbldi1Q", title: "Trevor - Agency Partner" },
  { id: "i66XV1on6pM", title: "Jeremy - Florida Agency Owner" }
];

const ServicesTestimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState<{ id: string; title: string } | null>(null);

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

          {/* Video Testimonials - Clickable Thumbnails */}
          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {videoTestimonials.map((video, index) => (
              <button 
                key={index}
                onClick={() => setSelectedVideo(video)}
                className="relative aspect-video rounded-xl overflow-hidden border border-border bg-surface-elevated shadow-lg group cursor-pointer"
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={`${video.title} - White Label Agency Partner Video Testimonial`}
                  title={`${video.title} | Dialed-In Web Partner Review`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <Play className="h-7 w-7 text-cta ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-medium">{video.title}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Quote Cards - 2 columns, bigger */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-surface-elevated border border-border/50 rounded-xl p-6 lg:p-8"
              >
                <Quote className="h-8 w-8 lg:h-10 lg:w-10 text-accent-blue/30 mb-4" />
                <p className="text-text-secondary text-sm lg:text-base mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border/30 pt-5 mb-4">
                  <p className="text-foreground font-medium text-base">{testimonial.author}</p>
                  <p className="text-text-muted text-sm">{testimonial.role}</p>
                  <p className="text-accent-blue text-sm mt-1">{testimonial.tenure}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {testimonial.services.slice(0, 4).map((service, i) => (
                    <span key={i} className="px-2.5 py-1 bg-accent-blue/10 text-accent-blue text-xs rounded-full">
                      {service}
                    </span>
                  ))}
                  {testimonial.services.length > 4 && (
                    <span className="px-2.5 py-1 bg-surface-dark text-text-muted text-xs rounded-full">
                      +{testimonial.services.length - 4}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Integrated CTA */}
          <div className="mt-14 pt-10 border-t border-border/20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a 
                href="/contact" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta group flex items-center gap-2"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              
              <span className="text-sm font-medium text-text-muted">or</span>
              
              <a 
                href={PHONE_HREF}
                className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-text-secondary hover:text-foreground hover:border-border-subtle hover:bg-surface-elevated transition-colors font-medium text-sm"
              >
                <Phone className="h-4 w-4" />
                {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Modal */}
      {selectedVideo && (
        <YouTubeModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoId={selectedVideo.id}
          title={selectedVideo.title}
        />
      )}
    </section>
  );
};

export default ServicesTestimonials;
