import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import MarketExclusivity from "@/components/sections/MarketExclusivity";

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
import { ServiceBiggerPicture } from "@/components/services/generic";

const GBP_BIGGER_PICTURE_SERVICES = [
  { label: "Local SEO", href: "/hvac-and-plumbing-seo" },
  { label: "Paid Advertising", href: "/hvac-and-plumbing-paid-ads" },
  { label: "Reputation Management", href: "/hvac-and-plumbing-seo" },
  { label: "Email Marketing", href: "/plumbing-email-marketing" },
  { label: "Web Design", href: "/plumbing-and-hvac-web-design" },
  { label: "Reporting & Dashboards", href: "/plumbing-reporting" },
];
const GBP_ORBIT_NODES = [
  { label: "Local SEO", angle: 0 },
  { label: "Paid Advertising", angle: 60 },
  { label: "Reputation Mgmt", angle: 120 },
  { label: "Email Marketing", angle: 180 },
  { label: "Reporting & Dashboards", angle: 240 },
  { label: "Web Design", angle: 300 },
];

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const GoogleMaps = () => {
  const hub = getHubBySlug("google-maps");
  if (!hub) return null;

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Services", href: "/#services" },
    { label: googleMapsConfig.title }
  ];

  const pageSchema = getServiceHubSchema({
    name: "GBP SEO & Google Maps for Plumbing & HVAC",
    description: googleMapsConfig.metaDescription,
    url: googleMapsConfig.canonicalUrl,
    serviceType: "GBP SEO Service",
    faqGroups: googleMapsConfig.faq.groups
  });

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead
        title={googleMapsConfig.metaTitle}
        description={googleMapsConfig.metaDescription}
        canonical={googleMapsConfig.canonicalUrl}
        schemaJson={pageSchema}
      />
      
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

      {/* 11. BIGGER PICTURE */}
      <ServiceBiggerPicture
        heading="Google Maps Is One Piece of the"
        headingHighlight="Connected Growth System"
        body1="Your GBP drives pack visibility and direct calls. But it performs best when it's connected to organic SEO, review velocity, and paid advertising, not running in isolation."
        body2="Strong GBP signals reinforce your local organic rankings. High review velocity improves paid ad quality scores and conversion rates. Your SEO content supports the topical relevance that Maps uses to rank. Every channel feeds the next. When they work together, call volume compounds faster than any single channel can produce alone."
        centerLabel="Google Maps"
        centerSublabel="Local pack visibility & direct calls."
        services={GBP_BIGGER_PICTURE_SERVICES}
        orbitNodes={GBP_ORBIT_NODES}
      />

      <MarketExclusivity />
      
      {/* 11. CONTACT */}
      <div id="contact" className="scroll-mt-32">
        <ContactForm />
      </div>
      
      <Footer />
    </div>
  );
};

export default GoogleMaps;
