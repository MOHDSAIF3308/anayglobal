import Image from "next/image";
import type { Project } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-sm bg-espresso",
        className,
      )}
    >
      <div className="relative aspect-[4/5] sm:aspect-[5/6]">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-espresso-dark via-espresso-dark/40 to-espresso/10" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="dark-kicker">{project.sector}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-cream">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-gold/90">{project.location}</p>
          <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-taupe-dark opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100">
            {project.summary}
          </p>
        </div>
      </div>
    </article>
  );
}
