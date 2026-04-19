import { OperationsNav } from "@/components/OperationsNav";
import { hubIndexMetadata } from "@/lib/knowledgeHubMetadata";

export const metadata = hubIndexMetadata("operations");

export default function OperationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-8">
      <OperationsNav />
      {children}
    </div>
  );
}
