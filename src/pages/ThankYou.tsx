import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Phone, Mail, Clock } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const ThankYou = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Thank You | DialedIn Web</title>
        <meta name="description" content="Thank you for reaching out. We'll be in touch within 24 hours." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-cta/20 text-cta">
              <CheckCircle className="w-10 h-10" />
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Thank You for <span className="text-accent-blue">Reaching Out</span>
            </h1>

            {/* Message */}
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              We've received your information and a member of our team will be in touch shortly. We're excited to learn more about your agency and explore how we can work together.
            </p>

            {/* What to Expect */}
            <div className="bg-surface-card border border-border rounded-2xl p-8 mb-10 text-left">
              <h2 className="text-xl font-semibold text-foreground mb-6 text-center">What Happens Next</h2>
              
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
            </div>

            {/* Contact Info */}
            <div className="mb-10">
              <p className="text-sm text-text-muted mb-4">Need to reach us sooner?</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                <a 
                  href="tel:2143072995"
                  className="flex items-center gap-2 text-foreground hover:text-accent-blue transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>(214) 307-2995</span>
                </a>
                <a 
                  href="mailto:hello@dialedinweb.com"
                  className="flex items-center gap-2 text-foreground hover:text-accent-blue transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>hello@dialedinweb.com</span>
                </a>
              </div>
            </div>

            {/* CTA */}
            <Link 
              to="/"
              className="btn-cta inline-flex group"
            >
              Back to Homepage
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;
