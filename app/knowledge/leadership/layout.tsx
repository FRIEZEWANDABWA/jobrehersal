import { LeadershipNav } from "@/components/LeadershipNav";
import { hubIndexMetadata } from "@/lib/knowledgeHubMetadata";

export const metadata = hubIndexMetadata("leadership");

export default function LeadershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-8">
      <LeadershipNav />
      {children}
    </div>
  );
}
