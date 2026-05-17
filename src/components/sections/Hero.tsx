import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: "#0D1B2A" }}>

      {/* Fine grid texture overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.04] z-0"
        style={{
          backgroundImage: `linear-gradient(hsl(213 64% 16% / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(213 64% 16% / 0.3) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }} />


      {/* Animated flowing accent lines */}
      <svg
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        aria-hidden="true">

        {/* Primary flowing line */}
        <path
          d="M-100,320 C150,280 350,420 600,350 S950,220 1200,300 S1400,400 1540,340"
          fill="none"
          stroke="hsl(210 55% 50% / 0.12)"
          strokeWidth="2"
          strokeLinecap="round">

          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 40,15; 0,0; -30,-10; 0,0"
            dur="25s"
            repeatCount="indefinite" />

        </path>
        {/* Secondary flowing line — offset */}
        <path
          d="M-50,360 C200,320 400,460 650,380 S1000,250 1250,340 S1450,440 1540,380"
          fill="none"
          stroke="hsl(210 55% 50% / 0.07)"
          strokeWidth="1.5"
          strokeLinecap="round">

          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; -35,20; 0,0; 25,-15; 0,0"
            dur="30s"
            repeatCount="indefinite" />

        </path>
        {/* Lower accent line */}
        <path
          d="M-80,580 C200,540 450,660 700,590 S1050,470 1300,550 S1450,630 1540,580"
          fill="none"
          stroke="hsl(210 55% 50% / 0.08)"
          strokeWidth="1.5"
          strokeLinecap="round">

          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 30,-12; 0,0; -25,18; 0,0"
            dur="35s"
            repeatCount="indefinite" />

        </path>
        {/* Thin whisper line */}
        <path
          d="M-60,400 C180,370 380,490 630,420 S980,310 1230,380 S1430,470 1540,420"
          fill="none"
          stroke="hsl(210 55% 50% / 0.05)"
          strokeWidth="1"
          strokeLinecap="round">

          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; -20,10; 0,0; 35,-8; 0,0"
            dur="40s"
            repeatCount="indefinite" />

        </path>
      </svg>
      <div className="container mx-auto px-6 lg:px-8 pt-28 pb-20 md:pt-40 md:pb-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left column — Headline, copy & website input */}
          <div className="max-w-xl">
            <h1
              className="text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-sans font-bold mb-4 animate-fade-in-up text-white"
              style={{ lineHeight: "1.1" }}>Plumbing & HVAC Digital Marketing & AI Automation Company


            </h1>
            <p
              className="text-xl md:text-2xl lg:text-3xl font-sans font-semibold text-cta mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.05s" }}>

              Built to Drive More Booked Service Calls
            </p>

            <div className="lg:hidden mb-6 animate-fade-in-up" style={{ animationDelay: "0.08s" }}>
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/uEZw3rKc3SE?rel=0"
                  title="DemandStream Digital"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            <p
              className="text-lg text-white/80 leading-relaxed mb-4 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}>We help plumbing and HVAC companies generate more booked service calls. SEO, Google Maps, paid advertising, Local Services Ads, email marketing, AI Automation and website design, built as one connected system.


            </p>
            <p
              className="text-sm text-white/60 font-medium mb-10 animate-fade-in-up"
              style={{ animationDelay: "0.15s" }}>

              No generic home service marketing. Built for plumbing and HVAC companies only.
            </p>

            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}>
              <button
                type="button"
                onClick={() => navigate("/grow-qualifier")}
                className="btn-cta group whitespace-nowrap px-6 py-4 inline-flex items-center">
                Schedule a Growth Audit
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-xs text-white/50 mt-3">One plumbing client and one HVAC client per market.</p>
            </div>

          </div>

          {/* Right column — Video placeholder */}
          <div className="hidden animate-fade-in-up lg:block lg:scale-[1.08] lg:origin-right" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-video overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/uEZw3rKc3SE?rel=0"
                title="DemandStream Digital"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>

    </section>);

};

export default Hero;
