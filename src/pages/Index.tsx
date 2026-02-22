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
import FounderEEAT from "@/components/sections/FounderEEAT";
import GrowthProcess from "@/components/sections/GrowthProcess";
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
        <title>Plumbing & HVAC Marketing Company | SEO, PPC & Lead Generation | Demand Stream Digital</title>
        <meta name="description" content="Plumbing and HVAC marketing company focused on more booked service calls. SEO, Google Maps optimization, paid advertising, and reputation management engineered around dispatch capacity and seasonality." />
        <meta name="keywords" content="plumbing marketing, HVAC marketing, plumber SEO, HVAC SEO, plumbing Google Ads, HVAC lead generation, local marketing plumbing" />
        <link rel="canonical" href="https://demandstreamdigital.com/" />
        
        <link rel="alternate" hrefLang="en-US" href="https://demandstreamdigital.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://demandstreamdigital.com/" />
        
        <script type="application/ld+json">{JSON.stringify(combinedSchema)}</script>
        
        <meta property="og:title" content="Growth Marketing for Plumbing & HVAC Companies | Demand Stream Digital" />
        <meta property="og:description" content="More calls, more jobs, more growth. SEO, Google Ads, reputation management, and content marketing built specifically for plumbing and HVAC companies." />
        <meta property="og:url" content="https://demandstreamdigital.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Demand Stream Digital" />
        <meta property="og:image" content={ogImage} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Growth Marketing for Plumbing & HVAC Companies | Demand Stream Digital" />
        <meta name="twitter:description" content="More calls, more jobs, more growth. SEO, Google Ads, reputation management, and content marketing built specifically for plumbing and HVAC companies." />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      
      <Header />
      <Hero />
      
      <TrustReel />
      
      <div className="dark relative">
        <WaveDivider position="top" fromColor="#f9f9f9" toColor="hsl(213, 64%, 8%)" variant="curve" />
        <ProblemSolution />
      </div>
      
      <div className="relative">
        <WaveDivider position="top" fromColor="hsl(213, 64%, 8%)" toColor="#f9f9f9" variant="curve" flip />
        <WhyPartnerWithUs />
      </div>
      <FitQualifier />
      
      <div className="dark relative" id="services">
        <WaveDivider position="top" fromColor="#f9f9f9" toColor="hsl(213, 64%, 8%)" variant="curve" flip />
        <ServicesGrid />
      </div>
      
      <div className="relative">
        <WaveDivider position="top" fromColor="hsl(213, 64%, 8%)" toColor="#f9f9f9" variant="curve" />
        <TopicalExpertise />
      </div>
      
      <GrowthProcess />
      
      <div className="dark relative">
        <WaveDivider position="top" fromColor="#f9f9f9" toColor="hsl(213, 64%, 8%)" variant="curve" flip />
        <LocalGrowthEngine />
      </div>
      
      <div className="dark relative" id="about">
        <WhatWeSolve />
      </div>
      
      <div className="relative">
        <WaveDivider position="top" fromColor="hsl(213, 64%, 8%)" toColor="#f9f9f9" variant="curve" />
        <MidPageCTA variant="light" />
      </div>
      
      <div className="dark relative">
        <WaveDivider position="top" fromColor="#f9f9f9" toColor="hsl(213, 64%, 8%)" variant="curve" flip />
        <FeaturedCaseStudies />
      </div>
      
      <div className="dark relative">
        <WaveDivider position="top" fromColor="hsl(213, 64%, 8%)" toColor="hsl(213, 64%, 8%)" variant="curve" />
        <FounderEEAT />
      </div>
      
      <div id="testimonials" className="relative">
        <WaveDivider position="top" fromColor="hsl(213, 64%, 8%)" toColor="#f9f9f9" variant="curve" />
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
