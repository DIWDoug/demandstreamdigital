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
} from "@/components/services/generic";
import { hvacContentMarketingConfig } from "@/data/service-pages/hvac-content-marketing";
import { getServiceHubSchema } from "@/lib/schema";

const HVAC_CONTENT_BIGGER_PICTURE_SERVICES = [
  { label: "HVAC Local SEO", href: "/hvac-seo" },
  { label: "HVAC Google Maps / GBP", href: "/hvac-google-maps" },
  { label: "HVAC Paid Advertising", href: "/hvac-paid-advertising" },
  { label: "HVAC Email Marketing", href: "/hvac-email-marketing" },
  { label: "Web Design", href: "/plumbing-and-hvac-web-design" },
  { label: "HVAC Reporting", href: "/hvac-reporting" },
];
const HVAC_CONTENT_ORBIT_NODES = [
  { label: "HVAC SEO", angle: 0 },
  { label: "HVAC GBP", angle: 60 },
  { label: "Paid Advertising", angle: 120 },
  { label: "Email Marketing", angle: 180 },
  { label: "HVAC Reporting", angle: 240 },
  { label: "Web Design", angle: 300 },
];

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const HVACContentMarketing = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/#services" },
    { label: hvacContentMarketingConfig.title }
  ];

  const pageSchema = getServiceHubSchema({
    name: "Content Marketing for HVAC Companies",
    description: hvacContentMarketingConfig.metaDescription,
    url: hvacContentMarketingConfig.canonicalUrl,
    serviceType: "HVAC Content Marketing Service",
    faqGroups: hvacContentMarketingConfig.faq.groups
  });

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead
        title={hvacContentMarketingConfig.metaTitle}
        description={hvacContentMarketingConfig.metaDescription}
        canonical={hvacContentMarketingConfig.canonicalUrl}
        schemaJson={pageSchema}
      />

      <Header />

      {/* 1. HERO */}
      <div className="pt-16">
        <ServiceHubHero
          title={hvacContentMarketingConfig.title}
          description={hvacContentMarketingConfig.hero.subheadline}
          breadcrumbs={breadcrumbItems}
          integrationNote={hvacContentMarketingConfig.hero.qualifierLine}
        />
      </div>

      <ServiceHubAnchorNav />

      {/* 3. PROBLEM */}
      <div id="problem" className="scroll-mt-32">
        <ServiceProblemSection config={hvacContentMarketingConfig.problem} />
      </div>

      <SectionDivider />

      {/* 4. OUTCOMES */}
      <div id="outcomes" className="scroll-mt-32">
        <ServiceOutcomesSection config={hvacContentMarketingConfig.outcomes} />
      </div>

      <SectionDivider />

      {/* 5. ROADMAP */}
      <div id="roadmap" className="scroll-mt-32">
        <ServiceRoadmapSection config={hvacContentMarketingConfig.roadmap} />
      </div>

      <MidPageCTA />

      <SectionDivider />

      {/* 6. BUILDING BLOCKS */}
      <div id="building-blocks" className="scroll-mt-32">
        <ServiceBuildingBlocksSection config={hvacContentMarketingConfig.buildingBlocks} hubSlug="content-marketing" />
      </div>

      <SectionDivider />

      {/* 7. QUALIFICATION */}
      <div id="qualification" className="scroll-mt-32">
        <ServiceFitQualifierSection config={hvacContentMarketingConfig.qualification} />
      </div>

      {/* 8. TESTIMONIALS */}
      <div id="testimonials" className="scroll-mt-32">
        <Testimonials />
      </div>

      <SectionDivider />

      {/* 9. FAQ */}
      <div id="faq" className="scroll-mt-32">
        <ServiceGroupedFAQ config={hvacContentMarketingConfig.faq} />
      </div>

      <SectionDivider />

      {/* 10. ECOSYSTEM */}
      <ServiceEcosystemSection config={hvacContentMarketingConfig.ecosystem} />

      <MarketExclusivity />

      {/* 12. CONTACT */}
      <div id="contact" className="scroll-mt-32">
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
};

export default HVACContentMarketing;
