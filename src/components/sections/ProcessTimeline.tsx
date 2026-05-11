import { useInView } from "@/hooks/useInView";

interface Step { n: string; title: string; body: string; }

interface ProcessTimelineProps {
  eyebrow?: string;
  title?: string;
  steps: Step[];
}

export const ProcessTimeline = ({
  eyebrow = "How it works",
  title = "A clean, calm process — start to finish.",
  steps,
}: ProcessTimelineProps) => {
  const { ref, inView } = useInView<HTMLOListElement>();
  return (
    <section className="section-pad">
      <div className="container-prose">
        <div className="max-w-2xl mb-14">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-semibold leading-tight">{title}</h2>
        </div>
        <ol ref={ref} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className={`group relative rounded-2xl bg-card border border-border/60 p-7 shadow-card hover-lift reveal-up ${inView ? "is-visible" : ""}`}
              style={{ transitionDelay: inView ? `${i * 110}ms` : "0ms" }}
            >
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
              {i < steps.length - 1 && (
                <span className="hidden lg:block absolute top-1/2 -right-3 size-6 rounded-full bg-background border border-border" aria-hidden />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
