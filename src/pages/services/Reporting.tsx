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
import { reportingConfig } from "@/data/service-pages/reporting";
import { getServiceHubSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";

const REPORTING_BIGGER_PICTURE_SERVICES = [
  { label: "Local SEO", href: "/hvac-and-plumbing-seo" },
  { label: "Google Maps / GBP", href: "/plumbing-google-maps" },
  { label: "Paid Advertising", href: "/hvac-and-plumbing-paid-ads" },
  { label: "Content Marketing", href: "/plumbing-content-marketing" },
  { label: "Email Marketing", href: "/plumbing-email-marketing" },
  { label: "Web Design", href: "/plumbing-and-hvac-web-design" },
];
const REPORTING_ORBIT_NODES = [
  { label: "Local SEO", angle: 0 },
  { label: "Google Maps / GBP", angle: 60 },
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

const metaTitle = "Plumbing & HVAC Marketing Reporting & Analytics | DSD";
const metaDescription = "Marketing reports for plumbing and HVAC companies that show exactly what's working. Dashboards, rank tracking, call attribution, and ROI analysis.";
const canonicalUrl = `${SITE_URL}/plumbing-and-hvac-reporting`;

const Reporting = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/#services" },
    { label: "Reporting & Analytics" }
  ];

  const pageSchema = getServiceHubSchema({
    name: "Reporting & Analytics for Plumbing & HVAC",
    description: metaDescription,
    url: canonicalUrl,
    serviceType: "Marketing Analytics Service",
    faqGroups: reportingConfig.faq.groups
  });

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        canonical={canonicalUrl}
        schemaJson={pageSchema}
      />
      
      <Header />
      
      {/* 1. HERO */}
      <div className="pt-16">
        <ServiceHubHero 
          title="Reporting & Analytics"
          description="You should never wonder where your marketing dollars are going. We provide clear, honest reporting that proves value, builds trust, and shows exactly what's driving calls and booked jobs."
          breadcrumbs={breadcrumbItems}
          heroHeadline="Reporting & Analytics for"
          heroSubtitle="Plumbing & HVAC Companies"
        />
      </div>
      
      {/* STICKY ANCHOR NAV */}
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
      
      {/* Mid-Page CTA */}
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

      {/* 11. BIGGER PICTURE */}
      <ServiceBiggerPicture
        heading="Reporting Is One Piece of the"
        headingHighlight="Connected Growth System"
        body1="Reporting shows what's working across every channel. But its real value comes when it feeds decisions back into SEO, paid ads, and email, closing the loop."
        body2="Call tracking data improves Google Ads bid strategy. Booking rate data identifies which landing pages need to be fixed. Revenue-per-job data shows which service campaigns are worth scaling. When reporting is connected to every channel, the entire system learns faster and your cost per booked call drops over time instead of staying flat."
        centerLabel="Reporting"
        centerSublabel="Data intelligence across all channels."
        services={REPORTING_BIGGER_PICTURE_SERVICES}
        orbitNodes={REPORTING_ORBIT_NODES}
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

export default Reporting;
