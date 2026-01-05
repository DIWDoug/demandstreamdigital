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
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>White Label Digital Marketing Services for Agencies | SEO, PPC, Content & Web by Dialed-in Web</title>
        <meta name="description" content="Scale your agency with white label SEO, paid media, content, and web—fully managed by Dialed-in Web under your brand." />
        <link rel="canonical" href="https://dialedinweb.com/" />
        <script type="application/ld+json">{JSON.stringify(combinedSchema)}</script>
      </Helmet>
      <Header />
      <Hero />
      <TrustReel />
      
      {/* Wave transition into Problem/Solution */}
      <div className="relative">
        <WaveDivider position="top" fromColor="hsl(var(--background))" toColor="hsl(var(--surface-dark))" variant="wave" />
        <ProblemSolution />
      </div>
      {/* Soft divider between sections */}
      <div className="container mx-auto px-6 lg:px-8">
        <div className="border-t border-border/40" />
      </div>
      <HonestWordOnFulfillment />
      <WhyPartnerWithUs />
      <FitQualifier />
      
      <div id="services">
        <ServicesGrid />
      </div>
      
      {/* Curved transition into TopicalExpertise */}
      <div className="relative">
        <WaveDivider position="top" fromColor="hsl(var(--background))" toColor="hsl(var(--surface-dark))" variant="curve" flip />
        <TopicalExpertise />
      </div>
      
      <LocalGrowthEngine />
      
      {/* Layered wave transition into WhatWeSolve */}
      <div className="relative">
        <WaveDivider position="top" fromColor="hsl(var(--primary))" toColor="hsl(var(--surface-dark))" variant="layered" />
        <div id="about">
          <WhatWeSolve />
        </div>
      </div>
      
      <MidPageCTA variant="dark" />
      
      <div id="testimonials">
        <Testimonials />
      </div>
      
      <FAQ />
      
      <ContactForm />
      
      <Footer />
    </div>
  );
};

export default Index;
