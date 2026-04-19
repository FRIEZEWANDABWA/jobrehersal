import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { MockInterviewClient } from "@/components/MockInterviewClient";
import { questions } from "@/lib/contentData";
import type { QuestionDifficulty } from "@/lib/types";

export const metadata: Metadata = {
  title: "Mock interview",
  description:
    "Random bank prompts—speak first, then reveal elite reference answers. Optional executive difficulty via query string.",
};

function parseDifficulty(
  raw: string | string[] | undefined,
): QuestionDifficulty | "all" {
  const v = Array.isArray(raw) ? raw[0] : raw;
  if (v === "executive" || v === "mid" || v === "foundation") return v;
  if (v === "all") return "all";
  return "all";
}

export default async function MockInterviewPage({
  searchParams,
}: {
  searchParams: Promise<{ difficulty?: string }>;
}) {
  const sp = await searchParams;
  const initialDifficulty = parseDifficulty(sp.difficulty);

  return (
    <div className="space-y-10 sm:space-y-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageIntro
          eyebrow="Layer 3 · Practice engine"
          title="Mock interview — speak, then compare"
          description="Random prompts from your interview bank. You answer aloud first; only then do you see an elite reference response and optional compact hint. For scripted fifty-question panels, use the Knowledge Hub full mock interview panel in parallel—same judgment muscle, different format."
        />
        <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
          <Link
            href="/"
            className="text-sm font-medium text-amber-400/90 hover:text-amber-200"
          >
            ← Command Centre
          </Link>
          <Link
            href="/knowledge/full-mock-interview-panel/mock-panel-introduction"
            className="text-sm font-medium text-slate-400 hover:text-slate-200"
          >
            50-question panel →
          </Link>
        </div>
      </div>

      <MockInterviewClient
        questions={questions}
        initialDifficulty={initialDifficulty}
      />
    </div>
  );
}
