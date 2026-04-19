"use client";

import Link from "next/link";
import { PersonalRefinementLayer } from "@/components/PersonalRefinementLayer";
import { ReadRefinePracticeRail } from "@/components/ReadRefinePracticeRail";

type StarStoryPersonalLayerProps = {
  storyId: string;
  storyTitle: string;
  masterPreview: string;
};

/** STAR-specific copy: master reference + personal version + same notes/flags as chapters. */
export function StarStoryPersonalLayer({
  storyId,
  storyTitle,
  masterPreview,
}: StarStoryPersonalLayerProps) {
  const storageKey = `star:${storyId}`;
  const readAnchor = `ecc-read-${storyId}`;
  const refineAnchor = `ecc-refine-${storyId}`;
  return (
    <div className="mt-10 space-y-6 border-t border-slate-800/80 pt-10">
      <ReadRefinePracticeRail
        practiceHref="/mock-interview?difficulty=executive"
        readAnchor={readAnchor}
        refineAnchor={refineAnchor}
      />
      <div
        id={readAnchor}
        className="scroll-mt-24 rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5 sm:p-6"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
          Master version · reference
        </p>
        <h3 className="mt-2 text-lg font-semibold text-slate-100">{storyTitle}</h3>
        <pre className="mt-4 max-h-72 overflow-y-auto whitespace-pre-wrap rounded-xl border border-slate-800/60 bg-slate-950/60 p-4 text-sm leading-relaxed text-slate-400">
          {masterPreview}
        </pre>
        <p className="mt-3 text-xs text-slate-600">
          System STAR blocks above stay your baseline. Your executive version lives in
          the personal layer below—what you will actually say.
        </p>
        <p className="mt-4 text-xs text-slate-600">
          Also rehearse in{" "}
          <Link
            href="/star-vault"
            className="font-medium text-amber-400/90 hover:text-amber-200"
          >
            STAR vault
          </Link>{" "}
          context.
        </p>
      </div>
      <PersonalRefinementLayer
        variant="star"
        storageKey={storageKey}
        refineAnchorId={refineAnchor}
      />
    </div>
  );
}
