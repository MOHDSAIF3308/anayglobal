import { trustHighlights } from "@/lib/content";

export function TrustBar() {
  return (
    <section
      id="trust"
      className="relative z-10 -mt-10 border-y border-gold/30 bg-espresso"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {trustHighlights.map((item, i) => (
          <div
            key={item.kicker}
            className={`px-6 py-6 sm:px-8 sm:py-7 ${
              i < 3 ? "lg:border-r lg:border-gold/20" : ""
            } ${i % 2 === 0 ? "border-r border-gold/20 lg:border-r-gold/20" : ""} ${
              i < 2 ? "border-b border-gold/20 lg:border-b-0" : ""
            }`}
          >
            <p className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-gold">
              {item.kicker}
            </p>
            <p className="mt-2 font-display text-xl text-cream sm:text-2xl">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
