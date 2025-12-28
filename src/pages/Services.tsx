import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import ServicesHero from "@/components/services/ServicesHero";
import WhiteLabelExplainer from "@/components/services/WhiteLabelExplainer";
import ServicesExpertise from "@/components/services/ServicesExpertise";
import WhyPartnerWithUs from "@/components/sections/WhyPartnerWithUs";
import ServicesFramework from "@/components/services/ServicesFramework";
import SixMonthRoadmap from "@/components/services/SixMonthRoadmap";
import ServicesTestimonials from "@/components/services/ServicesTestimonials";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import ServicesFinalCTA from "@/components/services/ServicesFinalCTA";

const SectionDivider = () => (
  <div className="container mx-auto px-4">
    <hr className="border-t border-border/30" />
  </div>
);

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
      
      <SectionDivider />
      
      {/* What is White Label Inbound Marketing? */}
      <WhiteLabelExplainer />
      
      {/* Service Offerings - Expandable Cards */}
      <ServicesExpertise />
      
      {/* Why Agencies Actually Use This */}
      <WhyPartnerWithUs />
      
      <SectionDivider />
      
      {/* Our Framework - How We Approach Fulfillment */}
      <ServicesFramework />
      
      {/* Testimonials */}
      <ServicesTestimonials />
      
      {/* 6-Month Roadmap */}
      <SixMonthRoadmap />
      
      <SectionDivider />
      
      {/* Contact Form */}
      <ContactForm />
      
      <SectionDivider />
      
      {/* FAQ */}
      <ServicesFAQ />
      
      <SectionDivider />
      
      {/* Final CTA */}
      <ServicesFinalCTA />

      <Footer />
    </div>
  );
};

export default Services;