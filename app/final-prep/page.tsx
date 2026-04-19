import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { companyProfiles } from "@/lib/contentData";

export const metadata: Metadata = {
  title: "Final prep · War mode",
  description:
    "Last 24 hours: openings, closings, behavioural masters, mock panel closings, STAR rehearsal, executive mock, and company lenses.",
};

const prepStrip = [
  { href: "/star-vault", label: "STAR vault" },
  { href: "/mock-interview?difficulty=executive", label: "Mock · executive" },
  { href: "/rapid-revision", label: "Rapid revision" },
  { href: "/company", label: "Company mode" },
  { href: "/knowledge", label: "Knowledge library" },
] as const;

const ladder = [
  {
    title: "Killer openings, closings & vocabulary",
    href: "/knowledge/executive-answer-vault/chapter-1-killer-openings-closings-vocabulary-boardroom-language",
    hint: "Book 7 · positioning under fire—read once, speak ten times",
  },
  {
    title: "Behavioural pressure — master openers",
    href: "/knowledge/behavioral-pressure/master-tell-us-about-yourself",
    hint: "Tell us about yourself — then pair with “why you” next",
    secondary: {
      label: "Master · why should we hire you",
      href: "/knowledge/behavioral-pressure/master-why-should-we-hire-you",
    },
  },
  {
    title: "Full mock panel — closing & trust (Q36–50)",
    href: "/knowledge/full-mock-interview-panel/mock-panel-section-6-final-pressure-closing-offers",
    hint: "Final round answers + closing truth",
  },
  {
    title: "STAR vault — rehearse proof, do not rewrite",
    href: "/star-vault",
    hint: "Two stories aloud, mapped to themes you expect tomorrow",
  },
  {
    title: "Mock interview — executive band",
    href: "/mock-interview?difficulty=executive",
    hint: "Random pressure; speak before you reveal elite framing",
  },
  {
    title: "Rapid revision — last loops",
    href: "/rapid-revision",
    hint: "Night-before rhythm if you still have energy",
  },
] as const;

const extraLinks = [
  {
    title: "Full mock panel — start",
    href: "/knowledge/full-mock-interview-panel/mock-panel-introduction",
    hint: "Reset the room in your head if you need structure",
  },
  {
    title: "Executive presence — boardroom authority",
    href: "/knowledge/executive-presence/chapter-1-cio-communication-boardroom-authority",
    hint: "If voice and gravitas feel thin tonight",
  },
  {
    title: "Interview bank",
    href: "/interview-bank",
    hint: "Filtered drill-down from the sidebar path",
  },
] as const;

export default function FinalPrepPage() {
  return (
    <div className="space-y-12 sm:space-y-14">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageIntro
          eyebrow="Layer 4 · War mode"
          title="Final 24-hour prep"
          description="No overload—only what wins the room. Skim once, rehearse aloud. If you know the company, hit the lens first so openings and closings land in their language. Sleep beats one more chapter."
        />
        <Link
          href="/"
          className="shrink-0 text-sm font-medium text-amber-400/90 hover:text-amber-200"
        >
          ← Command Centre
        </Link>
      </div>

      <div className="flex flex-wrap gap-2 rounded-3xl border border-slate-800/90 bg-slate-950/40 px-5 py-4 sm:px-6">
        <span className="w-full text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 sm:w-auto sm:pr-4">
          Prep strip
        </span>
        {prepStrip.map((item, i) => (
          <span key={item.href} className="flex items-center gap-2 text-sm">
            {i > 0 ? (
              <span className="text-slate-600" aria-hidden>
                ·
              </span>
            ) : null}
            <Link
              href={item.href}
              className="font-medium text-amber-400/90 hover:text-amber-200"
            >
              {item.label}
            </Link>
          </span>
        ))}
      </div>

      <section className="relative overflow-hidden rounded-3xl border border-amber-500/15 bg-gradient-to-br from-amber-500/[0.06] to-slate-950/80 p-8 sm:p-10">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/90">
          War mode protocol
        </h2>
        <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-amber-50/95 sm:text-base">
          <li>
            If you have a target employer, open that lens below—context and pressure
            angles first.
          </li>
          <li>
            Run the ladder in order: openings → behavioural masters → closing-round
            panel → STAR → mock → rapid only if you are still sharp.
          </li>
          <li>
            Speak out loud every time. If you type or read silently, it does not count
            tonight.
          </li>
          <li>
            Stop when answers feel boringly consistent—that is the signal to rest.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Company lens
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400">
          Same fundamentals; different panel language. One skim each—then return to the
          ladder.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link
            href="/company"
            className="rounded-full border border-slate-700/90 bg-slate-900/50 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-amber-500/40 hover:text-amber-100"
          >
            All profiles
          </Link>
          {companyProfiles.map((c) => (
            <Link
              key={c.slug}
              href={`/company/${c.slug}`}
              className="rounded-full border border-slate-800/90 bg-slate-950/60 px-4 py-2 text-sm font-medium text-amber-400/90 transition hover:border-amber-500/35 hover:text-amber-200"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Tonight&apos;s ladder
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400">
          Ordered for signal, not completeness. Skip rapid revision if you are already
          hoarse.
        </p>
        <ol className="mt-8 space-y-4">
          {ladder.map((item, i) => (
            <li key={item.href}>
              <div className="rounded-2xl border border-slate-800/90 bg-slate-900/35 p-6 transition hover:border-amber-500/35 hover:bg-slate-900/55">
                <span className="text-xs font-semibold text-amber-500/90">
                  Step {i + 1}
                </span>
                <Link href={item.href} className="group block">
                  <p className="mt-2 text-lg font-semibold text-slate-50 group-hover:text-amber-50">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">{item.hint}</p>
                </Link>
                {"secondary" in item && item.secondary ? (
                  <p className="mt-4 text-sm">
                    <Link
                      href={item.secondary.href}
                      className="font-medium text-amber-400/90 hover:text-amber-200"
                    >
                      {item.secondary.label}
                    </Link>
                    <span className="text-slate-600"> — </span>
                    <span className="text-slate-500">pair after step 2 opener</span>
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Extra ammo
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400">
          Only if you have time after the ladder—otherwise ignore without guilt.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {extraLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-slate-800/90 bg-slate-950/40 p-5 transition hover:border-amber-500/30 hover:bg-slate-900/45"
            >
              <p className="text-sm font-semibold text-slate-100">{item.title}</p>
              <p className="mt-2 text-xs text-slate-500">{item.hint}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
