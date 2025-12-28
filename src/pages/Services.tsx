import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import ServicesHero from "@/components/services/ServicesHero";
import FitCriteria from "@/components/services/FitCriteria";
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
        <title>White-Label Local Marketing Services | Dialed-In Web</title>
        <meta name="description" content="Coordinated fulfillment for agencies. Local SEO, Google Maps, paid media, and authority building—activated by scope, not bundled by default." />
        <link rel="canonical" href="https://dialedinweb.com/services" />
      </Helmet>
      
      <Header />
      
      {/* Hero */}
      <ServicesHero />
      
      {/* Who This Works For */}
      <FitCriteria />
      
      {/* Ecosystem Diagram */}
      <EcosystemDiagram />
      
      {/* Our Framework */}
      <ServicesFramework />
      
      
      {/* Deep Expertise */}
      <ServicesExpertise />
      
      {/* Testimonials */}
      <ServicesTestimonials />
      
      {/* Fulfillment in 6 Clear Steps + Contact Form */}
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
