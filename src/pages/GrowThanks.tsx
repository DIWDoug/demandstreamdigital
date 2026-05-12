import { useEffect, useState } from "react";
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import {
  consumeGrowLeadVerified,
  isBookingSuccessfulMessage,
  pushGrowDataLayer,
  safeTrackCustom,
  safeTrackLead,
} from "@/lib/growFunnel";

const bookingUrl = "https://api.leadconnectorhq.com/widget/booking/PE7f9lpA0Qyu8GCa9UA0";

const GrowThanks = () => {
  const [leadReady, setLeadReady] = useState(false);

  useEffect(() => {
    const verified = consumeGrowLeadVerified();
    if (verified && !window.__dsdGrowLeadFired) {
      safeTrackLead(verified.formType);
      pushGrowDataLayer("lead_submitted", { form_type: verified.formType });
      window.__dsdGrowLeadFired = true;
      setLeadReady(true);
    }
  }, []);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (!isBookingSuccessfulMessage(event.data)) return;

      safeTrackCustom("GrowStrategyCallBooked", { funnel: "grow" });
      pushGrowDataLayer("grow_strategy_call_booked", { funnel: "grow" });
      window.location.assign("/grow/booked");
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead
        title="Book Your Strategy Call | DemandStream"
        description="Choose a time to book your strategy call."
        canonical="https://demandstreamdigital.com/grow/thanks"
        noIndex
      />
      <Header />
      <main className="pt-32 pb-24">
        <section className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent-green/15 text-accent-green">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h1 className="text-4xl font-bold text-foreground md:text-5xl">You made it to the next step.</h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
                Pick a time for your strategy call. If the calendar does not load, open it in a new tab.
              </p>
              {!leadReady ? (
                <p className="mt-3 text-sm text-text-muted">Lead verification is tied to a real submit, so direct visits here will not count as a lead.</p>
              ) : null}
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="overflow-hidden rounded-lg border border-border bg-surface-elevated shadow-2xl">
                <iframe
                  title="Book your strategy call"
                  src={bookingUrl}
                  className="h-[720px] w-full bg-background"
                  loading="lazy"
                />
              </div>

              <div className="rounded-lg border border-border bg-surface-elevated p-6">
                <div className="mb-6 flex items-center gap-3 text-accent-blue">
                  <Calendar className="h-5 w-5" />
                  <p className="font-semibold">What happens next</p>
                </div>
                <div className="space-y-4 text-sm text-text-secondary">
                  <p>Choose a time that works for you.</p>
                  <p>Bring your service area and current lead volume.</p>
                  <p>We’ll review fit, market availability, and next steps.</p>
                </div>
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-cta mt-8 inline-flex items-center gap-2">
                  Open in new tab
                  <ArrowRight className="h-4 w-4" />
                </a>
                <p className="mt-4 text-xs text-text-muted">If the calendar will not load, use the button above to schedule.</p>
                <Link to="/grow" className="mt-6 inline-flex text-sm font-medium text-accent-blue hover:underline">
                  Back to Grow page
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GrowThanks;