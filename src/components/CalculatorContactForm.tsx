import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Loader2, Phone, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const CalculatorContactForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    revenue: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("submit-to-ghl", {
        body: {
          ...formData,
          formType: "calculator",
        }
      });

      if (error) throw error;

      // Redirect to thank you page
      navigate("/thank-you");
    } catch (error: any) {
      console.error("Form submission error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-surface-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-cta/10 text-cta text-xs font-semibold uppercase tracking-wider mb-6">
                Ready to Partner?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Start the <span className="text-accent-blue">Conversation</span>
              </h2>
              <p className="text-text-secondary text-lg font-body mb-8">
                Let's discuss how we can help you deliver exceptional results for your clients while you focus on growing your agency.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <a 
                  href="tel:2143072995"
                  className="flex items-center gap-4 text-text-secondary hover:text-foreground transition-colors group"
                >
                  <span className="w-12 h-12 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center group-hover:bg-accent-blue group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-sm text-text-muted">Call us</p>
                    <p className="text-foreground font-medium">(214) 307-2995</p>
                  </div>
                </a>

                <a 
                  href="mailto:hello@dialedinweb.com"
                  className="flex items-center gap-4 text-text-secondary hover:text-foreground transition-colors group"
                >
                  <span className="w-12 h-12 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center group-hover:bg-accent-blue group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-sm text-text-muted">Email us</p>
                    <p className="text-foreground font-medium">hello@dialedinweb.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-surface-card border border-border rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Tell us about your agency
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-foreground mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:border-accent-blue transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-foreground mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:border-accent-blue transition-colors"
                    placeholder="you@agency.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-foreground mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:border-accent-blue transition-colors"
                    placeholder="(555) 555-5555"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-foreground mb-2">
                    Agency Monthly Revenue <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.revenue}
                    onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:border-accent-blue transition-colors appearance-none"
                  >
                    <option value="">Select revenue range</option>
                    <option value="under-25k">Under $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-250k">$100,000 - $250,000</option>
                    <option value="250k-500k">$250,000 - $500,000</option>
                    <option value="500k+">$500,000+</option>
                  </select>
                </div>

                <button type="submit" disabled={isSubmitting} className="btn-cta w-full group disabled:opacity-50 mt-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Let's Talk
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <p className="text-xs text-text-muted text-center mt-4">
                  We typically respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorContactForm;
