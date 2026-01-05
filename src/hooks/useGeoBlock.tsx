import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Countries explicitly blocked (overrides continent allowlist)
const BLOCKED_COUNTRIES = ["JP", "CN", "RU"];

// Allowed continents
// NA = North America (US, Canada, Mexico)
// EU = Europe
// AF = Africa
// SA = South America
// OC = Oceania (Australia, New Zealand, etc.)
const ALLOWED_CONTINENTS = ["NA", "EU", "AF", "SA", "OC"];

// Paths that should NOT trigger geo-blocking
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
        const continentCode = data.continent_code;
        
        console.log("Geo check result:", { country: countryCode, continent: continentCode });
        
        sessionStorage.setItem("geo_checked", "true");
        
        // Check if explicitly blocked first (overrides continent)
        if (BLOCKED_COUNTRIES.includes(countryCode)) {
          console.log("Country explicitly blocked:", countryCode);
          sessionStorage.setItem("geo_blocked", "true");
          setIsBlocked(true);
          navigate("/region-blocked", { replace: true });
          return;
        }
        
        // Check if continent is allowed
        if (!ALLOWED_CONTINENTS.includes(continentCode)) {
          console.log("Continent not in allowlist:", continentCode);
          sessionStorage.setItem("geo_blocked", "true");
          setIsBlocked(true);
          navigate("/region-blocked", { replace: true });
          return;
        }
        
        // Access allowed
        sessionStorage.setItem("geo_blocked", "false");
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
