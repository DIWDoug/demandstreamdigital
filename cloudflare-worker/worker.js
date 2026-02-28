/**
 * dialedinweb.com Worker (Custom Domains) — redirects + true 404 + origin proxy
 *
 * Key behaviors:
 *  - Canonical host: apex -> www (301)
 *  - Legacy redirects: exact path map from CSV (REDIRECTS)
 *  - Static assets / non-HTML: passthrough to origin
 *  - HTML routes not in allowlist: return true 404 (serves /404 from origin if possible)
 *  - Origin proxy is loop-safe if origin sends redirects back to public host.
 *
 * Required env vars (wrangler.toml [vars]):
 *  - ORIGIN_URL: your upstream origin base URL (default: https://heart-crafted-shine.lovable.app)
 *  - CANONICAL_HOST: www.dialedinweb.com
 *  - DEBUG_HEADERS: "1" to include x-diw-* headers
 *
 * NOTE: If your current ORIGIN_URL redirects all requests to https://www.dialedinweb.com/,
 * and you attach www as a Custom Domain to this Worker, you MUST change ORIGIN_URL to an
 * upstream that returns 200 content (otherwise you will get redirect loops).
 */

const DEFAULT_ORIGIN_URL = "https://heart-crafted-shine.lovable.app";
const DEFAULT_CANONICAL_HOST = "www.dialedinweb.com";

const STATIC_ASSET_PATTERN =
    /\.(js|css|png|jpg|jpeg|gif|svg|ico|woff2?|ttf|eot|map|webp|mp4|webm|pdf|xml|txt|json)$/i;

