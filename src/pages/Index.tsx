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

const Index = () => {
  const homepageSchema = getHomepageSchema();
  const faqSchema = getHomepageFAQSchema();

  // Combine schemas
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
        <title>White Label Digital Marketing Services for Agencies | SEO, PPC, Content & Web by Dialed-in Web</title>
        <meta name="description" content="Scale your agency with white label SEO, paid media, content, and web—fully managed by Dialed-in Web under your brand." />
        <meta name="keywords" content="white label digital marketing, white label SEO services, white label PPC management, agency fulfillment partner, wholesale marketing services" />
        <link rel="canonical" href="https://dialedinweb.com/" />
        
        {/* Hreflang Tags */}
        <link rel="alternate" hrefLang="en-US" href="https://dialedinweb.com/" />
        <link rel="alternate" hrefLang="en-CA" href="https://dialedinweb.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://dialedinweb.com/" />
        
        <script type="application/ld+json">{JSON.stringify(combinedSchema)}</script>
        
        {/* Open Graph */}
        <meta property="og:title" content="White Label Digital Marketing Services for Agencies | SEO, PPC, Content & Web by Dialed-in Web" />
        <meta property="og:description" content="Scale your agency with white label SEO, paid media, content, and web—fully managed by Dialed-in Web under your brand." />
        <meta property="og:url" content="https://dialedinweb.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dialed-In Web" />
        <meta property="og:image" content="https://dialedinweb.com/dialedinweb-logo.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="White Label Digital Marketing Services for Agencies | SEO, PPC, Content & Web by Dialed-in Web" />
        <meta name="twitter:description" content="Scale your agency with white label SEO, paid media, content, and web—fully managed by Dialed-in Web under your brand." />
        <meta name="twitter:image" content="https://dialedinweb.com/dialedinweb-logo.png" />
      </Helmet>
      
      {/* Dark header/hero section */}
      <div className="dark">
        <Header />
        <Hero />
      </div>
      
      <TrustReel />
      
      {/* Problem/Solution - dramatic dark section */}
      <div className="dark">
        <ProblemSolution />
      </div>
      
      {/* Light sections - warm luxury feel */}
      <HonestWordOnFulfillment />
      <WhyPartnerWithUs />
      <FitQualifier />
      
      <div id="services">
        <ServicesGrid />
      </div>
      
      {/* Expertise - back to dark for drama */}
      <div className="dark">
        <TopicalExpertise />
      </div>
      
      <LocalGrowthEngine />
      
      {/* What We Solve - dark dramatic section */}
      <div className="dark">
        <div id="about">
          <WhatWeSolve />
        </div>
      </div>
      
      <MidPageCTA variant="light" />
      
      <FeaturedCaseStudies />
      
      <div id="testimonials">
        <Testimonials />
      </div>
      
      <FAQ />
      
      {/* Contact & Footer - dark elegant finish */}
      <div className="dark">
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
