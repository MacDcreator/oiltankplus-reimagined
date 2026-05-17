import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface Step { n: string; title: string; body: string; image?: string; }

interface ProcessTimelineProps {
  eyebrow?: string;
  title?: string;
  steps: Step[];
  withImages?: boolean;
}

export const ProcessTimeline = ({
  eyebrow = "How it works",
  title = "A clean, calm process — start to finish.",
  steps,
  withImages = false,
}: ProcessTimelineProps) => {
  const { ref, inView } = useInView<HTMLOListElement>();
  return (
    <section className="section-pad">
      <div className="container-prose">
        <div className="max-w-2xl mb-14">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-semibold leading-tight">{title}</h2>
        </div>
        <ol ref={ref} className={cn("grid gap-6 relative", withImages ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4")}>
          {steps.map((s, i) => (
            <li
              key={s.n}
              className={`group relative rounded-2xl bg-card border border-border/60 shadow-card hover-lift reveal-up overflow-hidden ${inView ? "is-visible" : ""}`}
              style={{ transitionDelay: inView ? `${i * 110}ms` : "0ms" }}
            >
              {withImages && s.image && (
                <div className="aspect-[16/10] overflow-hidden bg-secondary">
                  <img
                    src={s.image}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                  />
                </div>
              )}
              <div className="p-7">
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl font-display font-semibold text-accent leading-none transition-transform duration-300 group-hover:-translate-y-0.5">{s.n}</span>
                  <span
                    className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent origin-left"
                    style={{
                      transform: inView ? "scaleX(1)" : "scaleX(0)",
                      transition: `transform 700ms var(--ease-out-soft) ${i * 110 + 200}ms`,
                    }}
                  />
                </div>
                <h3 className="mt-5 text-lg font-display font-semibold text-primary-deep">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
