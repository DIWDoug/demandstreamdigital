import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import ServicesHero from "@/components/services/ServicesHero";
import FitCriteria from "@/components/services/FitCriteria";
import EcosystemDiagram from "@/components/services/EcosystemDiagram";
import ServicesFramework from "@/components/services/ServicesFramework";
import SixMonthRoadmap from "@/components/services/SixMonthRoadmap";
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
        <link rel="canonical" href="https://dialedinweb.com/services" />
        <meta name="keywords" content="white label inbound marketing, white label SEO, white label digital marketing, agency fulfillment, white label PPC, white label email marketing" />
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
      
      {/* 6-Month Roadmap Example */}
      <SixMonthRoadmap />
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
