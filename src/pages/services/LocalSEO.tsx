import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import MarketExclusivity from "@/components/sections/MarketExclusivity";
import TrustReel from "@/components/sections/TrustReel";
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
import { localSEOConfig } from "@/data/service-pages/local-seo";
import { getFAQPageSchema, getServiceSchema, getOrganizationSchema } from "@/lib/schema";

// Local SEO specific components
import LocalRankingFactors from "@/components/services/local-seo/LocalRankingFactors";
import PhoneNotRankings from "@/components/services/local-seo/PhoneNotRankings";
import BuiltForBoth from "@/components/services/local-seo/BuiltForBoth";

// Flatten FAQ groups for schema
const getFlatFAQs = () => {
  if (!localSEOConfig.faq?.groups) return [];
  return localSEOConfig.faq.groups.flatMap(group => 
    group.items.map(item => ({ question: item.question, answer: item.answer }))
  );
};

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const anchorItems = [
  { label: 'Pattern', href: '#problem' },
  { label: 'What Changes', href: '#outcomes' },
  { label: 'Our Process', href: '#roadmap' },
  { label: 'Levers', href: '#building-blocks' },
  { label: 'Fit', href: '#qualification' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Next Steps', href: '#contact' },
];

const LocalSEO = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/#services" },
    { label: "Local SEO" }
  ];

  // Build combined schema
  const faqSchema = getFAQPageSchema(getFlatFAQs());
  const serviceSchema = getServiceSchema({
    name: "Local SEO for Plumbing & HVAC",
    description: localSEOConfig.metaDescription,
    url: localSEOConfig.canonicalUrl,
    serviceType: "Local SEO Service"
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
        <title>{localSEOConfig.metaTitle}</title>
        <meta name="description" content={localSEOConfig.metaDescription} />
        <meta name="keywords" content="plumbing SEO, HVAC SEO, local SEO for plumbers, local SEO for HVAC, plumbing marketing, HVAC marketing, plumbing local SEO, HVAC local SEO" />
        <link rel="canonical" href={localSEOConfig.canonicalUrl} />
        
        {/* Hreflang Tags */}
        <link rel="alternate" hrefLang="en-US" href={localSEOConfig.canonicalUrl} />
        <link rel="alternate" hrefLang="en-CA" href={localSEOConfig.canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={localSEOConfig.canonicalUrl} />
        
        <script type="application/ld+json">{JSON.stringify(combinedSchema)}</script>
        
        {/* Open Graph */}
        <meta property="og:title" content={localSEOConfig.metaTitle} />
        <meta property="og:description" content={localSEOConfig.metaDescription} />
        <meta property="og:url" content={localSEOConfig.canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Demand Stream Digital" />
        <meta property="og:image" content="https://demandstreamdigital.com/demandstream-digital-logo.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={localSEOConfig.metaTitle} />
        <meta name="twitter:description" content={localSEOConfig.metaDescription} />
        <meta name="twitter:image" content="https://demandstreamdigital.com/demandstream-digital-logo.png" />
      </Helmet>
      
      <Header />
      
      {/* 1. HERO */}
      <div className="pt-16">
        <LocalSEOTwoColumnHero 
          config={localSEOConfig.hero}
          breadcrumbs={breadcrumbItems}
        />
      </div>

      {/* TRUST REEL */}
      <TrustReel />
      
      {/* STICKY ANCHOR NAV */}
      <ServiceHubAnchorNav items={anchorItems} />

      {/* 02B. PHONE NOT RANKINGS */}
      <PhoneNotRankings />
      
      <SectionDivider />
      
      {/* 3. PROBLEM */}
      <div id="problem" className="scroll-mt-32">
        <ServiceProblemSection config={localSEOConfig.problem} />
      </div>
      
      <SectionDivider />
      
      {/* 4. OUTCOMES */}
      <div id="outcomes" className="scroll-mt-32">
        <ServiceOutcomesSection config={localSEOConfig.outcomes} />
      </div>

      {/* Outcomes closing paragraph */}
      <div className="bg-surface-dark pb-10">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="text-text-secondary text-base text-center max-w-4xl mx-auto leading-relaxed">
            Local SEO must also account for operational realities specific to plumbing and HVAC. Certifications, equipment transitions, permit timelines, and seasonal demand shifts all influence how marketing converts into revenue. A local SEO strategy built without this context will generate calls the business is not positioned to convert.
          </p>
        </div>
      </div>

      {/* EXCLUSIVITY — scarcity right after desire */}
      <MarketExclusivity />
      
      {/* 5. Ranking Factors */}
      <LocalRankingFactors />
      
      <SectionDivider />
      
      {/* 6. ROADMAP */}
      <div id="roadmap" className="scroll-mt-32">
        <ServiceRoadmapSection config={localSEOConfig.roadmap} />
      </div>
      
      {/* Mid-Page CTA */}
      <MidPageCTA />
      
      <SectionDivider />
      
      {/* 7. BUILDING BLOCKS */}
      <div id="building-blocks" className="scroll-mt-32">
        <ServiceBuildingBlocksSection config={localSEOConfig.buildingBlocks} />
      </div>
      
      <SectionDivider />

      {/* 8. BUILT FOR BOTH */}
      <BuiltForBoth />
      
      <SectionDivider />
      
      {/* 9. QUALIFICATION */}
      <div id="qualification" className="scroll-mt-32">
        <ServiceFitQualifierSection config={localSEOConfig.qualification} />
      </div>
      
      {/* 10. TESTIMONIALS */}
      <div id="testimonials" className="scroll-mt-32">
        <Testimonials />
      </div>
      
      <SectionDivider />
      
      {/* 11. FAQ */}
      <div id="faq" className="scroll-mt-32">
        <ServiceGroupedFAQ config={localSEOConfig.faq} />
      </div>
      
      <SectionDivider />
      
      {/* 12. ECOSYSTEM */}
      <ServiceEcosystemSection config={localSEOConfig.ecosystem} />
      
      {/* 13. CONTACT */}
      <div id="contact" className="scroll-mt-32">
        <ContactForm />
      </div>
      
      <Footer />
    </div>
  );
};

export default LocalSEO;
