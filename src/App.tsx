// Cache bust: 2026-01-08T15:10
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";

import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import ElfsightReviews from "./components/ElfsightReviews";
import CookieConsent from "./components/CookieConsent";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import ROICalculator from "./pages/ROICalculator";
import InvestmentCalculator from "./pages/InvestmentCalculator";
import AdBudgetCalculator from "./pages/AdBudgetCalculator";
import SEOCalculator from "./pages/SEOCalculator";
import EmailCalculator from "./pages/EmailCalculator";
import ContentMarketingCalculator from "./pages/ContentMarketingCalculator";
import SocialMediaROICalculator from "./pages/SocialMediaROICalculator";
import AIReadyCheck from "./pages/AIReadyCheck";
import PartnerTools from "./pages/PartnerTools";
import About from "./pages/About";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import ThankYou from "./pages/ThankYou";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import RegionBlocked from "./pages/RegionBlocked";
import { useKonamiCode } from "./hooks/useKonamiCode";
import { useGeoBlock } from "./hooks/useGeoBlock";

// Service Hub Pages
import LocalSEO from "./pages/services/LocalSEO";
import GoogleMaps from "./pages/services/GoogleMaps";
import PaidMedia from "./pages/services/PaidMedia";
import EmailMarketing from "./pages/services/EmailMarketing";
import Authority from "./pages/services/Authority";
import Reporting from "./pages/services/Reporting";
import ContentMarketing from "./pages/services/ContentMarketing";
import SpokePage from "./pages/services/SpokePage";

// Author Pages
import Author from "./pages/Author";

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
        <ElfsightReviews />
        <CookieConsent />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/authors/:slug" element={<Author />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog-old" element={<Navigate to="/blog" replace />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/white-label-inbound-marketing-services" element={<Services />} />
        <Route path="/partner-tools" element={<PartnerTools />} />
        <Route path="/partner-tools/roi-calculator" element={<ROICalculator />} />
        <Route path="/partner-tools/investment-calculator" element={<InvestmentCalculator />} />
        <Route path="/partner-tools/ad-budget-calculator" element={<AdBudgetCalculator />} />
        <Route path="/partner-tools/seo-calculator" element={<SEOCalculator />} />
        <Route path="/partner-tools/email-calculator" element={<EmailCalculator />} />
        <Route path="/partner-tools/content-marketing-calculator" element={<ContentMarketingCalculator />} />
        <Route path="/partner-tools/social-media-roi-calculator" element={<SocialMediaROICalculator />} />
        <Route path="/partner-tools/ai-ready-check" element={<AIReadyCheck />} />

        {/* Legacy calculator redirects for SEO preservation */}
        <Route path="/roi-calculator" element={<Navigate to="/partner-tools/roi-calculator" replace />} />
        <Route path="/investment-calculator" element={<Navigate to="/partner-tools/investment-calculator" replace />} />
        <Route path="/ad-budget-calculator" element={<Navigate to="/partner-tools/ad-budget-calculator" replace />} />
        <Route path="/seo-calculator" element={<Navigate to="/partner-tools/seo-calculator" replace />} />
        <Route path="/email-calculator" element={<Navigate to="/partner-tools/email-calculator" replace />} />
        <Route path="/content-marketing-calculator" element={<Navigate to="/partner-tools/content-marketing-calculator" replace />} />
        <Route path="/ai-ready-check" element={<Navigate to="/partner-tools/ai-ready-check" replace />} />
        <Route path="/agency-calculator" element={<Navigate to="/partner-tools/roi-calculator" replace />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/region-blocked" element={<RegionBlocked />} />

        {/* ============ NEW FLAT URL STRUCTURE ============ */}
        
        {/* Service Hub Pages - Flat URLs */}
        <Route path="/white-label-local-seo" element={<LocalSEO />} />
        <Route path="/white-label-gbp-seo" element={<GoogleMaps />} />
        <Route path="/white-label-paid-media" element={<PaidMedia />} />
        <Route path="/white-label-email-marketing" element={<EmailMarketing />} />
        <Route path="/white-label-local-authority-building" element={<Authority />} />
        <Route path="/white-label-reporting" element={<Reporting />} />
        <Route path="/white-label-content-marketing" element={<ContentMarketing />} />

        {/* Local SEO Spoke Pages - Fully Flat URLs */}
        <Route path="/white-label-onpage-optimization" element={<SpokePage />} />
        <Route path="/white-label-technical-seo" element={<SpokePage />} />
        <Route path="/white-label-local-keyword-strategy" element={<SpokePage />} />
        <Route path="/white-label-content-development" element={<SpokePage />} />
        <Route path="/white-label-link-building" element={<SpokePage />} />
        <Route path="/white-label-schema-markup" element={<SpokePage />} />
        <Route path="/white-label-nap-citations" element={<SpokePage />} />

        {/* Google Maps Spoke Pages - Fully Flat URLs */}
        <Route path="/white-label-gbp-optimization" element={<SpokePage />} />
        <Route path="/white-label-review-management" element={<SpokePage />} />
        <Route path="/white-label-citation-building" element={<SpokePage />} />
        <Route path="/white-label-post-scheduling" element={<SpokePage />} />
        <Route path="/white-label-photo-optimization" element={<SpokePage />} />
        <Route path="/white-label-qa-management" element={<SpokePage />} />

        {/* Paid Media Spoke Pages - Fully Flat URLs */}
        <Route path="/white-label-google-ads" element={<SpokePage />} />
        <Route path="/white-label-meta-ads" element={<SpokePage />} />
        <Route path="/white-label-local-service-ads" element={<SpokePage />} />
        <Route path="/white-label-retargeting-campaigns" element={<SpokePage />} />
        <Route path="/white-label-landing-page-design" element={<SpokePage />} />
        <Route path="/white-label-conversion-tracking" element={<SpokePage />} />

        {/* Email Marketing Spoke Pages - Fully Flat URLs */}
        <Route path="/white-label-campaign-strategy" element={<SpokePage />} />
        <Route path="/white-label-list-management" element={<SpokePage />} />
        <Route path="/white-label-automation-flows" element={<SpokePage />} />
        <Route path="/white-label-newsletter-design" element={<SpokePage />} />
        <Route path="/white-label-ab-testing" element={<SpokePage />} />
        <Route path="/white-label-performance-analytics" element={<SpokePage />} />

        {/* Content Marketing Spoke Pages - Fully Flat URLs */}
        <Route path="/white-label-geographical-content" element={<SpokePage />} />
        <Route path="/white-label-topical-authority" element={<SpokePage />} />
        <Route path="/white-label-topical-content" element={<Navigate to="/white-label-topical-authority" replace />} />
        <Route path="/white-label-power-posts" element={<SpokePage />} />
        <Route path="/white-label-ebooks-guides" element={<SpokePage />} />
        <Route path="/white-label-lead-magnets" element={<SpokePage />} />
        <Route path="/white-label-press-releases" element={<SpokePage />} />
        <Route path="/white-label-case-studies" element={<SpokePage />} />
        <Route path="/white-label-faq-content" element={<SpokePage />} />
        <Route path="/white-label-hub-spoke-buildouts" element={<SpokePage />} />

        {/* Authority Building Spoke Pages - Fully Flat URLs */}
        <Route path="/white-label-structured-citations" element={<SpokePage />} />
        <Route path="/white-label-unstructured-citations" element={<SpokePage />} />
        <Route path="/white-label-brand-mentions" element={<SpokePage />} />
        <Route path="/white-label-anchor-text" element={<SpokePage />} />
        <Route path="/white-label-sponsorships" element={<SpokePage />} />

        {/* Reporting Spoke Pages - Fully Flat URLs */}
        <Route path="/white-label-branded-dashboards" element={<SpokePage />} />
        <Route path="/white-label-monthly-performance-reports" element={<SpokePage />} />
        <Route path="/white-label-rank-tracking-visibility" element={<SpokePage />} />
        <Route path="/white-label-call-tracking-lead-attribution" element={<SpokePage />} />
        <Route path="/white-label-roi-revenue-analysis" element={<SpokePage />} />
        <Route path="/white-label-client-presentation-decks" element={<SpokePage />} />

        {/* ============ 301 REDIRECTS FROM OLD NESTED STRUCTURE ============ */}

        {/* Hub Redirects: Old nested → New flat */}
        <Route path="/white-label-inbound-marketing-services/local-seo" element={<Navigate to="/white-label-local-seo" replace />} />
        <Route path="/white-label-inbound-marketing-services/google-maps" element={<Navigate to="/white-label-gbp-seo" replace />} />
        <Route path="/white-label-inbound-marketing-services/paid-media" element={<Navigate to="/white-label-paid-media" replace />} />
        <Route path="/white-label-inbound-marketing-services/email-marketing" element={<Navigate to="/white-label-email-marketing" replace />} />
        <Route path="/white-label-inbound-marketing-services/local-authority-building" element={<Navigate to="/white-label-local-authority-building" replace />} />
        <Route path="/white-label-inbound-marketing-services/reporting" element={<Navigate to="/white-label-reporting" replace />} />
        <Route path="/white-label-inbound-marketing-services/content-marketing" element={<Navigate to="/white-label-content-marketing" replace />} />

        {/* Local SEO Spoke Redirects */}
        <Route path="/white-label-inbound-marketing-services/local-seo/on-page-optimization" element={<Navigate to="/white-label-onpage-optimization" replace />} />
        <Route path="/white-label-inbound-marketing-services/local-seo/technical-seo" element={<Navigate to="/white-label-technical-seo" replace />} />
        <Route path="/white-label-inbound-marketing-services/local-seo/local-keyword-strategy" element={<Navigate to="/white-label-local-keyword-strategy" replace />} />
        <Route path="/white-label-inbound-marketing-services/local-seo/content-development" element={<Navigate to="/white-label-content-development" replace />} />
        <Route path="/white-label-inbound-marketing-services/local-seo/link-building" element={<Navigate to="/white-label-link-building" replace />} />
        <Route path="/white-label-inbound-marketing-services/local-seo/schema-markup" element={<Navigate to="/white-label-schema-markup" replace />} />
        <Route path="/white-label-inbound-marketing-services/local-seo/nap-citations" element={<Navigate to="/white-label-nap-citations" replace />} />

        {/* Google Maps Spoke Redirects */}
        <Route path="/white-label-inbound-marketing-services/google-maps/gbp-optimization" element={<Navigate to="/white-label-gbp-optimization" replace />} />
        <Route path="/white-label-inbound-marketing-services/google-maps/review-management" element={<Navigate to="/white-label-review-management" replace />} />
        <Route path="/white-label-inbound-marketing-services/google-maps/citation-building" element={<Navigate to="/white-label-citation-building" replace />} />
        <Route path="/white-label-inbound-marketing-services/google-maps/photo-optimization" element={<Navigate to="/white-label-photo-optimization" replace />} />
        <Route path="/white-label-inbound-marketing-services/google-maps/qa-management" element={<Navigate to="/white-label-qa-management" replace />} />
        <Route path="/white-label-inbound-marketing-services/google-maps/post-scheduling" element={<Navigate to="/white-label-post-scheduling" replace />} />

        {/* Paid Media Spoke Redirects */}
        <Route path="/white-label-inbound-marketing-services/paid-media/google-ads" element={<Navigate to="/white-label-google-ads" replace />} />
        <Route path="/white-label-inbound-marketing-services/paid-media/meta-ads" element={<Navigate to="/white-label-meta-ads" replace />} />
        <Route path="/white-label-inbound-marketing-services/paid-media/local-service-ads" element={<Navigate to="/white-label-local-service-ads" replace />} />
        <Route path="/white-label-inbound-marketing-services/paid-media/retargeting-campaigns" element={<Navigate to="/white-label-retargeting-campaigns" replace />} />
        <Route path="/white-label-inbound-marketing-services/paid-media/landing-page-design" element={<Navigate to="/white-label-landing-page-design" replace />} />
        <Route path="/white-label-inbound-marketing-services/paid-media/conversion-tracking" element={<Navigate to="/white-label-conversion-tracking" replace />} />

        {/* Email Marketing Spoke Redirects */}
        <Route path="/white-label-inbound-marketing-services/email-marketing/campaign-strategy" element={<Navigate to="/white-label-campaign-strategy" replace />} />
        <Route path="/white-label-inbound-marketing-services/email-marketing/list-management" element={<Navigate to="/white-label-list-management" replace />} />
        <Route path="/white-label-inbound-marketing-services/email-marketing/automation-flows" element={<Navigate to="/white-label-automation-flows" replace />} />
        <Route path="/white-label-inbound-marketing-services/email-marketing/newsletter-design" element={<Navigate to="/white-label-newsletter-design" replace />} />
        <Route path="/white-label-inbound-marketing-services/email-marketing/ab-testing" element={<Navigate to="/white-label-ab-testing" replace />} />
        <Route path="/white-label-inbound-marketing-services/email-marketing/performance-analytics" element={<Navigate to="/white-label-performance-analytics" replace />} />

        {/* Authority Building Spoke Redirects */}
        <Route path="/white-label-inbound-marketing-services/local-authority-building/structured-citations" element={<Navigate to="/white-label-structured-citations" replace />} />
        <Route path="/white-label-inbound-marketing-services/local-authority-building/unstructured-citations" element={<Navigate to="/white-label-unstructured-citations" replace />} />
        <Route path="/white-label-inbound-marketing-services/local-authority-building/brand-mentions" element={<Navigate to="/white-label-brand-mentions" replace />} />
        <Route path="/white-label-inbound-marketing-services/local-authority-building/anchor-text" element={<Navigate to="/white-label-anchor-text" replace />} />
        <Route path="/white-label-inbound-marketing-services/local-authority-building/sponsorships" element={<Navigate to="/white-label-sponsorships" replace />} />

        {/* Reporting Spoke Redirects */}
        <Route path="/white-label-inbound-marketing-services/reporting/branded-dashboards" element={<Navigate to="/white-label-branded-dashboards" replace />} />
        <Route path="/white-label-inbound-marketing-services/reporting/monthly-performance-reports" element={<Navigate to="/white-label-monthly-performance-reports" replace />} />
        <Route path="/white-label-inbound-marketing-services/reporting/rank-tracking-visibility" element={<Navigate to="/white-label-rank-tracking-visibility" replace />} />
        <Route path="/white-label-inbound-marketing-services/reporting/call-tracking-lead-attribution" element={<Navigate to="/white-label-call-tracking-lead-attribution" replace />} />
        <Route path="/white-label-inbound-marketing-services/reporting/roi-revenue-analysis" element={<Navigate to="/white-label-roi-revenue-analysis" replace />} />
        <Route path="/white-label-inbound-marketing-services/reporting/client-presentation-decks" element={<Navigate to="/white-label-client-presentation-decks" replace />} />

        {/* Content Marketing Spoke Redirects */}
        <Route path="/white-label-inbound-marketing-services/content-marketing/geographical-content" element={<Navigate to="/white-label-geographical-content" replace />} />
        <Route path="/white-label-inbound-marketing-services/content-marketing/topical-authority" element={<Navigate to="/white-label-topical-authority" replace />} />
        <Route path="/white-label-inbound-marketing-services/content-marketing/power-posts" element={<Navigate to="/white-label-power-posts" replace />} />
        <Route path="/white-label-inbound-marketing-services/content-marketing/ebooks-guides" element={<Navigate to="/white-label-ebooks-guides" replace />} />
        <Route path="/white-label-inbound-marketing-services/content-marketing/lead-magnets" element={<Navigate to="/white-label-lead-magnets" replace />} />
        <Route path="/white-label-inbound-marketing-services/content-marketing/press-releases" element={<Navigate to="/white-label-press-releases" replace />} />
        <Route path="/white-label-inbound-marketing-services/content-marketing/case-studies" element={<Navigate to="/white-label-case-studies" replace />} />
        <Route path="/white-label-inbound-marketing-services/content-marketing/faq-content" element={<Navigate to="/white-label-faq-content" replace />} />
        <Route path="/white-label-inbound-marketing-services/content-marketing/hub-spoke-buildouts" element={<Navigate to="/white-label-hub-spoke-buildouts" replace />} />

        {/* Legacy /services redirects for SEO preservation */}
        <Route path="/services" element={<Navigate to="/white-label-inbound-marketing-services" replace />} />
        <Route path="/services/" element={<Navigate to="/white-label-inbound-marketing-services" replace />} />
        <Route path="/services/local-seo" element={<Navigate to="/white-label-local-seo" replace />} />
        <Route path="/services/google-maps" element={<Navigate to="/white-label-gbp-seo" replace />} />
        <Route path="/white-label-google-maps-local-seo" element={<Navigate to="/white-label-gbp-seo" replace />} />
        <Route path="/white-label-google-maps" element={<Navigate to="/white-label-gbp-seo" replace />} />
        <Route path="/services/paid-media" element={<Navigate to="/white-label-paid-media" replace />} />
        <Route path="/services/email-marketing" element={<Navigate to="/white-label-email-marketing" replace />} />
        <Route path="/services/local-authority-building" element={<Navigate to="/white-label-local-authority-building" replace />} />
        <Route path="/services/reporting" element={<Navigate to="/white-label-reporting" replace />} />
        <Route path="/services/:hubSlug/:spokeSlug" element={<LegacySpokeRedirect />} />

        {/* Legacy site URL redirects (301) - Service Pages */}
        <Route path="/search-engine-optimization" element={<Navigate to="/white-label-local-seo" replace />} />
        <Route path="/search-engine-optimization/" element={<Navigate to="/white-label-local-seo" replace />} />
        <Route path="/dallas-digital-marketing" element={<Navigate to="/white-label-inbound-marketing-services" replace />} />
        <Route path="/dallas-digital-marketing/" element={<Navigate to="/white-label-inbound-marketing-services" replace />} />
        <Route path="/moving-and-storage-seo" element={<Navigate to="/white-label-local-seo" replace />} />
        <Route path="/moving-and-storage-seo/" element={<Navigate to="/white-label-local-seo" replace />} />
        <Route path="/contact/" element={<Navigate to="/contact" replace />} />
        <Route path="/small-business-social-advertising" element={<Navigate to="/white-label-meta-ads" replace />} />
        <Route path="/small-business-social-advertising/" element={<Navigate to="/white-label-meta-ads" replace />} />
        <Route path="/white-label-seo-campaigns" element={<Navigate to="/white-label-local-seo" replace />} />
        <Route path="/white-label-seo-campaigns/" element={<Navigate to="/white-label-local-seo" replace />} />
        <Route path="/shopify-seo-services" element={<Navigate to="/white-label-local-seo" replace />} />
        <Route path="/shopify-seo-services/" element={<Navigate to="/white-label-local-seo" replace />} />
        <Route path="/about-us" element={<Navigate to="/about" replace />} />
        <Route path="/about-us/" element={<Navigate to="/about" replace />} />
        <Route path="/advanced-local-seo-services" element={<Navigate to="/white-label-local-seo" replace />} />
        <Route path="/advanced-local-seo-services/" element={<Navigate to="/white-label-local-seo" replace />} />
        <Route path="/orthodontist-seo" element={<Navigate to="/white-label-local-seo" replace />} />
        <Route path="/orthodontist-seo/" element={<Navigate to="/white-label-local-seo" replace />} />
        <Route path="/online-reputation-management-small-businesses" element={<Navigate to="/white-label-review-management" replace />} />
        <Route path="/online-reputation-management-small-businesses/" element={<Navigate to="/white-label-review-management" replace />} />
        <Route path="/dentist-seo-company" element={<Navigate to="/white-label-local-seo" replace />} />
        <Route path="/dentist-seo-company/" element={<Navigate to="/white-label-local-seo" replace />} />
        <Route path="/local-seo-company" element={<Navigate to="/white-label-local-seo" replace />} />
        <Route path="/local-seo-company/" element={<Navigate to="/white-label-local-seo" replace />} />
        <Route path="/dentist-digital-marketing" element={<Navigate to="/white-label-inbound-marketing-services" replace />} />
        <Route path="/dentist-digital-marketing/" element={<Navigate to="/white-label-inbound-marketing-services" replace />} />
        <Route path="/e-commerce-seo" element={<Navigate to="/white-label-local-seo" replace />} />
        <Route path="/e-commerce-seo/" element={<Navigate to="/white-label-local-seo" replace />} />
        <Route path="/orthodontist-digital-marketing" element={<Navigate to="/white-label-inbound-marketing-services" replace />} />
        <Route path="/orthodontist-digital-marketing/" element={<Navigate to="/white-label-inbound-marketing-services" replace />} />
        <Route path="/affordable-web-design-small-business" element={<Navigate to="/white-label-inbound-marketing-services" replace />} />
        <Route path="/affordable-web-design-small-business/" element={<Navigate to="/white-label-inbound-marketing-services" replace />} />
        <Route path="/nashville-digital-marketing" element={<Navigate to="/white-label-inbound-marketing-services" replace />} />
        <Route path="/nashville-digital-marketing/" element={<Navigate to="/white-label-inbound-marketing-services" replace />} />
        <Route path="/search-engine-advertising" element={<Navigate to="/white-label-paid-media" replace />} />
        <Route path="/search-engine-advertising/" element={<Navigate to="/white-label-paid-media" replace />} />
        <Route path="/blog/" element={<Navigate to="/blog" replace />} />
        <Route path="/local-search-marketing" element={<Navigate to="/white-label-local-seo" replace />} />
        <Route path="/local-search-marketing/" element={<Navigate to="/white-label-local-seo" replace />} />
        <Route path="/white-label-local-ppc" element={<Navigate to="/white-label-paid-media" replace />} />
        <Route path="/white-label-local-ppc/" element={<Navigate to="/blog/white-label-local-ppc" replace />} />
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

        {/* Legacy category/tag redirects → /blog */}
        <Route path="/category/business" element={<Navigate to="/blog" replace />} />
        <Route path="/category/business/" element={<Navigate to="/blog" replace />} />
        <Route path="/category/adwords" element={<Navigate to="/blog" replace />} />
        <Route path="/category/adwords/" element={<Navigate to="/blog" replace />} />
        <Route path="/category/facebook-marketing" element={<Navigate to="/blog" replace />} />
        <Route path="/category/facebook-marketing/" element={<Navigate to="/blog" replace />} />
        <Route path="/category/services" element={<Navigate to="/white-label-inbound-marketing-services" replace />} />
        <Route path="/category/services/" element={<Navigate to="/white-label-inbound-marketing-services" replace />} />
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
      </ErrorBoundary>
    </TooltipProvider>
  </QueryClientProvider>
);

// Helper component for dynamic spoke redirects from /services/{hub}/{spoke}
const LegacySpokeRedirect = () => {
  const params = window.location.pathname.match(/\/services\/([^/]+)\/([^/]+)/);
  if (params) {
    const spokeSlug = params[2];
    // Redirect directly to flat spoke URL
    return <Navigate to={`/white-label-${spokeSlug}`} replace />;
  }
  return <Navigate to="/white-label-inbound-marketing-services" replace />;
};

export default App;
