import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import ROICalculator from "./pages/ROICalculator";
import InvestmentCalculator from "./pages/InvestmentCalculator";
import AdBudgetCalculator from "./pages/AdBudgetCalculator";
import SEOCalculator from "./pages/SEOCalculator";
import EmailCalculator from "./pages/EmailCalculator";
import ContentMarketingCalculator from "./pages/ContentMarketingCalculator";
import AIReadinessCalculator from "./pages/AIReadinessCalculator";
import AIReadyCheck from "./pages/AIReadyCheck";
import PartnerTools from "./pages/PartnerTools";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import { useKonamiCode } from "./hooks/useKonamiCode";

// Service Hub Pages
import LocalSEO from "./pages/services/LocalSEO";
import GoogleMaps from "./pages/services/GoogleMaps";
import PaidMedia from "./pages/services/PaidMedia";
import EmailMarketing from "./pages/services/EmailMarketing";
import Authority from "./pages/services/Authority";
import Reporting from "./pages/services/Reporting";
import SpokePage from "./pages/services/SpokePage";
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
        <ScrollToTop />
        <BackToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/white-label-inbound-marketing-services" element={<Services />} />
          <Route path="/roi-calculator" element={<ROICalculator />} />
          <Route path="/investment-calculator" element={<InvestmentCalculator />} />
          <Route path="/ad-budget-calculator" element={<AdBudgetCalculator />} />
          <Route path="/seo-calculator" element={<SEOCalculator />} />
          <Route path="/email-calculator" element={<EmailCalculator />} />
          <Route path="/content-marketing-calculator" element={<ContentMarketingCalculator />} />
          <Route path="/ai-readiness-calculator" element={<AIReadinessCalculator />} />
          <Route path="/ai-ready-check" element={<AIReadyCheck />} />
          <Route path="/partner-tools" element={<PartnerTools />} />
          {/* Legacy redirect */}
          <Route path="/agency-calculator" element={<Navigate to="/roi-calculator" replace />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Service Hub Pages */}
          <Route path="/white-label-inbound-marketing-services/local-seo" element={<LocalSEO />} />
          <Route path="/white-label-inbound-marketing-services/google-maps" element={<GoogleMaps />} />
          <Route path="/white-label-inbound-marketing-services/paid-media" element={<PaidMedia />} />
          <Route path="/white-label-inbound-marketing-services/email-marketing" element={<EmailMarketing />} />
          <Route path="/white-label-inbound-marketing-services/local-authority-building" element={<Authority />} />
          <Route path="/white-label-inbound-marketing-services/reporting" element={<Reporting />} />
          
          {/* Service Spoke Pages (sub-services) */}
          <Route path="/white-label-inbound-marketing-services/:hubSlug/:spokeSlug" element={<SpokePage />} />
          
          {/* Legacy /services redirects for SEO preservation */}
          <Route path="/services" element={<Navigate to="/white-label-inbound-marketing-services" replace />} />
          <Route path="/services/local-seo" element={<Navigate to="/white-label-inbound-marketing-services/local-seo" replace />} />
          <Route path="/services/google-maps" element={<Navigate to="/white-label-inbound-marketing-services/google-maps" replace />} />
          <Route path="/services/paid-media" element={<Navigate to="/white-label-inbound-marketing-services/paid-media" replace />} />
          <Route path="/services/email-marketing" element={<Navigate to="/white-label-inbound-marketing-services/email-marketing" replace />} />
          <Route path="/services/local-authority-building" element={<Navigate to="/white-label-inbound-marketing-services/local-authority-building" replace />} />
          <Route path="/services/reporting" element={<Navigate to="/white-label-inbound-marketing-services/reporting" replace />} />
          <Route path="/services/:hubSlug/:spokeSlug" element={<LegacySpokeRedirect />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

// Helper component for dynamic spoke redirects
const LegacySpokeRedirect = () => {
  const params = window.location.pathname.match(/\/services\/([^/]+)\/([^/]+)/);
  if (params) {
    return <Navigate to={`/white-label-inbound-marketing-services/${params[1]}/${params[2]}`} replace />;
  }
  return <Navigate to="/white-label-inbound-marketing-services" replace />;
};

export default App;
