import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, Download, AlertCircle, Loader2 } from "lucide-react";

interface PDFViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title?: string;
}

const PDFViewerModal = ({ isOpen, onClose, pdfUrl, title = "Case Study" }: PDFViewerModalProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handleOpenExternal = () => {
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = pdfUrl.split("/").pop() || "case-study.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Reset state when modal opens
  const handleOpenChange = (open: boolean) => {
    if (open) {
      setIsLoading(true);
      setHasError(false);
    } else {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-5xl w-[95vw] h-[90vh] flex flex-col p-0 gap-0">
        <DialogHeader className="px-6 py-4 border-b border-border flex-shrink-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-semibold">{title}</DialogTitle>
            <div className="flex items-center gap-2 mr-8">
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-card border border-border rounded-lg hover:bg-surface-elevated transition-colors"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
              <button
                onClick={handleOpenExternal}
                className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Open in New Tab
              </button>
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 relative bg-muted/30 overflow-hidden">
          {/* Loading State */}
          {isLoading && !hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10">
              <div className="flex flex-col items-center gap-3">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
                <p className="text-sm text-muted-foreground">Loading PDF...</p>
              </div>
            </div>
          )}

          {/* Error/Fallback State */}
          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
              <div className="flex flex-col items-center gap-4 max-w-md text-center px-6">
                <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
                  <AlertCircle className="w-8 h-8 text-destructive" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Unable to Preview PDF</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Your browser may not support inline PDF viewing, or the PDF couldn't be loaded.
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-card border border-border rounded-lg hover:bg-surface-elevated transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                  <button
                    onClick={handleOpenExternal}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open in New Tab
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* PDF Iframe */}
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
            className="w-full h-full border-0"
            title={`${title} PDF Viewer`}
            onLoad={handleIframeLoad}
            onError={handleIframeError}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PDFViewerModal;
