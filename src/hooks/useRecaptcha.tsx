import { useCallback, useEffect, useState } from "react";

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
  }
}

// Standard reCAPTCHA v3 site key (not Enterprise)
const SITE_KEY = "6Ld_0EEsAAAAABYi-nOJU0ciaZGNM6_d0Xk5ED8g";

export function useRecaptcha() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let mounted = true;
    let retryCount = 0;
    const maxRetries = 50; // 5 seconds max

    const checkReady = () => {
      // Check for standard reCAPTCHA v3 (not Enterprise)
      if (window.grecaptcha && typeof window.grecaptcha.ready === 'function') {
        window.grecaptcha.ready(() => {
          if (mounted) {
            console.log("useRecaptcha: grecaptcha v3 is ready");
            setIsReady(true);
          }
        });
      } else if (retryCount < maxRetries) {
        retryCount++;
        setTimeout(checkReady, 100);
      } else {
        console.warn("useRecaptcha: grecaptcha not available after max retries");
      }
    };

    checkReady();

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