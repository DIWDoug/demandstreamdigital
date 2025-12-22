import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import TrustReel from "@/components/sections/TrustReel";
import FeaturedIn from "@/components/sections/FeaturedIn";
import ScalableFulfillment from "@/components/sections/ScalableFulfillment";
import RetentionPhilosophy from "@/components/sections/RetentionPhilosophy";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Packages from "@/components/sections/Packages";
import WhatWeSolve from "@/components/sections/WhatWeSolve";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";
import HowWeOperate from "@/components/sections/HowWeOperate";
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
      <Packages />
      <div id="about">
        <WhatWeSolve />
      </div>
      <Testimonials />
      <ContactForm />
      <HowWeOperate />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
