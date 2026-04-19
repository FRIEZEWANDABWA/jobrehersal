import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { SectionCard } from "@/components/SectionCard";
import { behavioralPressurePages } from "@/lib/behavioralPressurePages";
import { knowledgeSections } from "@/lib/navigation";

const meta = knowledgeSections.find((s) => s.id === "behavioral-pressure");

export default function BehavioralPressureHubPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageIntro
          eyebrow="Knowledge Hub · Behavioural & pressure"
          title={meta?.label ?? "Behavioural & pressure"}
          description={
            meta?.description ??
            "Book 1 Section 7 — how you show up when stakes are high."
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
        Behavioural prompts reward <strong className="text-slate-200">repeatable leadership patterns</strong>{" "}
        more than one-off heroics. Use this hub with your STAR vault: same stories,
        tighter framing (context → <em>your</em> decision → how you led → measurable
        result → principle).
      </p>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {behavioralPressurePages.map((p) => (
          <SectionCard
            key={p.slug}
            title={p.title}
            description={p.description}
            href={`/knowledge/behavioral-pressure/${p.slug}`}
            meta={p.badge}
          />
        ))}
      </div>
    </div>
  );
}
