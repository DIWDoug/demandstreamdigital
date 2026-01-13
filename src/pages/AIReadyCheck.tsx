import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useState, useEffect, useMemo } from "react";
import { Globe, ArrowRight, Loader2, CheckCircle2, AlertTriangle, XCircle, FileText, Code, Download, Calendar, Sparkles, LayoutGrid, PieChart, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface AnalysisResult {
  url: string;
  metrics: {
    id: string;
    label: string;
    score: number;
    status: 'pass' | 'warning' | 'fail';
    details: string;
  }[];
  overallScore: number;
  metadata?: Record<string, string>;
}

interface MetricScore {
  id: string;
  label: string;
  score: number;
  status: "passing" | "warning" | "failing";
  details: string[];
}

const AIReadyCheck = () => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [metrics, setMetrics] = useState<MetricScore[]>([]);
  const [overallScore, setOverallScore] = useState<number>(0);
  const [viewMode, setViewMode] = useState<"grid" | "radar" | "bar">("grid");
  const [animatedText, setAnimatedText] = useState<string[]>([]);
  const { toast } = useToast();

  // Matrix-style animation for background
  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*+-=[]{}|;:,.<>?";
    const lines: string[] = [];
    for (let i = 0; i < 6; i++) {
      let line = "";
      for (let j = 0; j < 80; j++) {
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

  // Analysis is now done server-side in the edge function

  const counts = useMemo(() => {
    const passing = metrics.filter(m => m.status === "passing").length;
    const warning = metrics.filter(m => m.status === "warning").length;
    const failing = metrics.filter(m => m.status === "failing").length;
    return { passing, warning, failing };
  }, [metrics]);

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
      const { data, error } = await supabase.functions.invoke('analyze-ai-readiness', {
        body: { url: url.trim() }
      });

      if (error) throw new Error(error.message);
      if (!data?.success) throw new Error(data?.error || "Failed to analyze page");

      const analysisResult: AnalysisResult = data.data;
      
      // Convert to display format
      const displayMetrics: MetricScore[] = analysisResult.metrics.map(m => ({
        id: m.id,
        label: m.label,
        score: m.score,
        status: m.status === 'pass' ? 'passing' : m.status === 'warning' ? 'warning' : 'failing',
        details: [m.details]
      }));

      setResult(analysisResult);
      setMetrics(displayMetrics);
      setOverallScore(analysisResult.overallScore);

      toast({
        title: "Analysis Complete",
        description: "Your website has been analyzed for AI readiness"
      });
    } catch (error) {
      console.error('Scan error:', error);
      toast({
        title: "Analysis Failed",
        description: error instanceof Error ? error.message : "Failed to analyze website",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setUrl("");
    setResult(null);
    setMetrics([]);
    setOverallScore(0);
  };

  const exportAsJson = () => {
    if (!result) return;
    const exportData = {
      url: result.url,
      overallScore,
      metrics: metrics.map(m => ({
        label: m.label,
        score: m.score,
        status: m.status,
        details: m.details
      })),
      metadata: result.metadata,
      analyzedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ai-ready-${result.url.replace(/[^a-z0-9]/gi, '-')}.json`;
    a.click();
  };

  const exportAsMd = () => {
    if (!result) return;
    let md = `# AI Readiness Analysis\n\n`;
    md += `**URL:** ${result.url}\n`;
    md += `**Overall Score:** ${overallScore}%\n`;
    md += `**Analyzed:** ${new Date().toLocaleDateString()}\n\n`;
    md += `## Metrics\n\n`;
    metrics.forEach(m => {
      const icon = m.status === "passing" ? "✅" : m.status === "warning" ? "⚠️" : "❌";
      md += `### ${icon} ${m.label}: ${m.score}%\n`;
      m.details.forEach(d => md += `- ${d}\n`);
      md += `\n`;
    });
    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ai-ready-${result.url.replace(/[^a-z0-9]/gi, '-')}.md`;
    a.click();
  };

  const StatusIcon = ({ status }: { status: "passing" | "warning" | "failing" }) => {
    if (status === "passing") return <CheckCircle2 className="h-4 w-4 text-green-500" />;
    if (status === "warning") return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
    return <XCircle className="h-4 w-4 text-red-500" />;
  };

  const getScoreColor = (score: number) => {
    if (score >= 70) return "text-green-500";
    if (score >= 40) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <>
      <Helmet>
        <title>White Label AI Readiness Check for Agencies | Wholesale Marketing Automation Insight by Dialed-in Web</title>
        <meta name="description" content="Dialed-in Web helps agencies assess AI readiness for marketing success. Offer this check under your brand. Start your AI audit now." />
        <link rel="canonical" href="https://dialedinweb.com/partner-tools/ai-ready-check" />
        <meta name="keywords" content="AI readiness check, LLM compatibility, AI visibility audit, AEO tool, answer engine optimization" />
        
        {/* Hreflang Tags */}
        <link rel="alternate" hrefLang="en-US" href="https://dialedinweb.com/partner-tools/ai-ready-check" />
        <link rel="alternate" hrefLang="en-CA" href="https://dialedinweb.com/partner-tools/ai-ready-check" />
        <link rel="alternate" hrefLang="x-default" href="https://dialedinweb.com/partner-tools/ai-ready-check" />
        <meta property="og:title" content="White Label AI Readiness Check for Agencies | Wholesale Marketing Automation Insight by Dialed-in Web" />
        <meta property="og:description" content="Dialed-in Web helps agencies assess AI readiness for marketing success. Offer this check under your brand. Start your AI audit now." />
        <meta property="og:url" content="https://dialedinweb.com/partner-tools/ai-ready-check" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dialed-In Web" />
        <meta property="og:image" content="https://dialedinweb.com/og-images/ai-ready-check.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="White Label AI Readiness Check for Agencies | Wholesale Marketing Automation Insight by Dialed-in Web" />
        <meta name="twitter:description" content="Dialed-in Web helps agencies assess AI readiness for marketing success. Offer this check under your brand. Start your AI audit now." />
        <meta name="twitter:image" content="https://dialedinweb.com/og-images/ai-ready-check.jpg" />
      </Helmet>
      
      <Header />
      
      <main className="pt-16 min-h-screen bg-white dark:bg-background">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 relative overflow-hidden bg-gray-50 dark:bg-surface-dark">
          {/* Subtle grid background */}
          <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(to right, currentColor 1px, transparent 1px),
                linear-gradient(to bottom, currentColor 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }} />
          </div>

          {/* Animated matrix text */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
            <div className="absolute top-1/3 left-0 right-0 font-mono text-xs text-foreground whitespace-pre leading-relaxed">
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
              
              <p className="text-text-secondary text-lg md:text-xl font-body mb-2">
                Analyze how AI-ready your webpage is from a single page snapshot.
              </p>
              <p className="text-text-muted text-base mb-6">
                High-signal metrics for LLM compatibility.
              </p>

              <p className="text-sm text-text-muted mb-10">
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
                      "Analyze Site"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Results Section */}
        {(isLoading || result) && (
          <section className="py-12 bg-white dark:bg-background border-t border-border/20">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="max-w-5xl mx-auto">
                {isLoading ? (
                  <div className="text-center py-16">
                    <Loader2 className="h-12 w-12 animate-spin text-accent-blue mx-auto mb-4" />
                    <p className="text-text-muted">Analyzing website for AI compatibility...</p>
                  </div>
                ) : result && (
                  <div className="space-y-8">
                    {/* Header */}
                    <div className="text-center">
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">AI Readiness Analysis</h2>
                      <p className="text-text-muted">Single-page snapshot of {result.url}</p>
                    </div>

                    {/* View Mode Toggle */}
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => setViewMode("grid")}
                        className={cn(
                          "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                          viewMode === "grid" 
                            ? "bg-foreground text-background" 
                            : "bg-surface-dark text-text-muted hover:text-foreground"
                        )}
                      >
                        <LayoutGrid className="h-4 w-4" />
                        Grid View
                      </button>
                      <button
                        onClick={() => setViewMode("radar")}
                        className={cn(
                          "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                          viewMode === "radar" 
                            ? "bg-foreground text-background" 
                            : "bg-surface-dark text-text-muted hover:text-foreground"
                        )}
                      >
                        <PieChart className="h-4 w-4" />
                        Radar Chart
                      </button>
                      <button
                        onClick={() => setViewMode("bar")}
                        className={cn(
                          "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                          viewMode === "bar" 
                            ? "bg-foreground text-background" 
                            : "bg-surface-dark text-text-muted hover:text-foreground"
                        )}
                      >
                        <BarChart3 className="h-4 w-4" />
                        Bar Chart
                      </button>
                    </div>

                    {/* Score + Metrics */}
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Overall Score */}
                      <div className="lg:col-span-1">
                        <div className="bg-gray-50 dark:bg-surface-dark rounded-2xl p-8 text-center sticky top-24">
                          <p className="text-sm font-medium text-text-muted mb-4">Overall Score</p>
                          <p className={cn("text-7xl font-bold mb-2", getScoreColor(overallScore))}>
                            {overallScore}%
                          </p>
                          
                          {/* Status Counts */}
                          <div className="flex justify-center gap-6 mt-6 pt-6 border-t border-border/30">
                            <div className="text-center">
                              <p className="text-2xl font-bold text-green-500">{counts.passing}</p>
                              <p className="text-xs text-text-muted">Passing</p>
                            </div>
                            <div className="text-center">
                              <p className="text-2xl font-bold text-yellow-500">{counts.warning}</p>
                              <p className="text-xs text-text-muted">Warning</p>
                            </div>
                            <div className="text-center">
                              <p className="text-2xl font-bold text-red-500">{counts.failing}</p>
                              <p className="text-xs text-text-muted">Failing</p>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="mt-8 space-y-3">
                            <button
                              onClick={handleReset}
                              className="w-full py-3 px-4 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors"
                            >
                              Analyze Another Site
                            </button>
                            <Link
                              to="/contact"
                              className="w-full py-3 px-4 border border-border rounded-lg font-medium hover:bg-surface-dark transition-colors flex items-center justify-center gap-2"
                            >
                              <Calendar className="h-4 w-4" />
                              Book a Meeting
                            </Link>
                            <button
                              className="w-full py-3 px-4 bg-accent-blue text-white rounded-lg font-medium hover:bg-accent-blue/90 transition-colors flex items-center justify-center gap-2"
                              onClick={() => toast({ title: "Coming Soon", description: "AI-powered deep analysis coming soon!" })}
                            >
                              <Sparkles className="h-4 w-4" />
                              Analyze with AI
                            </button>
                          </div>

                          {/* Export */}
                          <div className="flex gap-2 mt-6 pt-6 border-t border-border/30">
                            <button
                              onClick={exportAsJson}
                              className="flex-1 py-2 px-3 text-sm border border-border rounded-lg hover:bg-surface-dark transition-colors"
                            >
                              JSON
                            </button>
                            <button
                              onClick={exportAsMd}
                              className="flex-1 py-2 px-3 text-sm border border-border rounded-lg hover:bg-surface-dark transition-colors"
                            >
                              .MD
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Metrics Grid/List */}
                      <div className="lg:col-span-2">
                        {viewMode === "grid" && (
                          <div className="grid md:grid-cols-2 gap-4">
                            {metrics.map((metric) => (
                              <div 
                                key={metric.id} 
                                className="bg-white dark:bg-surface-elevated rounded-xl p-5 border border-border/30 hover:border-border/50 transition-colors"
                              >
                                <div className="flex items-center justify-between mb-3">
                                  <div className="flex items-center gap-2">
                                    <StatusIcon status={metric.status} />
                                    <span className="font-semibold text-foreground">{metric.label}</span>
                                  </div>
                                  <span className={cn("text-lg font-bold", getScoreColor(metric.score))}>
                                    {metric.score}%
                                  </span>
                                </div>
                                <div className="space-y-1">
                                  {metric.details.map((detail, i) => (
                                    <p key={i} className="text-sm text-text-muted">{detail}</p>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {viewMode === "bar" && (
                          <div className="bg-white dark:bg-surface-elevated rounded-xl p-6 border border-border/30">
                            <div className="space-y-4">
                              {[...metrics].sort((a, b) => b.score - a.score).map((metric) => (
                                <div key={metric.id}>
                                  <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                      <StatusIcon status={metric.status} />
                                      <span className="text-sm font-medium text-foreground">{metric.label}</span>
                                    </div>
                                    <span className={cn("text-sm font-bold", getScoreColor(metric.score))}>
                                      {metric.score}%
                                    </span>
                                  </div>
                                  <div className="h-3 bg-gray-100 dark:bg-surface-dark rounded-full overflow-hidden">
                                    <div 
                                      className={cn(
                                        "h-full rounded-full transition-all duration-700",
                                        metric.status === "passing" ? "bg-green-500" 
                                        : metric.status === "warning" ? "bg-yellow-500"
                                        : "bg-red-500"
                                      )}
                                      style={{ width: `${metric.score}%` }}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {viewMode === "radar" && (
                          <div className="bg-white dark:bg-surface-elevated rounded-xl p-6 border border-border/30">
                            <div className="aspect-square max-w-md mx-auto relative">
                              {/* Simple radar visualization */}
                              <svg viewBox="0 0 200 200" className="w-full h-full">
                                {/* Background circles */}
                                {[20, 40, 60, 80, 100].map((r) => (
                                  <circle
                                    key={r}
                                    cx="100"
                                    cy="100"
                                    r={r * 0.8}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeOpacity="0.1"
                                    className="text-foreground"
                                  />
                                ))}
                                {/* Axis lines */}
                                {metrics.map((_, i) => {
                                  const angle = (i / metrics.length) * Math.PI * 2 - Math.PI / 2;
                                  return (
                                    <line
                                      key={i}
                                      x1="100"
                                      y1="100"
                                      x2={100 + Math.cos(angle) * 80}
                                      y2={100 + Math.sin(angle) * 80}
                                      stroke="currentColor"
                                      strokeOpacity="0.1"
                                      className="text-foreground"
                                    />
                                  );
                                })}
                                {/* Data polygon */}
                                <polygon
                                  points={metrics.map((m, i) => {
                                    const angle = (i / metrics.length) * Math.PI * 2 - Math.PI / 2;
                                    const r = (m.score / 100) * 80;
                                    return `${100 + Math.cos(angle) * r},${100 + Math.sin(angle) * r}`;
                                  }).join(" ")}
                                  fill="rgb(59, 130, 246)"
                                  fillOpacity="0.2"
                                  stroke="rgb(59, 130, 246)"
                                  strokeWidth="2"
                                />
                                {/* Data points */}
                                {metrics.map((m, i) => {
                                  const angle = (i / metrics.length) * Math.PI * 2 - Math.PI / 2;
                                  const r = (m.score / 100) * 80;
                                  return (
                                    <circle
                                      key={i}
                                      cx={100 + Math.cos(angle) * r}
                                      cy={100 + Math.sin(angle) * r}
                                      r="4"
                                      fill="rgb(59, 130, 246)"
                                    />
                                  );
                                })}
                              </svg>
                              {/* Labels */}
                              {metrics.map((m, i) => {
                                const angle = (i / metrics.length) * Math.PI * 2 - Math.PI / 2;
                                const labelR = 95;
                                const x = 50 + Math.cos(angle) * labelR * 0.5;
                                const y = 50 + Math.sin(angle) * labelR * 0.5;
                                return (
                                  <div
                                    key={i}
                                    className="absolute text-xs text-text-muted font-medium whitespace-nowrap"
                                    style={{
                                      left: `${x}%`,
                                      top: `${y}%`,
                                      transform: 'translate(-50%, -50%)'
                                    }}
                                  >
                                    {m.label}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Educational Content Section */}
        <section className="py-16 lg:py-24 bg-gray-50 dark:bg-surface-dark border-t border-border/20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  What is AI Optimization (AIO)?
                </h2>
                <p className="text-text-muted max-w-2xl mx-auto">
                  AI Optimization ensures your website content can be accurately parsed, understood, and cited by Large Language Models like ChatGPT, Google's AI Overviews, and Perplexity.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white dark:bg-surface-elevated rounded-xl p-6 border border-border/30">
                  <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-accent-blue" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">AI Overviews Are Here</h3>
                  <p className="text-sm text-text-muted">
                    Google now displays AI-generated summaries at the top of many search results. If your content isn't structured for AI parsing, you're invisible in these prime positions.
                  </p>
                </div>

                <div className="bg-white dark:bg-surface-elevated rounded-xl p-6 border border-border/30">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-purple-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">LLMs Drive Discovery</h3>
                  <p className="text-sm text-text-muted">
                    More users are asking ChatGPT and similar tools for local business recommendations. If your site can't be "read" by these models, you won't be recommended.
                  </p>
                </div>

                <div className="bg-white dark:bg-surface-elevated rounded-xl p-6 border border-border/30">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-emerald-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Structured Content Wins</h3>
                  <p className="text-sm text-text-muted">
                    Clean heading hierarchies, semantic HTML, and proper metadata help AI systems extract accurate information about your business, services, and expertise.
                  </p>
                </div>

                <div className="bg-white dark:bg-surface-elevated rounded-xl p-6 border border-border/30">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Technical Foundation</h3>
                  <p className="text-sm text-text-muted">
                    Robots.txt, sitemaps, and the emerging llms.txt standard tell AI crawlers exactly what content to index and how to interpret your site structure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters for Local Businesses */}
        <section className="py-16 lg:py-24 bg-white dark:bg-background border-t border-border/20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Why AI Readiness Matters for Local Businesses
                </h2>
                <p className="text-text-muted max-w-2xl mx-auto">
                  Local search is evolving. Businesses that optimize for AI discovery today will dominate tomorrow's recommendation-driven landscape.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-surface-dark rounded-2xl p-8 border border-border/30 mb-12">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-4xl font-bold text-accent-blue mb-2">65%</p>
                    <p className="text-sm text-text-muted">of users now start searches with AI assistants</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-purple-500 mb-2">40%</p>
                    <p className="text-sm text-text-muted">of Google results include AI Overviews</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-emerald-500 mb-2">3x</p>
                    <p className="text-sm text-text-muted">higher engagement from AI-cited content</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cta/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-cta">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">"Near Me" Queries Are AI-Powered</h3>
                    <p className="text-sm text-text-muted">
                      When someone asks "best plumber near me" to ChatGPT or Google Assistant, AI pulls from websites with clear, structured content. Messy sites get ignored.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cta/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-cta">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Citations Build Trust</h3>
                    <p className="text-sm text-text-muted">
                      AI systems cite sources. When your business appears as a citation in an AI response, it carries implicit endorsement. Being cited beats being listed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cta/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-cta">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Voice Search Is Conversational</h3>
                    <p className="text-sm text-text-muted">
                      Voice assistants powered by LLMs answer questions conversationally. Sites with FAQ-structured content and clear service descriptions get featured.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cta/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-cta">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Third-Party Signals Matter</h3>
                    <p className="text-sm text-text-muted">
                      AI systems cross-reference your website with Yelp, Google Business Profile, and industry directories. Consistent, structured data across all platforms amplifies your visibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Improve Section */}
        <section className="py-16 lg:py-24 bg-gray-50 dark:bg-surface-dark border-t border-border/20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  How to Improve Your AI Readiness Score
                </h2>
                <p className="text-text-muted max-w-2xl mx-auto">
                  Each metric in our analysis maps to specific, actionable improvements you can make today.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white dark:bg-surface-elevated rounded-xl p-5 border border-border/30">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <h3 className="font-semibold text-foreground">Fix Heading Hierarchy</h3>
                  </div>
                  <p className="text-sm text-text-muted ml-8">
                    Use exactly one H1 per page. Follow a logical sequence: H1 → H2 → H3. Never skip levels. This helps AI understand your content structure.
                  </p>
                </div>

                <div className="bg-white dark:bg-surface-elevated rounded-xl p-5 border border-border/30">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <h3 className="font-semibold text-foreground">Add Complete Metadata</h3>
                  </div>
                  <p className="text-sm text-text-muted ml-8">
                    Every page needs a unique title tag (under 60 characters) and meta description (under 160 characters) that accurately describes the content.
                  </p>
                </div>

                <div className="bg-white dark:bg-surface-elevated rounded-xl p-5 border border-border/30">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <h3 className="font-semibold text-foreground">Implement Semantic HTML</h3>
                  </div>
                  <p className="text-sm text-text-muted ml-8">
                    Use {'<header>'}, {'<nav>'}, {'<main>'}, {'<article>'}, {'<section>'}, and {'<footer>'} tags. These help AI understand page structure beyond just content.
                  </p>
                </div>

                <div className="bg-white dark:bg-surface-elevated rounded-xl p-5 border border-border/30">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <h3 className="font-semibold text-foreground">Create an llms.txt File</h3>
                  </div>
                  <p className="text-sm text-text-muted ml-8">
                    This emerging standard tells AI crawlers about your site structure, key pages, and preferred content. Place it in your root directory alongside robots.txt.
                  </p>
                </div>

                <div className="bg-white dark:bg-surface-elevated rounded-xl p-5 border border-border/30">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <h3 className="font-semibold text-foreground">Improve Accessibility</h3>
                  </div>
                  <p className="text-sm text-text-muted ml-8">
                    Add descriptive alt text to all images. Use ARIA labels for interactive elements. Accessibility improvements also improve AI comprehension.
                  </p>
                </div>

                <div className="bg-white dark:bg-surface-elevated rounded-xl p-5 border border-border/30">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <h3 className="font-semibold text-foreground">Write for Clarity</h3>
                  </div>
                  <p className="text-sm text-text-muted ml-8">
                    Use shorter sentences (15-20 words average). Break up long paragraphs. Use bullet points and numbered lists. Clear writing is AI-friendly writing.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 bg-gradient-to-br from-cta/10 to-accent-blue/10 rounded-2xl p-8 border border-cta/30 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Need Help Optimizing for AI?</h3>
                <p className="text-text-muted mb-6 max-w-lg mx-auto">
                  Our white-label SEO and content services include AI Optimization as a core component. We help agencies deliver AI-ready websites to their clients.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/white-label-local-seo"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-cta hover:bg-cta/90 text-cta-foreground rounded-lg font-semibold transition-colors"
                  >
                    Explore Local SEO Services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground hover:bg-surface-dark rounded-lg font-medium transition-colors"
                  >
                    Start the Conversation
                  </Link>
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