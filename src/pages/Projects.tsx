import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/data/projects";

export function Projects() {
  return (
    <section className="mx-auto min-h-screen max-w-5xl px-6 py-20">
      <SectionHeading
        title="Projects"
        subtitle="Highlights from real-time gaming platforms, fintech tools, analytics dashboards, e-commerce, and mentorship."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
