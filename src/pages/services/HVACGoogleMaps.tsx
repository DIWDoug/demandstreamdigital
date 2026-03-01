import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import MarketExclusivity from "@/components/sections/MarketExclusivity";
import Testimonials from "@/components/sections/Testimonials";
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
  ServiceEcosystemSection,
  ServiceBiggerPicture
} from "@/components/services/generic";
import { hvacGoogleMapsConfig } from "@/data/service-pages/hvac-google-maps";
import GBPRankingFactors from "@/components/services/gbp/GBPRankingFactors";
import { getServiceHubSchema } from "@/lib/schema";

const HVAC_GBP_BIGGER_PICTURE_SERVICES = [
  { label: "HVAC Local SEO", href: "/hvac-seo" },
  { label: "HVAC Paid Advertising", href: "/hvac-paid-advertising" },
  { label: "HVAC Email Marketing", href: "/hvac-email-marketing" },
  { label: "HVAC Content Marketing", href: "/hvac-content-marketing" },
  { label: "Web Design", href: "/plumbing-and-hvac-web-design" },
  { label: "HVAC Reporting", href: "/hvac-reporting" },
];
const HVAC_GBP_ORBIT_NODES = [
  { label: "HVAC SEO", angle: 0 },
  { label: "Paid Advertising", angle: 60 },
  { label: "Email Marketing", angle: 120 },
  { label: "Content Marketing", angle: 180 },
  { label: "HVAC Reporting", angle: 240 },
  { label: "Web Design", angle: 300 },
];

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const HVACGoogleMaps = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/#services" },
    { label: hvacGoogleMapsConfig.title }
  ];

  const pageSchema = getServiceHubSchema({
    name: "GBP SEO & Google Maps for HVAC Companies",
    description: hvacGoogleMapsConfig.metaDescription,
    url: hvacGoogleMapsConfig.canonicalUrl,
    serviceType: "HVAC GBP SEO Service",
    faqGroups: hvacGoogleMapsConfig.faq.groups
  });

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead
        title={hvacGoogleMapsConfig.metaTitle}
        description={hvacGoogleMapsConfig.metaDescription}
        canonical={hvacGoogleMapsConfig.canonicalUrl}
        schemaJson={pageSchema}
      />

      <Header />

      {/* 1. HERO */}
      <div className="pt-16">
        <ServiceHubHero
          title={hvacGoogleMapsConfig.title}
          description={hvacGoogleMapsConfig.hero.subheadline}
          breadcrumbs={breadcrumbItems}
          integrationNote={hvacGoogleMapsConfig.hero.integrationNote}
          heroHeadline={hvacGoogleMapsConfig.hero.headline}
          heroSubtitle={hvacGoogleMapsConfig.hero.highlightedText}
        />
      </div>

      <ServiceHubAnchorNav />

      {/* 3. PROBLEM */}
      <div id="problem" className="scroll-mt-32">
        <ServiceProblemSection config={hvacGoogleMapsConfig.problem} />
      </div>

      <SectionDivider />

      {/* 4. OUTCOMES */}
      <div id="outcomes" className="scroll-mt-32">
        <ServiceOutcomesSection config={hvacGoogleMapsConfig.outcomes} />
      </div>

      {/* Ranking Factors - GBP specific */}
      <GBPRankingFactors />

      <SectionDivider />

      {/* 5. ROADMAP */}
      <div id="roadmap" className="scroll-mt-32">
        <ServiceRoadmapSection config={hvacGoogleMapsConfig.roadmap} />
      </div>

      <MidPageCTA />

      <SectionDivider />

      {/* 6. BUILDING BLOCKS */}
      <div id="building-blocks" className="scroll-mt-32">
        <ServiceBuildingBlocksSection config={hvacGoogleMapsConfig.buildingBlocks} hubSlug="google-maps" />
      </div>

      <SectionDivider />

      {/* 7. QUALIFICATION */}
      <div id="qualification" className="scroll-mt-32">
        <ServiceFitQualifierSection config={hvacGoogleMapsConfig.qualification} />
      </div>

      {/* 8. TESTIMONIALS */}
      <div id="testimonials" className="scroll-mt-32">
        <Testimonials />
      </div>

      <SectionDivider />

      {/* 9. FAQ */}
      <div id="faq" className="scroll-mt-32">
        <ServiceGroupedFAQ config={hvacGoogleMapsConfig.faq} />
      </div>

      <SectionDivider />

      {/* 10. ECOSYSTEM */}
      <ServiceEcosystemSection config={hvacGoogleMapsConfig.ecosystem} />

      <MarketExclusivity />

      {/* 12. CONTACT */}
      <div id="contact" className="scroll-mt-32">
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
};

export default HVACGoogleMaps;
