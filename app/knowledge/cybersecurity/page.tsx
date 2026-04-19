import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { SectionCard } from "@/components/SectionCard";
import { cybersecurityPages } from "@/lib/cybersecurityPages";
import { knowledgeSections } from "@/lib/navigation";

const meta = knowledgeSections.find((s) => s.id === "cybersecurity");

export default function CybersecurityHubPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageIntro
          eyebrow="Knowledge Hub · Cybersecurity"
          title={meta?.label ?? "Cybersecurity"}
          description={
            meta?.description ??
            "Book 1 Section 4 — risk, trust, and executive judgment. Chapters expand here over time."
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
        The separate <strong className="text-slate-200">Security</strong> hub
        page stays for architecture and resilience notes. This{" "}
        <strong className="text-slate-200">Cybersecurity</strong> track is for
        executive interviews: business risk, IAM, compliance, and culture.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {cybersecurityPages.map((p) => (
          <SectionCard
            key={p.slug}
            title={p.title}
            description={p.description}
            href={`/knowledge/cybersecurity/${p.slug}`}
            meta={p.badge}
          />
        ))}
      </div>
    </div>
  );
}
