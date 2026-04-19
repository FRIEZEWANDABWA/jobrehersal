import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { SectionCard } from "@/components/SectionCard";
import { leadershipPages } from "@/lib/leadershipPages";
import { knowledgeSections } from "@/lib/navigation";

const leadershipMeta = knowledgeSections.find((s) => s.id === "leadership");

export default function LeadershipHubPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageIntro
          eyebrow="Knowledge Hub · Leadership"
          title={leadershipMeta?.label ?? "Leadership"}
          description={
            leadershipMeta?.description ??
            "Book 1 — core foundations split into focused pages. Open a chapter or section below."
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
        Use <strong className="text-slate-200">Overview</strong> anytime to
        jump between parts.{" "}
        <strong className="text-slate-200">Section 1 — Fit</strong> covers
        introductory questions.{" "}
        <strong className="text-slate-200">Section 2 — Framework</strong> is
        the alignment playbook (B → I → K → G).{" "}
        <strong className="text-slate-200">Chapter 3</strong> covers roadmaps,
        prioritization, and boardroom decision defense — plus{" "}
        <strong className="text-slate-200">Ch. 3 — Q&A</strong> for scripted
        practice.{" "}
        <strong className="text-slate-200">Chapter 4</strong> covers
        responsible innovation vs stability, with{" "}
        <strong className="text-slate-200">Ch. 4 — Q&A</strong> for practice.{" "}
        <strong className="text-slate-200">Chapter 5</strong> covers AI and
        emerging tech with governance, plus{" "}
        <strong className="text-slate-200">Ch. 5 — Q&A</strong> for interview
        practice.{" "}
        <strong className="text-slate-200">Section 2 — Q&A</strong> stays
        focused on strategic alignment prompts.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {leadershipPages.map((p) => (
          <SectionCard
            key={p.slug}
            title={p.title}
            description={p.description}
            href={`/knowledge/leadership/${p.slug}`}
            meta={p.badge}
          />
        ))}
      </div>
    </div>
  );
}
