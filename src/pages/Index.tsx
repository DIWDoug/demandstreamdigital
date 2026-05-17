import SEOHead from "@/components/SEOHead";
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


import WhatWeSolve from "@/components/sections/WhatWeSolve";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";
import FAQ, { getHomepageFAQSchema } from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import WaveDivider from "@/components/WaveDivider";
import FeaturedCaseStudies from "@/components/sections/FeaturedCaseStudies";
import FounderEEAT from "@/components/sections/FounderEEAT";
import GrowthProcess from "@/components/sections/GrowthProcess";

import ScheduleGrowthAuditCTA from "@/components/cta/ScheduleGrowthAuditCTA";

const TerritoryCallout = () => (
  <div className="dark">
    <ScheduleGrowthAuditCTA
      density="spacious"
      withTopWaveDivider
      withTexture={false}
      showPhoneFallback
    />
  </div>
);
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
      <SEOHead
      title="Plumbing & HVAC Marketing | DemandStream Digital"
      description="More booked service calls for plumbing and HVAC. SEO, Google Maps, paid ads, and AI automation built for dispatch capacity."
      canonical="https://demandstreamdigital.com/"
      ogImage={ogImage}
      schemaJson={combinedSchema}
      />
      
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
        <WaveDivider position="top" fromColor="#f9f9f9" toColor="hsl(213, 64%, 8%)" variant="curve" animated />
        <ProblemSolution />
      </div>
      
      {/* Services: the system */}
      <div className="dark relative" id="services">
        <ServicesGrid />
      </div>
      
      {/* Proof: case studies (moved up) */}
      <div className="relative">
        <WaveDivider position="top" fromColor="hsl(213, 64%, 8%)" toColor="#f9f9f9" variant="curve" animated />
        <FeaturedCaseStudies />
      </div>
      
      {/* Territory CTA (replaces full MarketExclusivity section) */}
      <TerritoryCallout />

      {/* Process: how we do it */}
      <div className="relative bg-[#F7F8FA]">
        <div className="h-px w-full bg-accent-blue/30" />
        <GrowthProcess />
      </div>
      
      {/* Convert warm leads */}
      <div className="dark relative">
        <div className="h-px w-full bg-accent-blue/30" />
        <MidPageCTA variant="dark" />
      </div>
      
      {/* Industry expertise (condensed) */}
      <div className="relative">
        <WaveDivider position="top" fromColor="hsl(213, 64%, 8%)" toColor="#f9f9f9" variant="curve" animated />
        <TopicalExpertise />
      </div>
      
      {/* What working with us looks like */}
      <div className="dark relative">
        <WaveDivider position="top" fromColor="#f9f9f9" toColor="hsl(213, 64%, 8%)" variant="curve" flip animated />
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
      
      <div className="relative">
        <WaveDivider position="top" fromColor="#f9f9f9" toColor="hsl(210, 53%, 11%)" variant="curve" flip />
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
