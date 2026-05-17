import ServiceHubHero from "@/components/services/ServiceHubHero";

const PlumbingSearchAdsHero = () => (
  <ServiceHubHero
    title="Plumbing Search Ads That Drive Booked Service Calls"
    breadcrumbs={[
      { label: "Services", href: "/#services" },
      { label: "Paid Advertising", href: "/paid-marketing" },
      { label: "Plumbing Paid Ads", href: "/plumbing-paid-advertising" },
      { label: "Plumbing Search Advertising" },
    ]}
    description={{
      intro: "Search ads built for plumbing operators in emergency and replacement markets.",
      bullets: [
        "Capture emergency plumbing searches immediately",
        "Separate drain, sewer, water heater, and repipe campaigns",
        "Prioritize high-margin services with dedicated budgets",
        "Built for mobile-first call behavior",
        "Track revenue back to ServiceTitan and your dispatch board",
      ],
      closing: "",
    }}
  />
);

export default PlumbingSearchAdsHero;
