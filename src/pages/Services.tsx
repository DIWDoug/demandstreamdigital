import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import TopicalExpertise from "@/components/sections/TopicalExpertise";
import TrustReel from "@/components/sections/TrustReel";

import ServicesHero from "@/components/services/ServicesHero";
import WhiteLabelExplainer from "@/components/services/WhiteLabelExplainer";
import InboundPainPoints from "@/components/services/InboundPainPoints";
import FitQualifier from "@/components/services/FitQualifier";
import PricingFramework from "@/components/services/PricingFramework";
import OnboardingRoadmap from "@/components/services/OnboardingRoadmap";
import ServicesFramework from "@/components/services/ServicesFramework";
import ServicesTestimonials from "@/components/services/ServicesTestimonials";
import ServicesFAQ from "@/components/services/ServicesFAQ";

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
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
      
      {/* Trust Reel - credibility whisper */}
      <TrustReel />
      
      {/* What is Inbound Marketing? */}
      <WhiteLabelExplainer />
      
      <SectionDivider />
      
      {/* Pain Points - why in-house breaks down */}
      <InboundPainPoints />
      
      {/* Fit Qualifier - who this is for (light section, no divider needed) */}
      <FitQualifier />
      
      {/* Our Framework - How We Approach Fulfillment (also light) */}
      <ServicesFramework />
      
      <SectionDivider />
      
      {/* Testimonials - Social proof after framework */}
      <ServicesTestimonials />
      
      <SectionDivider />
      
      {/* Onboarding Roadmap - how it works */}
      <OnboardingRoadmap />
      
      <SectionDivider />
      
      {/* Deep Expertise - hub/spoke with internal links */}
      <TopicalExpertise />
      
      {/* Pricing Framework - transparent ranges before FAQ */}
      <PricingFramework />
      
      {/* FAQ - Answer objections before conversion (light section) */}
      <ServicesFAQ />
      
      <SectionDivider />
      
      {/* Contact Form */}
      <ContactForm />

      <Footer />
    </div>
  );
};

export default Services;
