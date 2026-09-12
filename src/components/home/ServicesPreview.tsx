import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Reveal } from "@/components/ui/Reveal";
import { buttonClassName } from "@/components/ui/Button";
import { services } from "@/lib/content";

export function ServicesPreview() {
  return (
    <section className="topo-bg py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              number="01"
              kicker="Six pillars"
              title="The work we put our name on."
              lede="Each pillar is a specialist practice. Together they are one technical file — so a highway package, a plant or a public building is not split across five inboxes."
            />
            <Link
              href="/services"
              className={buttonClassName({
                variant: "outline",
                className: "shrink-0 self-start lg:self-auto",
              })}
            >
              All services
            </Link>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 70}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