const REDIRECTS = {  "/10-hacks-to-solidify-your-business-positive-reputation-online": "/our-blog",  "/10-local-link-building-strategies-small-businesses-2020": "/our-blog",  "/10-questions-clinics-must-ask-ad-agencies-in-dallas-tx": "/our-blog",  "/10-tips-building-local-brand-will-increase-local-online-leads": "/our-blog",  "/10-ways-increase-conversions-avoid-wasting-money-google-adwords-campaign": "/our-blog",  "/10-ways-lower-cpc-optimizing-adwords-mobile": "/our-blog",  "/11-must-have-wordpress-plugins-and-why-you-need-them": "/our-blog",  "/2016/10/3-awesome-local-seo-and-content-marketing-strategies-no-one-is-doing": "/white-label-local-seo",  "/2016/10/4-local-seo-strategies-instantly-improve-search-rankings-attract-new-customers": "/white-label-local-seo",  "/2016/10/7-local-search-marketing-stats-every-dallas-small-business-know": "/our-blog",  "/2016/11/10-ways-lower-cpc-optimizing-adwords-mobile": "/our-blog",  "/2016/11/local-link-building-outreach-101-need-know": "/our-blog",  "/2016/11/why-you-need-to-stop-looking-at-organic-rankings-and-focus-on-what-matters": "/our-blog",  "/2016/12/emd-local-business-sites": "/our-blog",  "/2016/12/how-google-penguin-4-0-will-affect-your-seo": "/white-label-local-seo",  "/2016/12/yelp-google-facebook-reviews-does-one-matter-more": "/white-label-review-management",  "/2017/01/10-tips-building-local-brand-will-increase-local-online-leads": "/our-blog",  "/3-awesome-local-seo-and-content-marketing-strategies-no-one-is-doing": "/white-label-local-seo",  "/3-key-ways-to-recover-from-a-google-algorithm-penalty": "/our-blog",  "/4-creative-ways-repurpose-online-content/content-corkboard": "/our-blog",  "/4-creative-ways-to-repurpose-your-online-content": "/our-blog",  "/4-creative-ways-to-repurpose-your-online-content/feed": "/",  "/4-essential-strategies-to-jumpstart-your-local-seo": "/white-label-local-seo",  "/4-local-seo-strategies-instantly-improve-search-rankings-attract-new-customers": "/white-label-local-seo",  "/5-linkedin-profile-tips-that-will-make-you-stand-out": "/our-blog",  "/5-psychology-backed-design-tips-make-website-effective": "/our-blog",  "/5-strategies-to-get-to-the-top-of-the-local-3-pack-listings-and-stand-out": "/our-blog",  "/5-ways-dallas-advertising-agencies-help-small-businesses-with-ppc": "/our-blog",  "/5-ways-optimize-adwords-ad-extensions-increase-conversions": "/our-blog",  "/5-ways-to-define-and-leverage-your-target-audience-on-social-media": "/our-blog",  "/5-ways-to-effectively-engage-with-your-target-audience-using-emojis": "/our-blog",  "/50-small-business-seo-tips-tricks-ensure-online-success": "/white-label-local-seo",  "/519-2": "/our-blog",  "/519-2/feed": "/",  "/519-2/www.dialedinweb.com/blog": "/our-blog",  "/6-tips-to-improve-engagement-linkedin-groups": "/our-blog",  "/6-tips-to-improve-engagement-linkedin-groups/feed": "/",  "/7-essential-tips-to-attract-quality-followers-on-twitter": "/our-blog",  "/7-local-search-marketing-stats-every-dallas-small-business-know": "/our-blog",  "/7-reasons-why-its-a-bad-idea-to-buy-fans-for-your-fan-page": "/our-blog",  "/7-reasons-why-its-a-bad-idea-to-buy-fans-for-your-fan-page/feed": "/",  "/7-reasons-why-its-a-bad-idea-to-buy-fans-for-your-fan-page/www.dialedinweb.com/blog": "/our-blog",  "/7-reasons-why-online-reviews-are-essential-for-your-brand": "/white-label-review-management",  "/7-social-media-marketing-tips-to-ensure-your-success": "/our-blog",  "/7-steps-to-attract-your-ideal-customer-with-pay-per-click": "/our-blog",  "/7-tips-to-make-facebook-marketing-work-for-your-local-businesses": "/our-blog",  "/8-simple-steps-to-make-your-website-more-pinteresting": "/our-blog",  "/8-ways-noticed-recruiters-linkedin/linked-in-mobile-image": "/our-blog",  "/8-ways-to-get-noticed-by-recruiters-on-linkedin": "/our-blog",  "/8-ways-to-get-noticed-by-recruiters-on-linkedin/feed": "/",  "/about-us": "/about",  "/about-us/feed": "/",  "/about-us/www.dialedinweb.com/blog": "/about",  "/advanced-local-seo-services": "/white-label-local-seo",  "/adwords-101-start-campaign-right-foot": "/white-label-paid-media",  "/affordable-web-design-small-business": "/white-label-inbound-marketing-services",  "/amazon-ppc-101-what-you-need-to-know": "/white-label-inbound-marketing-services",  "/author/dougbryson1": "/",  "/author/dougdialedinweb-com": "/",  "/author/rebeccadaneault": "/",  "/author/wpx_dougbryson": "/",  "/best-digital-marketing-agencies-dallas": "/white-label-inbound-marketing-services",  "/blog": "/our-blog",  "/blog/feed": "/",  "/careers-2": "/white-label-inbound-marketing-services",  "/category/adwords": "/white-label-paid-media",  "/category/blog": "/",  "/category/business": "/",  "/category/content-marketing": "/",  "/category/conversion-rate-optimization": "/",  "/category/digital-marketing": "/",  "/category/facebook-marketing": "/",  "/category/industry-news": "/",  "/category/instagram-marketing-social-media-marketing": "/",  "/category/linkedin-marketing": "/",  "/category/local-marketing": "/",  "/category/local-search-marketing": "/",  "/category/local-seo": "/white-label-local-seo",  "/category/nashville-social-media": "/",  "/category/online-reviews": "/white-label-review-management",  "/category/pay-per-click-marketing": "/",  "/category/reputation-management": "/",  "/category/search-engine-optimization": "/",  "/category/seo": "/white-label-local-seo",  "/category/services": "/",  "/category/social-media-marketing": "/",  "/category/social-media-marketing/facebook-marketing": "/",  "/category/testimonial": "/",  "/category/twitter-marketing": "/",  "/category/uncategorized": "/",  "/category/web-design": "/",  "/comments/feed": "/",  "/contact-us": "/contact",  "/content-marketing-101-what-you-need-to-know": "/white-label-content-marketing",  "/content-marketing-gone-green-3-ways-recycle-old-content": "/white-label-content-marketing",  "/content-marketing-nashville": "/white-label-content-marketing",  "/content-marketing-nashville/feed": "/",  "/conversion-rate-optimization": "/white-label-inbound-marketing-services",  "/conversion-rate-optimization-what-you-need-to-know": "/white-label-inbound-marketing-services",  "/dallas-digital-marketing": "/white-label-inbound-marketing-services",  "/dallas-seo": "/white-label-local-seo",  "/dallas-social-media-marketing": "/white-label-inbound-marketing-services",  "/dentist-digital-marketing": "/white-label-inbound-marketing-services",  "/dentist-seo-company": "/white-label-local-seo",  "/dialed-in-local/feed": "/",  "/dialedin_wp/mobile-marketing": "/white-label-inbound-marketing-services",  "/digital-marketing-challenges-dsos-face": "/white-label-inbound-marketing-services",  "/does-digital-marketing-work-for-small-businesses": "/white-label-inbound-marketing-services",  "/domain-level-competitors-vs-page-level-competitors-where-should-you-focus-your-marketing-strategies": "/white-label-inbound-marketing-services",  "/e-commerce-seo": "/white-label-local-seo",  "/eight-outstanding-ways-to-leverage-reddit-for-marketing": "/white-label-inbound-marketing-services",  "/eight-ways-to-help-reduce-your-websites-page-load-time": "/white-label-inbound-marketing-services",  "/emd-local-business-sites": "/white-label-gbp-seo",  "/enews-confirmed": "/white-label-inbound-marketing-services",  "/evergreen-link-building-strategies-link-pruning": "/white-label-inbound-marketing-services",  "/facebook-advertising": "/white-label-paid-media",  "/facebook-advertising-how-to-do-it-the-right-way": "/white-label-paid-media",  "/facebook-advertising/feed": "/",  "/facebook-marketing": "/white-label-paid-media",  "/facebook-marketing-services": "/white-label-paid-media",  "/facebook-marketing-services/feed": "/",  "/facebooks-news-feed-changes-mean-business-can-survive": "/",  "/favicon.ico": "/white-label-inbound-marketing-services",  "/feed": "/",  "/five-point-five-reasons-you-should-be-asking-for-reviews-from-your-customers": "/white-label-review-management",  "/five-point-five-reasons-you-should-be-asking-for-reviews-from-your-customers/doug1izaerwt3.cloudfront.net": "/white-label-review-management",  "/five-point-five-reasons-you-should-be-asking-for-reviews-from-your-customers/excellent-review": "/white-label-review-management",  "/five-point-five-reasons-you-should-be-asking-for-reviews-from-your-customers/excellent-review/doug1izaerwt3.cloudfront.net": "/white-label-review-management",  "/five-point-five-reasons-you-should-be-asking-for-reviews-from-your-customers/excellent-review/feed": "/white-label-review-management",  "/five-point-five-reasons-you-should-be-asking-for-reviews-from-your-customers/feed": "/white-label-review-management",  "/five-types-of-facebook-fans-quality-over-quantity": "/white-label-inbound-marketing-services",  "/five-types-of-facebook-fans-quality-over-quantity/feed": "/",  "/five-ways-an-seo-consultant-can-help-your-business-grow": "/white-label-local-seo",  "/free-tips": "/our-blog",  "/free-tips/page/2": "/our-blog",  "/google-ads-vs-facebook-ads-which-is-best-for-your-small-business": "/white-label-paid-media",  "/home/feed": "/",  "/how-a-local-seo-agency-helps-dentists-win-locally": "/white-label-local-seo",  "/how-google-penguin-4-0-will-affect-your-seo-2": "/white-label-local-seo",  "/how-local-seo-can-drive-foot-traffic-to-your-small-business": "/white-label-local-seo",  "/how-local-seo-services-help-moving-companies-on-google-maps": "/white-label-local-seo",  "/how-local-service-ads-have-impacted-google-ads": "/white-label-paid-media",  "/how-much-does-seo-cost-for-a-small-business": "/white-label-local-seo",  "/how-schema-can-make-your-search-engine-results-more-visually-appealing": "/white-label-schema-markup",  "/how-smes-can-compete-with-big-brands-using-local-seo": "/white-label-local-seo",  "/how-to-build-a-strong-social-media-presence-as-an-sme": "/white-label-inbound-marketing-services",  "/how-to-encourage-your-repeat-customers-to-give-more-feedback": "/",  "/how-to-get-more-followers-on-twitter": "/white-label-inbound-marketing-services",  "/how-to-get-roi-from-social-media": "/white-label-inbound-marketing-services",  "/how-to-get-roi-from-social-media/feed": "/",  "/how-to-revitalize-your-local-citations": "/white-label-gbp-seo",  "/how-to-set-goals-in-google-analytics": "/white-label-inbound-marketing-services",  "/how-to-set-goals-in-google-analytics-2": "/white-label-inbound-marketing-services",  "/how-to-set-goals-in-google-analytics/feed": "/",  "/instagram-small-business-marketing/using-instagram-for-your-business": "/white-label-inbound-marketing-services",  "/is-citation-building-still-important-to-local-seo-what-you-need-to-know": "/white-label-local-seo",  "/link-pruning-essential-seo-campaign": "/white-label-local-seo",  "/linkedin-marketing": "/white-label-inbound-marketing-services",  "/linkedin-marketing-groups-are-gold": "/white-label-inbound-marketing-services",  "/linkedin-marketing/feed": "/",  "/local-content-marketing-kpis-which-metrics-should-your-business-track": "/white-label-content-marketing",  "/local-data-aggregators-matter-ranking-local-business": "/white-label-gbp-seo",  "/local-link-building-outreach-101-need-know": "/white-label-link-building",  "/local-search-marketing": "/white-label-gbp-seo",  "/local-seo-company": "/white-label-local-seo",  "/local-seo-for-franchises-moving-firms": "/white-label-local-seo",  "/moving-and-storage-seo": "/white-label-local-seo",  "/nashville-digital-marketing": "/white-label-inbound-marketing-services",  "/nashville-local-search-marketing": "/white-label-gbp-seo",  "/nashville-local-search-marketing/doug1izaerwt3.cloudfront.net": "/white-label-gbp-seo",  "/nashville-local-search-marketing/feed": "/",  "/nashville-mobile-advertising": "/white-label-paid-media",  "/nashville-mobile-marketing": "/white-label-inbound-marketing-services",  "/nashville-mobile-website-design": "/white-label-inbound-marketing-services",  "/nashville-online-reputation-management": "/white-label-review-management",  "/nashville-online-reputation-management/feed": "/",  "/nashville-online-reputation-management/www.dialedinweb.com": "/white-label-review-management",  "/nashville-paid-search-ppc-marketing": "/white-label-paid-media",  "/nashville-paid-search-ppc-marketing/feed": "/",  "/nashville-qr-code-marketing": "/white-label-inbound-marketing-services",  "/nashville-seo": "/white-label-local-seo",  "/nashville-seo/feed": "/white-label-local-seo",  "/nashville-social-media-marketing": "/white-label-inbound-marketing-services",  "/nashville-social-media-marketing/feed": "/",  "/nashville-tn-online-reputation-management": "/white-label-review-management",  "/nashville-tn-online-review-management": "/white-label-review-management",  "/nashville-web-design": "/white-label-inbound-marketing-services",  "/nashville-web-design/feed": "/",  "/nine-ways-to-integrate-social-media-into-your-sales-strategy": "/white-label-inbound-marketing-services",  "/online-presence-audit-startups": "/white-label-inbound-marketing-services",  "/online-presence-management-for-startups": "/white-label-review-management",  "/online-reputation-management": "/white-label-review-management",  "/online-reputation-management-small-businesses": "/white-label-review-management",  "/online-reviews-are-they-important-for-your-business": "/white-label-review-management",  "/online-scheduler": "/white-label-inbound-marketing-services",  "/optimizing-your-website-for-google-local-search": "/white-label-link-building",  "/orthodontist-digital-marketing": "/white-label-inbound-marketing-services",  "/orthodontist-seo": "/white-label-local-seo",  "/our-blog/feed": "/",  "/outdated-tips-about-googles-accelerated-mobile-pages-that-arent-true-anymore": "/white-label-inbound-marketing-services",  "/page-sitemap.html": "/",  "/paid-search-marketing": "/white-label-paid-media",  "/portfolio": "/case-studies",  "/portfolio-category/branding": "/case-studies",  "/portfolio-category/custom-print": "/case-studies",  "/portfolio-category/digital-design": "/case-studies",  "/portfolio-category/ecommerce": "/case-studies",  "/portfolio-category/masonry": "/case-studies",  "/portfolio-category/portfolio-single": "/case-studies",  "/portfolio/aliens-do-3d-automobile": "/case-studies",  "/portfolio/angel-maids-case-study": "/case-studies",  "/portfolio/armor-roofing-case-study": "/case-studies",  "/portfolio/armor-roofing-case-study/feed": "/",  "/portfolio/artboard-studio": "/case-studies",  "/portfolio/athletic-performance-massage-case-study": "/case-studies",  "/portfolio/athletic-performance-massage-case-study/feed": "/",  "/portfolio/darfons-restaurant-case-study": "/case-studies",  "/portfolio/darfons-restaurant-case-study/feed": "/",  "/portfolio/darfons-restaurant-case-study/www.facebook.com/darfons": "/case-studies",  "/portfolio/darfons-restaurant-case-study/www.twitter.com/darfons": "/case-studies",  "/portfolio/inspiration-board": "/case-studies",  "/portfolio/kontrast": "/case-studies",  "/portfolio/mercedez-benz-coupe": "/case-studies",  "/portfolio/nexa-mobile": "/case-studies",  "/portfolio/next-level-fitness-case-study": "/case-studies",  "/portfolio/next-level-fitness-case-study/www.facebook.com/nlfnash": "/case-studies",  "/portfolio/next-level-fitness-case-study/www.nextlevelfitness.com": "/case-studies",  "/portfolio/next-level-fitness-case-study/www.twitter.com/nlfnash": "/case-studies",  "/portfolio/nike-shopping": "/case-studies",  "/portfolio/photo-retouching": "/case-studies",  "/portfolio/the-portraits": "/case-studies",  "/portfolio/villa-in-dallas": "/case-studies",  "/portfolios": "/case-studies",  "/post-sitemap.html": "/",  "/ppc-ad-campaigns-why-they-should-differentiate-between-mobile-and-desktop-users": "/white-label-paid-media",  "/pricing": "/white-label-inbound-marketing-services",  "/pricing-v2": "/white-label-inbound-marketing-services",  "/removal-right-side-ads-mean-adwords-campaign": "/white-label-paid-media",  "/search-engine-advertising": "/white-label-paid-media",  "/search-engine-marketing-firm-dialed-in-local-announces-relocation-to-dallas-tx": "/white-label-gbp-seo",  "/search-engine-optimization": "/white-label-local-seo",  "/seo": "/white-label-local-seo",  "/seo-and-content-strategy-for-retail-growth": "/white-label-local-seo",  "/seo-and-paid-search-dentists-dallas": "/white-label-local-seo",  "/seo/feed": "/white-label-local-seo",  "/seo/www.dialedinweb.com/blog": "/white-label-local-seo",  "/services": "/white-label-inbound-marketing-services",  "/services-v3": "/white-label-inbound-marketing-services",  "/services/feed": "/",  "/seven-approaches-to-measuring-the-success-of-a-local-seo-campaign": "/white-label-local-seo",  "/seven-simple-ways-to-build-your-small-business-social-media-presence-quickly": "/white-label-inbound-marketing-services",  "/seven-ways-to-pimp-your-linkedin-profile": "/white-label-inbound-marketing-services",  "/seven-ways-to-pimp-your-linkedin-profile/feed": "/",  "/seven-ways-to-pimp-your-linkedin-profile/linkedin-focus": "/white-label-inbound-marketing-services",  "/seven-ways-to-pimp-your-linkedin-profile/pimp-logo": "/white-label-inbound-marketing-services",  "/shopify-seo-services": "/white-label-local-seo",  "/shreveport-seo-and-social-media": "/white-label-local-seo",  "/shreveport-seo-and-social-media/dialedinweb.com/social-media": "/white-label-local-seo",  "/shreveport-seo-and-social-media/feed": "/white-label-local-seo",  "/shreveport-seo-and-social-media/www.dialedinweb.com/blog": "/white-label-local-seo",  "/shreveport-seo-and-social-media/www.dialedinweb.com/seo": "/white-label-local-seo",  "/six-ways-to-improve-your-domain-authority-score": "/our-blog",  "/small-business-seo-services": "/white-label-local-seo",  "/small-business-social-advertising": "/white-label-paid-media",  "/small-business-social-media-marketing": "/white-label-inbound-marketing-services",  "/smm-success": "/white-label-inbound-marketing-services",  "/social-media-makeover.html": "/white-label-inbound-marketing-services",  "/social-media-marketing": "/white-label-inbound-marketing-services",  "/social-media-marketing-is-not-dead": "/white-label-inbound-marketing-services",  "/tag/10-hacks-to-get-online-reviews-for-your-local-business": "/white-label-review-management",  "/tag/5-linkedin-profile-tips": "/",  "/tag/7-facebook-marketing-tips-for-local-businesses": "/",  "/tag/7-steps-to-get-new-customers-with-pay-per-click": "/",  "/tag/adwords": "/white-label-paid-media",  "/tag/adwords-marketing": "/white-label-paid-media",  "/tag/and-creatives": "/",  "/tag/backlinks": "/",  "/tag/bloggers": "/",  "/tag/content-marketing": "/white-label-content-marketing",  "/tag/conversion-rate-optimization": "/",  "/tag/dallas-local-search-marketing": "/",  "/tag/dallas-pay-per-click-marketing": "/",  "/tag/dallas-ppc": "/",  "/tag/dallas-seo": "/white-label-local-seo",  "/tag/dallas-seo-experts": "/white-label-local-seo",  "/tag/define-your-target-audience": "/",  "/tag/desktop-ads": "/white-label-paid-media",  "/tag/digital-marketing-services-for-small-business": "/",  "/tag/domain-authority": "/",  "/tag/facebook-ads": "/white-label-paid-media",  "/tag/facebook-advertising": "/white-label-paid-media",  "/tag/facebook-advertising-how-to-do-it-the-right-way": "/white-label-paid-media",  "/tag/facebook-fans": "/",  "/tag/facebook-marketing": "/",  "/tag/facebook-marketing-for-local-businesses": "/",  "/tag/facebook-marketing-tips": "/",  "/tag/facebook-marketing-tips-for-local-businesses": "/",  "/tag/faecbook-marketing": "/",  "/tag/free-image": "/",  "/tag/free-image-site": "/",  "/tag/free-image-sites": "/",  "/tag/free-images": "/",  "/tag/google-ads": "/white-label-paid-media",  "/tag/google-algorithm-penalty": "/",  "/tag/google-amp": "/",  "/tag/google-analytics": "/",  "/tag/google-local": "/",  "/tag/google-manual-penalty": "/",  "/tag/google-penalty": "/",  "/tag/google-recovery": "/",  "/tag/hashtags": "/",  "/tag/how-to-define-your-target-audience-on-social-media": "/white-label-inbound-marketing-services",  "/tag/how-to-get-more-followers-on-twitter": "/",  "/tag/instagram-marketing": "/",  "/tag/link-building": "/",  "/tag/linked-in": "/",  "/tag/linked-in-marketing-2": "/",  "/tag/linkedin-marketing": "/",  "/tag/linkedin-profile": "/",  "/tag/linkedin-profile-tips": "/",  "/tag/local-business-directories": "/",  "/tag/local-business-review": "/white-label-review-management",  "/tag/local-business-reviews": "/white-label-review-management",  "/tag/local-citations": "/",  "/tag/local-search": "/",  "/tag/local-search-marketing": "/",  "/tag/local-sem": "/",  "/tag/local-seo": "/white-label-local-seo",  "/tag/local-seo/page/2": "/white-label-local-seo",  "/tag/marketing": "/",  "/tag/marketing-tips": "/",  "/tag/mobile-ads": "/white-label-paid-media",  "/tag/mobile-webdesign": "/",  "/tag/nashville-social-media-marketing": "/white-label-inbound-marketing-services",  "/tag/off-page-seo": "/white-label-local-seo",  "/tag/online-reputation": "/white-label-review-management",  "/tag/online-review-management": "/white-label-review-management",  "/tag/online-reviews": "/white-label-review-management",  "/tag/page-load-time": "/",  "/tag/page-speed": "/",  "/tag/pay-per-click": "/",  "/tag/pinterest": "/",  "/tag/pinterest-marketing": "/",  "/tag/ppc": "/",  "/tag/ppc-dallas": "/",  "/tag/ppc-management-for-small-business": "/",  "/tag/profile-tips": "/",  "/tag/reddit": "/",  "/tag/reddit-marketing": "/",  "/tag/roi-from-social-media": "/white-label-inbound-marketing-services",  "/tag/schema": "/",  "/tag/schema-markup": "/",  "/tag/search-engine-optimization-2": "/",  "/tag/seo": "/white-label-local-seo",  "/tag/seo-audit": "/white-label-local-seo",  "/tag/seo-dallas": "/white-label-local-seo",  "/tag/seo-services-for-small-business": "/white-label-local-seo",  "/tag/seo-tips-and-tricks": "/white-label-local-seo",  "/tag/small-business": "/",  "/tag/small-business-seo": "/white-label-local-seo",  "/tag/social-media": "/white-label-inbound-marketing-services",  "/tag/social-media-marketing": "/white-label-inbound-marketing-services",  "/tag/social-media-marketing-2": "/white-label-inbound-marketing-services",  "/tag/social-media-marketing-tips": "/white-label-inbound-marketing-services",  "/tag/social-media-marketing-tips-for-local-businesses": "/white-label-inbound-marketing-services",  "/tag/social-media-optimization": "/white-label-inbound-marketing-services",  "/tag/social-media-roi": "/white-label-inbound-marketing-services",  "/tag/target-audience": "/",  "/tag/technical-seo": "/white-label-local-seo",  "/tag/top-20-free-image-sites-for-small-businesses": "/",  "/tag/twitter-marketing": "/",  "/tag/web-design": "/",  "/tag/what-is-content-marketing": "/white-label-content-marketing",  "/tag/wordpress": "/",  "/ten-powerful-benefits-of-social-media-marketing-every-local-business-should-know": "/white-label-inbound-marketing-services",  "/ten-ppc-tools-to-take-your-advertising-game-to-the-next-level": "/white-label-paid-media",  "/testimonial": "/case-studies",  "/testimonial/chris-farr": "/case-studies",  "/testimonial/chris-farr/feed": "/",  "/testimonial/cynthia-cavoto": "/case-studies",  "/testimonial/cynthia-cavoto/feed": "/",  "/testimonial/david-dorn": "/case-studies",  "/testimonial/david-dorn/feed": "/",  "/testimonial/daxon-edwards": "/case-studies",  "/testimonial/daxon-edwards/feed": "/",  "/testimonial/feed": "/",  "/testimonial/tommy-wolosen": "/case-studies",  "/testimonial/tommy-wolosen/feed": "/",  "/testimonials": "/case-studies",  "/text-message-marketing-nashville": "/white-label-inbound-marketing-services",  "/thank-you-for-opting-in/feed": "/",  "/the-10-step-local-link-building-cheat-sheet-to-boost-rankings-in-2020": "/white-label-link-building",  "/the-complete-guide-to-choosing-a-digital-marketing-agency-for-your-small-business": "/white-label-inbound-marketing-services",  "/the-essential-instagram-hashtags-for-small-businesses": "/white-label-inbound-marketing-services",  "/the-top-20-seo-companies-in-dallas-tx-2025-edition": "/white-label-local-seo",  "/time-trigger": "/white-label-inbound-marketing-services",  "/top-20-free-image-sites-for-small-businesses-bloggers-and-creatives": "/white-label-inbound-marketing-services",  "/top-25-local-business-directories-to-get-listed-on-today": "/white-label-gbp-seo",  "/top-link-building-strategies-link-pruning": "/white-label-inbound-marketing-services",  "/top-link-building-strategies-link-pruning/feed": "/",  "/twitter-marketing": "/white-label-inbound-marketing-services",  "/twitter-marketing/feed": "/",  "/twitter-nation-140-characters": "/white-label-inbound-marketing-services",  "/two-major-reasons-to-stop-looking-at-organic-rankings-and-focus-on-what-matters": "/white-label-inbound-marketing-services",  "/understanding-lazy-loading-for-seo": "/white-label-local-seo",  "/using-instagram-small-business-marketing": "/white-label-inbound-marketing-services",  "/using-instagram-small-business-marketing/feed": "/",  "/visibility-for-small-online-business": "/white-label-inbound-marketing-services",  "/web-design": "/white-label-inbound-marketing-services",  "/web-design/feed": "/",  "/web-design/www.dialedinweb.com/blog": "/white-label-inbound-marketing-services",  "/web-portfolio": "/case-studies",  "/what-does-a-digital-marketer-do-dallas-movers": "/white-label-inbound-marketing-services",  "/what-does-apples-ios-14-update-means-for-your-facebook-ads": "/white-label-paid-media",  "/what-is-conversion-rate-optimization": "/",  "/what-is-conversion-rate-optimization/feed": "/",  "/what-is-local-seo-the-top-5-essential-guide": "/white-label-local-seo",  "/what-is-online-presence": "/",  "/what-kinds-of-businesses-should-use-ppc-advertising": "/white-label-paid-media",  "/what-we-do/content-marketing": "/white-label-content-marketing",  "/what-we-do/content-marketing-nashville": "/white-label-content-marketing",  "/what-we-do/content-marketing/content-corkboard": "/white-label-content-marketing",  "/what-we-do/content-marketing/feed": "/",  "/what-we-do/design": "/",  "/what-we-do/nashville-content-marketing": "/white-label-content-marketing",  "/what-we-do/nashville-social-media-marketing": "/white-label-inbound-marketing-services",  "/what-we-do/nashville-social-media-marketing/feed": "/",  "/what-we-do/search": "/",  "/what-we-do/social-media-marketing": "/white-label-inbound-marketing-services",  "/what-we-do/social-media-marketing/feed": "/",  "/why-brand-consistency-is-important": "/",  "/why-local-links-are-still-essential-in-2020-and-how-to-get-them": "/white-label-link-building",  "/why-local-seo-is-important-dallas": "/white-label-local-seo",  "/why-seo-is-not-dead": "/white-label-local-seo",  "/why-your-small-business-website-isnt-ranking-and-how-seo-services-can-help": "/white-label-local-seo",  "/works": "/",  "/www.dialedinlocal.com/blog": "/",  "/www.dialedinweb.com/blog": "/",  "/yelp-google-facebook-reviews-does-one-matter-more-than-the-other": "/white-label-review-management",};

