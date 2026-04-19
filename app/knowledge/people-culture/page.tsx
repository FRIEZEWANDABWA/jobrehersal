import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { SectionCard } from "@/components/SectionCard";
import { peopleCulturePages } from "@/lib/peopleCulturePages";
import { knowledgeSections } from "@/lib/navigation";

const meta = knowledgeSections.find((s) => s.id === "people-culture");

export default function PeopleCultureHubPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageIntro
          eyebrow="Knowledge Hub · People & culture"
          title={meta?.label ?? "People & culture"}
          description={
            meta?.description ??
            "Book 1 Section 5 — how you scale yourself through others."
          }
        />
        <Link
          href="/knowledge"
          className="shrink-0 text-sm font-medium text-amber-400/90 hover:text-amber-200"
        >
          ← All sections
        </Link>
      </div>

      <p className="max-w-2xl text-sm leading-relaxed text-slate-400">
        The <strong className="text-slate-200">People leadership</strong> card
        still opens the original single-topic notes at{" "}
        <strong className="text-slate-200">/knowledge/people-leadership</strong>
        . This hub is Book 1 Section 5 for executive people and culture
        interviews.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {peopleCulturePages.map((p) => (
          <SectionCard
            key={p.slug}
            title={p.title}
            description={p.description}
            href={`/knowledge/people-culture/${p.slug}`}
            meta={p.badge}
          />
        ))}
      </div>
    </div>
  );
}
