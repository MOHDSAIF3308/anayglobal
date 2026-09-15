import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/ui/CTABand";
import { journey, values, whyTrust, site } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description: `The story of Anay Global Services — established ${site.founded} in Indore as an integrated technical collaboration across Central India.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About AGS"
        title="A specialized engineering practice built for data integrity — not a holding company slide."
        lede={`Established in ${site.founded} with headquarters in Indore: consulting, inspection, surveying and testing under one client conversation.`}
        image="/images/about-building.jpg"
      />

      <section className="topo-bg py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <SectionHeading
                kicker="Company story"
                title="Close to the works, from the first cube."
              />
            </Reveal>
            <Reveal className="space-y-5 text-base leading-relaxed text-stone lg:col-span-7">
              <p>
                Anay Global Services was established in 2024 as a dedicated engineering
                practice based in Indore, founded on the principle that infrastructure decisions
                must be rooted in verifiable, audit-grade data rather than assumptions.
              </p>
              <p>
                From testing civil materials and performing precision geospatial surveys to
                conducting third-party inspections and environmental assessments, our engineers
                work directly with site conditions to deliver clear, actionable reports.
              </p>
              <p>
                Headquartered at Bhawar Kuan Square in Indore, AGS unites five specialist
                practices under one cohesive banner. Whether managing a major highway corridor,
                an industrial facility, or an institutional development, our clients work with
                one accountable technical lead.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-cream-dark py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              kicker="Journey"
              title="Built for Central India."
              lede="We deliver engineering certainty across the region with grounded teams and defensible data."
            />
          </Reveal>
          <ol className="mt-16 relative">
            <div
              aria-hidden
              className="absolute left-[1.15rem] top-2 bottom-2 w-px bg-gold/40 sm:left-1/2 sm:-translate-x-px"
            />
            {journey.map((step, i) => (
              <Reveal key={step.year} delay={i * 80}>
                <li
                  className={`relative mb-12 grid gap-6 sm:grid-cols-2 sm:gap-16 ${
                    i % 2 === 1 ? "sm:text-right" : ""
                  }`}
                >
                  <div
                    className={
                      i % 2 === 1
                        ? "sm:col-start-2"
                        : "sm:col-start-1 sm:row-start-1"
                    }
                  >
                    <div
                      className={`flex items-baseline gap-3 ${
                        i % 2 === 1 ? "sm:justify-end" : ""
                      }`}
                    >
                      <span className="font-display text-4xl text-espresso">
                        {step.year}
                      </span>
                      <span className="kicker">{step.place}</span>
                    </div>
                    <h3 className="mt-3 font-display text-2xl text-espresso">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone">
                      {step.body}
                    </p>
                  </div>
                  <span className="absolute left-3 top-2 h-3 w-3 rounded-full border-2 border-gold bg-cream sm:left-1/2 sm:-translate-x-1/2" />
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-espresso py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              invert
              kicker="Mission · Vision · Values"
              title="What we refuse to outsource."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <Reveal>
              <article className="border border-gold/25 p-8">
                <p className="dark-kicker">Mission</p>
                <p className="mt-4 font-display text-2xl text-cream">
                  Put measured data under every drawing, invoice and clearance
                  our clients sign.
                </p>
              </article>
            </Reveal>
            <Reveal delay={80}>
              <article className="border border-gold/25 p-8">
                <p className="dark-kicker">Vision</p>
                <p className="mt-4 font-display text-2xl text-cream">
                  Be the technical collaboration central India calls when the
                  file has to survive an audit.
                </p>
              </article>
            </Reveal>
            <Reveal delay={160}>
              <article className="border border-gold/25 p-8">
                <p className="dark-kicker">Promise</p>
                <p className="mt-4 font-display text-2xl text-cream">
                  {site.promise}
                </p>
              </article>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <article className="bg-brown/40 p-8">
                  <h3 className="font-display text-2xl text-gold">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-taupe-dark">
                    {v.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              kicker="Why clients trust us"
              title="Continuity you can phone."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {whyTrust.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <article className="border border-taupe p-8">
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

      <CTABand />
    </>
  );
}
