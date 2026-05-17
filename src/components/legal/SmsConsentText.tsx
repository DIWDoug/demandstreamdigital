import { Link } from "react-router-dom";

interface SmsConsentTextProps {
  /** Tailwind classes for the wrapping element. */
  className?: string;
  /** Tailwind classes applied to the Privacy/Terms links. */
  linkClassName?: string;
  /** Append "Protected by reCAPTCHA." (use on forms that submit through reCAPTCHA). */
  withRecaptcha?: boolean;
  /** Render as <p> (default) or <span> (when nested inside a <label> or other inline context). */
  as?: "p" | "span";
  /** Optional prefix copy rendered before the consent disclosure. */
  prefix?: React.ReactNode;
}

/**
 * Canonical TCPA-compliant SMS + email consent disclosure.
 *
 * This is the single source of truth for consent wording across every lead form.
 * Do NOT inline or duplicate this text — always render <SmsConsentText /> instead
 * so legal updates propagate everywhere automatically.
 */
export function SmsConsentText({
  className,
  linkClassName = "underline hover:text-foreground",
  withRecaptcha = false,
  as = "p",
  prefix,
}: SmsConsentTextProps) {
  const Tag = as;
  return (
    <Tag className={className}>
      {prefix ? <>{prefix} </> : null}
      By providing your phone number and submitting this form, you agree to receive marketing emails and SMS messages
      from Demand Stream Digital at the number provided, including messages sent by autodialer. Consent is not a
      condition of any purchase. Message and data rates may apply. Message frequency varies. Reply HELP for help or
      STOP to unsubscribe. View our{" "}
      <Link to="/privacy" className={linkClassName}>Privacy Policy</Link> and{" "}
      <Link to="/terms" className={linkClassName}>Terms of Service</Link>.
      {withRecaptcha ? " Protected by reCAPTCHA." : null}
    </Tag>
  );
}

export default SmsConsentText;
