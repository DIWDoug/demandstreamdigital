import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Phone, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PhoneInput from "@/components/ui/phone-input";
import { Checkbox } from "@/components/ui/checkbox";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { getBlogFeaturedImage } from "@/lib/blogImages";

const blogCategories = [
  { name: "White-Label SEO", slug: "white-label-seo" },
  { name: "Local SEO", slug: "local-seo" },
  { name: "Agency Growth", slug: "agency-growth" },
  { name: "Paid Media", slug: "paid-media" },
  { name: "Content Marketing", slug: "content-marketing" },
  { name: "Email Marketing", slug: "email-marketing" },
];

const categoryLabels: Record<string, string> = {
  'white-label-seo': 'White-Label SEO',
  'local-seo': 'Local SEO',
  'agency-growth': 'Agency Growth',
  'paid-media': 'Paid Media',
  'content-marketing': 'Content Marketing',
  'email-marketing': 'Email Marketing',
};

interface RecentPost {
  id: string;
  title: string;
  slug: string;
  featured_image: string | null;
  category: string | null;
}

const BlogSidebar = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    phoneCountryCode: "+1",
    revenue: "",
    notRobot: false,
    honeypot: "",
  });

  const { data: recentPosts } = useQuery({
    queryKey: ['recent-posts-sidebar'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('id, title, slug, featured_image, category')
        .order('published_at', { ascending: false })
        .limit(4);
      
      if (error) throw error;
      return data as RecentPost[];
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Bot detection: if honeypot is filled, silently reject
    if (formData.honeypot) {
      navigate("/thank-you?type=contact");
      return;
    }
    
    // Verify robot checkbox
    if (!formData.notRobot) {
      toast({
        title: "Please verify you're not a robot",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("submit-to-ghl", {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          phoneCountryCode: formData.phoneCountryCode,
          revenue: formData.revenue,
          formType: "blog_contact_form",
        }
      });

      if (error) throw error;

      // Redirect to thank you page
      navigate("/thank-you?type=contact");
    } catch (error: any) {
      console.error("Form submission error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-10">
      {/* Schedule a Strategy Call */}
      <div className="pb-8 border-b border-border">
        <p className="text-sm text-muted-foreground mb-3">Schedule a Strategy Call</p>
        <a href={PHONE_HREF}>
          <Button 
            variant="outline" 
            className="w-full justify-center gap-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-medium h-12"
          >
            <Phone className="w-4 h-4" />
            Call Us {PHONE_NUMBER}
          </Button>
        </a>
      </div>

      {/* MOST POPULAR - AD Style with Thumbnails */}
      {recentPosts && recentPosts.length > 0 && (
        <div className="pb-8 border-b border-border">
          <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-foreground mb-6">
            Most Popular
          </h3>
          <ul className="space-y-6">
            {recentPosts.map((post) => (
              <li key={post.id} className="group">
                <Link to={`/blog/${post.slug}`} className="flex gap-4">
                  {/* Thumbnail */}
                  {getBlogFeaturedImage(post.featured_image) ? (
                    <div className="flex-shrink-0 w-20 h-20 rounded overflow-hidden bg-surface-dark">
                      <img 
                        src={getBlogFeaturedImage(post.featured_image)!} 
                        alt={`Thumbnail for ${post.title}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="flex-shrink-0 w-20 h-20 rounded bg-surface-dark flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-muted-foreground" />
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Category */}
                    {post.category && (
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-cta mb-1 block">
                        {categoryLabels[post.category] || post.category}
                      </span>
                    )}
                    
                    {/* Title */}
                    <h4 className="text-sm font-medium text-foreground group-hover:text-cta transition-colors leading-snug line-clamp-3">
                      {post.title}
                    </h4>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Request Information Form - Same as main contact form */}
      <div className="bg-surface-dark rounded-lg p-6 border border-border">
        <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-foreground mb-5">
          Request Information
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot field for bot detection */}
          <input
            type="text"
            name="website_url"
            value={formData.honeypot}
            onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />
          
          <div>
            <Label htmlFor="sidebar-name" className="text-xs text-muted-foreground">
              Full Name
            </Label>
            <Input
              id="sidebar-name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="mt-1.5 bg-background border-border h-10"
              placeholder="Your Name"
            />
          </div>
          
          <div>
            <Label htmlFor="sidebar-email" className="text-xs text-muted-foreground">
              Email
            </Label>
            <Input
              id="sidebar-email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="mt-1.5 bg-background border-border h-10"
              placeholder="Your Email"
            />
          </div>
          
          <div>
            <Label className="text-xs text-muted-foreground">
              SMS Enabled Phone #
            </Label>
            <PhoneInput
              value={formData.phone}
              onChange={(value) => setFormData({ ...formData, phone: value })}
              countryCode={formData.phoneCountryCode}
              onCountryCodeChange={(code) => setFormData({ ...formData, phoneCountryCode: code })}
              placeholder="Phone Number"
              className="mt-1.5"
            />
          </div>
          
          <div>
            <Label className="text-xs text-muted-foreground">
              Agency Monthly Revenue
            </Label>
            <Select 
              value={formData.revenue} 
              onValueChange={(value) => setFormData({ ...formData, revenue: value })}
            >
              <SelectTrigger className="mt-1.5 bg-background border-border h-10">
                <SelectValue placeholder="Select Revenue Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-10k">Under $10k/mo</SelectItem>
                <SelectItem value="10k-25k">$10k - $25k/mo</SelectItem>
                <SelectItem value="25k-50k">$25k - $50k/mo</SelectItem>
                <SelectItem value="50k-100k">$50k - $100k/mo</SelectItem>
                <SelectItem value="100k-250k">$100k - $250k/mo</SelectItem>
                <SelectItem value="250k-plus">$250k+/mo</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center space-x-2 pt-2">
            <Checkbox
              id="sidebar-notRobot"
              checked={formData.notRobot}
              onCheckedChange={(checked) => setFormData({ ...formData, notRobot: checked as boolean })}
            />
            <label
              htmlFor="sidebar-notRobot"
              className="text-xs text-muted-foreground cursor-pointer"
            >
              I am not a robot
            </label>
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-cta hover:bg-cta/90 text-cta-foreground h-10 font-medium"
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
        <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-foreground mb-5">
          Categories
        </h3>
        <ul className="space-y-3">
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
