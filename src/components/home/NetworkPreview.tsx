import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NetworkCard } from "@/components/ui/NetworkCard";
import { Reveal } from "@/components/ui/Reveal";
import { buttonClassName } from "@/components/ui/Button";
import { partners } from "@/lib/content";

export function NetworkPreview() {
  return (
    <section className="bg-cream-dark py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              number="02"
              kicker="Technical network"
              title="Five practices. One client conversation."
              lede="Aadhar Enviro, Archies Engineers, Biosyn, True Certificate and Volmaken Engineering Pvt. Ltd. work as an integrated collaboration — coordinated under Anay Global Services."
            />
            <Link
              href="/network"
              className={buttonClassName({
                variant: "espresso",
                className: "shrink-0 self-start",
              })}
            >
              The model
            </Link>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {partners.map((partner, i) => (
            <Reveal key={partner.slug} delay={i * 60}>
              <NetworkCard partner={partner} index={i} className="lg:min-h-[28rem]" />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
