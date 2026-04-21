"use client";

import { HubChapterNav } from "@/components/HubChapterNav";
import { cybersecurityPages } from "@/lib/cybersecurityPages";

export function CybersecurityNav() {
  return (
    <HubChapterNav
      ariaLabel="Cybersecurity book navigation"
      hubBasePath="/knowledge/cybersecurity"
      hubDisplayName="Cybersecurity"
      pages={cybersecurityPages.map((p) => ({
        slug: p.slug,
        shortLabel: p.shortLabel,
      }))}
    />
  );
}
