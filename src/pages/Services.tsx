import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import ServicesHero from "@/components/services/ServicesHero";
import WhiteLabelExplainer from "@/components/services/WhiteLabelExplainer";
import EcosystemDiagram from "@/components/services/EcosystemDiagram";
import ServicesFramework from "@/components/services/ServicesFramework";
import SixMonthRoadmap from "@/components/services/SixMonthRoadmap";
import ServicesExpertise from "@/components/services/ServicesExpertise";
import ServicesTestimonials from "@/components/services/ServicesTestimonials";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import ServicesFinalCTA from "@/components/services/ServicesFinalCTA";
import WaveDivider from "@/components/WaveDivider";

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
      
      {/* Divider line */}
      <div className="container mx-auto px-4">
        <hr className="border-t border-border/30" />
      </div>
      
      {/* What is White Label Inbound Marketing? */}
      <WhiteLabelExplainer />
      
      {/* Ecosystem Diagram */}
      <EcosystemDiagram />
      
      {/* Divider: Ecosystem to Framework */}
      <div className="relative">
        <WaveDivider position="bottom" />
      </div>
      
      {/* Our Framework */}
      <ServicesFramework />
      
      {/* 6-Month Roadmap Example */}
      <SixMonthRoadmap />
      
      {/* Divider: Roadmap to Expertise */}
      <div className="relative">
        <WaveDivider position="bottom" />
      </div>
      
      {/* Deep Expertise */}
      <ServicesExpertise />
      
      {/* Divider: Expertise to Testimonials */}
      <div className="relative">
        <WaveDivider position="bottom" />
      </div>
      
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
