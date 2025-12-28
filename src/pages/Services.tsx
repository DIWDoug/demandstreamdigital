import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import TopicalExpertise from "@/components/sections/TopicalExpertise";
import ServicesHero from "@/components/services/ServicesHero";
import WhiteLabelExplainer from "@/components/services/WhiteLabelExplainer";
import EcosystemDiagram from "@/components/services/EcosystemDiagram";

import ServicesFramework from "@/components/services/ServicesFramework";
import ServicesExpertise from "@/components/services/ServicesExpertise";
import ServicesTestimonials from "@/components/services/ServicesTestimonials";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import ServicesFinalCTA from "@/components/services/ServicesFinalCTA";

const Services = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>White Label Inbound Marketing Services for Agencies | Dialed-In Web</title>
        <meta name="description" content="White label inbound marketing fulfillment for agencies. SEO, Google Ads, Meta ads, email marketing, and authority building—executed as a coordinated system, not siloed services." />
        <link rel="canonical" href="https://dialedinweb.com/inbound-marketing-services" />
        <meta name="keywords" content="white label inbound marketing, white label SEO, white label digital marketing, agency fulfillment, white label PPC, white label email marketing" />
      </Helmet>
      
      <Header />
      
      {/* Hero */}
      <ServicesHero />
      
      {/* Light divider */}
      <div className="container mx-auto px-4">
        <hr className="border-t border-border/30" />
      </div>
      
      {/* What is White Label Inbound Marketing? */}
      <WhiteLabelExplainer />
      
      {/* Service Areas - Rich Descriptions Grid */}
      <EcosystemDiagram />
      
      {/* Our Framework - How We Approach Fulfillment */}
      <ServicesFramework />
      
      {/* Testimonials - Social proof after framework */}
      <ServicesTestimonials />
      
      {/* Light divider */}
      <div className="container mx-auto px-4">
        <hr className="border-t border-border/30" />
      </div>
      
      {/* Deep Expertise - Same as Homepage */}
      <TopicalExpertise />
      
      
      {/* Contact Form */}
      <ContactForm />
      
      {/* FAQ */}
      <ServicesFAQ />
      
      {/* Final CTA */}
      <ServicesFinalCTA />

      <Footer />
    </div>
  );
};

export default Services;