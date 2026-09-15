import { offices, partners, services, site, journey, stats } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export const metadata = pageMetadata({
  title: "Company Profile",
  description: `Printable company profile for ${site.name} — network, services, offices and journey.`,
  path: "/resources/company-profile",
});

export default function CompanyProfilePage() {
  return (
    <div className="bg-cream pt-28 pb-20 print:pt-8">
      <Container className="max-w-4xl">
        <div className="flex flex-col gap-6 border-b border-gold/50 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Logo />
            <p className="mt-4 max-w-md text-sm text-stone">
              Company profile · {site.pillarsLine}
            </p>
          </div>
          <p className="font-display text-2xl text-caramel print:hidden">
            File → Print to save as PDF
          </p>
        </div>

        <h1 className="mt-10 font-display text-4xl text-espresso sm:text-5xl">
          {site.name}
        </h1>
        <p className="mt-2 text-lg text-caramel">{site.tagline}</p>
        <p className="mt-4 max-w-2xl text-stone">
          Established {site.founded} in Indore.
          Integrated technical collaboration for consulting, inspection,
          surveying and testing, with head office at Bhawar Kuan Square, Indore.
        </p>

        <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-taupe py-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="text-xs tracking-wide text-stone">{s.label}</dt>
              <dd className="mt-1 font-display text-3xl text-espresso">{s.value}</dd>
            </div>
          ))}
        </dl>

        <h2 className="mt-12 font-display text-3xl text-espresso">Network</h2>
        <ul className="mt-4 space-y-3">
          {partners.map((p) => (
            <li key={p.slug} className="border-b border-taupe pb-3">
              <p className="font-semibold text-espresso">{p.name}</p>
              <p className="text-sm text-stone">
                {p.role} — {p.summary}
              </p>
            </li>
          ))}
        </ul>

        <h2 className="mt-12 font-display text-3xl text-espresso">Services</h2>
        <ol className="mt-4 space-y-3">
          {services.map((s) => (
            <li key={s.slug}>
              <span className="text-gold">{s.number}</span>{" "}
              <span className="font-semibold text-espresso">{s.name}</span>
              <span className="text-stone"> — {s.short}</span>
            </li>
          ))}
        </ol>

        <h2 className="mt-12 font-display text-3xl text-espresso">Journey</h2>
        <ul className="mt-4 space-y-3">
          {journey.map((j) => (
            <li key={j.year} className="text-sm">
              <span className="font-semibold text-espresso">
                {j.year} · {j.place}.
              </span>{" "}
              <span className="text-stone">{j.body}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-12 font-display text-3xl text-espresso">Head Office</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-1 max-w-md">
          {offices.map((o) => (
            <address key={o.id} className="not-italic text-sm text-stone border border-taupe p-5 bg-cream-dark">
              <p className="font-semibold text-espresso">{o.name}</p>
              {o.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="mt-2 font-medium text-espresso">{o.phone}</p>
              <p className="font-medium text-espresso">{o.email}</p>
            </address>
          ))}
        </div>

        <p className="mt-16 text-xs tracking-[0.16em] uppercase text-muted">
          {site.promise}
        </p>
      </Container>
    </div>
  );
}
