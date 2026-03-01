import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { PHONE_NUMBER, EMAIL, ADDRESS } from "@/lib/constants";

const Privacy = () => {
  const lastUpdated = "January 1, 2026";

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead
        title="Privacy Policy | Demand Stream Digital"
        description="How Demand Stream Digital handles your data. Covers collection, usage, GDPR compliance, cookies, and your rights as a visitor or client."
        canonical="https://demandstreamdigital.com/privacy"
        ogImage="https://demandstreamdigital.com/og-images/privacy.jpg"
      />

      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-text-muted mb-12">Last Updated: {lastUpdated}</p>

          <div className="prose prose-invert prose-lg max-w-none space-y-10">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-text-secondary leading-relaxed">
                Demand Stream Digital, LLC ("Demand Stream Digital," "we," "us," or "our") respects your privacy and is committed to protecting it through this Privacy Policy.
              </p>
              <p className="text-text-secondary leading-relaxed mt-4">
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit https://www.demandstreamdigital.com (the "Website"), including any related services, forms, or communications.
              </p>
              <p className="text-text-secondary leading-relaxed mt-4">
                By accessing or using the Website, you agree to this Privacy Policy. If you do not agree, you must not use the Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <p className="text-text-secondary leading-relaxed">We collect information in the following ways:</p>
              <h3 className="text-xl font-medium text-foreground mt-6 mb-3">A. Personal Information You Provide</h3>
              <p className="text-text-secondary leading-relaxed">You may voluntarily provide personal information, including:</p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3">
                <li>Full name</li><li>Email address</li><li>Phone number</li><li>Company name</li><li>Billing and payment information</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">Payments are processed securely through Stripe and PayPal. Demand Stream Digital does not store or directly process payment card information.</p>
              <h3 className="text-xl font-medium text-foreground mt-6 mb-3">B. Automatically Collected Information</h3>
              <p className="text-text-secondary leading-relaxed">When you visit the Website, we may automatically collect:</p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3">
                <li>IP address</li><li>Browser type and version</li><li>Device type and operating system</li><li>Pages visited, time spent, and referring URLs</li><li>Approximate geographic location</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">This data is collected using cookies, pixels, and similar tracking technologies.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Advertising, Analytics, and Retargeting</h2>
              <p className="text-text-secondary leading-relaxed">We use third-party advertising and analytics platforms, including:</p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3">
                <li>Google Analytics</li><li>Google Ads</li><li>Meta (Facebook and Instagram)</li><li>Microsoft Bing Ads</li><li>Reddit Ads</li><li>Quora Ads</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">These platforms may use cookies, pixels, or similar technologies to:</p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3">
                <li>Analyze website usage and performance</li><li>Measure marketing effectiveness</li><li>Deliver targeted and retargeted advertisements</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">We do not sell personal information. Information is used solely for advertising, analytics, and business operations.</p>
              <p className="text-text-secondary leading-relaxed mt-4">Users may manage or opt out of targeted advertising through:</p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3">
                <li><a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">Google Ad Settings</a></li>
                <li><a href="https://www.facebook.com/ads/preferences" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">Meta Ad Preferences</a></li>
                <li><a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">Network Advertising Initiative (NAI) opt-out tools</a></li>
                <li><a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">Digital Advertising Alliance (DAA) opt-out tools</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Cookies and Tracking Technologies</h2>
              <p className="text-text-secondary leading-relaxed">We use cookies and similar technologies to:</p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3">
                <li>Enable core website functionality</li><li>Improve performance and user experience</li><li>Support analytics and advertising efforts</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">You can manage cookies through your browser settings. Disabling cookies may affect Website functionality.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. How We Use Your Information</h2>
              <p className="text-text-secondary leading-relaxed">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3">
                <li>Operate and maintain the Website</li><li>Respond to inquiries and provide services</li><li>Process transactions and payments</li><li>Send service-related or marketing communications</li><li>Improve advertising performance and Website experience</li><li>Comply with legal and regulatory obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Legal Bases for Processing (GDPR)</h2>
              <p className="text-text-secondary leading-relaxed">For users located in the European Economic Area (EEA), we process personal data under one or more of the following lawful bases:</p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3">
                <li>Your consent</li><li>Performance of a contract</li><li>Legitimate business interests that do not override your rights</li><li>Compliance with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Your GDPR Rights (EEA Residents)</h2>
              <p className="text-text-secondary leading-relaxed">If you are located in the EEA, you have the right to:</p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3">
                <li>Access your personal data</li><li>Request correction or deletion</li><li>Restrict or object to processing</li><li>Request data portability</li><li>Withdraw consent at any time</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">Requests may be submitted using the contact information below.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Disclosure of Information</h2>
              <p className="text-text-secondary leading-relaxed">We may disclose personal information:</p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3">
                <li>To service providers assisting with payments, analytics, or operations</li><li>To comply with legal obligations or lawful requests</li><li>To protect our rights, property, or safety</li><li>In connection with a merger, sale, or business transfer</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">We do not disclose personal information for unauthorized purposes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Data Retention</h2>
              <p className="text-text-secondary leading-relaxed">We retain personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Data Security</h2>
              <p className="text-text-secondary leading-relaxed">We implement reasonable administrative, technical, and physical safeguards designed to protect your information. However, no system is completely secure, and we cannot guarantee absolute security.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Children's Privacy</h2>
              <p className="text-text-secondary leading-relaxed">The Website is not intended for individuals under the age of 13. We do not knowingly collect personal information from children.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Third-Party Websites</h2>
              <p className="text-text-secondary leading-relaxed">The Website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Changes to This Privacy Policy</h2>
              <p className="text-text-secondary leading-relaxed">We may update this Privacy Policy at any time. Updates will be reflected by the "Last Updated" date. Continued use of the Website constitutes acceptance of the revised policy.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">14. Contact Information</h2>
              <p className="text-text-secondary leading-relaxed">For questions, requests, or privacy concerns, contact:</p>
              <div className="mt-4 p-6 bg-surface-dark rounded-xl border border-border">
                <p className="text-foreground font-medium mb-3">Demand Stream Digital, LLC</p>
                <p className="text-text-secondary">4849 Greenville Ave, Suite 100-176</p>
                <p className="text-text-secondary">Dallas, TX 75206</p>
                <p className="text-text-secondary">United States</p>
                <p className="text-text-secondary mt-3">Phone: +1 214-307-2995</p>
                <p className="text-text-secondary">Email: hello@demandstreamdigital.com</p>
                <p className="text-text-secondary">
                  Website:{" "}
                  <a href="https://www.demandstreamdigital.com" className="text-accent-blue hover:underline">
                    https://www.demandstreamdigital.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
