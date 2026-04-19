import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { SectionCard } from "@/components/SectionCard";
import { infrastructureArchitecturePages } from "@/lib/infrastructureArchitecturePages";
import { knowledgeSections } from "@/lib/navigation";

const meta = knowledgeSections.find(
  (s) => s.id === "infrastructure-architecture",
);

export default function InfrastructureArchitectureHubPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageIntro
          eyebrow="Knowledge Hub · Book 2"
          title={meta?.label ?? "Infrastructure & architecture"}
          description={
            meta?.description ??
            "Executive infrastructure and enterprise architecture leadership."
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
        The <strong className="text-slate-200">Infrastructure</strong> card still
        opens the original single-topic notes at{" "}
        <strong className="text-slate-200">/knowledge/infrastructure</strong>.
        This hub is <strong className="text-slate-200">Book 2</strong> for
        infrastructure and enterprise architecture at executive depth.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {infrastructureArchitecturePages.map((p) => (
          <SectionCard
            key={p.slug}
            title={p.title}
            description={p.description}
            href={`/knowledge/infrastructure-architecture/${p.slug}`}
            meta={p.badge}
          />
        ))}
      </div>
    </div>
  );
}
