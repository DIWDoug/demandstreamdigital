import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Loader2, MapPin, Layers, ListChecks, FileText, KeyRound, Lightbulb, ArrowRight, AlertTriangle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface CategoryItem { name: string; why: string; }
interface PageIdea { title: string; slug: string; }
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
              {/* Primary Category */}
              <div className="bg-white rounded-lg border-2 border-cta p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-2 text-cta text-sm font-bold uppercase tracking-wider mb-2">
                  <MapPin className="w-4 h-4" /> Primary GBP Category
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">{result.primaryCategory.name}</h2>
                <p className="text-muted-foreground">{result.primaryCategory.why}</p>
              </div>

              {/* Secondary + Services grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg border border-border p-6 md:p-8">
                  <div className="flex items-center gap-2 text-navy font-bold mb-4">
                    <Layers className="w-5 h-5 text-cta" /> Secondary Categories
                  </div>
                  <ul className="space-y-3">
                    {result.secondaryCategories.map((c) => (
                      <li key={c.name} className="border-b border-border pb-3 last:border-0 last:pb-0">
                        <div className="font-semibold text-navy">{c.name}</div>
                        <div className="text-sm text-muted-foreground">{c.why}</div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg border border-border p-6 md:p-8">
                  <div className="flex items-center gap-2 text-navy font-bold mb-4">
                    <ListChecks className="w-5 h-5 text-cta" /> GBP Services to List
                  </div>
                  <ul className="grid grid-cols-1 gap-2">
                    {result.services.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-navy">
                        <span className="w-1.5 h-1.5 rounded-full bg-cta mt-1.5 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Page ideas */}
              <div className="bg-white rounded-lg border border-border p-6 md:p-8">
                <div className="flex items-center gap-2 text-navy font-bold mb-4">
                  <FileText className="w-5 h-5 text-cta" /> Website Page Ideas
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {result.pageIdeas.map((p) => (
                    <div key={p.slug} className="border border-border rounded-md p-3">
                      <div className="font-semibold text-navy text-sm">{p.title}</div>
                      <code className="text-xs text-muted-foreground">/{p.slug.replace(/^\//, "")}</code>
                    </div>
                  ))}
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
