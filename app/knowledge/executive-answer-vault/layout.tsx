import { ExecutiveAnswerVaultNav } from "@/components/ExecutiveAnswerVaultNav";
import { hubIndexMetadata } from "@/lib/knowledgeHubMetadata";

export const metadata = hubIndexMetadata("executive-answer-vault");

export default function ExecutiveAnswerVaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-8">
      <ExecutiveAnswerVaultNav />
      {children}
    </div>
  );
}
