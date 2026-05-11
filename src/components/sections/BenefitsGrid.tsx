import { CheckCircle2, Clock, MapPin, ShieldCheck, Truck, Sparkles } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const benefits = [
  { icon: ShieldCheck, title: "OFTEC accredited engineers", body: "Every installation is carried out by certified, experienced engineers — fully insured, fully compliant." },
  { icon: Truck, title: "Made & supported in Britain", body: "All our tanks are manufactured in the UK, CE-marked and meet every relevant safety regulation." },
  { icon: MapPin, title: "Genuinely nationwide", body: "From Cornwall to Aberdeen — our engineers cover the whole of the UK with consistent service." },
  { icon: Clock, title: "25+ years of know-how", body: "A family-run business with thousands of installations behind us. Your job is in safe, expert hands." },
  { icon: CheckCircle2, title: "Transparent fixed quotes", body: "No hidden costs. We survey, recommend and price clearly — what you're quoted is what you pay." },
  { icon: Sparkles, title: "Old tank? We recycle it", body: "We can decommission and responsibly recycle your existing tank as part of the same visit." },
];

export const BenefitsGrid = () => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section className="section-pad bg-secondary/30">
      <div className="container-prose">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <span className="eyebrow">Why Oil Tanks Plus</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-display font-semibold leading-tight">
              Trusted by thousands of UK homes &amp; businesses.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We've spent 25+ years building a reputation for clean, careful, compliant work. Here's what sets us apart.
            </p>
          </div>
          <div ref={ref} className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={`group rounded-2xl bg-card border border-border/60 p-7 shadow-card hover-lift hover:border-accent/40 reveal-up ${inView ? "is-visible" : ""}`}
                style={{ transitionDelay: inView ? `${i * 70}ms` : "0ms" }}
              >
                <div className="inline-flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
                  <b.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-display font-semibold text-primary-deep">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
