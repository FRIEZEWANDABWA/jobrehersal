import type { StarStory } from "@/lib/types";
import { StarStoryPersonalLayer } from "@/components/StarStoryPersonalLayer";

const blocks: { key: keyof Pick<StarStory, "situation" | "task" | "action" | "result">; label: string }[] = [
  { key: "situation", label: "Situation" },
  { key: "task", label: "Task" },
  { key: "action", label: "Action" },
  { key: "result", label: "Result" },
];

export function StarVaultStory({ story }: { story: StarStory }) {
  const masterPreview = [story.situation, story.task, story.action, story.result].join(
    "\n\n",
  );
  return (
    <article
      id={story.id}
      className="scroll-mt-24 rounded-3xl border border-slate-800/90 bg-gradient-to-br from-slate-900/50 via-slate-950/80 to-slate-950 p-8 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset] sm:p-10 lg:p-12"
    >
      <header className="flex flex-col gap-4 border-b border-slate-800/80 pb-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            {story.title}
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 sm:justify-end">
          {story.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-slate-700/80 bg-slate-900/50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-slate-400"
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {blocks.map(({ key, label }) => {
          const wide = key === "action" || key === "result";
          return (
            <div
              key={key}
              className={`rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5 sm:p-6 ${
                wide ? "sm:col-span-2" : ""
              }`}
            >
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-400/90">
                {label}
              </h3>
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-slate-300 sm:text-[0.9375rem]">
                {story[key]}
              </p>
            </div>
          );
        })}
      </div>

      {story.executiveLesson ? (
        <div className="mt-8 rounded-2xl border border-amber-500/20 bg-amber-500/[0.07] px-5 py-5 sm:px-7 sm:py-7">
          <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-400/95">
            Executive close
          </h3>
          <p className="mt-3 whitespace-pre-line text-base font-medium leading-relaxed text-amber-50/95 sm:text-[1.05rem]">
            {story.executiveLesson}
          </p>
        </div>
      ) : null}

      <StarStoryPersonalLayer
        storyId={story.id}
        storyTitle={story.title}
        masterPreview={masterPreview}
      />
    </article>
  );
}
