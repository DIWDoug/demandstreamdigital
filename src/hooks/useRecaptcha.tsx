import { useCallback, useState, useRef } from "react";

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
 * Dynamically loads the reCAPTCHA script only when needed.
 * This reduces unused JS on pages that don't have forms or haven't interacted with them.
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
      // Silently fail - reCAPTCHA is non-critical
      resolve();
    };

    document.head.appendChild(script);
  });
}

/**
 * useRecaptcha hook with lazy loading.
 * 
 * The reCAPTCHA script is NOT loaded on mount. Instead, call `initRecaptcha()` 
 * when the user interacts with a form (e.g., on focus) to defer loading.
 * 
 * This reduces TTI by ~365KB on pages where forms exist but haven't been used.
 */
export function useRecaptcha() {
  const [isReady, setIsReady] = useState(false);
  const initAttempted = useRef(false);

  /**
   * Call this to start loading reCAPTCHA (e.g., on input focus).
   * Safe to call multiple times - will only load once.
   */
  const initRecaptcha = useCallback(async () => {
    if (initAttempted.current) return;
    initAttempted.current = true;

    await loadRecaptchaScript();

    if (window.grecaptcha && typeof window.grecaptcha.ready === 'function') {
      window.grecaptcha.ready(() => {
        setIsReady(true);
      });
    }
  }, []);

  const executeRecaptcha = useCallback(
    async (action: string): Promise<string | null> => {
      // If not ready, try to init now (fallback for forms that forgot to call initRecaptcha)
      if (!isReady) {
        await initRecaptcha();
        // Wait a bit for ready state
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      if (!window.grecaptcha) {
        // reCAPTCHA failed to load - proceed without it
        return null;
      }

      try {
        const token = await window.grecaptcha.execute(SITE_KEY, { action });
        return token;
      } catch {
        return null;
      }
    },
    [isReady, initRecaptcha]
  );

  return { executeRecaptcha, isReady, initRecaptcha };
}
