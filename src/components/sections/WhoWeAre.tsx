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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={dougHeadshot} 
                alt="Doug Bryson, Founder of Dialed-In Web"
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-foreground font-bold text-xl">Doug Bryson</p>
                <p className="text-text-secondary">Founder, Dialed-In Web</p>
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
