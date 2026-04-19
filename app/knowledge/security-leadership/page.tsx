import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { SectionCard } from "@/components/SectionCard";
import { securityLeadershipPages } from "@/lib/securityLeadershipPages";
import { knowledgeSections } from "@/lib/navigation";

const meta = knowledgeSections.find((s) => s.id === "security-leadership");

export default function SecurityLeadershipHubPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageIntro
          eyebrow="Knowledge Hub · Book 3"
          title={meta?.label ?? "Security leadership"}
          description={
            meta?.description ??
            "Board-level cyber strategy, Zero Trust, and executive security language."
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
        <strong className="text-slate-200">Cybersecurity</strong> opens Book 1
        Section 4 at{" "}
        <strong className="text-slate-200">/knowledge/cybersecurity</strong>.
        The <strong className="text-slate-200">Security</strong> card still opens
        the single-topic notes at{" "}
        <strong className="text-slate-200">/knowledge/security</strong>. This hub
        is <strong className="text-slate-200">Book 3</strong> for advanced
        security leadership and board-level strategy.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {securityLeadershipPages.map((p) => (
          <SectionCard
            key={p.slug}
            title={p.title}
            description={p.description}
            href={`/knowledge/security-leadership/${p.slug}`}
            meta={p.badge}
          />
        ))}
      </div>
    </div>
  );
}