// ── White-label → trade-specific: single-hop 301s (no intermediate stop) ──
const WHITE_LABEL_REDIRECTS = {
  // Hub pages
  "/white-label-inbound-marketing-services": "/",
  "/white-label-local-seo": "/hvac-and-plumbing-seo",
  "/white-label-gbp-seo": "/plumbing-google-maps",
  "/white-label-paid-media": "/plumbing-paid-advertising",
  "/white-label-email-marketing": "/plumbing-email-marketing",
  "/white-label-local-authority-building": "/plumbing-authority-building",
  "/white-label-reporting": "/plumbing-reporting",
  "/white-label-content-marketing": "/plumbing-content-marketing",
  // Local SEO spokes
  "/white-label-onpage-optimization": "/hvac-and-plumbing-seo",
  "/white-label-technical-seo": "/hvac-and-plumbing-seo",
  "/white-label-local-keyword-strategy": "/hvac-and-plumbing-seo",
  "/white-label-content-development": "/hvac-and-plumbing-seo",
  "/white-label-link-building": "/hvac-and-plumbing-seo",
  "/white-label-schema-markup": "/hvac-and-plumbing-seo",
  "/white-label-nap-citations": "/hvac-and-plumbing-seo",
  // Google Maps spokes
  "/white-label-gbp-optimization": "/plumbing-google-maps",
  "/white-label-review-management": "/plumbing-google-maps",
  "/white-label-citation-building": "/plumbing-google-maps",
  "/white-label-post-scheduling": "/plumbing-google-maps",
  "/white-label-photo-optimization": "/plumbing-google-maps",
  "/white-label-qa-management": "/plumbing-google-maps",
  "/white-label-google-maps-local-seo": "/plumbing-google-maps",
  "/white-label-google-maps": "/plumbing-google-maps",
  // Paid Media spokes
  "/white-label-google-ads": "/plumbing-paid-advertising",
  "/white-label-meta-ads": "/plumbing-paid-advertising",
  "/white-label-local-service-ads": "/plumbing-paid-advertising",
  "/white-label-retargeting-campaigns": "/plumbing-paid-advertising",
  "/white-label-landing-page-design": "/plumbing-paid-advertising",
  "/white-label-conversion-tracking": "/plumbing-paid-advertising",
  "/white-label-local-ppc": "/plumbing-paid-advertising",
  // Email Marketing spokes
  "/white-label-campaign-strategy": "/plumbing-email-marketing",
  "/white-label-list-management": "/plumbing-email-marketing",
  "/white-label-automation-flows": "/plumbing-email-marketing",
  "/white-label-newsletter-design": "/plumbing-email-marketing",
  "/white-label-ab-testing": "/plumbing-email-marketing",
  "/white-label-performance-analytics": "/plumbing-email-marketing",
  // Content Marketing spokes
  "/white-label-geographical-content": "/plumbing-content-marketing",
  "/white-label-topical-authority": "/plumbing-content-marketing",
  "/white-label-topical-content": "/plumbing-content-marketing",
  "/white-label-power-posts": "/plumbing-content-marketing",
  "/white-label-ebooks-guides": "/plumbing-content-marketing",
  "/white-label-lead-magnets": "/plumbing-content-marketing",
  "/white-label-press-releases": "/plumbing-content-marketing",
  "/white-label-case-studies": "/plumbing-content-marketing",
  "/white-label-faq-content": "/plumbing-content-marketing",
  "/white-label-hub-spoke-buildouts": "/plumbing-content-marketing",
  // Authority Building spokes
  "/white-label-structured-citations": "/plumbing-authority-building",
  "/white-label-local-links": "/plumbing-authority-building",
  "/white-label-unstructured-citations": "/plumbing-authority-building",
  "/white-label-brand-mentions": "/plumbing-authority-building",
  "/white-label-anchor-text": "/plumbing-authority-building",
  "/white-label-sponsorships": "/plumbing-authority-building",
  // Reporting spokes
  "/white-label-branded-dashboards": "/plumbing-reporting",
  "/white-label-dashboards": "/plumbing-reporting",
  "/white-label-monthly-performance-reports": "/plumbing-reporting",
  "/white-label-rank-tracking-visibility": "/plumbing-reporting",
  "/white-label-call-tracking-lead-attribution": "/plumbing-reporting",
  "/white-label-roi-revenue-analysis": "/plumbing-reporting",
  "/white-label-client-presentation-decks": "/plumbing-reporting",
  // SEO campaigns / misc
  "/white-label-seo-campaigns": "/hvac-and-plumbing-seo",
  // ── P0 canonical-pointing-to-/404 fixes ──
  "/aio-geo": "/ai-automation",
  "/plumbing-hvac-digital-marketing": "/",
  "/facebook-advertising": "/plumbing-facebook-advertising",
  "/hvac-programmatic-advertising": "/plumbing-programmatic-advertising",
  "/linkedin-advertising": "/plumbing-linkedin-advertising",
  "/microsoft-advertising": "/hvac-and-plumbing-paid-ads",
  "/web-design": "/plumbing-and-hvac-web-design",
  "/ai-search-optimization": "/ai-automation",
  "/local-services-ads": "/hvac-and-plumbing-paid-ads",
  "/instagram-advertising": "/plumbing-instagram-advertising",
  "/google-search-ads": "/plumbing-search-ads",
  // Nested white-label-inbound-marketing-services paths
  "/white-label-inbound-marketing-services/local-seo": "/hvac-and-plumbing-seo",
  "/white-label-inbound-marketing-services/google-maps": "/plumbing-google-maps",
  "/white-label-inbound-marketing-services/paid-media": "/plumbing-paid-advertising",
  "/white-label-inbound-marketing-services/email-marketing": "/plumbing-email-marketing",
  "/white-label-inbound-marketing-services/local-authority-building": "/plumbing-authority-building",
  "/white-label-inbound-marketing-services/reporting": "/plumbing-reporting",
  "/white-label-inbound-marketing-services/content-marketing": "/plumbing-content-marketing",
};

