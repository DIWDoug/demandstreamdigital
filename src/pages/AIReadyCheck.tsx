import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useState, useEffect } from "react";
import { Globe, ArrowRight, Loader2, CheckCircle2, AlertTriangle, XCircle, FileText, Code, Image, Link2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface ScanResult {
  url: string;
  markdown: string;
  metadata: {
    title?: string;
    description?: string;
    language?: string;
    sourceURL?: string;
    statusCode?: number;
  };
  links?: string[];
  screenshot?: string;
}

interface MetricScore {
  label: string;
  score: number;
  maxScore: number;
  status: "good" | "warning" | "poor";
  detail: string;
}

const AIReadyCheck = () => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [metrics, setMetrics] = useState<MetricScore[]>([]);
  const [overallScore, setOverallScore] = useState<number>(0);
  const [animatedText, setAnimatedText] = useState<string[]>([]);
  const { toast } = useToast();

  // Matrix-style animation for background
  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*+-=[]{}|;:,.<>?";
    const lines: string[] = [];
    for (let i = 0; i < 8; i++) {
      let line = "";
      for (let j = 0; j < 60; j++) {
        line += Math.random() > 0.7 ? chars[Math.floor(Math.random() * chars.length)] : " ";
      }
      lines.push(line);
    }
    setAnimatedText(lines);

    const interval = setInterval(() => {
      setAnimatedText(prev => prev.map(line => {
        let newLine = "";
        for (let j = 0; j < line.length; j++) {
          if (Math.random() > 0.95) {
            newLine += chars[Math.floor(Math.random() * chars.length)];
          } else if (Math.random() > 0.98) {
            newLine += " ";
          } else {
            newLine += line[j];
          }
        }
        return newLine;
      }));
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const analyzeContent = (data: ScanResult) => {
    const newMetrics: MetricScore[] = [];
    
    // 1. Content Length / Density
    const markdownLength = data.markdown?.length || 0;
    let contentScore = 0;
    let contentStatus: "good" | "warning" | "poor" = "poor";
    let contentDetail = "";
    
    if (markdownLength > 2000) {
      contentScore = 25;
      contentStatus = "good";
      contentDetail = `${markdownLength.toLocaleString()} characters of clean content`;
    } else if (markdownLength > 500) {
      contentScore = 15;
      contentStatus = "warning";
      contentDetail = "Moderate content density";
    } else {
      contentScore = 5;
      contentStatus = "poor";
      contentDetail = "Low content density for AI parsing";
    }
    
    newMetrics.push({
      label: "Content Density",
      score: contentScore,
      maxScore: 25,
      status: contentStatus,
      detail: contentDetail
    });

    // 2. Metadata Quality
    const hasTitle = !!data.metadata?.title;
    const hasDescription = !!data.metadata?.description;
    let metaScore = 0;
    let metaStatus: "good" | "warning" | "poor" = "poor";
    
    if (hasTitle && hasDescription) {
      metaScore = 25;
      metaStatus = "good";
    } else if (hasTitle || hasDescription) {
      metaScore = 15;
      metaStatus = "warning";
    } else {
      metaScore = 5;
      metaStatus = "poor";
    }
    
    newMetrics.push({
      label: "Metadata Quality",
      score: metaScore,
      maxScore: 25,
      status: metaStatus,
      detail: hasTitle && hasDescription ? "Title and description present" : "Missing key metadata"
    });

    // 3. Structure (Headers, Lists)
    const hasHeaders = /^#{1,6}\s/m.test(data.markdown || "");
    const hasLists = /^[-*]\s/m.test(data.markdown || "");
    const hasParagraphs = (data.markdown?.split("\n\n").length || 0) > 3;
    
    let structureScore = 0;
    let structureStatus: "good" | "warning" | "poor" = "poor";
    
    if (hasHeaders && hasLists && hasParagraphs) {
      structureScore = 25;
      structureStatus = "good";
    } else if (hasHeaders || hasLists) {
      structureScore = 15;
      structureStatus = "warning";
    } else {
      structureScore = 5;
      structureStatus = "poor";
    }
    
    newMetrics.push({
      label: "Content Structure",
      score: structureScore,
      maxScore: 25,
      status: structureStatus,
      detail: hasHeaders ? "Well-structured with headers" : "Limited structural elements"
    });

    // 4. Link Richness
    const linkCount = data.links?.length || 0;
    let linkScore = 0;
    let linkStatus: "good" | "warning" | "poor" = "poor";
    
    if (linkCount > 10) {
      linkScore = 25;
      linkStatus = "good";
    } else if (linkCount > 3) {
      linkScore = 15;
      linkStatus = "warning";
    } else {
      linkScore = 5;
      linkStatus = "poor";
    }
    
    newMetrics.push({
      label: "Link Richness",
      score: linkScore,
      maxScore: 25,
      status: linkStatus,
      detail: `${linkCount} internal/external links found`
    });

    setMetrics(newMetrics);
    
    const total = newMetrics.reduce((sum, m) => sum + m.score, 0);
    setOverallScore(total);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url.trim()) {
      toast({
        title: "URL Required",
        description: "Please enter a website URL to analyze",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    setResult(null);
    setMetrics([]);

    try {
      const { data, error } = await supabase.functions.invoke('firecrawl-scrape', {
        body: { 
          url: url.trim(),
          options: {
            formats: ['markdown', 'links'],
            onlyMainContent: true
          }
        }
      });

      if (error) {
        throw new Error(error.message);
      }

      if (!data?.success) {
        throw new Error(data?.error || "Failed to analyze page");
      }

      const scrapedData = data.data || data;
      
      const scanResult: ScanResult = {
        url: url.trim(),
        markdown: scrapedData.markdown || "",
        metadata: scrapedData.metadata || {},
        links: scrapedData.links || [],
        screenshot: scrapedData.screenshot
      };

      setResult(scanResult);
      analyzeContent(scanResult);

      toast({
        title: "Analysis Complete",
        description: "Your website has been analyzed for AI readiness"
      });
    } catch (error) {
      console.error('Scan error:', error);
      toast({
        title: "Analysis Failed",
        description: error instanceof Error ? error.message : "Failed to analyze website. Make sure Firecrawl is connected.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 75) return "text-green-400";
    if (score >= 50) return "text-yellow-400";
    return "text-red-400";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 75) return "AI Ready";
    if (score >= 50) return "Needs Work";
    return "Not Ready";
  };

  const StatusIcon = ({ status }: { status: "good" | "warning" | "poor" }) => {
    if (status === "good") return <CheckCircle2 className="h-4 w-4 text-green-400" />;
    if (status === "warning") return <AlertTriangle className="h-4 w-4 text-yellow-400" />;
    return <XCircle className="h-4 w-4 text-red-400" />;
  };

  return (
    <>
      <Helmet>
        <title>AI Ready Check | Website AI Compatibility Scanner | Dialed-In Web</title>
        <meta name="description" content="Analyze how AI-ready your webpage is from a single page snapshot. Get high-signal metrics for LLM compatibility." />
        <link rel="canonical" href="https://www.dialedinweb.com/ai-ready-check" />
      </Helmet>
      
      <Header />
      
      <main className="pt-16 min-h-screen bg-white dark:bg-background">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 relative overflow-hidden">
          {/* Subtle grid background */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(to right, currentColor 1px, transparent 1px),
                linear-gradient(to bottom, currentColor 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }} />
          </div>

          {/* Animated matrix text background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.04]">
            <div className="absolute top-1/4 left-0 right-0 font-mono text-xs text-foreground whitespace-pre leading-relaxed">
              {animatedText.map((line, i) => (
                <div key={i} className="text-center">{line}</div>
              ))}
            </div>
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium mb-8">
                AI Ready Check
                <ArrowRight className="h-4 w-4" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Is your website{" "}
                <span className="text-accent-blue">AI Ready?</span>
              </h1>
              
              <p className="text-text-secondary text-lg md:text-xl font-body mb-4">
                Analyze how AI-ready your webpage is from a single page snapshot.
              </p>
              <p className="text-text-muted text-base mb-8">
                High-signal metrics for LLM compatibility.
              </p>

              <p className="text-sm text-text-muted mb-12">
                Powered by <span className="font-semibold text-foreground">Dialed-In Web</span>
              </p>

              {/* URL Input Form */}
              <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                <div className="relative flex items-center bg-white dark:bg-surface-elevated rounded-xl border border-border/50 shadow-lg overflow-hidden">
                  <Globe className="absolute left-4 h-5 w-5 text-text-muted" />
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="example.com"
                    className="flex-1 py-4 pl-12 pr-4 bg-transparent text-foreground placeholder:text-text-muted focus:outline-none text-lg"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="m-2 px-6 py-3 bg-accent-blue hover:bg-accent-blue/90 text-white rounded-lg font-medium transition-colors disabled:opacity-50 flex items-center gap-2"
                  >
                    {isLoading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <ArrowRight className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Results Section */}
        {(isLoading || result) && (
          <section className="py-16 bg-surface-dark border-t border-border/30">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                {isLoading ? (
                  <div className="text-center py-16">
                    <Loader2 className="h-12 w-12 animate-spin text-accent-blue mx-auto mb-4" />
                    <p className="text-text-muted">Analyzing website for AI compatibility...</p>
                  </div>
                ) : result && (
                  <div className="space-y-8">
                    {/* Overall Score */}
                    <div className="text-center mb-12">
                      <p className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-2">AI Readiness Score</p>
                      <p className={cn("text-6xl md:text-7xl font-bold mb-2", getScoreColor(overallScore))}>
                        {overallScore}
                      </p>
                      <p className="text-xl text-text-muted">out of 100</p>
                      <p className={cn("text-lg font-semibold mt-2", getScoreColor(overallScore))}>
                        {getScoreLabel(overallScore)}
                      </p>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid md:grid-cols-2 gap-4">
                      {metrics.map((metric, i) => (
                        <div key={i} className="bg-surface-elevated rounded-xl p-5 border border-border/30">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <StatusIcon status={metric.status} />
                              <span className="font-medium text-foreground">{metric.label}</span>
                            </div>
                            <span className="text-sm text-text-muted">
                              {metric.score}/{metric.maxScore}
                            </span>
                          </div>
                          <div className="h-2 bg-surface-dark rounded-full overflow-hidden mb-2">
                            <div 
                              className={cn(
                                "h-full rounded-full transition-all duration-500",
                                metric.status === "good" ? "bg-green-500" 
                                : metric.status === "warning" ? "bg-yellow-500"
                                : "bg-red-500"
                              )}
                              style={{ width: `${(metric.score / metric.maxScore) * 100}%` }}
                            />
                          </div>
                          <p className="text-sm text-text-muted">{metric.detail}</p>
                        </div>
                      ))}
                    </div>

                    {/* Terminal Output */}
                    <div className="bg-[#1a1a2e] rounded-xl overflow-hidden border border-border/30">
                      <div className="flex items-center gap-2 px-4 py-3 bg-[#0f0f1a] border-b border-border/20">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500/80" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                          <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <span className="text-xs text-text-muted ml-2 font-mono">[ .JSON ]</span>
                      </div>
                      <div className="p-4 font-mono text-sm overflow-x-auto">
                        <pre className="text-text-muted">
                          <span className="text-text-muted">{"["}</span>{"\n"}
                          <span className="text-text-muted">{"  {"}</span>{"\n"}
                          <span className="text-text-muted">{"    "}</span>
                          <span className="text-purple-400">"url"</span>
                          <span className="text-text-muted">: </span>
                          <span className="text-accent-blue">"{result.url}"</span>
                          <span className="text-text-muted">,</span>{"\n"}
                          <span className="text-text-muted">{"    "}</span>
                          <span className="text-purple-400">"title"</span>
                          <span className="text-text-muted">: </span>
                          <span className="text-accent-blue">"{result.metadata?.title || 'N/A'}"</span>
                          <span className="text-text-muted">,</span>{"\n"}
                          <span className="text-text-muted">{"    "}</span>
                          <span className="text-purple-400">"contentLength"</span>
                          <span className="text-text-muted">: </span>
                          <span className="text-green-400">{result.markdown?.length || 0}</span>
                          <span className="text-text-muted">,</span>{"\n"}
                          <span className="text-text-muted">{"    "}</span>
                          <span className="text-purple-400">"links"</span>
                          <span className="text-text-muted">: </span>
                          <span className="text-green-400">{result.links?.length || 0}</span>
                          <span className="text-text-muted">,</span>{"\n"}
                          <span className="text-text-muted">{"    "}</span>
                          <span className="text-purple-400">"aiReadyScore"</span>
                          <span className="text-text-muted">: </span>
                          <span className="text-green-400">{overallScore}</span>{"\n"}
                          <span className="text-text-muted">{"  }"}</span>{"\n"}
                          <span className="text-text-muted">{"]"}</span>
                        </pre>
                      </div>
                    </div>

                    {/* Content Preview */}
                    {result.markdown && (
                      <div className="bg-surface-elevated rounded-xl p-6 border border-border/30">
                        <div className="flex items-center gap-2 mb-4">
                          <FileText className="h-5 w-5 text-accent-blue" />
                          <h3 className="font-semibold text-foreground">Extracted Content Preview</h3>
                        </div>
                        <div className="bg-surface-dark rounded-lg p-4 max-h-64 overflow-y-auto">
                          <pre className="text-sm text-text-muted whitespace-pre-wrap font-mono">
                            {result.markdown.slice(0, 1500)}
                            {result.markdown.length > 1500 && "..."}
                          </pre>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Info Section */}
        <section className="py-16 bg-surface-elevated border-t border-border/30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  What We Analyze
                </h2>
                <p className="text-text-muted">
                  Our scanner evaluates key factors that determine how well AI systems can understand and process your content.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-accent-blue" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Content Density</h3>
                  <p className="text-sm text-text-muted">Clean, extractable text that LLMs can parse effectively</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                    <Code className="h-6 w-6 text-purple-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Metadata Quality</h3>
                  <p className="text-sm text-text-muted">Structured data that helps AI understand context</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                    <Image className="h-6 w-6 text-emerald-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Content Structure</h3>
                  <p className="text-sm text-text-muted">Headers, lists, and semantic organization</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                    <Link2 className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Link Richness</h3>
                  <p className="text-sm text-text-muted">Internal and external linking for context</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AIReadyCheck;