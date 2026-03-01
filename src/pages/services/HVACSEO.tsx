import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import HVACContactForm from "@/components/services/hvac-seo/HVACContactForm";
import HVACMarketExclusivity from "@/components/services/hvac-seo/HVACMarketExclusivity";
import HVACTestimonials from "@/components/services/hvac-seo/HVACTestimonials";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import MidPageCTA from "@/components/sections/MidPageCTA";
import {
  ServiceOutcomesSection,
  ServiceRoadmapSection,
  ServiceBuildingBlocksSection,
  ServiceFitQualifierSection,
  ServiceGroupedFAQ,
  ServiceEcosystemSection
} from "@/components/services/generic";
import LocalSEOTwoColumnHero from "@/components/services/local-seo/LocalSEOTwoColumnHero";
import LocalRankingFactors from "@/components/services/local-seo/LocalRankingFactors";
import { hvacSEOConfig } from "@/data/service-pages/hvac-seo";
import { getFAQPageSchema, getServiceSchema, getOrganizationSchema } from "@/lib/schema";

// HVAC SEO specific components
import HVACPhoneNotRankings from "@/components/services/hvac-seo/HVACPhoneNotRankings";
import HVACTwoEngines from "@/components/services/hvac-seo/HVACTwoEngines";
import BuiltForHVAC from "@/components/services/hvac-seo/BuiltForHVAC";
import HVACProblemSection from "@/components/services/hvac-seo/HVACProblemSection";

const getFlatFAQs = () => {
  if (!hvacSEOConfig.faq?.groups) return [];
  return hvacSEOConfig.faq.groups.flatMap(group =>
    group.items.map(item => ({ question: item.question, answer: item.answer }))
  );
};

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const anchorItems = [
  { label: 'Where We Start', href: '#phone-first' },
  { label: 'The Problem', href: '#problem' },
  { label: 'What Changes', href: '#outcomes' },
  { label: 'Our Process', href: '#roadmap' },
  { label: 'What We Do', href: '#building-blocks' },
  { label: 'Fit', href: '#qualification' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Get Started', href: '#contact' },
];

const HVACSEO = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/#services" },
    { label: "HVAC SEO" }
  ];

  const faqSchema = getFAQPageSchema(getFlatFAQs());
  const serviceSchema = getServiceSchema({
    name: "HVAC SEO Services",
    description: hvacSEOConfig.metaDescription,
    url: hvacSEOConfig.canonicalUrl,
    serviceType: "HVAC SEO Service"
  });

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationSchema(),
      serviceSchema,
      faqSchema
    ]
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead
        title={hvacSEOConfig.metaTitle}
        description={hvacSEOConfig.metaDescription}
        canonical={hvacSEOConfig.canonicalUrl}
        keywords={hvacSEOConfig.keywords}
        schemaJson={combinedSchema}
      />

      <Header />

      {/* 1. HERO */}
      <div className="pt-16">
        <LocalSEOTwoColumnHero
          config={hvacSEOConfig.hero}
          breadcrumbs={breadcrumbItems}
        />
      </div>

      {/* STICKY ANCHOR NAV */}
      <ServiceHubAnchorNav items={anchorItems} />

      {/* 2. PHONE NOT RANKINGS */}
      <div id="phone-first" className="scroll-mt-32">
        <HVACPhoneNotRankings />
      </div>

      <SectionDivider />

      {/* 3. PROBLEM */}
      <div id="problem" className="scroll-mt-32">
        <HVACProblemSection />
      </div>

      <SectionDivider />

      {/* 4. OUTCOMES */}
      <div id="outcomes" className="scroll-mt-32">
        <ServiceOutcomesSection config={hvacSEOConfig.outcomes} />
      </div>

      {/* Outcomes closing paragraph */}
      <div className="bg-surface-dark border-t border-border/30 py-10">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="text-text-secondary text-base text-center max-w-2xl mx-auto leading-relaxed">
            Local SEO must account for the operational realities of running an HVAC company. A strategy built without that context generates calls the operation cannot run.
          </p>
        </div>
      </div>

      {/* EXCLUSIVITY — right after outcomes */}
      <HVACMarketExclusivity />

      {/* RANKING FACTORS */}
      <LocalRankingFactors />

      <SectionDivider />

      {/* 5. THREE SYSTEMS */}
      <div id="two-engines" className="scroll-mt-32">
        <HVACTwoEngines />
      </div>

      <SectionDivider />

      {/* 6. ROADMAP */}
      <div id="roadmap" className="scroll-mt-32">
        <ServiceRoadmapSection config={hvacSEOConfig.roadmap} />
      </div>

      {/* Mid-Page CTA */}
      <MidPageCTA />

      <SectionDivider />

      {/* 7. BUILDING BLOCKS */}
      <div id="building-blocks" className="scroll-mt-32">
        <ServiceBuildingBlocksSection config={hvacSEOConfig.buildingBlocks} />
      </div>

      <SectionDivider />

      {/* 8. BUILT FOR HVAC */}
      <BuiltForHVAC />

      <SectionDivider />

      {/* 9. QUALIFICATION */}
      <div id="qualification" className="scroll-mt-32">
        <ServiceFitQualifierSection config={hvacSEOConfig.qualification} />
      </div>

      {/* 10. TESTIMONIALS */}
      <div id="testimonials" className="scroll-mt-32">
        <HVACTestimonials />
      </div>

      <SectionDivider />

      {/* 11. FAQ */}
      <div id="faq" className="scroll-mt-32">
        <ServiceGroupedFAQ config={hvacSEOConfig.faq} />
      </div>

      <SectionDivider />

      {/* 12. ECOSYSTEM */}
      <ServiceEcosystemSection config={hvacSEOConfig.ecosystem} />

      <div id="contact" className="scroll-mt-32">
        <HVACContactForm />
      </div>

      <Footer />
    </div>
  );
};

export default HVACSEO;
