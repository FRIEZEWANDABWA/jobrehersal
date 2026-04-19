import { FullMockInterviewPanelNav } from "@/components/FullMockInterviewPanelNav";
import { hubIndexMetadata } from "@/lib/knowledgeHubMetadata";

export const metadata = hubIndexMetadata("full-mock-interview-panel");

export default function FullMockInterviewPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-8">
      <FullMockInterviewPanelNav />
      {children}
    </div>
  );
}
