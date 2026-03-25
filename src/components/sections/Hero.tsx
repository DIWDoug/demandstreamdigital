import { useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import YouTubeModal from "@/components/ui/youtube-modal";
import heroBgTrade from "@/assets/hero-bg-trade.jpg";

const Hero = () => {
  const [website, setWebsite] = useState("");
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/contact?website=${encodeURIComponent(website)}`);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-surface-dark">
      {/* Background photo — same subtle treatment as About page */}
      <img
        src={heroBgTrade}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
        loading="eager"
        width={1920}
        height={1080}
      />
      {/* Dark overlay — matches About page bg-surface-dark/90 */}
      <div className="absolute inset-0 bg-surface-dark/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/80 to-transparent" />

      {/* Subtle pulse blobs for depth */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <div
          className="absolute rounded-full blur-[120px] animate-pulse"
          style={{
            width: '55%', height: '60%', top: '-10%', left: '-5%',
            background: 'radial-gradient(ellipse at center, hsla(210, 50%, 60%, 0.5) 0%, transparent 70%)',
            animationDuration: '5s'
          }} />
        <div
          className="absolute rounded-full blur-[100px] animate-pulse"
          style={{
            width: '40%', height: '45%', bottom: '-10%', right: '-5%',
            background: 'radial-gradient(ellipse at center, hsla(0, 60%, 45%, 0.3) 0%, transparent 70%)',
            animationDuration: '7s', animationDelay: '2s'
          }} />
      </div>

      {/* Fine grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(213 64% 60% / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(213 64% 60% / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

      <div className="container mx-auto px-6 lg:px-8 pt-28 pb-20 md:pt-40 md:pb-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left column */}
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-blue mb-4 animate-fade-in-up">
              Plumbing & HVAC Marketing
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold mb-4 animate-fade-in-up text-foreground"
              style={{ lineHeight: "1.1", animationDelay: "0.05s" }}>
              Plumbing & HVAC Digital Marketing & AI Automation Company
            </h1>
            <p
              className="text-xl md:text-2xl lg:text-3xl font-sans font-semibold text-cta mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}>
              Built to Drive More Booked Service Calls
            </p>

            <p
              className="text-base text-text-secondary leading-relaxed mb-4 animate-fade-in-up"
              style={{ animationDelay: "0.12s" }}>
              We help plumbing and HVAC companies generate more booked service calls. SEO, Google Maps, paid advertising, Local Services Ads, email marketing, AI Automation and website design, built as one connected system.
            </p>
            <p
              className="text-sm text-text-muted font-medium mb-10 animate-fade-in-up"
              style={{ animationDelay: "0.15s" }}>
              No generic home service marketing. Built for plumbing and HVAC companies only.
            </p>

            {/* Website input + CTA */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}>
              <input
                type="text"
                placeholder="Enter your website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="flex-1 px-5 py-4 rounded-lg bg-surface-elevated/80 border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:border-cta focus:ring-1 focus:ring-cta transition-all text-base" />
              <button
                type="submit"
                className="btn-cta group whitespace-nowrap px-6 py-4">
                Get Your Free Growth Audit
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          {/* Right column — Video */}
          <div className="animate-fade-in-up lg:pl-4" style={{ animationDelay: "0.2s" }}>
            <div
              className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group shadow-2xl border border-border/30"
              onClick={() => setIsVideoOpen(true)}>
              <div className="absolute inset-0 bg-gradient-to-br from-surface-elevated to-surface-dark flex flex-col items-center justify-center gap-4">
                <div className="w-20 h-20 rounded-full bg-cta flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cta/30">
                  <Play className="h-8 w-8 text-white fill-white ml-1" />
                </div>
                <span className="text-foreground font-semibold text-sm uppercase tracking-wider">Watch Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <YouTubeModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoId="VIDEO_ID_HERE"
        title="Demand Stream Digital - Get Better Leads" />

    </section>
  );
};

export default Hero;
