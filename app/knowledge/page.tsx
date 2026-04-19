import type { Metadata } from "next";
import Link from "next/link";
import { SectionCard } from "@/components/SectionCard";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Knowledge library",
  description:
    "The library organized by executive function—leadership, security, operations, finance, transformation, and interview mastery hubs.",
};
import {
  KNOWLEDGE_HUB_IDS,
  knowledgeLibraryGroups,
} from "@/lib/knowledgeLibraryGroups";
import { knowledgeSections } from "@/lib/navigation";
import type { KnowledgeSection } from "@/lib/types";

function sectionById(id: KnowledgeSection) {
  const s = knowledgeSections.find((x) => x.id === id);
  if (!s) return null;
  return s;
}

/** Show substance first; book numbers stay implicit in meta / file only. */
function withoutBookLead(text: string) {
  return text.replace(/^Book \d+(?: Section \d+)?:\s*/i, "").trim();
}

export default function KnowledgeHubPage() {
  return (
    <div className="space-y-16 sm:space-y-20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageIntro
          eyebrow="Layer 2 · The library"
          title="Knowledge hub"
          description="Deep reading organized by executive job—not by book number. Book labels appear only as small badges on cards where they help orientation. Same URLs and content as before; this page is the map."
        />
        <Link
          href="/"
          className="shrink-0 text-sm font-medium text-amber-400/90 hover:text-amber-200"
        >
          ← Command Centre
        </Link>
      </div>

      <p className="max-w-3xl text-sm leading-relaxed text-slate-400">
        Read in <strong className="text-slate-200">one group at a time</strong> when
        possible—each block is a coherent interview theme. Use{" "}
        <strong className="text-slate-200">Hub</strong> entries for multi-chapter
        tracks; <strong className="text-slate-200">Primer</strong> entries are
        single-topic notes you can still extend by editing markdown.
      </p>

      <div className="space-y-16">
        {knowledgeLibraryGroups.map((group) => (
          <section
            key={group.title}
            className="rounded-3xl border border-slate-800/90 bg-slate-950/35 p-8 sm:p-10"
          >
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
              {group.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400">
              {group.purpose}
            </p>
            <div className="mt-5 rounded-2xl border border-amber-500/15 bg-amber-500/[0.06] px-4 py-3 sm:px-5 sm:py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-500/90">
                What panels are really testing
              </p>
              <p className="mt-2 text-sm leading-relaxed text-amber-50/90">
                {group.panelsTest}
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {group.sectionIds.map((id) => {
                const s = sectionById(id);
                if (!s) return null;
                const meta = KNOWLEDGE_HUB_IDS.has(id) ? "Hub" : "Primer";
                return (
                  <SectionCard
                    key={id}
                    title={s.label}
                    description={withoutBookLead(s.description)}
                    href={`/knowledge/${s.id}`}
                    meta={meta}
                  />
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <p className="text-center text-xs text-slate-600">
        Markdown still lives under{" "}
        <code className="rounded bg-slate-900 px-1.5 py-0.5 text-[11px] text-slate-500">
          content/knowledge/
        </code>
        —folder names unchanged.
      </p>
    </div>
  );
}
