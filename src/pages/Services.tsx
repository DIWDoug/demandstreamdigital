import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import { hubs } from "@/data/services";

const Services = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>White-Label Local Marketing Services | Dialed-In Web</title>
        <meta name="description" content="Comprehensive white-label local marketing services for agencies. Local SEO, Google Maps optimization, paid media, email marketing, authority building, and reporting." />
        <link rel="canonical" href="https://dialedinweb.com/services" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-background to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cta/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-cta font-medium uppercase tracking-widest mb-4">
              White-Label Fulfillment
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Local Marketing Services{" "}
              <span className="text-gradient-primary">Built for Agencies</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              From SEO to paid media, we handle the fulfillment so you can focus on growing your agency. 
              Every service delivered white-label, on-brand, and on-time.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-surface-dark">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {hubs.map((hub, index) => (
              <Link
                key={index}
                to={`/services/${hub.slug}`}
                className="group premium-card hover:translate-y-[-4px] transition-all duration-300 hover:ring-1 hover:ring-accent-blue/30"
              >
                {/* Icon */}
                <div className="p-3 rounded-xl bg-accent-blue/10 border border-accent-blue/20 w-fit mb-6">
                  <hub.icon className="h-6 w-6 text-accent-blue" />
                </div>
                
                {/* Title */}
                <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-cta transition-colors">
                  {hub.title}
                </h2>
                
                {/* Summary */}
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {hub.summary}
                </p>
                
                {/* Spokes preview */}
                <div className="space-y-2 mb-6 pb-6 border-b border-border">
                  {hub.spokes.slice(0, 3).map((spoke, spokeIndex) => (
                    <div key={spokeIndex} className="flex items-center gap-2 text-sm text-text-muted">
                      <div className="w-1 h-1 rounded-full bg-accent-blue/50" />
                      {spoke.title}
                    </div>
                  ))}
                  {hub.spokes.length > 3 && (
                    <p className="text-xs text-accent-blue">
                      +{hub.spokes.length - 3} more services
                    </p>
                  )}
                </div>
                
                {/* CTA */}
                <div className="flex items-center gap-2 text-cta font-medium text-sm group-hover:gap-3 transition-all">
                  Explore {hub.title}
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cta/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="text-lg text-text-secondary mb-10">
              Let's talk about your agency's needs and build a custom scope that fits your clients and your margins.
            </p>
            <a href="#contact" className="btn-cta group inline-flex">
              Schedule a Discovery Call
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default Services;
