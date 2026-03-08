import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import MarketExclusivity from "@/components/sections/MarketExclusivity";
import Testimonials from "@/components/sections/Testimonials";
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
import { plumbingSEOConfig } from "@/data/service-pages/plumbing-seo";
import { getFAQPageSchema, getServiceSchema, getOrganizationSchema } from "@/lib/schema";

// Plumbing SEO specific components
import PlumbingPhoneNotRankings from "@/components/services/plumbing-seo/PlumbingPhoneNotRankings";
import PlumbingTwoEngines from "@/components/services/plumbing-seo/PlumbingTwoEngines";
import BuiltForPlumbers from "@/components/services/plumbing-seo/BuiltForPlumbers";
import PlumbingProblemSection from "@/components/services/plumbing-seo/PlumbingProblemSection";

const getFlatFAQs = () => {
  if (!plumbingSEOConfig.faq?.groups) return [];
  return plumbingSEOConfig.faq.groups.flatMap(group =>
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

const PlumbingSEO = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/#services" },
    { label: "Plumbing SEO" }
  ];

  const faqSchema = getFAQPageSchema(getFlatFAQs());
  const serviceSchema = getServiceSchema({
    name: "Plumbing SEO Services",
    description: plumbingSEOConfig.metaDescription,
    url: plumbingSEOConfig.canonicalUrl,
    serviceType: "Plumbing SEO Service"
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
        title={plumbingSEOConfig.metaTitle}
        description={plumbingSEOConfig.metaDescription}
        canonical={plumbingSEOConfig.canonicalUrl}
        schemaJson={combinedSchema}
      />

      <Header />

      {/* 1. HERO */}
      <div className="pt-16">
        <LocalSEOTwoColumnHero
          config={plumbingSEOConfig.hero}
          breadcrumbs={breadcrumbItems}
        />
      </div>

      {/* STICKY ANCHOR NAV */}
      <ServiceHubAnchorNav items={anchorItems} />

      {/* 2. PHONE NOT RANKINGS */}
      <div id="phone-first" className="scroll-mt-32">
        <PlumbingPhoneNotRankings />
      </div>

      <SectionDivider />

      {/* 3. PROBLEM */}
      <div id="problem" className="scroll-mt-32">
        <PlumbingProblemSection />
      </div>

      <SectionDivider />

      {/* 4. OUTCOMES */}
      <div id="outcomes" className="scroll-mt-32">
        <ServiceOutcomesSection config={plumbingSEOConfig.outcomes} />
      </div>

      {/* Outcomes closing paragraph */}
      <div className="bg-surface-dark border-t border-border/30 py-10">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="text-text-secondary text-base text-center max-w-2xl mx-auto leading-relaxed">
            Local SEO must account for the operational realities of running a plumbing company. A strategy built without that context generates calls the operation cannot run.
          </p>
        </div>
      </div>

      {/* EXCLUSIVITY — right after outcomes */}
      <MarketExclusivity />

      {/* 4C. WHITESPARK RESEARCH */}
      <LocalRankingFactors />

      <SectionDivider />

      {/* 5. TWO ENGINES */}
      <div id="two-engines" className="scroll-mt-32">
        <PlumbingTwoEngines />
      </div>

      <SectionDivider />

      {/* 6. ROADMAP */}
      <div id="roadmap" className="scroll-mt-32">
        <ServiceRoadmapSection config={plumbingSEOConfig.roadmap} />
      </div>

      {/* Mid-Page CTA */}
      <MidPageCTA />

      <SectionDivider />

      {/* 7. BUILDING BLOCKS */}
      <div id="building-blocks" className="scroll-mt-32">
        <ServiceBuildingBlocksSection config={plumbingSEOConfig.buildingBlocks} />
      </div>

      <SectionDivider />

      {/* 8. BUILT FOR PLUMBERS */}
      <BuiltForPlumbers />

      <SectionDivider />

      {/* 9. QUALIFICATION */}
      <div id="qualification" className="scroll-mt-32">
        <ServiceFitQualifierSection config={plumbingSEOConfig.qualification} />
      </div>

      {/* 10. TESTIMONIALS */}
      <div id="testimonials" className="scroll-mt-32">
        <Testimonials />
      </div>

      <SectionDivider />

      {/* 11. FAQ */}
      <div id="faq" className="scroll-mt-32">
        <ServiceGroupedFAQ config={plumbingSEOConfig.faq} />
      </div>


      {/* 13. CONTACT */}
      <div id="contact" className="scroll-mt-32">
        <ContactForm />
      </div>

      {/* Editorial Resource */}
      <section className="py-10 bg-surface-dark border-t border-border/30">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm text-text-secondary">
            Evaluating SEO agencies?{" "}
            <a href="/best-plumbing-seo-companies" className="text-accent-blue hover:underline font-medium">
              See our breakdown of the best plumbing SEO companies →
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlumbingSEO;
