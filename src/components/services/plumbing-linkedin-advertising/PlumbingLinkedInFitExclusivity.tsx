import ServiceFitSection from "@/components/services/generic/ServiceFitSection";

const goodFit = [
  { point: "You offer commercial plumbing services alongside residential work" },
  { point: "You want to build recurring maintenance contract revenue" },
  { point: "You serve or want to serve multi-family, commercial, or institutional properties" },
  { point: "You have the capacity to handle commercial-scale service agreements" },
  { point: "You want predictable scheduled revenue alongside emergency call volume" },
];

const notFit = [
  { point: "You operate residential-only with no commercial service capability" },
  { point: "No capacity to handle multi-building or scheduled commercial work" },
  { point: "No call tracking or CRM integration in place" },
  { point: "You need immediate emergency call volume rather than longer commercial sales cycles" },
];

const PlumbingLinkedInFitExclusivity = () => (
  <ServiceFitSection
    heading="Is Plumbing LinkedIn Advertising Right for Your Company?"
    subheading="LinkedIn works best for plumbing companies with commercial capability and a genuine interest in contract-based recurring revenue."
    goodFit={goodFit}
    notFit={notFit}
    tradeNoun="Plumbing"
    exclusivityBody="When you work with DemandStream, your competitors don't. We take one plumbing client per service area. That keeps our incentives fully aligned with yours — every LinkedIn campaign, every commercial audience, and every dollar of spend is working to position your company ahead in the commercial market, not divided between you and the plumbing company across town."
  />
);

export default PlumbingLinkedInFitExclusivity;
