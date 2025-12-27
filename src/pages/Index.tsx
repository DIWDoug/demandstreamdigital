import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import TrustReel from "@/components/sections/TrustReel";
import FeaturedIn from "@/components/sections/FeaturedIn";
import ScalableFulfillment from "@/components/sections/ScalableFulfillment";
import RetentionPhilosophy from "@/components/sections/RetentionPhilosophy";
import ServicesGrid from "@/components/sections/ServicesGrid";
import TopicalExpertise from "@/components/sections/TopicalExpertise";
import LocalGrowthEngine from "@/components/sections/LocalGrowthEngine";
import AIVisibility from "@/components/sections/AIVisibility";
import Packages from "@/components/sections/Packages";
import WhatWeSolve from "@/components/sections/WhatWeSolve";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";
import HowWeOperate from "@/components/sections/HowWeOperate";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <TrustReel />
      <FeaturedIn />
      <ScalableFulfillment />
      <RetentionPhilosophy />
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
      <HowWeOperate />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
