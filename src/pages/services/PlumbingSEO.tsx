import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import MarketExclusivity from "@/components/sections/MarketExclusivity";
import Testimonials from "@/components/sections/Testimonials";
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
import LocalSEOTwoColumnHero from "@/components/services/local-seo/LocalSEOTwoColumnHero";
import LocalRankingFactors from "@/components/services/local-seo/LocalRankingFactors";
import { plumbingSEOConfig } from "@/data/service-pages/plumbing-seo";
import { getFAQPageSchema, getServiceSchema, getOrganizationSchema } from "@/lib/schema";

// Plumbing SEO specific components
import PlumbingPhoneNotRankings from "@/components/services/plumbing-seo/PlumbingPhoneNotRankings";
import PlumbingTwoEngines from "@/components/services/plumbing-seo/PlumbingTwoEngines";
import BuiltForPlumbers from "@/components/services/plumbing-seo/BuiltForPlumbers";

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
  { label: 'Phone First', href: '#phone-first' },
  { label: 'Pattern', href: '#problem' },
  { label: 'What Changes', href: '#outcomes' },
  { label: 'Two Engines', href: '#two-engines' },
  { label: 'Our Process', href: '#roadmap' },
  { label: 'Levers', href: '#building-blocks' },
  { label: 'Fit', href: '#qualification' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Next Steps', href: '#contact' },
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
      <Helmet>
        <title>{plumbingSEOConfig.metaTitle}</title>
        <meta name="description" content={plumbingSEOConfig.metaDescription} />
        <meta name="keywords" content={plumbingSEOConfig.keywords} />
        <link rel="canonical" href={plumbingSEOConfig.canonicalUrl} />

        <link rel="alternate" hrefLang="en-US" href={plumbingSEOConfig.canonicalUrl} />
        <link rel="alternate" hrefLang="en-CA" href={plumbingSEOConfig.canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={plumbingSEOConfig.canonicalUrl} />

        <script type="application/ld+json">{JSON.stringify(combinedSchema)}</script>

        <meta property="og:title" content={plumbingSEOConfig.metaTitle} />
        <meta property="og:description" content={plumbingSEOConfig.metaDescription} />
        <meta property="og:url" content={plumbingSEOConfig.canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Demand Stream Digital" />
        <meta property="og:image" content="https://demandstreamdigital.com/demandstream-digital-logo.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={plumbingSEOConfig.metaTitle} />
        <meta name="twitter:description" content={plumbingSEOConfig.metaDescription} />
        <meta name="twitter:image" content="https://demandstreamdigital.com/demandstream-digital-logo.png" />
      </Helmet>

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
        <ServiceProblemSection config={plumbingSEOConfig.problem} />
      </div>

      <SectionDivider />

      {/* 4. OUTCOMES */}
      <div id="outcomes" className="scroll-mt-32">
        <ServiceOutcomesSection config={plumbingSEOConfig.outcomes} />
      </div>

      {/* Outcomes closing paragraph */}
      <div className="bg-surface-dark pb-10">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="text-text-secondary text-base text-center max-w-4xl mx-auto leading-relaxed">
            Local SEO must account for the operational realities of running a plumbing company. Permit timelines, licensing requirements, and service capacity all influence how marketing converts into booked revenue. A plumbing SEO strategy built without this context generates calls the operation cannot run.
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

      <SectionDivider />

      {/* 12. ECOSYSTEM */}
      <ServiceEcosystemSection config={plumbingSEOConfig.ecosystem} />

      {/* 13. CONTACT */}
      <div id="contact" className="scroll-mt-32">
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
};

export default PlumbingSEO;
