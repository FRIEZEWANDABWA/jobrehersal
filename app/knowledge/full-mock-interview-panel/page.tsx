import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { SectionCard } from "@/components/SectionCard";
import { fullMockInterviewPanelPages } from "@/lib/fullMockInterviewPanelPages";
import { knowledgeSections } from "@/lib/navigation";

const meta = knowledgeSections.find((s) => s.id === "full-mock-interview-panel");

export default function FullMockInterviewPanelHubPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageIntro
          eyebrow="Knowledge Hub · Mock panel"
          title={meta?.label ?? "Full mock interview panel"}
          description={
            meta?.description ??
            "Fifty executive questions split by section with elite answers under pressure."
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
        Use the <strong className="text-slate-200">Intro</strong> page for mindset,
        then move <strong className="text-slate-200">Q1–5</strong> through{" "}
        <strong className="text-slate-200">Q36–50</strong> in order—or jump to the
        band you are drilling. For case-study structures and scripted scenarios, see{" "}
        <strong className="text-slate-200">/knowledge/mock-case-studies</strong>; for
        openings, closings, and vocabulary, see{" "}
        <strong className="text-slate-200">/knowledge/executive-answer-vault</strong>
        . The live <strong className="text-slate-200">/mock-interview</strong> tool is
        separate from this written panel.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {fullMockInterviewPanelPages.map((p) => (
          <SectionCard
            key={p.slug}
            title={p.title}
            description={p.description}
            href={`/knowledge/full-mock-interview-panel/${p.slug}`}
            meta={p.badge}
          />
        ))}
      </div>
    </div>
  );
}
