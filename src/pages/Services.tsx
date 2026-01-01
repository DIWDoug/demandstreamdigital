import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import TopicalExpertise from "@/components/sections/TopicalExpertise";

import ServicesHero from "@/components/services/ServicesHero";
import WhiteLabelExplainer from "@/components/services/WhiteLabelExplainer";
import InboundPainPoints from "@/components/services/InboundPainPoints";
import FitQualifier from "@/components/services/FitQualifier";
import CalculatorTabs from "@/components/services/CalculatorTabs";
import OnboardingRoadmap from "@/components/services/OnboardingRoadmap";
import ServicesFramework from "@/components/services/ServicesFramework";
import ServicesTestimonials from "@/components/services/ServicesTestimonials";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import LaptopMockup from "@/components/services/LaptopMockup";

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
        <link rel="canonical" href="https://dialedinweb.com/white-label-inbound-marketing-services" />
        <meta name="keywords" content="white label inbound marketing, white label SEO, white label digital marketing, agency fulfillment, white label PPC, white label email marketing" />
      </Helmet>
      
      <Header />
      
      {/* Hero */}
      <ServicesHero />

      {/* Anchor Navigation */}
      <nav className="sticky top-16 z-40 bg-cta border-y border-cta/80 shadow-lg">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 md:gap-6 lg:gap-10 py-3 overflow-x-auto">
            {[
              { label: 'What is Inbound?', href: '#white-label-explainer' },
              { label: 'Pain Points', href: '#pain-points' },
              { label: 'Is This For You?', href: '#fit-qualifier' },
              { label: 'Our Framework', href: '#framework' },
              { label: 'Onboarding', href: '#onboarding' },
              { label: 'Expertise', href: '#expertise' },
              { label: 'Calculator', href: '#calculator' },
              { label: 'FAQ', href: '#faq' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm md:text-base font-medium text-white/90 hover:text-white whitespace-nowrap transition-colors duration-200 px-2 py-1"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
      
      {/* What is Inbound Marketing? */}
      <WhiteLabelExplainer />
      
      {/* Laptop Dashboard Mockup */}
      <LaptopMockup />
      
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
      
      {/* Combined Calculator with Tabs */}
      <CalculatorTabs />
      
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