const VALID_ROUTES = new Set([  "/",  "/404",  "/about",  "/case-studies",  "/contact",  "/our-blog",]);


function normalizePath(pathname) {
  if (!pathname) return "/";
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname;
}

function applyAssetCachingHeaders(resp) {
  const h = new Headers(resp.headers);

  // 1) Strip cookies to allow caching (safe for static assets)
  h.delete("set-cookie");

  // 2) Long-lived browser + edge cache for fingerprinted assets
  // Vite-style /assets/* files are typically content-hashed → safe to cache "forever"
  h.set("cache-control", "public, max-age=31536000, immutable");

  // Optional: help intermediate caches / CDNs (Cloudflare honors Cache-Control too)
  // h.set("cache-control", "public, max-age=31536000, s-maxage=31536000, immutable");

  return new Response(resp.body, { status: resp.status, statusText: resp.statusText, headers: h });
}

function applyHtmlCachingHeaders(resp) {
  const h = new Headers(resp.headers);

  // Strip cookies to keep HTML cacheable.
  h.delete("set-cookie");

  // Cache HTML at the edge briefly; keep browser cache short.
  h.set("cache-control", "public, max-age=0, s-maxage=300");

  return new Response(resp.body, { status: resp.status, statusText: resp.statusText, headers: h });
}


