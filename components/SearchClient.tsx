"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useDeferredValue, useMemo, useState, useTransition } from "react";
import type { SearchRecord } from "@/lib/searchRecords";

function normalize(s: string) {
  return s.trim().toLowerCase();
}

function matches(record: SearchRecord, q: string) {
  if (!q) return true;
  const hay = normalize(
    `${record.title} ${record.snippet} ${record.category} ${record.href}`,
  );
  const words = normalize(q).split(/\s+/).filter(Boolean);
  return words.every((w) => hay.includes(w));
}

export function SearchClient({ records }: { records: SearchRecord[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initial = searchParams.get("q") ?? "";
  const [raw, setRaw] = useState(initial);
  const deferred = useDeferredValue(raw);
  const [, startTransition] = useTransition();

  const results = useMemo(
    () => records.filter((r) => matches(r, deferred)),
    [records, deferred],
  );

  function pushQuery(next: string) {
    const q = next.trim();
    const url = q ? `/search?q=${encodeURIComponent(q)}` : "/search";
    startTransition(() => {
      router.replace(url, { scroll: false });
    });
  }

  return (
    <div className="space-y-10 sm:space-y-12">
      <div>
        <label
          htmlFor="site-search"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
        >
          Search this OS
        </label>
        <input
          id="site-search"
          type="search"
          value={raw}
          onChange={(e) => {
            const v = e.target.value;
            setRaw(v);
            pushQuery(v);
          }}
          placeholder="Hubs, chapters, questions, STAR stories, companies…"
          autoComplete="off"
          spellCheck={false}
          className="mt-3 w-full rounded-2xl border border-slate-800/90 bg-slate-950/80 px-4 py-3 text-base text-slate-100 outline-none ring-amber-500/0 transition placeholder:text-slate-600 focus:border-amber-500/40 focus:ring-2 focus:ring-amber-500/20"
        />
        <p className="mt-2 text-sm text-slate-500">
          {deferred.trim()
            ? `${results.length} match${results.length === 1 ? "" : "es"}`
            : `${records.length} indexed entries — start typing`}
        </p>
      </div>

      {deferred.trim() ? (
        <ul className="space-y-3">
          {results.slice(0, 200).map((r, i) => (
            <li key={`${r.category}-${i}-${r.title.slice(0, 48)}`}>
              <Link
                href={r.href}
                className="block rounded-2xl border border-slate-800/90 bg-slate-900/35 px-4 py-4 transition hover:border-amber-500/35 hover:bg-slate-900/55 sm:px-5"
              >
                <p className="text-[10px] font-semibold uppercase tracking-wide text-amber-500/85">
                  {r.category}
                </p>
                <p className="mt-1 font-medium text-slate-50">{r.title}</p>
                {r.snippet ? (
                  <p className="mt-2 line-clamp-2 text-sm text-slate-500">{r.snippet}</p>
                ) : null}
                <p className="mt-2 truncate text-xs text-slate-600">{r.href}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="rounded-3xl border border-slate-800/90 bg-slate-950/40 p-6 text-sm text-slate-400 sm:p-8">
          <p>
            Try <strong className="text-slate-300">zero trust</strong>,{" "}
            <strong className="text-slate-300">Microsoft</strong>,{" "}
            <strong className="text-slate-300">Barclays</strong>,{" "}
            <strong className="text-slate-300">STAR</strong>, or{" "}
            <strong className="text-slate-300">board</strong>—results include knowledge
            chapters, nav targets, interview prompts, and company lenses.
          </p>
        </div>
      )}

      {deferred.trim() && results.length > 200 ? (
        <p className="text-center text-xs text-slate-500">
          Showing first 200 matches — refine your query.
        </p>
      ) : null}
    </div>
  );
}
