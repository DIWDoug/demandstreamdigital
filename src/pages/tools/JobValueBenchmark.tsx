import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calculator, ExternalLink, Info, PhoneMissed, TrendingUp } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { JOB_BENCHMARKS, getBenchmark, type JobIntent, type Trade } from "@/data/jobValueBenchmarks";

const fmtMoney = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(Math.round(n));

const intentLabel: Record<JobIntent, string> = {
  repair: "Repair / service",
  install: "Install / replacement",
  maintenance: "Maintenance",
  inspection: "Inspection",
  commercial: "Commercial",
};

export default function JobValueBenchmark() {
  const [trade, setTrade] = useState<Trade>("plumbing");
  const [jobId, setJobId] = useState<string>("plumbing-service");
  const [monthlyCalls, setMonthlyCalls] = useState<number>(200);
  const [missedPct, setMissedPct] = useState<number>(20);
  const [bookingPct, setBookingPct] = useState<number>(40);

  const filtered = useMemo(() => JOB_BENCHMARKS.filter((b) => b.trade === trade), [trade]);
  const bench = useMemo(() => getBenchmark(jobId) ?? filtered[0], [jobId, filtered]);

  // When trade flips, snap to first job in that trade.
  const handleTradeChange = (t: Trade) => {
    setTrade(t);
    const first = JOB_BENCHMARKS.find((b) => b.trade === t);
    if (first) setJobId(first.id);
  };

  const missedCalls = (monthlyCalls * missedPct) / 100;
  const missedJobsBooked = (missedCalls * bookingPct) / 100;
  const monthlyRisk = missedJobsBooked * (bench?.avg ?? 0);
  const annualRisk = monthlyRisk * 12;
  const perMissedCall = missedCalls > 0 ? (missedJobsBooked * (bench?.avg ?? 0)) / missedCalls : 0;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Plumbing & HVAC Job Value Benchmark Calculator | Demand Stream"
        description="See the industry Low/Avg/High ticket value for plumbing and HVAC job types, then calculate how much revenue missed calls cost your business each month."
        keywords="hvac ticket average, plumbing job value benchmark, missed call revenue, hvac install average cost, plumbing service call average"
        canonical="https://demandstreamdigital.com/tools/job-value-benchmark"
      />
      <Header />

      <div className="tools-large-text">
        <section className="bg-navy text-white py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium mb-6">
              <Calculator className="h-4 w-4" />
              Free tool. No signup.
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Plumbing &amp; HVAC Job Value Benchmark
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto">
              Industry Low, Average, and High ticket values by job type. Then see the real revenue you leave on the table when calls go unanswered.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Inputs */}
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-6">Your inputs</h2>

                <div className="space-y-6">
                <div>
                  <Label className="mb-2 block">Trade</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      type="button"
                      variant={trade === "plumbing" ? "default" : "outline"}
                      onClick={() => handleTradeChange("plumbing")}
                    >
                      Plumbing
                    </Button>
                    <Button
                      type="button"
                      variant={trade === "hvac" ? "default" : "outline"}
                      onClick={() => handleTradeChange("hvac")}
                    >
                      HVAC
                    </Button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="job" className="mb-2 block">Job type</Label>
                  <Select value={jobId} onValueChange={setJobId}>
                    <SelectTrigger id="job">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {filtered.map((b) => (
                        <SelectItem key={b.id} value={b.id}>
                          {b.label} <span className="text-muted-foreground">· {intentLabel[b.intent]}</span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {bench && (
                    <p className="text-sm text-muted-foreground mt-2">{bench.blurb}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="calls" className="mb-2 block">Monthly inbound calls</Label>
                  <Input
                    id="calls"
                    type="number"
                    min={0}
                    max={10000}
                    value={monthlyCalls}
                    onChange={(e) => setMonthlyCalls(Math.max(0, Math.min(10000, Number(e.target.value) || 0)))}
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <Label>Missed / abandoned call rate</Label>
                    <span className="text-sm font-semibold">{missedPct}%</span>
                  </div>
                  <Slider value={[missedPct]} min={0} max={60} step={1} onValueChange={(v) => setMissedPct(v[0])} />
                  <p className="text-xs text-muted-foreground mt-1">Industry average is 15-25% for home services.</p>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <Label>Booking rate on answered calls</Label>
                    <span className="text-sm font-semibold">{bookingPct}%</span>
                  </div>
                  <Slider value={[bookingPct]} min={10} max={80} step={1} onValueChange={(v) => setBookingPct(v[0])} />
                  <p className="text-xs text-muted-foreground mt-1">Well-run shops book 35-55% of qualified calls.</p>
                </div>
              </div>
            </div>

            {/* Benchmark card */}
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                Industry ticket benchmark
              </div>
              <h3 className="text-2xl font-bold mb-1">{bench?.label}</h3>
              <p className="text-sm text-muted-foreground mb-6">
                {trade === "plumbing" ? "Plumbing" : "HVAC"} · {bench ? intentLabel[bench.intent] : ""}
              </p>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="rounded-lg bg-muted p-4 text-center">
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Low</div>
                  <div className="text-xl font-bold">{fmtMoney(bench?.low ?? 0)}</div>
                </div>
                <div className="rounded-lg bg-primary/10 p-4 text-center border-2 border-primary">
                  <div className="text-xs uppercase tracking-wide text-primary mb-1 font-semibold">Avg</div>
                  <div className="text-2xl font-bold text-primary">{fmtMoney(bench?.avg ?? 0)}</div>
                </div>
                <div className="rounded-lg bg-muted p-4 text-center">
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">High</div>
                  <div className="text-xl font-bold">{fmtMoney(bench?.high ?? 0)}</div>
                </div>
              </div>

              <div className="rounded-lg bg-muted/50 p-4 text-sm">
                <div className="flex items-start gap-2 mb-2">
                  <Info className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <div className="font-medium">Sources</div>
                </div>
                <ul className="space-y-1 pl-6">
                  {bench?.sources.map((s) => (
                    <li key={s.url}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1"
                      >
                        {s.label} <ExternalLink className="h-3 w-3" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="rounded-xl border-2 border-primary bg-card p-6 md:p-8 shadow-lg">
            <div className="flex items-center gap-2 text-sm font-semibold text-primary mb-3">
              <PhoneMissed className="h-4 w-4" />
              Revenue at risk
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              What missed calls are costing you
            </h2>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <Stat label="Missed calls / mo" value={Math.round(missedCalls).toString()} />
              <Stat label="Lost bookings / mo" value={Math.round(missedJobsBooked).toString()} />
              <Stat label="Monthly revenue at risk" value={fmtMoney(monthlyRisk)} highlight />
              <Stat label="Annual revenue at risk" value={fmtMoney(annualRisk)} highlight />
            </div>

            <div className="rounded-lg bg-muted p-4 mb-6 text-sm">
              <span className="font-semibold">True cost per missed call: </span>
              <span className="text-primary font-bold">{fmtMoney(perMissedCall)}</span>
              <span className="text-muted-foreground"> · based on the {intentLabel[bench?.intent ?? "repair"].toLowerCase()} industry average.</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="flex-1">
                <Link to="/free-audit">
                  Recover this revenue. Book a growth audit. <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="flex-1">
                <Link to="/tools/gbp-category-discovery">
                  Optimize your GBP categories next
                </Link>
              </Button>
            </div>
          </div>

          {/* Methodology */}
          <div className="mt-10 rounded-lg border bg-muted/30 p-6 text-sm text-muted-foreground">
            <h3 className="font-semibold text-foreground mb-2">How this works</h3>
            <p className="mb-2">
              Benchmarks are compiled from public pricing data (Angi, HomeAdvisor, HomeGuide, Homewyse, Simpro, The Spruce) and validated against real ServiceTitan revenue-by-job-type exports for a mid-size operator (10,691 invoices, $12M revenue, 12-month window).
            </p>
            <p>
              We never mix repair and installation values. A repair call and an installation call are different phone calls with different tickets, close rates, and marketing sources. Pick the single job type that matches the calls you want to model.
            </p>
          </div>
        </div>
      </section>
      </div>

      <Footer />
    </div>
  );
}

function Stat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`rounded-lg p-4 ${highlight ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
      <div className={`text-xs uppercase tracking-wide mb-1 ${highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
        {label}
      </div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}
