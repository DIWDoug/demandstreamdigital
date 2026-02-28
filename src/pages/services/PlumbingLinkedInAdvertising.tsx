import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import { SITE_URL } from "@/lib/constants";
import PlumbingLinkedInHero from "@/components/services/plumbing-linkedin-advertising/PlumbingLinkedInHero";
import PlumbingLinkedInMainContent from "@/components/services/plumbing-linkedin-advertising/PlumbingLinkedInMainContent";
import PlumbingLinkedInFitExclusivity from "@/components/services/plumbing-linkedin-advertising/PlumbingLinkedInFitExclusivity";
import PlumbingLinkedInContactForm from "@/components/services/plumbing-linkedin-advertising/PlumbingLinkedInContactForm";

const anchorItems = [
  { label: "Why LinkedIn", href: "#why-linkedin" },
  { label: "Campaign Strategy", href: "#campaign-strategy" },
  { label: "Commercial vs Residential", href: "#commercial-vs-residential" },
  { label: "Tracking", href: "#tracking" },
  { label: "Fit", href: "#fit" },
  { label: "Get Started", href: "#contact" },
];

const metaTitle = "Plumbing LinkedIn Advertising for Commercial Contracts and Service Agreements | DemandStream";
const metaDescription = "Plumbing LinkedIn advertising built to win commercial contracts and maintenance agreements. Target property managers and facility directors. See how.";
const canonicalUrl = `${SITE_URL}/plumbing-linkedin-advertising/`;

const PlumbingLinkedInAdvertising = () => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Plumbing LinkedIn Advertising",
    "description": metaDescription,
    "url": canonicalUrl,
    "serviceType": "Plumbing LinkedIn Advertising Service",
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
      <div className="pt-16"><PlumbingLinkedInHero /></div>
      <ServiceHubAnchorNav items={anchorItems} />
      <PlumbingLinkedInMainContent />
      <PlumbingLinkedInFitExclusivity />
      <PlumbingLinkedInContactForm />
      <Footer />
    </div>
  );
};

export default PlumbingLinkedInAdvertising;
