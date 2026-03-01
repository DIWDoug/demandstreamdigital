import SEOHead from "@/components/SEOHead";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle, ArrowRight, Phone, Mail, Clock, Download, BookOpen } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const formType = searchParams.get("type") || "contact";

  const isEbook = formType === "ebook";

  return (
    <div className="dark min-h-screen bg-background text-foreground">
        <SEOHead
          title={isEbook ? "Download Your Ebook | DemandStream Digital" : "Thank You | DemandStream Digital"}
          description={isEbook ? "Your ebook is ready for download." : "Thanks for reaching out. A Demand Stream Digital strategist will connect with you soon."}
          canonical="https://demandstreamdigital.com/thank-you"
          noIndex={true}
        />

      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className={`mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full ${isEbook ? "bg-accent-blue/20 text-accent-blue" : "bg-accent-green/20 text-accent-green"}`}>
              {isEbook ? <BookOpen className="w-10 h-10" /> : <CheckCircle className="w-10 h-10" />}
            </div>

            {/* Headline */}
            {isEbook ? (
              <>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Your Ebook is <span className="text-accent-blue">Ready</span>
                </h1>
                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                  Thank you for your interest! Check your inbox for a download link to "DemandStream: The No-BS Growth Guide" ebook. If you don't see it within a few minutes, check your spam folder.
                </p>
              </>
            ) : (
              <>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Thank You for <span className="text-accent-blue">Reaching Out</span>
                </h1>
                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                  We've received your information and a member of our team will be in touch shortly. We're excited to learn more about your agency and explore how we can work together.
                </p>
              </>
            )}

            {/* What to Expect */}
            <div className="bg-surface-card border border-border rounded-2xl p-8 mb-10 text-left">
              <h2 className="text-xl font-semibold text-foreground mb-6 text-center">
                {isEbook ? "What's Inside" : "What Happens Next"}
              </h2>
              
              {isEbook ? (
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center">
                      <Download className="w-5 h-5 text-accent-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Check Your Email</h3>
                      <p className="text-sm text-text-secondary">We've sent a download link to your inbox. The ebook is a comprehensive guide to local visibility.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-accent-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Actionable Frameworks</h3>
                      <p className="text-sm text-text-secondary">Learn the exact strategies we use to drive local visibility for agency clients across industries.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-accent-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Questions? Let's Talk</h3>
                      <p className="text-sm text-text-secondary">If you'd like to discuss how we can help your agency, we're always happy to chat.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-accent-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Response Within 24 Hours</h3>
                      <p className="text-sm text-text-secondary">A team member will reach out via email or phone to schedule a discovery call.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-accent-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Discovery Conversation</h3>
                      <p className="text-sm text-text-secondary">We'll learn about your agency, your clients, and your fulfillment needs—no pressure, no pitch.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-accent-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Custom Scope & Pricing</h3>
                      <p className="text-sm text-text-secondary">If there's a fit, we'll provide transparent pricing and clear deliverables tailored to your situation.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="mb-10">
              <p className="text-sm text-text-muted mb-4">
                {isEbook ? "Want to explore a partnership?" : "Need to reach us sooner?"}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                <a 
                  href={PHONE_HREF}
                  className="flex items-center gap-2 text-foreground hover:text-accent-blue transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>{PHONE_NUMBER}</span>
                </a>
                <a 
                  href="mailto:hello@demandstreamdigital.com"
                  className="flex items-center gap-2 text-foreground hover:text-accent-blue transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>hello@demandstreamdigital.com</span>
                </a>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {isEbook && (
                <Link 
                  to="/contact"
                  className="btn-cta inline-flex group"
                >
                  Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
              <Link 
                to="/"
                className={isEbook ? "text-text-muted hover:text-foreground transition-colors underline" : "btn-cta inline-flex group"}
              >
                {isEbook ? "Back to Homepage" : (
                  <>
                    Back to Homepage
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;
