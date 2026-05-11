import { useState } from "react";
import { Play } from "lucide-react";
import { useInView } from "@/hooks/useInView";

interface BrandVideoProps {
  videoId?: string;
  eyebrow?: string;
  title?: string;
  body?: string;
}

export const BrandVideo = ({
  videoId = "LNLEMh_asw8",
  eyebrow = "See us at work",
  title = "A day with the OilTanksPlus team.",
  body = "Inside a typical install — careful surveys, clean work, certified handover. The way every oil tank job should feel.",
}: BrandVideoProps) => {
  const [playing, setPlaying] = useState(false);
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="section-pad bg-secondary/30">
      <div className="container-prose">
        <div
          ref={ref}
          className={`grid lg:grid-cols-12 gap-10 lg:gap-14 items-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="lg:col-span-5">
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-display font-semibold leading-tight">{title}</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">{body}</p>
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-3xl p-[2px] bg-gradient-brand shadow-elevated">
              <div className="relative aspect-video overflow-hidden rounded-[calc(theme(borderRadius.3xl)-2px)] bg-primary-deep">
                {playing ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title="OilTanksPlus brand video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    className="group absolute inset-0 h-full w-full"
                    aria-label="Play video"
                  >
                    <img
                      src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/70 via-primary-deep/10 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="relative inline-flex">
                        <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
                        <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-cta transition-transform duration-300 group-hover:scale-110">
                          <Play className="size-7 fill-current translate-x-0.5" />
                        </span>
                      </span>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
