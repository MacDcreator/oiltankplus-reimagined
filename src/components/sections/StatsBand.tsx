interface Stat { value: string; label: string; }

const stats: Stat[] = [
  { value: "25+", label: "Years installing UK tanks" },
  { value: "10,000+", label: "Tanks installed nationwide" },
  { value: "100%", label: "OFTEC compliant work" },
  { value: "5★", label: "Average Trustpilot rating" },
];

export const StatsBand = () => (
  <section className="bg-primary-deep text-primary-foreground">
    <div className="container-prose py-16 md:py-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center lg:text-left">
            <div className="text-5xl sm:text-6xl font-display font-semibold text-accent leading-none tracking-tight">{s.value}</div>
            <p className="mt-3 text-sm text-white/70 max-w-[14rem] mx-auto lg:mx-0">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
