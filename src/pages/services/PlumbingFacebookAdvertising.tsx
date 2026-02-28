import { Helmet } from "react-helmet-async";
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

const metaTitle = "Plumbing Facebook Advertising for Replacement and Membership Growth | DemandStream Digital";
const metaDescription = "Plumbing Facebook advertising built to drive water heater replacement demand and grow membership plans. Track booked revenue through ServiceTitan. See how.";
const canonicalUrl = `${SITE_URL}/plumbing-facebook-advertising/`;

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
