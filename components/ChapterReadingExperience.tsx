"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { PersonalRefinementLayer } from "@/components/PersonalRefinementLayer";
import { ReadRefinePracticeRail } from "@/components/ReadRefinePracticeRail";
import type { SimpleDocHeading } from "@/lib/simpleDoc";

type ChapterReadingExperienceProps = {
  hub: string;
  slug: string;
  practiceHref?: string;
  readAnchor?: string;
  refineAnchor?: string;
  eyebrow: string;
  title: string;
  description: string;
  backHref: string;
  backLabel: string;
  documentBody: React.ReactNode;
  tocHeadings: SimpleDocHeading[];
};

function DocOutline({ headings }: { headings: SimpleDocHeading[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const ids = useMemo(
    () => headings.filter((h) => h.level === 2).map((h) => h.id),
    [headings],
  );

  useEffect(() => {
    if (ids.length === 0) return;
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (els.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-42% 0px -45% 0px", threshold: [0, 0.08, 0.2, 0.4] },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids]);

  if (!headings.length) return null;

  return (
    <nav
      aria-label="On this page"
      className="rounded-2xl border border-slate-800/80 bg-slate-950/50 p-4"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
        On this page
      </p>
      <ul className="mt-3 max-h-[40vh] space-y-1.5 overflow-y-auto overscroll-y-contain pr-1 xl:max-h-[min(32rem,55vh)]">
        {headings.map((h) => {
          const active = h.level === 2 && activeId === h.id;
          return (
            <li
              key={`${h.level}-${h.id}`}
              className={h.level === 3 ? "pl-3" : undefined}
            >
              <a
                href={`#${h.id}`}
                className={`block border-l-2 py-0.5 pl-3 text-left text-xs leading-snug transition hover:text-amber-100/95 ${
                  h.level === 3
                    ? "border-transparent text-slate-500 hover:border-slate-600"
                    : active
                      ? "border-amber-500/80 font-semibold text-amber-100"
                      : "border-transparent font-medium text-slate-300 hover:border-slate-600"
                }`}
              >
                {h.text.replace(/\*\*/g, "")}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function ChapterReadingExperience({
  hub,
  slug,
  practiceHref,
  readAnchor = "ecc-read",
  refineAnchor = "ecc-refine",
  eyebrow,
  title,
  description,
  backHref,
  backLabel,
  documentBody,
  tocHeadings,
}: ChapterReadingExperienceProps) {
  const storageKey = `knowledge:${hub}:${slug}`;
  const [focusMode, setFocusMode] = useState(false);
  const toggleFocus = useCallback(() => {
    setFocusMode((v) => !v);
  }, []);

  return (
    <div className="space-y-0">
      <header className="relative z-10 -mx-4 mb-8 border-b border-slate-800/80 bg-slate-950/92 px-4 py-4 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0 flex-1 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-500/85">
                {eyebrow}
              </p>
              <Link
                href={backHref}
                className="shrink-0 text-xs font-medium text-amber-400/90 hover:text-amber-200 sm:text-sm"
              >
                {backLabel}
              </Link>
            </div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              {title}
            </h1>
            {description ? (
              <p className="max-w-2xl text-sm leading-relaxed text-slate-400">
                {description}
              </p>
            ) : null}
          </div>
          <div className="flex shrink-0 flex-col gap-2 lg:items-end">
            <ReadRefinePracticeRail
              practiceHref={practiceHref}
              readAnchor={readAnchor}
              refineAnchor={refineAnchor}
            />
            <button
              type="button"
              onClick={toggleFocus}
              className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide transition lg:self-end ${
                focusMode
                  ? "border-amber-500/50 bg-amber-500/15 text-amber-100"
                  : "border-slate-700/90 bg-slate-900/60 text-slate-400 hover:border-slate-500 hover:text-slate-200"
              }`}
            >
              {focusMode ? "Exit focus" : "Focus mode"}
            </button>
          </div>
        </div>
      </header>

      <div
        className={
          focusMode
            ? "mx-auto max-w-[46rem] space-y-10"
            : "grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,1fr)_17.5rem] xl:items-start xl:gap-12"
        }
      >
        <div id={readAnchor} className="min-w-0 scroll-mt-28 space-y-8">
          <div className="mx-auto w-full max-w-[42rem] xl:mx-0">{documentBody}</div>
        </div>

        <div
          className={
            focusMode
              ? "mx-auto w-full max-w-[46rem] space-y-8 border-t border-slate-800/70 pt-10"
              : "min-w-0 space-y-8"
          }
        >
          {!focusMode ? <DocOutline headings={tocHeadings} /> : null}
          <div className="xl:[&_section]:rounded-2xl xl:[&_section]:p-5 xl:[&_h2]:text-lg xl:[&_textarea]:text-[13px]">
            <PersonalRefinementLayer
              variant="knowledge"
              storageKey={storageKey}
              refineAnchorId={refineAnchor}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
