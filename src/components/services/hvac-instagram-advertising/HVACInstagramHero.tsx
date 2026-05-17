import ServiceHubHero from "@/components/services/ServiceHubHero";

const HVACInstagramHero = () => (
  <ServiceHubHero
    title="HVAC Instagram Advertising That Builds Brand Authority and Drives Replacement Calls"
    breadcrumbs={[
      { label: "HVAC Paid Advertising", href: "/hvac-paid-advertising" },
      { label: "HVAC Instagram Advertising" },
    ]}
    description={{
      intro: "Instagram ads built for HVAC operators who want brand presence and booked calls.",
      bullets: [
        "Showcase real system installations and completed replacements",
        "Promote seasonal replacement and financing offers",
        "Retarget website visitors and ad engagers who did not book",
        "Build brand authority before peak cooling and heating seasons",
        "Grow maintenance membership visibility with existing customers",
        "Track booked calls and revenue through ServiceTitan integration",
      ],
      closing: "",
    }}
  />
);

export default HVACInstagramHero;
