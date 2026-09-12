import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/lib/content";

export function Industries() {
  return (
    <section className="bg-espresso py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            invert
            number="03"
            kicker="Sectors"
            title="Industries we serve."
            lede="The same codes, the same crews, different drawings. We stay where measured data changes the next decision."
          />
        </Reveal>
        <div className="mt-14 grid gap-px bg-gold/20 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 50}>
              <article className="h-full bg-espresso p-8 transition hover:bg-brown">
                <span className="font-display text-2xl text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-2xl text-cream">
                  {ind.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-taupe-dark">
                  {ind.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
