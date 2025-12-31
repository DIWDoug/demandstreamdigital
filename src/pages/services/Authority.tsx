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
import { authorityConfig } from "@/data/service-pages/authority";
import { getHubBySlug } from "@/data/services";

const SectionDivider = () => (
  <div className="w-full">
    <hr className="border-t border-border/30" />
  </div>
);

const Authority = () => {
  const hub = getHubBySlug("local-authority-building");
  if (!hub) return null;

  const breadcrumbItems = [
    { label: "Services", href: "/white-label-inbound-marketing-services" },
    { label: hub.title }
  ];

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{authorityConfig.metaTitle}</title>
        <meta name="description" content={authorityConfig.metaDescription} />
        <link rel="canonical" href={authorityConfig.canonicalUrl} />
      </Helmet>
      
      <Header />
      <div className="pt-16">
        <ServiceHubHero 
          title={hub.title} 
          description={hub.heroDescription}
          breadcrumbs={breadcrumbItems}
          integrationNote={hub.integrationNote}
        />
      </div>
      
      <TrustReel />
      
      <SectionDivider />
      
      <ServiceProblemSection config={authorityConfig.problem} />
      
      <ServiceOutcomesSection config={authorityConfig.outcomes} />
      
      <SectionDivider />
      
      <ServiceRoadmapSection config={authorityConfig.roadmap} />
      
      <SectionDivider />
      
      <ServiceBuildingBlocksSection config={authorityConfig.buildingBlocks} />
      
      <SectionDivider />
      
      <ServiceFitQualifierSection config={authorityConfig.qualification} />
      
      <Testimonials />
      
      <SectionDivider />
      
      <ServiceGroupedFAQ config={authorityConfig.faq} />
      
      <SectionDivider />
      
      <ServiceEcosystemSection config={authorityConfig.ecosystem} />
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Authority;
