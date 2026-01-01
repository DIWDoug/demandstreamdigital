import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Loader2, Phone, Mail, MapPin, Quote } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import SubtleOrbs from "@/components/SubtleOrbs";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "They're trustworthy, they communicate clearly and really consistently, which is sometimes rare in today's world.",
    author: "Trevor Anderson",
    role: "Founder & CEO, Anderson Collaborative"
  },
  {
    quote: "I've owned an ad agency in Dallas for a decade and partnered with Doug's team for seven years. They're second to none — extremely competitive pricing for the level of wisdom and responsiveness you receive.",
    author: "Cole",
    role: "Digital Marketing Agency Owner, Dallas"
  },
  {
    quote: "We needed a partner we could trust to deliver quality work across different client situations. The ability to have real conversations about scope and strategy made a measurable difference in client retention.",
    author: "Jeremy",
    role: "Digital Marketing Agency Owner, Florida"
  }
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    revenue: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("submit-to-ghl", {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Thank you!",
        description: "We'll be in touch within 24 hours.",
      });

      setFormData({ name: "", email: "", phone: "", revenue: "", message: "" });
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
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Contact Us | Start a Partnership | Dialed-In Web</title>
        <meta name="description" content="Ready to scale your agency with white-label fulfillment? Get in touch with our team. We typically respond within 24 hours." />
        <link rel="canonical" href="https://dialedinweb.com/contact" />
      </Helmet>

      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24">
          <SubtleOrbs variant="top-right" />
          
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Left Column - Content */}
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-cta/10 text-cta text-xs font-semibold uppercase tracking-wider mb-6">
                    Let's Connect
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Start a <span className="text-accent-blue">Conversation</span>
                  </h1>
                  <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                    Whether you're exploring white-label fulfillment for the first time or looking to replace an inconsistent vendor, we're here to help. Tell us about your agency—we'll take it from there.
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-4 mb-8">
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

                    <div className="flex items-center gap-4 text-text-secondary">
                      <span className="w-12 h-12 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center">
                        <MapPin className="w-5 h-5" />
                      </span>
                      <div>
                        <p className="text-sm text-text-muted">Visit us</p>
                        <p className="text-foreground font-medium">2919 Commerce St, Ste 589, Dallas, TX 75226</p>
                      </div>
                    </div>
                  </div>

                  {/* Response Time */}
                  <p className="text-sm text-text-muted italic">
                    We typically respond within 24 hours.
                  </p>
                </div>

                {/* Right Column - Form */}
                <div className="bg-surface-card border border-border rounded-2xl p-8 shadow-lg">
                  <h2 className="text-xl font-semibold text-foreground mb-6">
                    Tell us about your agency
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
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

                    <div>
                      <label className="block text-sm text-foreground mb-2">
                        How can we help? <span className="text-text-muted">(optional)</span>
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:border-accent-blue transition-colors resize-none"
                        placeholder="Tell us about your current fulfillment needs, challenges, or questions..."
                      />
                    </div>

                    <button type="submit" disabled={isSubmitting} className="btn-cta w-full group disabled:opacity-50">
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
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 lg:py-24 bg-surface-dark">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  What Agency Partners <span className="text-accent-blue">Say</span>
                </h2>
                <p className="text-text-secondary">
                  Real feedback from agencies who value trust, clarity, and execution.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <Card 
                    key={index} 
                    className="bg-surface-card border-border hover:border-accent-blue/30 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <Quote className="h-6 w-6 text-accent-blue/40 mb-4" />
                      <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <div className="border-t border-border pt-4">
                        <p className="text-foreground font-medium text-sm">{testimonial.author}</p>
                        <p className="text-text-muted text-xs">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
