import { forwardRef } from "react";
import ServiceContactForm from "@/components/services/generic/ServiceContactForm";

const PlumbingLinkedInContactForm = forwardRef<HTMLElement>((_, ref) => (
  <ServiceContactForm
    ref={ref}
    formType="plumbing_linkedin_contact"
    headline="Ready to Build a Commercial Plumbing Pipeline in Your Market?"
    exclusivityLine="One plumbing company per market. Your competitors don't get in."
  />
));

PlumbingLinkedInContactForm.displayName = "PlumbingLinkedInContactForm";
export default PlumbingLinkedInContactForm;
