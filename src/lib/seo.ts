import type { Metadata } from "next";
import { site } from "./content";

const defaultTitle = `${site.name} (AGS) — ${site.tagline}`;
const defaultDescription = `${site.name} is an integrated technical collaboration for testing, surveying, inspection and consultancy. Formerly Volmaken. Offices in Agar-Malwa, Ujjain and Indore.`;

export function pageMetadata({
  title,
  description,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const fullTitle = title ? `${title} — ${site.shortName}` : defaultTitle;
  const desc = description ?? defaultDescription;
  const url = `${site.url}${path}`;

  return {
    title: fullTitle,
    description: desc,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
    },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || site.url),
  title: {
    default: defaultTitle,
    template: `%s — ${site.shortName}`,
  },
  description: defaultDescription,
  keywords: [
    "Anay Global Services",
    "AGS",
    "Volmaken",
    "material testing laboratory Madhya Pradesh",
    "civil engineering consultancy Indore",
    "surveying Agar-Malwa",
    "DPR consultant",
    "environmental monitoring",
    "third party inspection",
    "NABL testing",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    alternateName: [site.shortName, site.formerName],
    description: defaultDescription,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    foundingDate: String(site.founded),
    slogan: site.tagline,
    areaServed: "IN",
    address: {
      "@type": "PostalAddress",
      streetAddress: "AGS House, Near Collectorate Road",
      addressLocality: "Agar-Malwa",
      addressRegion: "Madhya Pradesh",
      postalCode: "465441",
      addressCountry: "IN",
    },
    sameAs: [],
  };
}
