import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { PHONE_NUMBER, EMAIL, ADDRESS } from "@/lib/constants";

const Privacy = () => {
  const lastUpdated = "January 5, 2025";

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Privacy Policy | Dialed-In Web</title>
        <meta name="description" content="Learn how Dialed-In Web collects, uses, and protects your personal information. Our privacy policy covers GDPR, CCPA, and data protection practices." />
        <meta name="keywords" content="privacy policy, GDPR, CCPA, data protection, Dialed-In Web privacy" />
        <link rel="canonical" href="https://dialedinweb.com/privacy" />
        
        {/* Hreflang Tags */}
        <link rel="alternate" hrefLang="en-US" href="https://dialedinweb.com/privacy" />
        <link rel="alternate" hrefLang="en-CA" href="https://dialedinweb.com/privacy" />
        <link rel="alternate" hrefLang="x-default" href="https://dialedinweb.com/privacy" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Privacy Policy | Dialed-In Web" />
        <meta property="og:description" content="Learn how Dialed-In Web collects, uses, and protects your personal information." />
        <meta property="og:url" content="https://dialedinweb.com/privacy" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dialed-In Web" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacy Policy | Dialed-In Web" />
        <meta name="twitter:description" content="Learn how Dialed-In Web collects, uses, and protects your personal information." />
      </Helmet>

      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-text-muted mb-12">Last Updated: {lastUpdated}</p>

          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
              <p className="text-text-secondary leading-relaxed">
                Dialed-In Web ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at dialedinweb.com or engage with our white-label digital marketing services.
              </p>
              <p className="text-text-secondary leading-relaxed mt-4">
                By using our website or services, you consent to the data practices described in this policy. If you do not agree with our policies and practices, please do not use our website or services.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-foreground mt-6 mb-3">Personal Information You Provide</h3>
              <p className="text-text-secondary leading-relaxed">
                We collect information you voluntarily provide when you:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3">
                <li>Fill out contact forms or request information</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Request a consultation or partnership inquiry</li>
                <li>Use our calculators or interactive tools</li>
                <li>Communicate with us via email, phone, or other channels</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                This information may include: name, email address, phone number, company name, website URL, and any other information you choose to provide.
              </p>

              <h3 className="text-xl font-medium text-foreground mt-6 mb-3">Information Collected Automatically</h3>
              <p className="text-text-secondary leading-relaxed">
                When you visit our website, we automatically collect certain information, including:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3">
                <li>IP address and approximate geographic location</li>
                <li>Browser type and version</li>
                <li>Device type and operating system</li>
                <li>Pages visited and time spent on each page</li>
                <li>Referring website or source</li>
                <li>Date and time of access</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-text-secondary leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3">
                <li>Respond to your inquiries and fulfill your requests</li>
                <li>Provide, maintain, and improve our services</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Analyze website usage and optimize user experience</li>
                <li>Protect against fraud and unauthorized access</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* Cookies and Tracking */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-text-secondary leading-relaxed">
                We use cookies and similar tracking technologies to collect and store information about your interactions with our website. These include:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign effectiveness</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                You can control cookie preferences through your browser settings. Note that disabling certain cookies may affect website functionality.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Services</h2>
              <p className="text-text-secondary leading-relaxed">
                We may use third-party services that collect, monitor, and analyze information. These include:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3">
                <li><strong>Google Analytics:</strong> Website traffic analysis</li>
                <li><strong>Google reCAPTCHA:</strong> Spam and bot protection</li>
                <li><strong>Elfsight:</strong> Review display widgets</li>
                <li><strong>CRM Systems:</strong> Lead management and communications</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                Each third-party service has its own privacy policy governing the use of your information.
              </p>
            </section>

            {/* GDPR Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights Under GDPR (European Users)</h2>
              <p className="text-text-secondary leading-relaxed">
                If you are located in the European Economic Area (EEA) or United Kingdom, you have the following rights under the General Data Protection Regulation (GDPR):
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3">
                <li><strong>Right to Access:</strong> Request copies of your personal data</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data ("right to be forgotten")</li>
                <li><strong>Right to Restrict Processing:</strong> Request limitation of how we use your data</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your data to another organization</li>
                <li><strong>Right to Object:</strong> Object to processing of your personal data for marketing purposes</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                To exercise any of these rights, please contact us at {EMAIL}. We will respond to your request within 30 days.
              </p>
            </section>

            {/* CCPA Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights Under CCPA (California Residents)</h2>
              <p className="text-text-secondary leading-relaxed">
                If you are a California resident, the California Consumer Privacy Act (CCPA) provides you with specific rights:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3">
                <li><strong>Right to Know:</strong> Request disclosure of personal information collected, used, or disclosed</li>
                <li><strong>Right to Delete:</strong> Request deletion of personal information we hold about you</li>
                <li><strong>Right to Opt-Out:</strong> Opt out of the sale of your personal information (we do not sell personal information)</li>
                <li><strong>Right to Non-Discrimination:</strong> Not be discriminated against for exercising your privacy rights</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                To exercise these rights, contact us at {EMAIL} or call {PHONE_NUMBER}.
              </p>
            </section>

            {/* Canadian Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Canadian Privacy Rights (PIPEDA)</h2>
              <p className="text-text-secondary leading-relaxed">
                If you are a Canadian resident, you have rights under the Personal Information Protection and Electronic Documents Act (PIPEDA):
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3">
                <li>Access your personal information held by us</li>
                <li>Challenge the accuracy and completeness of your information</li>
                <li>Withdraw consent for the collection, use, or disclosure of your information</li>
              </ul>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Retention</h2>
              <p className="text-text-secondary leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. When data is no longer needed, it will be securely deleted or anonymized.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
              <p className="text-text-secondary leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure data storage with access controls</li>
                <li>Regular security assessments and updates</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">International Data Transfers</h2>
              <p className="text-text-secondary leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence, including the United States. These countries may have different data protection laws. When we transfer data internationally, we implement appropriate safeguards to protect your information.
              </p>
            </section>

            {/* Marketing Communications */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Marketing Communications</h2>
              <p className="text-text-secondary leading-relaxed">
                With your consent, we may send you marketing communications about our services. You can opt out of marketing emails at any time by:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2 mt-3">
                <li>Clicking the "unsubscribe" link in any marketing email</li>
                <li>Contacting us at {EMAIL}</li>
                <li>Replying "STOP" to any SMS marketing message</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                Please note that even after opting out of marketing, you may still receive transactional or administrative communications.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Children's Privacy</h2>
              <p className="text-text-secondary leading-relaxed">
                Our website and services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Privacy Policy</h2>
              <p className="text-text-secondary leading-relaxed">
                We may update this Privacy Policy from time to time. The updated version will be indicated by the "Last Updated" date at the top of this page. We encourage you to review this Privacy Policy periodically. Continued use of our website after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="text-text-secondary leading-relaxed">
                If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
              </p>
              <div className="mt-4 p-6 bg-surface-dark rounded-xl border border-border">
                <p className="text-foreground font-medium mb-3">Dialed-In Web</p>
                <p className="text-text-secondary">{ADDRESS.full}</p>
                <p className="text-text-secondary">Email: {EMAIL}</p>
                <p className="text-text-secondary">Phone: {PHONE_NUMBER}</p>
              </div>
              <p className="text-text-secondary leading-relaxed mt-4">
                For GDPR-related inquiries, you also have the right to lodge a complaint with a supervisory authority in your country of residence.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
