import Image from "next/image";
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
  return (
    <span className={cn("inline-flex shrink-0 items-center gap-2.5 sm:gap-3", className)}>
      <span
        className={cn(
          "relative overflow-hidden",
          compact
            ? "h-10 w-[6.25rem]"
            : "h-[3.35rem] w-[9.25rem] sm:h-[3.55rem] sm:w-[10.75rem]",
        )}
      >
        <Image
          src="/images/acelogonobg.png"
          alt="ACE — Anay Consultants & Engineers"
          width={2000}
          height={1027}
          className="absolute inset-x-0 top-[-6%] h-[148%] w-full object-contain object-top"
          priority
        />
      </span>
      {compact ? null : (
        <span
          className={cn(
            "hidden flex-col justify-center leading-[1.15] min-[420px]:flex",
            invert ? "text-gold" : "text-espresso",
          )}
        >
          <span className="font-display text-[0.72rem] font-semibold tracking-[0.14em] uppercase sm:text-[0.8rem]">
            Consultants
          </span>
          <span className="font-display text-[0.72rem] font-semibold tracking-[0.14em] uppercase sm:text-[0.8rem]">
            &amp; Engineers
          </span>
        </span>
      )}
    </span>
  );
}
