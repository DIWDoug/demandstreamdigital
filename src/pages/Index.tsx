import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import WhyPartnerWithUs from "@/components/sections/WhyPartnerWithUs";
import ServicesGrid from "@/components/sections/ServicesGrid";
import TopicalExpertise from "@/components/sections/TopicalExpertise";
import LocalGrowthEngine from "@/components/sections/LocalGrowthEngine";
import AIVisibility from "@/components/sections/AIVisibility";
import Packages from "@/components/sections/Packages";
import WhatWeSolve from "@/components/sections/WhatWeSolve";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";

import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <WhyPartnerWithUs />
      <div id="services">
        <ServicesGrid />
      </div>
      <TopicalExpertise />
      <LocalGrowthEngine />
      <AIVisibility />
      <Packages />
      <div id="about">
        <WhatWeSolve />
      </div>
      <Testimonials />
      <ContactForm />
      
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
