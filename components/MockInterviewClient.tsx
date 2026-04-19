"use client";

import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import type { Question, QuestionDifficulty } from "@/lib/types";

const MOCK_LS_KEY = "ecc-mock-interviews-done";
const difficulties: Array<QuestionDifficulty | "all"> = [
  "all",
  "executive",
  "mid",
  "foundation",
];

function pickRandom(list: Question[], excludeId?: string) {
  const pool = excludeId ? list.filter((q) => q.id !== excludeId) : list;
  if (pool.length === 0) return list[Math.floor(Math.random() * list.length)]!;
  return pool[Math.floor(Math.random() * pool.length)]!;
}

function filterPool(
  all: Question[],
  difficulty: QuestionDifficulty | "all",
): Question[] {
  if (difficulty === "all") return all;
  return all.filter((q) => q.difficulty === difficulty);
}

function bumpMockSessionsCompleted() {
  try {
    const cur = parseInt(
      window.localStorage.getItem(MOCK_LS_KEY) ?? "0",
      10,
    );
    const n = Number.isFinite(cur) && cur >= 0 ? cur : 0;
    window.localStorage.setItem(MOCK_LS_KEY, String(n + 1));
  } catch {
    /* ignore */
  }
}

type MockInterviewClientProps = {
  questions: Question[];
  /** From URL e.g. `?difficulty=executive` — set by server page. */
  initialDifficulty?: QuestionDifficulty | "all";
};

export function MockInterviewClient({
  questions,
  initialDifficulty = "all",
}: MockInterviewClientProps) {
  const [difficulty, setDifficulty] = useState<QuestionDifficulty | "all">(
    initialDifficulty,
  );
  const [phase, setPhase] = useState<"speak" | "reveal">("speak");
  const [current, setCurrent] = useState<Question>(() => {
    const pool = filterPool(questions, initialDifficulty);
    return pickRandom(pool.length ? pool : questions);
  });

  const pool = useMemo(
    () => filterPool(questions, difficulty),
    [questions, difficulty],
  );

  const meta = useMemo(
    () =>
      `${current.role} · ${current.department} · ${current.difficulty}`,
    [current],
  );

  const goReveal = useCallback(() => setPhase("reveal"), []);

  const nextQuestion = useCallback(() => {
    if (phase === "reveal") bumpMockSessionsCompleted();
    const source = pool.length ? pool : questions;
    setCurrent(pickRandom(source, current.id));
    setPhase("speak");
  }, [phase, pool, questions, current.id]);

  const elite = current.eliteAnswer?.trim();
  const hasElite = Boolean(elite);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 rounded-2xl border border-slate-800/90 bg-slate-950/50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            Filter
          </p>
          <p className="mt-1 text-sm text-slate-400">
            Narrow pressure to the level you are rehearsing.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {difficulties.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => {
                setDifficulty(d);
                setPhase("speak");
                const src =
                  d === "all" ? questions : questions.filter((q) => q.difficulty === d);
                setCurrent(pickRandom(src.length ? src : questions));
              }}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold capitalize transition ${
                difficulty === d
                  ? "border-amber-500/50 bg-amber-500/10 text-amber-50"
                  : "border-slate-700/80 text-slate-400 hover:border-slate-500 hover:text-slate-200"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-slate-800/90 bg-gradient-to-br from-slate-900/60 via-slate-950 to-slate-950 p-8 sm:p-10">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.06),transparent_50%)]"
          aria-hidden
        />

        <div className="relative">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                phase === "speak"
                  ? "border-amber-500/40 bg-amber-500/10 text-amber-200"
                  : "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
              }`}
            >
              {phase === "speak" ? "Step 1 · Your answer" : "Step 2 · Compare"}
            </span>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              {meta}
            </p>
          </div>

          <p className="mt-6 text-xl font-semibold leading-snug text-slate-50 sm:text-2xl">
            {current.prompt}
          </p>

          {current.tags?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {current.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-700/80 bg-slate-900/40 px-2 py-0.5 text-[11px] text-slate-400"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}

          {phase === "speak" ? (
            <div className="mt-10 rounded-2xl border border-slate-800/80 bg-slate-950/50 p-6">
              <p className="text-sm font-medium text-slate-200">
                Speak your answer out loud—full sentences, executive pace, no
                typing.
              </p>
              <p className="mt-2 text-sm text-slate-500">
                When you have finished your response, reveal the elite framing
                below and compare structure, judgment, and business language—not
                wording.
              </p>
              <button
                type="button"
                onClick={goReveal}
                className="mt-6 rounded-full bg-amber-500/90 px-6 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                I&apos;ve spoken my answer — reveal elite response
              </button>
            </div>
          ) : (
            <div className="mt-10 space-y-6">
              {hasElite ? (
                <div className="rounded-2xl border border-amber-500/25 bg-amber-500/[0.07] px-6 py-6">
                  <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-400/95">
                    Elite reference answer
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-amber-50/95">
                    {elite}
                  </p>
                </div>
              ) : null}

              {current.hint ? (
                <details className="rounded-2xl border border-slate-800/80 bg-slate-950/40 px-5 py-4">
                  <summary className="cursor-pointer text-sm font-medium text-slate-300">
                    Framing hint (compact)
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {current.hint}
                  </p>
                </details>
              ) : null}

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setPhase("speak")}
                  className="rounded-full border border-slate-600 px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-amber-500/50 hover:text-white"
                >
                  Hide — practice again
                </button>
                <button
                  type="button"
                  onClick={nextQuestion}
                  className="rounded-full border border-amber-500/40 bg-slate-900/60 px-5 py-2 text-sm font-semibold text-amber-100 transition hover:bg-slate-900"
                >
                  Next question
                </button>
              </div>
              <p className="text-xs text-slate-600">
                Completing a reveal → next cycle increments{" "}
                <strong className="text-slate-500">Mock interviews done</strong>{" "}
                on the Command Centre (this device).
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="rounded-2xl border border-violet-500/15 bg-violet-950/[0.2] px-5 py-4 text-sm leading-relaxed text-slate-400 sm:px-6">
        <strong className="text-violet-100/95">After a real interview</strong> — log
        what was asked, what broke, and what you refuse to forget next time →{" "}
        <Link
          href="/interview-reflection"
          className="font-medium text-amber-400/90 hover:text-amber-200"
        >
          Post-interview reflection
        </Link>
        . Same personal layer as knowledge chapters: local only until you add cloud
        backup.
      </div>
    </div>
  );
}
