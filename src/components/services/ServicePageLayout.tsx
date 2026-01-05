import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import TrustReel from "@/components/sections/TrustReel";
import Testimonials from "@/components/sections/Testimonials";
import type { ServicePageConfig, BreadcrumbItem } from "@/types/servicePage";

// Generic section components
import ServiceHeroGeneric from "./generic/ServiceHeroGeneric";
import ServiceProblemSection from "./generic/ServiceProblemSection";
import ServiceOutcomesSection from "./generic/ServiceOutcomesSection";
import ServiceRoadmapSection from "./generic/ServiceRoadmapSection";
import ServiceBuildingBlocksSection from "./generic/ServiceBuildingBlocksSection";
import ServiceFitQualifierSection from "./generic/ServiceFitQualifierSection";
import ServiceGroupedFAQ from "./generic/ServiceGroupedFAQ";
import ServiceEcosystemSection from "./generic/ServiceEcosystemSection";

/**
 * SERVICE PAGE LAYOUT
 * 
 * A unified layout component that assembles all service page sections
 * following the proven narrative arc:
 * 
 * 1. Hero - Hook with clear value proposition
 * 2. Trust Reel - Credibility whisper
 * 3. Problem - Why most approaches fail
 * 4. Value (optional) - Dollar framing for retention
 * 5. Outcomes - What actually changes
 * 6. Roadmap - The framework/process
 * 7. Building Blocks - What's included
 * 8. Qualification - Is this right for you
 * 9. Testimonials - Social proof
 * 10. FAQ - Handle objections
 * 11. Ecosystem - Cross-sell other services
 * 12. Contact - Final CTA
 * 
 * Usage:
 * ```tsx
 * import { localSEOConfig } from "@/data/service-pages/local-seo";
 * 
 * const LocalSEO = () => (
 *   <ServicePageLayout 
 *     config={localSEOConfig}
 *     valueSection={<SEOValueExplainer />}  // Optional custom value section
 *     customSections={{
 *       afterOutcomes: <LocalRankingFactors />  // Optional custom sections
 *     }}
 *   />
 * );
 * ```
 */

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

interface ServicePageLayoutProps {
  config: ServicePageConfig;
  /** Optional custom value section component */
  valueSection?: React.ReactNode;
  /** Optional custom sections to insert at specific points */
  customSections?: {
    afterTrustReel?: React.ReactNode;
    afterProblem?: React.ReactNode;
    afterValue?: React.ReactNode;
    afterOutcomes?: React.ReactNode;
    afterRoadmap?: React.ReactNode;
    afterBuildingBlocks?: React.ReactNode;
    afterQualification?: React.ReactNode;
    afterTestimonials?: React.ReactNode;
    afterFAQ?: React.ReactNode;
  };
}

const ServicePageLayout = ({ 
  config, 
  valueSection,
  customSections = {}
}: ServicePageLayoutProps) => {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Inbound Marketing Services", href: "/white-label-inbound-marketing-services" },
    { label: config.title }
  ];

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{config.metaTitle}</title>
        <meta name="description" content={config.metaDescription} />
        <link rel="canonical" href={config.canonicalUrl} />
        {config.keywords && <meta name="keywords" content={config.keywords} />}
        
        {/* Hreflang Tags */}
        <link rel="alternate" hrefLang="en-US" href={config.canonicalUrl} />
        <link rel="alternate" hrefLang="en-CA" href={config.canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={config.canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={config.metaTitle} />
        <meta property="og:description" content={config.metaDescription} />
        <meta property="og:url" content={config.canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dialed-In Web" />
        <meta property="og:image" content="https://dialedinweb.com/dialedinweb-logo.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.metaTitle} />
        <meta name="twitter:description" content={config.metaDescription} />
        <meta name="twitter:image" content="https://dialedinweb.com/dialedinweb-logo.png" />
      </Helmet>
      
      <Header />
      
      {/* 1. HERO */}
      <div className="pt-16">
        <ServiceHeroGeneric 
          config={config.hero}
          breadcrumbs={breadcrumbItems}
        />
      </div>
      
      {/* 2. TRUST REEL */}
      <TrustReel />
      {customSections.afterTrustReel}
      
      <SectionDivider />
      
      {/* 3. THE PROBLEM */}
      <ServiceProblemSection config={config.problem} />
      {customSections.afterProblem}
      
      <SectionDivider />
      
      {/* 4. VALUE CONVERSATION (optional) */}
      {valueSection && (
        <>
          {valueSection}
          {customSections.afterValue}
          <SectionDivider />
        </>
      )}
      
      {/* 5. OUTCOMES */}
      <ServiceOutcomesSection config={config.outcomes} />
      {customSections.afterOutcomes}
      
      <SectionDivider />
      
      {/* 6. THE FRAMEWORK */}
      <ServiceRoadmapSection config={config.roadmap} />
      {customSections.afterRoadmap}
      
      <SectionDivider />
      
      {/* 7. BUILDING BLOCKS */}
      <ServiceBuildingBlocksSection config={config.buildingBlocks} />
      {customSections.afterBuildingBlocks}
      
      <SectionDivider />
      
      {/* 8. QUALIFICATION */}
      <ServiceFitQualifierSection config={config.qualification} />
      {customSections.afterQualification}
      
      {/* 9. SOCIAL PROOF */}
      <Testimonials />
      {customSections.afterTestimonials}
      
      {/* 10. FAQ */}
      <ServiceGroupedFAQ config={config.faq} />
      {customSections.afterFAQ}
      
      <SectionDivider />
      
      {/* 11. ECOSYSTEM CROSS-SELL */}
      <ServiceEcosystemSection config={config.ecosystem} />
      
      {/* 12. FINAL CTA */}
      <ContactForm />
      
      <Footer />
    </div>
  );
};

export default ServicePageLayout;
