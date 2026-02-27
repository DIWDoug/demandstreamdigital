import { Helmet } from "react-helmet-async";
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
      <div className="pt-16"><HVACLinkedInHero /></div>
      <ServiceHubAnchorNav items={anchorItems} />
      <HVACLinkedInMainContent />
      <HVACLinkedInFitExclusivity />
      <HVACPaidAdsContactForm />
      <Footer />
    </div>
  );
};

export default HVACLinkedInAdvertising;
