import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import TrustReel from "@/components/sections/TrustReel";
import Testimonials from "@/components/sections/Testimonials";
import ServiceHubHero from "@/components/services/ServiceHubHero";
import { paidMediaConfig } from "@/data/service-pages/paid-media";
import { getHubBySlug } from "@/data/services";
import type { BreadcrumbItem } from "@/types/servicePage";

// Generic section components
import ServiceProblemSection from "@/components/services/generic/ServiceProblemSection";
import ServiceOutcomesSection from "@/components/services/generic/ServiceOutcomesSection";
import ServiceRoadmapSection from "@/components/services/generic/ServiceRoadmapSection";
import ServiceBuildingBlocksSection from "@/components/services/generic/ServiceBuildingBlocksSection";
import ServiceFitQualifierSection from "@/components/services/generic/ServiceFitQualifierSection";
import ServiceGroupedFAQ from "@/components/services/generic/ServiceGroupedFAQ";
import ServiceEcosystemSection from "@/components/services/generic/ServiceEcosystemSection";

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const PaidMedia = () => {
  const hub = getHubBySlug("paid-media");
  if (!hub) return null;

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Services", href: "/white-label-inbound-marketing-services" },
    { label: paidMediaConfig.title }
  ];

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{paidMediaConfig.metaTitle}</title>
        <meta name="description" content={paidMediaConfig.metaDescription} />
        <link rel="canonical" href={paidMediaConfig.canonicalUrl} />
        {paidMediaConfig.keywords && <meta name="keywords" content={paidMediaConfig.keywords} />}
      </Helmet>
      
      <Header />
      
      {/* 1. HERO - Split layout with form */}
      <div className="pt-16">
        <ServiceHubHero 
          title={hub.title}
          description={hub.heroDescription}
          breadcrumbs={breadcrumbItems}
        />
      </div>
      
      {/* 2. TRUST REEL */}
      <TrustReel />
      
      <SectionDivider />
      
      {/* 3. THE PROBLEM */}
      <ServiceProblemSection config={paidMediaConfig.problem} />
      
      <SectionDivider />
      
      {/* 4. OUTCOMES */}
      <ServiceOutcomesSection config={paidMediaConfig.outcomes} />
      
      <SectionDivider />
      
      {/* 5. THE FRAMEWORK */}
      <ServiceRoadmapSection config={paidMediaConfig.roadmap} />
      
      <SectionDivider />
      
      {/* 6. BUILDING BLOCKS */}
      <ServiceBuildingBlocksSection config={paidMediaConfig.buildingBlocks} />
      
      <SectionDivider />
      
      {/* 7. QUALIFICATION */}
      <ServiceFitQualifierSection config={paidMediaConfig.qualification} />
      
      {/* 8. SOCIAL PROOF */}
      <Testimonials />
      
      {/* 9. FAQ */}
      <ServiceGroupedFAQ config={paidMediaConfig.faq} />
      
      <SectionDivider />
      
      {/* 10. ECOSYSTEM CROSS-SELL */}
      <ServiceEcosystemSection config={paidMediaConfig.ecosystem} />
      
      {/* 11. FINAL CTA */}
      <ContactForm />
      
      <Footer />
    </div>
  );
};

export default PaidMedia;
