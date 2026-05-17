import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Mail } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const SUPPORT_EMAIL = "support@lovable.dev";

const schema = z.object({
  workspaceName: z
    .string()
    .trim()
    .min(1, "Workspace name is required")
    .max(200, "Workspace name must be 200 characters or less"),
  summary: z
    .string()
    .trim()
    .min(10, "Please describe what happened (at least 10 characters)")
    .max(5000, "Summary must be 5000 characters or less"),
  contactEmail: z
    .string()
    .trim()
    .email("Enter a valid email")
    .max(320)
    .optional()
    .or(z.literal("")),
});

const buildMailto = (workspaceName: string, summary: string, contactEmail?: string) => {
  const subject = `Refund request: ${workspaceName}`;
  const body =
    `Workspace: ${workspaceName}\n` +
    (contactEmail ? `Contact: ${contactEmail}\n` : "") +
    `\nSummary:\n${summary}\n`;
  return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const RefundRequest = () => {
  const { toast } = useToast();
  const [workspaceName, setWorkspaceName] = useState("");
  const [summary, setSummary] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ workspaceName, summary, contactEmail });
    if (!parsed.success) {
      const first = parsed.error.issues[0];
      toast({ title: "Check your entries", description: first.message, variant: "destructive" });
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("refund_requests").insert({
      workspace_name: parsed.data.workspaceName,
      summary: parsed.data.summary,
      contact_email: parsed.data.contactEmail || null,
    });
    setSubmitting(false);

    if (error) {
      toast({
        title: "Could not save your request",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    const url = buildMailto(parsed.data.workspaceName, parsed.data.summary, parsed.data.contactEmail);
    setMailtoUrl(url);
    setSubmitted(true);
    // Auto open the user's email client with the message pre-filled.
    window.location.href = url;
  };

  return (
    <>
      <SEOHead
        title="Refund Request"
        description="Submit a refund request for Lovable credits."
        canonical="/refund-request"
        noIndex
      />
      <main className="min-h-screen bg-background py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Refund Request</h1>
            <p className="text-muted-foreground">
              Submit your workspace name and a summary of what went wrong. The form saves your
              request and opens your email client with a message pre-filled to {SUPPORT_EMAIL}.
            </p>
          </div>

          {submitted ? (
            <Card className="p-8 text-center space-y-4">
              <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto" />
              <h2 className="text-xl font-semibold text-foreground">Request saved</h2>
              <p className="text-muted-foreground">
                Your email client should have opened with the message ready to send. If it did not,
                click below.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <Button asChild>
                  <a href={mailtoUrl}>
                    <Mail className="h-4 w-4 mr-2" />
                    Open email
                  </a>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSubmitted(false);
                    setWorkspaceName("");
                    setSummary("");
                    setContactEmail("");
                  }}
                >
                  Submit another
                </Button>
              </div>
            </Card>
          ) : (
            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="workspace">Workspace name</Label>
                  <Input
                    id="workspace"
                    value={workspaceName}
                    onChange={(e) => setWorkspaceName(e.target.value)}
                    placeholder="e.g. DemandStream Digital"
                    maxLength={200}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Contact email (optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="you@company.com"
                    maxLength={320}
                  />
                </div>

                <div>
                  <Label htmlFor="summary">What went wrong</Label>
                  <Textarea
                    id="summary"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    placeholder="Describe what happened, when it happened, and how many credits you would like refunded."
                    rows={8}
                    maxLength={5000}
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {summary.length} / 5000
                  </p>
                </div>

                <Button type="submit" disabled={submitting} className="w-full">
                  {submitting ? "Saving..." : "Submit and open email"}
                </Button>
              </form>
            </Card>
          )}
        </div>
      </main>
    </>
  );
};

export default RefundRequest;
