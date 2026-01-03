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
import { localSEOConfig } from "@/data/service-pages/local-seo";
import { getHubBySlug } from "@/data/services";

// Local SEO specific component
import LocalRankingFactors from "@/components/services/local-seo/LocalRankingFactors";

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const LocalSEO = () => {
  const hub = getHubBySlug("local-seo");
  if (!hub) return null;

  const breadcrumbItems = [
    { label: "Inbound Marketing Services", href: "/white-label-inbound-marketing-services" },
    { label: hub.title }
  ];

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{localSEOConfig.metaTitle}</title>
        <meta name="description" content={localSEOConfig.metaDescription} />
        <link rel="canonical" href={localSEOConfig.canonicalUrl} />
        {localSEOConfig.keywords && <meta name="keywords" content={localSEOConfig.keywords} />}
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
      <ServiceProblemSection config={localSEOConfig.problem} />
      
      <SectionDivider />
      
      {/* 4. OUTCOMES */}
      <ServiceOutcomesSection config={localSEOConfig.outcomes} />
      
      {/* Ranking Factors - Local SEO specific */}
      <LocalRankingFactors />
      
      <SectionDivider />
      
      {/* 5. ROADMAP */}
      <ServiceRoadmapSection config={localSEOConfig.roadmap} />
      
      {/* Mid-Page CTA */}
      <MidPageCTA />
      
      <SectionDivider />
      
      {/* 6. BUILDING BLOCKS */}
      <ServiceBuildingBlocksSection config={localSEOConfig.buildingBlocks} hubSlug="local-seo" />
      
      <SectionDivider />
      
      {/* 7. QUALIFICATION */}
      <ServiceFitQualifierSection config={localSEOConfig.qualification} />
      
      {/* 8. TESTIMONIALS */}
      <Testimonials />
      
      <SectionDivider />
      
      {/* 9. FAQ */}
      <ServiceGroupedFAQ config={localSEOConfig.faq} />
      
      <SectionDivider />
      
      {/* 10. ECOSYSTEM */}
      <ServiceEcosystemSection config={localSEOConfig.ecosystem} />
      
      {/* 11. CONTACT */}
      <ContactForm />
      
      <Footer />
    </div>
  );
};

export default LocalSEO;