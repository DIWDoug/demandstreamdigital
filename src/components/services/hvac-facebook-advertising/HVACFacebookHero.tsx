import ServiceHubHero from "@/components/services/ServiceHubHero";

const HVACFacebookHero = () => (
  <ServiceHubHero
    title="HVAC Facebook Advertising That Drives Replacement and Maintenance Growth"
    heroSubtitle="Built to Fill the Replacement Pipeline"
    breadcrumbs={[
      { label: "HVAC Paid Advertising", href: "/hvac-paid-advertising" },
      { label: "HVAC Facebook Advertising" },
    ]}
    description={{
      intro: "Facebook ads built for HVAC operators, not generic home services.",
      bullets: [
        "Promote AC replacement and system upgrade campaigns",
        "Push financing offers and seasonal promotions",
        "Retarget non-booked website visitors",
        "Build install demand before peak season",
        "Grow maintenance memberships with recurring revenue campaigns",
        "Track booked calls and revenue through ServiceTitan integration",
      ],
      closing: "",
    }}
  />
);

export default HVACFacebookHero;
