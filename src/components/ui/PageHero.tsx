import Image from "next/image";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

export function PageHero({
  kicker,
  title,
  lede,
  image = "/images/office-dusk.jpg",
  className,
}: {
  kicker?: string;
  title: string;
  lede?: string;
  image?: string;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-espresso-dark pt-28 pb-16 sm:pt-32 sm:pb-20",
        className,
      )}
    >
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover opacity-35"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-r from-espresso-dark via-espresso-dark/85 to-espresso/55" />
      <Container className="relative">
        {kicker ? <p className="dark-kicker">{kicker}</p> : null}
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold tracking-tight text-cream sm:text-6xl">
          {title}
        </h1>
        {lede ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-taupe-dark sm:text-lg">
            {lede}
          </p>
        ) : null}
        <div className="mt-8 h-px max-w-xs bg-linear-to-r from-gold to-transparent" />
      </Container>
    </section>
  );
}
