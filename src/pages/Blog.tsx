import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, ArrowRight } from "lucide-react";

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  featured_image: string | null;
  published_at: string;
}

const Blog = () => {
  const { data: blogs, isLoading, error } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('id, title, slug, excerpt, featured_image, published_at')
        .order('published_at', { ascending: false });
      
      if (error) throw error;
      return data as Blog[];
    },
  });

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Blog | White-Label Digital Marketing Insights | Dialed-In Web</title>
        <meta name="description" content="Expert insights on white-label SEO, local search, paid media, and agency growth strategies. Learn how to scale your agency with our fulfillment expertise." />
        <link rel="canonical" href="https://dialedinweb.com/blog" />
      </Helmet>
      
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Agency Growth <span className="text-primary">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert perspectives on white-label fulfillment, local SEO strategies, and scaling your digital marketing agency.
            </p>
          </div>

          {/* Blog Grid */}
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="bg-surface-dark border-white/10">
                  <Skeleton className="h-48 w-full rounded-t-lg" />
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">Failed to load blog posts. Please try again later.</p>
            </div>
          ) : blogs && blogs.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <Link key={blog.id} to={`/blog/${blog.slug}`}>
                  <Card className="bg-surface-dark border-white/10 hover:border-primary/50 transition-all duration-300 h-full group">
                    {blog.featured_image && (
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <img 
                          src={blog.featured_image} 
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(blog.published_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                        {blog.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {blog.excerpt && (
                        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                          {blog.excerpt}
                        </p>
                      )}
                      <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
