import { useCallback, useEffect, useState } from "react";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
      render: (container: string | HTMLElement, options: { sitekey: string; size: string }) => number;
    };
  }
}

const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

export function useRecaptcha() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!SITE_KEY) {
      console.warn("reCAPTCHA site key not configured");
      setIsReady(true); // Allow form submission without reCAPTCHA if not configured
      return;
    }

    const checkReady = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          setIsReady(true);
        });
      } else {
        // Retry after a short delay if grecaptcha isn't loaded yet
        setTimeout(checkReady, 100);
      }
    };

    checkReady();
  }, []);

  const executeRecaptcha = useCallback(
    async (action: string): Promise<string | null> => {
      if (!SITE_KEY) {
        console.warn("reCAPTCHA site key not configured, skipping verification");
        return null;
      }

      if (!isReady || !window.grecaptcha) {
        console.warn("reCAPTCHA not ready");
        return null;
      }

      try {
        const token = await window.grecaptcha.execute(SITE_KEY, { action });
        return token;
      } catch (error) {
        console.error("reCAPTCHA execution error:", error);
        return null;
      }
    },
    [isReady]
  );

  return { executeRecaptcha, isReady };
}
