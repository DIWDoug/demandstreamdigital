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
import { reportingConfig } from "@/data/service-pages/reporting";
import { getServiceHubSchema } from "@/lib/schema";
import heroBgPlumbing from "@/assets/hero-bg-plumbing.jpg";

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const PlumbingReporting = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/#services" },
    { label: "Reporting", href: "/plumbing-reporting" },
    { label: "Plumbing Reporting & Analytics" }
  ];

  const pageSchema = getServiceHubSchema({
    name: "Reporting & Analytics for Plumbing Companies",
    description: reportingConfig.metaDescription,
    url: reportingConfig.canonicalUrl,
    serviceType: "Plumbing Marketing Analytics Service",
    faqGroups: reportingConfig.faq.groups
  });

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead
        title={reportingConfig.metaTitle}
        description={reportingConfig.metaDescription}
        canonical={reportingConfig.canonicalUrl}
        schemaJson={pageSchema}
      />

      <Header />

      {/* 1. HERO */}
      <div className="pt-16">
        <ServiceHubHero
          title="Plumbing Reporting & Analytics"
          description="For plumbing companies, reporting connects marketing spend to booked calls and revenue. We build dashboards that show which campaigns drive drain cleaning, water heater, and sewer line jobs so you know exactly where to invest."
          breadcrumbs={breadcrumbItems}
          heroHeadline="Reporting & Analytics for"
          heroSubtitle="Plumbing Companies"
          bgImage={heroBgPlumbing}
        />
      </div>

      <ServiceHubAnchorNav />

      {/* 3. PROBLEM */}
      <div id="problem" className="scroll-mt-32">
        <ServiceProblemSection config={reportingConfig.problem} />
      </div>

      {/* 4. OUTCOMES */}
      <div id="outcomes" className="scroll-mt-32">
        <ServiceOutcomesSection config={reportingConfig.outcomes} />
      </div>

      <SectionDivider />

      {/* 5. ROADMAP */}
      <div id="roadmap" className="scroll-mt-32">
        <ServiceRoadmapSection config={reportingConfig.roadmap} />
      </div>

      <MidPageCTA />

      <SectionDivider />

      {/* 6. BUILDING BLOCKS */}
      <div id="building-blocks" className="scroll-mt-32">
        <ServiceBuildingBlocksSection config={reportingConfig.buildingBlocks} hubSlug="reporting" />
      </div>

      <SectionDivider />

      {/* 7. QUALIFICATION */}
      <div id="qualification" className="scroll-mt-32">
        <ServiceFitQualifierSection config={reportingConfig.qualification} />
      </div>

      {/* 8. TESTIMONIALS */}
      <div id="testimonials" className="scroll-mt-32">
        <Testimonials />
      </div>

      <SectionDivider />

      {/* 9. FAQ */}
      <div id="faq" className="scroll-mt-32">
        <ServiceGroupedFAQ config={reportingConfig.faq} />
      </div>

      <SectionDivider />

      {/* 10. ECOSYSTEM */}
      <ServiceEcosystemSection config={reportingConfig.ecosystem} />

      <MarketExclusivity />

      {/* 12. CONTACT */}
      <div id="contact" className="scroll-mt-32">
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
};

export default PlumbingReporting;
