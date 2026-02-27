import { Helmet } from "react-helmet-async";
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

const metaTitle = "Web Design for Plumbing & HVAC Companies That Converts | DemandStream Digital";
const metaDescription = "Custom web design for plumbing and HVAC companies. No templates. Built for mobile-first conversion, local SEO architecture, and CRM integration from day one.";
const canonicalUrl = `${SITE_URL}/plumbing-and-hvac-web-design/`;

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
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="web design plumbing HVAC, plumbing website design, HVAC website design, contractor website design, custom web design plumbing" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en-US" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en-CA" href={canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Demand Stream Digital" />
        <meta property="og:image" content="https://demandstreamdigital.com/demandstream-digital-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://demandstreamdigital.com/demandstream-digital-logo.png" />
      </Helmet>

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
      <WebDesignContactForm />

      {/* 08. FOOTER */}
      <Footer />
    </div>
  );
};

export default WebDesign;
