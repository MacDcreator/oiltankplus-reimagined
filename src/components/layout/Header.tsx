import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, NAV } from "@/config/site";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden md:block bg-primary-deep text-primary-foreground/90 text-xs">
        <div className="container-prose flex h-9 items-center justify-between">
          <span className="opacity-80">OFTEC registered • Made in Britain • 25+ years experience</span>
          <div className="flex items-center gap-5">
            <a href={SITE.phoneHref} className="hover:text-accent transition-colors flex items-center gap-1.5">
              <Phone className="size-3.5" /> {SITE.phone}
            </a>
            <a href={SITE.emailHref} className="hover:text-accent transition-colors">{SITE.email}</a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled ? "bg-background/85 backdrop-blur-md shadow-card" : "bg-background/60 backdrop-blur-sm",
        )}
      >
        <div className="container-prose flex h-16 lg:h-20 items-center justify-between gap-4">
          <Link to="/" aria-label={SITE.name} className="shrink-0 flex items-center">
            <img src={logo} alt={SITE.name} className="h-8 lg:h-10 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {NAV.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 text-sm font-medium rounded-full transition-colors",
                    isActive
                      ? "text-accent"
                      : "text-foreground/80 hover:text-primary",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={SITE.phoneHref}
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              <Phone className="size-4" /> {SITE.phone}
            </a>
            <Button asChild variant="cta" size="default" className="hidden sm:inline-flex">
              <Link to="/quote">Get a Quote</Link>
            </Button>
            <button
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full text-primary hover:bg-secondary"
              onClick={() => setOpen((s) => !s)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-40 bg-primary-deep text-primary-foreground transition-all duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="pt-24 pb-10 px-6 h-full overflow-y-auto flex flex-col">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "block py-4 text-2xl font-display font-semibold border-b border-white/10 transition-colors",
                    isActive ? "text-accent" : "text-white/95 hover:text-accent",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-auto pt-8 grid grid-cols-2 gap-3">
            <Button asChild variant="ghostLight" size="lg" onClick={() => setOpen(false)}>
              <a href={SITE.phoneHref}>
                <Phone className="size-4" /> Call us
              </a>
            </Button>
            <Button asChild variant="cta" size="lg" onClick={() => setOpen(false)}>
              <Link to="/quote">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
