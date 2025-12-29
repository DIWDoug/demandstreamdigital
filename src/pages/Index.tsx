import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import TrustReel from "@/components/sections/TrustReel";
import AntiPackageDiagnosis from "@/components/sections/AntiPackageDiagnosis";
import FulfillmentApproach from "@/components/sections/FulfillmentApproach";
import WhoWeAre from "@/components/sections/WhoWeAre";
import WhyPartnerWithUs from "@/components/sections/WhyPartnerWithUs";
import FitQualifier from "@/components/services/FitQualifier";
import MidPageCTA from "@/components/sections/MidPageCTA";
import ServicesGrid from "@/components/sections/ServicesGrid";
import TopicalExpertise from "@/components/sections/TopicalExpertise";
import LocalGrowthEngine from "@/components/sections/LocalGrowthEngine";

import WhatWeSolve from "@/components/sections/WhatWeSolve";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import WaveDivider from "@/components/WaveDivider";

const Index = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>White-Label Digital Marketing Fulfillment for Agencies | Dialed-In Web</title>
        <meta name="description" content="We partner with agencies to deliver custom white-label SEO, local search, paid media, and authority building. Tailored to each client's market, competition, and scope." />
        <link rel="canonical" href="https://dialedinweb.com/" />
      </Helmet>
      <Header />
      <Hero />
      <TrustReel />
      
      {/* Wave transition into AntiPackageDiagnosis */}
      <div className="relative">
        <WaveDivider position="top" fromColor="hsl(var(--background))" toColor="hsl(var(--surface-dark))" variant="wave" />
        <AntiPackageDiagnosis />
      </div>
      
      <FulfillmentApproach />
      <WhoWeAre />
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
