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
import WebDesignContactForm from "@/components/services/web-design/WebDesignContactForm";
import ServiceBiggerPicture from "@/components/services/generic/ServiceBiggerPicture";

const WEB_DESIGN_BIGGER_PICTURE_SERVICES = [
  { label: "Local SEO", href: "/hvac-and-plumbing-seo" },
  { label: "Google Maps / GBP", href: "/plumbing-google-maps" },
  { label: "Paid Advertising", href: "/hvac-and-plumbing-paid-ads" },
  { label: "Content Marketing", href: "/plumbing-content-marketing" },
  { label: "Email Marketing", href: "/plumbing-email-marketing" },
  { label: "Reporting & Dashboards", href: "/plumbing-reporting" },
];
const WEB_DESIGN_ORBIT_NODES = [
  { label: "Local SEO", angle: 0 },
  { label: "Google Maps / GBP", angle: 60 },
  { label: "Paid Advertising", angle: 120 },
  { label: "Email Marketing", angle: 180 },
  { label: "Reporting & Dashboards", angle: 240 },
  { label: "Content Marketing", angle: 300 },
];

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
        keywords="web design plumbing HVAC, plumbing website design, HVAC website design, contractor website design, custom web design plumbing"
        hrefLangs={[
          { hrefLang: "en-US", href: canonicalUrl },
          { hrefLang: "en-CA", href: canonicalUrl },
          { hrefLang: "x-default", href: canonicalUrl },
        ]}
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

      {/* 06B. BIGGER PICTURE */}
      <ServiceBiggerPicture
        heading="Web Design Is One Piece of the"
        headingHighlight="Connected Growth System"
        body1="Your website is the conversion engine everything else drives traffic to. But it compounds when it's built to support SEO, paid ads, and GBP — not just to look good."
        body2="An SEO-architected site earns organic rankings faster and holds them longer. Speed and mobile experience reduce paid ad cost per click and improve conversion rates. Schema markup strengthens local pack visibility. Review integration builds trust on every landing page. When your website is built inside the system, every channel performs better from day one."
        centerLabel="Web Design"
        centerSublabel="Conversion engine for every channel."
        services={WEB_DESIGN_BIGGER_PICTURE_SERVICES}
        orbitNodes={WEB_DESIGN_ORBIT_NODES}
      />

      {/* 07. CONTACT */}
      <WebDesignContactForm />

      {/* 08. FOOTER */}
      <Footer />
    </div>
  );
};

export default WebDesign;
