import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { SectionCard } from "@/components/SectionCard";
import { mockCaseStudiesPages } from "@/lib/mockCaseStudiesPages";
import { knowledgeSections } from "@/lib/navigation";

const meta = knowledgeSections.find((s) => s.id === "mock-case-studies");

export default function MockCaseStudiesHubPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageIntro
          eyebrow="Knowledge Hub · Book 6"
          title={meta?.label ?? "Mock panels & case studies"}
          description={
            meta?.description ??
            "Executive case studies, pressure simulations, and judgment frameworks."
          }
        />
        <Link
          href="/knowledge"
          className="shrink-0 text-sm font-medium text-amber-400/90 hover:text-amber-200"
        >
          ← All sections
        </Link>
      </div>

      <p className="max-w-2xl text-sm leading-relaxed text-slate-400">
        For <strong className="text-slate-200">behavioural pressure</strong> and
        interview openers, use{" "}
        <strong className="text-slate-200">/knowledge/behavioral-pressure</strong>
        . For a dedicated <strong className="text-slate-200">mock interview</strong>{" "}
        flow in the app, use{" "}
        <strong className="text-slate-200">/mock-interview</strong>. This hub is{" "}
        <strong className="text-slate-200">Book 6</strong> written prep: universal
        response frameworks and high-stakes scenario structures you can rehearse.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {mockCaseStudiesPages.map((p) => (
          <SectionCard
            key={p.slug}
            title={p.title}
            description={p.description}
            href={`/knowledge/mock-case-studies/${p.slug}`}
            meta={p.badge}
          />
        ))}
      </div>
    </div>
  );
}
