import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import ServicesHero from "@/components/services/ServicesHero";
import FitCriteria from "@/components/services/FitCriteria";
import ServiceAreasGrid from "@/components/services/ServiceAreasGrid";
import HowWeWork from "@/components/services/HowWeWork";
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
      
      {/* Service Areas */}
      <ServiceAreasGrid />
      
      {/* How We Work */}
      <HowWeWork />
      
      {/* FAQ */}
      <ServicesFAQ />
      
      {/* Final CTA */}
      <ServicesFinalCTA />

      <ContactForm />
      <Footer />
    </div>
  );
};

export default Services;
