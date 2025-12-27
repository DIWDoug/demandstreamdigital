import dougHeadshot from "@/assets/doug-bryson-headshot.jpeg";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const WhoWeAre = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Content */}
          <div>
            <p className="text-sm text-cta uppercase tracking-widest font-medium mb-4">
              A Message From Doug
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              You Didn't Start Your Agency to Feel This Stuck
            </h2>
            
            {/* Personal Letter Style Content */}
            <div className="relative space-y-4 mb-8 font-handwriting text-base md:text-lg leading-relaxed text-text-secondary">
              {/* Opening quote */}
              <span className="absolute -left-2 -top-4 text-6xl text-cta/40 font-serif leading-none">"</span>
              
              <p className="pl-6">
                You wanted freedom. You wanted to build something of your own. You wanted to help local businesses grow while finally getting off the{" "}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="underline decoration-dotted cursor-help">hamster wheel</span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>No actual hamsters were harmed in the making of this agency. 🐹</p>
                  </TooltipContent>
                </Tooltip>
                . I get it. That was me too.
              </p>
              
              <p className="pl-6">
                <span className="text-foreground font-semibold">But then reality hit.</span> The freelancers you hired{" "}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="underline decoration-dotted cursor-help">ghosted you mid-project</span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>The only ghosts we like are in Pac-Man. 👻</p>
                  </TooltipContent>
                </Tooltip>
                . The 'experts' you trusted delivered work you had to redo yourself at 2am. And every new client felt like a gamble because you never knew if your team would actually come through.
              </p>
              
              <p className="pl-6">
                You started spending more time managing chaos than growing your business. More time apologizing to clients than celebrating wins. More time wondering if you made the right choice than actually enjoying the work.
              </p>
              
              <p className="pl-6">
                And the worst part? You felt alone. Like every other agency owner had it figured out except you.
              </p>
              
              <p className="pl-6">
                <span className="text-foreground font-semibold">That's exactly why I built Dialed-In Web.</span> To be the partner I wished I had. The one who actually delivers. Who{" "}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="underline decoration-dotted cursor-help">answers the phone</span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Yes, with a human voice and everything. Wild, right? 📞</p>
                  </TooltipContent>
                </Tooltip>
                . Who treats your clients like my own, because your reputation is on the line, and I don't take that lightly.<span className="text-6xl text-cta/40 font-serif leading-none align-bottom ml-1">"</span>
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              <img 
                src={dougHeadshot} 
                alt="Doug Bryson, Founder of Dialed-In Web"
                className="w-full h-auto object-cover rounded-2xl"
              />
              {/* Aviator sunglasses overlay on hover */}
              <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
                <svg 
                  viewBox="0 0 120 45" 
                  className="w-[35%] mt-[22%] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 -translate-y-2 drop-shadow-lg"
                >
                  {/* Left aviator lens - teardrop shape */}
                  <path d="M 8 18 Q 8 8 20 6 Q 38 4 48 10 Q 55 16 54 26 Q 52 38 40 40 Q 25 42 14 36 Q 8 30 8 18 Z" fill="#1a1a1a" stroke="#d4a853" strokeWidth="2"/>
                  {/* Right aviator lens - teardrop shape */}
                  <path d="M 112 18 Q 112 8 100 6 Q 82 4 72 10 Q 65 16 66 26 Q 68 38 80 40 Q 95 42 106 36 Q 112 30 112 18 Z" fill="#1a1a1a" stroke="#d4a853" strokeWidth="2"/>
                  {/* Bridge */}
                  <path d="M 54 16 Q 60 12 66 16" stroke="#d4a853" strokeWidth="2.5" fill="none"/>
                  {/* Left temple */}
                  <line x1="8" y1="14" x2="0" y2="10" stroke="#d4a853" strokeWidth="2.5" strokeLinecap="round"/>
                  {/* Right temple */}
                  <line x1="112" y1="14" x2="120" y2="10" stroke="#d4a853" strokeWidth="2.5" strokeLinecap="round"/>
                  {/* Lens gradient/shine */}
                  <ellipse cx="28" cy="18" rx="10" ry="6" fill="rgba(255,255,255,0.08)"/>
                  <ellipse cx="92" cy="18" rx="10" ry="6" fill="rgba(255,255,255,0.08)"/>
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-foreground font-bold text-xl">Doug Bryson</p>
                <p className="text-text-secondary group-hover:hidden">Founder, Dialed-In Web</p>
                <p className="text-text-secondary hidden group-hover:block">😎 Deal with it.</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-cta/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent-blue/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 -right-4 w-2 h-24 bg-gradient-to-b from-cta to-accent-blue rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
