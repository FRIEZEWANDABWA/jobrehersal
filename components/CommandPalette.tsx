"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { knowledgeSections, mainNav } from "@/lib/navigation";

type Item = { href: string; label: string; group: string };

type CommandPaletteProps = {
  open: boolean;
  onClose: () => void;
  /** Increment when opening so search state resets between sessions. */
  instanceKey: number;
};

function CommandPalettePanel({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const items: Item[] = useMemo(
    () => [
      ...mainNav.map((n) => ({ href: n.href, label: n.label, group: "Main" })),
      ...knowledgeSections.map((s) => ({
        href: `/knowledge/${s.id}`,
        label: s.label,
        group: "Knowledge",
      })),
    ],
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (i) =>
        i.label.toLowerCase().includes(q) || i.href.toLowerCase().includes(q),
    );
  }, [items, query]);

  useLayoutEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-[min(20vh,8rem)] sm:pt-24">
      <button
        type="button"
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        aria-label="Close"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Jump to page"
        className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-slate-700/90 bg-slate-900/95 shadow-2xl shadow-black/50"
      >
        <div className="border-b border-slate-800/90 px-4 py-3">
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages…"
            className="w-full border-0 bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
          />
        </div>
        <ul className="max-h-[min(60vh,24rem)] overflow-y-auto py-2 text-sm">
          {filtered.length === 0 ? (
            <li className="px-4 py-6 text-center text-slate-500">No matches.</li>
          ) : (
            filtered.map((item) => (
              <li key={`${item.group}-${item.href}`}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between gap-3 px-4 py-2.5 text-slate-200 hover:bg-slate-800/80 hover:text-white"
                >
                  <span>{item.label}</span>
                  <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                    {item.group}
                  </span>
                </Link>
              </li>
            ))
          )}
        </ul>
        <p className="border-t border-slate-800/90 px-4 py-2 text-[10px] text-slate-500">
          Esc to close · choose a destination
        </p>
      </div>
    </div>
  );
}

export function CommandPalette({
  open,
  onClose,
  instanceKey,
}: CommandPaletteProps) {
  if (!open) return null;
  return <CommandPalettePanel key={instanceKey} onClose={onClose} />;
}
