import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import bundedImg from "@/assets/category-bunded.jpg";
import singleImg from "@/assets/category-single-skin.jpg";
import steelImg from "@/assets/category-steel.jpg";
import fireImg from "@/assets/category-fire-rated.jpg";
import { CATEGORIES } from "@/data/tanks";

const imageBySlug: Record<string, string> = {
  bunded: bundedImg,
  "single-skinned": singleImg,
  steel: steelImg,
  "fire-rated": fireImg,
};

export const CategoryGrid = () => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section className="section-pad">
      <div className="container-prose">
        <div className="max-w-2xl mb-14">
          <span className="eyebrow">Browse by category</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-semibold leading-tight">
            Four families. One trusted source.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our experts will help you choose the right tank for your property — but here's a head-start on the four categories we install across the UK.
          </p>
        </div>
        <div ref={ref} className="grid gap-6 sm:grid-cols-2">
          {CATEGORIES.map((c, i) => (
            <Link
              key={c.slug}
              to={`/oil-tank-range/${c.slug}`}
              className={`group hover-lift relative overflow-hidden rounded-3xl bg-card border border-border/60 shadow-card reveal-up ${inView ? "is-visible" : ""}`}
              style={{ transitionDelay: inView ? `${i * 110}ms` : "0ms" }}
            >
              <div className="aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={imageBySlug[c.slug]}
                  alt={c.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                />
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{c.short}</p>
                    <h3 className="mt-1.5 text-2xl font-display font-semibold text-primary-deep">{c.name}</h3>
                  </div>
                  <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">{c.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
