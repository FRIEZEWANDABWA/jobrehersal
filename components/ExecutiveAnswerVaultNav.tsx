"use client";

import { HubChapterNav } from "@/components/HubChapterNav";
import { executiveAnswerVaultPages } from "@/lib/executiveAnswerVaultPages";

export function ExecutiveAnswerVaultNav() {
  return (
    <HubChapterNav
      ariaLabel="Executive answer vault navigation"
      hubBasePath="/knowledge/executive-answer-vault"
      hubDisplayName="Executive answer vault"
      pages={executiveAnswerVaultPages.map((p) => ({
        slug: p.slug,
        shortLabel: p.shortLabel,
      }))}
    />
  );
}
