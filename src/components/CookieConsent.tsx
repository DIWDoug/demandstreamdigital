import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

const COOKIE_CONSENT_KEY = "cookie-consent";

type ConsentStatus = "accepted" | "rejected" | null;

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY) as ConsentStatus;
    if (!consent) {
      // Small delay to prevent flash on page load
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setShowBanner(false);
    // Enable analytics/tracking here if needed
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
    setShowBanner(false);
    // Disable non-essential cookies here if needed
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[70] p-4 md:p-6 animate-in slide-in-from-bottom-5 duration-500">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-surface-dark/95 backdrop-blur-lg border border-border rounded-2xl p-5 md:p-6 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center">
            {/* Icon & Text */}
            <div className="flex gap-4 flex-1">
              <div className="shrink-0 w-10 h-10 rounded-full bg-cta/10 flex items-center justify-center">
                <Cookie className="h-5 w-5 text-cta" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  We value your privacy
                </h3>
                <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                  We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                  By clicking "Accept All", you consent to our use of cookies. Read our{" "}
                  <Link to="/privacy" className="text-accent-blue hover:underline">
                    Privacy Policy
                  </Link>{" "}
                  to learn more.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 w-full md:w-auto shrink-0">
              <Button
                variant="outline"
                size="sm"
                onClick={handleReject}
                className="flex-1 md:flex-none text-xs border-border hover:bg-surface-dark"
              >
                Reject All
              </Button>
              <Button
                size="sm"
                onClick={handleAccept}
                className="flex-1 md:flex-none text-xs bg-cta hover:bg-cta/90 text-cta-foreground"
              >
                Accept All
              </Button>
            </div>

            {/* Close button (mobile) */}
            <button
              onClick={handleReject}
              className="absolute top-3 right-3 md:hidden p-1 text-text-muted hover:text-foreground transition-colors"
              aria-label="Close cookie banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
