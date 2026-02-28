import { forwardRef } from "react";
import ServiceContactForm from "@/components/services/generic/ServiceContactForm";

const PlumbingProgrammaticContactForm = forwardRef<HTMLElement>((_, ref) => (
  <ServiceContactForm
    ref={ref}
    formType="plumbing_programmatic_contact"
    headline="Ready to Keep Your Brand Visible Across Every Screen in Your Market?"
    exclusivityLine="One plumbing company per market. Your competitors don't get in."
  />
));

PlumbingProgrammaticContactForm.displayName = "PlumbingProgrammaticContactForm";
export default PlumbingProgrammaticContactForm;
