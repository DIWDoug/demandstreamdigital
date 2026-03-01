import SEOHead from "@/components/SEOHead";
import { Phone, Mail, MapPin, Quote, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import SubtleOrbs from "@/components/SubtleOrbs";
import { Card, CardContent } from "@/components/ui/card";
import { PHONE_NUMBER, PHONE_HREF, ADDRESS, EMAIL } from "@/lib/constants";
import TwoStepContactForm from "@/components/forms/TwoStepContactForm";
import { getContactPageSchema } from "@/lib/schema";

const testimonials = [
  {
    quote:
      "They're trustworthy, they communicate clearly and really consistently, which is sometimes rare in today's world.",
    author: "Trevor Anderson",
    role: "Founder & CEO, Anderson Collaborative",
  },
  {
    quote:
      "I've owned an ad agency in Dallas for a decade and partnered with Doug's team for seven years. They're second to none — extremely competitive pricing for the level of wisdom and responsiveness you receive.",
    author: "Cole",
    role: "Digital Marketing Agency Owner, Dallas",
  },
  {
    quote:
      "We needed a partner we could trust to deliver quality work across different client situations. The ability to have real conversations about scope and strategy made a measurable difference in client retention.",
    author: "Jeremy",
    role: "Digital Marketing Agency Owner, Florida",
  },
];

const Contact = () => {
  const contactSchema = getContactPageSchema();
  
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead
        title="Contact DemandStream Digital | Plumbing & HVAC Marketing"
        description="Get in touch with DemandStream Digital. Book a free strategy call for your plumbing or HVAC company. No contracts, no pitch decks — real answers."
        canonical="https://demandstreamdigital.com/contact"
        ogImage="https://demandstreamdigital.com/og-images/contact.png"
        keywords="contact plumbing marketing, HVAC marketing consultation, plumber SEO contact, growth marketing for trades"
        schemaJson={contactSchema}
      />

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
                    Whether you're looking to grow your plumbing or HVAC business, or you need a marketing partner who understands your industry, we're here to help. Tell us about your business—we'll take it from there.
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-4 mb-8">
                    <a 
                      href={PHONE_HREF}
                      className="flex items-center gap-4 text-text-secondary hover:text-foreground transition-colors group"
                    >
                      <span className="w-12 h-12 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center group-hover:bg-accent-blue group-hover:text-white transition-colors">
                        <Phone className="w-5 h-5" />
                      </span>
                      <div>
                        <p className="text-sm text-text-muted">Call us</p>
                        <p className="text-foreground font-medium">{PHONE_NUMBER}</p>
                      </div>
                    </a>

                    <a 
                      href={`mailto:${EMAIL}`}
                      className="flex items-center gap-4 text-text-secondary hover:text-foreground transition-colors group"
                    >
                      <span className="w-12 h-12 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center group-hover:bg-accent-blue group-hover:text-white transition-colors">
                        <Mail className="w-5 h-5" />
                      </span>
                      <div>
                        <p className="text-sm text-text-muted">Email us</p>
                        <p className="text-foreground font-medium">{EMAIL}</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 text-text-secondary">
                      <span className="w-12 h-12 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center">
                        <MapPin className="w-5 h-5" />
                      </span>
                      <div>
                        <p className="text-sm text-text-muted">Visit us</p>
                        <p className="text-foreground font-medium">{ADDRESS.full}</p>
                      </div>
                    </div>
                  </div>

                  {/* Response Time */}
                  <p className="text-sm text-text-muted italic">
                    We typically respond within 24 hours.
                  </p>
                </div>

                {/* Right Column - Two-Step Form */}
                <div className="bg-surface-card border border-border rounded-2xl p-8 shadow-lg">
                  <h2 className="text-xl font-semibold text-foreground mb-2">
                    Tell us about your business
                  </h2>
                  <p className="text-sm text-text-muted mb-6">
                    We'll take it from there.
                  </p>
                  
                  <TwoStepContactForm
                    formType="contact_page"
                    submitButtonText="Let's Talk"
                    step1ButtonText="Continue"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Free Audit CTA */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-accent-blue/10 to-cta/10 border border-accent-blue/30 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent-blue/20 text-accent-blue flex items-center justify-center">
                  <Search className="w-7 h-7" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-xl font-bold text-foreground mb-1">
                    Not sure where to start?
                  </h2>
                  <p className="text-text-secondary text-sm">
                    Run a free, instant SEO audit on your website and see exactly what's helping — and hurting — your rankings.
                  </p>
                </div>
                <Link
                  to="/free-audit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cta hover:bg-cta/90 text-white font-semibold text-sm transition-colors whitespace-nowrap"
                >
                  Run Free Audit
                  <Search className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>


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
