import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import { SITE_URL } from "@/lib/constants";
import PlumbingFacebookHero from "@/components/services/plumbing-facebook-advertising/PlumbingFacebookHero";
import PlumbingFacebookMainContent from "@/components/services/plumbing-facebook-advertising/PlumbingFacebookMainContent";
import PlumbingFacebookFitExclusivity from "@/components/services/plumbing-facebook-advertising/PlumbingFacebookFitExclusivity";
import PlumbingFacebookContactForm from "@/components/services/plumbing-facebook-advertising/PlumbingFacebookContactForm";

const anchorItems = [
  { label: "How Facebook Works", href: "#how-facebook-works" },
  { label: "Campaign Types", href: "#campaign-types" },
  { label: "Seasonal Strategy", href: "#seasonal-strategy" },
  { label: "Tracking", href: "#tracking" },
  { label: "Fit", href: "#fit" },
  { label: "Get Started", href: "#contact" },
];

const metaTitle = "Plumbing Facebook Ads for Replacement & Membership Growth";
const metaDescription = "Water heater replacements, drain emergencies, and membership growth for plumbing companies. Facebook campaigns built around service-level intent and tracked to booked calls.";
const canonicalUrl = `${SITE_URL}/plumbing-facebook-advertising`;

const PlumbingFacebookAdvertising = () => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Plumbing Facebook Advertising",
    "description": metaDescription,
    "url": canonicalUrl,
    "serviceType": "Plumbing Facebook Advertising Service",
    "provider": { "@type": "Organization", "name": "DemandStream Digital", "url": SITE_URL }
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
      <div className="pt-16"><PlumbingFacebookHero /></div>
      <ServiceHubAnchorNav items={anchorItems} />
      <PlumbingFacebookMainContent />
      <PlumbingFacebookFitExclusivity />
      <PlumbingFacebookContactForm />
      <Footer />
    </div>
  );
};

export default PlumbingFacebookAdvertising;
