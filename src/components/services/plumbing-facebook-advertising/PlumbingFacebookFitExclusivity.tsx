import ServiceFitSection from "@/components/services/generic/ServiceFitSection";

const goodFit = [
  { point: "You offer water heater replacement and want to grow that volume" },
  { point: "You promote financing options on repipe or larger jobs" },
  { point: "You want to grow a plumbing membership plan and build recurring revenue" },
  { point: "You want predictable replacement demand in slower emergency months" },
  { point: "You have call tracking in place or are ready to implement it" },
];

const notFit = [
  { point: "You rely only on emergency repairs with no replacement or membership focus" },
  { point: "No call tracking or CRM integration in place" },
  { point: "No long-term demand generation strategy beyond Google Ads" },
  { point: "You want same-day call volume only with no interest in nurturing decisions" },
];

const PlumbingFacebookFitExclusivity = () => (
  <ServiceFitSection
    heading="Is Plumbing Facebook Advertising Right for Your Company?"
    subheading="Facebook works best for plumbing companies building beyond emergency-only demand."
    goodFit={goodFit}
    notFit={notFit}
    tradeNoun="Plumbing"
    exclusivityBody="When you work with DemandStream, your competitors don't. We take one plumbing client per service area — full stop. That's the model. It keeps our incentives consistent with yours and means the Facebook strategy we build is designed to put you ahead of every other plumber in your market, not split between you and the company down the street."
  />
);

export default PlumbingFacebookFitExclusivity;
