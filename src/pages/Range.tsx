import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { TANKS } from "@/data/tanks";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import rangeImg from "@/assets/scraped/range.jpg";

const filters = {
  type: ["All", "Bunded", "Single Skin"] as const,
  material: ["All", "Plastic", "Steel"] as const,
  use: ["All", "Domestic", "Commercial"] as const,
};

const RangePage = () => {
  const [type, setType] = useState<typeof filters.type[number]>("All");
  const [material, setMaterial] = useState<typeof filters.material[number]>("All");
  const [use, setUse] = useState<typeof filters.use[number]>("All");

  const tanks = useMemo(() => TANKS.filter(t =>
    (type === "All" || t.type === type) &&
    (material === "All" || t.material === material) &&
    (use === "All" || t.use === use || t.use === "Both"),
  ), [type, material, use]);

  return (
    <Layout>
      <Seo
        title="Oil Tank Range"
        description="Browse our full range of bunded, single skin, plastic and steel oil tanks — domestic and commercial, from 1,000 to 100,000 litres."
        path="/oil-tank-range"
      />
      <Hero
        eyebrow="Oil tank range"
        title={<>The right tank for <span className="text-accent">every property.</span></>}
        subtitle="All UK manufactured. All compliant. Filter by type, material and use to find the right fit."
        image={rangeImg}
        compact
      />

      <section className="section-pad">
        <div className="container-prose">
          <div className="rounded-2xl bg-card border border-border p-5 sm:p-6 shadow-card grid gap-5 sm:grid-cols-3">
            {([
              { label: "Type", value: type, setValue: setType, options: filters.type },
              { label: "Material", value: material, setValue: setMaterial, options: filters.material },
              { label: "Use", value: use, setValue: setUse, options: filters.use },
            ] as const).map((f) => (
              <div key={f.label}>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{f.label}</p>
                <div className="flex flex-wrap gap-1.5">
                  {f.options.map((o) => (
                    <button
                      key={o}
                      onClick={() => (f.setValue as (v: string) => void)(o)}
                      className={cn(
                        "px-3 py-1.5 rounded-full text-xs font-semibold transition-colors",
                        f.value === o ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground/70 hover:bg-secondary/70",
                      )}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tanks.map((t) => (
              <article key={t.slug} className="hover-lift rounded-2xl bg-card border border-border/60 p-6 shadow-card flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">{t.type} • {t.material}</p>
                    <h3 className="mt-1 text-lg font-display font-semibold text-primary-deep">{t.name}</h3>
                  </div>
                  <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary text-foreground/70">{t.use}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{t.description}</p>
                <ul className="mt-5 space-y-1.5">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="size-4 text-trust mt-0.5 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                  <span className="text-2xl font-display font-semibold text-primary-deep">{t.capacityLitres.toLocaleString()}<span className="text-sm font-normal text-muted-foreground"> L</span></span>
                  <a href="/quote" className="text-sm font-semibold text-accent hover:underline">Get a price →</a>
                </div>
              </article>
            ))}
            {tanks.length === 0 && (
              <p className="text-muted-foreground col-span-full text-center py-10">No tanks match those filters. Try widening your search.</p>
            )}
          </div>
        </div>
      </section>

      <CTASection title="Not sure which tank is right?" body="Tell us a little about your property and we'll recommend the perfect fit." />
    </Layout>
  );
};

export default RangePage;
