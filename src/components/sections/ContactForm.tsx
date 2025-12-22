import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    interest: ""
  });

  const steps = [
    "Define Your Scope",
    "Get Wholesale Pricing",
    "Onboard Your Clients",
    "Let Us Execute",
    "Deliver Results"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background relative">
      <div className="section-divider absolute top-0" />
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground">
              Fulfillment in 5 Clear Steps
            </h2>
            <p className="text-lg text-text-secondary">
              A predictable onboarding process designed for agencies that value control and execution.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-elevated border border-border flex items-center justify-center shrink-0">
                    <span className="text-sm font-semibold text-text-secondary">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-lg text-foreground">{step}</p>
                </div>
              ))}
            </div>

            {/* Form - Softened contrast */}
            <div className="bg-surface-elevated/50 rounded-2xl p-8 border border-border">
              {/* Microcopy to reduce anxiety */}
              <p className="text-sm text-text-muted text-center mb-6">
                This starts a conversation, not a sales call.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-surface-dark border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:border-cta transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-surface-dark border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:border-cta transition-colors"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-surface-dark border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:border-cta transition-colors"
                  />
                  <input
                    type="url"
                    placeholder="Website (https://)"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-surface-dark border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:border-cta transition-colors"
                  />
                </div>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-surface-dark border border-border text-foreground focus:outline-none focus:border-cta transition-colors"
                >
                  <option value="" className="text-text-muted">I'm interested in...</option>
                  <option value="local-seo">Local SEO</option>
                  <option value="google-maps">Google Maps / GBP</option>
                  <option value="google-ads">Google Ads</option>
                  <option value="meta-ads">Meta Ads</option>
                  <option value="organic-social">Organic Social</option>
                  <option value="full-service">Full Service Partnership</option>
                </select>

                <button type="submit" className="btn-cta w-full group">
                  Let's Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
