import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { CTABand } from "@/components/ui/CTABand";
import { articles, getArticle } from "@/lib/content";
import { articleJsonLd, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const publishedTime = article.publishedAt?.match(/^\d{4}-\d{2}-\d{2}$/)
    ? article.publishedAt
    : undefined;
  return pageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/resources/${article.slug}`,
    type: "article",
    publishedTime,
    modifiedTime: article.updatedAt,
    authors: [article.author.name],
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(article)) }}
      />
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
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
            <span>
              By <strong className="font-semibold text-stone">{article.author.name}</strong> · {article.author.role}
            </span>
            <time dateTime={article.updatedAt}>Updated {article.updatedAt}</time>
          </div>
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
