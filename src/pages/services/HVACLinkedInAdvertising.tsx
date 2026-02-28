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
  { label: "Tracking", href: "#tracking" },
  { label: "Integration", href: "#integration" },
  { label: "Fit", href: "#fit" },
  { label: "Get Started", href: "#contact" },
];

const metaTitle = "HVAC LinkedIn Advertising for Commercial Contract and Facility Growth | DemandStream Digital";
const metaDescription = "LinkedIn advertising built for HVAC companies targeting commercial contracts. Reach property managers and facility directors in your service area. See how.";
const canonicalUrl = `${SITE_URL}/hvac-linkedin-advertising/`;

const HVACLinkedInAdvertising = () => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "HVAC LinkedIn Advertising",
    "description": metaDescription,
    "url": canonicalUrl,
    "serviceType": "HVAC LinkedIn Advertising Service",
    "provider": { "@type": "Organization", "name": "DemandStream Digital", "url": SITE_URL }
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
