import { useState } from "react";
import { Link } from "react-router-dom";
import { Copy, Check, ExternalLink, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import { useToast } from "@/hooks/use-toast";
import { SITE_URL } from "@/lib/constants";

// Demand Stream credentials the client pastes into each platform
const GRANT_INFO = {
  googleAdsMCC: "964-738-2914", // placeholder — replace with real MCC CID
  metaPartnerId: "1234567890",   // placeholder — replace with real Business ID
  gbpManagerEmail: "audit@demandstreamdigital.com",
  ga4Email: "audit@demandstreamdigital.com",
};

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  googleAdsCid: string;
  metaBusinessId: string;
  gbpBusinessName: string;
  ga4PropertyId: string;
  callTrackingPlatform: string;
  notes: string;
};

const initialForm: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  website: "",
  googleAdsCid: "",
  metaBusinessId: "",
  gbpBusinessName: "",
  ga4PropertyId: "",
  callTrackingPlatform: "",
  notes: "",
};

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <div>
      <Label className="text-xs uppercase tracking-wider text-text-muted font-body">{label}</Label>
      <div className="mt-1 flex items-stretch gap-2">
        <code className="flex-1 px-3 py-2 rounded-md bg-surface-dark border border-border/50 text-foreground font-mono text-sm break-all">
          {value}
        </code>
        <button
          type="button"
          onClick={handleCopy}
          className="px-3 rounded-md bg-cta hover:bg-cta-hover text-cta-foreground text-sm font-bold transition-colors inline-flex items-center gap-1.5"
          aria-label={`Copy ${label}`}
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}

type StepProps = {
  num: number;
  title: string;
  badge: string;
  estMinutes: number;
  children: React.ReactNode;
};

function Step({ num, title, badge, estMinutes, children }: StepProps) {
  return (
    <section className="rounded-lg border border-border/40 bg-card p-6 md:p-8 shadow-sm">
      <div className="flex flex-wrap items-center gap-3 mb-5">
        <span className="h-10 w-10 rounded-full bg-cta text-cta-foreground font-bold inline-flex items-center justify-center">
          {num}
        </span>
        <h2 className="text-xl md:text-2xl font-bold text-foreground">{title}</h2>
        <span className="ml-auto text-xs px-2.5 py-1 rounded-full bg-surface-dark border border-border/50 text-text-muted uppercase tracking-wider">
          {badge} · ~{estMinutes} min
        </span>
      </div>
      <div className="space-y-4 text-foreground/90 leading-relaxed">{children}</div>
    </section>
  );
}

