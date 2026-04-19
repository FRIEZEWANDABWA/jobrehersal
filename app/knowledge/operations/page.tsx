import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { SectionCard } from "@/components/SectionCard";
import { operationsPages } from "@/lib/operationsPages";
import { knowledgeSections } from "@/lib/navigation";

const operationsMeta = knowledgeSections.find((s) => s.id === "operations");

export default function OperationsHubPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageIntro
          eyebrow="Knowledge Hub · Operations"
          title={operationsMeta?.label ?? "Operations"}
          description={
            operationsMeta?.description ??
            "Book 1 Section 3 — IT operations, network, and service delivery. Chapters expand here over time."
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
        <strong className="text-slate-200">Section 3</strong> is where panels
        test whether you can{" "}
        <strong className="text-slate-200">keep the business running</strong>
        — uptime, incidents, vendors, and continuity. Use{" "}
        <strong className="text-slate-200">Ch. 1 — Q&A</strong> and{" "}
        <strong className="text-slate-200">Ch. 2 — Q&A</strong> for scripted
        practice (availability, then ITIL / ITSM / governance).{" "}
        <strong className="text-slate-200">Chapter 3</strong> is the vendor &
        SLA playbook, with <strong className="text-slate-200">Ch. 3 — Q&A</strong>{" "}
        for interview practice.{" "}
        <strong className="text-slate-200">Chapter 4</strong> covers BCP/DR and
        crisis leadership, with{" "}
        <strong className="text-slate-200">Ch. 4 — Q&A</strong> for practice.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {operationsPages.map((p) => (
          <SectionCard
            key={p.slug}
            title={p.title}
            description={p.description}
            href={`/knowledge/operations/${p.slug}`}
            meta={p.badge}
          />
        ))}
      </div>
    </div>
  );
}
