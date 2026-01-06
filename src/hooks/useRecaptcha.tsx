import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
      render: (container: string | HTMLElement, options: { sitekey: string; size: string }) => number;
    };
  }
}

// Cache the site key after first fetch
let cachedSiteKey: string | null = null;
let fetchPromise: Promise<string | null> | null = null;

async function fetchSiteKey(): Promise<string | null> {
  // Return cached key if available
  if (cachedSiteKey) {
    return cachedSiteKey;
  }

  // Return existing promise if fetch is in progress
  if (fetchPromise) {
    return fetchPromise;
  }

  // Start new fetch
  fetchPromise = (async () => {
    try {
      console.log("useRecaptcha: Fetching site key from backend...");
      
      // Try Supabase client first
      try {
        const { data, error } = await supabase.functions.invoke("get-public-config");
        
        if (!error && data?.recaptchaSiteKey) {
          cachedSiteKey = data.recaptchaSiteKey;
          console.log("useRecaptcha: Site key retrieved via Supabase client");
          return cachedSiteKey;
        }
        
        if (error) {
          console.warn("useRecaptcha: Supabase client error, trying direct fetch:", error.message);
        }
      } catch (clientErr) {
        console.warn("useRecaptcha: Supabase client failed, trying direct fetch:", clientErr);
      }

      // Fallback to direct fetch
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      if (supabaseUrl) {
        const response = await fetch(`${supabaseUrl}/functions/v1/get-public-config`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "apikey": import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || "",
          },
        });

        if (response.ok) {
          const data = await response.json();
          if (data?.recaptchaSiteKey) {
            cachedSiteKey = data.recaptchaSiteKey;
            console.log("useRecaptcha: Site key retrieved via direct fetch");
            return cachedSiteKey;
          }
        } else {
          console.error("useRecaptcha: Direct fetch failed:", response.status, await response.text());
        }
      }

      console.warn("useRecaptcha: Could not retrieve site key");
      return null;
    } catch (err) {
      console.error("useRecaptcha: Failed to fetch site key:", err);
      return null;
    }
  })();

  return fetchPromise;
}

function loadRecaptchaScript(siteKey: string): Promise<void> {
  return new Promise((resolve, reject) => {
    // Check if script already exists
    if (document.querySelector(`script[src*="recaptcha/api.js"]`)) {
      console.log("useRecaptcha: Script already loaded");
      resolve();
      return;
    }

    console.log("useRecaptcha: Injecting reCAPTCHA script...");
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      console.log("useRecaptcha: Script loaded successfully");
      resolve();
    };

    script.onerror = () => {
      console.error("useRecaptcha: Failed to load script");
      reject(new Error("Failed to load reCAPTCHA script"));
    };

    document.head.appendChild(script);
  });
}

export function useRecaptcha() {
  const [isReady, setIsReady] = useState(false);
  const [siteKey, setSiteKey] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const initialize = async () => {
      // Fetch site key from backend
      const key = await fetchSiteKey();
      
      if (!mounted) return;

      if (!key) {
        console.warn("useRecaptcha: Site key not configured, allowing form submission without reCAPTCHA");
        setIsReady(true);
        return;
      }

      setSiteKey(key);

      try {
        // Load the reCAPTCHA script
        await loadRecaptchaScript(key);

        if (!mounted) return;

        // Wait for grecaptcha to be ready
        const checkReady = () => {
          if (window.grecaptcha) {
            window.grecaptcha.ready(() => {
              if (mounted) {
                console.log("useRecaptcha: grecaptcha is ready");
                setIsReady(true);
              }
            });
          } else {
            // Retry after a short delay
            setTimeout(checkReady, 100);
          }
        };

        checkReady();
      } catch (err) {
        console.error("useRecaptcha: Initialization failed:", err);
        if (mounted) {
          // Allow form submission even if reCAPTCHA fails to load
          setIsReady(true);
        }
      }
    };

    initialize();

    return () => {
      mounted = false;
    };
  }, []);

  const executeRecaptcha = useCallback(
    async (action: string): Promise<string | null> => {
      if (!siteKey) {
        console.warn("useRecaptcha: Site key not configured, skipping verification");
        return null;
      }

      if (!isReady || !window.grecaptcha) {
        console.warn("useRecaptcha: Not ready, skipping verification");
        return null;
      }

      try {
        console.log("useRecaptcha: Executing for action:", action);
        const token = await window.grecaptcha.execute(siteKey, { action });
        console.log("useRecaptcha: Token generated successfully");
        return token;
      } catch (error) {
        console.error("useRecaptcha: Execution error:", error);
        return null;
      }
    },
    [isReady, siteKey]
  );

  return { executeRecaptcha, isReady };
}
