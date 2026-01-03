import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { getAuthorBySlug } from "@/data/authors";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Linkedin, ExternalLink } from "lucide-react";

const Author = () => {
  const { slug } = useParams<{ slug: string }>();
  const author = slug ? getAuthorBySlug(slug) : undefined;

  if (!author) {
    return <Navigate to="/about" replace />;
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `https://dialedinweb.com/authors/${author.slug}#person`,
        "name": author.name,
        "jobTitle": author.role,
        "description": author.shortBio,
        "image": author.image,
        "worksFor": {
          "@type": "Organization",
          "@id": "https://dialedinweb.com/#organization",
          "name": "Dialed-In Web"
        },
        "sameAs": author.schemaData.sameAs,
        "knowsAbout": author.schemaData.knowsAbout.map(topic => ({
          "@type": "Thing",
          "name": topic.name,
          "sameAs": topic.sameAs
        }))
      },
      {
        "@type": "ProfilePage",
        "@id": `https://dialedinweb.com/authors/${author.slug}`,
        "name": `${author.name} - ${author.role}`,
        "description": author.shortBio,
        "mainEntity": { "@id": `https://dialedinweb.com/authors/${author.slug}#person` },
        "isPartOf": { "@id": "https://dialedinweb.com/#website" }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{author.name} - {author.role} | Dialed-In Web</title>
        <meta name="description" content={author.shortBio} />
        <link rel="canonical" href={`https://dialedinweb.com/authors/${author.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to About
            </Link>
          </nav>

          {/* Author Header */}
          <header className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="shrink-0">
              <img
                src={author.image}
                alt={author.name}
                className="w-48 h-48 rounded-2xl object-cover shadow-lg"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {author.name}
              </h1>
              <p className="text-xl text-primary font-medium mb-4">
                {author.role}
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                {author.shortBio}
              </p>
              
              {/* Social Links */}
              {author.socialLinks && (
                <div className="flex gap-3">
                  {author.socialLinks.linkedin && (
                    <a
                      href={author.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#0077B5] text-white rounded-lg hover:bg-[#0077B5]/90 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  )}
                  {author.socialLinks.upwork && (
                    <a
                      href={author.socialLinks.upwork}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#14A800] text-white rounded-lg hover:bg-[#14A800]/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Upwork
                    </a>
                  )}
                </div>
              )}
            </div>
          </header>

          {/* Credentials */}
          {author.credentials.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-foreground mb-4">Credentials</h2>
              <div className="flex flex-wrap gap-2">
                {author.credentials.map((credential, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-1.5 px-3">
                    {credential}
                  </Badge>
                ))}
              </div>
            </section>
          )}

          {/* Full Bio */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-4">About {author.name.split(' ')[0]}</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              {author.fullBio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Expertise */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-4">Areas of Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {author.expertise.map((skill, index) => (
                <Badge key={index} variant="outline" className="text-sm py-1.5 px-3">
                  {skill}
                </Badge>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-muted/50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              Work With Our Team
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Ready to explore how our team can support your agency's growth? Let's start a conversation.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Start the Conversation</Link>
            </Button>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Author;
