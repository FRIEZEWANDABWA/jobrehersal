import Link from "next/link";
import { mainNav } from "@/lib/navigation";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 bg-slate-950 text-slate-100">
      <aside className="hidden w-64 shrink-0 border-r border-slate-800/80 bg-slate-950/95 px-4 py-8 lg:block">
        <div className="px-2">
          <Link href="/" className="block">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400/90">
              Frieze
            </p>
            <p className="mt-1 text-lg font-semibold leading-snug text-slate-50">
              Command Centre
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">
              Executive IT interview operating system
            </p>
          </Link>
        </div>
        <nav className="mt-10 space-y-1" aria-label="Primary">
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
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="border-b border-slate-800/80 bg-slate-950/90 px-4 py-4 backdrop-blur lg:hidden">
          <div className="flex items-center justify-between gap-3">
            <Link href="/" className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-50">
                Frieze Command Centre
              </p>
              <p className="truncate text-xs text-slate-500">
                Executive IT interview OS
              </p>
            </Link>
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

        <main className="flex-1 px-4 py-8 sm:px-8 lg:px-12">{children}</main>

        <footer className="border-t border-slate-800/80 px-4 py-6 text-center text-xs text-slate-500 sm:px-8 lg:px-12">
          Version 0 — static excellence. No database, no AI, no login. Evolve when
          you choose.
        </footer>
      </div>
    </div>
  );
}
