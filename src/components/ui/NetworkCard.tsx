import { cn } from "@/lib/utils";
import type { Partner } from "@/lib/content";

export function NetworkCard({
  partner,
  index,
  className,
}: {
  partner: Partner;
  index: number;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col border border-taupe bg-cream p-7 transition duration-300 hover:border-gold hover:shadow-(--shadow-card)",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-display text-4xl text-gold/80">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="kicker text-right">{partner.accent}</span>
      </div>
      <h3 className="mt-6 font-display text-2xl font-semibold text-espresso">
        {partner.name}
      </h3>
      <p className="mt-1 text-xs font-semibold tracking-[0.14em] uppercase text-caramel">
        {partner.role}
      </p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-stone">
        {partner.summary}
      </p>
      <ul className="mt-6 space-y-2 border-t border-taupe pt-5">
        {partner.capabilities.slice(0, 4).map((cap) => (
          <li
            key={cap}
            className="flex gap-2 text-sm text-ink/80"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
            {cap}
          </li>
        ))}
      </ul>
    </article>
  );
}
