import { Container } from "@/components/ui/Container";
import { stats, clients } from "@/lib/content";

export function StatsBand() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 border-y border-taupe py-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-5xl text-espresso sm:text-6xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm tracking-wide text-stone">{s.label}</p>
            </div>
          ))}
        </div>
      </Container>
      <div className="mt-12 overflow-hidden border-y border-taupe bg-cream-dark py-5">
        <div className="marquee-track flex w-max gap-12 px-8">
          {[...clients, ...clients].map((c, i) => (
            <span
              key={`${c}-${i}`}
              className="font-display text-2xl tracking-wide text-espresso/70"
            >
              {c}
              <span className="ml-12 text-gold">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
