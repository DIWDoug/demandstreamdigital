import ServiceFitSection from "@/components/services/generic/ServiceFitSection";

const goodFit = [
  { point: "You are already running search ads and want to extend your brand presence" },
  { point: "You promote water heater replacement and repipe services with real budget behind them" },
  { point: "You operate in a competitive metro where name recognition is a conversion barrier" },
  { point: "You want to retarget website visitors across the web and streaming platforms" },
  { point: "You have tracking in place or are ready to implement it" },
];

const notFit = [
  { point: "You have no existing search or social campaigns to reinforce" },
  { point: "Emergency-only focus with no replacement or membership services to promote" },
  { point: "No call tracking or CRM integration in place" },
  { point: "Budget under the threshold needed to generate meaningful reach in your market" },
];

const PlumbingProgrammaticFitExclusivity = () => (
  <ServiceFitSection
    heading="Is Plumbing Programmatic Advertising Right for Your Company?"
    subheading="Programmatic works best as a reinforcement layer for companies already running search and social campaigns."
    goodFit={goodFit}
    notFit={notFit}
    tradeNoun="Plumbing"
    exclusivityBody="When you work with DemandStream, your competitors don't. We take one plumbing client per service area. That means the programmatic strategy we build — every AdRoll audience, every CTV placement, every retargeting pool — is working to build your brand in your market, not divided between you and the company down the street."
  />
);

export default PlumbingProgrammaticFitExclusivity;
