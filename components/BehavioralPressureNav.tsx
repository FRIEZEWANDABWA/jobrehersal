"use client";

import { HubChapterNav } from "@/components/HubChapterNav";
import { behavioralPressurePages } from "@/lib/behavioralPressurePages";

export function BehavioralPressureNav() {
  return (
    <HubChapterNav
      ariaLabel="Behavioural & pressure book navigation"
      hubBasePath="/knowledge/behavioral-pressure"
      hubDisplayName="Behavioural & pressure"
      pages={behavioralPressurePages.map((p) => ({
        slug: p.slug,
        shortLabel: p.shortLabel,
      }))}
    />
  );
}
