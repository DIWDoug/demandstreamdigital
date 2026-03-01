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

const TerritoryCallout = () => (
  <div className="dark relative">
    <WaveDivider position="top" fromColor="#f9f9f9" toColor="hsl(213, 64%, 8%)" variant="curve" flip animated />
    <div className="py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent-blue mb-3">One Company Per Market</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Your Competitors Don't Get In While You're In
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            We take one plumbing client and one HVAC client per service area. If your market is open, now is when to find out.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/contact" className="btn-cta inline-flex items-center gap-2">
              Claim Your Territory Today
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-blue/80 font-semibold transition-colors">
              <Phone className="h-4 w-4" />
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </div>
    </div>
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
        title="Plumbing & HVAC Marketing | SEO, PPC & Lead Gen | DSD"
        description="More booked service calls for plumbing and HVAC companies. SEO, Google Maps, paid ads, and AI automation built around dispatch capacity and seasonality."
        canonical="https://demandstreamdigital.com/"
        ogImage={ogImage}
        keywords="plumbing marketing, HVAC marketing, plumber SEO, HVAC SEO, plumbing Google Ads, HVAC lead generation, local marketing plumbing"
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
      <div className="relative">
        <WaveDivider position="top" fromColor="hsl(213, 64%, 8%)" toColor="#f9f9f9" variant="curve" animated />
        <GrowthProcess />
      </div>
      
      {/* Convert warm leads */}
      <div className="dark relative">
        <WaveDivider position="top" fromColor="#f9f9f9" toColor="hsl(213, 64%, 8%)" variant="curve" flip animated />
        <MidPageCTA variant="light" />
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
      
      <FAQ />
      
      <ContactForm />
      
      <div className="dark">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
