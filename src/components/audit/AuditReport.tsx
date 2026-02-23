import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Download, CheckCircle, AlertTriangle, XCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";

interface AuditCategory {
  name: string;
  score: number;
  status: "pass" | "warning" | "fail";
  findings: string[];
  recommendations: string[];
}

interface AuditData {
  url: string;
  seoData: {
    title: string | null;
    titleLength: number;
    metaDesc: string | null;
    metaDescLength: number;
    h1s: string[];
    h2s: string[];
    totalImages: number;
    imagesWithAlt: number;
    wordCount: number;
    internalLinks: number;
    externalLinks: number;
    hasSchema: boolean;
    viewport: boolean;
    hasLazyLoad: boolean;
  };
  hasRobotsTxt: boolean;
  hasSitemap: boolean;
  aiAnalysis: {
    overallScore: number;
    categories: AuditCategory[];
    topPriorities: string[];
    summary: string;
  } | null;
}

interface AuditReportProps {
  data: AuditData;
  userName: string;
}

const StatusIcon = ({ status }: { status: string }) => {
  if (status === "pass") return <CheckCircle className="w-5 h-5 text-green-400" />;
  if (status === "warning") return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
  return <XCircle className="w-5 h-5 text-red-400" />;
};

const getScoreColor = (score: number) => {
  if (score >= 80) return "text-green-400";
  if (score >= 50) return "text-yellow-400";
  return "text-red-400";
};

const getProgressColor = (score: number) => {
  if (score >= 80) return "[&>div]:bg-green-500";
  if (score >= 50) return "[&>div]:bg-yellow-500";
  return "[&>div]:bg-red-500";
};

