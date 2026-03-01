import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import { SITE_URL } from "@/lib/constants";
import PlumbingProgrammaticHero from "@/components/services/plumbing-programmatic-advertising/PlumbingProgrammaticHero";
import PlumbingProgrammaticMainContent from "@/components/services/plumbing-programmatic-advertising/PlumbingProgrammaticMainContent";
import PlumbingProgrammaticFitExclusivity from "@/components/services/plumbing-programmatic-advertising/PlumbingProgrammaticFitExclusivity";
import PlumbingProgrammaticContactForm from "@/components/services/plumbing-programmatic-advertising/PlumbingProgrammaticContactForm";

const anchorItems = [
  { label: "What Is Programmatic", href: "#what-is-programmatic" },
  { label: "When It Works", href: "#when-it-works" },
  { label: "Connected TV", href: "#connected-tv" },
  { label: "Tracking", href: "#tracking" },
  { label: "Fit", href: "#fit" },
  { label: "Get Started", href: "#contact" },
];

const metaTitle = "Plumbing Programmatic Ads for Replacement Demand | DemandStream";
const metaDescription = "Plumbing programmatic advertising across display and CTV. Drive water heater replacement demand and keep your brand visible across every screen.";
const canonicalUrl = `${SITE_URL}/plumbing-programmatic-advertising`;

const PlumbingProgrammaticAdvertising = () => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Plumbing Programmatic Advertising",
    "description": metaDescription,
    "url": canonicalUrl,
    "serviceType": "Plumbing Programmatic Advertising Service",
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
      <div className="pt-16"><PlumbingProgrammaticHero /></div>
      <ServiceHubAnchorNav items={anchorItems} />
      <PlumbingProgrammaticMainContent />
      <PlumbingProgrammaticFitExclusivity />
      <PlumbingProgrammaticContactForm />
      <Footer />
    </div>
  );
};

export default PlumbingProgrammaticAdvertising;
