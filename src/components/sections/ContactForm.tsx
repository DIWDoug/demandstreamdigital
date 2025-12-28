import { useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SubtleOrbs from "@/components/SubtleOrbs";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    revenue: ""
  });

  const steps = [
    {
      title: "Discovery & Alignment",
      content: "We start with a deep-dive conversation to understand your agency's goals, client base, and fulfillment needs. No cookie-cutter approaches—just clarity."
    },
    {
      title: "Scope & Pricing",
      content: "Receive transparent, agency-friendly pricing that protects your margins. We map out deliverables and set clear expectations upfront."
    },
    {
      title: "Seamless Onboarding",
      content: "We provide white-label onboarding materials so your clients never know we exist. Your brand, your process, zero friction."
    },
    {
      title: "Execute with Precision",
      content: "Our team handles the heavy lifting: campaigns, optimizations, and reporting. You focus on growing your agency while we deliver."
    },
    {
      title: "Deliver & Communicate",
      content: "You receive white-labeled deliverables ready for client presentation. Proactive updates keep you informed every step of the way."
    },
    {
      title: "Delight & Retain",
      content: "We go beyond delivery—helping you exceed client expectations, strengthen relationships, and build long-term retention."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-surface-elevated relative overflow-hidden">
      <SubtleOrbs variant="top-right" />
      <div className="section-divider absolute top-0" />
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Centered Header */}
          <div className="text-center mb-16">
            <h2 className="mb-4 text-foreground">
              Fulfillment in <span className="text-pop">6 Clear Steps</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A predictable process designed for agencies that value control, execution, and client delight.
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
                    className="bg-surface-elevated border border-border rounded-lg px-5 data-[state=open]:border-accent-blue/30 data-[state=open]:shadow-lg data-[state=open]:shadow-accent-blue/10 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-lg font-medium text-foreground hover:no-underline py-4">
                      <div className="flex items-center gap-4">
                        <span className="step-badge">{index + 1}</span>
                        <span>{step.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-text-secondary pb-4 pl-14">
                      {step.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Right Column - Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm text-foreground mb-2">
                    Full Name <span className="text-red-500">*</span>
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
                
                <div>
                  <label className="block text-sm text-foreground mb-2">
                    SMS Enabled Phone # <span className="text-red-500">*</span>
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
                    Agency Monthly Revenue <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.revenue}
                    onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-surface-dark border border-border text-foreground text-sm focus:outline-none focus:border-accent-blue transition-colors"
                  >
                    <option value="">Select revenue range</option>
                    <option value="under-25k">Under $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-250k">$100,000 - $250,000</option>
                    <option value="250k-500k">$250,000 - $500,000</option>
                    <option value="500k+">$500,000+</option>
                  </select>
                </div>


                <button type="submit" className="btn-cta w-full group">
                  Explore a Partnership
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>


                {/* Partner Quote */}
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-text-secondary italic text-center">
                    "They're trustworthy, they communicate clearly and really consistently, which is sometimes rare in today's world."
                  </p>
                  <p className="text-xs text-text-muted text-center mt-2">
                    Trevor Anderson, Founder & CEO, Anderson Collaborative
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
