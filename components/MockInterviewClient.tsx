"use client";

import { useMemo, useState } from "react";
import type { Question } from "@/lib/types";

function pickRandom(list: Question[], excludeId?: string) {
  const pool = excludeId ? list.filter((q) => q.id !== excludeId) : list;
  if (pool.length === 0) return list[Math.floor(Math.random() * list.length)];
  return pool[Math.floor(Math.random() * pool.length)];
}

export function MockInterviewClient({ questions }: { questions: Question[] }) {
  const [current, setCurrent] = useState(() => pickRandom(questions));
  const [revealed, setRevealed] = useState(false);

  const meta = useMemo(
    () =>
      `${current.role} · ${current.department} · ${current.difficulty}`,
    [current],
  );

  function next() {
    setCurrent(pickRandom(questions, current.id));
    setRevealed(false);
  }

  return (
    <div className="mt-10 max-w-3xl rounded-2xl border border-slate-800/90 bg-slate-900/50 p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {meta}
      </p>
      <p className="mt-4 text-lg font-medium leading-relaxed text-slate-100 sm:text-xl">
        {current.prompt}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setRevealed((r) => !r)}
          className="rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-white"
        >
          {revealed ? "Hide framing hint" : "Show framing hint"}
        </button>
        <button
          type="button"
          onClick={next}
          className="rounded-full border border-slate-600 px-5 py-2 text-sm font-semibold text-slate-100 transition hover:border-amber-500/60 hover:text-white"
        >
          Next question
        </button>
      </div>
      {revealed && current.hint ? (
        <p className="mt-6 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-sm leading-relaxed text-amber-50/90">
          <span className="font-semibold text-amber-200">Hint: </span>
          {current.hint}
        </p>
      ) : null}
    </div>
  );
}
