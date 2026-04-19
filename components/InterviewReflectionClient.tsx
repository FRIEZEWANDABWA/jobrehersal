"use client";

import { useCallback, useEffect, useState } from "react";
import {
  appendInterviewReflection,
  loadInterviewReflections,
  saveInterviewReflections,
  type InterviewReflectionEntry,
} from "@/lib/personalRefinementStorage";

export function InterviewReflectionClient() {
  const [entries, setEntries] = useState<InterviewReflectionEntry[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [companyOrPanel, setCompanyOrPanel] = useState("");
  const [asked, setAsked] = useState("");
  const [surprised, setSurprised] = useState("");
  const [weak, setWeak] = useState("");
  const [improve, setImprove] = useState("");
  const [remember, setRemember] = useState("");

  const refresh = useCallback(() => {
    setEntries(loadInterviewReflections());
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      refresh();
      setHydrated(true);
    });
    return () => cancelAnimationFrame(id);
  }, [refresh]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!asked.trim() && !weak.trim()) return;
    appendInterviewReflection({
      companyOrPanel: companyOrPanel.trim(),
      asked: asked.trim(),
      surprised: surprised.trim(),
      weak: weak.trim(),
      improve: improve.trim(),
      remember: remember.trim(),
    });
    setCompanyOrPanel("");
    setAsked("");
    setSurprised("");
    setWeak("");
    setImprove("");
    setRemember("");
    refresh();
  }

  function remove(id: string) {
    const next = loadInterviewReflections().filter((x) => x.id !== id);
    saveInterviewReflections(next);
    refresh();
  }

  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-violet-500/15 bg-gradient-to-br from-violet-950/[0.3] via-slate-950/90 to-slate-950 p-6 sm:p-8">
        <header className="border-b border-violet-500/10 pb-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-300/90">
            Personal Layer
          </p>
          <h2 className="mt-2 text-xl font-semibold text-slate-50 sm:text-2xl">
            Post-interview reflection
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            What was asked, what surprised you, where the answer was weak, what must
            improve, and what you refuse to forget next time. Saved on this device
            only—same philosophy as chapter notes.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div>
            <label
              htmlFor="refl-company"
              className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500"
            >
              Company or panel (optional)
            </label>
            <input
              id="refl-company"
              value={companyOrPanel}
              onChange={(e) => setCompanyOrPanel(e.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-800/90 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none focus:border-violet-500/35"
              placeholder="e.g. Barclays · CISO panel"
            />
          </div>
          <div>
            <label
              htmlFor="refl-asked"
              className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500"
            >
              What was asked?
            </label>
            <textarea
              id="refl-asked"
              value={asked}
              onChange={(e) => setAsked(e.target.value)}
              rows={3}
              className="mt-2 w-full rounded-xl border border-slate-800/90 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none focus:border-violet-500/35"
              placeholder="Themes, follow-ups, pressure style…"
            />
          </div>
          <div>
            <label
              htmlFor="refl-surprised"
              className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500"
            >
              What surprised me?
            </label>
            <textarea
              id="refl-surprised"
              value={surprised}
              onChange={(e) => setSurprised(e.target.value)}
              rows={2}
              className="mt-2 w-full rounded-xl border border-slate-800/90 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none focus:border-violet-500/35"
            />
          </div>
          <div>
            <label
              htmlFor="refl-weak"
              className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500"
            >
              What answer was weak?
            </label>
            <textarea
              id="refl-weak"
              value={weak}
              onChange={(e) => setWeak(e.target.value)}
              rows={3}
              className="mt-2 w-full rounded-xl border border-slate-800/90 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none focus:border-violet-500/35"
            />
          </div>
          <div>
            <label
              htmlFor="refl-improve"
              className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500"
            >
              What must improve?
            </label>
            <textarea
              id="refl-improve"
              value={improve}
              onChange={(e) => setImprove(e.target.value)}
              rows={2}
              className="mt-2 w-full rounded-xl border border-slate-800/90 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none focus:border-violet-500/35"
            />
          </div>
          <div>
            <label
              htmlFor="refl-remember"
              className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500"
            >
              What should I remember next time?
            </label>
            <textarea
              id="refl-remember"
              value={remember}
              onChange={(e) => setRemember(e.target.value)}
              rows={2}
              className="mt-2 w-full rounded-xl border border-slate-800/90 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none focus:border-violet-500/35"
            />
          </div>
          <button
            type="submit"
            className="rounded-xl border border-violet-500/35 bg-violet-500/15 px-5 py-2.5 text-sm font-semibold text-violet-50 transition hover:bg-violet-500/25"
          >
            Save reflection
          </button>
          <p className="text-xs text-slate-600">
            {hydrated
              ? `${entries.length} saved entr${entries.length === 1 ? "y" : "ies"} on this device.`
              : "Loading…"}
          </p>
        </form>
      </section>

      {entries.length ? (
        <section>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            History
          </h3>
          <ul className="mt-6 space-y-4">
            {entries.map((entry) => (
              <li
                key={entry.id}
                className="rounded-2xl border border-slate-800/90 bg-slate-900/35 p-5 sm:p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <p className="text-xs text-slate-500">
                    <time dateTime={entry.createdAt}>
                      {new Date(entry.createdAt).toLocaleString()}
                    </time>
                    {entry.companyOrPanel ? (
                      <span className="text-slate-400"> · {entry.companyOrPanel}</span>
                    ) : null}
                  </p>
                  <button
                    type="button"
                    onClick={() => remove(entry.id)}
                    className="text-xs font-medium text-slate-500 hover:text-amber-300/90"
                  >
                    Remove
                  </button>
                </div>
                {entry.asked ? (
                  <p className="mt-3 text-sm text-slate-200">
                    <span className="font-semibold text-slate-400">Asked: </span>
                    {entry.asked}
                  </p>
                ) : null}
                {entry.surprised ? (
                  <p className="mt-2 text-sm text-slate-300">
                    <span className="font-semibold text-slate-500">Surprised: </span>
                    {entry.surprised}
                  </p>
                ) : null}
                {entry.weak ? (
                  <p className="mt-2 text-sm text-amber-100/90">
                    <span className="font-semibold text-amber-500/80">Weak: </span>
                    {entry.weak}
                  </p>
                ) : null}
                {entry.improve ? (
                  <p className="mt-2 text-sm text-slate-300">
                    <span className="font-semibold text-slate-500">Improve: </span>
                    {entry.improve}
                  </p>
                ) : null}
                {entry.remember ? (
                  <p className="mt-2 text-sm text-violet-100/90">
                    <span className="font-semibold text-violet-400/80">Remember: </span>
                    {entry.remember}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
