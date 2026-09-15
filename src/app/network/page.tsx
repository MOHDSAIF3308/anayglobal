import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NetworkCard } from "@/components/ui/NetworkCard";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/ui/CTABand";
import { partners, services } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Technical Network",
  description:
    "How Anay Global Services coordinates Aadhar Enviro, Archies Engineers, Biosyn, True Certificate and Volmaken Engineering Pvt. Ltd. as one technical collaboration.",
  path: "/network",
});

const model = [
  {
    title: "One lead",
    body: "A single AGS counterpart owns the brief, the programme and the invoice trail. Partners are assigned, not auctioned.",
  },
  {
    title: "Shared register",
    body: "Survey control, sample IDs, ITP hold points and drawing revisions live in one file. Designers consume the same numbers the laboratory produced.",
  },
  {
    title: "Named specialists",
    body: "Environmental, chemical, inspection and design work is done by the partner whose letterhead the authority already recognises — under the AGS umbrella.",
  },
  {
    title: "Regional crews",
    body: "Field work starts from our Indore operations center. The network is a way of staffing, not a reason to fly someone in from another state.",
  },
];

export default function NetworkPage() {
  return (
    <>
      <PageHero
        kicker="Technical network"
        title="Integrated collaboration — not a vendor list with a new logo."
        lede="Five practices. One client conversation. The model exists so a package does not have to invent its own supply chain of laboratories and consultants."
        image="/images/consultancy.jpg"
      />

      <section className="topo-bg py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              kicker="The model"
              title="How the file actually moves."
              lede="Clients brief AGS. Volmaken Engineering Pvt. Ltd. coordinates. The specialist partner does the science or the drawing. Everyone signs the same assumptions."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {model.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <article className="h-full border border-taupe bg-cream p-8">
                  <span className="font-display text-3xl text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-2xl text-espresso">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream-dark py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              kicker="Partners"
              title="The five practices under AGS."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 lg:grid-cols-5">
            {partners.map((partner, i) => (
              <Reveal key={partner.slug} delay={i * 50}>
                <NetworkCard partner={partner} index={i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-espresso py-20">
        <Container>
          <Reveal>
            <SectionHeading
              invert
              kicker="Capabilities map"
              title="Which partner holds which pillar."
            />
          </Reveal>
          <div className="mt-10 divide-y divide-gold/20 border-y border-gold/20">
            {services.map((s) => (
              <div
                key={s.slug}
                className="grid gap-2 py-5 sm:grid-cols-12 sm:items-center"
              >
                <p className="font-display text-gold sm:col-span-1">{s.number}</p>
                <p className="font-display text-xl text-cream sm:col-span-6">
                  {s.name}
                </p>
                <p className="text-sm tracking-wide text-taupe-dark sm:col-span-5 sm:text-right">
                  {s.partner}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
