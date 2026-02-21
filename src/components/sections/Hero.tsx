import { useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import YouTubeModal from "@/components/ui/youtube-modal";

const Hero = () => {
  const [website, setWebsite] = useState("");
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/contact?website=${encodeURIComponent(website)}`);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#f9f9f9]">
      {/* Subtle dot pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
      {/* Diagonal line texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(var(--foreground)) 35px, hsl(var(--foreground)) 36px)`,
        }}
      />
      {/* Subtle gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#0F2742]/[0.02] to-transparent" />

      <div className="container mx-auto px-6 lg:px-8 pt-28 pb-20 md:pt-40 md:pb-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left column — Headline, copy & website input */}
          <div className="max-w-xl">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold mb-6 animate-fade-in-up text-gray-900"
              style={{ lineHeight: "1.1" }}
            >
              Digital Marketing for{" "}
              <span className="text-cta">
                Plumbing & HVAC Companies
              </span>
            </h1>

            <p
              className="text-lg text-gray-600 leading-relaxed mb-10 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              SEO, Google Ads, reputation management, and AI-powered lead generation built specifically for plumbing and HVAC contractors. More calls, more booked jobs, all year round.
            </p>

            {/* Website input + CTA */}
            <form 
              onSubmit={handleSubmit} 
              className="flex flex-col sm:flex-row gap-3 max-w-lg animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <input
                type="text"
                placeholder="Enter your website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="flex-1 px-5 py-4 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-cta focus:ring-1 focus:ring-cta transition-all text-base shadow-sm"
              />
              <button
                type="submit"
                className="btn-cta group whitespace-nowrap px-6 py-4"
              >
                Get a Proposal
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          {/* Right column — Video placeholder */}
          <div className="animate-fade-in-up lg:pl-4" style={{ animationDelay: "0.2s" }}>
            <div 
              className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 cursor-pointer group shadow-2xl"
              onClick={() => setIsVideoOpen(true)}
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center gap-4">
                <div className="w-20 h-20 rounded-full bg-cta flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cta/30">
                  <Play className="h-8 w-8 text-white fill-white ml-1" />
                </div>
                <span className="text-white font-semibold text-sm uppercase tracking-wider">Watch Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal - replace VIDEO_ID_HERE with actual YouTube ID later */}
      <YouTubeModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoId="VIDEO_ID_HERE"
        title="ServiceForge Digital - Get Better Leads"
      />
    </section>
  );
};

export default Hero;
