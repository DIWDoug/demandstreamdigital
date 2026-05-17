import { MessageSquare } from "lucide-react";
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

interface SmsConsentSummaryProps {
  /** Outer wrapper classes. Defaults to a bordered, tinted surface so the notice is visually obvious. */
  className?: string;
  /** Tailwind classes applied to the Privacy/Terms links. */
  linkClassName?: string;
  /** Body text color class. Override for dark backgrounds. */
  textClassName?: string;
  /** Icon color class. Override for dark backgrounds. */
  iconClassName?: string;
  /** Hide the icon (for very compact placements). */
  hideIcon?: boolean;
}

/**
 * Prominent inline consent notice rendered next to every contact form's submit
 * action so users see the SMS/call/email disclosure before they submit. The full
 * TCPA paragraph still renders via <SmsConsentText /> for legal completeness.
 */
export function SmsConsentSummary({
  className = "mt-3 flex items-start gap-2 rounded-md border border-border bg-muted/40 px-3 py-2.5",
  // Underlined + medium weight + explicit foreground color keeps links AAA on every surface.
  linkClassName = "underline font-medium text-foreground hover:opacity-80",
  // Bump from 12px/muted to 13px/text-secondary so the disclosure passes WCAG AA at small sizes.
  textClassName = "text-[13px] leading-relaxed text-text-secondary",
  iconClassName = "h-4 w-4 mt-0.5 shrink-0 text-text-secondary",
  hideIcon = false,
}: SmsConsentSummaryProps) {
  return (
    <div className={className} role="note" aria-label="SMS and contact consent notice">
      {hideIcon ? null : <MessageSquare className={iconClassName} aria-hidden="true" />}
      <p className={textClassName}>
        <span className="font-semibold">Heads up:</span> by submitting, you agree to receive marketing calls, SMS, and
        emails from Demand Stream Digital at the contact info provided (autodialer may be used). Consent is not a
        condition of purchase. Msg &amp; data rates may apply. Reply STOP to opt out, HELP for help. See our{" "}
        <Link to="/privacy" className={linkClassName}>Privacy Policy</Link> and{" "}
        <Link to="/terms" className={linkClassName}>Terms</Link>.
      </p>
    </div>
  );
}

interface EmailMarketingConsentProps {
  className?: string;
  linkClassName?: string;
}

/**
 * Email-only marketing consent notice for forms that collect an email but no phone.
 * Use this on newsletter / lead-magnet signups so every contact form on the site
 * carries an explicit consent line.
 */
export function EmailMarketingConsent({
  className = "mt-3 text-[12px] leading-snug text-text-muted",
  linkClassName = "underline font-medium hover:text-foreground",
}: EmailMarketingConsentProps) {
  return (
    <p className={className} role="note">
      By submitting, you agree to receive marketing emails from Demand Stream Digital. You can unsubscribe at any time.
      See our{" "}
      <Link to="/privacy" className={linkClassName}>Privacy Policy</Link> and{" "}
      <Link to="/terms" className={linkClassName}>Terms</Link>.
    </p>
  );
}

