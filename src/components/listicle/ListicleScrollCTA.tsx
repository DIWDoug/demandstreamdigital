import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "listicle-cta-dismissed";

const ListicleScrollCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if previously dismissed this session
    if (sessionStorage.getItem(STORAGE_KEY)) {
      setIsDismissed(true);
      return;
    }

    const handleScroll = () => {
      // Look for the top-pick card (Dialed-In Web)
      const topPickEl = document.getElementById("top-pick-dialed-in-web");
      if (!topPickEl) return;

      const rect = topPickEl.getBoundingClientRect();
      // Show popup when the user has scrolled past the bottom of the top pick card
      if (rect.bottom < 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem(STORAGE_KEY, "true");
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop for mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 z-40 sm:hidden"
            onClick={handleDismiss}
          />

          {/* Slide-in CTA */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 left-6 sm:left-auto sm:max-w-sm z-50"
          >
            <div className="relative bg-card border border-primary/20 rounded-2xl shadow-2xl shadow-primary/10 overflow-hidden">
              {/* Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/40" />

              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="absolute top-3 right-3 p-1 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                aria-label="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-5 pt-6">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                  Growth Marketing for the Trades
                </p>
                <h3 className="text-lg font-bold text-foreground mb-2 pr-6">
                  Ready to Get More Calls?
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Demand Stream Digital helps plumbing and HVAC companies grow with SEO and paid ads that actually work. Transparent pricing, no contracts.
                </p>
                <div className="flex gap-2">
                  <Button asChild size="sm" className="bg-primary hover:bg-primary/90 flex-1">
                    <Link to="/contact" className="inline-flex items-center justify-center gap-2">
                      Let's Talk
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleDismiss}
                    className="text-muted-foreground"
                  >
                    Not now
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ListicleScrollCTA;
