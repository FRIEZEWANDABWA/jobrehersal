"use client";

import { HubChapterNav } from "@/components/HubChapterNav";
import { securityLeadershipPages } from "@/lib/securityLeadershipPages";

export function SecurityLeadershipNav() {
  return (
    <HubChapterNav
      ariaLabel="Security leadership book navigation"
      hubBasePath="/knowledge/security-leadership"
      hubDisplayName="Security leadership"
      pages={securityLeadershipPages.map((p) => ({
        slug: p.slug,
        shortLabel: p.shortLabel,
      }))}
    />
  );
}
