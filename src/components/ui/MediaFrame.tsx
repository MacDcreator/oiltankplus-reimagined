import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface MediaFrameProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  aspect?: "video" | "square" | "portrait" | "wide" | "auto";
  priority?: boolean;
  rounded?: "lg" | "xl" | "2xl" | "3xl";
}

const aspectClass: Record<NonNullable<MediaFrameProps["aspect"]>, string> = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/7]",
  auto: "",
};

/**
 * MediaFrame — premium image wrapper with Ken-Burns-on-enter and soft frame.
 * Use everywhere we want strategic imagery.
 */
export const MediaFrame = ({
  src,
  alt,
  caption,
  className,
  aspect = "video",
  priority = false,
  rounded = "2xl",
}: MediaFrameProps) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <figure ref={ref} className={cn("relative group", className)}>
      <div
        className={cn(
          "relative overflow-hidden bg-secondary shadow-elevated",
          aspectClass[aspect],
          rounded === "lg" && "rounded-lg",
          rounded === "xl" && "rounded-xl",
          rounded === "2xl" && "rounded-2xl",
          rounded === "3xl" && "rounded-3xl",
        )}
      >
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          className={cn(
            "w-full h-full object-cover will-change-transform",
            "transition-all duration-[1400ms] ease-out",
            inView ? "scale-100 opacity-100" : "scale-105 opacity-0",
          )}
        />
        {/* soft inner ring */}
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10" />
      </div>
      {caption && (
        <figcaption className="mt-3 text-xs text-muted-foreground tracking-wide">{caption}</figcaption>
      )}
    </figure>
  );
};
