import ServiceFitSection from "@/components/services/generic/ServiceFitSection";

const goodFit = [
  { point: "You promote replacement services and want to grow install volume" },
  { point: "You offer financing and want to reach homeowners in the research phase" },
  { point: "You want brand reinforcement before peak cooling and heating seasons" },
  { point: "You have or are willing to produce real job photography" },
  { point: "You want to retarget website visitors who did not convert" },
];

const notFit = [
  { point: "Emergency-only business model with no install or replacement focus" },
  { point: "No tracking foundation or CRM integration" },
  { point: "No willingness to invest in real visual content" },
  { point: "Looking for same-day call volume only" },
];

const HVACInstagramFitExclusivity = () => (
  <ServiceFitSection
    heading="Is HVAC Instagram Advertising Right for Your Company?"
    subheading="Instagram works best for HVAC companies investing in brand authority alongside demand generation."
    goodFit={goodFit}
    notFit={notFit}
    tradeNoun="HVAC"
    exclusivityBody="When you work with DemandStream, your competitors don't. We take one HVAC client per service area. That keeps our incentives consistent with yours and means the Instagram strategy we build is working to put your brand in front of homeowners in your market. Not split with the company across town."
  />
);

export default HVACInstagramFitExclusivity;
