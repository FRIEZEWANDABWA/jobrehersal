import { ExecutivePresenceNav } from "@/components/ExecutivePresenceNav";
import { hubIndexMetadata } from "@/lib/knowledgeHubMetadata";

export const metadata = hubIndexMetadata("executive-presence");

export default function ExecutivePresenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-8">
      <ExecutivePresenceNav />
      {children}
    </div>
  );
}
