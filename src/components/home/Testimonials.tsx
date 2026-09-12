import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="topo-bg py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            number="04"
            kicker="In the field"
            title="What clients actually notice."
            lede="Not slogans. The texture of the file they received."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.org} delay={i * 80}>
              <blockquote className="flex h-full flex-col border border-taupe bg-cream p-8">
                <span className="font-display text-5xl leading-none text-gold">
                  “
                </span>
                <p className="mt-2 flex-1 text-[1.05rem] leading-relaxed text-espresso">
                  {t.quote}
                </p>
                <footer className="mt-6 border-t border-taupe pt-4">
                  <p className="text-sm font-semibold text-espresso">{t.name}</p>
                  <p className="text-sm text-stone">{t.org}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
