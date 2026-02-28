import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import { SITE_URL } from "@/lib/constants";
import PlumbingInstagramHero from "@/components/services/plumbing-instagram-advertising/PlumbingInstagramHero";
import PlumbingInstagramMainContent from "@/components/services/plumbing-instagram-advertising/PlumbingInstagramMainContent";
import PlumbingInstagramFitExclusivity from "@/components/services/plumbing-instagram-advertising/PlumbingInstagramFitExclusivity";
import PlumbingInstagramContactForm from "@/components/services/plumbing-instagram-advertising/PlumbingInstagramContactForm";

const anchorItems = [
  { label: "How Instagram Works", href: "#how-instagram-works" },
  { label: "Campaign Types", href: "#campaign-types" },
  { label: "Seasonal Strategy", href: "#seasonal-strategy" },
  { label: "Tracking", href: "#tracking" },
  { label: "Fit", href: "#fit" },
  { label: "Get Started", href: "#contact" },
];

const metaTitle = "Plumbing Instagram Advertising for Replacement Demand and Brand Authority | DemandStream Digital";
const metaDescription = "Plumbing Instagram ads that drive replacement demand and build brand authority. Visual campaigns tracked to booked revenue through ServiceTitan.";
const canonicalUrl = `${SITE_URL}/plumbing-instagram-advertising`;

const PlumbingInstagramAdvertising = () => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Plumbing Instagram Advertising",
    "description": metaDescription,
    "url": canonicalUrl,
    "serviceType": "Plumbing Instagram Advertising Service",
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
      <div className="pt-16"><PlumbingInstagramHero /></div>
      <ServiceHubAnchorNav items={anchorItems} />
      <PlumbingInstagramMainContent />
      <PlumbingInstagramFitExclusivity />
      <PlumbingInstagramContactForm />
      <Footer />
    </div>
  );
};

export default PlumbingInstagramAdvertising;
