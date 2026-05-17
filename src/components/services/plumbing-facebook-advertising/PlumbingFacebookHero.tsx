import ServiceHubHero from "@/components/services/ServiceHubHero";

const PlumbingFacebookHero = () => (
  <ServiceHubHero
    title="Plumbing Facebook Advertising That Drives Replacement and Membership Growth"
    heroSubtitle="Built to Fill the Replacement Pipeline"
    breadcrumbs={[
      { label: "Plumbing Paid Advertising", href: "/plumbing-paid-advertising" },
      { label: "Plumbing Facebook Advertising" },
    ]}
    description={{
      intro: "Facebook ads built for plumbing operators chasing replacement and membership growth.",
      bullets: [
        "Promote water heater replacement campaigns by home age and neighborhood",
        "Target repipe opportunities with financing-forward messaging",
        "Retarget homeowners who visited but did not book",
        "Build membership plan acquisition through look-alike audiences",
        "Track revenue through ServiceTitan integration",
      ],
      closing: "",
    }}
  />
);

export default PlumbingFacebookHero;
