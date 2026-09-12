import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  className,
}: {
  service: Service;
  className?: string;
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-sm border border-taupe bg-cream shadow-(--shadow-card) transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-(--shadow-lift)",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-espresso">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-espresso-dark/70 via-espresso/10 to-transparent" />
        <span className="absolute bottom-3 left-4 font-display text-3xl text-gold/90">
          {service.number}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="kicker">{service.partner}</p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-espresso">
          {service.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">
          {service.short}
        </p>
        <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold tracking-[0.16em] uppercase text-caramel transition group-hover:text-brown">
          Learn more
          <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
