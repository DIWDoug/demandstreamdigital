import { useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import YouTubeModal from "@/components/ui/youtube-modal";
import TopoTexture from "@/components/TopoTexture";

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
      <TopoTexture opacity={0.12} />

      {/* Visible gradient color washes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute rounded-full blur-[120px] animate-stream-drift"
          style={{
            width: '55%',
            height: '60%',
            top: '-15%',
            left: '-5%',
            background: 'radial-gradient(ellipse at center, hsla(210, 50%, 72%, 0.35) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute rounded-full blur-[100px] animate-stream-drift"
          style={{
            width: '45%',
            height: '50%',
            top: '30%',
            right: '-10%',
            background: 'radial-gradient(ellipse at center, hsla(200, 40%, 76%, 0.25) 0%, transparent 70%)',
            animationDelay: '-25s',
            animationDirection: 'reverse',
          }}
        />
        <div
          className="absolute rounded-full blur-[100px] animate-stream-drift"
          style={{
            width: '40%',
            height: '40%',
            bottom: '-10%',
            left: '30%',
            background: 'radial-gradient(ellipse at center, hsla(220, 35%, 78%, 0.2) 0%, transparent 70%)',
            animationDelay: '-45s',
          }}
        />
      </div>

      {/* Fine grid texture overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.04] z-0"
        style={{
          backgroundImage: `linear-gradient(hsl(213 64% 16% / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(213 64% 16% / 0.3) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Animated flowing accent lines */}
      <svg
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Primary flowing line */}
        <path
          d="M-100,320 C150,280 350,420 600,350 S950,220 1200,300 S1400,400 1540,340"
          fill="none"
          stroke="hsl(210 55% 50% / 0.12)"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 40,15; 0,0; -30,-10; 0,0"
            dur="25s"
            repeatCount="indefinite"
          />
        </path>
        {/* Secondary flowing line — offset */}
        <path
          d="M-50,360 C200,320 400,460 650,380 S1000,250 1250,340 S1450,440 1540,380"
          fill="none"
          stroke="hsl(210 55% 50% / 0.07)"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; -35,20; 0,0; 25,-15; 0,0"
            dur="30s"
            repeatCount="indefinite"
          />
        </path>
        {/* Lower accent line */}
        <path
          d="M-80,580 C200,540 450,660 700,590 S1050,470 1300,550 S1450,630 1540,580"
          fill="none"
          stroke="hsl(210 55% 50% / 0.08)"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 30,-12; 0,0; -25,18; 0,0"
            dur="35s"
            repeatCount="indefinite"
          />
        </path>
        {/* Thin whisper line */}
        <path
          d="M-60,400 C180,370 380,490 630,420 S980,310 1230,380 S1430,470 1540,420"
          fill="none"
          stroke="hsl(210 55% 50% / 0.05)"
          strokeWidth="1"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; -20,10; 0,0; 35,-8; 0,0"
            dur="40s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
      <div className="container mx-auto px-6 lg:px-8 pt-28 pb-20 md:pt-40 md:pb-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left column — Headline, copy & website input */}
          <div className="max-w-xl">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold mb-6 animate-fade-in-up text-gray-900"
              style={{ lineHeight: "1.1" }}
            >
              Plumbing & HVAC Marketing Company Focused on{" "}
              <span className="text-cta">
                More Booked Service Calls
              </span>
            </h1>

            <p
              className="text-lg text-gray-600 leading-relaxed mb-4 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              We help plumbing and HVAC companies generate more booked jobs through SEO, Google Maps optimization, and paid advertising, engineered around dispatch capacity, seasonality, and technician utilization.
            </p>
            <p
              className="text-sm text-gray-500 font-medium mb-10 animate-fade-in-up"
              style={{ animationDelay: "0.15s" }}
            >
              Built exclusively for plumbing and HVAC contractors, not generic home services.
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
        title="Demand Stream Digital - Get Better Leads"
      />
    </section>
  );
};

export default Hero;
