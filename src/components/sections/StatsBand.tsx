import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

interface Stat { value: string; label: string; }

const stats: Stat[] = [
  { value: "25+", label: "Years installing UK tanks" },
  { value: "10,000+", label: "Tanks installed nationwide" },
  { value: "100%", label: "OFTEC compliant work" },
  { value: "5★", label: "Average Trustpilot rating" },
];

const parseNumeric = (v: string) => {
  const m = v.match(/([\d,.]+)/);
  if (!m) return null;
  const n = Number(m[1].replace(/,/g, ""));
  return Number.isFinite(n) ? n : null;
};

const CountUp = ({ value, active }: { value: string; active: boolean }) => {
  const target = parseNumeric(value);
  const [n, setN] = useState(target ?? 0);

  useEffect(() => {
    if (!active || target === null) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setN(target); return; }
    const duration = 1200;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);

  if (target === null) return <>{value}</>;
  const formatted = target >= 1000 ? Math.round(n).toLocaleString() : Math.round(n).toString();
  return <>{value.replace(/[\d,.]+/, formatted)}</>;
};

export const StatsBand = () => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  return (
    <section className="bg-primary-deep text-primary-foreground">
      <div ref={ref} className="container-prose py-16 md:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center lg:text-left reveal-up ${inView ? "is-visible" : ""}`}
              style={{ transitionDelay: inView ? `${i * 100}ms` : "0ms" }}
            >
              <div className="text-5xl sm:text-6xl font-display font-semibold text-accent leading-none tracking-tight tabular-nums">
                <CountUp value={s.value} active={inView} />
              </div>
              <p className="mt-3 text-sm text-white/70 max-w-[14rem] mx-auto lg:mx-0">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
