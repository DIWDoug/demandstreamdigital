import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import { SITE_URL } from "@/lib/constants";

import WebDesignHero from "@/components/services/web-design/WebDesignHero";
import WebDesignProblem from "@/components/services/web-design/WebDesignProblem";
import WebDesignDeliverables from "@/components/services/web-design/WebDesignDeliverables";
import WebDesignFit from "@/components/services/web-design/WebDesignFit";
import WebDesignExclusivity from "@/components/services/web-design/WebDesignExclusivity";
import ServiceContactForm from "@/components/services/generic/ServiceContactForm";
import { WEB_DESIGN_STEPS } from "@/data/web-design-steps";

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

const anchorItems = [
  { label: "Why It Matters", href: "#why-it-matters" },
  { label: "What We Build", href: "#what-we-build" },
  { label: "Fit", href: "#fit" },
  { label: "Exclusivity", href: "#exclusivity" },
  { label: "Get Started", href: "#contact" },
];

const metaTitle = "Web Design for Plumbing & HVAC That Converts | DemandStream";
const metaDescription = "Custom websites for plumbing and HVAC companies. Built for mobile-first conversion, local SEO architecture, and CRM integration from day one.";
const canonicalUrl = `${SITE_URL}/plumbing-and-hvac-web-design`;

const WebDesign = () => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Design for Plumbing & HVAC",
    "description": metaDescription,
    "url": canonicalUrl,
    "serviceType": "Web Design Service",
    "provider": {
      "@type": "Organization",
      "name": "Demand Stream Digital",
      "url": SITE_URL
    }
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        canonical={canonicalUrl}
        schemaJson={pageSchema}
      />

      <Header />

      {/* 01. HERO */}
      <div className="pt-16">
        <WebDesignHero />
      </div>

      {/* 02. STICKY NAV */}
      <ServiceHubAnchorNav items={anchorItems} />

      {/* 03. WHY IT MATTERS */}
      <WebDesignProblem />

      <SectionDivider />

      {/* 04. WHAT WE BUILD */}
      <WebDesignDeliverables />

      <SectionDivider />

      {/* 05. FIT */}
      <WebDesignFit />

      {/* 06. EXCLUSIVITY */}
      <WebDesignExclusivity />

      {/* 07. CONTACT */}
      <ServiceContactForm
        formType="web_design_contact"
        headline="Ready to Build a Site That Actually Books Calls?"
        subheadline="Tell us where you operate and what you're building. We'll confirm if your market is available and scope the right build."
        exclusivityLine="One plumbing client and one HVAC client per market. Your competitors don't get in."
        steps={WEB_DESIGN_STEPS}
      />

      {/* 08. FOOTER */}
      <Footer />
    </div>
  );
};

export default WebDesign;
