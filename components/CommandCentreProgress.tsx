"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE = {
  chapters: "ecc-chapters-completed",
  mocks: "ecc-mock-interviews-done",
  stories: "ecc-core-stories-ready",
  companies: "ecc-companies-prepared",
} as const;

function readCount(key: string): number {
  if (typeof window === "undefined") return 0;
  const v = window.localStorage.getItem(key);
  const n = v ? parseInt(v, 10) : 0;
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

function writeCount(key: string, n: number) {
  window.localStorage.setItem(key, String(Math.max(0, n)));
}

export function CommandCentreProgress() {
  const [chapters, setChapters] = useState(0);
  const [mocks, setMocks] = useState(0);
  const [stories, setStories] = useState(0);
  const [companies, setCompanies] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setChapters(readCount(STORAGE.chapters));
      setMocks(readCount(STORAGE.mocks));
      setStories(readCount(STORAGE.stories));
      setCompanies(readCount(STORAGE.companies));
      setMounted(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  const bump = useCallback(
    (key: keyof typeof STORAGE, current: number, set: (n: number) => void) => {
      const next = current + 1;
      writeCount(STORAGE[key], next);
      set(next);
    },
    [],
  );

  const rows: {
    key: keyof typeof STORAGE;
    label: string;
    value: number;
    set: (n: number) => void;
  }[] = [
    { key: "chapters", label: "Chapters completed", value: chapters, set: setChapters },
    { key: "mocks", label: "Mock interviews done", value: mocks, set: setMocks },
    { key: "stories", label: "Core stories ready", value: stories, set: setStories },
    {
      key: "companies",
      label: "Companies prepared for",
      value: companies,
      set: setCompanies,
    },
  ];

  return (
    <section className="rounded-3xl border border-slate-800/90 bg-slate-950/50 p-8 sm:p-10">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Performance metrics
          </h2>
          <p className="mt-1 max-w-xl text-sm text-slate-400">
            Stored on this device only—no account. Tap +1 after a session to keep
            momentum visible.
          </p>
        </div>
        {!mounted ? (
          <span className="text-xs text-slate-600">Loading…</span>
        ) : (
          <span className="text-xs text-slate-500">Local · private</span>
        )}
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {rows.map((row) => (
          <div
            key={row.key}
            className="flex flex-col rounded-2xl border border-slate-800/80 bg-slate-900/35 px-5 py-5"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              {row.label}
            </p>
            <p className="mt-2 text-3xl font-semibold tabular-nums text-slate-50">
              {mounted ? row.value : "—"}
            </p>
            <button
              type="button"
              disabled={!mounted}
              onClick={() => bump(row.key, row.value, row.set)}
              className="mt-4 w-fit rounded-full border border-slate-700/90 px-3 py-1 text-xs font-semibold text-slate-300 transition hover:border-amber-500/40 hover:text-amber-100 disabled:opacity-40"
            >
              +1 session
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
