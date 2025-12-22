import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import bookCover from "@/assets/local-growth-engine-book-v2.png";

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
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Book Cover Image */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Book image */}
              <img 
                src={bookCover} 
                alt="The Local Growth Engine book" 
                className="w-72 md:w-80 lg:w-96 drop-shadow-2xl relative z-10"
              />
              
              {/* Author info overlay - positioned at bottom */}
              <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-background/90 to-transparent pt-16 pb-4 px-4">
                <p className="text-xl font-semibold text-foreground">Your Name</p>
                <p className="text-text-secondary text-sm">Founder & CEO</p>
                <div className="w-12 h-1 bg-cta mt-2" />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-text-secondary text-lg mb-2">Discover How To</p>
            <h2 className="text-foreground mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Scale Your Agency<br />
              <span className="text-cta">Without the Chaos</span>
            </h2>
            
            <div className="w-16 h-1 bg-cta mb-8" />

            <h3 className="text-xl font-semibold text-foreground mb-4">
              The Framework for White-Label Local Marketing That Actually Works
            </h3>
            
            <p className="text-text-secondary mb-6">
              If you're an agency owner looking to add local marketing services without hiring specialists 
              or burning through freelancers, you've found the right resource. The Local Growth Engine 
              is the methodology behind $2M+ in retainer revenue generated for our agency partners.
            </p>

            <p className="text-text-secondary mb-8">
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
                      className="flex-1 px-4 py-3 rounded-lg bg-surface-elevated border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-cta/50 focus:border-cta transition-all"
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
              <div className="flex items-center gap-3 p-4 rounded-lg bg-cta/10 border border-cta/20 max-w-md">
                <CheckCircle2 className="h-5 w-5 text-cta flex-shrink-0" />
                <p className="text-foreground">
                  You're on the list! We'll be in touch soon.
                </p>
              </div>
            )}

            <p className="text-text-muted text-sm mt-4">
              Coming soon. Join the waitlist to get notified + exclusive bonus content.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalGrowthEngine;
