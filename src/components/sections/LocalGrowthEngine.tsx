import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import bookCover from "@/assets/local-growth-engine-cover.png";

const LocalGrowthEngine = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate submission - replace with actual form handler
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    toast({
      title: "You're on the list!",
      description: "We'll notify you when The Local Growth Engine is available.",
    });
  };

  return (
    <section className="relative z-10">
      {/* Dark background - shorter to allow card to bleed */}
      <div className="bg-surface-dark pt-32 pb-32 lg:pt-40 lg:pb-40">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Bleed-over card with negative margins to overlap sections */}
          <div 
            className="relative rounded-3xl overflow-hidden -mt-16 -mb-24 lg:-mt-20 lg:-mb-32"
            style={{
              background: 'linear-gradient(180deg, #F8F7F4 0%, #EFEDE8 100%)',
              boxShadow: '0 25px 80px -20px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)'
            }}
          >
            {/* Subtle noise texture */}
            <div 
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
              }}
            />
            
            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Left: Fanned Book Stack */}
                <div className="relative flex justify-center items-center min-h-[320px] lg:min-h-[400px]">
                  <div className="relative" style={{ perspective: '1000px' }}>
                    {/* Back book - most rotated */}
                    <div 
                      className="absolute -left-14 lg:-left-20 top-6 w-36 md:w-44 lg:w-52 -rotate-12 opacity-40"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <img 
                        src={bookCover} 
                        alt="The Local Growth Engine ebook" 
                        className="w-full rounded-lg"
                        style={{ 
                          filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))',
                        }}
                      />
                    </div>
                    {/* Middle book */}
                    <div 
                      className="absolute -left-6 lg:-left-8 top-3 w-36 md:w-44 lg:w-52 -rotate-6 opacity-65"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <img 
                        src={bookCover} 
                        alt="The Local Growth Engine ebook" 
                        className="w-full rounded-lg"
                        style={{ 
                          filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))',
                        }}
                      />
                    </div>
                    {/* Front book - main focus */}
                    <div 
                      className="relative left-8 lg:left-14 w-40 md:w-48 lg:w-60 rotate-6 z-10"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <img 
                        src={bookCover} 
                        alt="The Local Growth Engine ebook" 
                        className="w-full rounded-lg"
                        style={{ 
                          filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.4))',
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider font-medium mb-2">
                    Coming Soon
                  </p>
                  <h2 
                    className="text-gray-900 font-semibold mb-4 leading-tight"
                    style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
                  >
                    The Local Growth Engine
                  </h2>
                  
                  <div className="w-16 h-1 bg-[hsl(76,42%,41%)] rounded-full mb-6" />

                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    The Framework for White-Label Local Marketing That Actually Works
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    If you're an agency owner looking to add local marketing services without hiring specialists 
                    or burning through freelancers, you've found the right resource.
                  </p>

                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Inside, you'll discover the three-layer system we use to deliver consistent results across 
                    Local SEO, Google Maps, paid media, and reputation management—all white-labeled and 
                    built for scale.
                  </p>

                  {/* Email signup */}
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="flex-1 px-4 py-3 rounded-lg bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[hsl(76,42%,41%)] transition-colors"
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                      >
                        {isSubmitting ? (
                          "Joining..."
                        ) : (
                          <>
                            Get Early Access
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </form>
                  ) : (
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-[hsl(76,42%,41%)]/15 border border-[hsl(76,42%,41%)]/30 max-w-md">
                      <CheckCircle2 className="h-5 w-5 text-[hsl(76,42%,35%)] flex-shrink-0" />
                      <p className="text-gray-900 font-medium">
                        You're on the list! We'll be in touch soon.
                      </p>
                    </div>
                  )}

                  <p className="text-gray-500 text-sm mt-4">
                    Join the waitlist for exclusive early access + bonus content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalGrowthEngine;