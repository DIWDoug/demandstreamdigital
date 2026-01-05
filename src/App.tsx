import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import ElfsightReviews from "./components/ElfsightReviews";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import ROICalculator from "./pages/ROICalculator";
import InvestmentCalculator from "./pages/InvestmentCalculator";
import AdBudgetCalculator from "./pages/AdBudgetCalculator";
import SEOCalculator from "./pages/SEOCalculator";
import EmailCalculator from "./pages/EmailCalculator";
import ContentMarketingCalculator from "./pages/ContentMarketingCalculator";
import AIReadyCheck from "./pages/AIReadyCheck";
import PartnerTools from "./pages/PartnerTools";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import ThankYou from "./pages/ThankYou";
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
      <KonamiCodeListener />
      <GeoBlockListener />
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <BackToTop />
      <ElfsightReviews />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/authors/:slug" element={<Author />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/white-label-inbound-marketing-services" element={<Services />} />
        <Route path="/partner-tools" element={<PartnerTools />} />
        <Route path="/partner-tools/roi-calculator" element={<ROICalculator />} />
        <Route path="/partner-tools/investment-calculator" element={<InvestmentCalculator />} />
        <Route path="/partner-tools/ad-budget-calculator" element={<AdBudgetCalculator />} />
        <Route path="/partner-tools/seo-calculator" element={<SEOCalculator />} />
        <Route path="/partner-tools/email-calculator" element={<EmailCalculator />} />
        <Route path="/partner-tools/content-marketing-calculator" element={<ContentMarketingCalculator />} />
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
        <Route path="/region-blocked" element={<RegionBlocked />} />

        {/* Service Hub Pages */}
        <Route path="/white-label-inbound-marketing-services/local-seo" element={<LocalSEO />} />
        <Route path="/white-label-inbound-marketing-services/google-maps" element={<GoogleMaps />} />
        <Route path="/white-label-inbound-marketing-services/paid-media" element={<PaidMedia />} />
        <Route path="/white-label-inbound-marketing-services/email-marketing" element={<EmailMarketing />} />
        <Route path="/white-label-inbound-marketing-services/local-authority-building" element={<Authority />} />
        <Route path="/white-label-inbound-marketing-services/reporting" element={<Reporting />} />
        <Route path="/white-label-inbound-marketing-services/content-marketing" element={<ContentMarketing />} />

        {/* Service Spoke Pages (sub-services) */}
        <Route path="/white-label-inbound-marketing-services/:hubSlug/:spokeSlug" element={<SpokePage />} />

        {/* Legacy /services redirects for SEO preservation */}
        <Route path="/services" element={<Navigate to="/white-label-inbound-marketing-services" replace />} />
        <Route path="/services/" element={<Navigate to="/white-label-inbound-marketing-services" replace />} />
        <Route path="/services/local-seo" element={<Navigate to="/white-label-inbound-marketing-services/local-seo" replace />} />
        <Route path="/services/google-maps" element={<Navigate to="/white-label-inbound-marketing-services/google-maps" replace />} />
        <Route path="/services/paid-media" element={<Navigate to="/white-label-inbound-marketing-services/paid-media" replace />} />
        <Route path="/services/email-marketing" element={<Navigate to="/white-label-inbound-marketing-services/email-marketing" replace />} />
        <Route path="/services/local-authority-building" element={<Navigate to="/white-label-inbound-marketing-services/local-authority-building" replace />} />
        <Route path="/services/reporting" element={<Navigate to="/white-label-inbound-marketing-services/reporting" replace />} />
        <Route path="/services/:hubSlug/:spokeSlug" element={<LegacySpokeRedirect />} />

        {/* Legacy site URL redirects (301) - Service Pages */}
        <Route path="/dallas-digital-marketing" element={<Navigate to="/contact" replace />} />
        <Route path="/dallas-digital-marketing/" element={<Navigate to="/contact" replace />} />
        <Route path="/moving-and-storage-seo" element={<Navigate to="/white-label-inbound-marketing-services/local-seo" replace />} />
        <Route path="/moving-and-storage-seo/" element={<Navigate to="/white-label-inbound-marketing-services/local-seo" replace />} />
        <Route path="/contact/" element={<Navigate to="/contact" replace />} />
        <Route path="/small-business-social-advertising" element={<Navigate to="/white-label-inbound-marketing-services/paid-media/meta-ads" replace />} />
        <Route path="/small-business-social-advertising/" element={<Navigate to="/white-label-inbound-marketing-services/paid-media/meta-ads" replace />} />
        <Route path="/white-label-seo-campaigns" element={<Navigate to="/white-label-inbound-marketing-services/local-seo" replace />} />
        <Route path="/white-label-seo-campaigns/" element={<Navigate to="/white-label-inbound-marketing-services/local-seo" replace />} />
        <Route path="/shopify-seo-services" element={<Navigate to="/white-label-inbound-marketing-services/local-seo" replace />} />
        <Route path="/shopify-seo-services/" element={<Navigate to="/white-label-inbound-marketing-services/local-seo" replace />} />
        <Route path="/about-us" element={<Navigate to="/about" replace />} />
        <Route path="/about-us/" element={<Navigate to="/about" replace />} />
        <Route path="/advanced-local-seo-services" element={<Navigate to="/white-label-inbound-marketing-services/local-seo" replace />} />
        <Route path="/advanced-local-seo-services/" element={<Navigate to="/white-label-inbound-marketing-services/local-seo" replace />} />
        <Route path="/orthodontist-seo" element={<Navigate to="/white-label-inbound-marketing-services/local-seo" replace />} />
        <Route path="/orthodontist-seo/" element={<Navigate to="/white-label-inbound-marketing-services/local-seo" replace />} />
        <Route path="/online-reputation-management-small-businesses" element={<Navigate to="/white-label-inbound-marketing-services/google-maps/review-management" replace />} />
        <Route path="/online-reputation-management-small-businesses/" element={<Navigate to="/white-label-inbound-marketing-services/google-maps/review-management" replace />} />
        <Route path="/dentist-seo-company" element={<Navigate to="/white-label-inbound-marketing-services/local-seo" replace />} />
        <Route path="/dentist-seo-company/" element={<Navigate to="/white-label-inbound-marketing-services/local-seo" replace />} />
        <Route path="/local-seo-company" element={<Navigate to="/white-label-inbound-marketing-services/local-seo" replace />} />
        <Route path="/local-seo-company/" element={<Navigate to="/white-label-inbound-marketing-services/local-seo" replace />} />
        <Route path="/dentist-digital-marketing" element={<Navigate to="/white-label-inbound-marketing-services" replace />} />
        <Route path="/dentist-digital-marketing/" element={<Navigate to="/white-label-inbound-marketing-services" replace />} />
        <Route path="/e-commerce-seo" element={<Navigate to="/white-label-inbound-marketing-services/local-seo" replace />} />
        <Route path="/e-commerce-seo/" element={<Navigate to="/white-label-inbound-marketing-services/local-seo" replace />} />
        <Route path="/orthodontist-digital-marketing" element={<Navigate to="/white-label-inbound-marketing-services" replace />} />
        <Route path="/orthodontist-digital-marketing/" element={<Navigate to="/white-label-inbound-marketing-services" replace />} />
        <Route path="/affordable-web-design-small-business" element={<Navigate to="/contact" replace />} />
        <Route path="/affordable-web-design-small-business/" element={<Navigate to="/contact" replace />} />
        <Route path="/nashville-digital-marketing" element={<Navigate to="/contact" replace />} />
        <Route path="/nashville-digital-marketing/" element={<Navigate to="/contact" replace />} />
        <Route path="/search-engine-advertising" element={<Navigate to="/white-label-inbound-marketing-services/paid-media" replace />} />
        <Route path="/search-engine-advertising/" element={<Navigate to="/white-label-inbound-marketing-services/paid-media" replace />} />
        <Route path="/blog/" element={<Navigate to="/blog" replace />} />
        <Route path="/local-search-marketing" element={<Navigate to="/white-label-inbound-marketing-services/local-seo" replace />} />
        <Route path="/local-search-marketing/" element={<Navigate to="/white-label-inbound-marketing-services/local-seo" replace />} />
        <Route path="/white-label-local-ppc" element={<Navigate to="/blog/white-label-local-ppc" replace />} />
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
    </TooltipProvider>
  </QueryClientProvider>
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
