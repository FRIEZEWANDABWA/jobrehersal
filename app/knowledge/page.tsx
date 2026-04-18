import { SectionCard } from "@/components/SectionCard";
import { PageIntro } from "@/components/PageIntro";
import { knowledgeSections } from "@/lib/navigation";

export default function KnowledgeHubPage() {
  return (
    <div className="space-y-10">
      <PageIntro
        eyebrow="Knowledge Hub"
        title="Deep notes for executive IT conversations"
        description="These pages are intentionally concise: anchors you can expand with your own case studies, metrics, and language. Replace generic examples with your lived history as you iterate."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {knowledgeSections.map((s) => (
          <SectionCard
            key={s.id}
            title={s.label}
            description={s.description}
            href={`/knowledge/${s.id}`}
            meta="Read"
          />
        ))}
      </div>
    </div>
  );
}
