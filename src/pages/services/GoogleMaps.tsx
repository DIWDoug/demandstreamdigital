import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";

import Testimonials from "@/components/sections/Testimonials";
import { googleMapsConfig } from "@/data/service-pages/google-maps";
import { getHubBySlug } from "@/data/services";
import type { BreadcrumbItem } from "@/types/servicePage";
import { getServiceHubSchema } from "@/lib/schema";

// Generic section components
import ServiceHubHero from "@/components/services/ServiceHubHero";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
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
    { label: "Inbound Marketing Services", href: "/white-label-inbound-marketing-services" },
    { label: googleMapsConfig.title }
  ];

  const pageSchema = getServiceHubSchema({
    name: "White-Label GBP SEO & Google Maps Optimization",
    description: googleMapsConfig.metaDescription,
    url: googleMapsConfig.canonicalUrl,
    serviceType: "GBP SEO Service",
    faqGroups: googleMapsConfig.faq.groups
  });

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{googleMapsConfig.metaTitle}</title>
        <meta name="description" content={googleMapsConfig.metaDescription} />
        <link rel="canonical" href={googleMapsConfig.canonicalUrl} />
        {googleMapsConfig.keywords && <meta name="keywords" content={googleMapsConfig.keywords} />}
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
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
      
      {/* STICKY ANCHOR NAV */}
      <ServiceHubAnchorNav />
      
      {/* 3. PROBLEM */}
      <div id="problem" className="scroll-mt-32">
        <ServiceProblemSection config={googleMapsConfig.problem} />
      </div>
      
      <SectionDivider />
      
      {/* 4. OUTCOMES */}
      <div id="outcomes" className="scroll-mt-32">
        <ServiceOutcomesSection config={googleMapsConfig.outcomes} />
      </div>
      
      {/* Ranking Factors - GBP specific */}
      <GBPRankingFactors />
      
      <SectionDivider />
      
      {/* 5. ROADMAP */}
      <div id="roadmap" className="scroll-mt-32">
        <ServiceRoadmapSection config={googleMapsConfig.roadmap} />
      </div>
      
      {/* Mid-Page CTA */}
      <MidPageCTA />
      
      <SectionDivider />
      
      {/* 6. BUILDING BLOCKS */}
      <div id="building-blocks" className="scroll-mt-32">
        <ServiceBuildingBlocksSection config={googleMapsConfig.buildingBlocks} hubSlug="google-maps" />
      </div>
      
      <SectionDivider />
      
      {/* 7. QUALIFICATION */}
      <div id="qualification" className="scroll-mt-32">
        <ServiceFitQualifierSection config={googleMapsConfig.qualification} />
      </div>
      
      {/* 8. TESTIMONIALS */}
      <div id="testimonials" className="scroll-mt-32">
        <Testimonials />
      </div>
      
      <SectionDivider />
      
      {/* 9. FAQ */}
      <div id="faq" className="scroll-mt-32">
        <ServiceGroupedFAQ config={googleMapsConfig.faq} />
      </div>
      
      <SectionDivider />
      
      {/* 10. ECOSYSTEM */}
      <ServiceEcosystemSection config={googleMapsConfig.ecosystem} />
      
      {/* 11. CONTACT */}
      <div id="contact" className="scroll-mt-32">
        <ContactForm />
      </div>
      
      <Footer />
    </div>
  );
};

export default GoogleMaps;
