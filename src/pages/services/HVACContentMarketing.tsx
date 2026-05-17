import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import MarketExclusivity from "@/components/sections/MarketExclusivity";
import ServiceHubHero from "@/components/services/ServiceHubHero";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import {
  ServiceProblemSection,
  ServiceOutcomesSection,
  ServiceRoadmapSection,
  ServiceBuildingBlocksSection,
  ServiceFitQualifierSection,
  ServiceGroupedFAQ,
  ServiceTestimonialsSection,
} from "@/components/services/generic";
import { hvacContentMarketingConfig } from "@/data/service-pages/hvac-content-marketing";
import { getServiceHubSchema } from "@/lib/schema";

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const HVACContentMarketing = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/#services" },
    { label: "Content Marketing", href: "/plumbing-hvac-content-marketing" },
    { label: hvacContentMarketingConfig.title }
  ];

  const pageSchema = getServiceHubSchema({
    name: "HVAC Content Marketing",
    description: hvacContentMarketingConfig.metaDescription,
    url: hvacContentMarketingConfig.canonicalUrl,
    serviceType: "HVAC Content Marketing Service",
    faqGroups: hvacContentMarketingConfig.faq.groups
  });

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{hvacContentMarketingConfig.metaTitle}</title>
        <meta name="description" content={hvacContentMarketingConfig.metaDescription} />
        <link rel="canonical" href={hvacContentMarketingConfig.canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
        <meta property="og:title" content={hvacContentMarketingConfig.metaTitle} />
        <meta property="og:description" content={hvacContentMarketingConfig.metaDescription} />
        <meta property="og:url" content={hvacContentMarketingConfig.canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Demand Stream Digital" />
        <meta property="og:image" content="https://demandstreamdigital.com/demandstream-digital-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={hvacContentMarketingConfig.metaTitle} />
        <meta name="twitter:description" content={hvacContentMarketingConfig.metaDescription} />
        <meta name="twitter:image" content="https://demandstreamdigital.com/demandstream-digital-logo.png" />
      </Helmet>

      <Header />

      {/* 1. HERO */}
      <div>
        <ServiceHubHero
          title={hvacContentMarketingConfig.title}
          heroHeadline="HVAC Content Marketing"
          heroSubtitle="Built to Rank and Convert"
          description={{
            intro: "When a homeowner's AC stops working in August, they don't browse options. They call whoever shows up in the Map Pack first with a clear, credible, local answer.",
            bullets: [
              "Built around HVAC's dual demand structure — emergency repair and planned replacement",
              "Seasonal authority, maintenance agreement support, and AI-ready content",
              "Structured to earn positions in the most competitive HVAC searches in your market",
            ],
            closing: "No generic blog libraries. No filler articles. No content built just to fill a publishing calendar."
          }}
          breadcrumbs={breadcrumbItems}
        />
      </div>

      <ServiceHubAnchorNav />

      {/* 2. PROBLEM */}
      <div id="problem" className="scroll-mt-32">
        <ServiceProblemSection config={hvacContentMarketingConfig.problem} />
      </div>

      <SectionDivider />

      {/* 3. WHAT CHANGES (OUTCOMES) */}
      <div id="outcomes" className="scroll-mt-32">
        <ServiceOutcomesSection config={hvacContentMarketingConfig.outcomes} />
      </div>

      <MarketExclusivity />

      <SectionDivider />

      {/* 4. WHERE WE START (ROADMAP) */}
      <div id="roadmap" className="scroll-mt-32">
        <ServiceRoadmapSection config={hvacContentMarketingConfig.roadmap} />
      </div>

      <SectionDivider />

      {/* 5. BUILDING BLOCKS */}
      <div id="building-blocks" className="scroll-mt-32">
        <ServiceBuildingBlocksSection config={hvacContentMarketingConfig.buildingBlocks} />
      </div>

      <SectionDivider />

      {/* 6. SELECTIVE FIT */}
      <div id="qualification" className="scroll-mt-32">
        <ServiceFitQualifierSection config={hvacContentMarketingConfig.qualification} />
      </div>

      {/* 7. TESTIMONIALS */}
      <div id="testimonials" className="scroll-mt-32">
        <ServiceTestimonialsSection eyebrow="What HVAC Operators Say" />
      </div>

      {/* 8. FAQ */}
      <div id="faq" className="scroll-mt-32">
        <ServiceGroupedFAQ config={hvacContentMarketingConfig.faq} />
      </div>

      {/* NOTE: No Bigger Picture / Ecosystem section on this child page — lives on parent hub only */}

      {/* 9. CONTACT */}
      <div id="contact" className="scroll-mt-32">
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
};

export default HVACContentMarketing;
