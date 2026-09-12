import Link from "next/link";
import { buttonClassName } from "./Button";
import { Container } from "./Container";
import { QuoteButton } from "@/components/quote/QuoteButton";

export function CTABand({
  kicker = "Next conversation",
  title = "Let’s build a better tomorrow together.",
  lede = "Tell us the package, the plant, or the plot. We will tell you which part of the network should sit in the room — and what we need from you on day one.",
}: {
  kicker?: string;
  title?: string;
  lede?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-espresso-dark py-20 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-gold/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 top-10 h-56 w-56 rounded-full border border-gold/10"
      />
      <Container className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="dark-kicker">{kicker}</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold text-cream sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-taupe-dark">{lede}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
          <QuoteButton className={buttonClassName({ variant: "gold", size: "lg" })}>
            Request a Quote
          </QuoteButton>
          <Link
            href="/contact"
            className={buttonClassName({ variant: "outlineLight", size: "lg" })}
          >
            Visit offices
          </Link>
        </div>
      </Container>
    </section>
  );
}
