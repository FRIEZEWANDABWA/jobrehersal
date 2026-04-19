import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { StarVaultStory } from "@/components/StarVaultStory";
import { starStories } from "@/lib/contentData";

export const metadata: Metadata = {
  title: "STAR vault",
  description:
    "Structured STAR stories with executive lessons—proof you can speak, not just read.",
};

export default function StarVaultPage() {
  return (
    <div className="space-y-14 sm:space-y-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageIntro
          eyebrow="Layer 3 · STAR vault"
          title="Your real stories—not scripts"
          description="Each block is STAR plus an executive lesson: what the panel should conclude about your judgment. Rehearse aloud; swap in your exact metrics, geography, and stakeholders. Below each story, the Personal Layer saves your executive version, notes, and upgrade flags—locally in this browser until you add cloud backup."
        />
        <Link
          href="/"
          className="shrink-0 text-sm font-medium text-amber-400/90 hover:text-amber-200"
        >
          ← Command Centre
        </Link>
      </div>

      <nav
        aria-label="Jump to story"
        className="rounded-3xl border border-slate-800/90 bg-slate-950/40 p-5 sm:p-6"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
          On this page
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {starStories.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="inline-block rounded-full border border-slate-700/90 bg-slate-900/50 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-amber-500/40 hover:text-amber-50"
              >
                {s.title.length > 42 ? `${s.title.slice(0, 40)}…` : s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="space-y-12 sm:space-y-14">
        {starStories.map((s) => (
          <StarVaultStory key={s.id} story={s} />
        ))}
      </div>

      <p className="text-center text-xs text-slate-600">
        {starStories.length} stories in{" "}
        <code className="rounded bg-slate-900 px-1.5 py-0.5 text-[11px] text-slate-500">
          content/star/stories.json
        </code>
        —edit JSON to add, reorder, or retitle.
      </p>
    </div>
  );
}
