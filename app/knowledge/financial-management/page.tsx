import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { SectionCard } from "@/components/SectionCard";
import { financialManagementPages } from "@/lib/financialManagementPages";
import { knowledgeSections } from "@/lib/navigation";

const meta = knowledgeSections.find((s) => s.id === "financial-management");

export default function FinancialManagementHubPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageIntro
          eyebrow="Knowledge Hub · Financial management"
          title={meta?.label ?? "Financial management"}
          description={
            meta?.description ??
            "Book 1 Section 6 — budgets, investment language, and measurable value."
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
        The <strong className="text-slate-200">Finance</strong> card still opens
        the original single-topic notes at{" "}
        <strong className="text-slate-200">/knowledge/finance</strong>. This
        hub is Book 1 Section 6 for executive IT financial management and
        budgets.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {financialManagementPages.map((p) => (
          <SectionCard
            key={p.slug}
            title={p.title}
            description={p.description}
            href={`/knowledge/financial-management/${p.slug}`}
            meta={p.badge}
          />
        ))}
      </div>
    </div>
  );
}
