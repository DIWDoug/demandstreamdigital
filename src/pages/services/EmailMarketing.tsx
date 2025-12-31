import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import TrustReel from "@/components/sections/TrustReel";
import Testimonials from "@/components/sections/Testimonials";
import ServiceHubHero from "@/components/services/ServiceHubHero";
import { 
  ServiceProblemSection,
  ServiceOutcomesSection,
  ServiceRoadmapSection,
  ServiceBuildingBlocksSection,
  ServiceFitQualifierSection,
  ServiceGroupedFAQ,
  ServiceEcosystemSection
} from "@/components/services/generic";
import { emailMarketingConfig } from "@/data/service-pages/email-marketing";
import { getHubBySlug } from "@/data/services";

const SectionDivider = () => (
  <div className="w-full">
    <hr className="border-t border-border/30" />
  </div>
);

const EmailMarketing = () => {
  const hub = getHubBySlug("email-marketing");
  if (!hub) return null;

  const breadcrumbItems = [
    { label: "Services", href: "/white-label-inbound-marketing-services" },
    { label: hub.title }
  ];

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{emailMarketingConfig.metaTitle}</title>
        <meta name="description" content={emailMarketingConfig.metaDescription} />
        <link rel="canonical" href={emailMarketingConfig.canonicalUrl} />
      </Helmet>
      
      <Header />
      <div className="pt-16">
        <ServiceHubHero 
          title={hub.title} 
          description={hub.heroDescription}
          breadcrumbs={breadcrumbItems}
        />
      </div>
      
      <TrustReel />
      
      <SectionDivider />
      
      <ServiceProblemSection config={emailMarketingConfig.problem} />
      
      <ServiceOutcomesSection config={emailMarketingConfig.outcomes} />
      
      <SectionDivider />
      
      <ServiceRoadmapSection config={emailMarketingConfig.roadmap} />
      
      <SectionDivider />
      
      <ServiceBuildingBlocksSection config={emailMarketingConfig.buildingBlocks} />
      
      <SectionDivider />
      
      <ServiceFitQualifierSection config={emailMarketingConfig.qualification} />
      
      <Testimonials />
      
      <SectionDivider />
      
      <ServiceGroupedFAQ config={emailMarketingConfig.faq} />
      
      <SectionDivider />
      
      <ServiceEcosystemSection config={emailMarketingConfig.ecosystem} />
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default EmailMarketing;
