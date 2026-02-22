import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import StreamTexture from "@/components/StreamTexture";
import dougHeadshot from "@/assets/doug-bryson-headshot.jpeg";

const FounderEEAT = () => {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[hsl(var(--navy))] reveal-section relative overflow-hidden">
      <StreamTexture variant="dark" opacity={0.06} />
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Top heading */}
        <div className="text-center mb-14 max-w-4xl mx-auto">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
            An Honest Word From the Founder
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Most Plumbing & HVAC Companies Don't Lose Customers Because of Results
          </h2>
        </div>

        {/* Two-column: headshot left, letter right */}
        <div className="grid md:grid-cols-[minmax(260px,1fr)_2fr] gap-10 lg:gap-16 max-w-5xl mx-auto items-start">
          {/* Left: Headshot card */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 w-full max-w-[320px]">
              <img
                src={dougHeadshot}
                alt="Doug Bryson, Founder of Demand Stream Digital"
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 pt-12">
                <p className="text-white font-bold text-lg">Doug Bryson</p>
                <p className="text-white/70 text-sm">Founder, Demand Stream Digital</p>
              </div>
            </div>
          </div>

          {/* Right: Letter */}
          <div>
            <span className="text-primary text-5xl font-serif leading-none block mb-4">"</span>
            <div className="text-white/80 leading-relaxed space-y-4 text-[15px] lg:text-base">
              <p className="text-white font-medium">I've been in digital marketing since 2011.</p>
              <p>I've watched plumbing and HVAC companies hire agencies that sold big promises and delivered cookie-cutter packages. Sometimes it worked. Sometimes it was a disaster. They never knew what they'd get until the report landed in their inbox.</p>
              <p>I watched other business owners do the same thing. Buy a "package." Hope it works. When it doesn't, move on. Repeat.</p>
              <p className="text-white font-medium">Then I realized the obvious thing:</p>
              <p className="text-white">Every market is different. Every company is different. Cookie-cutter campaigns forced onto unique situations is a race to the bottom.</p>
              <p className="text-white font-medium">So I built something different.</p>
              <p>Not as a visionary trying to scale. As a marketer who learned by doing the work. I've been the one in the trenches — building campaigns, fixing what broke, understanding why things actually rank.</p>
              <p>This experience now shapes how we scope, execute, and communicate every engagement.</p>
              <p className="text-white font-medium">Work you can understand without jargon. Execution scoped to your actual market. No crossed fingers required.</p>
              <p>If that sounds like what you've been looking for, let's talk.</p>
              <p className="text-white font-semibold mt-6">— Doug</p>
            </div>
            <Link
              to="/contact"
              className="btn-cta group inline-flex items-center gap-2 mt-8"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderEEAT;