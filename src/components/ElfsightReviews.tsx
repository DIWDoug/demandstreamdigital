import { useEffect, useState } from "react";

const ElfsightReviews = () => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Check if script already exists
    if (document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      return;
    }
    
    // Load Elfsight platform script
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    
    // Handle script load errors
    script.onerror = () => {
      console.warn("Elfsight script failed to load");
      setHasError(true);
    };
    
    document.body.appendChild(script);

    // Global error listener for Elfsight-specific errors
    const handleGlobalError = (event: ErrorEvent) => {
      const errorMessage = event.message?.toLowerCase() || "";
      const errorFilename = event.filename?.toLowerCase() || "";
      
      // Check for Elfsight-related errors
      if (
        errorMessage.includes("app_views_limit_reached") ||
        errorMessage.includes("elfsight") ||
        errorFilename.includes("elfsight")
      ) {
        event.preventDefault(); // Prevent error from propagating
        console.warn("Elfsight widget error detected, hiding widget");
        setHasError(true);
      }
    };

    window.addEventListener("error", handleGlobalError);

    return () => {
      window.removeEventListener("error", handleGlobalError);
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  // Don't render anything if there's an error
  if (hasError) {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-6 z-[60]">
      <div 
        className="elfsight-app-1c4b2157-22d1-4da5-92c1-80d5a792dd69" 
        data-elfsight-app-lazy
      />
    </div>
  );
};

export default ElfsightReviews;
