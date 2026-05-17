import { useParams, Navigate, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { CATEGORIES, TANKS, type TankCategory } from "@/data/tanks";
import { Check, ArrowRight } from "lucide-react";
import bundedImg from "@/assets/category-bunded.jpg";
import singleImg from "@/assets/category-single-skin.jpg";
import steelImg from "@/assets/category-steel.jpg";
import fireImg from "@/assets/category-fire-rated.jpg";
import { SITE } from "@/config/site";

const imageBySlug: Record<string, string> = {
  bunded: bundedImg,
  "single-skinned": singleImg,
  steel: steelImg,
  "fire-rated": fireImg,
};

const faqsByCategory: Record<TankCategory, { q: string; a: string }[]> = {
  bunded: [
    { q: "Do I legally need a bunded oil tank?", a: "Most domestic UK installations require bunded tanks under OFTEC and Building Regulations — particularly near drains, watercourses or boundaries. Our surveyor will confirm what's required for your site." },
    { q: "What does 'bunded' actually mean?", a: "A bunded tank has a second outer skin that can hold at least 110% of the inner tank's contents, catching any leak before it reaches the ground." },
  ],
  "single-skinned": [
    { q: "When is a single-skinned tank allowed?", a: "Only when a site survey confirms there's no environmental risk (e.g. away from drains, watercourses and boundaries) and your local regulations permit it." },
    { q: "Are single-skinned tanks cheaper?", a: "Yes — they're typically more affordable upfront, but we'll always recommend bunded if your site requires it." },
  ],
  steel: [
    { q: "How long do steel oil tanks last?", a: "With proper installation and routine servicing, a powder-coated steel tank can last 30+ years — making them the go-to for commercial sites." },
    { q: "Can you build a steel tank on site?", a: "Yes — for very large commercial capacities we can site-build steel tanks where transport access is limited." },
  ],
  "fire-rated": [
    { q: "When do I need a fire rated tank?", a: "When your tank can't meet the minimum clearance distances from buildings, boundaries or openings under OFTEC TI/133 — a fire rated tank lets you install closer." },
    { q: "What's the difference between 30 and 60 minute fire rated?", a: "It's the time the tank's outer casing protects the fuel from fire spread. 60-minute is used for higher-risk locations." },
  ],
};

const TankCategoryPage = () => {
  const { slug } = useParams<{ slug: TankCategory }>();
  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) return <Navigate to="/oil-tank-range" replace />;

  const tanks = TANKS.filter((t) => t.category === category.slug);
  const image = imageBySlug[category.slug];
  const faqs = faqsByCategory[category.slug];

  return (
    <Layout>
      <Seo
        title={`${category.name} | ${SITE.name}`}
        description={category.description}
        path={`/oil-tank-range/${category.slug}`}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: category.name,
            itemListElement: tanks.map((t, i) => ({
              "@type": "Product",
              position: i + 1,
              name: t.name,
              description: t.description,
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />
      <Hero
        eyebrow={`Tank Range · ${category.name}`}
        title={<>{category.short.split(" ").slice(0, -1).join(" ")} <span className="text-accent">{category.short.split(" ").slice(-1)}</span></>}
        subtitle={category.description}
        image={image}
        compact
      />

      {/* Benefits + Image two-col */}
      <section className="section-pad">
        <div className="container-prose grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="eyebrow">Why this category</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold leading-tight">
              What makes {category.name.toLowerCase()} the right choice.
            </h2>
            <ul className="mt-8 space-y-4">
              {category.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-base text-foreground/85">
                  <span className="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-accent-soft text-accent shrink-0">
                    <Check className="size-3.5" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-2xl bg-secondary/50 p-6 border border-border/60">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Typical for</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {category.useCases.map((u) => (
                  <li key={u} className="rounded-full bg-card px-3 py-1.5 text-xs font-semibold text-primary-deep border border-border">{u}</li>
                ))}
              </ul>
            </div>
          </div>
          <MediaFrame src={image} alt={category.name} aspect="portrait" rounded="3xl" />
        </div>
      </section>

      {/* Models in this category */}
      <section className="section-pad bg-secondary/30">
        <div className="container-prose">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Models in this category</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold leading-tight">
              {tanks.length} {tanks.length === 1 ? "model" : "models"} from our {category.name.toLowerCase()} range.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tanks.map((t) => (
              <article key={t.slug} className="hover-lift rounded-2xl bg-card border border-border/60 p-6 shadow-card flex flex-col">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">{t.type} • {t.material}</p>
                <h3 className="mt-1 text-lg font-display font-semibold text-primary-deep">{t.name}</h3>
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
                  <Link to="/quote" className="text-sm font-semibold text-accent inline-flex items-center gap-1 hover:gap-1.5 transition-all">
                    Get a price <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion items={faqs} eyebrow="Common questions" title={`${category.name} — your questions answered.`} />

      <CTASection title={`Need a ${category.name.toLowerCase()} quote?`} body="Tell us about your property and we'll arrange a free site survey at a time that suits you." />
    </Layout>
  );
};

export default TankCategoryPage;
