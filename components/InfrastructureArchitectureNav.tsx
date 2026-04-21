"use client";

import { HubChapterNav } from "@/components/HubChapterNav";
import { infrastructureArchitecturePages } from "@/lib/infrastructureArchitecturePages";

export function InfrastructureArchitectureNav() {
  return (
    <HubChapterNav
      ariaLabel="Infrastructure & architecture book navigation"
      hubBasePath="/knowledge/infrastructure-architecture"
      hubDisplayName="Infrastructure & architecture"
      pages={infrastructureArchitecturePages.map((p) => ({
        slug: p.slug,
        shortLabel: p.shortLabel,
      }))}
    />
  );
}
