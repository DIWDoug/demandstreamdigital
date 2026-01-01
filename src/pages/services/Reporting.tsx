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
import { reportingConfig } from "@/data/service-pages/reporting";
import { getHubBySlug } from "@/data/services";

const SectionDivider = () => (
  <div className="w-full">
    <hr className="border-t border-border/30" />
  </div>
);

const Reporting = () => {
  const hub = getHubBySlug("reporting");
  if (!hub) return null;

  const breadcrumbItems = [
    { label: "Services", href: "/white-label-inbound-marketing-services" },
    { label: hub.title }
  ];

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{reportingConfig.metaTitle}</title>
        <meta name="description" content={reportingConfig.metaDescription} />
        <link rel="canonical" href={reportingConfig.canonicalUrl} />
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
      
      <ServiceProblemSection config={reportingConfig.problem} />
      
      <ServiceOutcomesSection config={reportingConfig.outcomes} />
      
      <SectionDivider />
      
      <ServiceRoadmapSection config={reportingConfig.roadmap} />
      
      <SectionDivider />
      
      <ServiceBuildingBlocksSection config={reportingConfig.buildingBlocks} hubSlug="reporting" />
      
      <SectionDivider />
      
      <ServiceFitQualifierSection config={reportingConfig.qualification} />
      
      <Testimonials />
      
      <SectionDivider />
      
      <ServiceGroupedFAQ config={reportingConfig.faq} />
      
      <SectionDivider />
      
      <ServiceEcosystemSection config={reportingConfig.ecosystem} />
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Reporting;
