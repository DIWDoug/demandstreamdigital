import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import MarketExclusivity from "@/components/sections/MarketExclusivity";

import Testimonials from "@/components/sections/Testimonials";
import ServiceHubHero from "@/components/services/ServiceHubHero";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import MidPageCTA from "@/components/sections/MidPageCTA";
import { paidMediaConfig } from "@/data/service-pages/paid-media";
import { getHubBySlug } from "@/data/services";
import type { BreadcrumbItem } from "@/types/servicePage";
import { getServiceHubSchema } from "@/lib/schema";

// Generic section components
import { 
  ServiceProblemSection,
  ServiceOutcomesSection,
  ServiceRoadmapSection,
  ServiceBuildingBlocksSection,
  ServiceFitQualifierSection,
  ServiceGroupedFAQ,
  ServiceEcosystemSection
} from "@/components/services/generic";

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const PaidMedia = () => {
  const hub = getHubBySlug("paid-media");
  if (!hub) return null;

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Services", href: "/#services" },
    { label: paidMediaConfig.title }
  ];

  const pageSchema = getServiceHubSchema({
    name: "Paid Media & PPC for Plumbing & HVAC",
    description: paidMediaConfig.metaDescription,
    url: paidMediaConfig.canonicalUrl,
    serviceType: "PPC Advertising Service",
    faqGroups: paidMediaConfig.faq.groups
  });

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{paidMediaConfig.metaTitle}</title>
        <meta name="description" content={paidMediaConfig.metaDescription} />
        <meta name="keywords" content="plumbing HVAC PPC management, paid media, Google Ads management, Meta Ads services, local service ads" />
        <link rel="canonical" href={paidMediaConfig.canonicalUrl} />
        
        
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
        
        {/* Open Graph */}
        <meta property="og:title" content={paidMediaConfig.metaTitle} />
        <meta property="og:description" content={paidMediaConfig.metaDescription} />
        <meta property="og:url" content={paidMediaConfig.canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Demand Stream Digital" />
        <meta property="og:image" content="https://demandstreamdigital.com/demandstream-digital-logo.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={paidMediaConfig.metaTitle} />
        <meta name="twitter:description" content={paidMediaConfig.metaDescription} />
        <meta name="twitter:image" content="https://demandstreamdigital.com/demandstream-digital-logo.png" />
      </Helmet>
      
      <Header />
      
      {/* 1. HERO */}
      <div className="pt-16">
        <ServiceHubHero 
          title={hub.title}
          description={hub.heroDescription}
          breadcrumbs={breadcrumbItems}
        />
      </div>
      
      {/* STICKY ANCHOR NAV */}
      <ServiceHubAnchorNav />
      
      {/* 3. PROBLEM */}
      <div id="problem" className="scroll-mt-32">
        <ServiceProblemSection config={paidMediaConfig.problem} />
      </div>
      
      <SectionDivider />
      
      {/* 4. OUTCOMES */}
      <div id="outcomes" className="scroll-mt-32">
        <ServiceOutcomesSection config={paidMediaConfig.outcomes} />
      </div>
      
      <SectionDivider />
      
      {/* 5. ROADMAP */}
      <div id="roadmap" className="scroll-mt-32">
        <ServiceRoadmapSection config={paidMediaConfig.roadmap} />
      </div>
      
      {/* Mid-Page CTA */}
      <MidPageCTA />
      
      <SectionDivider />
      
      {/* 6. BUILDING BLOCKS */}
      <div id="building-blocks" className="scroll-mt-32">
        <ServiceBuildingBlocksSection config={paidMediaConfig.buildingBlocks} hubSlug="paid-media" />
      </div>
      
      <SectionDivider />
      
      {/* 7. QUALIFICATION */}
      <div id="qualification" className="scroll-mt-32">
        <ServiceFitQualifierSection config={paidMediaConfig.qualification} />
      </div>
      
      {/* 8. TESTIMONIALS */}
      <div id="testimonials" className="scroll-mt-32">
        <Testimonials />
      </div>
      
      <SectionDivider />
      
      {/* 9. FAQ */}
      <div id="faq" className="scroll-mt-32">
        <ServiceGroupedFAQ config={paidMediaConfig.faq} />
      </div>
      
      <SectionDivider />
      
      {/* 10. ECOSYSTEM */}
      <ServiceEcosystemSection config={paidMediaConfig.ecosystem} />
      
      <MarketExclusivity />
      
      {/* 11. CONTACT */}
      <div id="contact" className="scroll-mt-32">
        <ContactForm />
      </div>
      
      <Footer />
    </div>
  );
};

export default PaidMedia;
