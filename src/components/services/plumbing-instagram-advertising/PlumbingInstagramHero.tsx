import ServiceHubHero from "@/components/services/ServiceHubHero";

const PlumbingInstagramHero = () => (
  <ServiceHubHero
    title="Plumbing Instagram Advertising That Builds Brand Authority and Drives Replacement Calls"
    heroSubtitle="Built to Build Brand and Booked Calls"
    breadcrumbs={[
      { label: "Plumbing Paid Advertising", href: "/plumbing-paid-advertising" },
      { label: "Plumbing Instagram Advertising" },
    ]}
    description={{
      intro: "Instagram ads built for plumbing operators who want brand presence and booked calls.",
      bullets: [
        "Showcase real water heater replacements and repipe completions",
        "Promote seasonal replacement offers with visual-first creative",
        "Retarget website visitors and video viewers",
        "Reinforce financing messaging for high-ticket work",
        "Support brand visibility before and during peak demand",
      ],
      closing: "",
    }}
  />
);

export default PlumbingInstagramHero;
