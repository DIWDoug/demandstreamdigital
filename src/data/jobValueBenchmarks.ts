// Industry job-value benchmarks for Plumbing & HVAC.
// Sourced from the ServiceTitan Industry Job Value Benchmark analysis (2025-07 → 2026-07)
// cross-referenced with Angi, HomeAdvisor, HomeGuide, Homewyse, Simpro, TheSpruce,
// FieldCamp public pricing data. Values are USD per completed job.
//
// Use these ranges for lost-lead / missed-call modeling. Never mix repair and
// installation intent in the same estimate. A repair phone call and an install
// phone call are different sales conversations.

export type JobIntent = "repair" | "install" | "maintenance" | "inspection" | "commercial";
export type Trade = "plumbing" | "hvac";

export interface JobBenchmark {
  id: string;
  trade: Trade;
  intent: JobIntent;
  label: string;
  blurb: string;
  low: number;
  avg: number;
  high: number;
  sources: { label: string; url: string }[];
}

export const JOB_BENCHMARKS: JobBenchmark[] = [
  // ============= PLUMBING =============
  {
    id: "plumbing-service",
    trade: "plumbing",
    intent: "repair",
    label: "Plumbing service call",
    blurb: "Standard residential plumbing repair. Faucets, toilets, valves, minor leaks.",
    low: 300,
    avg: 500,
    high: 800,
    sources: [
      { label: "HomeAdvisor: Hire a Plumber", url: "https://www.homeadvisor.com/cost/plumbing/hire-a-plumber/" },
      { label: "HomeGuide: Plumbing Estimates", url: "https://homeguide.com/costs/average-plumbing-estimates" },
      { label: "Simpro: Plumbing KPIs", url: "https://www.simprogroup.com/blog/plumbing-business-kpis" },
    ],
  },
  {
    id: "drain-sewer",
    trade: "plumbing",
    intent: "repair",
    label: "Drain / sewer",
    blurb: "Drain cleaning, sewer line clogs, hydro-jetting.",
    low: 275,
    avg: 600,
    high: 1000,
    sources: [
      { label: "Angi: Sewer Line Repair", url: "https://www.angi.com/articles/how-much-does-sewer-line-replacement-or-repair-cost.htm" },
    ],
  },
  {
    id: "leak-detection",
    trade: "plumbing",
    intent: "repair",
    label: "Leak detection / high water bill",
    blurb: "Locating and repairing hidden leaks. High-ticket problem calls.",
    low: 250,
    avg: 900,
    high: 2280,
    sources: [
      { label: "Homewyse: Leak Detection Cost", url: "https://www.homewyse.com/services/cost_to_find_plumbing_leak.html" },
      { label: "Angi: Slab Leak Repair", url: "https://www.angi.com/articles/how-much-does-foundation-slab-leak-repair-cost.htm" },
    ],
  },
  {
    id: "slab-leak",
    trade: "plumbing",
    intent: "repair",
    label: "Slab leak repair",
    blurb: "Under-slab leaks requiring detection, jackhammering, or re-route.",
    low: 630,
    avg: 2280,
    high: 4400,
    sources: [
      { label: "Angi: Slab Leak Repair", url: "https://www.angi.com/articles/how-much-does-foundation-slab-leak-repair-cost.htm" },
    ],
  },
  {
    id: "camera-inspection",
    trade: "plumbing",
    intent: "inspection",
    label: "Camera / sewer inspection",
    blurb: "Diagnostic-only visits. Often converts to a larger repair job.",
    low: 100,
    avg: 300,
    high: 500,
    sources: [
      { label: "Angi: Sewer Camera Inspection", url: "https://www.angi.com/articles/how-much-does-sewer-line-replacement-or-repair-cost.htm" },
    ],
  },
  {
    id: "gas-line",
    trade: "plumbing",
    intent: "repair",
    label: "Gas line repair",
    blurb: "Gas leak, appliance line, or short gas line run.",
    low: 260,
    avg: 540,
    high: 820,
    sources: [
      { label: "Angi: Gas Line Cost", url: "https://www.angi.com/articles/what-average-cost-85-run-natural-gas-line.htm" },
    ],
  },
  {
    id: "water-heater-install",
    trade: "plumbing",
    intent: "install",
    label: "Water heater / tankless install",
    blurb: "New water heater or tankless install and haul-away.",
    low: 1340,
    avg: 2200,
    high: 3900,
    sources: [
      { label: "Angi: Water Heater Install Cost", url: "https://www.angi.com/articles/how-much-does-water-heater-installation-cost.htm" },
    ],
  },
  {
    id: "water-heater-repair",
    trade: "plumbing",
    intent: "repair",
    label: "Water heater repair",
    blurb: "Diagnostic, element, valve, or thermostat repair on existing unit.",
    low: 100,
    avg: 300,
    high: 1000,
    sources: [
      { label: "Angi: Water Heater Repair", url: "https://www.angi.com/articles/how-much-does-water-heater-installation-cost.htm" },
    ],
  },
  {
    id: "water-systems",
    trade: "plumbing",
    intent: "install",
    label: "Water treatment / filtration install",
    blurb: "Softener, whole-home filter, or RO system install.",
    low: 1129,
    avg: 2500,
    high: 3540,
    sources: [
      { label: "HomeAdvisor: Water Treatment", url: "https://www.homeadvisor.com/cost/environmental-safety/install-a-water-treatment-and-purification-system/" },
      { label: "Angi: Water Softener Install", url: "https://www.angi.com/articles/how-much-does-water-softener-installation-cost.htm" },
    ],
  },
  {
    id: "plumbing-commercial",
    trade: "plumbing",
    intent: "commercial",
    label: "Plumbing commercial",
    blurb: "Commercial plumbing service call. Higher labor and code scope.",
    low: 800,
    avg: 1150,
    high: 1500,
    sources: [
      { label: "Simpro: Plumbing KPIs", url: "https://www.simprogroup.com/blog/plumbing-business-kpis" },
    ],
  },

  // ============= HVAC =============
  {
    id: "hvac-service",
    trade: "hvac",
    intent: "repair",
    label: "HVAC service / repair",
    blurb: "Diagnostic and repair on existing AC, furnace, or heat pump.",
    low: 130,
    avg: 500,
    high: 2000,
    sources: [
      { label: "Angi: HVAC Repair Cost", url: "https://www.angi.com/articles/how-much-hvac-repair-cost.htm" },
      { label: "FieldCamp: HVAC Pricing Guide", url: "https://fieldcamp.ai/blog/detailed-hvac-pricing-guide/" },
    ],
  },
  {
    id: "hvac-install",
    trade: "hvac",
    intent: "install",
    label: "HVAC system install / replacement",
    blurb: "Full system replacement. AC condenser, furnace, or heat pump swap.",
    low: 5000,
    avg: 7500,
    high: 22000,
    sources: [
      { label: "Angi: New Heating & Cooling System", url: "https://www.angi.com/articles/insider-s-price-guide-new-heating-and-cooling-system.htm" },
    ],
  },
  {
    id: "hvac-maintenance",
    trade: "hvac",
    intent: "maintenance",
    label: "HVAC maintenance / tune-up",
    blurb: "Seasonal PM visit. Low ticket, but the retention driver.",
    low: 95,
    avg: 195,
    high: 500,
    sources: [
      { label: "The Spruce: HVAC Maintenance Cost", url: "https://www.thespruce.com/hvac-maintenance-cost-8348698" },
      { label: "Angi: HVAC Repair Cost", url: "https://www.angi.com/articles/how-much-hvac-repair-cost.htm" },
    ],
  },
];

export function getBenchmark(id: string) {
  return JOB_BENCHMARKS.find((b) => b.id === id);
}
