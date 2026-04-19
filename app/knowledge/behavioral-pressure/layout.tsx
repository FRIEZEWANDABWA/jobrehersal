import { BehavioralPressureNav } from "@/components/BehavioralPressureNav";
import { hubIndexMetadata } from "@/lib/knowledgeHubMetadata";

export const metadata = hubIndexMetadata("behavioral-pressure");

export default function BehavioralPressureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-8">
      <BehavioralPressureNav />
      {children}
    </div>
  );
}
