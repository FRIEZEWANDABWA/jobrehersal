import { MockCaseStudiesNav } from "@/components/MockCaseStudiesNav";
import { hubIndexMetadata } from "@/lib/knowledgeHubMetadata";

export const metadata = hubIndexMetadata("mock-case-studies");

export default function MockCaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-8">
      <MockCaseStudiesNav />
      {children}
    </div>
  );
}
