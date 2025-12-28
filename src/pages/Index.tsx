import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import WhoWeAre from "@/components/sections/WhoWeAre";
import WhyPartnerWithUs from "@/components/sections/WhyPartnerWithUs";
import MidPageCTA from "@/components/sections/MidPageCTA";
import ServicesGrid from "@/components/sections/ServicesGrid";
import TopicalExpertise from "@/components/sections/TopicalExpertise";
import LocalGrowthEngine from "@/components/sections/LocalGrowthEngine";

import ContinuingEducation from "@/components/sections/ContinuingEducation";

import WhatWeSolve from "@/components/sections/WhatWeSolve";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";

import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

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
      <WhoWeAre />
      <WhyPartnerWithUs />
      <div id="services">
        <ServicesGrid />
      </div>
      <TopicalExpertise />
      <LocalGrowthEngine />
      
      <ContinuingEducation />
      
      <div id="about">
        <WhatWeSolve />
      </div>
      <MidPageCTA variant="dark" />
      <div id="testimonials">
        <Testimonials />
      </div>
      <ContactForm />
      
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
