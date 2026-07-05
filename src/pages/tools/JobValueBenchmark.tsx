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
    <div className="min-h-screen bg-navy">
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
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-blue/15 border border-accent-blue/30 px-4 py-1.5 text-sm font-medium mb-6 text-accent-blue">
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

        <section className="py-12 md:py-16 bg-navy">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Inputs */}
              <div className="rounded-[8px] bg-navy-light border-t-2 border-accent-blue border-x border-b border-white/5 p-6 md:p-8 shadow-2xl">
                <h2 className="text-xs font-bold uppercase tracking-widest text-accent-blue mb-6">Your inputs</h2>

                <div className="space-y-6">
                  <div>
                    <Label className="mb-2 block text-white/80">Trade</Label>
                    <div className="grid grid-cols-2 gap-2 bg-navy p-1 rounded-[4px] border border-accent-blue/20">
                      <button
                        type="button"
                        onClick={() => handleTradeChange("plumbing")}
                        className={`px-4 py-2 rounded-[3px] text-sm font-semibold transition-colors ${
                          trade === "plumbing"
                            ? "bg-accent-blue text-white"
                            : "text-white/60 hover:text-white"
                        }`}
                      >
                        Plumbing
                      </button>
                      <button
                        type="button"
                        onClick={() => handleTradeChange("hvac")}
                        className={`px-4 py-2 rounded-[3px] text-sm font-semibold transition-colors ${
                          trade === "hvac"
                            ? "bg-accent-blue text-white"
                            : "text-white/60 hover:text-white"
                        }`}
                      >
                        HVAC
                      </button>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="job" className="mb-2 block text-white/80">Job type</Label>
                    <Select value={jobId} onValueChange={setJobId}>
                      <SelectTrigger id="job" className="bg-navy border-white/10 text-white">
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
                      <p className="text-sm text-white/60 mt-2">{bench.blurb}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="calls" className="mb-2 block text-white/80">Monthly inbound calls</Label>
                    <Input
                      id="calls"
                      type="number"
                      min={0}
                      max={10000}
                      value={monthlyCalls}
                      onChange={(e) => setMonthlyCalls(Math.max(0, Math.min(10000, Number(e.target.value) || 0)))}
                      className="bg-navy border-white/10 text-white"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <Label className="text-white/80">Missed / abandoned call rate</Label>
                      <span className="text-sm font-bold text-accent-blue">{missedPct}%</span>
                    </div>
                    <Slider value={[missedPct]} min={0} max={60} step={1} onValueChange={(v) => setMissedPct(v[0])} />
                    <p className="text-xs text-white/50 mt-1">Industry average is 15-25% for home services.</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <Label className="text-white/80">Booking rate on answered calls</Label>
                      <span className="text-sm font-bold text-accent-blue">{bookingPct}%</span>
                    </div>
                    <Slider value={[bookingPct]} min={10} max={80} step={1} onValueChange={(v) => setBookingPct(v[0])} />
                    <p className="text-xs text-white/50 mt-1">Well-run shops book 35-55% of qualified calls.</p>
                  </div>
                </div>
              </div>

              {/* Benchmark card */}
              <div className="rounded-[8px] bg-navy-light border border-white/5 p-6 md:p-8 shadow-2xl">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent-blue mb-2">
                  <TrendingUp className="h-4 w-4" />
                  Industry ticket benchmark
                </div>
                <h3 className="text-2xl font-bold mb-1 text-white">{bench?.label}</h3>
                <p className="text-sm text-white/60 mb-6">
                  {trade === "plumbing" ? "Plumbing" : "HVAC"} · {bench ? intentLabel[bench.intent] : ""}
                </p>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="rounded-[6px] bg-navy p-4 text-center border border-white/5">
                    <div className="text-[10px] uppercase tracking-widest font-bold text-white/50 mb-1">Low</div>
                    <div className="text-xl font-bold text-white">{fmtMoney(bench?.low ?? 0)}</div>
                  </div>
                  <div className="rounded-[6px] bg-accent-blue/10 p-4 text-center border-2 border-accent-blue">
                    <div className="text-[10px] uppercase tracking-widest font-bold text-accent-blue mb-1">Avg</div>
                    <div className="text-2xl font-extrabold text-white">{fmtMoney(bench?.avg ?? 0)}</div>
                  </div>
                  <div className="rounded-[6px] bg-navy p-4 text-center border border-white/5">
                    <div className="text-[10px] uppercase tracking-widest font-bold text-white/50 mb-1">High</div>
                    <div className="text-xl font-bold text-white">{fmtMoney(bench?.high ?? 0)}</div>
                  </div>
                </div>

                <div className="rounded-[6px] bg-navy/60 border border-white/5 p-4 text-sm">
                  <div className="flex items-start gap-2 mb-2">
                    <Info className="h-4 w-4 text-accent-blue mt-0.5 flex-shrink-0" />
                    <div className="font-semibold text-white">Sources</div>
                  </div>
                  <ul className="space-y-1 pl-6">
                    {bench?.sources.map((s) => (
                      <li key={s.url}>
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent-blue hover:text-white underline decoration-accent-blue/40 underline-offset-4 inline-flex items-center gap-1"
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
            <div className="relative overflow-hidden rounded-[8px] bg-gradient-to-br from-[hsl(210_47%_18%)] to-navy-light border border-accent-blue/40 p-6 md:p-10 shadow-2xl">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent-blue mb-3">
                  <PhoneMissed className="h-4 w-4" />
                  Revenue at risk
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
                  What missed calls are costing you
                </h2>

                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  <Stat label="Missed calls / mo" value={Math.round(missedCalls).toString()} />
                  <Stat label="Lost bookings / mo" value={Math.round(missedJobsBooked).toString()} />
                  <Stat label="Monthly revenue at risk" value={fmtMoney(monthlyRisk)} highlight />
                  <Stat label="Annual revenue at risk" value={fmtMoney(annualRisk)} highlight />
                </div>

                <div className="rounded-[6px] bg-navy/60 border border-white/10 p-4 mb-6 text-sm flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-semibold text-white">True cost per missed call:</span>
                  <span className="text-accent-blue font-extrabold text-lg">{fmtMoney(perMissedCall)}</span>
                  <span className="text-white/60">· based on the {intentLabel[bench?.intent ?? "repair"].toLowerCase()} industry average.</span>
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-cta/20 border border-cta/40 rounded-full ml-auto">
                    <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
                    <span className="text-cta text-[10px] font-black uppercase tracking-widest">High priority leak</span>
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg" className="flex-1">
                    <Link to="/free-audit">
                      Recover this revenue. Book a growth audit. <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="flex-1 bg-transparent border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white"
                  >
                    <Link to="/tools/gbp-category-discovery">
                      Optimize your GBP categories next
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Methodology */}
            <div className="mt-10 rounded-[8px] border border-white/5 bg-navy-light/60 p-6 text-sm text-white/60">
              <h3 className="font-semibold text-white mb-2">How this works</h3>
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
    <div
      className={`rounded-[6px] p-4 border ${
        highlight
          ? "bg-accent-blue/15 border-accent-blue/50"
          : "bg-navy/60 border-white/5"
      }`}
    >
      <div
        className={`text-[10px] uppercase tracking-widest font-bold mb-1 ${
          highlight ? "text-accent-blue" : "text-white/50"
        }`}
      >
        {label}
      </div>
      <div className="text-2xl font-extrabold text-white">{value}</div>
    </div>
  );
}
