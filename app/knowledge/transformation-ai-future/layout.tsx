import { TransformationAiFutureNav } from "@/components/TransformationAiFutureNav";
import { hubIndexMetadata } from "@/lib/knowledgeHubMetadata";

export const metadata = hubIndexMetadata("transformation-ai-future");

export default function TransformationAiFutureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-8">
      <TransformationAiFutureNav />
      {children}
    </div>
  );
}
