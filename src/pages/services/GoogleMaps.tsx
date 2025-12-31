import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import TrustReel from "@/components/sections/TrustReel";
import Testimonials from "@/components/sections/Testimonials";
import { googleMapsConfig } from "@/data/service-pages/google-maps";
import { getHubBySlug } from "@/data/services";
import type { BreadcrumbItem } from "@/types/servicePage";

// Generic section components
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

// GBP-specific component
import GBPRankingFactors from "@/components/services/gbp/GBPRankingFactors";

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const GoogleMaps = () => {
  const hub = getHubBySlug("google-maps");
  if (!hub) return null;

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Services", href: "/white-label-inbound-marketing-services" },
    { label: googleMapsConfig.title }
  ];

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{googleMapsConfig.metaTitle}</title>
        <meta name="description" content={googleMapsConfig.metaDescription} />
        <link rel="canonical" href={googleMapsConfig.canonicalUrl} />
        {googleMapsConfig.keywords && <meta name="keywords" content={googleMapsConfig.keywords} />}
      </Helmet>
      
      <Header />
      
      {/* 1. HERO */}
      <div className="pt-16">
        <ServiceHubHero 
          title={hub.title}
          description={hub.heroDescription}
          breadcrumbs={breadcrumbItems}
          integrationNote={hub.integrationNote}
          heroHeadline={hub.heroHeadline}
          heroSubtitle={hub.heroSubtitle}
        />
      </div>
      
      {/* 2. TRUST REEL */}
      <TrustReel />
      
      <SectionDivider />
      
      {/* 3. PROBLEM */}
      <ServiceProblemSection config={googleMapsConfig.problem} />
      
      <SectionDivider />
      
      {/* 4. OUTCOMES */}
      <ServiceOutcomesSection config={googleMapsConfig.outcomes} />
      
      {/* Ranking Factors - GBP specific */}
      <GBPRankingFactors />
      
      <SectionDivider />
      
      {/* 5. ROADMAP */}
      <ServiceRoadmapSection config={googleMapsConfig.roadmap} />
      
      <SectionDivider />
      
      {/* 6. BUILDING BLOCKS */}
      <ServiceBuildingBlocksSection config={googleMapsConfig.buildingBlocks} hubSlug="google-maps" />
      
      <SectionDivider />
      
      {/* 7. QUALIFICATION */}
      <ServiceFitQualifierSection config={googleMapsConfig.qualification} />
      
      {/* 8. TESTIMONIALS */}
      <Testimonials />
      
      <SectionDivider />
      
      {/* 9. FAQ */}
      <ServiceGroupedFAQ config={googleMapsConfig.faq} />
      
      <SectionDivider />
      
      {/* 10. ECOSYSTEM */}
      <ServiceEcosystemSection config={googleMapsConfig.ecosystem} />
      
      {/* 11. CONTACT */}
      <ContactForm />
      
      <Footer />
    </div>
  );
};

export default GoogleMaps;