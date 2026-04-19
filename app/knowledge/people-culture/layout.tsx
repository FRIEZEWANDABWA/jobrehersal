import { PeopleCultureNav } from "@/components/PeopleCultureNav";
import { hubIndexMetadata } from "@/lib/knowledgeHubMetadata";

export const metadata = hubIndexMetadata("people-culture");

export default function PeopleCultureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-8">
      <PeopleCultureNav />
      {children}
    </div>
  );
}