function addDebug(resp, env, action) {
  if ((env.DEBUG_HEADERS || "0") !== "1") return resp;
  const h = new Headers(resp.headers);
  h.set("x-diw-worker", "hit");
  if (action) h.set("x-diw-action", action);
  return new Response(resp.body, {
    status: resp.status,
    statusText: resp.statusText,
    headers: h,
  });
}

function addCorsHeaders(resp, request) {
  const origin = request.headers.get("origin");
  const allowedOrigins = new Set([
    "https://www.dialedinweb.com",
    "https://dialedinweb.com",
    "https://origin.dialedinweb.com",
    "https://edge.dialedinweb.com"
  ]);

  if (!origin || !allowedOrigins.has(origin)) {
    return resp;
  }

  const h = new Headers(resp.headers);
  h.set("access-control-allow-origin", origin);
  h.set("access-control-allow-methods", "GET, POST, OPTIONS");
  h.set("access-control-allow-headers", "content-type, x-requested-with");
  h.set("access-control-allow-credentials", "true");
  h.set("vary", "origin");
  return new Response(resp.body, { status: resp.status, statusText: resp.statusText, headers: h });
}

function buildCorsPreflight(request) {
  const origin = request.headers.get("origin");
  const allowedOrigins = new Set([
    "https://www.dialedinweb.com",
    "https://dialedinweb.com",
    "https://origin.dialedinweb.com",
    "https://edge.dialedinweb.com"
  ]);

  if (!origin || !allowedOrigins.has(origin)) {
    return new Response("Forbidden", { status: 403 });
  }

  const headers = new Headers();
  headers.set("access-control-allow-origin", origin);
  headers.set("access-control-allow-methods", "GET, POST, OPTIONS");
  headers.set("access-control-allow-headers", "content-type, x-requested-with");
  headers.set("access-control-allow-credentials", "true");
  headers.set("access-control-max-age", "86400");
  headers.set("vary", "origin");
  return new Response(null, { status: 204, headers });
}

