import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { RANGE_LINKS, COMMERCIAL_SERVICES } from "@/config/site";
import { ArrowUpRight, Wrench, Recycle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const linkBase =
  "px-3 py-2 text-sm font-medium rounded-full transition-colors text-foreground/80 hover:text-primary";

export const MegaMenu = () => {
  return (
    <NavigationMenu className="hidden lg:flex" delayDuration={80}>
      <NavigationMenuList className="gap-0">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={linkBase}>
            <Link to="/oil-tank-installation">Installation</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={linkBase}>
            <Link to="/oil-tank-disposal">Disposal</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Tank Range mega */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-foreground/80 hover:text-primary hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-primary px-3 h-auto py-2">
            Tank Range
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid grid-cols-[1.1fr_1fr] gap-0 w-[560px]">
              <div className="bg-primary-deep text-primary-foreground p-7">
                <span className="eyebrow text-accent">Our Range</span>
                <h3 className="mt-2 text-2xl font-display font-semibold leading-tight">
                  Every tank, calmly explained.
                </h3>
                <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">
                  Bunded, single-skin, steel and fire-rated — all UK manufactured and fully compliant.
                </p>
                <Link
                  to="/oil-tank-range"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2.5 transition-all"
                >
                  View full range <ArrowUpRight className="size-4" />
                </Link>
              </div>
              <ul className="p-3 bg-card">
                {RANGE_LINKS.map((r) => (
                  <li key={r.slug}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={`/oil-tank-range/${r.slug}`}
                        className="group block rounded-xl px-4 py-3 hover:bg-secondary/70 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-primary-deep">{r.label}</span>
                          <ArrowUpRight className="size-3.5 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </div>
                        <p className="mt-0.5 text-xs text-muted-foreground">{r.desc}</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Commercial mega */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-foreground/80 hover:text-primary hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-primary px-3 h-auto py-2">
            Commercial
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[640px] p-6 bg-card">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <span className="eyebrow">Commercial Services</span>
                  <h3 className="mt-1.5 text-xl font-display font-semibold text-primary-deep">
                    Seven specialisms, one team.
                  </h3>
                </div>
                <Link
                  to="/commercial-oil-tanks"
                  className="text-sm font-semibold text-accent inline-flex items-center gap-1.5 hover:gap-2 transition-all"
                >
                  Overview <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
              <ul className="grid grid-cols-2 gap-1">
                {COMMERCIAL_SERVICES.map((s) => (
                  <li key={s.id}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={`/commercial-oil-tanks#${s.id}`}
                        className="group flex items-start gap-3 rounded-xl p-3 hover:bg-secondary/70 transition-colors"
                      >
                        <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                          <Wrench className="size-3.5" />
                        </span>
                        <span className="flex-1 min-w-0">
                          <span className="block text-sm font-semibold text-primary-deep truncate">
                            {s.label}
                          </span>
                          <span className="block text-xs text-muted-foreground truncate">{s.desc}</span>
                        </span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={linkBase}>
            <Link to="/locations">Locations</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* About dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-foreground/80 hover:text-primary hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-primary px-3 h-auto py-2">
            More
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-3 w-[240px] bg-card">
              {[
                { to: "/about", label: "About Us", desc: "Family-run, 25+ years", Icon: Recycle },
                { to: "/news", label: "News & Advice", desc: "Tips from our engineers", Icon: Recycle },
                { to: "/contact", label: "Contact", desc: "Talk to our team", Icon: Phone },
              ].map((l) => (
                <li key={l.to}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={l.to}
                      className={cn(
                        "group flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-secondary/70 transition-colors",
                      )}
                    >
                      <span className="mt-0.5 inline-flex size-8 items-center justify-center rounded-lg bg-accent-soft text-accent">
                        <l.Icon className="size-3.5" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-primary-deep">{l.label}</span>
                        <span className="block text-xs text-muted-foreground">{l.desc}</span>
                      </span>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
