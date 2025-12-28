import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import ServicesHero from "@/components/services/ServicesHero";
import AntiPackageBlock from "@/components/services/AntiPackageBlock";
import StandaloneServicesBlock from "@/components/services/StandaloneServicesBlock";
import SystemDiagram from "@/components/services/SystemDiagram";
import ServicesStats from "@/components/services/ServicesStats";
import FulfillmentCoordination from "@/components/services/FulfillmentCoordination";
import CoreServiceAreas from "@/components/services/CoreServiceAreas";
import ScopeRules from "@/components/services/ScopeRules";
import NotStaffingStatement from "@/components/services/NotStaffingStatement";
import ServicesDirectory from "@/components/services/ServicesDirectory";
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
      
      {/* 1. Hero Section */}
      <ServicesHero />
      
      {/* 2. Anti-Package Framing Block */}
      <AntiPackageBlock />
      
      {/* Stats Section */}
      <ServicesStats />
      
      {/* 3. Standalone Services Framing */}
      <StandaloneServicesBlock />
      
      {/* 4. System Overview Diagram */}
      <SystemDiagram />
      
      {/* 4. How Fulfillment Is Coordinated */}
      <FulfillmentCoordination />
      
      {/* 5. Core Service Areas */}
      <CoreServiceAreas />
      
      {/* 6. Scope & Activation Rules */}
      <ScopeRules />
      
      {/* 7. Not Staffing Statement */}
      <NotStaffingStatement />
      
      {/* 8. Services Directory */}
      <ServicesDirectory />
      
      {/* 9. Services-Specific FAQs */}
      <ServicesFAQ />
      
      {/* 10. Final CTA */}
      <ServicesFinalCTA />

      <ContactForm />
      <Footer />
    </div>
  );
};

export default Services;
