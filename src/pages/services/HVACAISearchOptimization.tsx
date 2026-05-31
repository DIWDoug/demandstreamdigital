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
import { hvacAiSearchConfig as cfg } from "@/data/service-pages/ai-search-optimization";
import { getServiceHubSchema } from "@/lib/schema";

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8"><hr className="border-t border-border/40" /></div>
);

const HVACAISearchOptimization = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/#services" },
    { label: "AIO & GEO", href: "/plumbing-and-hvac-ai-search-optimization" },
    { label: "HVAC AIO & GEO" }
  ];

  const pageSchema = getServiceHubSchema({
    name: "AI Search Optimization for HVAC Companies",
    description: cfg.metaDescription,
    url: cfg.canonicalUrl,
    serviceType: "HVAC AI Search Optimization",
    faqGroups: cfg.faq.groups
  });

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead title={cfg.metaTitle} description={cfg.metaDescription} canonical={cfg.canonicalUrl} ogImage="/og-images/hvac-ai-search-optimization.jpg" schemaJson={pageSchema} />
      <Header />

      <div>
        <ServiceHubHero
          title="AIO & GEO for HVAC Companies"
          heroHeadline="AIO & GEO for HVAC Companies"
          heroSubtitle="Be the HVAC Company AI Recommends"
          description={{
            intro: "When a homeowner asks an AI engine why their AC stopped cooling or who to call for a furnace replacement, we make sure your shop is the answer.",
            bullets: [
              "Cited by ChatGPT, Google AI Overviews, Perplexity and Gemini for HVAC prompts in your city",
              "No-cool, no-heat and replacement intent mapped to answer-ready content",
              "Seasonal authority that scales as demand peaks",
            ],
          }}
          breadcrumbs={breadcrumbItems}
        />
      </div>

      <ServiceHubAnchorNav />

      <div id="problem" className="scroll-mt-32"><ServiceProblemSection config={cfg.problem} /></div>
      <div id="outcomes" className="scroll-mt-32"><ServiceOutcomesSection config={cfg.outcomes} /></div>
      <SectionDivider />
      <div id="roadmap" className="scroll-mt-32"><ServiceRoadmapSection config={cfg.roadmap} /></div>
      <MidPageCTA />
      <SectionDivider />
      <div id="building-blocks" className="scroll-mt-32"><ServiceBuildingBlocksSection config={cfg.buildingBlocks} hubSlug="ai-search-optimization" /></div>
      <SectionDivider />
      <div id="qualification" className="scroll-mt-32"><ServiceFitQualifierSection config={cfg.qualification} /></div>
      <div id="testimonials" className="scroll-mt-32"><Testimonials /></div>
      <SectionDivider />
      <div id="faq" className="scroll-mt-32"><ServiceGroupedFAQ config={cfg.faq} /></div>
      <SectionDivider />
      <ServiceEcosystemSection config={cfg.ecosystem} />
      <MarketExclusivity />
      <div id="contact" className="scroll-mt-32"><ContactForm /></div>

      <Footer />
    </div>
  );
};

export default HVACAISearchOptimization;
