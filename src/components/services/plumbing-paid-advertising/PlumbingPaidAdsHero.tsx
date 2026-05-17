import ServiceHubHero from "@/components/services/ServiceHubHero";

const PlumbingPaidAdsHero = () => (
  <ServiceHubHero
    title="Plumbing Paid Advertising That Drives Booked Service Calls"
    breadcrumbs={[
      { label: "Services", href: "/#services" },
      { label: "Paid Advertising", href: "/paid-marketing" },
      { label: "Plumbing Paid Advertising" },
    ]}
    description={{
      intro: "Paid advertising built for plumbing operators in competitive local markets.",
      bullets: [
        "Capture emergency plumbing searches before competitors do",
        "Separate drain, sewer, water heater, and repipe campaigns",
        "Retarget homeowners who searched but did not book",
        "Protect high-margin replacement services",
        "Track revenue directly to your dispatch board",
      ],
      closing: "",
    }}
  />
);

export default PlumbingPaidAdsHero;
