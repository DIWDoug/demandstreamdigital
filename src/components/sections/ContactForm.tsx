import { useState } from "react";
import { ArrowRight } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-surface-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="mb-3 text-foreground">
              Start a Conversation
            </h2>
            <p className="text-text-secondary">
              No contracts. No pressure. Let's see if we're a fit.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-surface-elevated border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:border-accent-blue transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-surface-elevated border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:border-accent-blue transition-colors"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-surface-elevated border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:border-accent-blue transition-colors"
              />
              <input
                type="url"
                placeholder="Agency Website"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-surface-elevated border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:border-accent-blue transition-colors"
              />
            </div>

            <textarea
              rows={4}
              placeholder="How can we help?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-surface-elevated border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:border-accent-blue transition-colors resize-none"
            />

            <button type="submit" className="btn-cta w-full">
              Send Message
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;