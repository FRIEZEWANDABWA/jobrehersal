"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  emptyDocumentState,
  loadPersonalDocument,
  savePersonalDocument,
  UPGRADE_FLAG_PRESETS,
  type PersonalDocumentState,
} from "@/lib/personalRefinementStorage";

const PRESET_SET = new Set<string>(UPGRADE_FLAG_PRESETS);

type Variant = "knowledge" | "star";

type PersonalRefinementLayerProps = {
  variant: Variant;
  storageKey: string;
  refineAnchorId?: string;
};

export function PersonalRefinementLayer({
  variant,
  storageKey,
  refineAnchorId = "ecc-refine",
}: PersonalRefinementLayerProps) {
  const [doc, setDoc] = useState<PersonalDocumentState>(emptyDocumentState);
  const [hydrated, setHydrated] = useState(false);
  const [customFlag, setCustomFlag] = useState("");
  const skipNextPersist = useRef(true);
  const idSafe = useMemo(
    () => storageKey.replace(/[^a-zA-Z0-9_-]/g, "_"),
    [storageKey],
  );

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      skipNextPersist.current = true;
      setDoc(loadPersonalDocument(storageKey));
      setHydrated(true);
    });
    return () => cancelAnimationFrame(id);
  }, [storageKey]);

  useEffect(() => {
    if (!hydrated) return;
    if (skipNextPersist.current) {
      skipNextPersist.current = false;
      return;
    }
    const t = setTimeout(() => {
      savePersonalDocument(storageKey, doc);
    }, 450);
    return () => clearTimeout(t);
  }, [doc, hydrated, storageKey]);

  const patch = useCallback((partial: Partial<PersonalDocumentState>) => {
    setDoc((prev) => ({ ...prev, ...partial }));
  }, []);

  const toggleFlag = useCallback((label: string) => {
    setDoc((prev) => {
      const has = prev.upgradeFlags.includes(label);
      const upgradeFlags = has
        ? prev.upgradeFlags.filter((f) => f !== label)
        : [...prev.upgradeFlags, label];
      return { ...prev, upgradeFlags };
    });
  }, []);

  const addCustomFlag = useCallback(() => {
    const t = customFlag.trim();
    if (!t) return;
    setCustomFlag("");
    setDoc((prev) => {
      if (prev.upgradeFlags.includes(t)) return prev;
      return { ...prev, upgradeFlags: [...prev.upgradeFlags, t] };
    });
  }, [customFlag]);

  const wordingTitle =
    variant === "star" ? "My executive version" : "My improved wording";
  const wordingHint =
    variant === "star"
      ? "Rewrite in your voice—what you will actually say in the room. The master STAR blocks above stay as reference."
      : "Replace generic phrasing with lines that sound like you. Stored only on this device until you move to cloud backup (later).";

  const customSavedFlags = doc.upgradeFlags.filter((f) => !PRESET_SET.has(f));

  return (
    <section
      id={refineAnchorId}
      className="scroll-mt-24 rounded-3xl border border-violet-500/15 bg-gradient-to-br from-violet-950/[0.35] via-slate-950/90 to-slate-950 p-6 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset] sm:p-8"
    >
      <header className="border-b border-violet-500/10 pb-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-300/90">
          Personal Layer
        </p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Confidential Executive Notes
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
          Capture judgment while it is fresh—personal proof, sharper closings,
          interview feedback, and flags for upgrades. Saved automatically in your
          browser (no account). Private to this device.
        </p>
        {!hydrated ? (
          <p className="mt-3 text-xs text-slate-600">Loading your saved layer…</p>
        ) : doc.updatedAt ? (
          <p className="mt-3 text-xs text-slate-600">
            Last saved locally{" "}
            <time dateTime={doc.updatedAt}>
              {new Date(doc.updatedAt).toLocaleString()}
            </time>
          </p>
        ) : null}
      </header>

      <div className="mt-6 space-y-6">
        <div>
          <label
            htmlFor={`ecc-notes-${idSafe}`}
            className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500"
          >
            Executive notes
          </label>
          <p className="mt-1 text-xs text-slate-600">
            Personal experience · better wording · stronger example · interview
            feedback · what to remember next time
          </p>
          <textarea
            id={`ecc-notes-${idSafe}`}
            value={doc.notes}
            onChange={(e) => patch({ notes: e.target.value })}
            rows={5}
            className="mt-3 w-full resize-y rounded-2xl border border-slate-800/90 bg-slate-950/70 px-4 py-3 text-sm leading-relaxed text-slate-100 outline-none ring-violet-500/0 transition placeholder:text-slate-600 focus:border-violet-500/35 focus:ring-2 focus:ring-violet-500/15"
            placeholder="Add your own points here—nothing leaves this layer until you choose."
          />
        </div>

        <div>
          <label
            htmlFor={`ecc-wording-${idSafe}`}
            className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500"
          >
            {wordingTitle}
          </label>
          <p className="mt-1 text-xs text-slate-600">{wordingHint}</p>
          <textarea
            id={`ecc-wording-${idSafe}`}
            value={doc.improvedWording}
            onChange={(e) => patch({ improvedWording: e.target.value })}
            rows={6}
            className="mt-3 w-full resize-y rounded-2xl border border-slate-800/90 bg-slate-950/70 px-4 py-3 text-sm leading-relaxed text-slate-100 outline-none ring-violet-500/0 transition placeholder:text-slate-600 focus:border-violet-500/35 focus:ring-2 focus:ring-violet-500/15"
            placeholder="Your lines—how you actually say it under pressure."
          />
        </div>

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            Upgrade this answer
          </p>
          <p className="mt-1 text-xs text-slate-600">
            Highlight weak spots now; rehearse the fix in Practice.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {UPGRADE_FLAG_PRESETS.map((preset) => {
              const on = doc.upgradeFlags.includes(preset);
              return (
                <button
                  key={preset}
                  type="button"
                  onClick={() => toggleFlag(preset)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                    on
                      ? "border-amber-500/50 bg-amber-500/15 text-amber-100"
                      : "border-slate-700/90 bg-slate-900/50 text-slate-400 hover:border-slate-600 hover:text-slate-200"
                  }`}
                >
                  {on ? "✓ " : ""}
                  {preset}
                </button>
              );
            })}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <input
              type="text"
              value={customFlag}
              onChange={(e) => setCustomFlag(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addCustomFlag();
                }
              }}
              placeholder="Custom flag — e.g. “Tighter 30-second opener”"
              className="min-w-[200px] flex-1 rounded-xl border border-slate-800/90 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none focus:border-violet-500/35"
            />
            <button
              type="button"
              onClick={addCustomFlag}
              className="rounded-xl border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-100 transition hover:bg-violet-500/20"
            >
              Add flag
            </button>
          </div>
          {customSavedFlags.length ? (
            <ul className="mt-3 flex flex-wrap gap-2">
              {customSavedFlags.map((f) => (
                <li key={f}>
                  <button
                    type="button"
                    onClick={() => toggleFlag(f)}
                    className="rounded-full border border-slate-700/80 bg-slate-900/40 px-2.5 py-1 text-xs text-amber-200/90 hover:border-amber-500/40"
                  >
                    × {f}
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}
