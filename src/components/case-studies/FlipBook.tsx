import { useRef, useState, forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";

interface PageProps {
  number: number;
  image: string;
}

const Page = forwardRef<HTMLDivElement, PageProps>(({ number, image }, ref) => {
  return (
    <div className="page bg-white shadow-lg" ref={ref}>
      <img
        src={image}
        alt={`Page ${number}`}
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
});

Page.displayName = "Page";

interface FlipBookProps {
  pages: string[];
  onClose?: () => void;
}

const FlipBook = ({ pages, onClose }: FlipBookProps) => {
  const bookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalPages = pages.length;

  const goToPrevPage = () => {
    bookRef.current?.pageFlip()?.flipPrev();
  };

  const goToNextPage = () => {
    bookRef.current?.pageFlip()?.flipNext();
  };

  const onFlip = (e: { data: number }) => {
    setCurrentPage(e.data);
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.25, 2));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.25, 0.5));
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;
    
    if (!document.fullscreenElement) {
      await containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Calculate book dimensions based on container
  const bookWidth = Math.min(400, window.innerWidth * 0.4);
  const bookHeight = bookWidth * 1.4; // Standard letter ratio

  if (pages.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-muted-foreground p-8">
        <p className="text-lg mb-4">Page images are being prepared...</p>
        <p className="text-sm">The flipbook will be available once page images are uploaded.</p>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className={`flex flex-col items-center justify-center ${isFullscreen ? 'bg-background p-8' : ''}`}
    >
      {/* Controls */}
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={handleZoomOut}
          className="p-2 rounded-lg bg-card border border-border hover:bg-surface-elevated transition-colors"
          disabled={zoom <= 0.5}
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <span className="text-sm text-muted-foreground">{Math.round(zoom * 100)}%</span>
        <button
          onClick={handleZoomIn}
          className="p-2 rounded-lg bg-card border border-border hover:bg-surface-elevated transition-colors"
          disabled={zoom >= 2}
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={toggleFullscreen}
          className="p-2 rounded-lg bg-card border border-border hover:bg-surface-elevated transition-colors"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>

      {/* Book Container */}
      <div 
        className="relative flex items-center justify-center"
        style={{ transform: `scale(${zoom})`, transformOrigin: 'center' }}
      >
        {/* Prev Button */}
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 0}
          className="absolute -left-16 z-10 p-3 rounded-full bg-card border border-border hover:bg-surface-elevated transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* FlipBook */}
        <HTMLFlipBook
          ref={bookRef}
          width={bookWidth}
          height={bookHeight}
          size="stretch"
          minWidth={300}
          maxWidth={600}
          minHeight={400}
          maxHeight={800}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={onFlip}
          className="shadow-2xl"
          style={{}}
          startPage={0}
          drawShadow={true}
          flippingTime={600}
          usePortrait={false}
          startZIndex={0}
          autoSize={true}
          maxShadowOpacity={0.5}
          showPageCorners={true}
          disableFlipByClick={false}
          swipeDistance={30}
          clickEventForward={true}
          useMouseEvents={true}
        >
          {pages.map((page, index) => (
            <Page key={index} number={index + 1} image={page} />
          ))}
        </HTMLFlipBook>

        {/* Next Button */}
        <button
          onClick={goToNextPage}
          disabled={currentPage >= totalPages - 1}
          className="absolute -right-16 z-10 p-3 rounded-full bg-card border border-border hover:bg-surface-elevated transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Page Indicator */}
      <div className="mt-6 text-sm text-muted-foreground">
        Page {currentPage + 1} of {totalPages}
      </div>
    </div>
  );
};

export default FlipBook;
