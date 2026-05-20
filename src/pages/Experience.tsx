import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { EXPERIENCE } from "@/data/experience";

export function Experience() {
  return (
    <section className="mx-auto min-h-screen max-w-4xl px-6 py-20">
      <SectionHeading
        title="Experience"
        subtitle="8+ years building scalable platforms across gaming, fintech, ad tech, e-commerce, and more."
      />

      <div className="space-y-10">
        {EXPERIENCE.map((entry, index) => (
          <TimelineItem key={entry.id} entry={entry} index={index} />
        ))}
      </div>
    </section>
  );
}
