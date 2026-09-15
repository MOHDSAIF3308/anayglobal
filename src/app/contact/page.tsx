import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { offices, site } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact / Request a Quote",
  description:
    "Request a quote from Anay Global Services. Head office at Bhawar Kuan Square, Indore — consulting, inspection, survey and testing desks.",
  path: "/contact",
});

export default function ContactPage() {
  // Bhawar Kuan Square, Indore embed coordinates: ~22.6926, 75.8676
  const mapSrc =
    "https://www.openstreetmap.org/export/embed.html?bbox=75.845%2C22.675%2C75.890%2C22.710&layer=mapnik&marker=22.6926%2C75.8676";

  return (
    <>
      <PageHero
        kicker="Contact"
        title="Let’s build a better tomorrow together."
        lede="Brief the technical desk. We will route the work to the laboratory, the survey crew, the inspector or the designer from our central Indore headquarters."
        image="/images/office-dusk.jpg"
      />

      <section className="bg-cream py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="kicker">Request a quote</p>
              <h2 className="mt-3 font-display text-3xl text-espresso sm:text-4xl">
                Send the package, the plant, or the plot.
              </h2>
              <p className="mt-3 mb-8 text-sm leading-relaxed text-stone">
                This form posts to a Cloudflare-compatible API route. Connect
                Web3Forms or Resend with an environment variable when you are
                ready to receive mail — until then, submissions are validated
                and acknowledged.
              </p>
              <QuoteForm />
            </div>

            <div className="lg:col-span-6">
              <p className="kicker">Head office</p>
              <div className="mt-6 space-y-5">
                {offices.map((o) => (
                  <article
                    key={o.id}
                    className="border border-taupe bg-cream-dark p-8"
                  >
                    <p className="text-xs font-semibold tracking-[0.16em] uppercase text-caramel">
                      {o.role}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-espresso">
                      {o.name}
                    </h3>
                    <address className="mt-4 not-italic text-sm leading-relaxed text-stone">
                      {o.address.map((line) => (
                        <p key={line} className="font-medium text-espresso">{line}</p>
                      ))}
                      <p className="mt-4">
                        <span className="text-xs tracking-wider uppercase text-caramel block">Phone</span>
                        <a
                          href={`tel:${o.phone.replace(/\s/g, "")}`}
                          className="text-espresso font-medium hover:text-caramel"
                        >
                          {o.phone}
                        </a>
                      </p>
                      <p className="mt-2">
                        <span className="text-xs tracking-wider uppercase text-caramel block">Email</span>
                        <a
                          href={`mailto:${o.email}`}
                          className="text-espresso font-medium hover:text-caramel"
                        >
                          {o.email}
                        </a>
                      </p>
                    </address>
                  </article>
                ))}
              </div>
              <p className="mt-6 text-sm text-stone">
                General desk:{" "}
                <a href={`mailto:${site.email}`} className="text-caramel hover:underline">
                  {site.email}
                </a>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream-dark pb-20">
        <Container>
          <p className="kicker mb-4">Map · Indore, Madhya Pradesh</p>
          <div className="overflow-hidden border border-taupe bg-taupe">
            <iframe
              title="AGS Head Office at Bhawar Kuan Square, Indore"
              src={mapSrc}
              className="h-[420px] w-full grayscale contrast-125"
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-xs text-muted">
            Map data © OpenStreetMap contributors. Marker centred on Giriraj Tower, Bhawar Kuan Square, Indore.
          </p>
        </Container>
      </section>
    </>
  );
}
