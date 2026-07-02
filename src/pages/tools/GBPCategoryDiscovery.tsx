import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Loader2, MapPin, Layers, ListChecks, FileText, KeyRound, Lightbulb, ArrowRight, AlertTriangle, Trophy, Sparkles, HelpCircle, Building2 } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface CategoryItem { name: string; why: string; score?: number; matchReason?: string; }
type PageType = "Service Page" | "Location Page" | "FAQ Page";
interface PageIdea { title: string; slug: string; type?: PageType; description?: string; }
interface Result {
  outOfScope: boolean;
  note?: string;
  primaryCategory: CategoryItem;
  secondaryCategories: CategoryItem[];
  services: string[];
  pageIdeas: PageIdea[];
  keywords: string[];
  tip: string;
}

const EXAMPLES = ["Plumber", "Drain cleaning", "HVAC contractor", "Water heater installation", "Tankless water heater", "AC repair"];

const scoreTier = (score: number): { label: string; className: string } => {
  if (score >= 90) return { label: "Perfect Match", className: "bg-emerald-100 text-emerald-800 border-emerald-200" };
  if (score >= 80) return { label: "Excellent Match", className: "bg-green-100 text-green-800 border-green-200" };
  if (score >= 70) return { label: "Great Match", className: "bg-blue-100 text-blue-800 border-blue-200" };
  return { label: "Good Match", className: "bg-amber-100 text-amber-800 border-amber-200" };
};

const pageTypeMeta: Record<PageType, { icon: typeof FileText; className: string }> = {
  "Service Page": { icon: FileText, className: "bg-cta/10 text-cta border-cta/30" },
  "Location Page": { icon: Building2, className: "bg-navy/10 text-navy border-navy/20" },
  "FAQ Page": { icon: HelpCircle, className: "bg-violet-100 text-violet-800 border-violet-200" },
};


