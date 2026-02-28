import { Link } from "react-router-dom";

/**
 * IL – Internal Link
 * Consistent styled internal link component for use in listicle/blog content.
 */
const IL = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-accent-blue underline underline-offset-2 hover:text-primary transition-colors"
  >
    {children}
  </Link>
);

export default IL;
