import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useRecaptcha } from "@/hooks/useRecaptcha";
import bookCover from "@/assets/ebook-cover.jpg";
import StreamTexture from "@/components/StreamTexture";


const LocalGrowthEngine = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [honeypot, setHoneypot] = useState(""); // Bot trap field
  const formLoadTime = useRef<number>(Date.now());
  const { toast } = useToast();
  const { executeRecaptcha, isReady: isRecaptchaReady, initRecaptcha } = useRecaptcha();

  // Reset form load time when component mounts
  useEffect(() => {
    formLoadTime.current = Date.now();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // CAPTCHA Check 1: Honeypot field should be empty (bots often fill hidden fields)
    if (honeypot) {
      console.log("Bot detected: honeypot filled");
      // Silently reject but show success to avoid tipping off bots
      setIsSubmitted(true);
      return;
    }
    
    // CAPTCHA Check 2: Form submitted too quickly (under 2 seconds = likely bot)
    const timeSinceLoad = Date.now() - formLoadTime.current;
    if (timeSinceLoad < 2000) {
      console.log("Bot detected: submitted too fast", timeSinceLoad);
      setIsSubmitted(true);
      return;
    }
    
    // CAPTCHA Check 3: Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Get reCAPTCHA token
      const recaptchaToken = await executeRecaptcha("ebook_download");

      const { supabase } = await import("@/integrations/supabase/client");
      
      const { data, error } = await supabase.functions.invoke('submit-ebook-lead', {
        body: { email, recaptchaToken }
      });

      if (error) {
        console.error("Error submitting ebook lead:", error);
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }

      console.log("Ebook lead submitted:", data);
      
      // Redirect to thank you page
      navigate("/thank-you?type=ebook");
    } catch (error) {
      console.error("Error submitting ebook lead:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-background" style={{ bottom: '5rem' }} />
      <StreamTexture variant="dark" opacity={0.08} />
      
      <div className="relative py-16 lg:py-20 pb-8 z-10">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Bleed-over Card */}
          <div className="relative z-20 bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] border border-white/[0.06] mb-[-5rem]">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Stacked Book Display */}
              <div className="relative flex justify-center items-center min-h-[350px] lg:min-h-[420px]">
                <div className="relative w-56 md:w-64 lg:w-72">
                  {/* Back book - offset behind */}
                  <div 
                    className="absolute -left-6 -top-3 w-full opacity-60"
                    style={{ 
                      transform: 'rotate(-4deg) scale(0.95)',
                      transformOrigin: 'bottom center'
                    }}
                  >
                    <img 
                      src={bookCover} 
                      alt="DemandStream ebook" 
                      className="w-full rounded-lg"
                      style={{ 
                        filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))',
                      }}
                    />
                  </div>
                  {/* Front book - main focus */}
                  <div className="relative z-10">
                    <img 
                      src={bookCover} 
                      alt="DemandStream: The Digital Marketing Playbook for Plumbing & HVAC Contractors" 
                      className="w-full rounded-lg"
                      style={{ 
                        filter: 'drop-shadow(0 35px 60px rgba(0,0,0,0.5))',
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div>
                <p className="text-muted-foreground text-base mb-1">Get the Book</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                  DemandStream Local Domination<br />
                  <span className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-semibold">The Digital Marketing Playbook for Plumbing & HVAC Contractors</span>
                </h2>
                
                <div className="w-12 h-0.5 bg-cta mb-5" />

                <h3 className="text-lg font-semibold text-foreground mb-3">
                  The Marketing Playbook Built for Plumbing & HVAC Growth
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  If you're a plumbing or HVAC owner tired of slow seasons and unpredictable leads, this is for you. Steady Stream is the methodology behind hundreds of successful local marketing campaigns.
                </p>

                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Inside, you'll discover the system we use across Local SEO, Google Maps, paid media, and reputation management to keep your phone ringing all year, not just when the weather cooperates.
                </p>

                {/* Email signup or CTA */}
                {!isSubmitted ? (
                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    <div className="flex-1 w-full sm:w-auto">
                      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                        {/* Honeypot field - hidden from users, bots will fill it */}
                        <input
                          type="text"
                          name="website_url"
                          value={honeypot}
                          onChange={(e) => setHoneypot(e.target.value)}
                          tabIndex={-1}
                          autoComplete="off"
                          style={{ 
                            position: 'absolute', 
                            left: '-9999px', 
                            opacity: 0, 
                            height: 0, 
                            width: 0,
                            pointerEvents: 'none'
                          }}
                          aria-hidden="true"
                        />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onFocus={initRecaptcha}
                          placeholder="Enter your email"
                          required
                          className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cta/50 focus:border-cta transition-all"
                        />
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn-cta flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50"
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
                      <p className="text-muted-foreground text-xs mt-2">Protected by reCAPTCHA</p>
                    </div>
                  </div>
                ) : (
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-accent-blue/10 border border-accent-blue/20 max-w-md">
                    <CheckCircle2 className="h-5 w-5 text-accent-blue flex-shrink-0" />
                    <p className="text-foreground">
                      You're on the list! We'll be in touch soon.
                    </p>
                  </div>
                )}

                <p className="text-muted-foreground text-sm mt-4">
                  Coming soon. Join the waitlist to get notified + exclusive bonus content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalGrowthEngine;
