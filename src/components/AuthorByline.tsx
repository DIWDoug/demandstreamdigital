import { Link } from "react-router-dom";
import { Author } from "@/data/authors";

interface AuthorBylineProps {
  author: Author;
  showImage?: boolean;
  size?: "sm" | "md" | "lg";
}

const AuthorByline = ({ author, showImage = true, size = "md" }: AuthorBylineProps) => {
  const sizeClasses = {
    sm: {
      image: "w-8 h-8",
      name: "text-sm font-medium",
      role: "text-xs"
    },
    md: {
      image: "w-10 h-10",
      name: "text-base font-medium",
      role: "text-sm"
    },
    lg: {
      image: "w-12 h-12",
      name: "text-lg font-semibold",
      role: "text-sm"
    }
  };

  const classes = sizeClasses[size];

  return (
    <Link 
      to={`/authors/${author.slug}`}
      className="inline-flex items-center gap-3 group hover:opacity-90 transition-opacity"
    >
      {showImage && (
        <img
          src={author.image}
          alt={`${author.name} - ${author.role} at Dialed-In Web`}
          title={`${author.name} | ${author.role}`}
          className={`${classes.image} rounded-full object-cover ring-2 ring-border group-hover:ring-primary transition-colors`}
        />
      )}
      <div className="flex flex-col">
        <span className={`${classes.name} text-foreground group-hover:text-primary transition-colors`}>
          {author.name}
        </span>
        <span className={`${classes.role} text-muted-foreground`}>
          {author.role}
        </span>
      </div>
    </Link>
  );
};

export default AuthorByline;
