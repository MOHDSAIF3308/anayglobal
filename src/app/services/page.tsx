import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/ui/CTABand";
import { services } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Six service pillars: civil material testing, environmental services, chemical and product testing, inspection and certification, surveying and geospatial, and DPR / turnkey consultancy.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Six pillars. One technical file."
        lede="Learn more about each practice — what we test, survey, inspect or design, and which partner in the ACE network holds the pen."
        image="/images/lab-detail.jpg"
      />
      <section className="topo-bg py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 60}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CTABand
        kicker="Not sure which pillar"
        title="Start with the problem, not the department."
        lede="If the brief mixes cubes, drones and a DPR, that is normal. Tell us the package — we will staff the network."
      />
    </>
  );
}
