import { Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

interface ListicleHeroProps {
  title: string;
  author: {
    name: string;
    avatar?: string;
  };
  lastUpdated: string;
  breadcrumbs?: { label: string; href?: string }[];
}

const ListicleHero = ({ title, author, lastUpdated, breadcrumbs }: ListicleHeroProps) => {
  return (
    <section className="relative pt-8 pb-12 md:pt-12 md:pb-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center gap-2">
                  {index > 0 && <span className="text-border">/</span>}
                  {crumb.href ? (
                    <Link 
                      to={crumb.href}
                      className="hover:text-foreground transition-colors underline decoration-border hover:decoration-foreground"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-foreground">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Category Tag */}
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
            Top Agencies
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 max-w-4xl">
          {title}
        </h1>

        {/* Author & Date */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            {author.avatar ? (
              <img 
                src={author.avatar} 
                alt={author.name}
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-4 h-4 text-primary" />
              </div>
            )}
            <span className="font-medium text-foreground">{author.name}</span>
          </div>
          <span className="text-border">|</span>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Last Update: {lastUpdated}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListicleHero;
