import ServiceFitSection from "@/components/services/generic/ServiceFitSection";

const goodFit = [
  { point: "You pursue commercial HVAC contracts or want to" },
  { point: "You offer preventative maintenance agreements for multi-building properties" },
  { point: "You want multi-location and portfolio client partnerships" },
  { point: "You have the capacity to handle commercial-scale service agreements" },
  { point: "You want predictable scheduled revenue alongside emergency call volume" },
];

const notFit = [
  { point: "Residential-only focus with no commercial service capability" },
  { point: "No capacity to handle multi-building or scheduled commercial work" },
  { point: "No call tracking or CRM integration in place" },
  { point: "You need immediate emergency call volume rather than longer commercial sales cycles" },
];

const HVACLinkedInFitExclusivity = () => (
  <ServiceFitSection
    heading="Is HVAC LinkedIn Advertising Right for Your Company?"
    subheading="LinkedIn works best for HVAC companies with commercial capability and a genuine interest in contract-based recurring revenue."
    goodFit={goodFit}
    notFit={notFit}
    tradeNoun="HVAC"
    exclusivityBody="When you work with DemandStream, your competitors don't. We take one HVAC client per service area. That keeps our incentives fully aligned with yours. Every LinkedIn campaign, every commercial audience, and every dollar of spend is working to position your company ahead in the commercial market, not divided between you and the HVAC company across town."
  />
);

export default HVACLinkedInFitExclusivity;
