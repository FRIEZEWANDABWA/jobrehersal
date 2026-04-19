import { FinancialManagementNav } from "@/components/FinancialManagementNav";
import { hubIndexMetadata } from "@/lib/knowledgeHubMetadata";

export const metadata = hubIndexMetadata("financial-management");

export default function FinancialManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-8">
      <FinancialManagementNav />
      {children}
    </div>
  );
}
