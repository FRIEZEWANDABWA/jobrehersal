import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { SectionCard } from "@/components/SectionCard";
import { transformationAiFuturePages } from "@/lib/transformationAiFuturePages";
import { knowledgeSections } from "@/lib/navigation";

const meta = knowledgeSections.find((s) => s.id === "transformation-ai-future");

export default function TransformationAiFutureHubPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageIntro
          eyebrow="Knowledge Hub · Book 5"
          title={meta?.label ?? "Transformation & AI"}
          description={
            meta?.description ??
            "Digital transformation, AI governance, and executive future-readiness."
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
        The single-topic{" "}
        <strong className="text-slate-200">AI</strong> primer lives at{" "}
        <strong className="text-slate-200">/knowledge/ai</strong>. This hub is{" "}
        <strong className="text-slate-200">Book 5</strong>: operating-model
        transformation, governed AI acceleration, board-level AI conversations, and
        how you prepare the business for what comes next—alongside{" "}
        <strong className="text-slate-200">/knowledge/infrastructure-architecture</strong>{" "}
        and <strong className="text-slate-200">/knowledge/executive-presence</strong>{" "}
        for broader executive narrative.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {transformationAiFuturePages.map((p) => (
          <SectionCard
            key={p.slug}
            title={p.title}
            description={p.description}
            href={`/knowledge/transformation-ai-future/${p.slug}`}
            meta={p.badge}
          />
        ))}
      </div>
    </div>
  );
}
