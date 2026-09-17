import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/ui/CTABand";
import { ClientLogo } from "@/components/ui/ClientLogos";
import { projects, stats, clients, testimonials } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Featured ACE work across highways, buildings, industry, water resources, surveying and energy — with institutional clients including NHAI, MPPWD, TATA, NTPC, JSW, Adani and UltraTech.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        kicker="Projects"
        title="Work that had to survive measurement."
        lede="A sample of sectors we staff — not a vanity list of every cube we crushed. Names of specific packages are shared under NDA and client clearance."
        image="/images/project-highway.jpg"
      />

      <section className="bg-cream py-16">
        <Container>
          <div className="grid gap-8 border-y border-taupe py-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-5xl text-espresso">{s.value}</p>
                <p className="mt-1 text-sm text-stone">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream-dark py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              kicker="By sector"
              title="Featured work."
              lede="Highways, buildings, industry, water, geospatial programmes and energy civil — the same network, different drawings."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 60}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-espresso py-16">
        <Container>
          <p className="dark-kicker">Institutional & industrial clients</p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4">
            {clients.map((c) => (
              <div
                key={c.id}
                className="flex items-center justify-center rounded-sm border border-gold/20 bg-charcoal/80 p-4 transition duration-200 hover:border-gold/60"
              >
                <ClientLogo id={c.id} invert className="h-8 w-auto" />
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm text-taupe-dark">
            Client marks represent organisations supported on consulting, inspection,
            survey, and testing assignments across Central India. Engagement details
            and project credentials are available on request.
          </p>
        </Container>
      </section>

      <section className="topo-bg py-20">
        <Container>
          <Reveal>
            <SectionHeading kicker="Testimonials" title="From the people who signed the file." />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.org} delay={i * 70}>
                <blockquote className="flex h-full flex-col border border-taupe bg-cream p-8">
                  <p className="flex-1 text-[1.05rem] leading-relaxed text-espresso">
                    “{t.quote}”
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

      <CTABand />
    </>
  );
}
