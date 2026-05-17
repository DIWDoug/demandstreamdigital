import ServiceHubHero from "@/components/services/ServiceHubHero";

const HVACSearchAdsHero = () => (
  <ServiceHubHero
    title="HVAC Search Ads That Drive Booked Service Calls"
    heroSubtitle="Built to Capture High-Intent HVAC Searches"
    breadcrumbs={[
      { label: "Services", href: "/#services" },
      { label: "Paid Advertising", href: "/paid-marketing" },
      { label: "HVAC Paid Ads", href: "/hvac-paid-advertising" },
      { label: "HVAC Search Advertising" },
    ]}
    description={{
      intro: "Search ads tuned for HVAC operators in emergency and replacement markets.",
      bullets: [
        "Capture no-cool and no-heat emergency searches immediately",
        "Separate repair and system replacement campaigns",
        "Prioritize high-margin installations with dedicated budgets",
        "Adjust spend based on heating and cooling season demand",
        "Track revenue directly through ServiceTitan and your dispatch board",
      ],
      closing: "",
    }}
  />
);

export default HVACSearchAdsHero;
