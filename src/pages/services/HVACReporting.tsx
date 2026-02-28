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
  ServiceBiggerPicture
} from "@/components/services/generic";
import { hvacReportingConfig } from "@/data/service-pages/hvac-reporting";
import { getServiceHubSchema } from "@/lib/schema";

const HVAC_REPORTING_BIGGER_PICTURE_SERVICES = [
  { label: "HVAC Local SEO", href: "/hvac-seo" },
  { label: "HVAC Google Maps / GBP", href: "/hvac-google-maps" },
  { label: "HVAC Paid Advertising", href: "/hvac-paid-advertising" },
  { label: "HVAC Content Marketing", href: "/hvac-content-marketing" },
  { label: "HVAC Email Marketing", href: "/hvac-email-marketing" },
  { label: "Web Design", href: "/plumbing-and-hvac-web-design" },
];
const HVAC_REPORTING_ORBIT_NODES = [
  { label: "HVAC SEO", angle: 0 },
  { label: "HVAC GBP", angle: 60 },
  { label: "Paid Advertising", angle: 120 },
  { label: "Email Marketing", angle: 180 },
  { label: "Content Marketing", angle: 240 },
  { label: "Web Design", angle: 300 },
];

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const HVACReporting = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/#services" },
    { label: hvacReportingConfig.title }
  ];

  const pageSchema = getServiceHubSchema({
    name: "Reporting & Analytics for HVAC Companies",
    description: hvacReportingConfig.metaDescription,
    url: hvacReportingConfig.canonicalUrl,
    serviceType: "HVAC Marketing Analytics Service",
    faqGroups: hvacReportingConfig.faq.groups
  });

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead
        title={hvacReportingConfig.metaTitle}
        description={hvacReportingConfig.metaDescription}
        canonical={hvacReportingConfig.canonicalUrl}
        schemaJson={pageSchema}
      />

      <Header />

      {/* 1. HERO */}
      <div className="pt-16">
        <ServiceHubHero
          title={hvacReportingConfig.title}
          description={hvacReportingConfig.hero.subheadline}
          breadcrumbs={breadcrumbItems}
        />
      </div>

      <ServiceHubAnchorNav />

      {/* 3. PROBLEM */}
      <div id="problem" className="scroll-mt-32">
        <ServiceProblemSection config={hvacReportingConfig.problem} />
      </div>

      {/* 4. OUTCOMES */}
      <div id="outcomes" className="scroll-mt-32">
        <ServiceOutcomesSection config={hvacReportingConfig.outcomes} />
      </div>

      <SectionDivider />

      {/* 5. ROADMAP */}
      <div id="roadmap" className="scroll-mt-32">
        <ServiceRoadmapSection config={hvacReportingConfig.roadmap} />
      </div>

      <MidPageCTA />

      <SectionDivider />

      {/* 6. BUILDING BLOCKS */}
      <div id="building-blocks" className="scroll-mt-32">
        <ServiceBuildingBlocksSection config={hvacReportingConfig.buildingBlocks} hubSlug="reporting" />
      </div>

      <SectionDivider />

      {/* 7. QUALIFICATION */}
      <div id="qualification" className="scroll-mt-32">
        <ServiceFitQualifierSection config={hvacReportingConfig.qualification} />
      </div>

      {/* 8. TESTIMONIALS */}
      <div id="testimonials" className="scroll-mt-32">
        <Testimonials />
      </div>

      <SectionDivider />

      {/* 9. FAQ */}
      <div id="faq" className="scroll-mt-32">
        <ServiceGroupedFAQ config={hvacReportingConfig.faq} />
      </div>

      <SectionDivider />

      {/* 10. ECOSYSTEM */}
      <ServiceEcosystemSection config={hvacReportingConfig.ecosystem} />

      {/* 11. BIGGER PICTURE */}
      <ServiceBiggerPicture
        heading="HVAC Reporting Is One Piece of the"
        headingHighlight="Connected Growth System"
        body1="HVAC reporting shows what's working across every channel and every season. But its real value comes when it feeds decisions back into SEO, paid ads, and email — closing the loop on seasonal investment."
        body2="HVAC call tracking data improves Google Ads bid strategy before peak season. Booking rate data identifies which landing pages are losing emergency calls. Revenue-per-job data shows which HVAC service campaigns are worth scaling. When reporting is connected to every channel, the entire system learns faster — and your cost per booked call drops over time instead of staying flat."
        centerLabel="HVAC Reporting"
        centerSublabel="Seasonal revenue intelligence across all channels."
        services={HVAC_REPORTING_BIGGER_PICTURE_SERVICES}
        orbitNodes={HVAC_REPORTING_ORBIT_NODES}
      />

      <MarketExclusivity />

      {/* 12. CONTACT */}
      <div id="contact" className="scroll-mt-32">
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
};

export default HVACReporting;
