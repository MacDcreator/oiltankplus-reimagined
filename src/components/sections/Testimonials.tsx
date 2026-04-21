import { Star } from "lucide-react";

const reviews = [
  { name: "Sarah M.", location: "Devon", text: "Replaced our 30-year-old tank without fuss. The engineers were polite, on time, and left the place spotless. Genuinely impressed." },
  { name: "James W.", location: "North Yorkshire", text: "From quote to install in two weeks. Clear pricing, no surprises. Recommend to anyone in the area." },
  { name: "Emma R.", location: "Hampshire", text: "Our old tank was leaking — they came out, contained it, and had a new bunded tank in within days. Lifesavers." },
];

export const Testimonials = () => (
  <section className="section-pad">
    <div className="container-prose">
      <div className="max-w-2xl mb-14">
        <span className="eyebrow">What customers say</span>
        <h2 className="mt-3 text-4xl sm:text-5xl font-display font-semibold leading-tight">Calm, careful work — every time.</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((r) => (
          <figure key={r.name} className="rounded-2xl bg-card border border-border/60 p-8 shadow-card flex flex-col">
            <div className="flex gap-0.5 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-5 text-foreground/85 leading-relaxed flex-1">"{r.text}"</blockquote>
            <figcaption className="mt-6 text-sm">
              <div className="font-semibold text-primary-deep">{r.name}</div>
              <div className="text-muted-foreground">{r.location}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
