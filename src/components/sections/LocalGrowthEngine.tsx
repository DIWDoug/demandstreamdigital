import { useState } from "react";
import { BookOpen, ArrowRight, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

  const frameworkPillars = [
    {
      title: "Visibility Layer",
      description: "Technical foundations that make local businesses discoverable across search surfaces."
    },
    {
      title: "Authority Layer", 
      description: "Trust signals and credibility markers that search engines and AI models weight heavily."
    },
    {
      title: "Engagement Layer",
      description: "Conversion-focused touchpoints that turn visibility into leads and revenue."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-blue/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Book & Framework Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              Coming Soon
            </div>
            
            <h2 className="mb-6 text-foreground">
              The Local Growth Engine
            </h2>
            
            <p className="text-lg text-text-secondary mb-8">
              The framework behind everything we deliver. Built from years of local marketing execution, 
              refined through hundreds of campaigns, and now available as the playbook agencies need 
              to understand what actually drives local growth.
            </p>

            <p className="text-foreground mb-8">
              This isn't theory. It's the same system we use to generate results for our partners — 
              and the reason our approach naturally aligns with how AI models now surface local businesses.
            </p>

            {/* Framework pillars */}
            <div className="space-y-4 mb-10">
              {frameworkPillars.map((pillar, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-1 bg-gradient-to-b from-accent-blue to-accent-blue/30 rounded-full flex-shrink-0" />
                  <div>
                    <h4 className="text-foreground font-medium mb-1">{pillar.title}</h4>
                    <p className="text-text-secondary text-sm">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Early Access Signup */}
          <div className="lg:pl-8">
            <div className="premium-card bg-surface-elevated">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Get Early Access
              </h3>
              <p className="text-text-secondary mb-6">
                Be the first to receive The Local Growth Engine when it launches. 
                Early subscribers also get exclusive frameworks and templates not included in the public release.
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-surface-dark border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-cta w-full flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      "Joining..."
                    ) : (
                      <>
                        Join the Waitlist
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-3 p-4 rounded-lg bg-cta/10 border border-cta/20">
                  <CheckCircle2 className="h-5 w-5 text-cta flex-shrink-0" />
                  <p className="text-foreground">
                    You're on the list! We'll be in touch soon.
                  </p>
                </div>
              )}

              <p className="text-text-muted text-xs mt-4">
                No spam. Just the book and occasional insights on local marketing.
              </p>
            </div>

            {/* Social proof */}
            <div className="mt-6 flex items-center gap-4 text-text-secondary text-sm">
              <span className="font-medium text-foreground">$2M+</span>
              <span>in retainer revenue generated for agency partners</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalGrowthEngine;
