import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Hero } from "@/components/sections/Hero";
import { NEWS } from "@/data/news";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const NewsPage = () => (
  <Layout>
    <Seo
      title="News & Tips"
      description="Practical guides and updates on oil tanks: maintenance, regulations, buying advice and more from Oil Tanks Plus."
      path="/news"
    />
    <Hero
      eyebrow="News & tips"
      title={<>Honest, useful <span className="text-accent">oil tank advice.</span></>}
      subtitle="Practical guides written by our engineers. No fluff."
      compact
    />
    <section className="section-pad">
      <div className="container-prose">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {NEWS.map((n, i) => (
            <Link key={n.slug} to="/news" className={`hover-lift group rounded-2xl bg-card border border-border/60 p-8 shadow-card flex flex-col ${i === 0 ? "lg:col-span-2 lg:row-span-1" : ""}`}>
              <div className="flex items-center gap-3 text-xs font-semibold">
                <span className="px-2.5 py-1 rounded-full bg-accent-soft text-accent uppercase tracking-wider">{n.category}</span>
                <span className="text-muted-foreground">{new Date(n.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</span>
                <span className="text-muted-foreground">· {n.readMins} min read</span>
              </div>
              <h2 className={`mt-5 font-display font-semibold text-primary-deep leading-tight ${i === 0 ? "text-3xl sm:text-4xl" : "text-xl"}`}>{n.title}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed flex-1">{n.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">Read article <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default NewsPage;
