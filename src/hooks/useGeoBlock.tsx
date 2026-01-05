import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Countries to block (ISO 3166-1 alpha-2 codes)
const BLOCKED_COUNTRIES = ["JP", "CN"];

// Paths that should NOT trigger geo-blocking (e.g., the blocked page itself)
const EXCLUDED_PATHS = ["/region-blocked"];

export function useGeoBlock() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isChecking, setIsChecking] = useState(true);
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    // Skip if we're already on an excluded path
    if (EXCLUDED_PATHS.some(path => location.pathname.startsWith(path))) {
      setIsChecking(false);
      return;
    }

    // Check if we've already verified this session
    const geoChecked = sessionStorage.getItem("geo_checked");
    const geoBlocked = sessionStorage.getItem("geo_blocked");
    
    if (geoChecked === "true") {
      if (geoBlocked === "true") {
        setIsBlocked(true);
        navigate("/region-blocked", { replace: true });
      }
      setIsChecking(false);
      return;
    }

    // Perform geo check
    const checkGeo = async () => {
      try {
        // Using ipapi.co - free tier allows 1000 requests/day
        const response = await fetch("https://ipapi.co/json/", {
          signal: AbortSignal.timeout(5000), // 5 second timeout
        });
        
        if (!response.ok) {
          throw new Error("Geo lookup failed");
        }
        
        const data = await response.json();
        const countryCode = data.country_code;
        
        console.log("Geo check result:", countryCode);
        
        sessionStorage.setItem("geo_checked", "true");
        
        if (BLOCKED_COUNTRIES.includes(countryCode)) {
          sessionStorage.setItem("geo_blocked", "true");
          setIsBlocked(true);
          navigate("/region-blocked", { replace: true });
        } else {
          sessionStorage.setItem("geo_blocked", "false");
        }
      } catch (error) {
        console.error("Geo check error:", error);
        // On error, allow access (fail open)
        sessionStorage.setItem("geo_checked", "true");
        sessionStorage.setItem("geo_blocked", "false");
      } finally {
        setIsChecking(false);
      }
    };

    checkGeo();
  }, [location.pathname, navigate]);

  return { isChecking, isBlocked };
}
