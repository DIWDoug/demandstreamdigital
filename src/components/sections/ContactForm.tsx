import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    interests: [] as string[],
    budget: "",
    message: ""
  });

  const steps = [
    {
      title: "Define Your Scope",
      content: "Tell us exactly what services you need fulfilled. We'll help you map out the deliverables and set clear expectations."
    },
    {
      title: "Get Wholesale Pricing",
      content: "Receive transparent, agency-friendly pricing that protects your margins while delivering premium results."
    },
    {
      title: "Onboard Your Clients",
      content: "We provide white-label onboarding materials so your clients never know we exist. Your brand, your process."
    },
    {
      title: "Let Us Execute",
      content: "Our team handles the heavy lifting—campaigns, optimizations, reporting—while you focus on growing your agency."
    },
    {
      title: "Deliver Results",
      content: "You receive white-labeled deliverables ready for client presentation. Every report includes your logo and branding so it looks and feels like your own work."
    }
  ];

  const interestOptions = [
    "Web Design (WordPress)",
    "Digital Inbound Marketing",
    "Search Engine Optimization (SEO)",
    "Web Advertising",
    "Local Reputation Management",
    "Amazon Advertising"
  ];

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background relative">
      <div className="section-divider absolute top-0" />
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Centered Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 text-foreground">
              Fulfillment in 5 Clear Steps
            </h2>
            <p className="text-lg text-text-secondary">
              A predictable onboarding process designed for agencies that value control and execution.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Accordion */}
            <div>
              <Accordion type="single" collapsible defaultValue="item-4" className="space-y-3">
                {steps.map((step, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-surface-elevated border border-border rounded-lg px-5 data-[state=open]:border-cta/30"
                  >
                    <AccordionTrigger className="text-lg font-medium text-foreground hover:no-underline py-4">
                      {step.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-text-secondary pb-4">
                      {step.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Right Column - Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-foreground mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-surface-dark border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:border-accent-blue transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-foreground mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-surface-dark border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:border-accent-blue transition-colors"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-foreground mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-surface-dark border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:border-accent-blue transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-foreground mb-2">
                      Website <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="url"
                      required
                      placeholder="https://"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-surface-dark border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:border-accent-blue transition-colors"
                    />
                  </div>
                </div>

                {/* Interest Checkboxes */}
                <fieldset className="border border-border rounded-lg p-4">
                  <legend className="text-sm text-foreground px-2">
                    I'm interested in: <span className="text-red-500">*</span>
                  </legend>
                  <div className="space-y-3 mt-2">
                    {interestOptions.map((interest) => (
                      <label key={interest} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleInterestChange(interest)}
                          className="w-4 h-4 rounded border-border bg-surface-dark text-cta focus:ring-cta"
                        />
                        <span className="text-foreground text-sm">{interest}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* Budget Dropdown */}
                <div>
                  <label className="block text-sm text-foreground mb-2">
                    Monthly Marketing Budget <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-surface-dark border border-border text-foreground focus:outline-none focus:border-accent-blue transition-colors"
                  >
                    <option value="">Select budget below</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-sm text-foreground mb-2">
                    How can we help you?
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-surface-dark border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:border-accent-blue transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="btn-cta w-full group">
                  LET'S GET STARTED
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
