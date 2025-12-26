import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import TrustReel from "@/components/sections/TrustReel";
import TopicalExpertise from "@/components/sections/TopicalExpertise";
import LocalGrowthEngine from "@/components/sections/LocalGrowthEngine";
import ScalableFulfillment from "@/components/sections/ScalableFulfillment";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <TrustReel />
      <div id="services">
        <TopicalExpertise />
      </div>
      <LocalGrowthEngine />
      <div id="about">
        <ScalableFulfillment />
      </div>
      <FAQ />
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
