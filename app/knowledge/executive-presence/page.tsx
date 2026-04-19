import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { SectionCard } from "@/components/SectionCard";
import { executivePresencePages } from "@/lib/executivePresencePages";
import { knowledgeSections } from "@/lib/navigation";

const meta = knowledgeSections.find((s) => s.id === "executive-presence");

export default function ExecutivePresenceHubPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageIntro
          eyebrow="Knowledge Hub · Book 4"
          title={meta?.label ?? "Executive presence"}
          description={
            meta?.description ??
            "Boardroom communication, authority, and executive-grade language."
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
        <strong className="text-slate-200">Leadership</strong> remains Book 1
        mindset and strategy at{" "}
        <strong className="text-slate-200">/knowledge/leadership</strong>.
        <strong className="text-slate-200"> Behavioural & pressure</strong> has
        interview openers and pressure Q&amp;A at{" "}
        <strong className="text-slate-200">/knowledge/behavioral-pressure</strong>
        . This hub is <strong className="text-slate-200">Book 4</strong> for CIO-level
        communication with CEOs, CFOs, and boards.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {executivePresencePages.map((p) => (
          <SectionCard
            key={p.slug}
            title={p.title}
            description={p.description}
            href={`/knowledge/executive-presence/${p.slug}`}
            meta={p.badge}
          />
        ))}
      </div>
    </div>
  );
}
