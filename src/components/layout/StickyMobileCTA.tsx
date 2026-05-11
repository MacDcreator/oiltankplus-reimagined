import { Phone, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { SITE } from "@/config/site";
import { cn } from "@/lib/utils";

export const StickyMobileCTA = () => {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 80) { setHidden(false); lastY.current = y; return; }
      const goingDown = y > lastY.current + 4;
      const goingUp = y < lastY.current - 4;
      if (goingDown) setHidden(true);
      else if (goingUp) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "lg:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur-md border-t border-border shadow-elevated transition-transform duration-300",
        hidden ? "translate-y-full" : "translate-y-0",
      )}
    >
      <div className="grid grid-cols-2 gap-2 p-3">
        <a href={SITE.phoneHref} className="inline-flex items-center justify-center gap-2 h-12 rounded-full bg-primary text-primary-foreground font-semibold text-sm transition-transform active:scale-[0.98]">
          <Phone className="size-4" /> Call now
        </a>
        <Link to="/quote" className="shimmer-on-hover inline-flex items-center justify-center gap-2 h-12 rounded-full bg-accent text-accent-foreground font-semibold text-sm shadow-cta transition-transform active:scale-[0.98]">
          <FileText className="size-4" /> Get a Quote
        </Link>
      </div>
    </div>
  );
};
