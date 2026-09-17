"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { buttonClassName } from "@/components/ui/Button";
import { QuoteButton } from "@/components/quote/QuoteButton";
import { nav, services } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const overlay = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const solid = !overlay || scrolled || mobileOpen;
  const invert = overlay && !scrolled && !mobileOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        solid
          ? "border-b border-taupe/80 bg-cream/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link href="/" aria-label="Anay Consultants & Engineers home" className="shrink-0">
          <Logo invert={invert} />
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {nav.map((item) =>
            item.href === "/services" ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href="/services"
                  className={cn(
                    "inline-flex items-center gap-1 px-3 py-2 text-[0.72rem] font-semibold tracking-[0.16em] uppercase transition",
                    invert
                      ? "text-cream/85 hover:text-gold"
                      : "text-espresso/80 hover:text-caramel",
                    pathname.startsWith("/services") &&
                      (invert ? "text-gold" : "text-caramel"),
                  )}
                  aria-expanded={servicesOpen}
                >
                  Services
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {servicesOpen ? (
                  <div className="absolute left-0 top-full w-[22rem] border border-taupe bg-cream py-3 shadow-card">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block px-4 py-2.5 text-sm text-espresso hover:bg-cream-dark hover:text-brown"
                      >
                        <span className="mr-2 font-display text-gold">
                          {s.number}
                        </span>
                        {s.name}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-[0.72rem] font-semibold tracking-[0.16em] uppercase transition",
                  invert
                    ? "text-cream/85 hover:text-gold"
                    : "text-espresso/80 hover:text-caramel",
                  (item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href)) &&
                    (invert ? "text-gold" : "text-caramel"),
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <QuoteButton
            className={buttonClassName({
              variant: invert ? "gold" : "espresso",
              size: "sm",
              className: "max-sm:px-3 max-sm:text-[0.62rem]",
            })}
          >
            <span className="sm:hidden">Quote</span>
            <span className="hidden sm:inline">Request a Quote</span>
          </QuoteButton>
          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-sm lg:hidden",
              invert ? "text-cream" : "text-espresso",
            )}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="max-h-[calc(100svh-4.25rem)] overflow-y-auto border-t border-taupe bg-cream lg:hidden">
          <nav className="flex flex-col px-5 py-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-taupe py-3 font-display text-2xl text-espresso"
              >
                {item.label}
              </Link>
            ))}
            <div className="py-4">
              <p className="kicker mb-2">Service pillars</p>
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="block py-1.5 text-sm text-stone"
                >
                  {s.number} — {s.name}
                </Link>
              ))}
            </div>
            <QuoteButton
              className={buttonClassName({
                variant: "gold",
                size: "lg",
                className: "mt-2 w-full",
              })}
            >
              Request a Quote
            </QuoteButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
