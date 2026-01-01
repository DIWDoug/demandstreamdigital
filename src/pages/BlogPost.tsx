import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image: string | null;
  source_url: string;
  published_at: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: blog, isLoading, error } = useQuery({
    queryKey: ['blog', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();
      
      if (error) throw error;
      return data as BlogPost | null;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="dark min-h-screen bg-background text-foreground">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Skeleton className="h-8 w-32 mb-8" />
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-6 w-1/4 mb-8" />
            <Skeleton className="h-64 w-full mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="dark min-h-screen bg-background text-foreground">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{blog.title} | Dialed-In Web</title>
        <meta name="description" content={blog.excerpt || `Read ${blog.title} on Dialed-In Web`} />
        <link rel="canonical" href={`https://dialedinweb.com/blog/${blog.slug}`} />
        {blog.featured_image && <meta property="og:image" content={blog.featured_image} />}
      </Helmet>
      
      <Header />
      
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Back Link */}
          <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(blog.published_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <a 
                href={blog.source_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View Original
              </a>
            </div>
          </header>

          {/* Featured Image */}
          {blog.featured_image && (
            <div className="relative mb-8 rounded-lg overflow-hidden">
              <img 
                src={blog.featured_image} 
                alt={blog.title}
                className="w-full h-auto max-h-[500px] object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
                h2: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
                h3: ({ children }) => <h3 className="text-xl font-semibold mt-6 mb-3">{children}</h3>,
                p: ({ children }) => <p className="text-muted-foreground leading-relaxed mb-4">{children}</p>,
                ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
                li: ({ children }) => <li className="text-muted-foreground">{children}</li>,
                a: ({ href, children }) => (
                  <a href={href} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary pl-4 italic my-4">{children}</blockquote>
                ),
                code: ({ children }) => (
                  <code className="bg-surface-dark px-2 py-1 rounded text-sm">{children}</code>
                ),
                pre: ({ children }) => (
                  <pre className="bg-surface-dark p-4 rounded-lg overflow-x-auto my-4">{children}</pre>
                ),
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-surface-dark rounded-lg border border-white/10 text-center">
            <h3 className="text-2xl font-bold mb-2">Ready to Scale Your Agency?</h3>
            <p className="text-muted-foreground mb-6">
              Let us handle your white-label fulfillment while you focus on growing your business.
            </p>
            <Link to="/#contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started Today
              </Button>
            </Link>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
