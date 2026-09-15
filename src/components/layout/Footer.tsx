import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { nav, offices, services, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-charcoal text-taupe-dark">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo invert />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              {site.descriptor}. {site.pillarsLine}. Established {site.founded}.
            </p>
            <p className="mt-4 font-display text-xl text-gold">{site.promise}</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            <div>
              <p className="dark-kicker">Explore</p>
              <ul className="mt-4 space-y-2">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-taupe-dark transition hover:text-gold"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="dark-kicker">Services</p>
              <ul className="mt-4 space-y-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-sm text-taupe-dark transition hover:text-gold"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="dark-kicker">Head Office</p>
              <ul className="mt-4 space-y-4">
                {offices.map((o) => (
                  <li key={o.id} className="text-sm">
                    <p className="text-cream font-medium">{o.name}</p>
                    <p className="text-xs text-taupe-dark mt-0.5">
                      {o.address[0]}, {o.address[1]}
                    </p>
                    <a
                      href={`tel:${o.phone.replace(/\s/g, "")}`}
                      className="block mt-1 text-gold hover:underline"
                    >
                      {o.phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="tracking-[0.16em] uppercase text-gold/80">
            {site.pillarsLine}
          </p>
        </div>
      </Container>
    </footer>
  );
}
