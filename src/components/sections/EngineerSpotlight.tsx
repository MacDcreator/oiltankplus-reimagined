import { Link } from "react-router-dom";
import { Phone, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";
import portrait from "@/assets/engineer-portrait.jpg";
import { useInView } from "@/hooks/useInView";

/**
 * EngineerSpotlight — strategic full-bleed editorial image + copy block.
 * Used to humanise the brand right before the final CTA.
 */
export const EngineerSpotlight = () => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section className="section-pad bg-primary-deep text-primary-foreground overflow-hidden">
      <div ref={ref} className="container-prose grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <div className="lg:col-span-5">
          <div className={`relative rounded-3xl overflow-hidden shadow-elevated transition-all duration-[1400ms] ease-out ${inView ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"}`}>
            <img
              src={portrait}
              alt="OFTEC registered engineer beside a newly installed oil tank"
              loading="lazy"
              className="w-full h-auto object-cover aspect-[4/5]"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-background/95 backdrop-blur-sm p-4 flex items-center gap-3">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-accent-soft text-accent shrink-0">
                <Award className="size-5" />
              </span>
              <div>
                <p className="text-xs font-semibold text-muted-foreground">OFTEC registered</p>
                <p className="text-sm font-display font-semibold text-primary-deep">Engineers you can trust.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="lg:col-span-7">
          <span className="eyebrow text-accent">Meet the team</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-semibold leading-tight text-white">
            Calm, careful, genuinely expert.
          </h2>
          <p className="mt-5 text-lg text-white/75 leading-relaxed max-w-2xl">
            Every Oil Tanks Plus engineer is OFTEC registered and personally trained — and we only work with people we'd send to our own family's home. That's why our reviews stay 5★ year after year.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-xl">
            {[
              { k: "1,200+", v: "installs each year" },
              { k: "40+", v: "engineer locations" },
              { k: "25 yrs", v: "family-run experience" },
              { k: "5★", v: "Trustpilot rating" },
            ].map((s) => (
              <div key={s.v} className="rounded-xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
                <p className="text-2xl font-display font-semibold text-accent">{s.k}</p>
                <p className="text-sm text-white/70 mt-1">{s.v}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="cta" size="lg">
              <Link to="/quote">Get your free quote</Link>
            </Button>
            <Button asChild variant="ghostLight" size="lg">
              <a href={SITE.phoneHref}>
                <Phone className="size-4" /> {SITE.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
