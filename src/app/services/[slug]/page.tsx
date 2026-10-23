import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Download } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { CTABand } from "@/components/ui/CTABand";
import { buttonClassName } from "@/components/ui/Button";
import { getService, services } from "@/lib/content";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(service)) }}
      />
      <PageHero
        kicker={`${service.number} · ${service.partner}`}
        title={service.name}
        lede={service.summary}
        image={service.image}
      />

      <section className="bg-cream py-20 sm:py-24">
        <Container>
          <div className="mb-12 flex flex-col gap-6 border border-gold/40 bg-cream-dark p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="kicker">Detailed service guide</p>
              <h2 className="mt-2 font-display text-2xl text-espresso sm:text-3xl">
                Download the full {service.name.toLowerCase()} guide.
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone">
                Scope, workflow, deliverables, standards, FAQs and claim boundaries in a formatted Word document.
              </p>
            </div>
            <a
              href={service.guide.href}
              download={service.guide.fileName}
              className={buttonClassName({ variant: "gold", size: "lg", className: "shrink-0" })}
              aria-label={`Download the detailed ${service.name} guide`}
            >
              <Download className="h-4 w-4" />
              Download Word guide
            </a>
          </div>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="kicker">Overview</h2>
              <p className="mt-4 text-lg leading-relaxed text-espresso">
                {service.body}
              </p>
              <h3 className="mt-8 kicker">Scope of work</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone">
                {service.scope}
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
              {service.gallery && service.gallery.length > 0 ? (
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {service.gallery.map((image) => (
                    <figure key={image.src} className="border border-taupe bg-cream-dark">
                      <div className="relative aspect-[16/10] overflow-hidden bg-espresso">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 29vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                      <figcaption className="p-3 text-xs leading-relaxed text-stone">
                        {image.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ) : null}
            </div>
            <aside className="lg:col-span-5">
              <div className="border border-taupe bg-cream-dark p-8">
                 <h2 className="kicker">Services and tests</h2>
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
                <h2 className="dark-kicker">What it changes</h2>
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

          <div className="mt-16 grid gap-10 border-t border-taupe pt-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="font-display text-3xl text-espresso">Who this service is for</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.audience.map((item) => (
                  <li key={item} className="border border-taupe bg-cream-dark p-4 text-sm text-stone">
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 kicker">Typical sectors</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone">
                {service.industries.join(" · ")}
              </p>

              <h2 className="mt-12 font-display text-3xl text-espresso">How ACE delivers it</h2>
              <ol className="mt-5 space-y-4">
                {service.process.map((item, i) => (
                  <li key={item} className="flex gap-4 text-sm leading-relaxed text-stone">
                    <span className="font-display text-2xl text-gold">{String(i + 1).padStart(2, "0")}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <aside className="lg:col-span-5">
              <h2 className="font-display text-3xl text-espresso">Standards and outputs</h2>
              <p className="mt-3 text-sm leading-relaxed text-stone">
                {service.serviceArea}. The exact method and reporting format are confirmed against the project brief before work begins.
              </p>
              <h3 className="mt-7 kicker">Relevant requirements</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-stone">
                {service.standards.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
               <h3 className="mt-7 kicker">Typical deliverables</h3>
               <ul className="mt-4 space-y-2 text-sm leading-relaxed text-stone">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                 ))}
               </ul>
               <h3 className="mt-7 kicker">Image direction</h3>
               <div className="mt-4 space-y-4">
                 {service.imageIdeas.map((idea) => (
                   <div key={idea.subject} className="border-l border-gold pl-4">
                     <p className="text-sm font-medium text-espresso">{idea.subject}</p>
                     <p className="mt-1 text-sm leading-relaxed text-stone">{idea.description}</p>
                     <p className="mt-2 text-xs leading-relaxed text-stone">
                       Search keywords: {idea.keywords}. Use an original, public-domain, CC0, Unsplash or Pexels asset after checking the specific licence.
                     </p>
                   </div>
                 ))}
               </div>
             </aside>
          </div>

          <section className="mt-16 border-t border-taupe pt-12">
            <h2 className="font-display text-3xl text-espresso">Common questions</h2>
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              {service.faqs.map((faq) => (
                <article key={faq.question} className="border border-taupe bg-cream-dark p-6">
                  <h3 className="font-display text-xl text-espresso">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>
        </Container>
      </section>

      <section className="border-t border-taupe bg-cream-dark py-16">
        <Container>
          <h2 className="kicker">Other pillars</h2>
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
