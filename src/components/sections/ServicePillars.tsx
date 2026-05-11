import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import installImg from "@/assets/scraped/install.jpg";
import disposalImg from "@/assets/scraped/disposal.png";
import rangeImg from "@/assets/scraped/range.jpg";
import commercialImg from "@/assets/commercial-tanks.jpg";
import { useInView } from "@/hooks/useInView";

const services = [
  {
    title: "Oil Tank Installation",
    summary: "Expert nationwide installation of domestic oil tanks. Survey, supply and fit to OFTEC standards.",
    href: "/oil-tank-installation",
    image: installImg,
  },
  {
    title: "Tank Disposal & Recycling",
    summary: "Safe decommissioning, removal and environmentally responsible recycling of your old tank.",
    href: "/oil-tank-disposal",
    image: disposalImg,
  },
  {
    title: "Oil Tank Range",
    summary: "Bunded, single-skin, steel and plastic tanks from 1,000 to 100,000 litres — all UK manufactured.",
    href: "/oil-tank-range",
    image: rangeImg,
  },
  {
    title: "Commercial Services",
    summary: "Installation, servicing, fuel polishing and pump-outs for commercial and industrial sites.",
    href: "/commercial-oil-tanks",
    image: commercialImg,
  },
];

export const ServicePillars = () => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section className="section-pad">
      <div className="container-prose">
        <div className="max-w-2xl mb-14">
          <span className="eyebrow">What we do</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-semibold leading-tight">
            End-to-end oil tank expertise.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From a single domestic install to a fleet of commercial tanks — one trusted partner, fully accredited, across the UK.
          </p>
        </div>

        <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Link
              key={s.title}
              to={s.href}
              className={`group hover-lift relative flex flex-col overflow-hidden rounded-2xl bg-card shadow-card border border-border/60 hover:border-accent/40 reveal-up ${inView ? "is-visible" : ""}`}
              style={{ transitionDelay: inView ? `${i * 90}ms` : "0ms" }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-lg font-display font-semibold leading-snug text-primary-deep">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.summary}</p>
                <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Learn more
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
