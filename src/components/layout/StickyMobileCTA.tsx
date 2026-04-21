import { Phone, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE } from "@/config/site";

export const StickyMobileCTA = () => (
  <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur-md border-t border-border shadow-elevated">
    <div className="grid grid-cols-2 gap-2 p-3">
      <a href={SITE.phoneHref} className="inline-flex items-center justify-center gap-2 h-12 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
        <Phone className="size-4" /> Call now
      </a>
      <Link to="/quote" className="inline-flex items-center justify-center gap-2 h-12 rounded-full bg-accent text-accent-foreground font-semibold text-sm shadow-cta">
        <FileText className="size-4" /> Get a Quote
      </Link>
    </div>
  </div>
);
