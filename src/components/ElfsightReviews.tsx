import { useEffect } from "react";

const ElfsightReviews = () => {
  useEffect(() => {
    // Check if script already exists
    if (document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      return;
    }
    
    // Load Elfsight platform script
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

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
