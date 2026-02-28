import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import { SITE_URL } from "@/lib/constants";
import HVACInstagramHero from "@/components/services/hvac-instagram-advertising/HVACInstagramHero";
import HVACInstagramMainContent from "@/components/services/hvac-instagram-advertising/HVACInstagramMainContent";
import HVACInstagramFitExclusivity from "@/components/services/hvac-instagram-advertising/HVACInstagramFitExclusivity";
import HVACPaidAdsContactForm from "@/components/services/hvac-paid-advertising/HVACPaidAdsContactForm";

const anchorItems = [
  { label: "How Instagram Works", href: "#how-instagram-works" },
  { label: "Campaign Types", href: "#campaign-types" },
  { label: "Seasonal Strategy", href: "#seasonal-strategy" },
  { label: "Tracking", href: "#tracking" },
  { label: "Fit", href: "#fit" },
  { label: "Get Started", href: "#contact" },
];

const metaTitle = "HVAC Instagram Advertising for Brand Authority and Replacement Install Demand | DemandStream";
const metaDescription = "HVAC Instagram advertising built for brand authority, replacement demand, and retargeting non-booked visitors. Visual campaigns tied to revenue. See how.";
const canonicalUrl = `${SITE_URL}/hvac-instagram-advertising/`;

const HVACInstagramAdvertising = () => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "HVAC Instagram Advertising",
    "description": metaDescription,
    "url": canonicalUrl,
    "serviceType": "HVAC Instagram Advertising Service",
    "provider": { "@type": "Organization", "name": "DemandStream Digital", "url": SITE_URL }
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
      </Helmet>
      <Header />
      <div className="pt-16"><HVACInstagramHero /></div>
      <ServiceHubAnchorNav items={anchorItems} />
      <HVACInstagramMainContent />
      <HVACInstagramFitExclusivity />
      <HVACPaidAdsContactForm headline="Ready to Build Brand Authority Before Peak Demand Hits?" />
      <Footer />
    </div>
  );
};

export default HVACInstagramAdvertising;
