import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import bookCover from "@/assets/local-growth-engine-cover.png";
import authorCutout from "@/assets/doug-bryson-cutout.png";

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
    <section className="py-24 lg:py-32 section-light relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Book Stack with Author in Front - matching reference layout */}
          <div className="relative flex justify-center lg:justify-start min-h-[480px] lg:min-h-[580px]">
            {/* Fanned book stack behind author */}
            <div className="absolute left-4 lg:left-8 top-8 lg:top-12">
              {/* Back book - most rotated */}
              <img 
                src={bookCover} 
                alt="The Local Growth Engine book" 
                className="absolute left-0 top-0 w-32 md:w-40 lg:w-48 drop-shadow-lg -rotate-12 opacity-60"
              />
              {/* Middle book */}
              <img 
                src={bookCover} 
                alt="The Local Growth Engine book" 
                className="absolute left-10 top-2 w-32 md:w-40 lg:w-48 drop-shadow-lg -rotate-4 opacity-80"
              />
              {/* Front book - slight rotation */}
              <img 
                src={bookCover} 
                alt="The Local Growth Engine book" 
                className="absolute left-20 top-4 w-32 md:w-40 lg:w-48 drop-shadow-xl rotate-6"
              />
            </div>
            
            {/* Author cutout overlapping books from the right */}
            <div className="absolute right-4 lg:right-8 bottom-16 z-10">
              <img 
                src={authorCutout} 
                alt="Doug Bryson" 
                className="w-48 md:w-56 lg:w-72 object-contain drop-shadow-2xl"
              />
            </div>
            
            {/* Author info at bottom left */}
            <div className="absolute bottom-0 left-4 lg:left-8 z-20">
              <p className="text-xl lg:text-2xl font-semibold text-gray-900">Doug Bryson</p>
              <p className="text-gray-600 text-sm">Founder & CEO</p>
              <div className="w-16 h-1 bg-[hsl(76,42%,41%)] mt-2" />
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-gray-500 text-lg mb-2">Discover How To</p>
            <h2 className="text-gray-900 mb-4" style={{ fontSize: "clamp(2.25rem, 4.2vw, 4.25rem)" }}>
              Scale Your Agency<br />
              <span className="text-[hsl(76,42%,35%)]">Without the Chaos</span>
            </h2>
            
            <div className="w-16 h-1 bg-[hsl(76,42%,41%)] mb-8" />

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              The Framework for White-Label Local Marketing That Actually Works
            </h3>
            
            <p className="text-gray-600 mb-6">
              If you're an agency owner looking to add local marketing services without hiring specialists 
              or burning through freelancers, you've found the right resource. The Local Growth Engine 
              is the methodology behind $2M+ in retainer revenue generated for our agency partners.
            </p>

            <p className="text-gray-600 mb-8">
              Inside, you'll discover the three-layer system we use to deliver consistent results across 
              Local SEO, Google Maps, paid media, and reputation management — all white-labeled and 
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
