import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE, NAV } from "@/config/site";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="container-prose py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <img src={logo} alt={SITE.name} className="h-10 w-auto bg-white rounded-md p-2" />
            <p className="mt-5 text-sm text-white/70 leading-relaxed">
              The UK's leading oil tank installation, replacement and servicing specialists. OFTEC registered. Made in Britain.
            </p>
            <div className="mt-6 flex gap-2 flex-wrap">
              {["OFTEC", "APHC", "Made in UK", "25+ Years"].map((b) => (
                <span key={b} className="inline-flex items-center text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/15 text-white/80">
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-5">Services</h3>
            <ul className="space-y-3 text-sm">
              {NAV.slice(0, 4).map((n) => (
                <li key={n.href}>
                  <Link to={n.href} className="text-white/75 hover:text-accent transition-colors">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-5">Company</h3>
            <ul className="space-y-3 text-sm">
              {NAV.slice(4).map((n) => (
                <li key={n.href}>
                  <Link to={n.href} className="text-white/75 hover:text-accent transition-colors">{n.label}</Link>
                </li>
              ))}
              <li><Link to="/quote" className="text-white/75 hover:text-accent transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-5">Contact</h3>
            <ul className="space-y-3.5 text-sm text-white/80">
              <li className="flex items-start gap-3"><Phone className="size-4 mt-0.5 text-accent shrink-0" /><a href={SITE.phoneHref} className="hover:text-accent">{SITE.phone}</a></li>
              <li className="flex items-start gap-3"><Mail className="size-4 mt-0.5 text-accent shrink-0" /><a href={SITE.emailHref} className="hover:text-accent break-all">{SITE.email}</a></li>
              <li className="flex items-start gap-3"><Clock className="size-4 mt-0.5 text-accent shrink-0" /> {SITE.hours}</li>
              <li className="flex items-start gap-3"><MapPin className="size-4 mt-0.5 text-accent shrink-0" /> Nationwide UK coverage</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-prose py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <p>Designed for clarity. Built for trust.</p>
        </div>
      </div>
    </footer>
  );
};
