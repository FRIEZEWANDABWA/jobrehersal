"use client";

import { HubChapterNav } from "@/components/HubChapterNav";
import { leadershipPages } from "@/lib/leadershipPages";

export function LeadershipNav() {
  return (
    <HubChapterNav
      ariaLabel="Leadership book navigation"
      hubBasePath="/knowledge/leadership"
      hubDisplayName="Leadership"
      pages={leadershipPages.map((p) => ({
        slug: p.slug,
        shortLabel: p.shortLabel,
      }))}
    />
  );
}
