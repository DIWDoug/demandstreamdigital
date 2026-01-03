import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import TrustReel from "@/components/sections/TrustReel";
import Testimonials from "@/components/sections/Testimonials";
import ServiceHubHero from "@/components/services/ServiceHubHero";
import MidPageCTA from "@/components/sections/MidPageCTA";
import { 
  ServiceProblemSection,
  ServiceOutcomesSection,
  ServiceRoadmapSection,
  ServiceBuildingBlocksSection,
  ServiceFitQualifierSection,
  ServiceGroupedFAQ,
  ServiceEcosystemSection
} from "@/components/services/generic";
import { contentMarketingConfig } from "@/data/service-pages/content-marketing";
import { getHubBySlug } from "@/data/services";

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const ContentMarketing = () => {
  const hub = getHubBySlug("content-marketing");
  if (!hub) return null;

  const breadcrumbItems = [
    { label: "Services", href: "/white-label-inbound-marketing-services" },
    { label: hub.title }
  ];

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{contentMarketingConfig.metaTitle}</title>
        <meta name="description" content={contentMarketingConfig.metaDescription} />
        <link rel="canonical" href={contentMarketingConfig.canonicalUrl} />
      </Helmet>
      
      <Header />
      
      {/* 1. HERO */}
      <div className="pt-16">
        <ServiceHubHero 
          title={hub.title} 
          description={hub.heroDescription}
          breadcrumbs={breadcrumbItems}
          integrationNote={hub.integrationNote}
        />
      </div>
      
      {/* 2. TRUST REEL */}
      <TrustReel />
      
      <SectionDivider />
      
      {/* 3. PROBLEM */}
      <ServiceProblemSection config={contentMarketingConfig.problem} />
      
      <SectionDivider />
      
      {/* 4. OUTCOMES */}
      <ServiceOutcomesSection config={contentMarketingConfig.outcomes} />
      
      <SectionDivider />
      
      {/* 5. ROADMAP */}
      <ServiceRoadmapSection config={contentMarketingConfig.roadmap} />
      
      {/* Mid-Page CTA */}
      <MidPageCTA />
      
      <SectionDivider />
      
      {/* 6. BUILDING BLOCKS */}
      <ServiceBuildingBlocksSection config={contentMarketingConfig.buildingBlocks} hubSlug="content-marketing" />
      
      <SectionDivider />
      
      {/* 7. QUALIFICATION */}
      <ServiceFitQualifierSection config={contentMarketingConfig.qualification} />
      
      {/* 8. TESTIMONIALS */}
      <Testimonials />
      
      <SectionDivider />
      
      {/* 9. FAQ */}
      <ServiceGroupedFAQ config={contentMarketingConfig.faq} />
      
      <SectionDivider />
      
      {/* 10. ECOSYSTEM */}
      <ServiceEcosystemSection config={contentMarketingConfig.ecosystem} />
      
      {/* 11. CONTACT */}
      <ContactForm />
      
      <Footer />
    </div>
  );
};

export default ContentMarketing;
