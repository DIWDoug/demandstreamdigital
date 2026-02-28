import ServiceFitSection from "@/components/services/generic/ServiceFitSection";

const goodFit = [
  { point: "You offer water heater replacement and repipe services and want to grow that volume" },
  { point: "You have real job photography or are willing to generate it consistently" },
  { point: "You want to build brand recognition before homeowners have an emergency" },
  { point: "You want to grow plumbing membership plans and recurring revenue" },
  { point: "You have tracking in place or are ready to implement it" },
];

const notFit = [
  { point: "You rely only on emergency repairs with no replacement or membership focus" },
  { point: "No job photography available and no plan to generate it" },
  { point: "No call tracking or CRM integration in place" },
  { point: "You want same-day emergency call volume only with no interest in brand building" },
];

const PlumbingInstagramFitExclusivity = () => (
  <ServiceFitSection
    heading="Is Plumbing Instagram Advertising Right for Your Company?"
    subheading="Instagram works best for plumbing companies investing in brand authority alongside demand generation."
    goodFit={goodFit}
    notFit={notFit}
    tradeNoun="Plumbing"
    exclusivityBody="When you work with DemandStream, your competitors don't. We take one plumbing client per service area. That keeps our incentives consistent with yours and means every piece of creative, every audience, and every dollar of Instagram spend is working to put your company ahead — not divided between you and the plumber down the street."
  />
);

export default PlumbingInstagramFitExclusivity;
