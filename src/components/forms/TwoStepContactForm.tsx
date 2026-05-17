import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";

/**
 * TwoStepContactForm
 *
 * Replaced site-wide with a Strategy Call CTA card that routes to
 * /grow-qualifier. Props are preserved for backwards compatibility with
 * existing callsites; only `submitButtonText` and `className` still affect
 * rendering. No phone or SMS data is collected here, which is what keeps
 * the chat-widget pages clean of vendor TCPA "multiple opt-in" issues.
 */
interface TwoStepContactFormProps {
  formType?: string;
  submitButtonText?: string;
  step1ButtonText?: string;
  showServicesInterested?: boolean;
  className?: string;
  compact?: boolean;
}

const TwoStepContactForm = forwardRef<HTMLDivElement, TwoStepContactFormProps>(
  ({ submitButtonText = "Schedule Your Growth Audit", className = "", compact = false }, ref) => {
    return (
      <div ref={ref} className={className}>
        <div
          className={`rounded-2xl border border-border bg-background ${
            compact ? "p-6" : "p-8 lg:p-10"
          } text-center`}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">
            Ready to Own Your Market?
          </p>
          <h3
            className={`font-bold text-foreground mb-3 ${
              compact ? "text-2xl" : "text-2xl md:text-3xl"
            }`}
          >
            Schedule Your Growth Audit
          </h3>
          <p className="text-text-secondary max-w-md mx-auto mb-2">
            Walk through your service area, capacity, and growth targets with our team.
            We confirm fit before any pitch.
          </p>
          <p className="text-xs text-text-muted mb-6">
            One plumbing or HVAC company per market. Your competitors don't get in.
          </p>

          <Link to="/grow-qualifier" className="btn-cta group inline-flex w-full sm:w-auto">
            {submitButtonText}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>

          <p className="mt-4 flex items-center justify-center gap-2 text-xs text-text-muted">
            <Clock className="h-3.5 w-3.5" />
            60 seconds to qualify. Follow up within one business day.
          </p>
        </div>
      </div>
    );
  }
);

TwoStepContactForm.displayName = "TwoStepContactForm";

export default TwoStepContactForm;
