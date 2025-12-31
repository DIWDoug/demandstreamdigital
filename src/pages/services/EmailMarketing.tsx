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
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
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
      
      {/* 1. HERO */}
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
      
      {/* 3. PROBLEM */}
      <ServiceProblemSection config={emailMarketingConfig.problem} />
      
      <SectionDivider />
      
      {/* 4. OUTCOMES */}
      <ServiceOutcomesSection config={emailMarketingConfig.outcomes} />
      
      <SectionDivider />
      
      {/* 5. ROADMAP */}
      <ServiceRoadmapSection config={emailMarketingConfig.roadmap} />
      
      <SectionDivider />
      
      {/* 6. BUILDING BLOCKS */}
      <ServiceBuildingBlocksSection config={emailMarketingConfig.buildingBlocks} hubSlug="email-marketing" />
      
      <SectionDivider />
      
      {/* 7. QUALIFICATION */}
      <ServiceFitQualifierSection config={emailMarketingConfig.qualification} />
      
      {/* 8. TESTIMONIALS */}
      <Testimonials />
      
      <SectionDivider />
      
      {/* 9. FAQ */}
      <ServiceGroupedFAQ config={emailMarketingConfig.faq} />
      
      <SectionDivider />
      
      {/* 10. ECOSYSTEM */}
      <ServiceEcosystemSection config={emailMarketingConfig.ecosystem} />
      
      {/* 11. CONTACT */}
      <ContactForm />
      
      <Footer />
    </div>
  );
};

export default EmailMarketing;