import ServiceBiggerPicture from "@/components/services/generic/ServiceBiggerPicture";

const services = [
  { label: "Local SEO", href: "/hvac-and-plumbing-seo" },
  { label: "Google Maps / GBP", href: "/plumbing-google-maps" },
  { label: "Reputation Management", href: "/hvac-and-plumbing-seo" },
  { label: "Paid Advertising", href: "/hvac-and-plumbing-paid-ads" },
  { label: "Email Marketing", href: "/plumbing-email-marketing" },
  { label: "Reporting & Dashboards", href: "/plumbing-reporting" },
];

const orbitNodes = [
  { label: "Local SEO", angle: 0 },
  { label: "Google Maps / GBP", angle: 60 },
  { label: "Reputation Management", angle: 120 },
  { label: "Email Marketing", angle: 180 },
  { label: "Reporting & Dashboards", angle: 240 },
  { label: "Web Design", angle: 300 },
];

const PaidAdsBiggerPicture = () => (
  <ServiceBiggerPicture
    heading="Paid Advertising Is Part of a"
    headingHighlight="Bigger Growth System"
    body1="Paid advertising produces the strongest results when it runs inside a connected system. Not as a standalone channel managed in isolation."
    body2="Your paid campaigns perform better when your GBP reviews are strong, your landing pages are built for intent, and your call tracking feeds data back into campaign decisions. Your SEO lowers the blended cost per booked call over time. Your email marketing reactivates past customers before they search and click on a competitor's ad. When every channel pulls toward the same outcome, more booked service calls at a lower cost, the system compounds."
    centerLabel="Paid Advertising"
    centerSublabel="Demand control across 6 channels"
    services={services}
    orbitNodes={orbitNodes}
  />
);

export default PaidAdsBiggerPicture;
