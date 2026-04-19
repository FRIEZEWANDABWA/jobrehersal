import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { questions } from "@/lib/contentData";

export const metadata: Metadata = {
  title: "Rapid revision",
  description:
    "Night-before compressed loops—executive and mid prompts with speak-first elite framing.",
};

const quickLinks = [
  {
    href: "/final-prep",
    title: "Final 24-hour prep",
    body: "War mode: openings, closings, closing-round trust—only what wins the room.",
    layer: "Layer 4",
  },
  {
    href: "/knowledge/executive-answer-vault/chapter-1-killer-openings-closings-vocabulary-boardroom-language",
    title: "Executive answer vault",
    body: "Killer lines, vocabulary upgrades, boardroom phrases—memorize lightly, rehearse heavily.",
    layer: "Book 7",
  },
  {
    href: "/mock-interview",
    title: "Mock interview",
    body: "Speak first, then reveal an elite reference answer—random pressure from the bank.",
    layer: "Practice",
  },
  {
    href: "/knowledge",
    title: "Knowledge library",
    body: "When a loop exposes a gap, go deep by executive function—not in one sitting tonight.",
    layer: "Layer 2",
  },
] as const;

export default function RapidRevisionPage() {
  const executive = questions.filter((q) => q.difficulty === "executive");
  const mid = questions.filter((q) => q.difficulty === "mid");

  return (
    <div className="space-y-14 sm:space-y-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageIntro
          eyebrow="Layer 3 · Rapid revision"
          title="Night-before mode"
          description="Compressed, high-signal loops—not another reading list. Run timed answers out loud, peek elite framing only after you speak, then sleep. Use the links below when you need positioning or war-mode density."
        />
        <Link
          href="/"
          className="shrink-0 text-sm font-medium text-amber-400/90 hover:text-amber-200"
        >
          ← Command Centre
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {quickLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group rounded-3xl border border-slate-800/90 bg-gradient-to-br from-slate-900/50 to-slate-950 p-6 transition hover:border-amber-500/35 sm:p-7"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-500/85">
              {item.layer}
            </p>
            <h2 className="mt-2 text-lg font-semibold text-slate-50 group-hover:text-amber-50">
              {item.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300">
              {item.body}
            </p>
            <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wider text-amber-400/90">
              Open →
            </span>
          </Link>
        ))}
      </div>

      <section className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/[0.07] to-slate-950/80 p-8 sm:p-10">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,158,11,0.12),transparent_55%)]"
          aria-hidden
        />
        <div className="relative">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/90">
            Fifteen-minute loop
          </h2>
          <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-amber-50/95 sm:text-base">
            <li>
              Pick <strong className="text-amber-100">three</strong> executive prompts
              below you have not run this week.
            </li>
            <li>
              Timer on: <strong className="text-amber-100">90 seconds</strong> each, no
              notes after the first 10 seconds—speak in full sentences.
            </li>
            <li>
              After each: one sentence of self-critique—{" "}
              <strong className="text-amber-100">clarity</strong>,{" "}
              <strong className="text-amber-100">evidence</strong>,{" "}
              <strong className="text-amber-100">business outcome</strong>.
            </li>
            <li>
              Only then expand <strong className="text-amber-100">Elite framing</strong>{" "}
              under that prompt to compare structure—not to memorize wording.
            </li>
          </ol>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/90 bg-slate-950/40 p-8 sm:p-10">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Forty-five minute loop
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-400">
          Same discipline as the 15-minute loop, but six executive prompts plus four
          mid-altitude prompts—still spoken, still ninety seconds, still self-critique
          before you open elite framing.
        </p>
        <ul className="mt-6 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
          <li className="rounded-xl border border-slate-800/80 bg-slate-900/30 px-4 py-3">
            6× executive (from list below)
          </li>
          <li className="rounded-xl border border-slate-800/80 bg-slate-900/30 px-4 py-3">
            4× mid — use second list (expand)
          </li>
        </ul>
      </section>

      <section>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-xl font-semibold text-slate-50">
            Executive-altitude prompts ({executive.length})
          </h2>
          <Link
            href="/mock-interview?difficulty=executive"
            className="text-sm font-medium text-amber-400/90 hover:text-amber-200"
          >
            Random mock (executive) →
          </Link>
        </div>
        <p className="mt-2 text-sm text-slate-500">
          Opens mock interview with the{" "}
          <strong className="text-slate-400">Executive</strong> filter pre-selected.
        </p>
        <ul className="mt-8 space-y-5">
          {executive.map((q) => (
            <li
              key={q.id}
              className="rounded-3xl border border-slate-800/90 bg-slate-900/35 px-6 py-6 sm:px-8 sm:py-7"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                {q.role} · {q.department} · {q.difficulty}
              </p>
              <p className="mt-3 text-lg font-medium leading-snug text-slate-100 sm:text-xl">
                {q.prompt}
              </p>
              {q.tags?.length ? (
                <p className="mt-2 text-xs text-slate-500">{q.tags.join(" · ")}</p>
              ) : null}
              {q.eliteAnswer || q.hint ? (
                <details className="mt-5 rounded-2xl border border-slate-800/80 bg-slate-950/50">
                  <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-amber-200/90">
                    Elite framing (after you have spoken)
                  </summary>
                  <div className="space-y-4 border-t border-slate-800/80 px-4 py-4">
                    {q.eliteAnswer ? (
                      <p className="text-sm leading-relaxed text-slate-200">
                        {q.eliteAnswer}
                      </p>
                    ) : null}
                    {q.hint ? (
                      <p className="text-xs leading-relaxed text-slate-500">
                        <span className="font-semibold text-slate-400">Hint: </span>
                        {q.hint}
                      </p>
                    ) : null}
                  </div>
                </details>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <details className="group rounded-3xl border border-slate-800/90 bg-slate-950/30">
          <summary className="cursor-pointer list-none px-6 py-5 text-lg font-semibold text-slate-200 marker:content-none sm:px-8 [&::-webkit-details-marker]:hidden">
            Mid-altitude prompts ({mid.length})
            <span className="ml-2 text-sm font-normal text-slate-500 group-open:hidden">
              — tap to expand
            </span>
          </summary>
          <ul className="space-y-4 border-t border-slate-800/80 px-6 py-6 sm:px-8">
            {mid.map((q) => (
              <li
                key={q.id}
                className="rounded-2xl border border-slate-800/80 bg-slate-900/30 px-5 py-4"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                  {q.role} · {q.department}
                </p>
                <p className="mt-2 font-medium leading-snug text-slate-100">
                  {q.prompt}
                </p>
                {q.eliteAnswer || q.hint ? (
                  <details className="mt-3">
                    <summary className="cursor-pointer text-xs font-semibold text-amber-200/80">
                      Elite framing
                    </summary>
                    <div className="mt-2 space-y-2 text-sm text-slate-300">
                      {q.eliteAnswer ? <p>{q.eliteAnswer}</p> : null}
                      {q.hint ? (
                        <p className="text-xs text-slate-500">
                          <span className="font-semibold text-slate-400">Hint: </span>
                          {q.hint}
                        </p>
                      ) : null}
                    </div>
                  </details>
                ) : null}
              </li>
            ))}
          </ul>
        </details>
      </section>

      <section className="rounded-3xl border border-slate-800/90 bg-slate-900/25 px-6 py-6 sm:px-8">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Logistics (boring but decisive)
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-400">
          <li>Confirm time zone, bridge line, and who owns screen share.</li>
          <li>
            One page of numbers you refuse to forget: availability, incidents, savings,
            headcount, project outcomes.
          </li>
          <li>Protect sleep—fatigue reads as weak judgment in the room.</li>
        </ul>
      </section>
    </div>
  );
}
