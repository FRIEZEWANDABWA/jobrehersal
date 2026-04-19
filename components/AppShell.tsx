"use client";

import Link from "next/link";
import { useCallback, useEffect, useReducer } from "react";
import { CommandPalette } from "@/components/CommandPalette";
import { mainNav } from "@/lib/navigation";

type PaletteState = { open: boolean; instanceKey: number };

function paletteReducer(
  state: PaletteState,
  action: { type: "open" | "close" | "toggle" },
): PaletteState {
  switch (action.type) {
    case "open":
      return { open: true, instanceKey: state.instanceKey + 1 };
    case "close":
      return { ...state, open: false };
    case "toggle":
      if (state.open) return { ...state, open: false };
      return { open: true, instanceKey: state.instanceKey + 1 };
    default:
      return state;
  }
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const [palette, dispatchPalette] = useReducer(paletteReducer, {
    open: false,
    instanceKey: 0,
  });

  const openPalette = useCallback(() => {
    dispatchPalette({ type: "open" });
  }, []);

  const togglePalette = useCallback(() => {
    dispatchPalette({ type: "toggle" });
  }, []);

  const closePalette = useCallback(() => {
    dispatchPalette({ type: "close" });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        togglePalette();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [togglePalette]);

  return (
    <>
      <CommandPalette
        open={palette.open}
        onClose={closePalette}
        instanceKey={palette.instanceKey}
      />
      <div className="flex h-dvh max-h-dvh min-h-0 w-full flex-1 overflow-hidden bg-slate-950 text-slate-100">
        <aside className="hidden h-full min-h-0 w-64 shrink-0 flex-col overflow-y-auto overscroll-y-contain border-r border-slate-800/80 bg-slate-950/95 px-4 py-8 lg:flex">
          <div className="px-2">
            <Link href="/" className="block">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400/90">
                Executive OS
              </p>
              <p className="mt-1 text-lg font-semibold leading-snug text-slate-50">
                Command Centre
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                Frieze Wandabwa · IT leadership
              </p>
            </Link>
          </div>
          <nav className="mt-10 flex-1 space-y-1" aria-label="Primary">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800/80 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 space-y-3 border-t border-slate-800/80 pt-6">
            <button
              type="button"
              onClick={openPalette}
              className="w-full rounded-lg border border-slate-700/90 px-3 py-2 text-left text-xs font-semibold text-slate-300 transition hover:border-amber-500/45 hover:text-white"
            >
              Quick jump <span className="text-slate-500">⌘K</span>
            </button>
          </div>
        </aside>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
          <header className="shrink-0 border-b border-slate-800/80 bg-slate-950/95 px-4 py-4 backdrop-blur lg:hidden">
            <div className="flex items-start justify-between gap-3">
              <Link href="/" className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-50">
                  Command Centre
                </p>
                <p className="truncate text-xs text-slate-500">
                  Executive IT leadership OS
                </p>
              </Link>
              <div className="flex shrink-0 flex-col items-end gap-2">
                <button
                  type="button"
                  onClick={openPalette}
                  className="rounded-lg border border-slate-700/90 px-2.5 py-1.5 text-[11px] font-semibold text-slate-300 hover:border-amber-500/45 hover:text-white"
                >
                  ⌘K
                </button>
              </div>
            </div>
            <nav
              className="mt-3 flex gap-2 overflow-x-auto pb-1 text-xs"
              aria-label="Primary mobile"
            >
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="shrink-0 rounded-full border border-slate-700/80 px-3 py-1 text-slate-200 hover:border-amber-500/50 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>

          <main className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-4 py-8 sm:px-8 lg:px-12">
            {children}
          </main>

          <footer className="shrink-0 border-t border-slate-800/80 bg-slate-950/95 px-4 py-4 text-center text-xs text-slate-500 sm:px-6 lg:px-12">
            Static-first content · use{" "}
            <span className="font-mono text-slate-400">⌘K</span> /{" "}
            <span className="font-mono text-slate-400">Ctrl+K</span> to jump anywhere
            fast.
          </footer>
        </div>
      </div>
    </>
  );
}
