import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
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

interface RecentPost {
  id: string;
  title: string;
  slug: string;
}

const BlogSidebar = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  // Fetch recent posts for "Most Popular" section (AD-style)
  const { data: recentPosts } = useQuery({
    queryKey: ['recent-posts-sidebar'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('id, title, slug')
        .order('published_at', { ascending: false })
        .limit(5);
      
      if (error) throw error;
      return data as RecentPost[];
    },
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
    <div className="space-y-8">
      {/* Schedule a Strategy Call - Top Priority */}
      <div className="pb-6 border-b border-border">
        <p className="text-sm text-muted-foreground mb-3">Schedule a Strategy Call</p>
        <a href={PHONE_HREF}>
          <Button 
            variant="outline" 
            className="w-full justify-center gap-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-medium"
          >
            <Phone className="w-4 h-4" />
            Call Us {PHONE_NUMBER}
          </Button>
        </a>
      </div>

      {/* Most Popular - AD Style */}
      {recentPosts && recentPosts.length > 0 && (
        <div className="pb-6 border-b border-border">
          <h3 className="text-xs font-bold uppercase tracking-widest text-foreground mb-4">
            Most Popular
          </h3>
          <ul className="space-y-4">
            {recentPosts.map((post, index) => (
              <li key={post.id} className="group">
                <Link
                  to={`/blog/${post.slug}`}
                  className="block"
                >
                  <span className="text-[15px] font-medium text-foreground group-hover:text-cta transition-colors leading-snug line-clamp-3">
                    {post.title}
                  </span>
                </Link>
                {index < recentPosts.length - 1 && (
                  <div className="mt-4 border-b border-border/50" />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Request Information Form */}
      <div className="bg-cta/10 rounded-lg p-5 border border-cta/20">
        <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-4">
          Request Information
        </h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <Label htmlFor="sidebar-name" className="text-xs text-muted-foreground">
              Your Name
            </Label>
            <Input
              id="sidebar-name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="mt-1 bg-background border-border h-9 text-sm"
              placeholder="Your Name"
            />
          </div>
          <div>
            <Label htmlFor="sidebar-email" className="text-xs text-muted-foreground">
              Your Email
            </Label>
            <Input
              id="sidebar-email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="mt-1 bg-background border-border h-9 text-sm"
              placeholder="Your Email"
            />
          </div>
          <div>
            <Label htmlFor="sidebar-website" className="text-xs text-muted-foreground">
              Your Website
            </Label>
            <Input
              id="sidebar-website"
              type="url"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="mt-1 bg-background border-border h-9 text-sm"
              placeholder="Your Website"
            />
          </div>
          <div>
            <Label htmlFor="sidebar-message" className="text-xs text-muted-foreground">
              Tell us about your agency
            </Label>
            <Textarea
              id="sidebar-message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="mt-1 bg-background border-border resize-none text-sm"
              rows={2}
              placeholder="Tell us about your agency"
            />
          </div>
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-cta hover:bg-cta/90 text-cta-foreground h-9 text-sm font-medium"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
          <p className="text-[10px] text-muted-foreground text-center leading-tight">
            By pressing Submit, you agree that Dialed-In Web may contact you.
          </p>
        </form>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-foreground mb-4">
          Categories
        </h3>
        <ul className="space-y-2">
          {blogCategories.map((category) => (
            <li key={category.slug}>
              <Link
                to={`/blog?category=${category.slug}`}
                className="text-sm text-muted-foreground hover:text-cta transition-colors flex items-center gap-2"
              >
                <ArrowRight className="w-3 h-3" />
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogSidebar;
