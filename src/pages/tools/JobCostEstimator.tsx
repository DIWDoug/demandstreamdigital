import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, DollarSign, Wrench, Droplets, Flame, Wind, Gauge } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

type JobCategory = {
  id: string;
  label: string;
  icon: typeof Wrench;
  jobs: {
    id: string;
    label: string;
    lowRange: [number, number];
    midRange: [number, number];
    highRange: [number, number];
    factors: string[];
  }[];
};

const jobCategories: JobCategory[] = [
  {
    id: "plumbing",
    label: "Plumbing",
    icon: Droplets,
    jobs: [
      { id: "drain-cleaning", label: "Drain Cleaning", lowRange: [100, 250], midRange: [250, 500], highRange: [500, 900], factors: ["Severity of clog", "Location of drain", "Equipment needed"] },
      { id: "water-heater-repair", label: "Water Heater Repair", lowRange: [150, 350], midRange: [350, 700], highRange: [700, 1200], factors: ["Type of heater", "Part replacement", "Age of unit"] },
      { id: "water-heater-install", label: "Water Heater Installation", lowRange: [800, 1500], midRange: [1500, 3000], highRange: [3000, 5500], factors: ["Tank vs tankless", "Fuel type", "Code upgrades needed"] },
      { id: "leak-repair", label: "Leak Repair", lowRange: [150, 300], midRange: [300, 700], highRange: [700, 2000], factors: ["Location of leak", "Pipe material", "Access difficulty"] },
      { id: "toilet-repair", label: "Toilet Repair/Replace", lowRange: [100, 250], midRange: [250, 500], highRange: [500, 1200], factors: ["Repair vs replace", "Toilet type", "Flange condition"] },
      { id: "sewer-line", label: "Sewer Line Repair", lowRange: [1000, 2500], midRange: [2500, 5000], highRange: [5000, 15000], factors: ["Length of repair", "Trenchless vs dig", "Permits needed"] },
      { id: "repipe", label: "Whole House Repipe", lowRange: [3000, 5000], midRange: [5000, 10000], highRange: [10000, 20000], factors: ["Home size", "Pipe material", "Number of fixtures"] },
      { id: "faucet", label: "Faucet Install/Repair", lowRange: [75, 175], midRange: [175, 350], highRange: [350, 600], factors: ["Faucet type", "Valve condition", "Counter modification"] },
    ]
  },
  {
    id: "hvac",
    label: "HVAC",
    icon: Wind,
    jobs: [
      { id: "ac-repair", label: "AC Repair", lowRange: [100, 300], midRange: [300, 700], highRange: [700, 1500], factors: ["Type of repair", "Refrigerant needed", "Part availability"] },
      { id: "ac-install", label: "AC Installation", lowRange: [3000, 5000], midRange: [5000, 8000], highRange: [8000, 15000], factors: ["System size (tons)", "SEER rating", "Ductwork needed"] },
      { id: "furnace-repair", label: "Furnace Repair", lowRange: [100, 300], midRange: [300, 600], highRange: [600, 1200], factors: ["Type of furnace", "Part needed", "Age of system"] },
      { id: "furnace-install", label: "Furnace Installation", lowRange: [2500, 4000], midRange: [4000, 7000], highRange: [7000, 12000], factors: ["Fuel type", "Efficiency rating", "Duct modifications"] },
      { id: "hvac-maintenance", label: "HVAC Tune-Up", lowRange: [75, 150], midRange: [150, 250], highRange: [250, 400], factors: ["System type", "Age of system", "Issues found"] },
      { id: "duct-cleaning", label: "Duct Cleaning", lowRange: [300, 500], midRange: [500, 800], highRange: [800, 1500], factors: ["Home size", "Number of vents", "Contamination level"] },
      { id: "heat-pump", label: "Heat Pump Installation", lowRange: [3500, 5500], midRange: [5500, 9000], highRange: [9000, 15000], factors: ["System type", "Home size", "Existing infrastructure"] },
      { id: "thermostat", label: "Smart Thermostat Install", lowRange: [150, 250], midRange: [250, 400], highRange: [400, 650], factors: ["Thermostat brand", "Wiring compatibility", "Zones needed"] },
    ]
  },
];

type Complexity = "low" | "mid" | "high";

