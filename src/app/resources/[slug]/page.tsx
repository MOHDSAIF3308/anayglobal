import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { CTABand } from "@/components/ui/CTABand";
import { articles, getArticle } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/resources/${article.slug}`,
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <article className="bg-cream pt-28 pb-20">
        <Container className="max-w-3xl">
          <p className="kicker">
            {article.category} · {article.date} · {article.read}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-espresso sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone">
            {article.excerpt}
          </p>
          <div className="gold-rule my-10" />
          <div className="space-y-6 text-base leading-relaxed text-ink">
            {article.body.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>
          <p className="mt-12">
            <Link
              href="/resources"
              className="text-sm font-semibold tracking-[0.14em] uppercase text-caramel hover:text-brown"
            >
              ← All resources
            </Link>
          </p>
        </Container>
      </article>
      <CTABand />
    </>
  );
}
