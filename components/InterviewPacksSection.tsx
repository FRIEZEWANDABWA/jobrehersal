import { interviewPacks } from "@/lib/contentData";

export function InterviewPacksSection() {
  const packs = interviewPacks;
  if (!packs.length) return null;

  return (
    <section
      id="model-packs"
      className="mt-16 scroll-mt-24 space-y-12 border-t border-slate-800/80 pt-16 sm:mt-20 sm:space-y-16 sm:pt-20"
    >
      <div className="max-w-3xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-400/90">
          Model answer packs
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Scripted panels — expand when rehearsing
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          Questions stay compact; answers open on click. Rehearse out loud, then
          refine wording in your Personal Layer on STAR or reflection pages.
        </p>
      </div>

      <div className="space-y-16">
        {packs.map((pack) => (
          <div
            key={pack.id}
            className="rounded-3xl border border-emerald-500/12 bg-gradient-to-br from-emerald-950/[0.18] via-slate-950/90 to-slate-950 p-6 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset] sm:p-8 lg:p-10"
          >
            <header className="border-b border-emerald-500/10 pb-6">
              <h3 className="text-xl font-semibold text-slate-50 sm:text-2xl">
                {pack.title}
              </h3>
              {pack.subtitle ? (
                <p className="mt-2 text-sm text-slate-400">{pack.subtitle}</p>
              ) : null}
            </header>

            <div className="mt-8 space-y-10">
              {pack.sections.map((section) => (
                <div key={section.title}>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300/85">
                    {section.title}
                  </h4>
                  <div className="mt-4 space-y-3">
                    {section.items.map((item) => (
                      <details
                        key={item.id}
                        className="group rounded-2xl border border-slate-800/90 bg-slate-950/50 transition open:border-emerald-500/25 open:bg-slate-950/70"
                      >
                        <summary className="flex cursor-pointer list-none items-start gap-3 px-4 py-4 sm:px-5 sm:py-4 [&::-webkit-details-marker]:hidden">
                          <span
                            className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-emerald-500/25 bg-emerald-500/10 text-xs font-bold text-emerald-200/95 transition-transform duration-200 group-open:rotate-45 group-open:bg-emerald-500/20"
                            aria-hidden
                          >
                            +
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block font-medium leading-snug text-slate-100 group-open:text-emerald-50/95">
                              {item.question}
                            </span>
                            {item.timing ? (
                              <span className="mt-1.5 inline-block rounded-full border border-slate-700/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                                {item.timing}
                              </span>
                            ) : null}
                          </span>
                        </summary>
                        <div className="border-t border-slate-800/80 px-4 pb-5 pt-1 sm:px-5">
                          <div className="rounded-xl bg-slate-900/40 px-4 py-4 sm:px-5 sm:py-5">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-500/90">
                              Model answer
                            </p>
                            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-slate-200 sm:text-[0.9375rem]">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InterviewPacksSection;
