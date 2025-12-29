import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import TopicalExpertise from "@/components/sections/TopicalExpertise";
import TrustReel from "@/components/sections/TrustReel";
import WaveDivider from "@/components/WaveDivider";

import ServicesHero from "@/components/services/ServicesHero";
import WhiteLabelExplainer from "@/components/services/WhiteLabelExplainer";
import InboundPainPoints from "@/components/services/InboundPainPoints";
import FitQualifier from "@/components/services/FitQualifier";
import PricingFramework from "@/components/services/PricingFramework";
import OnboardingRoadmap from "@/components/services/OnboardingRoadmap";
import ServicesFramework from "@/components/services/ServicesFramework";
import ServicesTestimonials from "@/components/services/ServicesTestimonials";
import ServicesFAQ from "@/components/services/ServicesFAQ";

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
      
      {/* Wave transition into Pain Points */}
      <div className="relative">
        <WaveDivider position="top" fromColor="hsl(var(--surface-dark))" toColor="hsl(var(--background))" variant="wave" />
        <InboundPainPoints />
      </div>
      
      {/* Curve transition into Fit Qualifier */}
      <div className="relative">
        <WaveDivider position="top" fromColor="hsl(var(--background))" toColor="hsl(var(--surface-light))" variant="curve" flip />
        <FitQualifier />
      </div>
      
      {/* Our Framework - How We Approach Fulfillment */}
      <ServicesFramework />
      
      {/* Wave transition into Testimonials */}
      <div className="relative">
        <WaveDivider position="top" fromColor="hsl(var(--surface-light))" toColor="hsl(var(--surface-dark))" variant="wave" />
        <ServicesTestimonials />
      </div>
      
      {/* Tilt transition into Roadmap */}
      <div className="relative">
        <WaveDivider position="top" fromColor="hsl(var(--surface-dark))" toColor="hsl(var(--background))" variant="tilt" />
        <OnboardingRoadmap />
      </div>
      
      {/* Layered wave into TopicalExpertise */}
      <div className="relative">
        <WaveDivider position="top" fromColor="hsl(var(--background))" toColor="hsl(var(--surface-dark))" variant="layered" />
        <TopicalExpertise />
      </div>
      
      {/* Pricing Framework - transparent ranges before FAQ */}
      <PricingFramework />
      
      {/* Curve transition into FAQ */}
      <div className="relative">
        <WaveDivider position="top" fromColor="hsl(var(--surface-dark))" toColor="hsl(var(--surface-light))" variant="curve" />
        <ServicesFAQ />
      </div>
      
      {/* Wave transition into Contact */}
      <div className="relative">
        <WaveDivider position="top" fromColor="hsl(var(--surface-light))" toColor="hsl(var(--surface-dark))" variant="wave" flip />
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
};

export default Services;
