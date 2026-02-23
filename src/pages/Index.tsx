import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import TrustReel from "@/components/sections/TrustReel";
import ResultsBar from "@/components/sections/ResultsBar";
import ProblemSolution from "@/components/sections/ProblemSolution";
import WhyPartnerWithUs from "@/components/sections/WhyPartnerWithUs";
import FitQualifier from "@/components/services/FitQualifier";
import MidPageCTA from "@/components/sections/MidPageCTA";
import ServicesGrid from "@/components/sections/ServicesGrid";
import TopicalExpertise from "@/components/sections/TopicalExpertise";


import MarketExclusivity from "@/components/sections/MarketExclusivity";
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
      
      {/* Down arrow transition */}
      <div className="flex justify-center -mb-4 relative z-10">
        <div className="w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      </div>
      
      {/* Positioning / credential stats */}
      <ResultsBar />
      
      {/* Problem framing */}
      <div className="dark relative">
        <WaveDivider position="top" fromColor="#f9f9f9" toColor="hsl(213, 64%, 8%)" variant="curve" />
        <ProblemSolution />
      </div>
      
      {/* Services: the system */}
      <div className="dark relative" id="services">
        <ServicesGrid />
      </div>
      
      {/* Proof: case studies (moved up) */}
      <div className="relative">
        <WaveDivider position="top" fromColor="hsl(213, 64%, 8%)" toColor="#f9f9f9" variant="curve" />
        <FeaturedCaseStudies />
      </div>
      
      {/* Market exclusivity (after proof) */}
      <div className="dark relative">
        <WaveDivider position="top" fromColor="#f9f9f9" toColor="hsl(213, 64%, 8%)" variant="curve" flip />
        <MarketExclusivity />
      </div>

      {/* Process: how we do it */}
      <div className="relative">
        <WaveDivider position="top" fromColor="hsl(213, 64%, 8%)" toColor="#f9f9f9" variant="curve" />
        <GrowthProcess />
      </div>
      
      {/* Convert warm leads */}
      <div className="dark relative">
        <WaveDivider position="top" fromColor="#f9f9f9" toColor="hsl(213, 64%, 8%)" variant="curve" flip />
        <MidPageCTA variant="light" />
      </div>
      
      {/* Industry expertise (condensed) */}
      <div className="relative">
        <WaveDivider position="top" fromColor="hsl(213, 64%, 8%)" toColor="#f9f9f9" variant="curve" />
        <TopicalExpertise />
      </div>
      
      {/* What working with us looks like */}
      <div className="dark relative">
        <WaveDivider position="top" fromColor="#f9f9f9" toColor="hsl(213, 64%, 8%)" variant="curve" flip />
        <WhyPartnerWithUs />
      </div>
      
      {/* Personal trust - Founder */}
      <div className="dark relative" id="about">
        <FounderEEAT />
      </div>
      
      <FitQualifier />

      {/* Reinforce pain points */}
      <div className="dark relative">
        <WaveDivider position="top" fromColor="#f9f9f9" toColor="hsl(213, 64%, 8%)" variant="curve" flip />
        <WhatWeSolve />
      </div>
      
      {/* Social proof */}
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