const GBPCategoryDiscovery = () => {
  const { toast } = useToast();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  const runDiscovery = async (q: string) => {
    if (!q.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const { data, error } = await supabase.functions.invoke("gbp-category-discovery", {
        body: { query: q.trim() },
      });
      if (error) throw error;
      if ((data as { error?: string })?.error) throw new Error((data as { error: string }).error);
      setResult((data as { result: Result }).result);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      toast({ title: "Discovery failed", description: msg, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runDiscovery(query);
  };

  const handleExample = (ex: string) => {
    setQuery(ex);
    runDiscovery(ex);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="GBP Category Discovery for Plumbing & HVAC | Demand Stream Digital"
        description="Free AI-powered Google Business Profile category discovery tool for plumbers and HVAC contractors. Find your primary category, secondary categories, services, and local SEO page ideas in seconds."
        canonical="https://demandstreamdigital.com/tools/gbp-category-discovery"
      />
      <Header />

      {/* HERO */}
      <section className="bg-navy text-white py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6">
            <MapPin className="w-4 h-4 text-cta" />
            Free Local SEO Tool
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Google Business Profile <span className="text-cta">Category Discovery</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Enter your Plumbing or HVAC service. Get the exact primary GBP category, secondary categories, service list, and page ideas that win the Map Pack.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
              <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g., drain cleaning, HVAC repair, tankless water heater"
                className="h-14 pl-12 pr-4 text-base bg-white text-navy placeholder:text-muted-foreground border-0"
                maxLength={200}
                disabled={loading}
              />
            </div>
            <Button type="submit" size="lg" disabled={loading || !query.trim()} className="h-14 md:w-auto w-full">
              {loading ? (<><Loader2 className="w-4 h-4 animate-spin" /> Discovering...</>) : (<>Discover <ArrowRight className="w-4 h-4" /></>)}
            </Button>
          </form>

          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            <span className="text-sm text-white/60 mr-2 self-center">Try:</span>
            {EXAMPLES.map((ex) => (
              <button
                key={ex}
                type="button"
                onClick={() => handleExample(ex)}
                disabled={loading}
                className="px-3 py-1.5 rounded-full text-sm bg-white/5 border border-white/20 hover:bg-white/10 transition-colors disabled:opacity-50"
              >
                {ex}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-16 lg:py-20 bg-neutral-50">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          {loading && (
            <div className="flex flex-col items-center gap-4 py-16 text-navy">
              <Loader2 className="w-10 h-10 animate-spin text-cta" />
              <p className="text-lg font-medium">Analyzing GBP categories for "{query}"...</p>
              <p className="text-sm text-muted-foreground">This usually takes 5-10 seconds.</p>
            </div>
          )}

          {!loading && !result && (
            <div className="text-center py-12">
              <div className="max-w-2xl mx-auto bg-white rounded-lg border border-border p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-navy mb-3">How it works</h2>
                <p className="text-muted-foreground mb-6">
                  Google Business Profile categories decide which searches you show up for in the Map Pack. Picking the wrong primary category is the single most common reason a Plumbing or HVAC company loses visibility to a smaller competitor.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  {[
                    { icon: Search, title: "1. Enter a service", body: "Type what you do: drain cleaning, AC repair, tankless install." },
                    { icon: Layers, title: "2. AI matches Google", body: "We map it to the real GBP category taxonomy plus supporting categories." },
                    { icon: FileText, title: "3. Build the plan", body: "Get service items and page ideas you can implement today." },
                  ].map((s) => (
                    <div key={s.title}>
                      <s.icon className="w-6 h-6 text-cta mb-2" />
                      <div className="font-semibold text-navy mb-1">{s.title}</div>
                      <div className="text-sm text-muted-foreground">{s.body}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {result?.outOfScope && (
            <div className="max-w-2xl mx-auto bg-white rounded-lg border border-amber-300 p-8 shadow-sm">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Outside our expertise</h3>
                  <p className="text-muted-foreground mb-4">
                    {result.note || "This tool is tuned for Plumbing and HVAC businesses. Please try a Plumbing or HVAC service."}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {EXAMPLES.map((ex) => (
                      <button key={ex} type="button" onClick={() => handleExample(ex)}
                        className="px-3 py-1.5 rounded-full text-sm bg-neutral-100 border border-border hover:bg-neutral-200">
                        {ex}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {result && !result.outOfScope && (
            <div className="space-y-6">
              {/* Best Match Found */}
              {(() => {
                const score = result.primaryCategory.score ?? 95;
                const tier = scoreTier(score);
                return (
                  <div className="bg-white rounded-lg border-2 border-cta p-6 md:p-8 shadow-sm">
                    <div className="flex items-center gap-2 text-cta text-sm font-bold uppercase tracking-wider mb-3">
                      <Trophy className="w-4 h-4" /> Best Match Found
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h2 className="text-3xl md:text-4xl font-bold text-navy">{result.primaryCategory.name || "No verified match"}</h2>
                      <span className="text-2xl font-bold text-cta">{score}%</span>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${tier.className}`}>{tier.label}</span>
                    </div>
                    <p className="text-muted-foreground mb-3">{result.primaryCategory.why}</p>
                    {result.primaryCategory.matchReason && (
                      <div className="text-sm text-navy/70">
                        <span className="font-semibold">Reason:</span> {result.primaryCategory.matchReason}
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* Alternative Category Suggestions */}
              {result.secondaryCategories.length > 0 && (
                <div className="bg-white rounded-lg border border-border p-6 md:p-8">
                  <div className="flex items-center gap-2 text-navy font-bold mb-1">
                    <Layers className="w-5 h-5 text-cta" /> Alternative Category Suggestions
                  </div>
                  <p className="text-sm text-muted-foreground mb-5">AI-scored, whitelisted GBP categories that reinforce the primary without diluting it.</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {result.secondaryCategories.map((c, idx) => {
                      const score = c.score ?? 70;
                      const tier = scoreTier(score);
                      const isTopPick = idx === 0;
                      return (
                        <div key={c.name} className="border border-border rounded-lg p-4 relative">
                          {isTopPick && (
                            <span className="absolute -top-2 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cta text-white">
                              <Sparkles className="w-3 h-3" /> Top Pick
                            </span>
                          )}
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <div className="font-semibold text-navy">{c.name}</div>
                            <div className="text-right shrink-0">
                              <div className="text-lg font-bold text-navy leading-none">{score}%</div>
                            </div>
                          </div>
                          <span className={`inline-block px-2 py-0.5 rounded-full text-[11px] font-semibold border mb-2 ${tier.className}`}>{tier.label}</span>
                          <div className="text-sm text-muted-foreground">
                            <span className="font-semibold text-navy/80">Why this fits: </span>{c.why}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-5 pt-4 border-t border-border text-xs text-muted-foreground">
                    <div className="font-semibold text-navy mb-1">How AI scores categories</div>
                    <div className="grid sm:grid-cols-2 gap-x-4 gap-y-0.5">
                      <span>90-100: Perfect/exact match</span>
                      <span>80-89: Excellent, highly relevant</span>
                      <span>70-79: Great match, relevant</span>
                      <span>60-69: Good match, somewhat relevant</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Services */}
              <div className="bg-white rounded-lg border border-border p-6 md:p-8">
                <div className="flex items-center gap-2 text-navy font-bold mb-1">
                  <ListChecks className="w-5 h-5 text-cta" /> GBP Services to List
                </div>
                <p className="text-sm text-muted-foreground mb-4">Single-intent list. Repair and installation belong on separate profiles/pages.</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {result.services.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-navy">
                      <span className="w-1.5 h-1.5 rounded-full bg-cta mt-1.5 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inner Page Suggestions */}
              <div className="bg-white rounded-lg border border-border p-6 md:p-8">
                <div className="flex items-center gap-2 text-navy font-bold mb-1">
                  <FileText className="w-5 h-5 text-cta" /> Inner Page Suggestions
                </div>
                <p className="text-sm text-muted-foreground mb-5">Service, Location, and FAQ pages mapped to your primary category and top services.</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {result.pageIdeas.map((p) => {
                    const type: PageType = (p.type as PageType) || "Service Page";
                    const meta = pageTypeMeta[type] || pageTypeMeta["Service Page"];
                    const Icon = meta.icon;
                    return (
                      <div key={p.slug} className="border border-border rounded-lg p-4">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="font-semibold text-navy text-sm leading-snug">{p.title}</div>
                          <span className={`shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold border ${meta.className}`}>
                            <Icon className="w-3 h-3" /> {type}
                          </span>
                        </div>
                        <code className="block text-xs text-cta bg-neutral-50 border border-border rounded px-2 py-1 mb-2 break-all">/{p.slug.replace(/^\//, "")}</code>
                        {p.description && <p className="text-xs text-muted-foreground">{p.description}</p>}
                      </div>
                    );
                  })}
                </div>
              </div>


              {/* Keywords + Tip */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg border border-border p-6 md:p-8">
                  <div className="flex items-center gap-2 text-navy font-bold mb-4">
                    <KeyRound className="w-5 h-5 text-cta" /> Local Keywords
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {result.keywords.map((k) => (
                      <span key={k} className="px-3 py-1 rounded-full bg-neutral-100 border border-border text-sm text-navy">{k}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-navy text-white rounded-lg p-6 md:p-8">
                  <div className="flex items-center gap-2 text-cta font-bold uppercase text-xs tracking-wider mb-3">
                    <Lightbulb className="w-4 h-4" /> Optimization Tip
                  </div>
                  <p className="text-white/90 leading-relaxed">{result.tip}</p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-navy text-white rounded-lg p-8 md:p-10 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Want us to implement this for you?</h3>
                <p className="text-white/80 mb-6 max-w-xl mx-auto">
                  We optimize Google Business Profiles for Plumbing and HVAC companies and track visibility straight through to booked calls.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild size="lg">
                    <Link to="/free-audit">Get a Free GBP Audit</Link>
                  </Button>
                  <Button asChild size="lg" variant="ghost">
                    <Link to="/plumbing-google-maps">See Our GBP Service</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GBPCategoryDiscovery;
