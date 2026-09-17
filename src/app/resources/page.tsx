import Link from "next/link";
import { ArrowUpRight, Download, FileText } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/ui/CTABand";
import { buttonClassName } from "@/components/ui/Button";
import { articles, resourceLinks } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Resources",
  description:
    "ACE knowledge hub — notes on testing, surveying, environmental clearances and inspection, plus the company profile and useful standards links.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        kicker="Resources"
        title="Notes written for the next reader of the file."
        lede="Articles, standards pointers and the company profile. Not a content mill — short pieces on the decisions that actually stall packages."
        image="/images/engineers.jpg"
      />

      <section className="bg-cream py-20">
        <Container>
          <div className="grid gap-8 border border-gold/40 bg-espresso p-8 sm:grid-cols-12 sm:items-center sm:p-12">
            <div className="sm:col-span-8">
              <p className="dark-kicker">Company profile</p>
              <h2 className="mt-3 font-display text-3xl text-cream sm:text-4xl">
                Download the ACE profile.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-taupe-dark">
                Network model, six pillars, office credentials and company
                journey. Print-ready HTML you can save as PDF from the
                browser, or fetch the static profile document.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:col-span-4 sm:items-end">
              <Link
                href="/resources/company-profile"
                className={buttonClassName({ variant: "gold" })}
              >
                <FileText className="h-4 w-4" />
                View profile
              </Link>
              <Link
                href="/resources/company-profile"
                className={buttonClassName({ variant: "outlineLight" })}
              >
                <Download className="h-4 w-4" />
                Print / Save as PDF
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="topo-bg pb-20 sm:pb-28">
        <Container>
          <Reveal>
            <SectionHeading
              kicker="Knowledge hub"
              title="Articles & case notes."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {articles.map((article, i) => (
              <Reveal key={article.slug} delay={i * 60}>
                <Link
                  href={`/resources/${article.slug}`}
                  className="group flex h-full flex-col border border-taupe bg-cream p-8 transition hover:border-gold"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="kicker">{article.category}</span>
                    <span className="text-xs text-muted">
                      {article.date} · {article.read}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl text-espresso group-hover:text-brown">
                    {article.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">
                    {article.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold tracking-[0.16em] uppercase text-caramel">
                    Read
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream-dark py-20">
        <Container>
          <Reveal>
            <SectionHeading
              kicker="Standards & authorities"
              title="Useful external links."
              lede="The codes and portals our reports already assume. Kept here so a new engineer on your side does not have to hunt."
            />
          </Reveal>
          <ul className="mt-12 divide-y divide-taupe border-y border-taupe">
            {resourceLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-1 py-5 transition hover:text-brown sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <span className="font-display text-xl text-espresso">
                    {link.name}
                  </span>
                  <span className="text-sm text-stone">{link.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
