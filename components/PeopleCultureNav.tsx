"use client";

import { HubChapterNav } from "@/components/HubChapterNav";
import { peopleCulturePages } from "@/lib/peopleCulturePages";

export function PeopleCultureNav() {
  return (
    <HubChapterNav
      ariaLabel="People & culture book navigation"
      hubBasePath="/knowledge/people-culture"
      hubDisplayName="People & culture"
      pages={peopleCulturePages.map((p) => ({
        slug: p.slug,
        shortLabel: p.shortLabel,
      }))}
    />
  );
}
