import { forwardRef } from "react";
import ServiceContactForm from "@/components/services/generic/ServiceContactForm";

const LSAHubContactForm = forwardRef<HTMLElement>((_, ref) => (
  <ServiceContactForm
    ref={ref}
    formType="lsa_hub_contact"
    headline="Ready to Own the Top of Google?"
    exclusivityLine="One plumbing company per market. One HVAC company per market. Your competitors don't get in."
  />
));

LSAHubContactForm.displayName = "LSAHubContactForm";
export default LSAHubContactForm;
