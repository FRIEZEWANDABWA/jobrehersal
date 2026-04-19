import Link from "next/link";

type ReadRefinePracticeRailProps = {
  practiceHref?: string;
  readAnchor?: string;
  refineAnchor?: string;
};

/** Lightweight loop: Read → Refine (on-page) → Practice (mock / STAR). */
export function ReadRefinePracticeRail({
  practiceHref = "/mock-interview",
  readAnchor = "ecc-read",
  refineAnchor = "ecc-refine",
}: ReadRefinePracticeRailProps) {
  return (
    <nav
      aria-label="Read, Refine, Practice"
      className="flex flex-wrap items-center gap-2 rounded-2xl border border-slate-800/80 bg-slate-950/50 px-4 py-3 text-sm"
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
        Loop
      </span>
      <a
        href={`#${readAnchor}`}
        className="rounded-full border border-slate-700/90 bg-slate-900/60 px-3 py-1.5 font-medium text-slate-200 transition hover:border-amber-500/40 hover:text-amber-50"
      >
        Read
      </a>
      <span className="text-slate-600" aria-hidden>
        →
      </span>
      <a
        href={`#${refineAnchor}`}
        className="rounded-full border border-amber-500/25 bg-amber-500/[0.08] px-3 py-1.5 font-medium text-amber-100/95 transition hover:border-amber-400/50"
      >
        Refine
      </a>
      <span className="text-slate-600" aria-hidden>
        →
      </span>
      <Link
        href={practiceHref}
        className="rounded-full border border-slate-700/90 bg-slate-900/60 px-3 py-1.5 font-medium text-slate-200 transition hover:border-amber-500/40 hover:text-amber-50"
      >
        Practice
      </Link>
      <Link
        href="/interview-reflection"
        className="ml-auto text-xs font-medium text-slate-500 underline-offset-4 hover:text-amber-200/90 hover:underline"
      >
        Post-interview reflection
      </Link>
    </nav>
  );
}
