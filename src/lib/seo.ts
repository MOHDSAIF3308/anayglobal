import type { Metadata } from "next";
import type { Article, Service } from "./content";
import { offices, site } from "./content";

const defaultTitle = `${site.name} (ACE) — ${site.tagline}`;
const defaultDescription = `${site.name} is an integrated technical collaboration for engineering, DPR consultancy, inspection, surveying, civil material testing, chemical testing and environmental services from Indore, Madhya Pradesh.`;

function absoluteUrl(path = "/") {
  if (path === "/") return `${site.url}/`;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageMetadata({
  title,
  description,
  path = "/",
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
}: {
  title?: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
}): Metadata {
  const fullTitle = title ? `${title} | ${site.shortName}` : defaultTitle;
  const desc = description ?? defaultDescription;
  const url = absoluteUrl(path);

  return {
    title: fullTitle,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: site.name,
      locale: "en_IN",
      type,
      images: [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: `${site.name} — ${site.tagline}`,
        },
      ],
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime,
            authors,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [absoluteUrl("/opengraph-image")],
    },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(`${site.url}/`),
  title: {
    default: defaultTitle,
    template: "%s",
  },
  description: defaultDescription,
  keywords: [
    "Anay Consultants & Engineers",
    "ACE",
    "Volmaken",
    "material testing laboratory Madhya Pradesh",
    "civil engineering consultancy Indore",
    "surveying Madhya Pradesh",
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
    url: absoluteUrl("/"),
    siteName: site.name,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [absoluteUrl("/opengraph-image")],
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
  const office = offices[0];
  const organizationId = `${site.url}/#organization`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: site.name,
        alternateName: [site.shortName, site.formerName],
        description: defaultDescription,
        url: absoluteUrl("/"),
        logo: absoluteUrl("/images/acelogonobg.png"),
        email: site.email,
        telephone: site.phone,
        foundingDate: String(site.founded),
        slogan: site.tagline,
        areaServed: ["Indore", "Madhya Pradesh", "Central India"],
        sameAs: [],
        subOrganization: { "@id": `${site.url}/#professional-service` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#professional-service`,
        name: site.name,
        url: absoluteUrl("/contact"),
        image: absoluteUrl("/images/acelogonobg.png"),
        logo: absoluteUrl("/images/acelogonobg.png"),
        email: office.email || site.email,
        telephone: office.phone,
        parentOrganization: { "@id": organizationId },
        areaServed: ["Indore", "Madhya Pradesh", "Central India"],
        address: {
          "@type": "PostalAddress",
          streetAddress: office.address[0],
          addressLocality: office.city,
          addressRegion: "Madhya Pradesh",
          postalCode: office.address[2].match(/\d{6}/)?.[0],
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: office.lat,
          longitude: office.lng,
        },
        sameAs: [],
      },
    ],
  };
}

export function serviceJsonLd(service: Service) {
  const url = absoluteUrl(`/services/${service.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.name,
    description: service.summary,
    serviceType: service.name,
    url,
    areaServed: service.serviceArea,
    provider: { "@id": `${site.url}/#organization` },
  };
}

export function articleJsonLd(article: Article) {
  const url = absoluteUrl(`/resources/${article.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: article.title,
    description: article.excerpt,
    url,
    articleSection: article.category,
    author: {
      "@type": "Organization",
      name: article.author.name,
      description: article.author.role,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      logo: { "@type": "ImageObject", url: absoluteUrl("/images/acelogonobg.png") },
    },
    ...(article.publishedAt?.match(/^\d{4}-\d{2}-\d{2}$/)
      ? { datePublished: article.publishedAt }
      : {}),
    dateModified: article.updatedAt,
  };
}