const AdScanOnboarding = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.company) {
      toast({
        title: "Missing required fields",
        description: "Name, email, and company are required.",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    try {
      const { supabase } = await import("@/integrations/supabase/client");
      const { error } = await supabase.functions.invoke("submit-to-ghl", {
        body: {
          source: "ad-scan-onboarding",
          ...form,
          tags: ["ad-scan", "onboarding-submitted"],
        },
      });
      if (error) throw error;
      setSubmitted(true);
      toast({
        title: "Submitted",
        description: "We will confirm access within one business day.",
      });
    } catch (err) {
      toast({
        title: "Submission failed",
        description: "Please email audit@demandstreamdigital.com or try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Ad Scan Onboarding | Grant Access in 10 Minutes | Demand Stream"
        description="Step-by-step access grants for your $97 Local Lead Ad Scan: Google Ads, Meta, Google Business Profile, GA4, and call tracking. No call required."
        canonical={`${SITE_URL}/ad-scan/onboarding`}
        noIndex
      />

      {/* Hero */}
      <header className="bg-navy text-white">
        <div className="max-w-[1100px] mx-auto px-6 py-14 md:py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs uppercase tracking-[0.18em] mb-5">
            <ShieldCheck className="h-3.5 w-3.5" /> Step 2 of 2 · Payment confirmed
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
            Let us in to look. We start in 24 hours.
          </h1>
          <p className="text-lg text-white/80 max-w-3xl">
            Five short steps. No screen shares. No passwords. We can only look, not
            change. You can turn it off any time. Most folks finish in 10 minutes.
          </p>
          <div className="mt-7 grid grid-cols-2 md:grid-cols-5 gap-3 max-w-3xl">
            {["Your info", "Google Ads", "Meta", "Google Business", "Tracking"].map((s, i) => (
              <div
                key={s}
                className="text-xs md:text-sm px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white/85"
              >
                <span className="font-mono text-white/55 mr-2">0{i + 1}</span>
                {s}
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="bg-surface-light">
        <div className="max-w-[1100px] mx-auto px-6 py-12 md:py-16 space-y-6">

          {/* Step 1 — Your info */}
          <Step num={1} title="Tell us who you are" badge="Needed" estMinutes={2}>
            <p className="text-text-muted">
              We use this to find your accounts and send you the report. No spam.
            </p>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div>
                <Label htmlFor="firstName">First name *</Label>
                <Input id="firstName" required value={form.firstName} onChange={(e) => update("firstName", e.target.value)} />
              </div>
              <div>
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" value={form.lastName} onChange={(e) => update("lastName", e.target.value)} />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
              </div>
              <div>
                <Label htmlFor="company">Company *</Label>
                <Input id="company" required value={form.company} onChange={(e) => update("company", e.target.value)} />
              </div>
              <div>
                <Label htmlFor="website">Website</Label>
                <Input id="website" placeholder="https://" value={form.website} onChange={(e) => update("website", e.target.value)} />
              </div>

              {/* Account IDs */}
              <div className="md:col-span-2 mt-2 pt-4 border-t border-border/40">
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted mb-3">
                  Your account numbers (copy them in as you go below)
                </h3>
              </div>
              <div>
                <Label htmlFor="googleAdsCid">Google Ads Customer ID</Label>
                <Input id="googleAdsCid" placeholder="123-456-7890" value={form.googleAdsCid} onChange={(e) => update("googleAdsCid", e.target.value)} />
              </div>
              <div>
                <Label htmlFor="metaBusinessId">Meta Business ID</Label>
                <Input id="metaBusinessId" placeholder="1234567890123456" value={form.metaBusinessId} onChange={(e) => update("metaBusinessId", e.target.value)} />
              </div>
              <div>
                <Label htmlFor="gbpBusinessName">Google Business Profile name</Label>
                <Input id="gbpBusinessName" value={form.gbpBusinessName} onChange={(e) => update("gbpBusinessName", e.target.value)} />
              </div>
              <div>
                <Label htmlFor="ga4PropertyId">GA4 Property ID</Label>
                <Input id="ga4PropertyId" placeholder="123456789" value={form.ga4PropertyId} onChange={(e) => update("ga4PropertyId", e.target.value)} />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="callTrackingPlatform">Call tracking platform (CallRail, CTM, ServiceTitan, etc.)</Label>
                <Input id="callTrackingPlatform" value={form.callTrackingPlatform} onChange={(e) => update("callTrackingPlatform", e.target.value)} />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="notes">Anything we should know? (optional)</Label>
                <Textarea id="notes" rows={3} value={form.notes} onChange={(e) => update("notes", e.target.value)} />
              </div>
              <div className="md:col-span-2 pt-2">
                <Button type="submit" size="lg" disabled={submitting || submitted} className="w-full md:w-auto">
                  {submitted ? "Sent ✓" : submitting ? "Sending..." : "Send and start my scan →"}
                </Button>
                <p className="text-xs text-text-muted mt-3">
                  You can send this now and finish the steps below when you have time. We start the scan when all five are done.
                </p>
              </div>
            </form>
          </Step>

          {/* Step 2 — Google Ads */}
          <Step num={2} title="Grant Google Ads access" badge="Read only" estMinutes={2}>
            <CopyField label="Our Google Ads MCC Customer ID" value={GRANT_INFO.googleAdsMCC} />
            <ol className="list-decimal pl-5 space-y-2 mt-4 text-foreground/90">
              <li>Sign in to <a className="text-cta underline" href="https://ads.google.com" target="_blank" rel="noreferrer">ads.google.com</a> as an admin.</li>
              <li>Top right → <strong>Tools</strong> → <strong>Admin</strong> → <strong>Access and security</strong>.</li>
              <li>Tab: <strong>Managers</strong> → click <strong>+</strong>.</li>
              <li>Paste the Customer ID above, set permission to <strong>Read only</strong>, click <strong>Send invitation</strong>.</li>
            </ol>
            <a href="https://ads.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-cta font-semibold hover:underline mt-2">
              Open Google Ads <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </Step>

          {/* Step 3 — Meta */}
          <Step num={3} title="Grant Meta (Facebook + Instagram) access" badge="Analyze only" estMinutes={3}>
            <CopyField label="Our Meta Business Manager ID" value={GRANT_INFO.metaPartnerId} />
            <ol className="list-decimal pl-5 space-y-2 mt-4 text-foreground/90">
              <li>Open <a className="text-cta underline" href="https://business.facebook.com/settings" target="_blank" rel="noreferrer">business.facebook.com/settings</a>.</li>
              <li>Left nav → <strong>Users</strong> → <strong>Partners</strong> → <strong>Add</strong> → <strong>Give a partner access to your assets</strong>.</li>
              <li>Paste our Business Manager ID above.</li>
              <li>Select your <strong>Ad Account</strong>, <strong>Facebook Page</strong>, <strong>Instagram Account</strong>, and <strong>Pixel</strong>.</li>
              <li>For each, choose <strong>Analyze performance</strong> (read only). Click <strong>Save Changes</strong>.</li>
            </ol>
            <a href="https://business.facebook.com/settings" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-cta font-semibold hover:underline mt-2">
              Open Meta Business Settings <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </Step>

          {/* Step 4 — GBP */}
          <Step num={4} title="Grant Google Business Profile access" badge="Manager role" estMinutes={2}>
            <CopyField label="Email to add as Manager" value={GRANT_INFO.gbpManagerEmail} />
            <ol className="list-decimal pl-5 space-y-2 mt-4 text-foreground/90">
              <li>Search your business name in Google while signed in as the owner.</li>
              <li>In the side panel, click the <strong>three-dot menu</strong> → <strong>Business Profile settings</strong>.</li>
              <li>Open <strong>People and access</strong> → <strong>Add</strong>.</li>
              <li>Paste the email above. Select role <strong>Manager</strong>. Click <strong>Invite</strong>.</li>
            </ol>
            <p className="text-sm text-text-muted">Manager is the minimum role needed to pull Insights data. We never edit your profile.</p>
          </Step>

          {/* Step 5 — Tracking */}
          <Step num={5} title="Grant GA4 and call tracking access" badge="Viewer" estMinutes={3}>
            <CopyField label="Email to add to GA4 and call tracking" value={GRANT_INFO.ga4Email} />
            <div>
              <p className="font-semibold text-foreground mb-2">Google Analytics 4</p>
              <ol className="list-decimal pl-5 space-y-2 text-foreground/90">
                <li>Open <a className="text-cta underline" href="https://analytics.google.com" target="_blank" rel="noreferrer">analytics.google.com</a> → <strong>Admin</strong>.</li>
                <li>Property column → <strong>Property access management</strong> → <strong>+</strong>.</li>
                <li>Paste the email above. Role: <strong>Viewer</strong>. Save.</li>
              </ol>
            </div>
            <div className="pt-2">
              <p className="font-semibold text-foreground mb-2">Call tracking (CallRail / CTM / ServiceTitan)</p>
              <p className="text-foreground/90">
                Add the same email as a <strong>Viewer / Reporting user</strong> in your platform's user
                settings. If you do not have call tracking installed, skip this. We will flag it in the report.
              </p>
            </div>
          </Step>

          {/* Done */}
          <div className="rounded-lg bg-navy text-white p-6 md:p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">That's it. We take it from here.</h3>
            <p className="text-white/80 mb-5 max-w-2xl mx-auto">
              You will get a confirmation email once we accept each grant. Your full scan
              report lands in your inbox within 5 business days.
            </p>
            <Link to="/ad-scan">
              <Button variant="ghost" size="lg">
                Back to the offer <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default AdScanOnboarding;
