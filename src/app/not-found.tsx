import Link from "next/link";
import { buttonClassName } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center bg-espresso-dark px-6 pt-28 text-center">
      <p className="dark-kicker">404</p>
      <h1 className="mt-4 font-display text-5xl text-cream sm:text-6xl">
        This drawing is not on the register.
      </h1>
      <p className="mt-4 max-w-md text-taupe-dark">
        The page may have moved with the rebrand from Volmaken. Try the services
        index or the home page.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className={buttonClassName({ variant: "gold" })}>
          Home
        </Link>
        <Link href="/contact" className={buttonClassName({ variant: "outlineLight" })}>
          Contact
        </Link>
      </div>
    </section>
  );
}
