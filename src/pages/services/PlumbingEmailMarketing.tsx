import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import MarketExclusivity from "@/components/sections/MarketExclusivity";
import Testimonials from "@/components/sections/Testimonials";
import heroBgPlumbing from "@/assets/hero-bg-plumbing.jpg";
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
import { emailMarketingConfig } from "@/data/service-pages/email-marketing";
import { getServiceHubSchema } from "@/lib/schema";

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const PlumbingEmailMarketing = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/#services" },
    { label: "Email Marketing", href: "/plumbing-email-marketing" },
    { label: "Plumbing Email Marketing" }
  ];

  const pageSchema = getServiceHubSchema({
    name: "Email Marketing for Plumbing Companies",
    description: emailMarketingConfig.metaDescription,
    url: emailMarketingConfig.canonicalUrl,
    serviceType: "Plumbing Email Marketing Service",
    faqGroups: emailMarketingConfig.faq.groups
  });

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead
        title={emailMarketingConfig.metaTitle}
        description={emailMarketingConfig.metaDescription}
        canonical={emailMarketingConfig.canonicalUrl}
        schemaJson={pageSchema}
      />

      <Header />

      {/* 1. HERO */}
      <div className="pt-16">
        <ServiceHubHero
          title="Plumbing Email Marketing"
          description="For plumbing businesses, email turns one-time service calls into repeat customers and keeps your business top-of-mind between visits. We build email programs that drive maintenance plan sign-ups, water heater follow-ups, and reactivation revenue."
          breadcrumbs={breadcrumbItems}
          heroHeadline="Email Marketing for"
          heroSubtitle="Plumbing Companies"
          bgImage={heroBgPlumbing}
        />
      </div>

      <ServiceHubAnchorNav />

      {/* 3. PROBLEM */}
      <div id="problem" className="scroll-mt-32">
        <ServiceProblemSection config={emailMarketingConfig.problem} />
      </div>

      <SectionDivider />

      {/* 4. OUTCOMES */}
      <div id="outcomes" className="scroll-mt-32">
        <ServiceOutcomesSection config={emailMarketingConfig.outcomes} />
      </div>

      <SectionDivider />

      {/* 5. ROADMAP */}
      <div id="roadmap" className="scroll-mt-32">
        <ServiceRoadmapSection config={emailMarketingConfig.roadmap} />
      </div>

      <MidPageCTA />

      <SectionDivider />

      {/* 6. BUILDING BLOCKS */}
      <div id="building-blocks" className="scroll-mt-32">
        <ServiceBuildingBlocksSection config={emailMarketingConfig.buildingBlocks} hubSlug="email-marketing" />
      </div>

      <SectionDivider />

      {/* 7. QUALIFICATION */}
      <div id="qualification" className="scroll-mt-32">
        <ServiceFitQualifierSection config={emailMarketingConfig.qualification} />
      </div>

      {/* 8. TESTIMONIALS */}
      <div id="testimonials" className="scroll-mt-32">
        <Testimonials />
      </div>

      <SectionDivider />

      {/* 9. FAQ */}
      <div id="faq" className="scroll-mt-32">
        <ServiceGroupedFAQ config={emailMarketingConfig.faq} />
      </div>

      <SectionDivider />

      {/* 10. ECOSYSTEM */}
      <ServiceEcosystemSection config={emailMarketingConfig.ecosystem} />

      <MarketExclusivity />

      {/* 12. CONTACT */}
      <div id="contact" className="scroll-mt-32">
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
};

export default PlumbingEmailMarketing;
