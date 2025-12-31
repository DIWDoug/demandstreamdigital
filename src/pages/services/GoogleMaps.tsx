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
import ServiceProblemSection from "@/components/services/generic/ServiceProblemSection";
import ServiceRoadmapSection from "@/components/services/generic/ServiceRoadmapSection";
import ServiceFitQualifierSection from "@/components/services/generic/ServiceFitQualifierSection";
import ServiceGroupedFAQ from "@/components/services/generic/ServiceGroupedFAQ";
import ServiceEcosystemSection from "@/components/services/generic/ServiceEcosystemSection";

// GBP-specific components with internal linking
import GBPOutcomesSection from "@/components/services/gbp/GBPOutcomesSection";
import GBPBuildingBlocksSection from "@/components/services/gbp/GBPBuildingBlocksSection";
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
      
      {/* 1. HERO - Split layout with form */}
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
      
      {/* 3. THE PROBLEM */}
      <ServiceProblemSection config={googleMapsConfig.problem} />
      
      <SectionDivider />
      
      {/* 4. OUTCOMES - Custom with internal links */}
      <GBPOutcomesSection />
      
      {/* 5. WHITESPARK RESEARCH with interpretation */}
      <GBPRankingFactors />
      
      <SectionDivider />
      
      {/* 6. THE FRAMEWORK */}
      <ServiceRoadmapSection config={googleMapsConfig.roadmap} />
      
      <SectionDivider />
      
      {/* 7. BUILDING BLOCKS - Custom with spoke links */}
      <GBPBuildingBlocksSection />
      
      <SectionDivider />
      
      {/* 8. QUALIFICATION */}
      <ServiceFitQualifierSection config={googleMapsConfig.qualification} />
      
      {/* 9. SOCIAL PROOF */}
      <Testimonials />
      
      {/* 10. FAQ */}
      <ServiceGroupedFAQ config={googleMapsConfig.faq} />
      
      <SectionDivider />
      
      {/* 11. ECOSYSTEM CROSS-SELL */}
      <ServiceEcosystemSection config={googleMapsConfig.ecosystem} />
      
      {/* 12. FINAL CTA */}
      <ContactForm />
      
      <Footer />
    </div>
  );
};

export default GoogleMaps;
