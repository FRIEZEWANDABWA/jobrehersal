import { CybersecurityNav } from "@/components/CybersecurityNav";
import { hubIndexMetadata } from "@/lib/knowledgeHubMetadata";

export const metadata = hubIndexMetadata("cybersecurity");

export default function CybersecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-8">
      <CybersecurityNav />
      {children}
    </div>
  );
}
