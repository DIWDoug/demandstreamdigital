import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const Terms = () => {
  const lastUpdated = "January 1, 2026";

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead
        title="Terms of Service | Demand Stream Digital"
        description="Review the Demand Stream Digital service agreement. Covers usage policies, client obligations, and legal terms for digital marketing services."
        canonical="https://demandstreamdigital.com/terms"
        ogImage="https://demandstreamdigital.com/og-images/terms.jpg"
        keywords="terms of service, terms and conditions, Demand Stream Digital terms, service agreement"
      />

      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-text-muted mb-12">Last Updated: {lastUpdated}</p>

          <div className="prose prose-invert prose-lg max-w-none space-y-10">
            {/* 1. Agreement to Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-text-secondary leading-relaxed">
                These Terms of Service ("Terms") constitute a legally binding agreement between you ("you," "your," or "Client") and Demand Stream Digital, LLC ("Demand Stream Digital," "we," "us," or "our") governing your access to and use of https://www.demandstreamdigital.com (the "Website") and any related services, tools, or content.
              </p>
              <p className="text-text-secondary leading-relaxed mt-4">
                By accessing or using the Website or engaging our services, you agree to be bound by these Terms. If you do not agree to these Terms, you must not use the Website or our services.
              </p>
            </section>

            {/* 2. Services */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services</h2>
              <p className="text-text-secondary leading-relaxed">
                Demand Stream Digital provides growth marketing services for plumbing and HVAC companies, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3">
                <li>Local SEO and organic search optimization</li>
                <li>Google Business Profile management</li>
                <li>Paid media management (Google Ads, Meta Ads, etc.)</li>
                <li>Content marketing and development</li>
                <li>Email marketing campaigns</li>
                <li>Link building and authority development</li>
                <li>Reporting and analytics</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                Specific services, deliverables, and pricing are detailed in individual service agreements or proposals provided to clients.
              </p>
            </section>

            {/* 3. Eligibility */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Eligibility</h2>
              <p className="text-text-secondary leading-relaxed">
                By using the Website or engaging our services, you represent and warrant that:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3">
                <li>You are at least 18 years of age</li>
                <li>You have the legal capacity to enter into binding agreements</li>
                <li>You are authorized to act on behalf of your business or organization</li>
                <li>Your use of the Website complies with all applicable laws and regulations</li>
              </ul>
            </section>

            {/* 4. Service Delivery */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Service Delivery</h2>
              <p className="text-text-secondary leading-relaxed">
                Our marketing services are designed to help plumbing and HVAC companies grow through digital marketing. By engaging our services, you acknowledge and agree that:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3">
                <li>Services are performed by Demand Stream Digital on your behalf</li>
                <li>You maintain ownership of your brand, website, and client relationships</li>
                <li>You are responsible for providing timely feedback and access as needed</li>
                <li>Results depend on market conditions, competition, and cooperation</li>
                <li>Demand Stream Digital will communicate directly with you regarding campaign progress</li>
              </ul>
            </section>

            {/* 5. Payment Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Payment Terms</h2>
              <p className="text-text-secondary leading-relaxed">
                Payment terms are as follows:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3">
                <li>Services are billed according to the terms outlined in your service agreement</li>
                <li>Payment is due upon receipt of invoice unless otherwise specified</li>
                <li>Payments are processed securely through Stripe or PayPal</li>
                <li>Late payments may result in service suspension or termination</li>
                <li>All fees are non-refundable unless otherwise stated in writing</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                We reserve the right to modify pricing with 30 days written notice.
              </p>
            </section>

            {/* 6. Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Intellectual Property</h2>
              <p className="text-text-secondary leading-relaxed">
                Unless otherwise specified in a service agreement:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3">
                <li>Demand Stream Digital retains ownership of proprietary methodologies, tools, and processes</li>
                <li>Upon full payment, clients receive a license to use deliverables for their intended purpose</li>
                <li>Content created for clients becomes the property of the client upon payment</li>
                <li>You may not resell or redistribute our proprietary tools or training materials</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                All trademarks, logos, and brand elements of Demand Stream Digital remain our exclusive property.
              </p>
            </section>

            {/* 7. Confidentiality */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Confidentiality</h2>
              <p className="text-text-secondary leading-relaxed">
                Both parties agree to maintain confidentiality of proprietary information disclosed during the business relationship. This includes, but is not limited to:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3">
                <li>Client lists and business strategies</li>
                <li>Pricing and financial information</li>
                <li>Marketing campaigns and performance data</li>
                <li>Technical processes and methodologies</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                Confidentiality obligations survive termination of the business relationship.
              </p>
            </section>

            {/* 8. Disclaimers and Limitations */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Disclaimers and Limitations</h2>
              <p className="text-text-secondary leading-relaxed">
                THE WEBSITE AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.
              </p>
              <p className="text-text-secondary leading-relaxed mt-4">
                We do not guarantee specific results from our marketing services. Performance depends on numerous factors including market conditions, competition, and client cooperation.
              </p>
              <p className="text-text-secondary leading-relaxed mt-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, DEMAND STREAM DIGITAL SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES.
              </p>
              <p className="text-text-secondary leading-relaxed mt-4">
                Our total liability for any claims arising from or related to these Terms or our services shall not exceed the amount paid by you to Demand Stream Digital in the twelve (12) months preceding the claim.
              </p>
            </section>

            {/* 9. Indemnification */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Indemnification</h2>
              <p className="text-text-secondary leading-relaxed">
                You agree to indemnify, defend, and hold harmless Demand Stream Digital and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorneys' fees) arising from:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3">
                <li>Your use of the Website or services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of a third party</li>
                <li>Any content or information you provide</li>
              </ul>
            </section>

            {/* 10. Termination */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Termination</h2>
              <p className="text-text-secondary leading-relaxed">
                Either party may terminate the service relationship with written notice as specified in the applicable service agreement. Upon termination:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3">
                <li>All outstanding payments become immediately due</li>
                <li>Access to client dashboards and reports may be discontinued</li>
                <li>Completed work will be delivered as specified in the agreement</li>
                <li>Confidentiality obligations remain in effect</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                We reserve the right to suspend or terminate access to the Website for violation of these Terms.
              </p>
            </section>

            {/* 11. Acceptable Use */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Acceptable Use</h2>
              <p className="text-text-secondary leading-relaxed">
                You agree not to use the Website or services to:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on the rights of others</li>
                <li>Transmit harmful, fraudulent, or deceptive content</li>
                <li>Interfere with the operation of the Website</li>
                <li>Attempt to gain unauthorized access to any systems</li>
                <li>Engage in any activity that could harm our reputation or business</li>
              </ul>
            </section>

            {/* 12. Third-Party Links */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Third-Party Links</h2>
              <p className="text-text-secondary leading-relaxed">
                The Website may contain links to third-party websites or services. We are not responsible for the content, privacy practices, or availability of these external sites. Your interactions with third parties are solely between you and the third party.
              </p>
            </section>

            {/* 13. Governing Law */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Governing Law</h2>
              <p className="text-text-secondary leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of Texas, United States, without regard to its conflict of law provisions.
              </p>
              <p className="text-text-secondary leading-relaxed mt-4">
                Any disputes arising under these Terms shall be resolved in the state or federal courts located in Dallas County, Texas, and you consent to the personal jurisdiction of such courts.
              </p>
            </section>

            {/* 14. Dispute Resolution */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">14. Dispute Resolution</h2>
              <p className="text-text-secondary leading-relaxed">
                Before initiating any legal action, the parties agree to attempt to resolve disputes through good-faith negotiation. If negotiation fails, disputes may be submitted to binding arbitration in accordance with the rules of the American Arbitration Association.
              </p>
            </section>

            {/* 15. Modifications to Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">15. Modifications to Terms</h2>
              <p className="text-text-secondary leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective upon posting to the Website with an updated "Last Updated" date. Your continued use of the Website after changes constitutes acceptance of the modified Terms.
              </p>
              <p className="text-text-secondary leading-relaxed mt-4">
                Material changes to Terms affecting active service agreements will be communicated directly to affected clients.
              </p>
            </section>

            {/* 16. Severability */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">16. Severability</h2>
              <p className="text-text-secondary leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            {/* 17. Entire Agreement */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">17. Entire Agreement</h2>
              <p className="text-text-secondary leading-relaxed">
                These Terms, together with any applicable service agreements and our Privacy Policy, constitute the entire agreement between you and Demand Stream Digital regarding the use of the Website and services, superseding any prior agreements.
              </p>
            </section>

            {/* 18. Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">18. Contact Information</h2>
              <p className="text-text-secondary leading-relaxed">
                For questions regarding these Terms of Service, please contact:
              </p>
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

export default Terms;
