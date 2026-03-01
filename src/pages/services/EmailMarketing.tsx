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
  ServiceEcosystemSection
} from "@/components/services/generic";
import { emailMarketingConfig } from "@/data/service-pages/email-marketing";
import { ServiceBiggerPicture } from "@/components/services/generic";

const EMAIL_BIGGER_PICTURE_SERVICES = [
  { label: "Local SEO", href: "/hvac-and-plumbing-seo" },
  { label: "Google Maps / GBP", href: "/plumbing-google-maps" },
  { label: "Paid Advertising", href: "/hvac-and-plumbing-paid-ads" },
  { label: "Content Marketing", href: "/plumbing-content-marketing" },
  { label: "Web Design", href: "/plumbing-and-hvac-web-design" },
  { label: "Reporting & Dashboards", href: "/plumbing-reporting" },
];
const EMAIL_ORBIT_NODES = [
  { label: "Local SEO", angle: 0 },
  { label: "Google Maps / GBP", angle: 60 },
  { label: "Paid Advertising", angle: 120 },
  { label: "Content Marketing", angle: 180 },
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

const EmailMarketing = () => {
  const hub = getHubBySlug("email-marketing");
  if (!hub) return null;

  const breadcrumbItems = [
    { label: "Services", href: "/#services" },
    { label: hub.title }
  ];

  const pageSchema = getServiceHubSchema({
    name: "Email Marketing for Plumbing & HVAC",
    description: emailMarketingConfig.metaDescription,
    url: emailMarketingConfig.canonicalUrl,
    serviceType: "Email Marketing Service",
    faqGroups: emailMarketingConfig.faq.groups
  });

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead
        title={emailMarketingConfig.metaTitle}
        description={emailMarketingConfig.metaDescription}
        canonical={emailMarketingConfig.canonicalUrl}
        keywords="plumbing HVAC email marketing, email campaign management, newsletter services, email automation, service business email"
        schemaJson={pageSchema}
      />
      
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
      
      {/* Mid-Page CTA */}
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

      {/* 11. BIGGER PICTURE */}
      <ServiceBiggerPicture
        heading="Email Marketing Is One Piece of the"
        headingHighlight="Connected Growth System"
        body1="Email reactivates the revenue already in your customer list. But it performs best when connected to SEO, paid ads, and GBP — not as a standalone send."
        body2="Your seasonal email campaigns reinforce paid ad messaging and reduce cost per booked call. Review request sequences feed GBP velocity and organic rankings. Maintenance plan campaigns keep customers from searching for competitors. When email works inside the broader system, every channel gets more efficient — and customer lifetime value compounds."
        centerLabel="Email Marketing"
        centerSublabel="Reactivation & lifecycle revenue."
        services={EMAIL_BIGGER_PICTURE_SERVICES}
        orbitNodes={EMAIL_ORBIT_NODES}
      />

      <MarketExclusivity />

      {/* Related Tools */}
      <section className="py-10 bg-surface-dark border-t border-border/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs text-accent-blue uppercase tracking-widest font-medium mb-4 text-center">Free Planning Tools</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "Email Marketing Calculator", href: "/partner-tools/email-calculator", desc: "Forecast ROI from list size & engagement" },
                { label: "Inbound Marketing ROI Calculator", href: "/partner-tools/roi-calculator", desc: "Model revenue impact of full inbound strategy" },
                { label: "Investment Calculator", href: "/partner-tools/investment-calculator", desc: "Scope multi-service monthly costs" },
              ].map((t) => (
                <a key={t.href} href={t.href} className="group flex flex-col gap-1 p-4 rounded-xl border border-border/40 bg-background hover:border-accent-blue/50 hover:bg-surface-elevated transition-all duration-200">
                  <span className="text-sm font-semibold text-foreground group-hover:text-accent-blue transition-colors">{t.label}</span>
                  <span className="text-xs text-text-secondary">{t.desc}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* 11. CONTACT */}
      <div id="contact" className="scroll-mt-32">
        <ContactForm />
      </div>
      
      <Footer />
    </div>
  );
};

export default EmailMarketing;