function redirect301(env, location, action) {
  const h = new Headers({ Location: location });
  h.set("cache-control", "no-store");
  if ((env.DEBUG_HEADERS || "0") === "1") {
    h.set("x-diw-worker", "hit");
    if (action) h.set("x-diw-action", action);
  }
  return new Response(null, { status: 301, headers: h });
}

async function fetchFromOrigin(request, env, publicUrl, hops = 0) {
  if (hops > 5) {
    return addDebug(new Response("Upstream redirect loop", { status: 508 }), env, "origin-loop");
  }

  const originBase = new URL(env.ORIGIN_URL || DEFAULT_ORIGIN_URL);
  const inUrl = new URL(publicUrl);

  const outUrl = new URL(publicUrl);
  outUrl.protocol = originBase.protocol;
  outUrl.hostname = originBase.hostname;
  outUrl.port = originBase.port;

  const headers = new Headers(request.headers);
  headers.delete("host");

  const upstreamReq = new Request(outUrl.toString(), {
    method: request.method,
    headers,
    body: request.body,
    redirect: "manual",
  });

  const upstreamResp = await fetch(upstreamReq);

  if (upstreamResp.status >= 300 && upstreamResp.status < 400) {
    const loc = upstreamResp.headers.get("location");
    if (loc) {
      const canonicalHost = env.CANONICAL_HOST || DEFAULT_CANONICAL_HOST;
      const locUrl = new URL(loc, `https://${canonicalHost}`);
      const isPublicHost =
          locUrl.hostname === canonicalHost ||
          locUrl.hostname === "dialedinweb.com" ||
          locUrl.hostname === "origin.dialedinweb.com" ||
          locUrl.hostname === "edge.dialedinweb.com";

      if (isPublicHost) {
        const nextPublic = new URL(inUrl.toString());
        nextPublic.pathname = locUrl.pathname;
        nextPublic.search = locUrl.search;
        return fetchFromOrigin(request, env, nextPublic.toString(), hops + 1);
      }
    }
  }

  return addDebug(upstreamResp, env, "origin");
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const host = url.hostname;
    const pathname = normalizePath(url.pathname);

    if (pathname.startsWith("/~api/analytics")) {
      if (request.method === "OPTIONS") {
        return addDebug(buildCorsPreflight(request), env, "analytics-preflight");
      }

      const originResp = await fetchFromOrigin(request, env, url.toString());
      return addDebug(addCorsHeaders(originResp, request), env, "analytics-cors");
    }

    const canonicalHost = env.CANONICAL_HOST || DEFAULT_CANONICAL_HOST;

    // Universal trailing-slash 301: redirect /foo/ -> /foo (except root /)
    if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
      const dest = new URL(url.toString());
      dest.pathname = url.pathname.replace(/\/+$/, "");
      return redirect301(env, dest.toString(), "trailing-slash");
    }

    if (host === "dialedinweb.com") {
      const dest = new URL(url.toString());
      dest.hostname = canonicalHost;
      return redirect301(env, dest.toString(), "apex-to-www");
    }

    const allowedHosts = new Set(["edge.dialedinweb.com", canonicalHost, "dialedinweb.com"]);
    if (!allowedHosts.has(host)) {
      return addDebug(new Response("Not Found", { status: 404 }), env, "host-404");
    }

    const mapped = WHITE_LABEL_REDIRECTS[pathname] || REDIRECTS[pathname];
    if (mapped) {
      // Resolve any remaining two-hop chains through WHITE_LABEL_REDIRECTS
      const finalDest = WHITE_LABEL_REDIRECTS[mapped] || mapped;
      const dest = new URL(url.toString());
      dest.hostname = canonicalHost;
      dest.pathname = normalizePath(finalDest);
      dest.search = url.search;
      return redirect301(env, dest.toString(), "legacy-redirect");
    }
    const isGetOrHead = request.method === "GET" || request.method === "HEAD";
    const accept = request.headers.get("accept") || "";

    const isHtmlNav = isGetOrHead && accept.includes("text/html");

    if (!isHtmlNav || STATIC_ASSET_PATTERN.test(pathname)) {
      const originResp = await fetchFromOrigin(request, env, url.toString());
      // Only apply to actual static assets (not API/non-html)
      if (STATIC_ASSET_PATTERN.test(pathname)) {
        // PDFs: inject X-Robots-Tag: noindex so Google ignores them
        if (/\.pdf$/i.test(pathname)) {
          const assetResp = applyAssetCachingHeaders(originResp);
          const h = new Headers(assetResp.headers);
          h.set("x-robots-tag", "noindex, nofollow");
          return addDebug(new Response(assetResp.body, { status: assetResp.status, statusText: assetResp.statusText, headers: h }), env, "pdf-noindex");
        }
        return addDebug(applyAssetCachingHeaders(originResp), env, "asset-cache");
      }
      return originResp;
    }

    if (VALID_ROUTES.has(pathname) && isGetOrHead) {
      const originResp = await fetchFromOrigin(request, env, url.toString());
      if (originResp.ok) {
        return addDebug(applyHtmlCachingHeaders(originResp), env, "html-cache");
      }
      return originResp;
    }

    const notFoundPublic = new URL(url.toString());
    notFoundPublic.pathname = "/404";
    const origin404 = await fetchFromOrigin(request, env, notFoundPublic.toString());

    const h = new Headers(origin404.headers);
    h.set("x-robots-tag", "noindex, nofollow");
    h.set("cache-control", "no-store");
    if ((env.DEBUG_HEADERS || "0") === "1") {
      h.set("x-diw-worker", "hit");
      h.set("x-diw-action", "true-404");
    }

    return new Response(origin404.body, { status: 404, headers: h });
  },
};