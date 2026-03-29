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
import { googleMapsConfig } from "@/data/service-pages/google-maps";
import GBPRankingFactors from "@/components/services/gbp/GBPRankingFactors";
import { getServiceHubSchema } from "@/lib/schema";

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const PlumbingGoogleMaps = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/#services" },
    { label: "Google Maps / GBP", href: "/plumbing-google-maps" },
    { label: "Plumbing Google Maps SEO" }
  ];

  const pageSchema = getServiceHubSchema({
    name: "Google Business Pro SEO & Google Maps for Plumbing Companies",
    description: googleMapsConfig.metaDescription,
    url: googleMapsConfig.canonicalUrl,
    serviceType: "Plumbing Google Business Pro SEO Service",
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
          title={googleMapsConfig.title}
          description={googleMapsConfig.hero.subheadline}
          breadcrumbs={breadcrumbItems}
          integrationNote={googleMapsConfig.hero.integrationNote}
          heroHeadline={googleMapsConfig.hero.headline}
          heroSubtitle={googleMapsConfig.hero.highlightedText}
        />
      </div>

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

      <MarketExclusivity />

      {/* 12. CONTACT */}
      <div id="contact" className="scroll-mt-32">
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
};

export default PlumbingGoogleMaps;
