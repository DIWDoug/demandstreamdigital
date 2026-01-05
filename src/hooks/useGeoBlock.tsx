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

// proxycheck.io API key (optional - works without key but with lower limits)
const PROXYCHECK_API_KEY = import.meta.env.VITE_PROXYCHECK_API_KEY;

interface ProxycheckResponse {
  status: string;
  [ip: string]: {
    proxy: string;
    type?: string;
    provider?: string;
    country?: string;
    isocode?: string;
    continent?: string;
  } | string;
}

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

    // Perform geo and VPN check
    const checkAccess = async () => {
      try {
        // First, get IP and geo data from ipapi.co
        const geoResponse = await fetch("https://ipapi.co/json/", {
          signal: AbortSignal.timeout(5000),
        });
        
        if (!geoResponse.ok) {
          throw new Error("Geo lookup failed");
        }
        
        const geoData = await geoResponse.json();
        const countryCode = geoData.country_code;
        const continentCode = geoData.continent_code;
        const userIP = geoData.ip;
        
        console.log("Geo check result:", { country: countryCode, continent: continentCode, ip: userIP });
        
        // Check if explicitly blocked first (overrides continent)
        if (BLOCKED_COUNTRIES.includes(countryCode)) {
          console.log("Country explicitly blocked:", countryCode);
          sessionStorage.setItem("geo_checked", "true");
          sessionStorage.setItem("geo_blocked", "true");
          setIsBlocked(true);
          navigate("/region-blocked", { replace: true });
          return;
        }
        
        // Check if continent is allowed
        if (!ALLOWED_CONTINENTS.includes(continentCode)) {
          console.log("Continent not in allowlist:", continentCode);
          sessionStorage.setItem("geo_checked", "true");
          sessionStorage.setItem("geo_blocked", "true");
          setIsBlocked(true);
          navigate("/region-blocked", { replace: true });
          return;
        }
        
        // VPN/Proxy detection using proxycheck.io
        if (userIP) {
          try {
            const proxycheckUrl = PROXYCHECK_API_KEY
              ? `https://proxycheck.io/v2/${userIP}?key=${PROXYCHECK_API_KEY}&vpn=1&asn=1`
              : `https://proxycheck.io/v2/${userIP}?vpn=1`;
            
            const vpnResponse = await fetch(proxycheckUrl, {
              signal: AbortSignal.timeout(5000),
            });
            
            if (vpnResponse.ok) {
              const vpnData: ProxycheckResponse = await vpnResponse.json();
              
              if (vpnData.status === "ok") {
                const ipData = vpnData[userIP];
                
                if (ipData && typeof ipData === "object" && ipData.proxy === "yes") {
                  console.log("VPN/Proxy detected:", {
                    type: ipData.type,
                    provider: ipData.provider,
                  });
                  sessionStorage.setItem("geo_checked", "true");
                  sessionStorage.setItem("geo_blocked", "true");
                  setIsBlocked(true);
                  navigate("/region-blocked", { replace: true });
                  return;
                }
              }
            }
          } catch (vpnError) {
            console.error("VPN check error (allowing access):", vpnError);
            // Continue without VPN check if it fails
          }
        }
        
        // All checks passed - allow access
        console.log("Access allowed for:", { country: countryCode, continent: continentCode });
        sessionStorage.setItem("geo_checked", "true");
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

    checkAccess();
  }, [location.pathname, navigate]);

  return { isChecking, isBlocked };
}
