import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const blogCategories = [
  { name: "White-Label SEO", slug: "white-label-seo" },
  { name: "Local SEO", slug: "local-seo" },
  { name: "Agency Growth", slug: "agency-growth" },
  { name: "Paid Media", slug: "paid-media" },
  { name: "Content Marketing", slug: "content-marketing" },
  { name: "Email Marketing", slug: "email-marketing" },
];

const BlogSidebar = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("leads").insert({
        name: formData.name,
        email: formData.email,
        website: formData.website || null,
        source: "Blog Sidebar Form",
      });

      if (error) throw error;

      toast.success("Thanks! We'll be in touch soon.");
      setFormData({ name: "", email: "", website: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <aside className="space-y-8">
      {/* Schedule a Strategy Call */}
      <div className="bg-surface-dark rounded-xl p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Schedule a Strategy Call
        </h3>
        <a href={PHONE_HREF}>
          <Button 
            variant="outline" 
            className="w-full justify-center gap-2 border-border hover:border-cta hover:text-cta"
          >
            <Phone className="w-4 h-4" />
            Call Us {PHONE_NUMBER}
          </Button>
        </a>
      </div>

      {/* Request Information Form */}
      <div className="bg-cta/10 rounded-xl p-6 border border-cta/20">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Request Information
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="sidebar-name" className="text-sm text-muted-foreground">
              Your Name
            </Label>
            <Input
              id="sidebar-name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="mt-1 bg-background border-border"
              placeholder="Your Name"
            />
          </div>
          <div>
            <Label htmlFor="sidebar-email" className="text-sm text-muted-foreground">
              Your Email
            </Label>
            <Input
              id="sidebar-email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="mt-1 bg-background border-border"
              placeholder="Your Email"
            />
          </div>
          <div>
            <Label htmlFor="sidebar-website" className="text-sm text-muted-foreground">
              Your Website
            </Label>
            <Input
              id="sidebar-website"
              type="url"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="mt-1 bg-background border-border"
              placeholder="Your Website"
            />
          </div>
          <div>
            <Label htmlFor="sidebar-message" className="text-sm text-muted-foreground">
              Tell me about yourself
            </Label>
            <Textarea
              id="sidebar-message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="mt-1 bg-background border-border resize-none"
              rows={3}
              placeholder="Tell me about yourself"
            />
          </div>
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-cta hover:bg-cta/90 text-cta-foreground"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            By pressing "Submit", you agree that Dialed-In Web may contact you.
          </p>
        </form>
      </div>

      {/* Categories */}
      <div className="bg-surface-dark rounded-xl p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Recent Posts
        </h3>
        <ul className="space-y-3">
          {blogCategories.map((category) => (
            <li key={category.slug}>
              <Link
                to={`/blog?category=${category.slug}`}
                className="text-muted-foreground hover:text-cta transition-colors text-sm flex items-center gap-2"
              >
                <ArrowRight className="w-3 h-3" />
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default BlogSidebar;
