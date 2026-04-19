import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { InterviewReflectionClient } from "@/components/InterviewReflectionClient";

export const metadata: Metadata = {
  title: "Post-interview reflection",
  description:
    "Capture what was asked, surprises, weak answers, and commitments—stored locally until you add cloud backup.",
};

export default function InterviewReflectionPage() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageIntro
          eyebrow="Personal Layer · Memory"
          title="Interview feedback capture"
          description="Top candidates improve because they debrief while the room is still vivid. This is your private log—no AI, no server, same refinement philosophy as chapter notes."
        />
        <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
          <Link
            href="/"
            className="text-sm font-medium text-amber-400/90 hover:text-amber-200"
          >
            ← Command Centre
          </Link>
          <Link
            href="/search"
            className="text-sm font-medium text-slate-400 hover:text-slate-200"
          >
            Search →
          </Link>
        </div>
      </div>

      <InterviewReflectionClient />
    </div>
  );
}
