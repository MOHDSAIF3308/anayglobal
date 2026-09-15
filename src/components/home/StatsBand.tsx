import { Container } from "@/components/ui/Container";
import { stats, clients } from "@/lib/content";
import { ClientLogo } from "@/components/ui/ClientLogos";

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
      <div className="mt-12 overflow-hidden border-y border-taupe bg-cream-dark py-6">
        <div className="marquee-track flex w-max items-center gap-10 px-8">
          {[...clients, ...clients, ...clients].map((c, i) => (
            <div
              key={`${c.id}-${i}`}
              className="flex items-center gap-10"
            >
              <div className="flex items-center rounded-md border border-taupe/80 bg-cream/95 px-4 py-2.5 shadow-xs transition duration-200 hover:border-gold hover:shadow-card">
                <ClientLogo id={c.id} className="h-9 w-auto" />
              </div>
              <span className="text-gold text-xl" aria-hidden>·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
