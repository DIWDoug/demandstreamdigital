import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";

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
import { localSEOConfig } from "@/data/service-pages/local-seo";
import { getHubBySlug } from "@/data/services";
import { getFAQPageSchema, getServiceSchema, getOrganizationSchema } from "@/lib/schema";

// Local SEO specific component
import LocalRankingFactors from "@/components/services/local-seo/LocalRankingFactors";

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

const LocalSEO = () => {
  const hub = getHubBySlug("local-seo");
  if (!hub) return null;

  const breadcrumbItems = [
    { label: "Inbound Marketing Services", href: "/white-label-inbound-marketing-services" },
    { label: hub.title }
  ];

  // Build combined schema
  const faqSchema = getFAQPageSchema(getFlatFAQs());
  const serviceSchema = getServiceSchema({
    name: "White Label Local SEO Services",
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
        <meta name="keywords" content="white label local SEO, local SEO fulfillment, local search optimization, agency SEO partner, citation building services" />
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
        <meta property="og:site_name" content="Dialed-In Web" />
        <meta property="og:image" content="https://dialedinweb.com/dialedinweb-logo.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={localSEOConfig.metaTitle} />
        <meta name="twitter:description" content={localSEOConfig.metaDescription} />
        <meta name="twitter:image" content="https://dialedinweb.com/dialedinweb-logo.png" />
      </Helmet>
      
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
        <ServiceProblemSection config={localSEOConfig.problem} />
      </div>
      
      <SectionDivider />
      
      {/* 4. OUTCOMES */}
      <div id="outcomes" className="scroll-mt-32">
        <ServiceOutcomesSection config={localSEOConfig.outcomes} />
      </div>
      
      {/* Ranking Factors - Local SEO specific */}
      <LocalRankingFactors />
      
      <SectionDivider />
      
      {/* 5. ROADMAP */}
      <div id="roadmap" className="scroll-mt-32">
        <ServiceRoadmapSection config={localSEOConfig.roadmap} />
      </div>
      
      {/* Mid-Page CTA */}
      <MidPageCTA />
      
      <SectionDivider />
      
      {/* 6. BUILDING BLOCKS */}
      <div id="building-blocks" className="scroll-mt-32">
        <ServiceBuildingBlocksSection config={localSEOConfig.buildingBlocks} hubSlug="local-seo" />
      </div>
      
      <SectionDivider />
      
      {/* 7. QUALIFICATION */}
      <div id="qualification" className="scroll-mt-32">
        <ServiceFitQualifierSection config={localSEOConfig.qualification} />
      </div>
      
      {/* 8. TESTIMONIALS */}
      <div id="testimonials" className="scroll-mt-32">
        <Testimonials />
      </div>
      
      <SectionDivider />
      
      {/* 9. FAQ */}
      <div id="faq" className="scroll-mt-32">
        <ServiceGroupedFAQ config={localSEOConfig.faq} />
      </div>
      
      <SectionDivider />
      
      {/* 10. ECOSYSTEM */}
      <ServiceEcosystemSection config={localSEOConfig.ecosystem} />
      
      {/* 11. CONTACT */}
      <div id="contact" className="scroll-mt-32">
        <ContactForm />
      </div>
      
      <Footer />
    </div>
  );
};

export default LocalSEO;
