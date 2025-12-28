import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import ServiceHubHero from "@/components/services/ServiceHubHero";
import WhyItMatters from "@/components/services/WhyItMatters";
import OurApproach from "@/components/services/OurApproach";
import ServiceSpokesGrid from "@/components/services/ServiceSpokesGrid";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceHubCTA from "@/components/services/ServiceHubCTA";
import RelatedHubs from "@/components/services/RelatedHubs";
import { getHubBySlug } from "@/data/services";

const PaidMedia = () => {
  const hub = getHubBySlug("paid-media");
  if (!hub) return null;

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>White-Label Paid Media Management | Dialed-In Web</title>
        <meta name="description" content="White-label Google Ads and Meta Ads management for agencies. Local search campaigns, landing page optimization, and ROI-focused paid media that generates leads." />
        <link rel="canonical" href="https://dialedinweb.com/services/paid-media" />
      </Helmet>
      
      <Header />
      <ServiceHubHero icon={hub.icon} title={hub.title} description={hub.heroDescription} />
      <WhyItMatters {...hub.whyItMatters} />
      <OurApproach {...hub.ourApproach} />
      <ServiceSpokesGrid hubSlug={hub.slug} hubTitle={hub.title} spokes={hub.spokes} />
      <ServiceBenefits {...hub.benefits} />
      <ServiceFAQ hubTitle={hub.title} faqs={hub.faqs} />
      <ServiceHubCTA hubTitle={hub.title} />
      <RelatedHubs currentSlug={hub.slug} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default PaidMedia;
