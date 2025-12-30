import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import Testimonials from "@/components/sections/Testimonials";
import ServiceHubHero from "@/components/services/ServiceHubHero";
import WhyItMatters from "@/components/services/WhyItMatters";
import OurApproach from "@/components/services/OurApproach";
import HubSpokeDiagram from "@/components/services/HubSpokeDiagram";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import HubFAQ from "@/components/services/HubFAQ";
import OtherServices from "@/components/services/OtherServices";
import { getHubBySlug } from "@/data/services";

const PaidMedia = () => {
  const hub = getHubBySlug("paid-media");
  if (!hub) return null;

  const breadcrumbItems = [
    { label: "Services", href: "/inbound-marketing-services" },
    { label: hub.title }
  ];

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>White-Label Paid Media Management for Agencies | Dialed-In Web</title>
        <meta name="description" content="White-label Google Ads and Meta Ads management for agencies. Local search campaigns, landing page optimization, and ROI-focused paid media that generates leads." />
        <link rel="canonical" href="https://dialedinweb.com/inbound-marketing-services/paid-media" />
      </Helmet>
      
      <Header />
      <div className="pt-16">
        <ServiceHubHero 
          title={hub.title} 
          description={hub.heroDescription}
          breadcrumbs={breadcrumbItems}
        />
      </div>
      <WhyItMatters {...hub.whyItMatters} />
      <OurApproach {...hub.ourApproach} />
      <HubSpokeDiagram hubSlug={hub.slug} hubTitle={hub.title} spokes={hub.spokes} />
      <ServiceBenefits {...hub.benefits} />
      <Testimonials />
      <HubFAQ title={hub.title} faqs={hub.faqs} />
      <OtherServices currentHubSlug={hub.slug} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default PaidMedia;
