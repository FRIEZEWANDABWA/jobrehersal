import type { Metadata } from "next";
import { knowledgeSections } from "@/lib/navigation";
import type { KnowledgeSection } from "@/lib/types";

/** Index page metadata for multi-page knowledge hubs and markdown hubs. */
export function hubIndexMetadata(sectionId: KnowledgeSection): Metadata {
  const m = knowledgeSections.find((s) => s.id === sectionId);
  return {
    title: m?.label ?? sectionId,
    description:
      m?.description ??
      "Executive-grade knowledge hub—chapters, Q&A, and playbooks.",
  };
}