const JobCostEstimator = () => {
  const [step, setStep] = useState<"category" | "job" | "complexity" | "result">("category");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedJob, setSelectedJob] = useState<string>("");
  const [complexity, setComplexity] = useState<Complexity>("mid");

  const category = jobCategories.find(c => c.id === selectedCategory);
  const job = category?.jobs.find(j => j.id === selectedJob);

  const getRange = () => {
    if (!job) return [0, 0];
    const rangeMap = { low: job.lowRange, mid: job.midRange, high: job.highRange };
    return rangeMap[complexity];
  };

  const reset = () => {
    setStep("category");
    setSelectedCategory("");
    setSelectedJob("");
    setComplexity("mid");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Job Cost Estimator | Plumbing & HVAC | DemandStream"
        description="Get instant ballpark cost estimates for common plumbing and HVAC jobs. Know what to expect before you call."
        canonical="https://demandstreamdigital.com/job-cost-estimator"
      />

      <div className="dark">
        <Header />
      </div>

      <main className="section-light">
        <div className="container mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cta/10 text-cta text-sm font-semibold mb-4">
                <DollarSign className="h-4 w-4" />
                Free Estimator Tool
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Instant Job Cost Estimator
              </h1>
              <p className="text-lg text-text-secondary max-w-xl mx-auto">
                Get a ballpark cost range for common plumbing and HVAC jobs in your area. No signup required.
              </p>
            </div>

            {/* Step: Category */}
            {step === "category" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {jobCategories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => { setSelectedCategory(cat.id); setStep("job"); }}
                      className="group p-8 rounded-xl border border-border bg-card hover:border-cta/50 hover:shadow-lg transition-all text-left"
                    >
                      <Icon className="h-10 w-10 text-accent-blue mb-4" />
                      <h2 className="text-xl font-bold mb-2">{cat.label}</h2>
                      <p className="text-sm text-text-muted">{cat.jobs.length} common job types</p>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Step: Job Type */}
            {step === "job" && category && (
              <div>
                <button onClick={() => setStep("category")} className="flex items-center gap-2 text-sm text-accent-blue hover:underline mb-6">
                  <ArrowLeft className="h-4 w-4" /> Back to categories
                </button>
                <h2 className="text-2xl font-bold mb-6">Select a {category.label} Job</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.jobs.map((j) => (
                    <button
                      key={j.id}
                      onClick={() => { setSelectedJob(j.id); setStep("complexity"); }}
                      className="p-5 rounded-xl border border-border bg-card hover:border-cta/50 hover:shadow-md transition-all text-left group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">{j.label}</span>
                        <ArrowRight className="h-4 w-4 text-text-muted group-hover:text-cta transition-colors" />
                      </div>
                      <p className="text-sm text-text-muted mt-1">
                        ${j.lowRange[0].toLocaleString()} – ${j.highRange[1].toLocaleString()}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step: Complexity */}
            {step === "complexity" && job && (
              <div>
                <button onClick={() => setStep("job")} className="flex items-center gap-2 text-sm text-accent-blue hover:underline mb-6">
                  <ArrowLeft className="h-4 w-4" /> Back to jobs
                </button>
                <h2 className="text-2xl font-bold mb-2">{job.label}</h2>
                <p className="text-text-muted mb-8">How complex is the job?</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {([
                    { key: "low" as Complexity, label: "Simple", desc: "Straightforward job, easy access, standard parts" },
                    { key: "mid" as Complexity, label: "Average", desc: "Typical job with moderate complexity" },
                    { key: "high" as Complexity, label: "Complex", desc: "Difficult access, premium parts, or code upgrades" },
                  ]).map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => setComplexity(opt.key)}
                      className={`p-5 rounded-xl border text-left transition-all ${
                        complexity === opt.key
                          ? "border-cta bg-cta/5 shadow-md"
                          : "border-border bg-card hover:border-cta/30"
                      }`}
                    >
                      <span className="font-semibold block mb-1">{opt.label}</span>
                      <span className="text-sm text-text-muted">{opt.desc}</span>
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setStep("result")}
                  className="btn-cta group w-full sm:w-auto"
                >
                  See Estimate <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}

            {/* Step: Result */}
            {step === "result" && job && (
              <div className="text-center">
                <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 mb-8 shadow-lg">
                  <p className="text-sm text-text-muted uppercase tracking-widest mb-2">Estimated Cost Range</p>
                  <h2 className="text-2xl font-bold mb-4">{job.label}</h2>
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <Gauge className="h-6 w-6 text-accent-blue" />
                    <span className="text-sm font-medium text-text-muted capitalize">{complexity} complexity</span>
                  </div>
                  <div className="text-5xl sm:text-6xl font-bold text-cta mb-2">
                    ${getRange()[0].toLocaleString()} – ${getRange()[1].toLocaleString()}
                  </div>
                  <p className="text-sm text-text-muted mt-4 max-w-md mx-auto">
                    This is a ballpark estimate based on national averages. Actual costs vary by location, contractor, and job specifics.
                  </p>

                  {/* Factors */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-sm font-semibold mb-3">Key Cost Factors:</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {job.factors.map((f) => (
                        <span key={f} className="pill-badge text-xs">{f}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button onClick={reset} className="px-6 py-3 rounded-lg border border-border text-foreground hover:border-accent-blue transition-all font-medium">
                    Estimate Another Job
                  </button>
                  <Link to="/contact" className="btn-cta group">
                    Get a Real Quote <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <div className="dark">
        <Footer />
      </div>
    </div>
  );
};

export default JobCostEstimator;
