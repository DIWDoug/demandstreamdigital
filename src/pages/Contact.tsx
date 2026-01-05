import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, Quote } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import SubtleOrbs from "@/components/SubtleOrbs";
import { Card, CardContent } from "@/components/ui/card";
import { PHONE_NUMBER, PHONE_HREF, ADDRESS, EMAIL } from "@/lib/constants";
import TwoStepContactForm from "@/components/forms/TwoStepContactForm";
import { getContactPageSchema } from "@/lib/schema";

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
  const contactSchema = getContactPageSchema();
  
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Contact Dialed-in Web | Start a White Label SEO, PPC, and Content Marketing Partnership for Your Agency</title>
        <meta name="description" content="Reach out to Dialed-in Web to explore a white label partnership for SEO, paid ads, and content marketing services." />
        <link rel="canonical" href="https://dialedinweb.com/contact" />
        <meta name="keywords" content="contact white label SEO, agency partnership inquiry, white label PPC contact, digital marketing fulfillment partner" />
        
        {/* Hreflang Tags */}
        <link rel="alternate" hrefLang="en-US" href="https://dialedinweb.com/contact" />
        <link rel="alternate" hrefLang="en-CA" href="https://dialedinweb.com/contact" />
        <link rel="alternate" hrefLang="x-default" href="https://dialedinweb.com/contact" />
        
        <script type="application/ld+json">{JSON.stringify(contactSchema)}</script>
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact Dialed-in Web | Start a White Label SEO, PPC, and Content Marketing Partnership for Your Agency" />
        <meta property="og:description" content="Reach out to Dialed-in Web to explore a white label partnership for SEO, paid ads, and content marketing services." />
        <meta property="og:url" content="https://dialedinweb.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dialed-In Web" />
        <meta property="og:image" content="https://dialedinweb.com/dialedinweb-logo.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Dialed-in Web | Start a White Label SEO, PPC, and Content Marketing Partnership for Your Agency" />
        <meta name="twitter:description" content="Reach out to Dialed-in Web to explore a white label partnership for SEO, paid ads, and content marketing services." />
        <meta name="twitter:image" content="https://dialedinweb.com/dialedinweb-logo.png" />
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
                    Tell us about your agency
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
