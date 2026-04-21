"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export type HubChapterNavPage = { slug: string; shortLabel: string };

type HubChapterNavProps = {
  ariaLabel: string;
  hubBasePath: string;
  hubDisplayName: string;
  pages: HubChapterNavPage[];
  /** Breadcrumb + pills stack vertically (e.g. many mock panel links). */
  stacked?: boolean;
};

function linkClass(active: boolean) {
  return active
    ? "border-amber-500/60 bg-amber-500/10 text-amber-50"
    : "border-slate-700/80 bg-slate-900/30 text-slate-300 hover:border-slate-500 hover:text-white";
}

export function HubChapterNav({
  ariaLabel,
  hubBasePath,
  hubDisplayName,
  pages,
  stacked = false,
}: HubChapterNavProps) {
  const pathname = usePathname();
  const router = useRouter();
  const onOverview = pathname === hubBasePath;
  const onChapter = pathname.startsWith(`${hubBasePath}/`);

  if (onChapter) {
    return (
      <nav
        className="rounded-2xl border border-slate-800/90 bg-slate-900/35 px-3 py-3 sm:px-4"
        aria-label={ariaLabel}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 flex-wrap items-center gap-2 text-xs text-slate-500">
            <Link
              href="/knowledge"
              className="font-medium text-amber-400/90 hover:text-amber-200"
            >
              Knowledge Hub
            </Link>
            <span aria-hidden>→</span>
            <Link
              href={hubBasePath}
              className="truncate font-medium text-slate-400 transition hover:text-slate-200"
            >
              {hubDisplayName}
            </Link>
          </div>
          <div className="flex min-w-0 items-center gap-2 sm:max-w-[min(100%,28rem)] sm:shrink-0">
            <label htmlFor="hub-chapter-jump" className="sr-only">
              Jump to chapter
            </label>
            <select
              id="hub-chapter-jump"
              value={pathname}
              onChange={(e) => router.push(e.target.value)}
              className="w-full min-w-0 rounded-xl border border-slate-700/90 bg-slate-950/80 px-3 py-2 text-xs font-medium text-slate-100 outline-none ring-amber-500/0 transition focus:border-amber-500/40 focus:ring-2 focus:ring-amber-500/20"
            >
              <option value={hubBasePath}>Overview</option>
              {pages.map((p) => (
                <option
                  key={p.slug}
                  value={`${hubBasePath}/${p.slug}`}
                >
                  {p.shortLabel}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>
    );
  }

  const crumbRow = (
    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
      <Link
        href="/knowledge"
        className="font-medium text-amber-400/90 hover:text-amber-200"
      >
        Knowledge Hub
      </Link>
      <span aria-hidden>→</span>
      <span className="text-slate-400">{hubDisplayName}</span>
    </div>
  );

  const pills = (
    <div className="flex flex-wrap gap-2">
      <Link
        href={hubBasePath}
        className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${linkClass(onOverview)}`}
      >
        Overview
      </Link>
      {pages.map((p) => {
        const href = `${hubBasePath}/${p.slug}`;
        const active = pathname === href;
        return (
          <Link
            key={p.slug}
            href={href}
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${linkClass(active)}`}
          >
            {p.shortLabel}
          </Link>
        );
      })}
    </div>
  );

  return (
    <nav
      className="rounded-2xl border border-slate-800/90 bg-slate-900/35 p-4"
      aria-label={ariaLabel}
    >
      {stacked ? (
        <div className="flex flex-col gap-3">
          {crumbRow}
          {pills}
        </div>
      ) : (
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          {crumbRow}
          {pills}
        </div>
      )}
    </nav>
  );
}
