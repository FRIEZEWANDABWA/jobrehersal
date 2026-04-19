import type { Metadata } from "next";
import Link from "next/link";
import { SectionCard } from "@/components/SectionCard";
import { PageIntro } from "@/components/PageIntro";
import { companyProfiles } from "@/lib/contentData";

export const metadata: Metadata = {
  title: "Company mode",
  description:
    "Interview lenses by employer—context, themes, pressure angles, and links into the knowledge library.",
};

const prepStrip = [
  { href: "/final-prep", label: "Final prep" },
  { href: "/star-vault", label: "STAR vault" },
  { href: "/mock-interview", label: "Mock interview" },
  { href: "/rapid-revision", label: "Rapid revision" },
] as const;

export default function CompanyModeIndexPage() {
  return (
    <div className="space-y-14 sm:space-y-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageIntro
          eyebrow="Layer 3 · Company mode"
          title="Tailored interview lenses"
          description="Each profile encodes context, themes, how panels apply pressure, and questions to expect. Pick a company, read once, then rehearse aloud—STAR vault for your proof, mock interview for randomness, final prep for the last mile."
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
          Suggested workflow
        </h2>
        <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-amber-50/95 sm:text-base">
          <li>Open a company profile and skim context + pressure angles once.</li>
          <li>
            Map your STAR vault stories to <strong className="text-amber-100">two</strong>{" "}
            themes and <strong className="text-amber-100">one</strong> pressure angle—out
            loud.
          </li>
          <li>
            Run <strong className="text-amber-100">mock interview</strong> with the
            difficulty you expect for that panel.
          </li>
          <li>
            Night before: <strong className="text-amber-100">final prep</strong> only—
            openings, closings, trust questions.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Profiles
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400">
          Replace scaffold notes with your own research—filings, products, regional
          news—then keep the same structure in your head for the interview.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {companyProfiles.map((c) => {
            const blurb = `${c.tagline} ${c.context}`.replace(/\s+/g, " ").trim();
            const description =
              blurb.length > 220 ? `${blurb.slice(0, 217).trim()}…` : blurb;
            return (
              <SectionCard
                key={c.slug}
                title={c.name}
                description={description}
                href={`/company/${c.slug}`}
                meta="Lens"
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
