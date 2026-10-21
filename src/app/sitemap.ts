import type { MetadataRoute } from "next";
import { articles, services, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticLastModified = new Date("2026-10-17");
  const staticPaths = [
    { path: "/", lastModified: staticLastModified },
    { path: "/about", lastModified: staticLastModified },
    { path: "/services", lastModified: staticLastModified },
    { path: "/network", lastModified: staticLastModified },
    { path: "/projects", lastModified: staticLastModified },
    { path: "/resources", lastModified: staticLastModified },
    { path: "/resources/company-profile", lastModified: staticLastModified },
    { path: "/contact", lastModified: staticLastModified },
  ];

  return [
    ...staticPaths.map(({ path, lastModified }) => ({
      url: `${site.url}${path === "/" ? "/" : path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
    })),
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      lastModified: new Date(s.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...articles.map((a) => ({
      url: `${site.url}/resources/${a.slug}`,
      lastModified: new Date(a.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
