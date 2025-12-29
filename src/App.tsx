import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import AgencyCalculator from "./pages/AgencyCalculator";
import About from "./pages/About";
import { useKonamiCode } from "./hooks/useKonamiCode";

// Service Hub Pages
import LocalSEO from "./pages/services/LocalSEO";
import GoogleMaps from "./pages/services/GoogleMaps";
import PaidMedia from "./pages/services/PaidMedia";
import EmailMarketing from "./pages/services/EmailMarketing";
import Authority from "./pages/services/Authority";
import Reporting from "./pages/services/Reporting";

const queryClient = new QueryClient();

const KonamiCodeListener = () => {
  useKonamiCode();
  return null;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <KonamiCodeListener />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <BackToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/inbound-marketing-services" element={<Services />} />
            <Route path="/agency-calculator" element={<AgencyCalculator />} />
            
            {/* Service Hub Pages */}
            <Route path="/inbound-marketing-services/local-seo" element={<LocalSEO />} />
            <Route path="/inbound-marketing-services/google-maps" element={<GoogleMaps />} />
            <Route path="/inbound-marketing-services/paid-media" element={<PaidMedia />} />
            <Route path="/inbound-marketing-services/email-marketing" element={<EmailMarketing />} />
            <Route path="/inbound-marketing-services/authority" element={<Authority />} />
            <Route path="/inbound-marketing-services/reporting" element={<Reporting />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
