import { InfrastructureArchitectureNav } from "@/components/InfrastructureArchitectureNav";
import { hubIndexMetadata } from "@/lib/knowledgeHubMetadata";

export const metadata = hubIndexMetadata("infrastructure-architecture");

export default function InfrastructureArchitectureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-8">
      <InfrastructureArchitectureNav />
      {children}
    </div>
  );
}
