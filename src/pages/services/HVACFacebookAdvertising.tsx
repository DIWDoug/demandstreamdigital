import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import { SITE_URL } from "@/lib/constants";
import HVACFacebookHero from "@/components/services/hvac-facebook-advertising/HVACFacebookHero";
import HVACFacebookMainContent from "@/components/services/hvac-facebook-advertising/HVACFacebookMainContent";
import HVACFacebookFitExclusivity from "@/components/services/hvac-facebook-advertising/HVACFacebookFitExclusivity";
import HVACPaidAdsContactForm from "@/components/services/hvac-paid-advertising/HVACPaidAdsContactForm";

const anchorItems = [
  { label: "How Facebook Works", href: "#how-facebook-works" },
  { label: "Campaign Types", href: "#campaign-types" },
  { label: "Seasonal Strategy", href: "#seasonal-strategy" },
  { label: "Tracking", href: "#tracking" },
  { label: "Fit", href: "#fit" },
  { label: "Get Started", href: "#contact" },
];

const metaTitle = "HVAC Facebook Advertising for Replacement and Maintenance Membership Growth | DemandStream";
const metaDescription = "HVAC Facebook advertising built to drive replacement demand and grow maintenance memberships. Track booked revenue through ServiceTitan. See how.";
const canonicalUrl = `${SITE_URL}/hvac-facebook-advertising/`;

const HVACFacebookAdvertising = () => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "HVAC Facebook Advertising",
    "description": metaDescription,
    "url": canonicalUrl,
    "serviceType": "HVAC Facebook Advertising Service",
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
      <div className="pt-16"><HVACFacebookHero /></div>
      <ServiceHubAnchorNav items={anchorItems} />
      <HVACFacebookMainContent />
      <HVACFacebookFitExclusivity />
      <HVACPaidAdsContactForm />
      <Footer />
    </div>
  );
};

export default HVACFacebookAdvertising;
