import { ShieldCheck, Award, Star, MapPin, Wrench } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "OFTEC Registered" },
  { icon: Award, label: "Made in Britain" },
  { icon: Star, label: "5★ Trustpilot" },
  { icon: MapPin, label: "Nationwide Coverage" },
  { icon: Wrench, label: "25+ Years Experience" },
];

export const TrustStrip = () => (
  <section className="border-y border-border bg-secondary/40">
    <div className="container-prose py-6">
      <ul className="flex flex-wrap items-center justify-around gap-x-8 gap-y-3 text-primary/80">
        {items.map((it) => (
          <li key={it.label} className="flex items-center gap-2.5 text-sm font-semibold tracking-wide">
            <it.icon className="size-4 text-accent" />
            <span>{it.label}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
