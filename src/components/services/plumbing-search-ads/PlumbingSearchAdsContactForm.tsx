import { forwardRef } from "react";
import ServiceContactForm from "@/components/services/generic/ServiceContactForm";

const PLUMBING_SEARCH_STEPS = [
  { title: "Discovery & Alignment", content: "We learn how your plumbing business operates: service area, capacity, dispatch process, and call patterns. This shapes everything that follows." },
  { title: "Scope & Pricing", content: "We scope the campaign architecture based on your service mix, market, and growth targets. You know exactly what you are buying before any work begins." },
  { title: "Smooth Onboarding", content: "Tracking setup, call attribution, and CRM integration happen before a single dollar of ad spend. We do not run campaigns on broken data." },
  { title: "Execute with Precision", content: "Campaigns are built, launched, and refined. Emergency campaigns run first. Water heater, repipe, and drain campaigns layer in as data confirms the foundation." },
  { title: "Deliver & Communicate", content: "Monthly reporting shows cost per booked call by campaign and service type. You see what the dispatch board sees, not just what the ad platform reports." },
  { title: "Delight & Retain", content: "Geo bid refinements, capacity throttle protocols, and continuous optimization keep your campaigns aligned with how your plumbing business actually runs." },
];

const PlumbingSearchAdsContactForm = forwardRef<HTMLElement>((_, ref) => (
  <ServiceContactForm
    ref={ref}
    formType="plumbing_search_ads_contact"
    headline="Ready to Capture Emergency Demand?"
    exclusivityLine="One plumbing company per market. Your competitors don't get in."
    steps={PLUMBING_SEARCH_STEPS}
  />
));

PlumbingSearchAdsContactForm.displayName = "PlumbingSearchAdsContactForm";
export default PlumbingSearchAdsContactForm;
