"use client";

import { HubChapterNav } from "@/components/HubChapterNav";
import { executivePresencePages } from "@/lib/executivePresencePages";

export function ExecutivePresenceNav() {
  return (
    <HubChapterNav
      ariaLabel="Executive presence book navigation"
      hubBasePath="/knowledge/executive-presence"
      hubDisplayName="Executive presence"
      pages={executivePresencePages.map((p) => ({
        slug: p.slug,
        shortLabel: p.shortLabel,
      }))}
    />
  );
}
