import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import BlogSidebar from "@/components/BlogSidebar";
import YouMayAlsoLike from "@/components/YouMayAlsoLike";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import AuthorByline from "@/components/AuthorByline";
import { getAuthorById, Author } from "@/data/authors";
import { cleanBlogContent } from "@/lib/cleanBlogContent";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image: string | null;
  source_url: string;
  published_at: string;
  category: string | null;
}

// Default author for blog posts - Doug Bryson as founder/primary author
const getPostAuthor = (slug: string): Author => {
  return getAuthorById("doug-bryson")!;
};

const categoryLabels: Record<string, string> = {
  'white-label-seo': 'White-Label SEO',
  'local-seo': 'Local SEO',
  'agency-growth': 'Agency Growth',
  'paid-media': 'Paid Media',
  'content-marketing': 'Content Marketing',
  'email-marketing': 'Email Marketing',
};

const BlogPostPage = () => {
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
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-2">
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
              <div className="space-y-6">
                <Skeleton className="h-40 w-full" />
                <Skeleton className="h-64 w-full" />
              </div>
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

  const author = getPostAuthor(blog.slug);
  const cleanedContent = cleanBlogContent(blog.content);

  // Article schema with linked Person entity
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://dialedinweb.com/blog/${blog.slug}#article`,
        "headline": blog.title,
        "description": blog.excerpt || `Read ${blog.title} on Dialed-In Web`,
        "image": blog.featured_image || undefined,
        "datePublished": blog.published_at,
        "dateModified": blog.published_at,
        "author": {
          "@id": `https://dialedinweb.com/authors/${author.slug}#person`
        },
        "publisher": {
          "@id": "https://dialedinweb.com/#organization"
        },
        "mainEntityOfPage": {
          "@id": `https://dialedinweb.com/blog/${blog.slug}`
        },
        "isPartOf": {
          "@id": "https://dialedinweb.com/#website"
        },
        "keywords": blog.category ? categoryLabels[blog.category] : undefined
      },
      {
        "@type": "Person",
        "@id": `https://dialedinweb.com/authors/${author.slug}#person`,
        "name": author.name,
        "jobTitle": author.role,
        "description": author.shortBio,
        "url": `https://dialedinweb.com/authors/${author.slug}`,
        "worksFor": {
          "@id": "https://dialedinweb.com/#organization"
        },
        "sameAs": author.schemaData.sameAs,
        "knowsAbout": author.schemaData.knowsAbout.map(topic => ({
          "@type": "Thing",
          "name": topic.name,
          "sameAs": topic.sameAs
        }))
      },
      {
        "@type": "WebPage",
        "@id": `https://dialedinweb.com/blog/${blog.slug}`,
        "name": blog.title,
        "description": blog.excerpt || `Read ${blog.title} on Dialed-In Web`,
        "isPartOf": { "@id": "https://dialedinweb.com/#website" },
        "primaryImageOfPage": blog.featured_image ? { "@type": "ImageObject", "url": blog.featured_image } : undefined
      }
    ]
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{blog.title} | Dialed-In Web</title>
        <meta name="description" content={blog.excerpt || `Read ${blog.title} on Dialed-In Web`} />
        <link rel="canonical" href={`https://dialedinweb.com/blog/${blog.slug}`} />
        {blog.featured_image && <meta property="og:image" content={blog.featured_image} />}
        <meta property="article:author" content={author.name} />
        {blog.category && <meta property="article:section" content={categoryLabels[blog.category] || blog.category} />}
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <article className="lg:col-span-2">
              {/* Back Link */}
              <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>

              {/* Category Tag */}
              {blog.category && (
                <Link 
                  to={`/blog?category=${blog.category}`}
                  className="inline-block text-xs font-medium text-cta uppercase tracking-wide mb-4 hover:text-cta/80 transition-colors"
                >
                  {categoryLabels[blog.category] || blog.category}
                </Link>
              )}

              {/* Header */}
              <header className="mb-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  {blog.title}
                </h1>
                
                {/* Author Byline */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <AuthorByline author={author} size="md" />
                  <span className="hidden sm:block text-muted-foreground/50">•</span>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {new Date(blog.published_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
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
                    a: ({ href, children }) => {
                      // Filter out links to the old site
                      if (href?.includes('dialedinweb.com') && !href?.includes('dialedinweb.com/blog')) {
                        return <span className="text-primary">{children}</span>;
                      }
                      return (
                        <a href={href} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                          {children}
                        </a>
                      );
                    },
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-primary pl-4 italic my-4">{children}</blockquote>
                    ),
                    code: ({ children }) => (
                      <code className="bg-surface-dark px-2 py-1 rounded text-sm">{children}</code>
                    ),
                    pre: ({ children }) => (
                      <pre className="bg-surface-dark p-4 rounded-lg overflow-x-auto my-4">{children}</pre>
                    ),
                    img: ({ src, alt }) => {
                      // Skip placeholder SVG images
                      if (src?.includes('data:image/svg+xml')) {
                        return null;
                      }
                      // Skip base64 removed images
                      if (src?.includes('Base64-Image-Removed')) {
                        return null;
                      }
                      return (
                        <img 
                          src={src} 
                          alt={alt || ''} 
                          className="rounded-lg my-6 w-full"
                          loading="lazy"
                        />
                      );
                    },
                  }}
                >
                  {cleanedContent}
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

              {/* You May Also Like */}
              <YouMayAlsoLike currentSlug={blog.slug} currentCategory={blog.category} />
            </article>

            {/* Sidebar */}
            <div className="hidden lg:block">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;
