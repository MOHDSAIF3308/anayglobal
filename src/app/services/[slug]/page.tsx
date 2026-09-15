import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { CTABand } from "@/components/ui/CTABand";
import { buttonClassName } from "@/components/ui/Button";
import { getService, services } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.name,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        kicker={`${service.number} · ${service.partner}`}
        title={service.name}
        lede={service.summary}
        image={service.image}
      />

      <section className="bg-cream py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="kicker">Overview</p>
              <p className="mt-4 text-lg leading-relaxed text-espresso">
                {service.body}
              </p>
              <div className="relative mt-10 aspect-[16/10] overflow-hidden bg-espresso">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />
              </div>
            </div>
            <aside className="lg:col-span-5">
              <div className="border border-taupe bg-cream-dark p-8">
                <p className="kicker">Key offerings</p>
                <ul className="mt-6 space-y-4">
                  {service.offerings.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-caramel" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 border border-gold/40 bg-espresso p-8">
                <p className="dark-kicker">What it changes</p>
                <ul className="mt-5 space-y-3">
                  {service.outcomes.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-taupe-dark">
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={buttonClassName({
                    variant: "gold",
                    className: "mt-8",
                  })}
                >
                  Brief this pillar
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-t border-taupe bg-cream-dark py-16">
        <Container>
          <p className="kicker">Other pillars</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="border border-taupe bg-cream p-6 transition hover:border-gold"
              >
                <span className="font-display text-gold">{s.number}</span>
                <p className="mt-2 font-display text-xl text-espresso">{s.name}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
