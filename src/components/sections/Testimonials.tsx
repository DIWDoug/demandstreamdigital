import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, ArrowRight, Play } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
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
  },
  {
    quote: "We needed a partner we could depend on to build customized strategies for almost every client that came through the door. Our business is rooted in web design, and generic marketing packages were never going to work. Being able to tailor execution around each site and market made a measurable difference in client retention. Most clients stayed at least a year, with several continuing for multiple cycles.",
    author: "Jeremy", 
    role: "Digital Marketing Agency Owner, Florida",
    tenure: "5 Years Partner",
    services: ["Local SEO", "PPC", "Authority Building", "GBP SEO"]
  }
];

const videoTestimonials = [
  { id: "DlOyjDWaCZo", title: "Cole - Dallas Agency Owner" },
  { id: "dR2Yxbldi1Q", title: "Trevor - Agency Partner" },
  { id: "i66XV1on6pM", title: "Jeremy - Florida Agency Owner" }
];

const Testimonials = () => {
  const sectionRef = useScrollReveal();
  const [selectedVideo, setSelectedVideo] = useState<{ id: string; title: string } | null>(null);
  
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
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {videoTestimonials.map((video, index) => (
            <div 
              key={index} 
              className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 bg-slate-900 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              onClick={() => setSelectedVideo(video)}
            >
              {/* YouTube thumbnail */}
              <img 
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Play overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="h-7 w-7 text-slate-900 ml-1" fill="currentColor" />
                </div>
              </div>
              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-sm font-medium">{video.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white border-slate-200 hover:border-accent-blue/30 transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <Quote className="h-8 w-8 text-accent-blue/40 mb-4" />
                <p className="text-slate-600 text-sm mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-slate-200 pt-4 mb-3">
                  <p className="text-slate-900 font-medium">{testimonial.author}</p>
                  <p className="text-slate-500 text-sm">{testimonial.role}</p>
                  <p className="text-accent-blue text-xs mt-1">{testimonial.tenure}</p>
                </div>
                <div className="flex flex-wrap gap-1">
                  {testimonial.services.slice(0, 4).map((service, i) => (
                    <span key={i} className="px-2 py-0.5 bg-accent-blue/10 text-accent-blue text-xs rounded-full">
                      {service}
                    </span>
                  ))}
                  {testimonial.services.length > 4 && (
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-xs rounded-full">
                      +{testimonial.services.length - 4}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link 
            to="/testimonials" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-blue/80 font-medium transition-colors group"
          >
            View All Testimonials
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
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

export default Testimonials;
