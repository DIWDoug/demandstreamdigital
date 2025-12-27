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
    <section className="py-16 lg:py-20 section-light relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Fanned Book Stack */}
          <div className="relative flex justify-center items-center min-h-[350px] lg:min-h-[420px]">
            {/* Fanned ebook mockup */}
            <div className="relative" style={{ perspective: '1000px' }}>
              {/* Back book - most rotated */}
              <div 
                className="absolute -left-16 lg:-left-24 top-8 w-40 md:w-48 lg:w-56 -rotate-12 opacity-50"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={bookCover} 
                    alt="The Local Growth Engine ebook" 
                    className="w-full"
                    style={{ 
                      filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.4))',
                      mixBlendMode: 'multiply'
                    }}
                  />
                </div>
              </div>
              {/* Middle-back book */}
              <div 
                className="absolute -left-8 lg:-left-12 top-4 w-40 md:w-48 lg:w-56 -rotate-6 opacity-70"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={bookCover} 
                    alt="The Local Growth Engine ebook" 
                    className="w-full"
                    style={{ 
                      filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.4))',
                      mixBlendMode: 'multiply'
                    }}
                  />
                </div>
              </div>
              {/* Middle-front book */}
              <div 
                className="absolute left-1 lg:left-2 top-2 w-40 md:w-48 lg:w-56 rotate-0 opacity-85"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={bookCover} 
                    alt="The Local Growth Engine ebook" 
                    className="w-full"
                    style={{ 
                      filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.35))',
                      mixBlendMode: 'multiply'
                    }}
                  />
                </div>
              </div>
              {/* Front book - main focus */}
              <div 
                className="relative left-12 lg:left-20 w-44 md:w-52 lg:w-64 rotate-6 z-10"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={bookCover} 
                    alt="The Local Growth Engine ebook" 
                    className="w-full"
                    style={{ 
                      filter: 'drop-shadow(0 35px 60px rgba(0,0,0,0.5))',
                      mixBlendMode: 'multiply'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-gray-500 text-base mb-1">Discover How To</p>
            <h2 className="text-gray-900 mb-3" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>
              Scale Your Agency<br />
              <span className="text-[hsl(76,42%,35%)]">Without the Chaos</span>
            </h2>
            
            <div className="w-12 h-0.5 bg-[hsl(76,42%,41%)] mb-5" />

            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              The Framework for White-Label Local Marketing That Actually Works
            </h3>
            
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              If you're an agency owner looking to add local marketing services without hiring specialists 
              or burning through freelancers, you've found the right resource. The Local Growth Engine 
              is the methodology behind $2M+ in retainer revenue generated for our agency partners.
            </p>

            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Inside, you'll discover the three-layer system we use to deliver consistent results across 
              Local SEO, Google Maps, paid media, and reputation management. All white-labeled and 
              built for scale.
            </p>

            {/* Email signup or CTA */}
            {!isSubmitted ? (
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="flex-1 w-full sm:w-auto">
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[hsl(76,42%,41%)]/50 focus:border-[hsl(76,42%,41%)] transition-all"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-cta flex items-center justify-center gap-2 whitespace-nowrap"
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
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3 p-4 rounded-lg bg-[hsl(76,42%,41%)]/10 border border-[hsl(76,42%,41%)]/20 max-w-md">
                <CheckCircle2 className="h-5 w-5 text-[hsl(76,42%,35%)] flex-shrink-0" />
                <p className="text-gray-900">
                  You're on the list! We'll be in touch soon.
                </p>
              </div>
            )}

            <p className="text-gray-500 text-sm mt-4">
              Coming soon. Join the waitlist to get notified + exclusive bonus content.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalGrowthEngine;
