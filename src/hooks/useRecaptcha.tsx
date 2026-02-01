import { useCallback, useEffect, useState, useRef } from "react";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
      // Enterprise API (optional)
      enterprise?: {
        ready: (callback: () => void) => void;
        execute: (siteKey: string, options: { action: string }) => Promise<string>;
      };
    };
    __recaptchaLoading?: boolean;
    __recaptchaLoaded?: boolean;
  }
}

// Use environment variable with fallback for development
const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "6Ld_0EEsAAAAABYi-nOJU0ciaZGNM6_d0Xk5ED8g";

/**
 * Dynamically loads the reCAPTCHA script only when this hook is used.
 * This reduces unused JS on pages that don't have forms.
 */
function loadRecaptchaScript(): Promise<void> {
  return new Promise((resolve) => {
    // Already loaded
    if (window.__recaptchaLoaded && window.grecaptcha) {
      resolve();
      return;
    }

    // Check if script is already in DOM (from previous hook mount)
    const existingScript = document.querySelector('script[src*="recaptcha/api.js"]');
    if (existingScript) {
      // Script exists, wait for it to load
      const checkLoaded = () => {
        if (window.grecaptcha && typeof window.grecaptcha.ready === 'function') {
          window.__recaptchaLoaded = true;
          resolve();
        } else {
          setTimeout(checkLoaded, 100);
        }
      };
      checkLoaded();
      return;
    }

    // Prevent duplicate loading
    if (window.__recaptchaLoading) {
      const checkLoaded = () => {
        if (window.__recaptchaLoaded) {
          resolve();
        } else {
          setTimeout(checkLoaded, 100);
        }
      };
      checkLoaded();
      return;
    }

    window.__recaptchaLoading = true;

    // Create and load script
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    script.async = true;
    
    script.onload = () => {
      // Wait for grecaptcha to be ready
      const checkReady = () => {
        if (window.grecaptcha && typeof window.grecaptcha.ready === 'function') {
          window.__recaptchaLoaded = true;
          window.__recaptchaLoading = false;
          resolve();
        } else {
          setTimeout(checkReady, 100);
        }
      };
      checkReady();
    };

    script.onerror = () => {
      window.__recaptchaLoading = false;
      console.error("useRecaptcha: Failed to load reCAPTCHA script");
      resolve(); // Resolve anyway to not block the form
    };

    document.head.appendChild(script);
  });
}

export function useRecaptcha() {
  const [isReady, setIsReady] = useState(false);
  const loadAttempted = useRef(false);

  useEffect(() => {
    let mounted = true;

    const initRecaptcha = async () => {
      // Only load once per hook instance
      if (loadAttempted.current) return;
      loadAttempted.current = true;

      await loadRecaptchaScript();

      if (!mounted) return;

      // Now check if grecaptcha is ready
      if (window.grecaptcha && typeof window.grecaptcha.ready === 'function') {
        window.grecaptcha.ready(() => {
          if (mounted) {
            console.log("useRecaptcha: grecaptcha v3 is ready");
            setIsReady(true);
          }
        });
      } else {
        console.warn("useRecaptcha: grecaptcha not available after loading");
      }
    };

    initRecaptcha();

    return () => {
      mounted = false;
    };
  }, []);

  const executeRecaptcha = useCallback(
    async (action: string): Promise<string | null> => {
      if (!isReady || !window.grecaptcha) {
        console.warn("useRecaptcha: Not ready, skipping verification");
        return null;
      }

      try {
        console.log("useRecaptcha: Executing for action:", action);
        // Use standard reCAPTCHA v3 execute
        const token = await window.grecaptcha.execute(SITE_KEY, { action });
        console.log("useRecaptcha: Token generated successfully");
        return token;
      } catch (error) {
        console.error("useRecaptcha: Execution error:", error);
        return null;
      }
    },
    [isReady]
  );

  return { executeRecaptcha, isReady };
}
