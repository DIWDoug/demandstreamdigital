import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { getBlogFeaturedImage } from "@/lib/blogImages";

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  featured_image: string | null;
  published_at: string;
  category: string | null;
}

interface YouMayAlsoLikeProps {
  currentSlug: string;
  currentCategory?: string | null;
}

const YouMayAlsoLike = ({ currentSlug, currentCategory }: YouMayAlsoLikeProps) => {
  const { data: relatedPosts, isLoading } = useQuery({
    queryKey: ['related-posts', currentSlug, currentCategory],
    queryFn: async () => {
      // First try to get posts from same category
      let query = supabase
        .from('blogs')
        .select('id, title, slug, excerpt, featured_image, published_at, category')
        .neq('slug', currentSlug)
        .order('published_at', { ascending: false })
        .limit(3);

      if (currentCategory) {
        query = query.eq('category', currentCategory);
      }

      const { data: categoryPosts, error: categoryError } = await query;

      if (categoryError) throw categoryError;

      // If we don't have enough posts from the same category, get more from other categories
      if (!categoryPosts || categoryPosts.length < 3) {
        const existingSlugs = categoryPosts?.map(p => p.slug) || [];
        existingSlugs.push(currentSlug);

        const { data: morePosts, error: moreError } = await supabase
          .from('blogs')
          .select('id, title, slug, excerpt, featured_image, published_at, category')
          .not('slug', 'in', `(${existingSlugs.map(s => `"${s}"`).join(',')})`)
          .order('published_at', { ascending: false })
          .limit(3 - (categoryPosts?.length || 0));

        if (moreError) throw moreError;

        return [...(categoryPosts || []), ...(morePosts || [])].slice(0, 3) as Blog[];
      }

      return categoryPosts as Blog[];
    },
  });

  if (isLoading) {
    return (
      <section className="mt-16 pt-12 border-t border-border">
        <h2 className="text-2xl font-bold text-foreground mb-8">You May Also Like</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-40 w-full rounded-lg" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (!relatedPosts || relatedPosts.length === 0) {
    return null;
  }

  const categoryLabels: Record<string, string> = {
    'white-label-seo': 'White-Label SEO',
    'local-seo': 'Local SEO',
    'agency-growth': 'Agency Growth',
    'paid-media': 'Paid Media',
    'content-marketing': 'Content Marketing',
    'email-marketing': 'Email Marketing',
  };

  return (
    <section className="mt-16 pt-12 border-t border-border">
      <h2 className="text-2xl font-bold text-foreground mb-8">You May Also Like</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link 
            key={post.id} 
            to={`/blog/${post.slug}`}
            className="group block"
          >
            {/* Image */}
            {getBlogFeaturedImage(post.featured_image) ? (
              <div className="relative h-40 mb-4 rounded-lg overflow-hidden bg-surface-dark">
                <img 
                  src={getBlogFeaturedImage(post.featured_image)!} 
                  alt={`${post.title} - White Label Marketing Insights`}
                  title={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ) : (
              <div className="h-40 mb-4 rounded-lg bg-surface-dark flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-muted-foreground" />
              </div>
            )}

            {/* Category Tag */}
            {post.category && (
              <span className="inline-block text-xs font-medium text-cta uppercase tracking-wide mb-2">
                {categoryLabels[post.category] || post.category}
              </span>
            )}

            {/* Title */}
            <h3 className="text-lg font-semibold text-foreground group-hover:text-cta transition-colors mb-2 line-clamp-2">
              {post.title}
            </h3>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                {post.excerpt}
              </p>
            )}

            {/* Date & Read More */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(post.published_at).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
              <span className="text-cta font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Read <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default YouMayAlsoLike;
