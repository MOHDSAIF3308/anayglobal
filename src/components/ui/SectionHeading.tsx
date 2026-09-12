import { cn } from "@/lib/utils";

export function SectionHeading({
  kicker,
  title,
  lede,
  invert = false,
  align = "left",
  number,
  className,
}: {
  kicker?: string;
  title: string;
  lede?: string;
  invert?: boolean;
  align?: "left" | "center";
  number?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative",
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      {number ? (
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute -top-10 font-display text-8xl font-semibold leading-none select-none sm:-top-12 sm:text-9xl",
            invert ? "text-cream/5" : "text-espresso/6",
            align === "center" ? "left-1/2 -translate-x-1/2" : "-left-2",
          )}
        >
          {number}
        </span>
      ) : null}
      {kicker ? (
        <p className={cn("relative", invert ? "dark-kicker" : "kicker")}>{kicker}</p>
      ) : null}
      <h2
        className={cn(
          "relative mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
          invert ? "text-cream" : "text-espresso",
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            "relative mt-4 max-w-2xl text-base leading-relaxed sm:text-lg",
            invert ? "text-taupe-dark" : "text-stone",
            align === "center" && "mx-auto",
          )}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
