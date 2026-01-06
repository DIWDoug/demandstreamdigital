import { useCallback, useEffect, useState } from "react";

declare global {
  interface Window {
    grecaptcha: {
      enterprise: {
        ready: (callback: () => void) => void;
        execute: (siteKey: string, options: { action: string }) => Promise<string>;
      };
    };
  }
}

const SITE_KEY = "6Ld_0EEsAAAAABYi-nOJU0ciaZGNM6_d0Xk5ED8g";

export function useRecaptcha() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    const checkReady = () => {
      if (window.grecaptcha?.enterprise) {
        window.grecaptcha.enterprise.ready(() => {
          if (mounted) {
            console.log("useRecaptcha: grecaptcha.enterprise is ready");
            setIsReady(true);
          }
        });
      } else {
        // Retry after a short delay
        setTimeout(checkReady, 100);
      }
    };

    checkReady();

    return () => {
      mounted = false;
    };
  }, []);

  const executeRecaptcha = useCallback(
    async (action: string): Promise<string | null> => {
      if (!isReady || !window.grecaptcha?.enterprise) {
        console.warn("useRecaptcha: Not ready, skipping verification");
        return null;
      }

      try {
        console.log("useRecaptcha: Executing enterprise for action:", action);
        const token = await window.grecaptcha.enterprise.execute(SITE_KEY, { action });
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