export default function AuditReport({ data, userName }: AuditReportProps) {
  const reportRef = useRef<HTMLDivElement>(null);
  const analysis = data.aiAnalysis;
  const overallScore = analysis?.overallScore ?? 0;

  const generatePdf = () => {
    const doc = new jsPDF("p", "mm", "a4");
    const pageW = doc.internal.pageSize.getWidth();
    const margin = 20;
    const contentW = pageW - margin * 2;
    let y = 20;

    const addPage = () => {
      doc.addPage();
      y = 20;
    };

    const checkSpace = (needed: number) => {
      if (y + needed > 270) addPage();
    };

    // Header
    doc.setFillColor(10, 34, 64);
    doc.rect(0, 0, pageW, 45, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("SEO Audit Report", margin, 22);
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.text(`Prepared for: ${userName}`, margin, 32);
    doc.text(`Website: ${data.url}`, margin, 39);
    y = 55;

    // Overall Score
    doc.setTextColor(30, 30, 30);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Overall Score", margin, y);
    y += 8;
    doc.setFontSize(36);
    const scoreColor =
      overallScore >= 80
        ? [34, 197, 94]
        : overallScore >= 50
        ? [234, 179, 8]
        : [239, 68, 68];
    doc.setTextColor(scoreColor[0], scoreColor[1], scoreColor[2]);
    doc.text(`${overallScore}/100`, margin, y);
    y += 14;

    // Summary
    if (analysis?.summary) {
      doc.setTextColor(60, 60, 60);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      const lines = doc.splitTextToSize(analysis.summary, contentW);
      doc.text(lines, margin, y);
      y += lines.length * 5 + 8;
    }

    // Top Priorities
    if (analysis?.topPriorities?.length) {
      checkSpace(30);
      doc.setTextColor(30, 30, 30);
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text("Top Priorities", margin, y);
      y += 8;
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(60, 60, 60);
      analysis.topPriorities.forEach((p, i) => {
        checkSpace(8);
        const lines = doc.splitTextToSize(`${i + 1}. ${p}`, contentW);
        doc.text(lines, margin, y);
        y += lines.length * 5 + 3;
      });
      y += 5;
    }

    // Categories
    if (analysis?.categories?.length) {
      analysis.categories.forEach((cat) => {
        checkSpace(40);
        doc.setTextColor(30, 30, 30);
        doc.setFontSize(13);
        doc.setFont("helvetica", "bold");
        doc.text(`${cat.name} — ${cat.score}/100`, margin, y);
        y += 7;

        doc.setFontSize(9);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(80, 80, 80);

        if (cat.findings?.length) {
          cat.findings.forEach((f) => {
            checkSpace(8);
            const lines = doc.splitTextToSize(`• ${f}`, contentW);
            doc.text(lines, margin + 2, y);
            y += lines.length * 4 + 2;
          });
        }

        if (cat.recommendations?.length) {
          checkSpace(8);
          doc.setTextColor(10, 34, 64);
          doc.setFont("helvetica", "bold");
          doc.text("Recommendations:", margin + 2, y);
          y += 5;
          doc.setFont("helvetica", "normal");
          doc.setTextColor(80, 80, 80);
          cat.recommendations.forEach((r) => {
            checkSpace(8);
            const lines = doc.splitTextToSize(`→ ${r}`, contentW - 4);
            doc.text(lines, margin + 4, y);
            y += lines.length * 4 + 2;
          });
        }
        y += 6;
      });
    }

    // Footer
    checkSpace(20);
    doc.setDrawColor(200, 200, 200);
    doc.line(margin, y, pageW - margin, y);
    y += 8;
    doc.setFontSize(9);
    doc.setTextColor(120, 120, 120);
    doc.text(
      "Prepared by Demand Stream Digital — demandstreamdigital.com",
      margin,
      y
    );
    y += 5;
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, margin, y);

    doc.save(`SEO-Audit-${new URL(data.url).hostname}.pdf`);
  };

  if (!analysis) {
    return (
      <Card className="bg-surface-card border-border">
        <CardContent className="p-8 text-center">
          <p className="text-text-secondary">
            AI analysis could not be completed. Please try again.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div ref={reportRef} className="space-y-8">
      {/* Score Header */}
      <div className="text-center">
        <div
          className={`text-7xl font-bold mb-2 ${getScoreColor(overallScore)}`}
        >
          {overallScore}
        </div>
        <p className="text-text-muted text-sm uppercase tracking-wider">
          Overall SEO Score
        </p>
        <p className="text-text-secondary mt-3 max-w-2xl mx-auto">
          {analysis.summary}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        <Button onClick={generatePdf} variant="outline" className="gap-2">
          <Download className="w-4 h-4" /> Download PDF
        </Button>
        <Button asChild className="gap-2 bg-cta hover:bg-cta/90 text-white">
          <Link to="/contact">
            Get Expert Help <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>

      {/* Top Priorities */}
      {analysis.topPriorities?.length > 0 && (
        <Card className="bg-surface-card border-border">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              🎯 Top Priorities
            </h3>
            <ol className="space-y-3">
              {analysis.topPriorities.map((p, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-text-secondary"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-blue/20 text-accent-blue flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="text-sm">{p}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      )}

      {/* Category Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {analysis.categories.map((cat, i) => (
          <Card
            key={i}
            className="bg-surface-card border-border hover:border-accent-blue/30 transition-colors"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <StatusIcon status={cat.status} />
                  <h3 className="font-semibold text-foreground">{cat.name}</h3>
                </div>
                <span className={`text-2xl font-bold ${getScoreColor(cat.score)}`}>
                  {cat.score}
                </span>
              </div>

              <Progress
                value={cat.score}
                className={`h-2 mb-4 bg-border ${getProgressColor(cat.score)}`}
              />

              {cat.findings?.length > 0 && (
                <div className="mb-3">
                  <p className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
                    Findings
                  </p>
                  <ul className="space-y-1">
                    {cat.findings.map((f, j) => (
                      <li key={j} className="text-sm text-text-secondary flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-text-muted flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {cat.recommendations?.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-accent-blue uppercase tracking-wider mb-2">
                    Recommendations
                  </p>
                  <ul className="space-y-1">
                    {cat.recommendations.map((r, j) => (
                      <li key={j} className="text-sm text-text-secondary flex items-start gap-2">
                        <ArrowRight className="w-3 h-3 mt-1 text-accent-blue flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Stats */}
      <Card className="bg-surface-card border-border">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            📊 Quick Stats
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: "Word Count", value: data.seoData.wordCount },
              { label: "Images", value: `${data.seoData.imagesWithAlt}/${data.seoData.totalImages} with alt` },
              { label: "Internal Links", value: data.seoData.internalLinks },
              { label: "Schema Markup", value: data.seoData.hasSchema ? "Yes ✓" : "No ✗" },
            ].map((stat, i) => (
              <div key={i} className="p-3 rounded-lg bg-background">
                <div className="text-xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="bg-gradient-to-r from-accent-blue/10 to-cta/10 border-accent-blue/30">
        <CardContent className="p-8 text-center">
          <h3 className="text-xl font-bold text-foreground mb-2">
            Want to improve these scores?
          </h3>
          <p className="text-text-secondary mb-6 max-w-lg mx-auto">
            Our team specializes in SEO for plumbing and HVAC companies. Let's
            turn these insights into a growth plan.
          </p>
          <Button asChild size="lg" className="bg-cta hover:bg-cta/90 text-white">
            <Link to="/contact">
              Schedule a Free Strategy Call <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
