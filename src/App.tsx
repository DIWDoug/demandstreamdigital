// Cache bust: 2026-02-22T10:00
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";

import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import ElfsightReviews from "./components/ElfsightReviews";
import SilentErrorBoundary from "./components/SilentErrorBoundary";
import CookieConsent from "./components/CookieConsent";
import RouteLoadingFallback from "./components/RouteLoadingFallback";
import { useKonamiCode } from "./hooks/useKonamiCode";
import { useGeoBlock } from "./hooks/useGeoBlock";

// Lazy loaded pages
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ROICalculator = lazy(() => import("./pages/ROICalculator"));
const InvestmentCalculator = lazy(() => import("./pages/InvestmentCalculator"));
const AdBudgetCalculator = lazy(() => import("./pages/AdBudgetCalculator"));
const SEOCalculator = lazy(() => import("./pages/SEOCalculator"));
const EmailCalculator = lazy(() => import("./pages/EmailCalculator"));
const ContentMarketingCalculator = lazy(() => import("./pages/ContentMarketingCalculator"));
const SocialMediaROICalculator = lazy(() => import("./pages/SocialMediaROICalculator"));
const AIReadyCheck = lazy(() => import("./pages/AIReadyCheck"));
const PartnerTools = lazy(() => import("./pages/PartnerTools"));
const About = lazy(() => import("./pages/About"));
const BlogIndex = lazy(() => import("./pages/BlogIndex"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const OurBlog = lazy(() => import("./pages/OurBlog"));
const Contact = lazy(() => import("./pages/Contact"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const RegionBlocked = lazy(() => import("./pages/RegionBlocked"));
const Author = lazy(() => import("./pages/Author"));

// Listicle Pages
const BestPlumbingSEOCompanies = lazy(() => import("./pages/BestPlumbingSEOCompanies"));
const BestPlumbingPPCCompanies = lazy(() => import("./pages/BestPlumbingPPCCompanies"));
const BestHVACSEOCompanies = lazy(() => import("./pages/BestHVACSEOCompanies"));
const BestHVACPPCCompanies = lazy(() => import("./pages/BestHVACPPCCompanies"));
const BestGoogleAdsCompaniesForPlumbers = lazy(() => import("./pages/BestGoogleAdsCompaniesForPlumbers"));
const BestContentMarketingForHVAC = lazy(() => import("./pages/BestContentMarketingForHVAC"));
const BestContentMarketingForPlumbers = lazy(() => import("./pages/BestContentMarketingForPlumbers"));
const BestGoogleAdsCompaniesForHVAC = lazy(() => import("./pages/BestGoogleAdsCompaniesForHVAC"));

// Service Hub Pages
const LocalSEO = lazy(() => import("./pages/services/LocalSEO"));
const HVACFacebookAdvertising = lazy(() => import("./pages/services/HVACFacebookAdvertising"));
const HVACInstagramAdvertising = lazy(() => import("./pages/services/HVACInstagramAdvertising"));
const HVACLinkedInAdvertising = lazy(() => import("./pages/services/HVACLinkedInAdvertising"));
const PlumbingFacebookAdvertising = lazy(() => import("./pages/services/PlumbingFacebookAdvertising"));
const PlumbingInstagramAdvertising = lazy(() => import("./pages/services/PlumbingInstagramAdvertising"));
const PlumbingLinkedInAdvertising = lazy(() => import("./pages/services/PlumbingLinkedInAdvertising"));
const PlumbingProgrammaticAdvertising = lazy(() => import("./pages/services/PlumbingProgrammaticAdvertising"));
const HVACSearchAds = lazy(() => import("./pages/services/HVACSearchAds"));
const LSAHub = lazy(() => import("./pages/services/LSAHub"));
const PlumbingLSA = lazy(() => import("./pages/services/PlumbingLSA"));
const HVACLSA = lazy(() => import("./pages/services/HVACLSA"));
const PlumbingSearchAds = lazy(() => import("./pages/services/PlumbingSearchAds"));
const PlumbingSEO = lazy(() => import("./pages/services/PlumbingSEO"));
const HVACSEO = lazy(() => import("./pages/services/HVACSEO"));
const PaidAdvertising = lazy(() => import("./pages/services/PaidAdvertising"));
const PlumbingPaidAdvertising = lazy(() => import("./pages/services/PlumbingPaidAdvertising"));
const HVACPaidAdvertising = lazy(() => import("./pages/services/HVACPaidAdvertising"));
const GoogleMaps = lazy(() => import("./pages/services/GoogleMaps"));
const HVACGoogleMaps = lazy(() => import("./pages/services/HVACGoogleMaps"));
const HVACEmailMarketing = lazy(() => import("./pages/services/HVACEmailMarketing"));
const HVACContentMarketing = lazy(() => import("./pages/services/HVACContentMarketing"));
const HVACReporting = lazy(() => import("./pages/services/HVACReporting"));
const EmailMarketing = lazy(() => import("./pages/services/EmailMarketing"));
const PlumbingEmailMarketing = lazy(() => import("./pages/services/PlumbingEmailMarketing"));
const Authority = lazy(() => import("./pages/services/Authority"));
const Reporting = lazy(() => import("./pages/services/Reporting"));
const PlumbingReporting = lazy(() => import("./pages/services/PlumbingReporting"));
const PlumbingGoogleMaps = lazy(() => import("./pages/services/PlumbingGoogleMaps"));
const ContentMarketing = lazy(() => import("./pages/services/ContentMarketing"));
const PlumbingContentMarketing = lazy(() => import("./pages/services/PlumbingContentMarketing"));
const WebDesign = lazy(() => import("./pages/services/WebDesign"));
const WebDesignHub = lazy(() => import("./pages/services/WebDesignHub"));
const PlumbingWebsiteDesign = lazy(() => import("./pages/services/PlumbingWebsiteDesign"));
const HVACWebsiteDesign = lazy(() => import("./pages/services/HVACWebsiteDesign"));
const AIAutomation = lazy(() => import("./pages/services/AIAutomation"));

// Interactive Tools
const JobCostEstimator = lazy(() => import("./pages/tools/JobCostEstimator"));
const FinancingCalculator = lazy(() => import("./pages/tools/FinancingCalculator"));
const PlumbingCostQuiz = lazy(() => import("./pages/tools/PlumbingCostQuiz"));
const FreeAudit = lazy(() => import("./pages/FreeAudit"));

const queryClient = new QueryClient();

const KonamiCodeListener = () => {
  useKonamiCode();
  return null;
};

const GeoBlockListener = () => {
  useGeoBlock();
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ErrorBoundary>
        <KonamiCodeListener />
        <GeoBlockListener />
        <Toaster />
        <Sonner />
        <ScrollToTop />
        <BackToTop />
        <SilentErrorBoundary>
          <ElfsightReviews />
        </SilentErrorBoundary>
        <CookieConsent />
        <Suspense fallback={<RouteLoadingFallback />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/authors/:slug" element={<Author />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog-old" element={<Navigate to="/blog" replace />} />
          <Route path="/blog/white-label-local-ppc" element={<Navigate to="/plumbing-paid-advertising" replace />} />
          <Route path="/our-blog" element={<OurBlog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/partner-tools" element={<PartnerTools />} />
          <Route path="/partner-tools/roi-calculator" element={<ROICalculator />} />
          <Route path="/partner-tools/investment-calculator" element={<InvestmentCalculator />} />
          <Route path="/partner-tools/ad-budget-calculator" element={<AdBudgetCalculator />} />
          <Route path="/partner-tools/seo-calculator" element={<SEOCalculator />} />
          <Route path="/partner-tools/email-calculator" element={<EmailCalculator />} />
          <Route path="/partner-tools/content-marketing-calculator" element={<ContentMarketingCalculator />} />
          <Route path="/partner-tools/social-media-roi-calculator" element={<SocialMediaROICalculator />} />
          <Route path="/partner-tools/ai-ready-check" element={<AIReadyCheck />} />

          {/* Interactive Homeowner Tools */}
          <Route path="/tools/job-cost-estimator" element={<JobCostEstimator />} />
          <Route path="/tools/financing-calculator" element={<FinancingCalculator />} />
          <Route path="/tools/plumbing-cost-quiz" element={<PlumbingCostQuiz />} />
          <Route path="/free-audit" element={<FreeAudit />} />

          {/* Legacy calculator redirects */}
          <Route path="/roi-calculator" element={<Navigate to="/partner-tools/roi-calculator" replace />} />
          <Route path="/investment-calculator" element={<Navigate to="/partner-tools/investment-calculator" replace />} />
          <Route path="/ad-budget-calculator" element={<Navigate to="/partner-tools/ad-budget-calculator" replace />} />
          <Route path="/seo-calculator" element={<Navigate to="/partner-tools/seo-calculator" replace />} />
          <Route path="/email-calculator" element={<Navigate to="/partner-tools/email-calculator" replace />} />
          <Route path="/content-marketing-calculator" element={<Navigate to="/partner-tools/content-marketing-calculator" replace />} />
          <Route path="/ai-ready-check" element={<Navigate to="/partner-tools/ai-ready-check" replace />} />
          <Route path="/agency-calculator" element={<Navigate to="/partner-tools/roi-calculator" replace />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/region-blocked" element={<RegionBlocked />} />

          {/* ============ LISTICLE PAGES ============ */}
          <Route path="/best-plumbing-seo-companies" element={<BestPlumbingSEOCompanies />} />
          <Route path="/best-plumbing-ppc-companies" element={<BestPlumbingPPCCompanies />} />
          <Route path="/best-hvac-seo-companies" element={<BestHVACSEOCompanies />} />
          <Route path="/best-hvac-seo-agencies" element={<Navigate to="/best-hvac-seo-companies" replace />} />
          <Route path="/best-plumbing-seo-agencies" element={<Navigate to="/best-plumbing-seo-companies" replace />} />
          <Route path="/best-hvac-ppc-companies" element={<BestHVACPPCCompanies />} />
          <Route path="/best-google-ads-companies-for-plumbers" element={<BestGoogleAdsCompaniesForPlumbers />} />
          <Route path="/best-content-marketing-for-hvac" element={<BestContentMarketingForHVAC />} />
          <Route path="/best-content-marketing-for-plumbers" element={<BestContentMarketingForPlumbers />} />
          <Route path="/best-google-ads-companies-for-hvac" element={<BestGoogleAdsCompaniesForHVAC />} />

          {/* Legacy listicle redirects */}
          <Route path="/top-agencies/white-label-seo" element={<Navigate to="/best-plumbing-seo-companies" replace />} />
          <Route path="/top-agencies/white-label-ppc" element={<Navigate to="/best-plumbing-ppc-companies" replace />} />

          {/* ============ TRADE-SPECIFIC SERVICE PAGES ============ */}
          
          {/* Plumbing & HVAC Service Pages */}
          <Route path="/hvac-and-plumbing-seo" element={<LocalSEO />} />
          <Route path="/plumbing-seo" element={<PlumbingSEO />} />
          <Route path="/plumbing-google-maps" element={<PlumbingGoogleMaps />} />
          <Route path="/plumbing-paid-advertising" element={<PlumbingPaidAdvertising />} />
          <Route path="/plumbing-paid-advertising/" element={<Navigate to="/plumbing-paid-advertising" replace />} />
          <Route path="/plumbing-email-marketing" element={<PlumbingEmailMarketing />} />
          <Route path="/plumbing-hvac-content-marketing" element={<ContentMarketing />} />
          <Route path="/plumbing-hvac-content-marketing/" element={<ContentMarketing />} />
          <Route path="/plumbing-content-marketing" element={<PlumbingContentMarketing />} />
          <Route path="/plumbing-content-marketing/" element={<PlumbingContentMarketing />} />
          <Route path="/plumbing-authority-building" element={<Authority />} />
          <Route path="/plumbing-reporting" element={<PlumbingReporting />} />

          {/* Paid Advertising Hub */}
          <Route path="/hvac-and-plumbing-paid-ads" element={<PaidAdvertising />} />
          <Route path="/paid-advertising" element={<Navigate to="/hvac-and-plumbing-paid-ads" replace />} />
          <Route path="/paid-advertising/" element={<Navigate to="/hvac-and-plumbing-paid-ads" replace />} />

          {/* Plumbing Channel Spoke Pages */}
          <Route path="/plumbing-facebook-advertising" element={<PlumbingFacebookAdvertising />} />
          <Route path="/plumbing-facebook-advertising/" element={<PlumbingFacebookAdvertising />} />
          <Route path="/plumbing-instagram-advertising" element={<PlumbingInstagramAdvertising />} />
          <Route path="/plumbing-instagram-advertising/" element={<PlumbingInstagramAdvertising />} />
          <Route path="/plumbing-linkedin-advertising" element={<PlumbingLinkedInAdvertising />} />
          <Route path="/plumbing-linkedin-advertising/" element={<PlumbingLinkedInAdvertising />} />
          <Route path="/plumbing-programmatic-advertising" element={<PlumbingProgrammaticAdvertising />} />
          <Route path="/plumbing-programmatic-advertising/" element={<PlumbingProgrammaticAdvertising />} />

          {/* HVAC Channel Spoke Pages */}
          <Route path="/hvac-facebook-advertising" element={<HVACFacebookAdvertising />} />
          <Route path="/plumbing-and-hvac-web-design" element={<WebDesign />} />
          <Route path="/plumbing-and-hvac-web-design/" element={<WebDesign />} />
          <Route path="/website-design" element={<WebDesignHub />} />
          <Route path="/website-design/" element={<WebDesignHub />} />
          <Route path="/plumbing-website-design" element={<PlumbingWebsiteDesign />} />
          <Route path="/plumbing-website-design/" element={<PlumbingWebsiteDesign />} />
          <Route path="/hvac-website-design" element={<HVACWebsiteDesign />} />
          <Route path="/hvac-website-design/" element={<HVACWebsiteDesign />} />
          <Route path="/ai-automation" element={<AIAutomation />} />
          {/* Legacy /aio-geo → permanent redirect to /ai-automation */}
          <Route path="/aio-geo" element={<Navigate to="/ai-automation" replace />} />
          <Route path="/aio-geo/" element={<Navigate to="/ai-automation" replace />} />
          <Route path="/hvac-facebook-advertising/" element={<HVACFacebookAdvertising />} />
          <Route path="/hvac-instagram-advertising" element={<HVACInstagramAdvertising />} />
          <Route path="/hvac-instagram-advertising/" element={<HVACInstagramAdvertising />} />
          <Route path="/hvac-linkedin-advertising" element={<HVACLinkedInAdvertising />} />
          <Route path="/hvac-linkedin-advertising/" element={<HVACLinkedInAdvertising />} />

          {/* LSA Pages */}
          <Route path="/plumbing-hvac-local-service-ads" element={<LSAHub />} />
          <Route path="/plumbing-local-service-ads" element={<PlumbingLSA />} />
          <Route path="/hvac-local-service-ads" element={<HVACLSA />} />
          {/* Legacy white-label LSA redirect updated to hub */}

          {/* Search Ads Spoke Pages */}
          <Route path="/hvac-search-ads" element={<HVACSearchAds />} />
          <Route path="/hvac-search-ads/" element={<HVACSearchAds />} />
          <Route path="/plumbing-search-ads" element={<PlumbingSearchAds />} />
          <Route path="/plumbing-search-ads/" element={<PlumbingSearchAds />} />
          {/* Legacy search ads redirects */}
          <Route path="/hvac-search-advertising" element={<Navigate to="/hvac-search-ads" replace />} />
          <Route path="/hvac-search-advertising/" element={<Navigate to="/hvac-search-ads" replace />} />
          <Route path="/plumbing-search-advertising" element={<Navigate to="/plumbing-search-ads" replace />} />
          <Route path="/plumbing-search-advertising/" element={<Navigate to="/plumbing-search-ads" replace />} />

          {/* HVAC Service Pages */}
          <Route path="/hvac-seo" element={<HVACSEO />} />
          <Route path="/hvac-google-maps" element={<HVACGoogleMaps />} />
          <Route path="/hvac-paid-advertising" element={<HVACPaidAdvertising />} />
          <Route path="/hvac-paid-advertising/" element={<Navigate to="/hvac-paid-advertising" replace />} />
          <Route path="/hvac-email-marketing" element={<HVACEmailMarketing />} />
          <Route path="/hvac-content-marketing" element={<HVACContentMarketing />} />
          <Route path="/hvac-authority-building" element={<Authority />} />
          <Route path="/hvac-reporting" element={<HVACReporting />} />

          {/* ============ WHITE-LABEL → TRADE-SPECIFIC REDIRECTS (kept for crawl budget) ============ */}
          <Route path="/white-label-local-seo" element={<Navigate to="/hvac-and-plumbing-seo" replace />} />
          <Route path="/white-label-gbp-seo" element={<Navigate to="/plumbing-google-maps" replace />} />
          <Route path="/white-label-paid-media" element={<Navigate to="/plumbing-paid-advertising" replace />} />
          <Route path="/white-label-email-marketing" element={<Navigate to="/plumbing-email-marketing" replace />} />
          <Route path="/white-label-local-authority-building" element={<Navigate to="/plumbing-authority-building" replace />} />
          <Route path="/white-label-reporting" element={<Navigate to="/plumbing-reporting" replace />} />
          <Route path="/white-label-content-marketing" element={<Navigate to="/plumbing-content-marketing" replace />} />
          <Route path="/white-label-google-ads" element={<Navigate to="/plumbing-paid-advertising" replace />} />
          <Route path="/white-label-meta-ads" element={<Navigate to="/plumbing-paid-advertising" replace />} />
          <Route path="/white-label-local-service-ads" element={<Navigate to="/plumbing-hvac-local-service-ads" replace />} />
          <Route path="/white-label-retargeting-campaigns" element={<Navigate to="/plumbing-paid-advertising" replace />} />
          <Route path="/white-label-landing-page-design" element={<Navigate to="/plumbing-paid-advertising" replace />} />
          <Route path="/white-label-conversion-tracking" element={<Navigate to="/plumbing-paid-advertising" replace />} />
          <Route path="/white-label-onpage-optimization" element={<Navigate to="/hvac-and-plumbing-seo" replace />} />
          <Route path="/white-label-technical-seo" element={<Navigate to="/hvac-and-plumbing-seo" replace />} />
          <Route path="/white-label-local-keyword-strategy" element={<Navigate to="/hvac-and-plumbing-seo" replace />} />
          <Route path="/white-label-content-development" element={<Navigate to="/hvac-and-plumbing-seo" replace />} />
          <Route path="/white-label-link-building" element={<Navigate to="/hvac-and-plumbing-seo" replace />} />
          <Route path="/white-label-schema-markup" element={<Navigate to="/hvac-and-plumbing-seo" replace />} />
          <Route path="/white-label-nap-citations" element={<Navigate to="/hvac-and-plumbing-seo" replace />} />
          <Route path="/white-label-topical-content" element={<Navigate to="/plumbing-content-marketing" replace />} />
          <Route path="/white-label-local-links" element={<Navigate to="/plumbing-authority-building" replace />} />
          <Route path="/white-label-dashboards" element={<Navigate to="/plumbing-reporting" replace />} />


          {/* Legacy /services redirects */}
          <Route path="/services" element={<Navigate to="/#services" replace />} />
          <Route path="/services/" element={<Navigate to="/#services" replace />} />
          <Route path="/services/local-seo" element={<Navigate to="/hvac-and-plumbing-seo" replace />} />
          <Route path="/services/google-maps" element={<Navigate to="/plumbing-google-maps" replace />} />
          <Route path="/white-label-google-maps-local-seo" element={<Navigate to="/plumbing-google-maps" replace />} />
          <Route path="/white-label-google-maps" element={<Navigate to="/plumbing-google-maps" replace />} />
          <Route path="/services/paid-media" element={<Navigate to="/plumbing-paid-advertising" replace />} />
          <Route path="/services/email-marketing" element={<Navigate to="/plumbing-email-marketing" replace />} />
          <Route path="/services/local-authority-building" element={<Navigate to="/plumbing-authority-building" replace />} />
          <Route path="/services/reporting" element={<Navigate to="/plumbing-reporting" replace />} />
          <Route path="/services/:hubSlug/:spokeSlug" element={<LegacySpokeRedirect />} />

          {/* Legacy site URL redirects */}
          <Route path="/search-engine-optimization" element={<Navigate to="/hvac-and-plumbing-seo" replace />} />
          <Route path="/search-engine-optimization/" element={<Navigate to="/hvac-and-plumbing-seo" replace />} />
          <Route path="/dallas-digital-marketing" element={<Navigate to="/" replace />} />
          <Route path="/dallas-digital-marketing/" element={<Navigate to="/" replace />} />
          <Route path="/moving-and-storage-seo" element={<Navigate to="/hvac-and-plumbing-seo" replace />} />
          <Route path="/moving-and-storage-seo/" element={<Navigate to="/hvac-and-plumbing-seo" replace />} />
          <Route path="/small-business-social-advertising" element={<Navigate to="/plumbing-paid-advertising" replace />} />
          <Route path="/small-business-social-advertising/" element={<Navigate to="/plumbing-paid-advertising" replace />} />
          <Route path="/white-label-seo-campaigns" element={<Navigate to="/hvac-and-plumbing-seo" replace />} />
          <Route path="/white-label-seo-campaigns/" element={<Navigate to="/hvac-and-plumbing-seo" replace />} />
          <Route path="/shopify-seo-services" element={<Navigate to="/hvac-and-plumbing-seo" replace />} />
          <Route path="/shopify-seo-services/" element={<Navigate to="/hvac-and-plumbing-seo" replace />} />
          <Route path="/about-us" element={<Navigate to="/about" replace />} />
          <Route path="/about-us/" element={<Navigate to="/about" replace />} />
          <Route path="/advanced-local-seo-services" element={<Navigate to="/hvac-and-plumbing-seo" replace />} />
          <Route path="/advanced-local-seo-services/" element={<Navigate to="/hvac-and-plumbing-seo" replace />} />
          <Route path="/orthodontist-seo" element={<Navigate to="/hvac-and-plumbing-seo" replace />} />
          <Route path="/orthodontist-seo/" element={<Navigate to="/hvac-and-plumbing-seo" replace />} />
          <Route path="/online-reputation-management-small-businesses" element={<Navigate to="/plumbing-google-maps" replace />} />
          <Route path="/online-reputation-management-small-businesses/" element={<Navigate to="/plumbing-google-maps" replace />} />
          <Route path="/dentist-seo-company" element={<Navigate to="/hvac-and-plumbing-seo" replace />} />
          <Route path="/dentist-seo-company/" element={<Navigate to="/hvac-and-plumbing-seo" replace />} />
          <Route path="/local-seo-company" element={<Navigate to="/hvac-and-plumbing-seo" replace />} />
          <Route path="/local-seo-company/" element={<Navigate to="/hvac-and-plumbing-seo" replace />} />
          <Route path="/dentist-digital-marketing" element={<Navigate to="/" replace />} />
          <Route path="/dentist-digital-marketing/" element={<Navigate to="/" replace />} />
          <Route path="/e-commerce-seo" element={<Navigate to="/hvac-and-plumbing-seo" replace />} />
          <Route path="/e-commerce-seo/" element={<Navigate to="/hvac-and-plumbing-seo" replace />} />
          <Route path="/orthodontist-digital-marketing" element={<Navigate to="/" replace />} />
          <Route path="/orthodontist-digital-marketing/" element={<Navigate to="/" replace />} />
          <Route path="/affordable-web-design-small-business" element={<Navigate to="/" replace />} />
          <Route path="/affordable-web-design-small-business/" element={<Navigate to="/" replace />} />
          <Route path="/nashville-digital-marketing" element={<Navigate to="/" replace />} />
          <Route path="/nashville-digital-marketing/" element={<Navigate to="/" replace />} />
          <Route path="/search-engine-advertising" element={<Navigate to="/plumbing-paid-advertising" replace />} />
          <Route path="/search-engine-advertising/" element={<Navigate to="/plumbing-paid-advertising" replace />} />
          <Route path="/local-search-marketing" element={<Navigate to="/hvac-and-plumbing-seo" replace />} />
          <Route path="/local-search-marketing/" element={<Navigate to="/hvac-and-plumbing-seo" replace />} />
          <Route path="/white-label-local-ppc" element={<Navigate to="/plumbing-paid-advertising" replace />} />
          <Route path="/white-label-local-ppc/" element={<Navigate to="/plumbing-paid-advertising" replace />} />
          <Route path="/white-label-social-media" element={<Navigate to="/blog/white-label-social-media" replace />} />
          <Route path="/white-label-social-media/" element={<Navigate to="/blog/white-label-social-media" replace />} />
          <Route path="/white-label-local-seo-on-page-optimization-local-seo" element={<Navigate to="/blog/on-page-optimization-local-seo" replace />} />
          <Route path="/white-label-local-seo-on-page-optimization-local-seo/" element={<Navigate to="/blog/on-page-optimization-local-seo" replace />} />

          {/* Legacy blog post redirects → /blog */}
          <Route path="/white-label-seo-for-agencies-checklist" element={<Navigate to="/blog/white-label-seo-for-agencies-checklist" replace />} />
          <Route path="/white-label-seo-for-agencies-checklist/" element={<Navigate to="/blog/white-label-seo-for-agencies-checklist" replace />} />
          <Route path="/what-kinds-of-businesses-should-use-ppc-advertising" element={<Navigate to="/blog" replace />} />
          <Route path="/what-kinds-of-businesses-should-use-ppc-advertising/" element={<Navigate to="/blog" replace />} />
          <Route path="/five-ways-an-seo-consultant-can-help-your-business-grow" element={<Navigate to="/blog" replace />} />
          <Route path="/five-ways-an-seo-consultant-can-help-your-business-grow/" element={<Navigate to="/blog" replace />} />
          <Route path="/emd-local-business-sites" element={<Navigate to="/blog" replace />} />
          <Route path="/emd-local-business-sites/" element={<Navigate to="/blog" replace />} />
          <Route path="/ten-ppc-tools-to-take-your-advertising-game-to-the-next-level" element={<Navigate to="/blog" replace />} />
          <Route path="/ten-ppc-tools-to-take-your-advertising-game-to-the-next-level/" element={<Navigate to="/blog" replace />} />
          <Route path="/how-to-build-a-strong-social-media-presence-as-an-sme" element={<Navigate to="/blog" replace />} />
          <Route path="/how-to-build-a-strong-social-media-presence-as-an-sme/" element={<Navigate to="/blog" replace />} />
          <Route path="/5-ways-to-effectively-engage-with-your-target-audience-using-emojis" element={<Navigate to="/blog" replace />} />
          <Route path="/5-ways-to-effectively-engage-with-your-target-audience-using-emojis/" element={<Navigate to="/blog" replace />} />
          <Route path="/visibility-for-small-online-business" element={<Navigate to="/blog" replace />} />
          <Route path="/visibility-for-small-online-business/" element={<Navigate to="/blog" replace />} />
          <Route path="/how-schema-can-make-your-search-engine-results-more-visually-appealing" element={<Navigate to="/blog" replace />} />
          <Route path="/how-schema-can-make-your-search-engine-results-more-visually-appealing/" element={<Navigate to="/blog" replace />} />
          <Route path="/amazon-ppc-101-what-you-need-to-know" element={<Navigate to="/blog" replace />} />
          <Route path="/amazon-ppc-101-what-you-need-to-know/" element={<Navigate to="/blog" replace />} />
          <Route path="/the-complete-guide-to-choosing-a-digital-marketing-agency-for-your-small-business" element={<Navigate to="/blog" replace />} />
          <Route path="/the-complete-guide-to-choosing-a-digital-marketing-agency-for-your-small-business/" element={<Navigate to="/blog" replace />} />
          <Route path="/why-local-seo-is-important-dallas" element={<Navigate to="/blog" replace />} />
          <Route path="/why-local-seo-is-important-dallas/" element={<Navigate to="/blog" replace />} />
          <Route path="/how-smes-can-compete-with-big-brands-using-local-seo" element={<Navigate to="/blog" replace />} />
          <Route path="/how-smes-can-compete-with-big-brands-using-local-seo/" element={<Navigate to="/blog" replace />} />
          <Route path="/10-hacks-to-solidify-your-business-positive-reputation-online" element={<Navigate to="/blog" replace />} />
          <Route path="/10-hacks-to-solidify-your-business-positive-reputation-online/" element={<Navigate to="/blog" replace />} />
          <Route path="/local-content-marketing-kpis-which-metrics-should-your-business-track" element={<Navigate to="/blog" replace />} />
          <Route path="/local-content-marketing-kpis-which-metrics-should-your-business-track/" element={<Navigate to="/blog" replace />} />
          <Route path="/5-ways-to-define-and-leverage-your-target-audience-on-social-media" element={<Navigate to="/blog" replace />} />
          <Route path="/5-ways-to-define-and-leverage-your-target-audience-on-social-media/" element={<Navigate to="/blog" replace />} />
          <Route path="/how-local-seo-services-help-moving-companies-on-google-maps" element={<Navigate to="/blog" replace />} />
          <Route path="/how-local-seo-services-help-moving-companies-on-google-maps/" element={<Navigate to="/blog" replace />} />
          <Route path="/domain-level-competitors-vs-page-level-competitors-where-should-you-focus-your-marketing-strategies" element={<Navigate to="/blog" replace />} />
          <Route path="/domain-level-competitors-vs-page-level-competitors-where-should-you-focus-your-marketing-strategies/" element={<Navigate to="/blog" replace />} />
          <Route path="/what-does-a-digital-marketer-do-dallas-movers" element={<Navigate to="/blog" replace />} />
          <Route path="/what-does-a-digital-marketer-do-dallas-movers/" element={<Navigate to="/blog" replace />} />
          <Route path="/benefits-of-white-label-seo-services" element={<Navigate to="/blog/benefits-of-white-label-seo-services" replace />} />
          <Route path="/benefits-of-white-label-seo-services/" element={<Navigate to="/blog/benefits-of-white-label-seo-services" replace />} />
          <Route path="/the-top-20-seo-companies-in-dallas-tx-2025-edition" element={<Navigate to="/blog" replace />} />
          <Route path="/the-top-20-seo-companies-in-dallas-tx-2025-edition/" element={<Navigate to="/blog" replace />} />
          <Route path="/what-is-white-label-digital-marketing" element={<Navigate to="/blog/what-is-white-label-digital-marketing" replace />} />
          <Route path="/what-is-white-label-digital-marketing/" element={<Navigate to="/blog/what-is-white-label-digital-marketing" replace />} />
          <Route path="/yelp-google-facebook-reviews-does-one-matter-more-than-the-other" element={<Navigate to="/blog" replace />} />
          <Route path="/yelp-google-facebook-reviews-does-one-matter-more-than-the-other/" element={<Navigate to="/blog" replace />} />
          <Route path="/eight-outstanding-ways-to-leverage-reddit-for-marketing" element={<Navigate to="/blog" replace />} />
          <Route path="/eight-outstanding-ways-to-leverage-reddit-for-marketing/" element={<Navigate to="/blog" replace />} />
          <Route path="/digital-marketing-challenges-dsos-face" element={<Navigate to="/blog" replace />} />
          <Route path="/digital-marketing-challenges-dsos-face/" element={<Navigate to="/blog" replace />} />
          <Route path="/what-is-online-presence" element={<Navigate to="/blog" replace />} />
          <Route path="/what-is-online-presence/" element={<Navigate to="/blog" replace />} />
          <Route path="/why-your-small-business-website-isnt-ranking-and-how-seo-services-can-help" element={<Navigate to="/blog" replace />} />
          <Route path="/why-your-small-business-website-isnt-ranking-and-how-seo-services-can-help/" element={<Navigate to="/blog" replace />} />
          <Route path="/social-media-agencies-white-label-support" element={<Navigate to="/blog" replace />} />
          <Route path="/social-media-agencies-white-label-support/" element={<Navigate to="/blog" replace />} />
          <Route path="/what-is-white-labeling-and-how-to-choose-a-partner" element={<Navigate to="/blog" replace />} />
          <Route path="/what-is-white-labeling-and-how-to-choose-a-partner/" element={<Navigate to="/blog" replace />} />
          <Route path="/seo-agencies-outsourcing-white-label-work" element={<Navigate to="/blog" replace />} />
          <Route path="/seo-agencies-outsourcing-white-label-work/" element={<Navigate to="/blog" replace />} />
          <Route path="/seo-and-content-strategy-for-retail-growth" element={<Navigate to="/blog" replace />} />
          <Route path="/seo-and-content-strategy-for-retail-growth/" element={<Navigate to="/blog" replace />} />
          <Route path="/google-ads-vs-facebook-ads-which-is-best-for-your-small-business" element={<Navigate to="/blog" replace />} />
          <Route path="/google-ads-vs-facebook-ads-which-is-best-for-your-small-business/" element={<Navigate to="/blog" replace />} />
          <Route path="/ten-powerful-benefits-of-social-media-marketing-every-local-business-should-know" element={<Navigate to="/blog" replace />} />
          <Route path="/ten-powerful-benefits-of-social-media-marketing-every-local-business-should-know/" element={<Navigate to="/blog" replace />} />
          <Route path="/how-a-local-seo-agency-helps-dentists-win-locally" element={<Navigate to="/blog" replace />} />
          <Route path="/how-a-local-seo-agency-helps-dentists-win-locally/" element={<Navigate to="/blog" replace />} />
          <Route path="/conversion-rate-optimization-what-you-need-to-know" element={<Navigate to="/blog" replace />} />
          <Route path="/conversion-rate-optimization-what-you-need-to-know/" element={<Navigate to="/blog" replace />} />
          <Route path="/the-essential-instagram-hashtags-for-small-businesses" element={<Navigate to="/blog" replace />} />
          <Route path="/the-essential-instagram-hashtags-for-small-businesses/" element={<Navigate to="/blog" replace />} />
          <Route path="/what-are-the-4-types-of-digital-marketing" element={<Navigate to="/blog" replace />} />
          <Route path="/what-are-the-4-types-of-digital-marketing/" element={<Navigate to="/blog" replace />} />
          <Route path="/top-25-local-business-directories-to-get-listed-on-today" element={<Navigate to="/blog" replace />} />
          <Route path="/top-25-local-business-directories-to-get-listed-on-today/" element={<Navigate to="/blog" replace />} />
          <Route path="/local-seo-for-franchises-moving-firms" element={<Navigate to="/blog" replace />} />
          <Route path="/local-seo-for-franchises-moving-firms/" element={<Navigate to="/blog" replace />} />
          <Route path="/10-questions-clinics-must-ask-ad-agencies-in-dallas-tx" element={<Navigate to="/blog" replace />} />
          <Route path="/10-questions-clinics-must-ask-ad-agencies-in-dallas-tx/" element={<Navigate to="/blog" replace />} />
          <Route path="/how-local-service-ads-have-impacted-google-ads" element={<Navigate to="/blog" replace />} />
          <Route path="/how-local-service-ads-have-impacted-google-ads/" element={<Navigate to="/blog" replace />} />
          <Route path="/understanding-lazy-loading-for-seo" element={<Navigate to="/blog" replace />} />
          <Route path="/understanding-lazy-loading-for-seo/" element={<Navigate to="/blog" replace />} />

          {/* Legacy category/tag redirects */}
          <Route path="/category/business" element={<Navigate to="/blog" replace />} />
          <Route path="/category/business/" element={<Navigate to="/blog" replace />} />
          <Route path="/category/adwords" element={<Navigate to="/blog" replace />} />
          <Route path="/category/adwords/" element={<Navigate to="/blog" replace />} />
          <Route path="/category/facebook-marketing" element={<Navigate to="/blog" replace />} />
          <Route path="/category/facebook-marketing/" element={<Navigate to="/blog" replace />} />
          <Route path="/category/services" element={<Navigate to="/#services" replace />} />
          <Route path="/category/services/" element={<Navigate to="/#services" replace />} />
          <Route path="/category/blog" element={<Navigate to="/blog" replace />} />
          <Route path="/category/blog/" element={<Navigate to="/blog" replace />} />
          <Route path="/category/digital-marketing" element={<Navigate to="/blog" replace />} />
          <Route path="/category/digital-marketing/" element={<Navigate to="/blog" replace />} />
          <Route path="/category/local-seo" element={<Navigate to="/blog" replace />} />
          <Route path="/category/local-seo/" element={<Navigate to="/blog" replace />} />
          <Route path="/category/linkedin-marketing" element={<Navigate to="/blog" replace />} />
          <Route path="/category/linkedin-marketing/" element={<Navigate to="/blog" replace />} />
          <Route path="/category/content-marketing" element={<Navigate to="/blog" replace />} />
          <Route path="/category/content-marketing/" element={<Navigate to="/blog" replace />} />
          <Route path="/category/white-label-services" element={<Navigate to="/blog" replace />} />
          <Route path="/category/white-label-services/" element={<Navigate to="/blog" replace />} />
          <Route path="/tag/internet-marketing-dallas" element={<Navigate to="/blog" replace />} />
          <Route path="/tag/internet-marketing-dallas/" element={<Navigate to="/blog" replace />} />
          <Route path="/tag/advertising-agencies-in-dallas" element={<Navigate to="/blog" replace />} />
          <Route path="/tag/advertising-agencies-in-dallas/" element={<Navigate to="/blog" replace />} />
          <Route path="/tag/custom-digital-marketing-company-in-dallas" element={<Navigate to="/blog" replace />} />
          <Route path="/tag/custom-digital-marketing-company-in-dallas/" element={<Navigate to="/blog" replace />} />
          <Route path="/tag/small-business-seo-company" element={<Navigate to="/blog" replace />} />
          <Route path="/tag/small-business-seo-company/" element={<Navigate to="/blog" replace />} />
          <Route path="/tag/dallas-seo-company" element={<Navigate to="/blog" replace />} />
          <Route path="/tag/dallas-seo-company/" element={<Navigate to="/blog" replace />} />
          <Route path="/tag/local-seo-dallas" element={<Navigate to="/blog" replace />} />
          <Route path="/tag/local-seo-dallas/" element={<Navigate to="/blog" replace />} />

          {/* Legacy portfolio/misc redirects */}
          <Route path="/portfolio/villa-in-dallas" element={<Navigate to="/testimonials" replace />} />
          <Route path="/portfolio/villa-in-dallas/" element={<Navigate to="/testimonials" replace />} />
          <Route path="/category/*" element={<Navigate to="/blog" replace />} />
          <Route path="/tag/*" element={<Navigate to="/blog" replace />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </ErrorBoundary>
    </TooltipProvider>
  </QueryClientProvider>
);

// Helper component for dynamic spoke redirects from /services/{hub}/{spoke}
const LegacySpokeRedirect = () => {
  const params = window.location.pathname.match(/\/services\/([^/]+)\/([^/]+)/);
  if (params) {
    const hubSlug = params[1];
    // Map hub slugs to new trade-specific URLs
    const hubMap: Record<string, string> = {
      'local-seo': '/hvac-and-plumbing-seo',
      'google-maps': '/plumbing-google-maps',
      'paid-media': '/plumbing-paid-advertising',
      'email-marketing': '/plumbing-email-marketing',
      'content-marketing': '/plumbing-content-marketing',
      'local-authority-building': '/plumbing-authority-building',
      'reporting': '/plumbing-reporting',
    };
    return <Navigate to={hubMap[hubSlug] || '/'} replace />;
  }
  return <Navigate to="/" replace />;
};

export default App;
