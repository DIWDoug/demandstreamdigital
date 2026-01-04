import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Phone, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";
import { supabase } from "@/integrations/supabase/client";
import { getBlogFeaturedImage } from "@/lib/blogImages";
import TwoStepContactForm from "@/components/forms/TwoStepContactForm";

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

      {/* Free Tools */}
      <div className="pb-8 border-b border-border">
        <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-cta mb-5">
          Free Tools
        </h3>
        <ul className="space-y-3">
          <li>
            <Link
              to="/partner-tools/roi-calculator"
              className="text-sm text-muted-foreground hover:text-cta transition-colors flex items-center gap-2"
            >
              <ArrowRight className="w-3 h-3" />
              ROI Calculator
            </Link>
          </li>
          <li>
            <Link
              to="/partner-tools/investment-calculator"
              className="text-sm text-muted-foreground hover:text-cta transition-colors flex items-center gap-2"
            >
              <ArrowRight className="w-3 h-3" />
              Investment Calculator
            </Link>
          </li>
          <li>
            <Link
              to="/partner-tools/seo-calculator"
              className="text-sm text-muted-foreground hover:text-cta transition-colors flex items-center gap-2"
            >
              <ArrowRight className="w-3 h-3" />
              SEO Calculator
            </Link>
          </li>
          <li>
            <Link
              to="/partner-tools/ad-budget-calculator"
              className="text-sm text-muted-foreground hover:text-cta transition-colors flex items-center gap-2"
            >
              <ArrowRight className="w-3 h-3" />
              Ad Budget Calculator
            </Link>
          </li>
          <li>
            <Link
              to="/partner-tools/email-calculator"
              className="text-sm text-muted-foreground hover:text-cta transition-colors flex items-center gap-2"
            >
              <ArrowRight className="w-3 h-3" />
              Email Calculator
            </Link>
          </li>
          <li>
            <Link
              to="/partner-tools/content-marketing-calculator"
              className="text-sm text-muted-foreground hover:text-cta transition-colors flex items-center gap-2"
            >
              <ArrowRight className="w-3 h-3" />
              Content Marketing Calculator
            </Link>
          </li>
          <li>
            <Link
              to="/partner-tools/ai-ready-check"
              className="text-sm text-muted-foreground hover:text-cta transition-colors flex items-center gap-2"
            >
              <ArrowRight className="w-3 h-3" />
              AI Ready Check
            </Link>
          </li>
        </ul>
      </div>

      {/* Request Information Form - Two-Step */}
      <div className="bg-surface-dark rounded-lg p-6 border border-border">
        <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-foreground mb-5">
          Request Information
        </h3>
        <TwoStepContactForm
          formType="blog_contact_form"
          submitButtonText="Submit"
          step1ButtonText="Continue"
          showServicesInterested={false}
          compact
        />
        <p className="text-[10px] text-muted-foreground text-center leading-tight mt-4">
          By pressing Submit, you agree that Dialed-In Web may contact you.
        </p>
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
