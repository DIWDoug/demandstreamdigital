import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { pushGrowDataLayer, safeTrackCustom } from "@/lib/growFunnel";
import { useEffect } from "react";

const GrowBooked = () => {
  useEffect(() => {
    safeTrackCustom("GrowStrategyCallBooked", { funnel: "grow" });
    pushGrowDataLayer("grow_strategy_call_booked", { funnel: "grow" });
  }, []);

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead
        title="Strategy Call Booked | DemandStream"
        description="Your strategy call is booked."
        canonical="https://demandstreamdigital.com/grow/booked"
        noIndex
      />
      <Header />
      <main className="pt-32 pb-24">
        <section className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-lg border border-border bg-surface-elevated p-8 text-center shadow-2xl">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent-green/15 text-accent-green">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">You&apos;re locked in.</h1>
            <p className="mt-4 text-lg text-text-secondary">Your strategy call is booked. Check your inbox for the confirmation and calendar invite.</p>
            <div className="mt-8 grid gap-4 text-left text-sm text-text-secondary sm:grid-cols-3">
              <div className="rounded-lg border border-border bg-background/50 p-4">Check your inbox for the confirmation email.</div>
              <div className="rounded-lg border border-border bg-background/50 p-4">Plan to join from your computer with reporting access nearby.</div>
              <div className="rounded-lg border border-border bg-background/50 p-4">Need to reschedule? Use the booking email link.</div>
            </div>
            <Link to="/" className="btn-cta mt-8 inline-flex">Back to DemandStream Digital</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GrowBooked;