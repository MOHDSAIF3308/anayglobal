import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/content";

export function Intro() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <p className="font-display text-3xl leading-snug text-espresso sm:text-4xl lg:col-span-7">
              {site.promise}
            </p>
            <p className="text-base leading-relaxed text-stone lg:col-span-5">
              Any Global Services is the name on the door. Behind it is a
              laboratory practice born in Agar-Malwa in 2016, a surveying and
              inspection bench in Ujjain, a consultancy desk in Indore, and four
              specialist partners who already share the drawing register. We
              sell measured work — not a slide about synergy.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
