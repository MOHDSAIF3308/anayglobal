import { cn } from "@/lib/utils";

export function Logo({
  className,
  invert = false,
  compact = false,
}: {
  className?: string;
  invert?: boolean;
  compact?: boolean;
}) {
  const mark = invert ? "text-cream" : "text-espresso";
  const gold = "text-gold";
  const word = invert ? "text-cream" : "text-espresso";
  const sub = invert ? "text-gold/80" : "text-caramel";

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span className={cn("relative block h-10 w-10 shrink-0", mark)} aria-hidden>
        <svg viewBox="0 0 40 40" className="h-full w-full" fill="none">
          <circle
            cx="20"
            cy="20"
            r="18.5"
            className={invert ? "stroke-gold/70" : "stroke-gold"}
            strokeWidth="1"
          />
          <circle
            cx="20"
            cy="20"
            r="16.2"
            className={invert ? "stroke-cream/25" : "stroke-espresso/20"}
            strokeWidth="0.6"
          />
          {/* Structural A — foundation + rafters */}
          <path
            d="M20 8.5 L31 29.5 H25.6 L23.7 24.6 H16.3 L14.4 29.5 H9 L20 8.5 Z"
            className={cn("fill-current", mark)}
          />
          <path d="M16.9 22.4 H23.1 L20 15.2 Z" className="fill-gold" />
          <rect
            x="12.2"
            y="30.2"
            width="15.6"
            height="1.4"
            className="fill-gold"
          />
        </svg>
      </span>
      {compact ? (
        <span className={cn("font-display text-xl font-semibold tracking-wide", word)}>
          AGS
        </span>
      ) : (
        <span className="flex flex-col leading-none">
          <span className={cn("text-[0.62rem] font-semibold tracking-[0.22em]", gold)}>
            AGS
          </span>
          <span
            className={cn(
              "mt-0.5 font-display text-[1.05rem] font-semibold tracking-wide",
              word,
            )}
          >
            Anay Global Services
          </span>
          <span className={cn("mt-0.5 text-[0.62rem] tracking-[0.14em]", sub)}>
            Integrated Technical Collaboration
          </span>
        </span>
      )}
    </span>
  );
}
