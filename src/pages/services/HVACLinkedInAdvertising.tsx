import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import { SITE_URL } from "@/lib/constants";
import HVACLinkedInHero from "@/components/services/hvac-linkedin-advertising/HVACLinkedInHero";
import HVACLinkedInMainContent from "@/components/services/hvac-linkedin-advertising/HVACLinkedInMainContent";
import HVACLinkedInFitExclusivity from "@/components/services/hvac-linkedin-advertising/HVACLinkedInFitExclusivity";
import HVACPaidAdsContactForm from "@/components/services/hvac-paid-advertising/HVACPaidAdsContactForm";

const anchorItems = [
  { label: "Why LinkedIn", href: "#why-linkedin" },
  { label: "Campaign Strategy", href: "#campaign-strategy" },
  { label: "Commercial vs Residential", href: "#commercial-vs-residential" },
  { label: "Tracking", href: "#tracking" },
  { label: "Fit", href: "#fit" },
  { label: "Get Started", href: "#contact" },
];

const metaTitle = "HVAC LinkedIn Advertising for Commercial Contract and Facility Growth | DemandStream Digital";
const metaDescription = "LinkedIn advertising for HVAC companies targeting commercial contracts. Reach property managers and facility directors in your service area.";
const canonicalUrl = `${SITE_URL}/hvac-linkedin-advertising/`;

const HVACLinkedInAdvertising = () => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HVACBusiness",
        "name": "DemandStream Digital",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "4849 Greenville Ave, Suite 100 #176",
          "addressLocality": "Dallas",
          "addressRegion": "TX",
          "postalCode": "75206"
        },
        "telephone": "+1-214-307-2995",
        "url": "https://demandstreamdigital.com"
      },
      {
        "@type": "Service",
        "name": "HVAC LinkedIn Advertising",
        "provider": { "@type": "HVACBusiness", "name": "DemandStream Digital" },
        "areaServed": "United States",
        "url": "https://demandstreamdigital.com/hvac-linkedin-advertising/"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://demandstreamdigital.com/" },
          { "@type": "ListItem", "position": 2, "name": "HVAC Paid Advertising", "item": "https://demandstreamdigital.com/hvac-paid-advertising/" },
          { "@type": "ListItem", "position": 3, "name": "HVAC LinkedIn Advertising", "item": "https://demandstreamdigital.com/hvac-linkedin-advertising/" }
        ]
      }
    ]
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        canonical={canonicalUrl}
        hrefLangs={[
          { hrefLang: "en-US", href: canonicalUrl },
          { hrefLang: "en-CA", href: canonicalUrl },
          { hrefLang: "x-default", href: canonicalUrl },
        ]}
        schemaJson={pageSchema}
      />
      <Header />
      <div className="pt-16"><HVACLinkedInHero /></div>
      <ServiceHubAnchorNav items={anchorItems} />
      <HVACLinkedInMainContent />
      <HVACLinkedInFitExclusivity />
      <HVACPaidAdsContactForm headline="Ready to Build a Commercial HVAC Pipeline in Your Market?" />
      <Footer />
    </div>
  );
};

export default HVACLinkedInAdvertising;
