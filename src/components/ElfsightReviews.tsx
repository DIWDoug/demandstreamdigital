import { useEffect } from "react";

const ElfsightReviews = () => {
  useEffect(() => {
    // Load Elfsight platform script
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div 
        className="elfsight-app-1c4b2157-22d1-4da5-92c1-80d5a792dd69" 
        data-elfsight-app-lazy
      />
    </div>
  );
};

export default ElfsightReviews;
