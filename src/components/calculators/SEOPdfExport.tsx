import { useState, useRef } from "react";
import { FileDown, Upload, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import jsPDF from "jspdf";

interface TierInfo {
  level: number;
  name: string;
  baseCost: number;
  clientMsrp: number;
  profit: number;
  isRecommended: boolean;
}

interface EstimateData {
  monthlyLow: number;
  monthlyHigh: number;
  timelineMonths: number;
  recommendedTier: {
    lowTier: string;
    highTier: string;
    series: string;
    recommendedSeries: "hc" | "lc";
  };
}

interface SEOPdfExportProps {
  estimate: EstimateData | null;
  tiers: TierInfo[];
  selectedIndustryName: string;
  selectedMetroName: string;
  competition: string;
  aggressiveness: string;
  clientMargin: number;
}

export default function SEOPdfExport({
  estimate,
  tiers,
  selectedIndustryName,
  selectedMetroName,
  competition,
  aggressiveness,
  clientMargin
}: SEOPdfExportProps) {
  const [logo, setLogo] = useState<string | null>(null);
  const [logoName, setLogoName] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        setLogo(event.target?.result as string);
        setLogoName(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    setLogo(null);
    setLogoName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const generatePdf = async () => {
    if (!estimate) return;

    setIsGenerating(true);

    try {
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const margin = 20;
      let yPos = 20;

      // Add logo and/or company name header
      if (logo || companyName) {
        if (logo) {
          try {
            pdf.addImage(logo, "PNG", margin, yPos, 40, 20);
            if (companyName) {
              pdf.setFontSize(16);
              pdf.setTextColor(30, 30, 30);
              pdf.setFont("helvetica", "bold");
              pdf.text(companyName, margin + 48, yPos + 12);
            }
            yPos += 28;
          } catch {
            // If logo fails, just show company name
            if (companyName) {
              pdf.setFontSize(18);
              pdf.setTextColor(30, 30, 30);
              pdf.setFont("helvetica", "bold");
              pdf.text(companyName, margin, yPos + 8);
              yPos += 16;
            }
          }
        } else if (companyName) {
          pdf.setFontSize(18);
          pdf.setTextColor(30, 30, 30);
          pdf.setFont("helvetica", "bold");
          pdf.text(companyName, margin, yPos + 8);
          yPos += 16;
        }
        yPos += 4;
      }

      // Title
      pdf.setFontSize(24);
      pdf.setTextColor(30, 30, 30);
      pdf.setFont("helvetica", "bold");
      pdf.text("SEO Proposal", margin, yPos);
      yPos += 12;

      // Subtitle
      pdf.setFontSize(12);
      pdf.setTextColor(100, 100, 100);
      pdf.text(`Generated on ${new Date().toLocaleDateString()}`, margin, yPos);
      yPos += 16;

      // Project Details Section
      pdf.setFontSize(14);
      pdf.setTextColor(30, 30, 30);
      pdf.text("Project Details", margin, yPos);
      yPos += 8;

      pdf.setFontSize(10);
      pdf.setTextColor(60, 60, 60);

      const details = [
        ["Industry:", selectedIndustryName || "Not specified"],
        ["Market:", selectedMetroName || "Not specified"],
        ["Competition Level:", competition.charAt(0).toUpperCase() + competition.slice(1)],
        ["Growth Strategy:", aggressiveness.charAt(0).toUpperCase() + aggressiveness.slice(1)],
        ["Client Margin:", `${clientMargin}%`]
      ];

      details.forEach(([label, value]) => {
        pdf.setFont("helvetica", "bold");
        pdf.text(label, margin, yPos);
        pdf.setFont("helvetica", "normal");
        pdf.text(value, margin + 40, yPos);
        yPos += 6;
      });

      yPos += 10;

      // Recommended Package
      pdf.setFontSize(14);
      pdf.setTextColor(30, 30, 30);
      pdf.text("Recommended Package", margin, yPos);
      yPos += 8;

      pdf.setFontSize(16);
      pdf.setTextColor(220, 80, 50); // CTA color
      const tierText = estimate.recommendedTier.lowTier === estimate.recommendedTier.highTier
        ? estimate.recommendedTier.lowTier
        : `${estimate.recommendedTier.lowTier} – ${estimate.recommendedTier.highTier}`;
      pdf.text(tierText, margin, yPos);
      yPos += 10;

      pdf.setFontSize(10);
      pdf.setTextColor(100, 100, 100);
      pdf.text(`${estimate.recommendedTier.series} • Expected timeline: ${estimate.timelineMonths}+ months`, margin, yPos);
      yPos += 16;

      // Pricing Table Header
      pdf.setFontSize(14);
      pdf.setTextColor(30, 30, 30);
      pdf.text("Pricing Options", margin, yPos);
      yPos += 10;

      // Table
      pdf.setFontSize(9);
      const colWidths = [35, 50, 40, 40];
      const tableWidth = colWidths.reduce((a, b) => a + b, 0);

      // Header row
      pdf.setFillColor(245, 245, 245);
      pdf.rect(margin, yPos - 5, tableWidth, 8, "F");
      pdf.setTextColor(80, 80, 80);
      pdf.setFont("helvetica", "bold");
      pdf.text("Tier", margin + 2, yPos);
      pdf.text("Package", margin + colWidths[0] + 2, yPos);
      pdf.text("Your Cost", margin + colWidths[0] + colWidths[1] + 2, yPos);
      pdf.text("Client MSRP", margin + colWidths[0] + colWidths[1] + colWidths[2] + 2, yPos);
      yPos += 8;

      // Data rows
      pdf.setFont("helvetica", "normal");
      tiers.forEach((tier, index) => {
        if (tier.isRecommended) {
          pdf.setFillColor(255, 245, 240);
          pdf.rect(margin, yPos - 4, tableWidth, 7, "F");
        }

        pdf.setTextColor(tier.isRecommended ? 220 : 60, tier.isRecommended ? 80 : 60, tier.isRecommended ? 50 : 60);
        
        const seriesPrefix = estimate.recommendedTier.recommendedSeries === "hc" ? "HC" : "LC";
        pdf.text(`${seriesPrefix} ${tier.level}`, margin + 2, yPos);
        pdf.text(tier.name, margin + colWidths[0] + 2, yPos);
        pdf.text(`$${tier.baseCost.toLocaleString()}`, margin + colWidths[0] + colWidths[1] + 2, yPos);
        pdf.text(`$${tier.clientMsrp.toLocaleString()}`, margin + colWidths[0] + colWidths[1] + colWidths[2] + 2, yPos);
        yPos += 7;
      });

      yPos += 12;

      // What's Included
      pdf.setFontSize(14);
      pdf.setTextColor(30, 30, 30);
      pdf.text("What's Included", margin, yPos);
      yPos += 8;

      pdf.setFontSize(9);
      pdf.setTextColor(60, 60, 60);
      const inclusions = [
        "On-page visual & technical SEO",
        "GBP optimization & maintenance",
        "Citation building (structured & unstructured)",
        "Local link building & authority",
        "Hub & spoke AI-supported content",
        "GA4, GSC & GTM setup + conversion tracking",
        "White-label monthly reporting"
      ];

      inclusions.forEach((item) => {
        pdf.text(`✓  ${item}`, margin, yPos);
        yPos += 5;
      });

      yPos += 10;

      // Expected Outcomes
      pdf.setFontSize(14);
      pdf.setTextColor(30, 30, 30);
      pdf.text("Expected Outcomes", margin, yPos);
      yPos += 8;

      pdf.setFontSize(9);
      pdf.setTextColor(60, 60, 60);
      const outcomes = [
        "Improved Local 3-Pack visibility",
        "Increased phone calls & direction requests",
        "Higher review volume & rating",
        "Better organic rankings for local keywords",
        "AI Overview citation eligibility"
      ];

      outcomes.forEach((item) => {
        pdf.text(`→  ${item}`, margin, yPos);
        yPos += 5;
      });

      // Footer
      const footerY = pdf.internal.pageSize.getHeight() - 15;
      pdf.setFontSize(8);
      pdf.setTextColor(150, 150, 150);
      pdf.text("This proposal is for estimation purposes only. Final pricing may vary based on project scope.", margin, footerY);

      // Save the PDF
      const fileName = selectedIndustryName 
        ? `SEO-Proposal-${selectedIndustryName.replace(/\s+/g, "-")}.pdf`
        : "SEO-Proposal.pdf";
      pdf.save(fileName);

    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  if (!estimate) return null;

  return (
    <div className="bg-surface-dark rounded-lg p-4 border border-border/30 space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-foreground">Export Proposal</p>
        <FileDown className="h-4 w-4 text-text-muted" />
      </div>

      {/* Company Name Input */}
      <div className="space-y-2">
        <label className="text-xs text-text-muted">Company Name (optional)</label>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Your Agency Name"
          maxLength={50}
          className="w-full px-3 py-2 text-sm bg-surface-elevated border border-border/50 rounded-lg text-foreground placeholder:text-text-muted focus:outline-none focus:border-accent-blue/50 transition-colors"
        />
      </div>

      {/* Logo Upload */}
      <div className="space-y-2">
        <label className="text-xs text-text-muted">Your Logo (optional)</label>
        
        {logo ? (
          <div className="flex items-center gap-3 p-3 bg-surface-elevated rounded-lg border border-border/50">
            <img 
              src={logo} 
              alt="Logo preview" 
              className="h-8 w-auto max-w-[100px] object-contain"
            />
            <span className="text-xs text-text-secondary truncate flex-1">{logoName}</span>
            <button
              type="button"
              onClick={removeLogo}
              className="p-1 hover:bg-surface-dark rounded transition-colors"
            >
              <X className="h-4 w-4 text-text-muted hover:text-destructive" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full flex items-center justify-center gap-2 p-3 border border-dashed border-border/50 rounded-lg text-text-muted hover:border-accent-blue/50 hover:text-accent-blue transition-colors"
          >
            <Upload className="h-4 w-4" />
            <span className="text-xs">Upload logo</span>
          </button>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleLogoUpload}
          className="hidden"
        />
      </div>

      {/* Generate Button */}
      <Button
        onClick={generatePdf}
        disabled={isGenerating}
        className={cn(
          "w-full",
          "bg-cta hover:bg-cta/90 text-cta-foreground"
        )}
      >
        {isGenerating ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
            Generating...
          </>
        ) : (
          <>
            <FileDown className="h-4 w-4 mr-2" />
            Download PDF Proposal
          </>
        )}
      </Button>

      <p className="text-[10px] text-text-muted/60 text-center">
        Creates a branded proposal with your pricing to share with clients
      </p>
    </div>
  );
}
