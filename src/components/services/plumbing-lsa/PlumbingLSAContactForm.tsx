import { forwardRef } from "react";
import ServiceContactForm from "@/components/services/generic/ServiceContactForm";

const PlumbingLSAContactForm = forwardRef<HTMLElement>((_, ref) => (
  <ServiceContactForm
    ref={ref}
    formType="plumbing_lsa_contact"
    headline="Ready to Own the Top Spot for Emergency Plumbing?"
    exclusivityLine="One plumbing company per market. Your competitors don't get in."
  />
));

PlumbingLSAContactForm.displayName = "PlumbingLSAContactForm";
export default PlumbingLSAContactForm;
