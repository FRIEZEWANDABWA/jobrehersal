import { SecurityLeadershipNav } from "@/components/SecurityLeadershipNav";
import { hubIndexMetadata } from "@/lib/knowledgeHubMetadata";

export const metadata = hubIndexMetadata("security-leadership");

export default function SecurityLeadershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-8">
      <SecurityLeadershipNav />
      {children}
    </div>
  );
}
