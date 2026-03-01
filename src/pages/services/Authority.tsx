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
  ServiceEcosystemSection
} from "@/components/services/generic";
import { authorityConfig } from "@/data/service-pages/authority";
import { ServiceBiggerPicture } from "@/components/services/generic";

const AUTHORITY_BIGGER_PICTURE_SERVICES = [
  { label: "Local SEO", href: "/hvac-and-plumbing-seo" },
  { label: "Google Maps / GBP", href: "/plumbing-google-maps" },
  { label: "Paid Advertising", href: "/hvac-and-plumbing-paid-ads" },
  { label: "Content Marketing", href: "/plumbing-content-marketing" },
  { label: "Email Marketing", href: "/plumbing-email-marketing" },
  { label: "Reporting & Dashboards", href: "/plumbing-reporting" },
];
const AUTHORITY_ORBIT_NODES = [
  { label: "Local SEO", angle: 0 },
  { label: "Google Maps / GBP", angle: 60 },
  { label: "Paid Advertising", angle: 120 },
  { label: "Email Marketing", angle: 180 },
  { label: "Reporting & Dashboards", angle: 240 },
  { label: "Content Marketing", angle: 300 },
];
import { getHubBySlug } from "@/data/services";
import { getServiceHubSchema } from "@/lib/schema";

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const Authority = () => {
  const hub = getHubBySlug("local-authority-building");
  if (!hub) return null;

  const breadcrumbItems = [
    { label: "Services", href: "/#services" },
    { label: hub.title }
  ];

  const pageSchema = getServiceHubSchema({
    name: "Local Authority & Link Building for Plumbing & HVAC",
    description: authorityConfig.metaDescription,
    url: authorityConfig.canonicalUrl,
    serviceType: "Link Building Service",
    faqGroups: authorityConfig.faq.groups
  });

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead
        title={authorityConfig.metaTitle}
        description={authorityConfig.metaDescription}
        canonical={authorityConfig.canonicalUrl}
        keywords="plumbing HVAC link building, local authority building, digital PR, backlink services, local SEO authority"
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
        />
      </div>
      
      {/* STICKY ANCHOR NAV */}
      <ServiceHubAnchorNav />
      
      {/* 3. PROBLEM */}
      <div id="problem" className="scroll-mt-32">
        <ServiceProblemSection config={authorityConfig.problem} />
      </div>
      
      <SectionDivider />
      
      {/* 4. OUTCOMES */}
      <div id="outcomes" className="scroll-mt-32">
        <ServiceOutcomesSection config={authorityConfig.outcomes} />
      </div>
      
      <SectionDivider />
      
      {/* 5. ROADMAP */}
      <div id="roadmap" className="scroll-mt-32">
        <ServiceRoadmapSection config={authorityConfig.roadmap} />
      </div>
      
      {/* Mid-Page CTA */}
      <MidPageCTA />
      
      <SectionDivider />
      
      {/* 6. BUILDING BLOCKS */}
      <div id="building-blocks" className="scroll-mt-32">
        <ServiceBuildingBlocksSection config={authorityConfig.buildingBlocks} hubSlug="local-authority-building" />
      </div>
      
      <SectionDivider />
      
      {/* 7. QUALIFICATION */}
      <div id="qualification" className="scroll-mt-32">
        <ServiceFitQualifierSection config={authorityConfig.qualification} />
      </div>
      
      {/* 8. TESTIMONIALS */}
      <div id="testimonials" className="scroll-mt-32">
        <Testimonials />
      </div>
      
      <SectionDivider />
      
      {/* 9. FAQ */}
      <div id="faq" className="scroll-mt-32">
        <ServiceGroupedFAQ config={authorityConfig.faq} />
      </div>
      
      <SectionDivider />
      
      {/* 10. ECOSYSTEM */}
      <ServiceEcosystemSection config={authorityConfig.ecosystem} />

      {/* 11. BIGGER PICTURE */}
      <ServiceBiggerPicture
        heading="Authority Building Is One Piece of the"
        headingHighlight="Connected Growth System"
        body1="Links and citations build domain authority. But authority compounds when it works alongside SEO, content, and paid advertising — not as a standalone tactic."
        body2="Stronger domain authority raises the ceiling on what your local SEO can achieve. PR placements drive branded search that reduces paid ad costs. Citations reinforce GBP trust signals and local pack rankings. When authority building feeds the full system, every other channel performs better — and your market position becomes harder for competitors to close."
        centerLabel="Authority Building"
        centerSublabel="Domain authority & local trust."
        services={AUTHORITY_BIGGER_PICTURE_SERVICES}
        orbitNodes={AUTHORITY_ORBIT_NODES}
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

export default Authority;
