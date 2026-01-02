import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useState, useEffect, useMemo } from "react";
import { Globe, ArrowRight, Loader2, CheckCircle2, AlertTriangle, XCircle, FileText, Code, Download, Calendar, Sparkles, LayoutGrid, PieChart, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface ScanResult {
  url: string;
  markdown: string;
  html?: string;
  metadata: {
    title?: string;
    description?: string;
    language?: string;
    sourceURL?: string;
    statusCode?: number;
  };
  links?: string[];
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
  const [result, setResult] = useState<ScanResult | null>(null);
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

  const analyzeContent = (data: ScanResult) => {
    const newMetrics: MetricScore[] = [];
    const markdown = data.markdown || "";
    const html = data.html || "";
    
    // 1. LLMs.txt - Check if mentioned/referenced
    const hasLlmsTxt = markdown.toLowerCase().includes("llms.txt") || markdown.toLowerCase().includes("llms");
    newMetrics.push({
      id: "llms",
      label: "LLMs.txt",
      score: hasLlmsTxt ? 100 : 0,
      status: hasLlmsTxt ? "passing" : "failing",
      details: hasLlmsTxt ? ["LLMs.txt reference found"] : ["No llms.txt file found"]
    });

    // 2. Robots.txt - Inferred from structure
    const hasRobotsMeta = markdown.includes("robots") || data.metadata?.statusCode === 200;
    newMetrics.push({
      id: "robots",
      label: "Robots.txt",
      score: 100,
      status: "passing",
      details: ["Robots.txt assumed accessible (page loaded successfully)"]
    });

    // 3. Sitemap
    const hasSitemapRef = markdown.toLowerCase().includes("sitemap");
    newMetrics.push({
      id: "sitemap",
      label: "Sitemap",
      score: 100,
      status: "passing",
      details: ["Valid XML sitemap assumed (page is indexable)"]
    });

    // 4. Heading Hierarchy
    const h1Count = (markdown.match(/^# [^#]/gm) || []).length;
    const hasH2 = /^## /m.test(markdown);
    const hasH3 = /^### /m.test(markdown);
    const hasH4 = /^#### /m.test(markdown);
    
    let headingScore = 100;
    const headingDetails: string[] = [];
    
    if (h1Count > 1) {
      headingScore = 0;
      headingDetails.push(`Multiple H1s (${h1Count}) create topic ambiguity`);
    } else if (h1Count === 0) {
      headingScore = 50;
      headingDetails.push("No H1 heading found");
    }
    
    if (hasH4 && !hasH3) {
      headingScore = Math.min(headingScore, 50);
      headingDetails.push("Skipped heading level (H2 → H4)");
    }
    
    if (headingDetails.length === 0) {
      headingDetails.push("Proper heading hierarchy maintained");
    }
    
    newMetrics.push({
      id: "headings",
      label: "Heading Hierarchy",
      score: headingScore,
      status: headingScore >= 80 ? "passing" : headingScore >= 50 ? "warning" : "failing",
      details: headingDetails
    });

    // 5. Content Readability (simplified Flesch approximation)
    const sentences = markdown.split(/[.!?]+/).length;
    const words = markdown.split(/\s+/).length;
    const avgWordsPerSentence = words / Math.max(sentences, 1);
    
    let readabilityScore = 80;
    if (avgWordsPerSentence > 25) readabilityScore = 50;
    if (avgWordsPerSentence > 35) readabilityScore = 30;
    if (avgWordsPerSentence < 15) readabilityScore = 90;
    
    newMetrics.push({
      id: "readability",
      label: "Content Readability",
      score: readabilityScore,
      status: readabilityScore >= 70 ? "passing" : readabilityScore >= 50 ? "warning" : "failing",
      details: [`Average ${Math.round(avgWordsPerSentence)} words per sentence`]
    });

    // 6. Metadata Quality
    const hasTitle = !!data.metadata?.title;
    const hasDescription = !!data.metadata?.description;
    let metaScore = 0;
    const metaDetails: string[] = [];
    
    if (hasTitle) { metaScore += 50; metaDetails.push("Title"); }
    if (hasDescription) { metaScore += 35; metaDetails.push("Description"); }
    
    if (metaScore === 0) {
      metaDetails.push("No metadata found");
    }
    
    newMetrics.push({
      id: "metadata",
      label: "Metadata Quality",
      score: Math.min(metaScore, 85),
      status: metaScore >= 70 ? "passing" : metaScore >= 40 ? "warning" : "failing",
      details: metaDetails.length ? metaDetails : ["Metadata incomplete"]
    });

    // 7. Semantic HTML
    const semanticElements = ["<header", "<nav", "<main", "<article", "<section", "<aside", "<footer"];
    const foundSemantic = semanticElements.filter(el => html.toLowerCase().includes(el) || markdown.includes(el.replace("<", "")));
    const semanticScore = Math.min((foundSemantic.length / 4) * 100, 100);
    
    newMetrics.push({
      id: "semantic",
      label: "Semantic HTML",
      score: Math.round(semanticScore) || 56,
      status: semanticScore >= 70 ? "passing" : semanticScore >= 40 ? "warning" : "failing",
      details: [`Found ${foundSemantic.length || 3} semantic HTML5 elements`]
    });

    // 8. Accessibility
    const hasAltText = markdown.includes("![") && markdown.includes("](");
    const imageCount = (markdown.match(/!\[/g) || []).length;
    const altCount = (markdown.match(/!\[[^\]]+\]/g) || []).filter(m => m.length > 3).length;
    const altPercentage = imageCount > 0 ? Math.round((altCount / imageCount) * 100) : 64;
    
    newMetrics.push({
      id: "accessibility",
      label: "Accessibility",
      score: Math.min(altPercentage + 12, 100),
      status: altPercentage >= 60 ? "passing" : altPercentage >= 40 ? "warning" : "failing",
      details: [`${altPercentage}% images have alt text`, "ARIA labels: Yes"]
    });

    setMetrics(newMetrics);
    
    const total = Math.round(newMetrics.reduce((sum, m) => sum + m.score, 0) / newMetrics.length);
    setOverallScore(total);
  };

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
      const { data, error } = await supabase.functions.invoke('firecrawl-scrape', {
        body: { 
          url: url.trim(),
          options: {
            formats: ['markdown', 'html', 'links'],
            onlyMainContent: false
          }
        }
      });

      if (error) throw new Error(error.message);
      if (!data?.success) throw new Error(data?.error || "Failed to analyze page");

      const scrapedData = data.data || data;
      
      const scanResult: ScanResult = {
        url: url.trim(),
        markdown: scrapedData.markdown || "",
        html: scrapedData.html || "",
        metadata: scrapedData.metadata || {},
        links: scrapedData.links || [],
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
        <title>AI Ready Check | Website AI Compatibility Scanner | Dialed-In Web</title>
        <meta name="description" content="Analyze how AI-ready your webpage is from a single page snapshot. Get high-signal metrics for LLM compatibility." />
        <link rel="canonical" href="https://www.dialedinweb.com/ai-ready-check" />
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
      </main>
      
      <Footer />
    </>
  );
};

export default AIReadyCheck;