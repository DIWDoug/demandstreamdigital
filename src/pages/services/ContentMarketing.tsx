import { Helmet } from "react-helmet-async";
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
  ServiceEcosystemSection
} from "@/components/services/generic";
import { contentMarketingConfig } from "@/data/service-pages/content-marketing";
import { ServiceBiggerPicture } from "@/components/services/generic";

const CONTENT_BIGGER_PICTURE_SERVICES = [
  { label: "Local SEO", href: "/hvac-and-plumbing-seo" },
  { label: "Google Maps / GBP", href: "/plumbing-google-maps" },
  { label: "Paid Advertising", href: "/hvac-and-plumbing-paid-ads" },
  { label: "Email Marketing", href: "/plumbing-email-marketing" },
  { label: "Web Design", href: "/plumbing-and-hvac-web-design" },
  { label: "Reporting & Dashboards", href: "/plumbing-reporting" },
];
const CONTENT_ORBIT_NODES = [
  { label: "Local SEO", angle: 0 },
  { label: "Google Maps / GBP", angle: 60 },
  { label: "Paid Advertising", angle: 120 },
  { label: "Email Marketing", angle: 180 },
  { label: "Reporting & Dashboards", angle: 240 },
  { label: "Web Design", angle: 300 },
];
import { getHubBySlug } from "@/data/services";
import { getServiceHubSchema } from "@/lib/schema";

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const ContentMarketing = () => {
  const hub = getHubBySlug("content-marketing");
  if (!hub) return null;

  const breadcrumbItems = [
    { label: "Services", href: "/#services" },
    { label: hub.title }
  ];

  const pageSchema = getServiceHubSchema({
    name: "Content Marketing for Plumbing & HVAC",
    description: contentMarketingConfig.metaDescription,
    url: contentMarketingConfig.canonicalUrl,
    serviceType: "Content Marketing Service",
    faqGroups: contentMarketingConfig.faq.groups
  });

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{contentMarketingConfig.metaTitle}</title>
        <meta name="description" content={contentMarketingConfig.metaDescription} />
        <meta name="keywords" content="plumbing content marketing, HVAC blog writing, SEO content for plumbers, service area pages, plumbing lead magnets" />
        <link rel="canonical" href={contentMarketingConfig.canonicalUrl} />
        
        {/* Hreflang Tags */}
        <link rel="alternate" hrefLang="en-US" href={contentMarketingConfig.canonicalUrl} />
        <link rel="alternate" hrefLang="en-CA" href={contentMarketingConfig.canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={contentMarketingConfig.canonicalUrl} />
        
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
        
        {/* Open Graph */}
        <meta property="og:title" content={contentMarketingConfig.metaTitle} />
        <meta property="og:description" content={contentMarketingConfig.metaDescription} />
        <meta property="og:url" content={contentMarketingConfig.canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Demand Stream Digital" />
        <meta property="og:image" content="https://demandstreamdigital.com/demandstream-digital-logo.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={contentMarketingConfig.metaTitle} />
        <meta name="twitter:description" content={contentMarketingConfig.metaDescription} />
        <meta name="twitter:image" content="https://demandstreamdigital.com/demandstream-digital-logo.png" />
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
        <ServiceProblemSection config={contentMarketingConfig.problem} />
      </div>
      
      <SectionDivider />
      
      {/* 4. OUTCOMES */}
      <div id="outcomes" className="scroll-mt-32">
        <ServiceOutcomesSection config={contentMarketingConfig.outcomes} />
      </div>
      
      <SectionDivider />
      
      {/* 5. ROADMAP */}
      <div id="roadmap" className="scroll-mt-32">
        <ServiceRoadmapSection config={contentMarketingConfig.roadmap} />
      </div>
      
      {/* Mid-Page CTA */}
      <MidPageCTA />
      
      <SectionDivider />
      
      {/* 6. BUILDING BLOCKS */}
      <div id="building-blocks" className="scroll-mt-32">
        <ServiceBuildingBlocksSection config={contentMarketingConfig.buildingBlocks} hubSlug="content-marketing" />
      </div>
      
      <SectionDivider />
      
      {/* 7. QUALIFICATION */}
      <div id="qualification" className="scroll-mt-32">
        <ServiceFitQualifierSection config={contentMarketingConfig.qualification} />
      </div>
      
      {/* 8. TESTIMONIALS */}
      <div id="testimonials" className="scroll-mt-32">
        <Testimonials />
      </div>
      
      <SectionDivider />
      
      {/* 9. FAQ */}
      <div id="faq" className="scroll-mt-32">
        <ServiceGroupedFAQ config={contentMarketingConfig.faq} />
      </div>
      
      <SectionDivider />
      
      {/* 10. ECOSYSTEM */}
      <ServiceEcosystemSection config={contentMarketingConfig.ecosystem} />

      {/* 11. BIGGER PICTURE */}
      <ServiceBiggerPicture
        heading="Content Marketing Is One Piece of the"
        headingHighlight="Connected Growth System"
        body1="Content builds topical authority and long-tail organic traffic. But it compounds when it feeds the broader system — not when it runs as an isolated blog strategy."
        body2="Service area pages reinforce local SEO signals and GBP relevance. How-to content drives organic traffic that paid ads can retarget. Authoritative content strengthens the domain that your link building and paid campaigns rely on. When content is built inside the growth system, every asset earns compounding returns — not just one-time traffic."
        centerLabel="Content Marketing"
        centerSublabel="Authority & long-tail organic reach."
        services={CONTENT_BIGGER_PICTURE_SERVICES}
        orbitNodes={CONTENT_ORBIT_NODES}
      />

      <MarketExclusivity />
      
      {/* 11. CONTACT */}
      <div id="contact" className="scroll-mt-32">
        <ContactForm />
      </div>
      
      <Footer />
    </div>
  );
};

export default ContentMarketing;
