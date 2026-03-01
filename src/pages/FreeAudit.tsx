import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Search, Loader2, ArrowRight, CheckCircle, FileText, Clock, Users, ChevronDown } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import SubtleOrbs from "@/components/SubtleOrbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PhoneInput from "@/components/ui/phone-input";
import AuditReport from "@/components/audit/AuditReport";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  "On-page SEO analysis with actionable recommendations",
  "Technical SEO health check (schema, sitemap, robots.txt)",
  "Content quality & readability assessment",
  "Local SEO signals for plumbing & HVAC",
  "Mobile & performance quick scan",
];

const auditChecks = [
  { label: "Local SEO", detail: "NAP consistency, service area coverage, local citation strength" },
  { label: "Google Business Profile", detail: "Category alignment, review velocity, photo and post activity" },
  { label: "Technical SEO", detail: "Schema markup, sitemap, robots.txt, crawlability issues" },
  { label: "Content", detail: "Page intent match, keyword targeting, readability, thin content flags" },
  { label: "Competitor Gaps", detail: "Where nearby companies outrank you and why" },
];

const faqs = [
  {
    q: "How long does the audit take?",
    a: "Under 30 seconds. Enter your URL, submit the form, and your scored report appears on the page immediately. No waiting for an email."
  },
  {
    q: "Is this really free?",
    a: "Yes. No credit card, no trial, no obligation. You get a full scored report with category breakdowns and specific recommendations at no cost."
  },
  {
    q: "Who is this audit built for?",
    a: "Plumbing and HVAC companies only. The scoring criteria and recommendations are calibrated for trade service businesses competing in local search, not generic B2B or ecommerce sites."
  },
  {
    q: "What happens after I submit?",
    a: "Your report appears on screen immediately. We will also follow up with a copy by email. If your scores reveal clear gaps, you can book a strategy call to discuss next steps. There is no hard sell."
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }))
};

const FreeAudit = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [auditData, setAuditData] = useState<any>(null);

  // Form state
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [countryId, setCountryId] = useState("US");

  // Honeypot
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) return; // bot

    if (!url.trim() || !name.trim() || !email.trim() || !phone.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("run-seo-audit", {
        body: {
          url: url.trim(),
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          phoneCountryCode: countryCode,
        },
      });

      if (error) throw error;

      if (data?.success) {
        setAuditData(data.data);
        toast({
          title: "Audit complete!",
          description: "Your SEO audit report is ready below.",
        });

        // Scroll to results
        setTimeout(() => {
          document.getElementById("audit-results")?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        throw new Error(data?.error || "Audit failed");
      }
    } catch (err: any) {
      console.error("Audit error:", err);
      toast({
        title: "Something went wrong",
        description: err.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead
        title="Free SEO Audit for Plumbing & HVAC | DemandStream"
        description="Free, instant SEO audit for your plumbing or HVAC website. See what's working, what's broken, and exactly what to fix first. Takes 30 seconds."
        canonical="https://demandstreamdigital.com/free-audit"
        schemaJson={faqSchema}
      />

      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24">
          <SubtleOrbs variant="top-right" />
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Left — Value Prop */}
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-cta/10 text-cta text-xs font-semibold uppercase tracking-wider mb-6">
                    Free Tool
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Instant <span className="text-accent-blue">SEO Audit</span>{" "}
                    for Your Website
                  </h1>
                  <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                    See exactly what's helping — and hurting — your search
                    rankings. Get a detailed, AI-powered SEO analysis with
                    actionable recommendations in under 60 seconds.
                  </p>

                  <ul className="space-y-3 mb-8">
                    {benefits.map((b, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-text-secondary"
                      >
                        <CheckCircle className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm text-text-muted italic">
                    Results delivered instantly. No obligation.
                  </p>
                </div>

                {/* Right — Lead Capture Form */}
                <div className="bg-surface-card border border-border rounded-2xl p-8 shadow-lg">
                  <h2 className="text-xl font-semibold text-foreground mb-2">
                    Run your free audit
                  </h2>
                  <p className="text-sm text-text-muted mb-6">
                    Enter your website and contact info to get started.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Honeypot */}
                    <div className="absolute -left-[9999px]" aria-hidden="true">
                      <input
                        type="text"
                        name="company_fax"
                        tabIndex={-1}
                        autoComplete="off"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="audit-url">Website URL</Label>
                      <div className="relative mt-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                        <Input
                          id="audit-url"
                          type="text"
                          placeholder="yourcompany.com"
                          value={url}
                          onChange={(e) => setUrl(e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="audit-name">Your Name</Label>
                      <Input
                        id="audit-name"
                        type="text"
                        placeholder="John Smith"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1"
                        required
                        maxLength={100}
                      />
                    </div>

                    <div>
                      <Label htmlFor="audit-email">Email Address</Label>
                      <Input
                        id="audit-email"
                        type="email"
                        placeholder="john@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1"
                        required
                        maxLength={255}
                      />
                    </div>

                    <div>
                      <Label>Phone Number</Label>
                      <PhoneInput
                        value={phone}
                        onChange={setPhone}
                        countryCode={countryCode}
                        onCountryCodeChange={setCountryCode}
                        countryId={countryId}
                        onCountryIdChange={setCountryId}
                        placeholder="(555) 123-4567"
                        required
                        className="mt-1"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-cta hover:bg-cta/90 text-white font-semibold h-12 text-base"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin mr-2" />
                          Analyzing your site…
                        </>
                      ) : (
                        <>
                          Run My Free Audit
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-text-muted text-center">
                      By submitting, you agree to our{" "}
                      <a href="/privacy" className="underline hover:text-foreground">
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section (gated — only shows after submission) */}
        {auditData && (
          <section id="audit-results" className="py-16 lg:py-24">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <AuditReport data={auditData} userName={name} />
              </div>
            </div>
          </section>
        )}

        {/* What the audit checks */}
        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-blue mb-2">What Gets Analyzed</p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Five areas your report covers</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {auditChecks.map(({ label, detail }) => (
                <div key={label} className="bg-surface-card border border-border rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-accent-blue flex-shrink-0" />
                    <span className="font-semibold text-foreground text-sm">{label}</span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What you receive + How long + Who it's for */}
        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-accent-blue" />
                </div>
                <h3 className="font-bold text-foreground mb-2">What you receive</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  A scored report across five categories with specific findings and prioritized fixes. Not a generic summary. Actual issues on your actual site.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-accent-blue" />
                </div>
                <h3 className="font-bold text-foreground mb-2">How long it takes</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  30 seconds. Submit the form and your report appears on this page immediately. No waiting, no email delay, no account required.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-accent-blue" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Who it's for</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Plumbing and HVAC companies only. The scoring criteria are calibrated for trade service businesses, not generic local businesses or ecommerce sites.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-blue mb-2">Common Questions</p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">FAQ</h2>
            </div>
            <div className="space-y-4">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group bg-surface-card border border-border rounded-xl p-5 cursor-pointer">
                  <summary className="flex items-center justify-between gap-4 font-semibold text-foreground text-sm list-none select-none">
                    {q}
                    <ChevronDown className="w-4 h-4 text-text-muted flex-shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FreeAudit;
