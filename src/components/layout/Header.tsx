import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, RANGE_LINKS, COMMERCIAL_SERVICES } from "@/config/site";
import { MegaMenu } from "./MegaMenu";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

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

  const closeMobile = () => { setOpen(false); setExpanded(null); };

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

          <MegaMenu />

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
          <nav className="flex flex-col" aria-label="Mobile">
            <NavLink to="/oil-tank-installation" onClick={closeMobile} className="block py-4 text-2xl font-display font-semibold border-b border-white/10 text-white/95 hover:text-accent">Installation</NavLink>
            <NavLink to="/oil-tank-disposal" onClick={closeMobile} className="block py-4 text-2xl font-display font-semibold border-b border-white/10 text-white/95 hover:text-accent">Disposal</NavLink>

            {/* Tank Range expander */}
            <button onClick={() => setExpanded((e) => e === "range" ? null : "range")} className="flex items-center justify-between py-4 text-2xl font-display font-semibold border-b border-white/10 text-white/95">
              Tank Range <ChevronDown className={cn("size-5 transition-transform", expanded === "range" && "rotate-180")} />
            </button>
            {expanded === "range" && (
              <div className="pl-4 py-2 grid gap-2 border-b border-white/10">
                <Link to="/oil-tank-range" onClick={closeMobile} className="text-base text-accent">All tanks →</Link>
                {RANGE_LINKS.map((r) => (
                  <Link key={r.slug} to={`/oil-tank-range/${r.slug}`} onClick={closeMobile} className="text-base text-white/80 hover:text-accent">{r.label}</Link>
                ))}
              </div>
            )}

            {/* Commercial expander */}
            <button onClick={() => setExpanded((e) => e === "commercial" ? null : "commercial")} className="flex items-center justify-between py-4 text-2xl font-display font-semibold border-b border-white/10 text-white/95">
              Commercial <ChevronDown className={cn("size-5 transition-transform", expanded === "commercial" && "rotate-180")} />
            </button>
            {expanded === "commercial" && (
              <div className="pl-4 py-2 grid gap-2 border-b border-white/10">
                <Link to="/commercial-oil-tanks" onClick={closeMobile} className="text-base text-accent">Overview →</Link>
                {COMMERCIAL_SERVICES.map((s) => (
                  <Link key={s.id} to={`/commercial-oil-tanks#${s.id}`} onClick={closeMobile} className="text-base text-white/80 hover:text-accent">{s.label}</Link>
                ))}
              </div>
            )}

            <NavLink to="/locations" onClick={closeMobile} className="block py-4 text-2xl font-display font-semibold border-b border-white/10 text-white/95 hover:text-accent">Locations</NavLink>
            <NavLink to="/about" onClick={closeMobile} className="block py-4 text-2xl font-display font-semibold border-b border-white/10 text-white/95 hover:text-accent">About</NavLink>
            <NavLink to="/news" onClick={closeMobile} className="block py-4 text-2xl font-display font-semibold border-b border-white/10 text-white/95 hover:text-accent">News</NavLink>
            <NavLink to="/contact" onClick={closeMobile} className="block py-4 text-2xl font-display font-semibold border-b border-white/10 text-white/95 hover:text-accent">Contact</NavLink>
          </nav>
          <div className="mt-auto pt-8 grid grid-cols-2 gap-3">
            <Button asChild variant="ghostLight" size="lg" onClick={closeMobile}>
              <a href={SITE.phoneHref}>
                <Phone className="size-4" /> Call us
              </a>
            </Button>
            <Button asChild variant="cta" size="lg" onClick={closeMobile}>
              <Link to="/quote">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
