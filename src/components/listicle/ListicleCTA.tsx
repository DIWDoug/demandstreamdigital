import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ListicleCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

const ListicleCTA = ({
  title = "Looking for Growth Marketing for Your Plumbing or HVAC Business?",
  description = "We help plumbing and HVAC companies get more calls, more jobs, and more revenue with marketing that actually works.",
  buttonText = "Get a Free Strategy Call",
  buttonHref = "/contact",
}: ListicleCTAProps) => {
  return (
    <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 rounded-xl p-6 md:p-8">
      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Button asChild className="bg-primary hover:bg-primary/90">
        <Link to={buttonHref} className="inline-flex items-center gap-2">
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Button>
    </div>
  );
};

export default ListicleCTA;
