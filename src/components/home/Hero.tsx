import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { buttonClassName } from "@/components/ui/Button";
import { QuoteButton } from "@/components/quote/QuoteButton";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-espresso-dark">
      <Image
        src="/images/hero.jpg"
        alt="Construction and infrastructure works at golden hour — the field conditions AGS measures and certifies."
        fill
        priority
        sizes="100vw"
        className="hero-image object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-espresso-dark via-espresso-dark/78 to-espresso/35" />
      <div className="absolute inset-0 bg-linear-to-t from-espresso-dark/90 via-transparent to-espresso-dark/40" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-28 pt-32 sm:px-8 sm:pb-32 lg:px-10">
        <p className="dark-kicker">{site.descriptor}</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-7xl">
          {site.tagline}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-taupe-dark sm:text-lg">
          Consultancy, inspection, surveying and testing — one technical
          collaboration, headquartered in Indore, and a network that
          reports as a single file.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/services"
            className={buttonClassName({ variant: "gold", size: "lg" })}
          >
            Explore Our Services
          </Link>
          <QuoteButton
            className={buttonClassName({ variant: "outlineLight", size: "lg" })}
          >
            Talk to Our Technical Team
          </QuoteButton>
        </div>
        <p className="mt-8 text-xs tracking-[0.2em] uppercase text-gold/80">
          {site.pillarsLine}
        </p>
      </div>

      <a
        href="#trust"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-gold/80 sm:flex"
      >
        <span className="text-[0.6rem] tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
