import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Loader2 } from "lucide-react";
import PhoneInput from "@/components/ui/phone-input";
import { isValidPhone } from "@/lib/validation/phone";
import { useToast } from "@/hooks/use-toast";
import {
  SmsConsentText,
  SmsConsentSummary,
} from "@/components/legal/SmsConsentText";

/**
 * Small inline lead form used in market exclusivity sections.
 * Captures core contact info, stashes it in sessionStorage under
 * GROW_QUALIFIER_PREFILL_KEY, and hands off to /grow-qualifier where
 * GrowthQualifierFlow hydrates the contact + company fields.
 *
 * Collecting phone here is intentional. The market exclusivity sections
 * always render alongside other SMS lead forms (ServiceContactForm on every
 * service page, HeroForm on /, etc.) so consent is already required on these
 * routes. The chat widget allowlist excludes these routes for the same
 * reason. See mem://compliance/leadconnector-chat-widget-ban.
 */
export const GROW_QUALIFIER_PREFILL_KEY = "grow_qualifier_prefill";

export interface GrowQualifierPrefill {
  firstName: string;
  companyName: string;
  email: string;
  phone: string;
  phoneCountryCode: string;
}

interface TerritoryAuditFormProps {
  variant?: "light" | "dark";
}

const TerritoryAuditForm = ({ variant = "light" }: TerritoryAuditFormProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    companyName: "",
    email: "",
    phone: "",
    phoneCountryCode: "+1",
    honeypot: "",
  });

  const labelColor =
    variant === "dark" ? "text-foreground/90" : "text-foreground/90";
  const inputBg =
    variant === "dark"
      ? "bg-background/40 border-foreground/20 text-foreground placeholder:text-muted-foreground/70"
      : "bg-background border-foreground/15 text-foreground placeholder:text-muted-foreground/70";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return; // bot

    const firstName = form.firstName.trim();
    const companyName = form.companyName.trim();
    const email = form.email.trim();

    if (!firstName || !companyName || !email) {
      toast({
        title: "Missing required fields",
        description: "First name, company, and email are required.",
        variant: "destructive",
      });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
      toast({
        title: "Valid email required",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    if (!isValidPhone(form.phone, form.phoneCountryCode)) {
      toast({
        title: "Valid phone number required",
        description:
          "Please enter a valid phone number so we can text you about your market.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    const prefill: GrowQualifierPrefill = {
      firstName,
      companyName,
      email,
      phone: form.phone,
      phoneCountryCode: form.phoneCountryCode,
    };
    try {
      sessionStorage.setItem(
        GROW_QUALIFIER_PREFILL_KEY,
        JSON.stringify(prefill),
      );
    } catch {
      // sessionStorage may be unavailable (private mode); navigation still works.
    }
    navigate("/grow-qualifier");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-xl text-left"
      noValidate
    >
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        value={form.honeypot}
        onChange={(e) => setForm((p) => ({ ...p, honeypot: e.target.value }))}
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <div>
          <label className={`block text-xs font-medium mb-1 ${labelColor}`}>
            First name
          </label>
          <input
            type="text"
            required
            maxLength={80}
            value={form.firstName}
            onChange={(e) =>
              setForm((p) => ({ ...p, firstName: e.target.value }))
            }
            className={`w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue ${inputBg}`}
          />
        </div>
        <div>
          <label className={`block text-xs font-medium mb-1 ${labelColor}`}>
            Company
          </label>
          <input
            type="text"
            required
            maxLength={120}
            value={form.companyName}
            onChange={(e) =>
              setForm((p) => ({ ...p, companyName: e.target.value }))
            }
            className={`w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue ${inputBg}`}
          />
        </div>
        <div>
          <label className={`block text-xs font-medium mb-1 ${labelColor}`}>
            Email
          </label>
          <input
            type="email"
            required
            maxLength={255}
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            className={`w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue ${inputBg}`}
          />
        </div>
        <div>
          <label className={`block text-xs font-medium mb-1 ${labelColor}`}>
            Mobile phone
          </label>
          <PhoneInput
            value={form.phone}
            onChange={(phone) => setForm((p) => ({ ...p, phone }))}
            countryCode={form.phoneCountryCode}
            onCountryCodeChange={(code) =>
              setForm((p) => ({ ...p, phoneCountryCode: code }))
            }
          />
          <SmsConsentSummary className="mt-1" />
        </div>
      </div>

      <SmsConsentText className="mb-4" />

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-cta group inline-flex w-full sm:w-auto items-center justify-center gap-2 disabled:opacity-60"
      >
        {isSubmitting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            Schedule Your Growth Audit
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  );
};

export default TerritoryAuditForm;
