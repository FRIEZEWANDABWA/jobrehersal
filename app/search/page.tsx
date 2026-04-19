import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { PageIntro } from "@/components/PageIntro";
import { SearchClient } from "@/components/SearchClient";
import { getSearchRecords } from "@/lib/searchRecords";

export const metadata: Metadata = {
  title: "Search",
  description:
    "Search across knowledge hubs, chapters, interview questions, STAR vault, and company mode.",
};

export default function SearchPage() {
  const records = getSearchRecords();

  return (
    <div className="space-y-10 sm:space-y-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageIntro
          eyebrow="Executive OS"
          title="Search"
          description="One field for the whole static library—hubs, deep chapters, bank prompts, stories, and employers. No server round-trips per keystroke; everything is indexed at build time."
        />
        <Link
          href="/"
          className="shrink-0 text-sm font-medium text-amber-400/90 hover:text-amber-200"
        >
          ← Command Centre
        </Link>
      </div>

      <Suspense
        fallback={
          <p className="text-sm text-slate-500">Loading search…</p>
        }
      >
        <SearchClient records={records} />
      </Suspense>
    </div>
  );
}
