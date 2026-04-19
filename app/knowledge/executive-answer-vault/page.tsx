import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { SectionCard } from "@/components/SectionCard";
import { executiveAnswerVaultPages } from "@/lib/executiveAnswerVaultPages";
import { knowledgeSections } from "@/lib/navigation";

const meta = knowledgeSections.find((s) => s.id === "executive-answer-vault");

export default function ExecutiveAnswerVaultHubPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageIntro
          eyebrow="Knowledge Hub · Book 7"
          title={meta?.label ?? "Executive answer vault"}
          description={
            meta?.description ??
            "Rapid revision: openings, closings, vocabulary, and boardroom-ready language."
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
        The in-app <strong className="text-slate-200">Rapid revision</strong> tool lives at{" "}
        <strong className="text-slate-200">/rapid-revision</strong>. This hub is{" "}
        <strong className="text-slate-200">Book 7</strong> written prep—memorizable lines,
        vocabulary upgrades, and positioning you can drop into answers under pressure.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {executiveAnswerVaultPages.map((p) => (
          <SectionCard
            key={p.slug}
            title={p.title}
            description={p.description}
            href={`/knowledge/executive-answer-vault/${p.slug}`}
            meta={p.badge}
          />
        ))}
      </div>
    </div>
  );
}
