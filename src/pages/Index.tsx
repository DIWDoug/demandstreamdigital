import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import TrustReel from "@/components/sections/TrustReel";
import ProblemSolution from "@/components/sections/ProblemSolution";
import HonestWordOnFulfillment from "@/components/sections/HonestWordOnFulfillment";
import WhyPartnerWithUs from "@/components/sections/WhyPartnerWithUs";
import FitQualifier from "@/components/services/FitQualifier";
import MidPageCTA from "@/components/sections/MidPageCTA";
import ServicesGrid from "@/components/sections/ServicesGrid";
import TopicalExpertise from "@/components/sections/TopicalExpertise";
import LocalGrowthEngine from "@/components/sections/LocalGrowthEngine";
import WhatWeSolve from "@/components/sections/WhatWeSolve";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";
import FAQ, { getHomepageFAQSchema } from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import WaveDivider from "@/components/WaveDivider";
import FeaturedCaseStudies from "@/components/sections/FeaturedCaseStudies";
import { getHomepageSchema } from "@/lib/schema";
import { getPageOgImage } from "@/lib/ogImages";

const Index = () => {
  const homepageSchema = getHomepageSchema();
  const faqSchema = getHomepageFAQSchema();
  const ogImage = getPageOgImage('index');

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      ...homepageSchema["@graph"],
      ...faqSchema.mainEntity ? [faqSchema] : []
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Plumbing & HVAC Digital Marketing | SEO, PPC & Lead Generation | ServiceForge Digital</title>
        <meta name="description" content="Digital marketing for plumbing and HVAC companies. SEO, Google Ads, reputation management, and AI-powered lead generation to fill your schedule 365 days a year." />
        <meta name="keywords" content="plumbing marketing, HVAC marketing, plumber SEO, HVAC SEO, plumbing Google Ads, HVAC lead generation, local marketing plumbing" />
        <link rel="canonical" href="https://serviceforgedigital.com/" />
        
        <link rel="alternate" hrefLang="en-US" href="https://serviceforgedigital.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://serviceforgedigital.com/" />
        
        <script type="application/ld+json">{JSON.stringify(combinedSchema)}</script>
        
        <meta property="og:title" content="Growth Marketing for Plumbing & HVAC Companies | ServiceForge Digital" />
        <meta property="og:description" content="More calls, more jobs, more growth. SEO, Google Ads, reputation management, and content marketing built specifically for plumbing and HVAC companies." />
        <meta property="og:url" content="https://serviceforgedigital.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ServiceForge Digital" />
        <meta property="og:image" content={ogImage} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Growth Marketing for Plumbing & HVAC Companies | ServiceForge Digital" />
        <meta name="twitter:description" content="More calls, more jobs, more growth. SEO, Google Ads, reputation management, and content marketing built specifically for plumbing and HVAC companies." />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      
      <Header />
      <Hero />
      
      <TrustReel />
      
      <div className="dark">
        <ProblemSolution />
      </div>
      
      <WhyPartnerWithUs />
      <FitQualifier />
      
      <div className="dark" id="services">
        <ServicesGrid />
      </div>
      
      <TopicalExpertise />
      
      <div className="dark">
        <LocalGrowthEngine />
      </div>
      
      <div className="dark" id="about">
        <WhatWeSolve />
      </div>
      
      <MidPageCTA variant="light" />
      
      <div className="dark">
        <FeaturedCaseStudies />
      </div>
      
      <div id="testimonials">
        <Testimonials />
      </div>
      
      <FAQ />
      
      <ContactForm />
      
      <div className="dark">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
