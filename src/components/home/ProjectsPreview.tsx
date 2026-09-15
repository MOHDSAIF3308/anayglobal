import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { buttonClassName } from "@/components/ui/Button";
import { projects } from "@/lib/content";

export function ProjectsPreview() {
  return (
    <section className="bg-espresso-dark py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              invert
              kicker="Selected work"
              title="Projects by sector."
              lede="Highway, buildings, industrial, water, surveying and energy — a sample of the files we have sat inside."
            />
            <Link
              href="/projects"
              className={buttonClassName({
                variant: "outlineLight",
                className: "shrink-0 self-start",
              })}
            >
              All projects
            </Link>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 60}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
